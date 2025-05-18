import React from "react";
import Data from "./Data";
import { Baklawa } from "../mydata";
import { kunafa } from "../kunafadata";
import Kunafa from "./Kunafa";


const Body = () => {

  return (
    <>
   
      <h1 className="bg-[#efdcac] text-center p-3 my-3 min-w-fit rounded-md font-mono text-4xl font-bold border-2 border-[#92b423] hover:text-[#92b423] transition-all duration-1000">
        Featured Baklawa
      </h1>
      <div className="bg-[#92b423] h-auto w-auto grid grid-cols-4 gap-4 m-2">
        {Baklawa.map((item) => (
          <Data key={item.title} {...item} />
        ))}
      </div>
      <h1 className="bg-[#efdcac] text-center p-3 my-3 min-w-fit rounded-md font-mono text-4xl font-bold border-2 border-[#92b423] hover:text-[#92b423] transition-all duration-1000">
        Featured Kunafa
      </h1>
      <div className="bg-[#92b423] h-auto w-auto grid grid-cols-4 gap-4 m-2">
        {kunafa.map((item) => (
          <Kunafa key={item.title} {...item} />
        ))}
      </div>
    </>
  );
};

export default Body;
