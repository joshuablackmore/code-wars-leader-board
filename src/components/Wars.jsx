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
    <div className="flex flex-col gap-12 max-w-[800px]">
      {userData.length > 0
        ? userData
            .sort((a, b) => b.honor - a.honor)
            .map((user, index) => (
              <WarCard
                index={index + 1}
                username={user.username}
                honor={user.honor}
                kataComplete={user.codeChallenges.totalCompleted}
                languages={Object.keys(user.ranks.languages).length}
              />
            ))
        : null}
    </div>
  );
};

export default Wars;
