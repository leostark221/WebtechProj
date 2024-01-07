import React from "react";
import Images from "../../services/images";

export default function Homebanner() {
  return (
    <div className="flex justify-center mt-10 ml-10">
      <div className="bg-indigoblue md:w-60p w-full round rounded-l-3xl">
        <div className="p-5 md:ml-20 md:mt-20">
          <div className="bg-white p-6 items-center font-bold w-25p h-10 round rounded-2xl text-center mb-2 flex cursor-pointer hover:bg-blue-500">
            <img src={Images.scroll} alt="" className="w-24p " />
            <div className="pl-1">Hot Recipes</div>
          </div>
          <div className="text-7xl font-bold w-70p  pt-14 pb-5  ">
            Spicy delicious chicken wings
          </div>
          <div className="w-60p pt-8 opacity-70 text-lg">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </div>
          <div className="p-5 flex pt-10 ">
            <div className="flex items-center bg-buttoncolor justify-center w-25p h-12  rounded-3xl cursor-pointer hover:opacity-50 ">
              <img src={Images.clock} alt="" className="w-18p " />
              <div className="pl-2 text-lg">30 Minutes</div>
            </div>
            <div className="flex items-center ml-10 bg-buttoncolor w-25p h-12  justify-center rounded-3xl cursor-pointer hover:opacity-50 ">
              <img src={Images.ForkKnife} alt="" className="w-20p pl-2" />
              <div className="pl-2  text-lg">Chicken</div>
            </div>
          </div>
          <div className="w-70p flex justify-center pt-20">
            <div className="bg-black w-50p flex justify-center  font-semibold items-center round rounded-3xl h-16 text-white cursor-pointer ">
              View Recipes
              <img src={Images.Play} alt="" className="ml-3 w-13p" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={Images.food} alt="" className="w-90p " />
      </div>
    </div>
  );
}
