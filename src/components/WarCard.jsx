import React from "react";

const WarCard = (props) => {
  return (
    <>
      {props.index === 1 ? (
        <h1 className=" font-extrabold decoration-slate-300 underline text-start ml-2 mt-2">
          Winner!!
        </h1>
      ) : (
        <h1 className="font-bold text-start ml-2 mt-2">
          Possition: {props.index}
        </h1>
      )}
      <div className="bg-slate-700/50 h-52 border border-black rounded-lg p-4 m-2 flex flex-col">
        <h1 className="text-3xl font-bold underline text-orange-600 justify-self-start">
          {props.username}
        </h1>
        <div className="mt-10 flex flex-col justify-center border border-white/20 rounded-lg items-center leading-8">
          <h3>Honor : {props.honor}</h3>
          <h3>Total Kata Complete: {props.kataComplete}</h3>
          <h3>Total Languages Trained: {props.languages}</h3>
        </div>
      </div>
    </>
  );
};

export default WarCard;
