import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const WarCardSkeleton = (props) => {
  return (
    <div className="h-[700px] flex flex-col justify-center items-center ">
      {props.index === 1 ? (
        <h1 className=" font-extrabold text-2xl text-start pb-24 z-50 "> </h1>
      ) : (
        <h1 className="font-bold text-start z-50 pb-24 "></h1>
      )}

      <div className="flex justify-center items-center  h-[350px] mt-12">
        <Card className="w-96  bg-[rgb(49,51,56)] ">
          <CardHeader floated={true} className="bg-[rgb(49,51,56)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <circle
                fill="#E4C6E4"
                stroke="#E4C6E4"
                stroke-width="15"
                r="15"
                cx="40"
                cy="100"
              >
                <animate
                  attributeName="opacity"
                  calcMode="spline"
                  dur="2"
                  values="1;0;1;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.4"
                ></animate>
              </circle>
              <circle
                fill="#E4C6E4"
                stroke="#E4C6E4"
                stroke-width="15"
                r="15"
                cx="100"
                cy="100"
              >
                <animate
                  attributeName="opacity"
                  calcMode="spline"
                  dur="2"
                  values="1;0;1;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.2"
                ></animate>
              </circle>
              <circle
                fill="#E4C6E4"
                stroke="#E4C6E4"
                stroke-width="15"
                r="15"
                cx="160"
                cy="100"
              >
                <animate
                  attributeName="opacity"
                  calcMode="spline"
                  dur="2"
                  values="1;0;1;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="0"
                ></animate>
              </circle>
            </svg>
          </CardHeader>
          <CardBody className="top-0 bottom-0 left-0 right-0 flex flex-col justify-around ">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-extrabold text-3xl"
            ></Typography>
            <div className="flex flex-col  h-48 justify-around">
              <Typography
                color="blue-gray"
                className="text-2xl"
                textGradient
              ></Typography>
              <Typography
                color="blue-gray"
                className="font-large"
                textGradient
              ></Typography>
              <Typography
                color="blue-gray"
                className="font-large"
                textGradient
              ></Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default WarCardSkeleton;
