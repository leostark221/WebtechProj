import React from "react";
import Header from "../../components/header";
import Homebanner from "../../components/Homebanner";
import RecipeesMap from "../../components/RecipeesMap";

export default function Home() {
  return (
    <div>
      <Header />
      <Homebanner />
      <div className=" flex justify-center mt-20 mb-20">
        <div className="flex flex-col text-center w-40p">
          <div className="text-5xl font-bold">Simple and tasty recipes</div>
          <div className=" text-lg opacity-60 pt-10 ">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </div>
        </div>
      </div>
      <RecipeesMap />
    </div>
  );
}
