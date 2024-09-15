import { BiTimeFive } from "react-icons/bi";
import React from "react";

import logo1 from "../../assets/slack.svg";
import logo2 from "../../assets/adobe.png";
import logo3 from "../../assets/airbnb.png";
import logo4 from "../../assets/amd.png";
import logo5 from "../../assets/ati.png";
import logo6 from "../../assets/beats.png";
import logo7 from "../../assets/dhl-express.png";
import logo8 from "../../assets/mcdonalds.png";
import logo9 from "../../assets/meta.png";


//
const Data = [
  {
    id: 1,
    image: logo1,
    title: "Full Stack Engineer",
    time: "12Hrs",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, incidunt.",
    company: "WW TATO",
  },
  {
    id: 2,
    image: logo2,
    title: "Software Developer",
    time: "15Hrs",
    location: "New Jarsey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, incidunt.",
    company: "Noa Sus ",
  },
  {
    id: 3,
    image: logo3,
    title: "C++ Engineer",
    time: "13Hrs",
    location: "Germany",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, incidunt.",
    company: "A3 Solution",
  },
  {
    id: 3,
    image: logo4,
    title: "Product Manager",
    time: "14Hrs",
    location: "New Jarsey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, incidunt.",
    company: "A3 Solution",
  },
  {
    id: 4,
    image: logo5,
    title: "MERN Stack Developer",
    time: "15Hrs",
    location: "New Jarsey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, incidunt.",
    company: "A3 Solution",
  },
  {
    id: 5,
    image: logo6,
    title: "Junior Engineer",
    time: "12Hrs",
    location: "New Jarsey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, incidunt.",
    company: "A3 Solution",
  },
  {
    id: 6,
    image: logo7,
    title: "Software Engineer",
    time: "11Hrs",
    location: "New Jarsey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, incidunt.",
    company: "A3 Solution",
  },
  {
    id: 7,
    image: logo9,
    title: "JAVA Developer",
    time: "15Hrs",
    location: "New Jarsey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, incidunt.",
    company: "A3 Solution",
  },
  {
    id: 8,
    image: logo8,
    title: "UI/UX Designer",
    time: "14Hrs",
    location: "New Jarsey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, incidunt.",
    company: "A3 Solution",
  },
  {
    id: 9,
    image: logo9,
    title: "UI/UX Designer",
    time: "14Hrs",
    location: "New Jarsey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, incidunt.",
    company: "A3 Solution",
  },

];

const Jobs = () => {
  return (
    <>
      <div className=" jobContainer flex gap-10 justify-center flex-wrap items-center py-10 ">
        {Data.map(({ id, image, title, location, desc, company }) => {
          return (
            <div
              key={id}
              className=" group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg "
            >
              <span className=" flex justify-between items-center gap-4">
                <h1 className=" text-[16px] font-semibold text-textColor ">
                  {title}
                </h1>
                <span className=" flex items-center text-[#8e8d8d] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>

              <h6 className=" text-[#ccc] ">{location}</h6>

              <p className=" text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white ">
                {desc}
              </p>

              <div className=" company flex items-center gap-2">
                <img src={image} className=" w-[10%]" alt="" />
                <span className=" text-[14px] py-[1rem] block group-hover:text-white ">
                  {company}
                </span>
              </div>

              <button className=" border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white ">
                {" "}
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Jobs;
