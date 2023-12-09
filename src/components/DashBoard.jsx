import React from 'react';
import moptro from '../assets/moptro logo.png';
import group from '../assets/Group46.png';
import '../components/App.css'

const DashBoard = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-h-16 bg-gradient-to-b from-black via-black to-gray-900'>

        <div
          className="flex items-center justify-center h-screen "
          style={{
            background: 'linear-gradient(180deg, #000000 0%, #000E09 100%)',
            borderRadius: '28px',
          }}
        >
          <div className="bg-white p-8 rounded shadow-md w-96"
            style={{
              background: 'transparent url("img/Group 3.png") 0% 0% no-repeat padding-box',
              borderRadius: '28px',
            }}>
            <div className=' relative flex justify-end -mt-52 md:mt-10'>
              <img
                src={group}
                alt="group"
              />
            </div>
            <div className='flex justify-center items-center'>
              <img
                src={moptro}
                alt="Logo"
                className="mb-[41px] "
              />
              <span style={{backgroundColor:'#5E5E5EB5 0% 0% no-repeat padding-box'}} className='text-white bg-[#5E5E5EB5] text-center rounded-[50%] px-1 py-0 text-sm ml-0  -mt-20'>4</span>
            </div>

            <div className="mb-[41px] px-4 py-1 rounded-xl"
              style={{
                background: '#5E5E5E82 0% 0% no-repeat padding-box',
                boxShadow: 'inset 0px 4px 0px #00000040',
                mixBlendMode: 'normal',
              }}
            >
              <div
                style={{
                  background: '#1A2C2C99 0% 0% no-repeat padding-box',
                  mixBlendMode: 'normal',
                  opacity: 1

                }}
                className="w-[20rem] -ml-4 flex items-center justify-center text-center text-[#FFFFFFB3] border py-2  rounded-full border-none  focus:outline-none bg-[#1A2C2C99]"
                required
              >
                Employee Productivity DashBoard
              </div>
              <div>
                <div className='mb-2 mt-10'>
                  <div className='text-white flex justify-between'>
                    <h1>Productivity of Monday</h1>
                    <h1>4%</h1>
                  </div>
                  <input
                    id="default-range"
                    type="range"
                    // value={4}
                    min={1}
                    max={100}
                    className="w-1/2 h-[10px] rounded-lg appearance-none cursor-pointer dark:bg-gray-100"
                  />
                </div>
                <div className='mb-2'>
                  <div className='text-white flex justify-between'>
                    <h1>Productivity of Tuesday</h1>
                    <h1>92%</h1>
                  </div>
                  <input
                    id="default-range"
                    type="range"
                    // value={4}
                    min={1}
                    max={100}
                    className="w-1/2 h-[10px] rounded-lg appearance-none cursor-pointer dark:bg-gray-100"
                  />
                </div>
                <div className='mb-2'>
                  <div className='text-white flex justify-between'>
                    <h1>Productivity of Wednesday</h1>
                    <h1>122%</h1>
                  </div>
                  <input
                    id="default-range"
                    type="range"
                    // value={4}
                    min={1}
                    max={100}
                    className="w-1/2 h-[10px] rounded-lg appearance-none cursor-pointer dark:bg-gray-100"
                  />
                </div>
                <div className='mb-2'>
                  <div className='text-white flex justify-between'>
                    <h1>Productivity of Thursday</h1>
                    <h1>93%</h1>
                  </div>
                  <input
                    id="default-range"
                    type="range"
                    // value={4}
                    min={1}
                    max={100}
                    className="w-1/2 h-[10px] rounded-lg appearance-none cursor-pointer dark:bg-gray-100"
                  />
                </div >
                <div className='mb-2'>
                  <div className='text-white flex justify-between'>
                    <h1>Productivity of Friday</h1>
                    <h1>89%</h1>
                  </div>
                  <input
                    id="default-range"
                    type="range"
                    // value={4}
                    min={1}
                    max={100}
                    className="w-1/2 h-[10px] rounded-lg appearance-none cursor-pointer dark:bg-gray-100"
                  />
                </div>
                <div className='mb-2'>
                  <div className='text-white flex justify-between'>
                    <h1>Productivity of Saturday</h1>
                    <h1>98%</h1>
                  </div>
                  <input
                    id="default-range"
                    type="range"
                    // value={4}
                    min={1}
                    max={100}
                    className="w-1/2 h-[10px] rounded-lg appearance-none cursor-pointer dark:bg-gray-100"
                  />
                </div>
              </div>


              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
