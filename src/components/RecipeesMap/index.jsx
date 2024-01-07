import React from "react";
import Images from "../../services/images";

export default function RecipeesMap() {
  const foodcards = [
    {
      images: Images.burger,
      tile: " Big and Juicy Wagyu Beef Cheeseburger",
      clock: Images.clock,
      Clocktext: "30 minutes",
      ForkKnife: Images.ForkKnife,
      ForkKnifeText: "Snack",
    },
    {
      images: Images.bananapancake,
      tile: " Big and Juicy Wagyu Beef Cheeseburger",
      clock: Images.clock,
      Clocktext: "30 minutes",
      ForkKnife: Images.ForkKnife,
      ForkKnifeText: "Snack",
    },
    {
      images: Images.dishfood,
      tile: " Big and Juicy Wagyu Beef Cheeseburger",
      clock: Images.clock,
      Clocktext: "30 minutes",
      ForkKnife: Images.ForkKnife,
      ForkKnifeText: "Snack",
    },
    {
      images: Images.kebab,
      tile: " Big and Juicy Wagyu Beef Cheeseburger",
      clock: Images.clock,
      Clocktext: "30 minutes",
      ForkKnife: Images.ForkKnife,
      ForkKnifeText: "Snack",
    },
    {
      images: Images.pancakes,
      tile: " Big and Juicy Wagyu Beef Cheeseburger",
      clock: Images.clock,
      Clocktext: "30 minutes",
      ForkKnife: Images.ForkKnife,
      ForkKnifeText: "Snack",
    },
    {
      images: Images.bananapancake,
      tile: " Big and Juicy Wagyu Beef Cheeseburger",
      clock: Images.clock,
      Clocktext: "30 minutes",
      ForkKnife: Images.ForkKnife,
      ForkKnifeText: "Snack",
    },
    {
      images: Images.salmon,
      tile: " Fresh Lime Roasted Salmon with Ginger Sauce",
      clock: Images.clock,
      Clocktext: "30 minutes",
      ForkKnife: Images.ForkKnife,
      ForkKnifeText: "Snack",
    },
    {
      images: Images.dishfood,
      tile: " Big and Juicy Wagyu Beef Cheeseburger",
      clock: Images.clock,
      Clocktext: "30 minutes",
      ForkKnife: Images.ForkKnife,
      ForkKnifeText: "Snack",
    },
  ];

  return (
    <div className=" flex flex-wrap justify-center space-x-5">
      {foodcards.map((foodcard, index) => (
        <div
          key={index}
          className="bg-indigoblue w-20p round mt-10 rounded-3xl"
        >
          <div>
            <img
              src={foodcard.images}
              alt=""
              className="cursor-pointer  hover:scale-110 transition-transform"
            />
          </div>
          <div className="font-bold text-2xl text-center">{foodcard.tile}</div>
          <div>
            <div className="flex pt-2 justify-evenly">
              <div className="flex  items-center">
                <img src={foodcard.clock} alt="" className="w-30p" />
                {foodcard.Clocktext}
              </div>
              <div className="flex  items-center">
                <img src={foodcard.ForkKnife} alt="" className="w-40p" />
                {foodcard.ForkKnifeText}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
