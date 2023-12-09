// src/Login.js
import React from 'react';
import green from "../assets/Group3.png";

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-black via-black to-gray-900'>
      <div
        className="flex items-center justify-center h-screen"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #000E09 100%)',
          borderRadius: '28px',
        }}
      >
        <div
          className="bg-white p-8 rounded shadow-md w-96"
          style={{
            backgroundColor: 'transparent',
            borderRadius: '28px',
          }}
        >
          <div className='flex justify-center items-center'>
            <img
              src={green}
              alt="Logo"
              className="mb-[86px]"
            />
          </div>
          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder='E-mail'
                name="email"
                style={{
                  background: '#1F191966 0% 0% no-repeat padding-box',
                  boxShadow: 'inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947',
                  mixBlendMode: 'normal',
                  opacity: 1,
                }}
                className="w-full pl-4 mb-[25px] text-white border p-2 rounded-full focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                placeholder='Password'
                name="password"
                style={{
                  background: '#1F191966 0% 0% no-repeat padding-box',
                  boxShadow: 'inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947',
                  mixBlendMode: 'normal',
                  opacity: 1,
                }}
                className="w-full pl-4 border text-white p-2 rounded-full focus:outline-none"
                required
              />
            </div>
            <div className='flex justify-center items-center'>
              <button
                type="submit"
                style={{
                  background: 'transparent linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%) 0% 0% no-repeat padding-box',
                  border: '2px solid #8CFF0026',
                  borderRadius: '50px',
                }}
                className="w-full text-white font-semibold border-none p-2 mt-[47px] rounded-full focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-[26px] text-center">
            <a href="/forgot-password">
              <p
                className="text-base  font-normal leading-5 text-green-600 opacity-100"
              >
                Forgot Password?
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
