import { useState } from "react";
import { useEffect } from "react";

const ShowUsers = () => {

//request
    const getUsers = async () => {
        const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users");
        
        const users = await fetchUsers.json();
        return users;
    };
    
    const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>{user.email}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowUsers;