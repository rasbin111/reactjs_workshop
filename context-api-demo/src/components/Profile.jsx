import React from "react";
import { useContext } from "react";

import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const handleClick = () => {
    setUser({ username: "rasbin", password: "password" });
  };

  return <div onClick={handleClick}>Profile: {user.username} </div>;
};

export default Profile;
