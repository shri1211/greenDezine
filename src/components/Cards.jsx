import React from 'react';
import moptro from '../assets/moptro logo.png';
import group from '../assets/Group46.png';
import '../components/App.css';
import searchIcon from '../assets/searchicon.png';

const DashBoard = () => {
  const Details = [
    {
      Emp_Id: 1,
      name: "Arjun",
      DOB: "16-11-2000",
      Role: "Software Engineer"
    },
    {
      Emp_Id: 2,
      name: "Mahesh",
      DOB: "15-1-2000",
      Role: "Web Developer"
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="bg-backColorThree flex flex-col items-center justify-center w-full mb-1 p-4">
        <div className=" p-8 rounded shadow-md w-full md:w-[80%] lg:w-[60%] xl:w-[40%] -mt-20">
          <div className='flex justify-end'>
            <img src={group} alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img src={moptro} alt="moptro Logo" className="mb-[41px]" />
            <span style={{ backgroundColor: '#5E5E5EB5' }} className='w-5 text-center bg-blend-normal shadow-red-100 text-green-500 text-sm border-black rounded-full -mt-20 bg-backColorOne boxShadow-4xl '>4</span>
          </div>

          <div className="flex justify-between mb-8 bg-no-repeat bg-center bg-cover mix-blend-normal rounded-full boxShadow bg-gray-900 p-4 border-none border-gray-600 opacity-40 filter bg:blur-sm">
            <input type="search" placeholder='Search with name' className='bg-transparent outline-none text-white' />
            <img src={searchIcon} alt="search" width={20} className='stroke-white' />
          </div>

          {Details.map((person) => (
            <div key={person.Emp_Id} className="bg-gray-600 bg-opacity-50 p-2 mix-blend-normal opacity-40 filter rounded-md mt-5">
              <div className="p-1">
                <div className='flex justify-end'>
                  <h1 className='w-5 text-center bg-black text-white text-sm rounded-full'>{person.Emp_Id}</h1>
                </div>
                <div className="mb-2 flex items-center">
                  <span className="font-semibold text-white">EMP ID :</span>
                  <span className="ml-2 text-white">{person.Emp_Id}</span>
                </div>
                <div className="mb-2 flex items-center">
                  <span className="font-semibold text-white">Name :</span>
                  <span className="ml-2 text-white">{person.name}</span>
                </div>
                <div className="mb-2 flex items-center">
                  <span className="font-semibold text-white">DOB :</span>
                  <span className="ml-2 text-orange-500 font-semibold">{person.DOB}</span>
                </div>
                <div className="mb-2 flex items-center">
                  <span className="font-semibold text-white">Role  :</span>
                  <span className="ml-2 text-green-500 font-semibold">{person.Role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
