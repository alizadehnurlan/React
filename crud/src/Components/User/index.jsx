import React from "react";
import { Link } from "react-router-dom";

const User = ({name,id}) => {
  return <Link to={`/user/${id}`} className="user">{name}</Link>;
};

export default User;
