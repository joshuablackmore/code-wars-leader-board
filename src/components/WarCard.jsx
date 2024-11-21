import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const WarCard = (props) => {
  return (
    <div className="h-[400px]">
      {props.index === 1 ? (
        <h1 className=" font-extrabold   text-2xl text-start ">
          {" "}
          🏆 Leader!!!
        </h1>
      ) : (
        <h1 className="font-bold text-start ">Possition: {props.index}</h1>
      )}

      <div className="flex justify-center items-center  h-[350px] mt-12">
        <Card className="w-96  bg-[rgb(49,51,56)] ">
          <CardHeader floated={false} className="bg-[rgb(49,51,56)]">
            <img
              src={props.image}
              alt="profile-picture"
              className=" opacity-30"
            />
          </CardHeader>
          <CardBody className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-around ">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-extrabold text-3xl"
            >
              {props.username}
            </Typography>
            <div className="flex flex-col  h-48 justify-around">
              <Typography color="blue-gray" className="text-2xl" textGradient>
                🏅 Total Honor:{" "}
                <span className="text-green-400">{props.honor}</span>
              </Typography>
              <Typography color="blue-gray" className="font-large" textGradient>
                ✅ Kata Completed:{" "}
                <span className="text-yellow-400">{props.kataComplete}</span>
              </Typography>
              <Typography color="blue-gray" className="font-large" textGradient>
                💻 Languages:{" "}
                <span className="text-blue-400">{props.languages}</span>
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default WarCard;
