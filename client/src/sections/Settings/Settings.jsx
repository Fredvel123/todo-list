import React from "react";
import { useState } from "react";
import { editpasswd, updateAvatar } from "../../config/endpoints";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import { SettingsStyles } from "./SettingsStyles";
import useToken from "../../hooks/useToken";
import axios from "axios";
import useUpdateInfoInLocalStorage from "../../hooks/useUpdateInfoInLocalStorage";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import CardNotification from "../../components/CardNotification/CardNotification";
import Input from "../../components/Input/Input";

function Settings() {
  const { token } = useToken();
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
        setCard({
          message: res.data.message,
          status: true,
          callback: () => window.location.reload(),
        });
        updateUserInfo();
      })
      .catch((res) => {
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

  return (
    <SettingsStyles>
      <h2>Settings Account</h2>
      {(user.data !== null) & !user.err ? (
        <div className="profile">
          <img src={user.data.avatar} className="profile__img" alt="avatar" />
          <h2>{user.data.full_name}</h2>
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
          <button>send</button>
        </form>
      </div>

      <div className="delete-user">
        <h2>delete user</h2>
      </div>

      <CardNotification
        state={card}
        setState={setCard}
        desc="you have updated your avatar"
        btn="ok"
      />
    </SettingsStyles>
  );
}

export default Settings;
