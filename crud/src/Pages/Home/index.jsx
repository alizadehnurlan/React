import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "../../Components/User";

const url = "https://jsonplaceholder.typicode.com/users";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="users">
        {users.map(({ id, name }) => {
          return <User key={id} name={name} id={id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
