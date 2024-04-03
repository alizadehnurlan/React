import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  return (
    <div className="container">
      <form>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={({ target: { value } }) => setName(value)}
        />
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={({ target: { value } }) => setUsername(value)}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default AddUser;
