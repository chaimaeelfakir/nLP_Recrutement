import React from "react";

import img0 from "../../assets/3m.png";
import img1 from "../../assets/podcast.png";
import img2 from "../../assets/janssen.png";

const Value = () => {
  return (
    <div className=" mt-52">
      <div className=" mb-[4rem] mt-[6rem] ">
        <h1 className=" text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block ">
          The Value that holds us true and to account
        </h1>
        <div className=" grid gap-[10rem] grid-cols-3 items-center ">
          <div className=" singleGrid rounded-[10px] p-[1.5rem] hover:bg-[#eeedf7] ">
            <div className=" flex items-center gap-3 ">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
                <img src={img2} className="w-[70%] " alt="" />
              </div>
              <span className=" font-semibold text-textColor text-[18px] ">
                Simplicity
              </span>
            </div>
            <p className=" text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              unde delectus.Ipsum unde delectus.
            </p>
          </div>

          {/* --- */}
          <div className=" singleGrid rounded-[10px] p-[1.5rem] hover:bg-[#eeedf7] ">
            <div className=" flex items-center gap-3 ">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
                <img src={img1} className="w-[70%] " alt="" />
              </div>
              <span className=" font-semibold text-textColor text-[18px] ">
                Simplicity
              </span>
            </div>
            <p className=" text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              unde delectus.Ipsum unde delectus.
            </p>
          </div>
          {/* --- */}
          <div className=" singleGrid rounded-[10px] p-[1.5rem] hover:bg-[#eeedf7] ">
            <div className=" flex items-center gap-3 ">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
                <img src={img0} className="w-[70%] " alt="" />
              </div>
              <span className=" font-semibold text-textColor text-[18px] ">
                Simplicity
              </span>
            </div>
            <p className=" text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              unde delectus.Ipsum unde delectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
