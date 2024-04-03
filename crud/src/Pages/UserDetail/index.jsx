import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const url = "https://jsonplaceholder.typicode.com/users/";

const UserDetail = () => {
  const { id } = useParams();
  const[user,setUser]=useState({})

useEffect(()=>{
    axios(url+id).then(({data})=>{
        setUser(data)
      })
    
},[])
const {name,username,email}=user
  return <div className="container">
   <div className="user" style={{width:"100%"}}>
   <h2>{name}</h2>
    <h2>{username}</h2>
    <h2>{email}</h2>
   </div>
  </div>;
};

export default UserDetail;
