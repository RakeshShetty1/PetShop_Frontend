import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { cat } from "../Data/Cat/cat";
import { fish } from "../Data/Fish/fish";
import { rabbit } from "../Data/Rabbit/rabbit";
import { mensShoesPage1 } from "../Data/shoes";
    import { dog } from "../Data/Dog/dog";
import { lengha_page1 } from "../Data/Women/LenghaCholi";

const Homepage = () => {
  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={dog} section={"Dog"} />
        {/* <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
        {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
        {/* <HomeProductSection data={sareePage1} section={"Saree"} /> */}
        <HomeProductSection data={cat} section={"Cat"} />
        <HomeProductSection data={fish} section={"Fish"} />
        <HomeProductSection data={rabbit} section={"Rabbit"} />
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>
    </div>
  );
};

export default Homepage;
