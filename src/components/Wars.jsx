import React, { useEffect, useState } from "react";
import WarCard from "./WarCard";

const Wars = () => {
  const [userData, setUserData] = useState([]);
  const userImages = {
    SquashB: "src/images/SquashB.png",
    "K-B13": "src/images/Cezary.png",
    kelly: "src/images/Kelly.png",
    jamiepod: "src/images/Jamie.png",
  };

  useEffect(() => {
    setTimeout(getStats, 1000);
  }, []);

  const users = ["SquashB", "K-B13", "jamiepod"];

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
    <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 lg:grid-rows-2 gap-24 ">
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
                image={userImages[user.username]}
              />
            ))
        : null}
    </div>
  );
};

export default Wars;
