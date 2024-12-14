import React, { useState } from "react";

export function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (username.trim() === "" || password.trim() === "") {
      alert("Both username and password are required!");
      return;
    }

   
    setUsers([...users, { username, password }]);
    setUsername(""); 
    setPassword("");
  };

  
  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Authentication Form</h3>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      
      {users.length > 0 && (
        <div>
          <h4>Users List</h4>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                username:{user.username} /password: {user.password}
                <button onClick={() => deleteUser(index)} style={{ marginLeft: "10px" }}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
