import React from "react";
import { useState } from "react";
import { updateAvatar } from "../../config/endpoints";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import { SettingsStyles } from "./SettingsStyles";
import useToken from "../../hooks/useToken";
import axios from "axios";
import useUpdateInfoInLocalStorage from "../../hooks/useUpdateInfoInLocalStorage";

function Settings() {
  const { token } = useToken();
  const updateUserInfo = useUpdateInfoInLocalStorage();
  const user = useGetUserInfo();
  const [file, setFile] = useState({ image: "", response: "" });

  const handleImage = (e) => {
    setFile({ ...file, image: e.target.files[0] });
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
        setFile({ ...file, response: res.data });
        updateUserInfo();
      })
      .catch((res) => {
        console.log(res);
        setFile({ response: res.data.message });
      });
  };

  return (
    <SettingsStyles>
      <h2>Settings Account</h2>
      {(user.data !== null) & !user.err ? (
        <div className="profile">
          <img src={user.data.avatar} className="profile__img" alt="avatar" />
          <h2>{user.data.full_name}</h2>
          <input type="file" onChange={handleImage} />
          <button onClick={updateAvatarImage} className="profile__button">
            Update Avatar
          </button>
        </div>
      ) : (
        <p>no info</p>
      )}
      <button onClick={() => console.log(file)}>fsdf</button>
    </SettingsStyles>
  );
}

export default Settings;
