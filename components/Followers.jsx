"use client";

import { useEffect, useState } from "react";
import Follow from "./Follow";

const Followers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://randomuser.me/api/?results=5&inc=name,gender,picture"
      );
      const data = await res.json();
      console.log(data);
      setUsers(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-10">
      <h1 className="font-bold mb-5">Who to follow</h1>
      {users.map((user) => (
        <div key={user.name.first + user.name.last}>
          <Follow
            name={`${user.name.first} ${user.name.last}`}
            img={user.picture.large}
          />
        </div>
      ))}
    </div>
  );
};

export default Followers;
