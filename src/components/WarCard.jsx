import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const WarCard = (props) => {
  return (
    <div className="h-[700px] flex flex-col justify-center items-center ">
      {props.index === 1 ? (
        <h1 className=" font-extrabold text-2xl text-start pb-24 z-50 ">
          {" "}
          🏆 Leader!!!
        </h1>
      ) : (
        <h1 className="font-bold text-start z-50 pb-24 ">
          Possition: {props.index}
        </h1>
      )}

      <div className="flex justify-center items-center  h-[350px] mt-12">
        <Card className="w-96  bg-[rgb(49,51,56)] ">
          <CardHeader floated={true} className="bg-[rgb(49,51,56)]">
            <img
              src={props.image}
              alt="profile-picture"
              className=" opacity-50"
            />
          </CardHeader>
          <CardBody className=" border border-slate-600 top-0 bottom-0 left-0 right-0 flex flex-col justify-around ">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-extrabold text-3xl"
            >
              {props.username}
            </Typography>
            <div className="flex flex-col  h-48 justify-around">
              <Typography color="blue-gray" className="text-2xl" textGradient>
                🏅 Total Honor: {props.honor}
              </Typography>
              <Typography color="blue-gray" className="font-large" textGradient>
                ✅ Kata Completed: {props.kataComplete}
              </Typography>
              <Typography color="blue-gray" className="font-large" textGradient>
                💻 Languages: {props.languages}
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default WarCard;
