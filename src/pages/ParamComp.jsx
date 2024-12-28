import React from "react";
import { useParams } from "react-router-dom";

const ParamComp = () => {
  const { id } = useParams();
  return (
    <div className="w-full h-[95vh] bg-gray-700 py-8 px-8 text-white flex flex-col gap-5">
      <h1 className="text-3xl font-medium ">Parameter Component Page</h1>
      <span className="">Student ID: {id}</span>
    </div>
  );
};

export default ParamComp;
