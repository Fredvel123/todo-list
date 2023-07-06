import React from "react";
import { useState } from "react";
import { deleteUser, editpasswd, updateAvatar } from "../../config/endpoints";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import { SettingsStyles } from "./SettingsStyles";
import useToken from "../../hooks/useToken";
import axios from "axios";
import useUpdateInfoInLocalStorage from "../../hooks/useUpdateInfoInLocalStorage";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import CardNotification from "../../components/CardNotification/CardNotification";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

function Settings() {
  const { token, setTokenHook } = useToken();
  const { colors, fonts } = useTheme();
  const navigate = useNavigate();
  const updateUserInfo = useUpdateInfoInLocalStorage();
  const user = useGetUserInfo();
  const [file, setFile] = useState({
    image: "",
    response: "",
    status: false,
    url: "",
  });
  const [card, setCard] = useState({
    message: "",
    status: false,
    callback: null,
  });

  const [password, setPassword] = useState({ value: "" });
  const [newPassword, setNewPassword] = useState({ value: "" });
  const [repeatePassword, setRepeatePassword] = useState({ value: "" });

  const handleImage = (e) => {
    const img = e.target.files[0];
    setFile({
      ...file,
      image: img,
      status: true,
      url: URL.createObjectURL(img),
    });
  };
  const updateAvatarImage = async () => {
    const formData = new FormData();
    formData.append("avatar", file.image);
    console.log(file);
    if (file.image.length < 1) {
      setFile({ ...file, response: "please add a new image" });
      return;
    }
    axios
      .post(updateAvatar, formData, {
        headers: {
          "Content-type": "multipart-form/data",
          "access-token": token.token,
        },
      })
      .then((res) => {
        setFile({ ...file, response: res.data, status: false });
        console.log(res.data);
        setCard({
          message: res.data.message,
          status: true,
          callback: () => window.location.reload(),
        });
        updateUserInfo();
      })
      .catch((res) => {
        console.log(res.data);
        setFile({ response: res.data.message, status: false });
      });
  };

  const sendNewPassword = async () => {
    try {
      const post = await fetch(editpasswd, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "access-token": token.token,
        },
        body: JSON.stringify({
          password: password.value,
          new_password: newPassword.value,
          repeate_new_password: repeatePassword.value,
        }),
      });
      const res = await post.json();
      setCard({ status: true, message: res.message });
    } catch (err) {
      console.error(err);
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    sendNewPassword();
  };

  const removeUser = async () => {
    try {
      const post = await fetch(deleteUser, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "access-token": token.token,
        },
        body: JSON.stringify({ password: password.value }),
      });
      const res = await post.json();
      if (!res.removed) {
        setCard({ ...card, message: res.message, status: true });
        return;
      }
      setTokenHook({ auth: false, token: "", user: {} });
      navigate("/auth/signup");
    } catch (err) {
      console.error(err);
    }
  };

  const askToRemoveAccount = () => {
    setCard({
      status: true,
      message: "are you sure you want to delete your account?",
      callback: removeUser,
    });
  };

  return (
    <SettingsStyles color={colors} font={fonts}>
      <h2>Settings Account</h2>
      {(user.data !== null) & !user.err ? (
        <div className="profile">
          <img src={user.data.avatar} className="profile__img" alt="avatar" />
          <p>{user.data.full_name}</p>
          <div className="profile__input">
            <label htmlFor="input">
              <ArrowUpTrayIcon className="profile__icon" />
            </label>
            <input
              type="file"
              id="input"
              accept="image/*"
              onChange={handleImage}
            />
          </div>
        </div>
      ) : (
        <p>no info</p>
      )}
      {file.status ? (
        <div className="profile__update">
          <img src={file.url} alt="" width={250} />
          <button onClick={updateAvatarImage} className="profile__button">
            Update Avatar
          </button>
        </div>
      ) : null}

      <div className="password">
        <h2>change password</h2>
        <form onSubmit={handlerSubmit} action="">
          <Input
            title="password"
            type="password"
            placeh="Enter your current password"
            state={password}
            setState={setPassword}
          />
          <Input
            title="new password"
            type="password"
            placeh="Enter your new password here"
            state={newPassword}
            setState={setNewPassword}
          />
          <Input
            title="repeate your new password"
            type="password"
            placeh="Enter your new password here"
            state={repeatePassword}
            setState={setRepeatePassword}
          />
          <button className="settings__button">Update Password</button>
        </form>
      </div>

      <div className="delete-user">
        <h2>delete user</h2>
        <Input
          title="Delete User"
          type="password"
          placeh="Enter your password to delete the user"
          state={password}
          setState={setPassword}
        />
        <button className="settings__button" onClick={askToRemoveAccount}>
          Remove User
        </button>
      </div>

      <CardNotification state={card} setState={setCard} btn="ok" />
    </SettingsStyles>
  );
}

export default Settings;
