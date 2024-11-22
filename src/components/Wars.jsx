import React, { useEffect, useState } from "react";
import WarCard from "./WarCard";
import WarCardSkeleton from "./WarCardSkeleton";

const Wars = () => {
  const [userData, setUserData] = useState([]);
  const [testLoader, setTestLoader] = useState(["one", "two", "three", "four"]);
  const userImages = {
    SquashB: "https://ca.slack-edge.com/T03ALA7H4-U07MNHU3EBA-ebcc8c645459-512",
    "K-B13": "https://ca.slack-edge.com/T03ALA7H4-U07LWTPJK37-3714da68ba5d-512",
    KelH: "https://ca.slack-edge.com/T03ALA7H4-U07M28Z6QJ0-ebe860184e73-512",
    jamiepod:
      "https://ca.slack-edge.com/T03ALA7H4-U07MNHVHJ72-54662f731372-512",
  };

  useEffect(() => {
    setTimeout(getStats, 1000);
  }, []);

  const users = ["SquashB", "K-B13", "jamiepod", "KelH"];

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
        : testLoader.map((user) => <WarCardSkeleton />)}
    </div>
  );
};

export default Wars;
