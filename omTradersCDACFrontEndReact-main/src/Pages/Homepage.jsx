import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
// import { sareePage1 } from "../Data/Saree/page1";
// import { dressPage1 } from "../Data/dress/page1";
// import { gounsPage1 } from "../Data/Gouns/gouns";
// import { kurtaPage1 } from "../Data/Kurta/kurta";
// import { mensShoesPage1 } from "../Data/shoes";
// import { mens_kurta } from "../Data/Men/men_kurta";
// import { lengha_page1 } from "../Data/Women/LenghaCholi";
import { Microwave_Oven } from "../Data/Microwave/microwave_oven";
import { Lunch_Box } from "../Data/LunchBox/Lunch_box";
import { Vacuum_Cleaner } from "../Data/VacuumeCleaner/VacuumCleaner";
import { Fans } from "../Data/Fans/Fans";
import { Speakers } from "../Data/Speakers/Speakers";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={Lunch_Box} section={"Lunch Box"} />
        {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
        <HomeProductSection data={Vacuum_Cleaner} section={"Vacuum Cleaner"} />
      <HomeProductSection data={Microwave_Oven} section={"Microwave Oven"} />
        <HomeProductSection data={Fans} section={"Fans"} />
        <HomeProductSection data={Speakers} section={"Sound System"} />
        {/* <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} /> */}
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;
