import React from "react";
import Images from "../../services/images";

export default function () {
  return (
    <div>
      <div className="flex p-10 items-center ">
        <div className=" w-20p flex justify-center ">
          <img src={Images.logo} alt="" className="w-40p cursor-pointer" />
        </div>
        <div className="flex w-60p justify-center ">
          <div className="flex space-x-10   font-medium text-lg ">
            <div className="cursor-pointer hover:font-bold"> Home </div>
            <div className="cursor-pointer hover:font-bold"> Recipes </div>
            <div className="cursor-pointer hover:font-bold"> Contact </div>
            <div className="cursor-pointer hover:font-bold"> About us </div>
          </div>
        </div>
        <div className=" w-20p flex justify-center">
          <img src={Images.cart} alt="" className="w-10p cursor-pointer" />
        </div>
      </div>
      <div className="border-b pt-5"></div>
    </div>
  );
}
