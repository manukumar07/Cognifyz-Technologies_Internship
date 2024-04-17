import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  const UserData = ({ users }) => {
    return (
      <>
        {users.map((curUser) => {
          const { id, name, email, address } = curUser;
          const { street, city, zipcode } = address;

          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>
                {street}, {city}, {zipcode}
              </td>
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users} />
      </tbody>
    </table>
  );
};

export default FetchData;
