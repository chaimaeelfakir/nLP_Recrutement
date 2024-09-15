import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";

const Search = () => {
  return (
    <div className=" searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] ">
      <form action="">
        <div className=" firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700 ">
          <div className=" flex items-center gap-2">
            <AiOutlineSearch className=" text-[25px] icon " />
            <input
              type="text"
              className=" bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job Here....."
            />
            <AiOutlineCloseCircle className=" text-[23px] icon cursor-pointer hover:text-textColor  " />
          </div>

          <div className=" flex items-center gap-2">
            <BsHouseDoor className=" text-[25px] icon " />
            <input
              type="text"
              className=" bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job Here....."
            />
            <AiOutlineCloseCircle className=" text-[23px] icon cursor-pointer hover:text-textColor  " />
          </div>

          <div className=" flex items-center gap-2">
            <CiLocationOn className=" text-[25px] icon " />
            <input
              type="text"
              className=" bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job Here....."
            />
            <AiOutlineCloseCircle className=" text-[23px] icon cursor-pointer hover:text-textColor  " />
          </div>

          <button className=" h-full  bg-blueColor px-10 p-5 rounded-[10px] text-white cursor-pointer hover:bg-blue-300 ">
            Search
          </button>
        </div>
      </form>

      <div className=" secDiv flex items-center justify-center gap-10">
        <div className=" singleSearch flex items-center gap-2 ">
          <label className=" text-[#808080]" htmlFor="relevance">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className=" bg-white rounded-[3px] px-4 py-1 "
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className=" singleSearch flex items-center gap-2 ">
          <label className=" text-[#808080]" htmlFor="type">
            Type:
          </label>
          <select
            name=""
            id="type"
            className=" bg-white rounded-[3px] px-4 py-1 "
          >
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>
        <div className=" singleSearch flex items-center gap-2 ">
          <label className=" text-[#808080]" htmlFor="level">
            Level:
          </label>
          <select
            name=""
            id="level"
            className=" bg-white rounded-[3px] px-4 py-1 "
          >
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Senior</option>
            <option value="">Adcovate</option>
          </select>
        </div>

        <span className=" text-[#a1a1a1] cursor-pointer"> Clear All</span>
      </div>
    </div>
  );
};

export default Search;
