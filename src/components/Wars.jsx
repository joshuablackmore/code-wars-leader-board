import React, { useEffect, useState } from "react";
import WarCard from "./WarCard";

const Wars = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setTimeout(getStats, 1000);
  }, []);

  const users = ["SquashB", "cezary", "john"];

  const getStats = async () => {
    try {
      const responses = await Promise.all(
        users.map(async (user) => {
          const response = await fetch(
            `https://www.codewars.com/api/v1/users/${user}`
          );
          return response.json();
        })
      );
      setUserData(responses);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div>
      {userData.length > 0
        ? userData.map((user) => <WarCard username={user.username} />)
        : null}
    </div>
  );
};

export default Wars;
