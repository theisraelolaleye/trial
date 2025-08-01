import React from 'react';
import { FaDiamond } from 'react-icons/fa6';
import { IoDiamondOutline } from "react-icons/io5";
import './../index.css';

import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";


const HomePage = () => {
  const packages = [
    { name: "premium", price: "$29/month", description: "Cutting", features: ["Feature 1", "Feature 2", "Feature 3"] },
    { name: "enterprise", price: "$9/month", features: ["Feature 1", "Feature 2"] },
  ];

  // bg-[linear-gradient(98deg,_rgba(255,255,255,0.2)_1.79%,_rgba(255,255,255,0.2)_100%)]


  return (

    <main className=' ' >

      <div className=' flex flex-col gap-2 ' >
        <h2 className=' font-bold text-4xl  ' >Welcome to Web3 API</h2>
        <p className=' text-gray-400 text-sm ' >Connect to the world of blockchain</p>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 ' >

        <div className=' col-span-2 grow-0 flex flex-col gap-8  ' >

          {/* 3 cards  */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6' >

            <div className="col-span-1 bg-white flex gap-3 p-4 rounded-[20px] flex-col shadow-sm hover:shadow-lg text-left">
              <div className=' flex gap-1 items-center ' >
                <h2 className="text-sm text-black font-bold ">Top project (reqs)</h2>
                <span className='text-gray-400 text-xs px-1 py-[2px] bg-gray-200 rounded-md '>24h</span>
              </div>
              <p className="text-sm text-gray-400 font-normal ">No requests.</p>
            </div>

            <div className="col-span-1 bg-white flex gap-3 p-4 rounded-[20px] flex-col shadow-sm hover:shadow-lg text-left">
              <div className=' flex gap-1 items-center ' >
                <h2 className="text-sm text-black font-bold ">Top project (reqs)</h2>
                <span className='text-gray-400 text-xs px-1 py-[2px] bg-gray-200 rounded-md '>24h</span>
              </div>
              <p className="text-sm text-gray-400 font-normal ">No requests.</p>
            </div>

            <div className="col-span-1 bg-white flex gap-3 p-4 rounded-[20px] flex-col shadow-sm hover:shadow-lg text-left">
              <div className=' flex gap-1 items-center ' >
                <h2 className="text-sm text-black font-bold ">Top project (reqs)</h2>
                <span className='text-gray-400 text-xs px-1 py-[2px] bg-gray-200 rounded-md '>24h</span>
              </div>
              <p className="text-sm text-gray-400 font-normal ">No requests.</p>
            </div>


          </div>

          {/* charging model  */}
          <div className=' shadow-sm hover:shadow-lg col-span-1 grow-0 gap-5 flex flex-col px-5  py-6 bg-white rounded-[20px] ' >
            <div className=' flex flex-col gap-5 px-3 ' >

              <div className=' flex relative items-center gap-2 ' >
                <p className=' font-bold text-xl  ' >Charging model</p>
                <p className=' text-white font-normal text-xs bg-[#5856d6] px-1 py-[2px] rounded-md ' >Freemium</p>
              </div>


              <div className=' flex items-start gap-1 ' >
                <p className=' font-bold text-xl text-[#1f2226] '>0 API Credits</p>
                <p className=' font-normal text-sm text-[#899A82] '>≈ $0.00</p>
              </div>
            </div>

            <div className=' flex rounded-[16px] items-center font-normal w-full px-3 gap-2 bg-[#e6e6f9]  ' >

              <IoDiamondOutline className=' text-blue-500 ' size={30} />


              <p className=' text-sm py-3 grow-0  '> <b>Get help:</b> Ultimate number of blockchains, superior rate limits, x3 projects, multi-project stats, WSS, and whitelists.</p>

              <button className="p-2 items-center rounded-[12px] text-sm grow-0 shrink-0 text-white bg-[linear-gradient(270.26deg,_#013CD3_0.23%,_#6235D0_26.13%,_#AF34B1_49.87%,_#E85658_76.96%,_#FF7710_99.78%)]">
                Get Premium
              </button>

            </div>
          </div>

          {/* Products and plans */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Products and plans</h3>

            <div className="grid grid-cols-2 gap-7">

              <div className="col-span-2 bg-gray-100 p-8 rounded-[20px] shadow-sm bg-[linear-gradient(270.26deg,_#D0DCF9_0%,_#E3DCFA_50%,_#F4E7DE_100%)]">

                <div className=' flex justify-between ' >

                  <div className=' flex flex-col max-w-[420px] gap-3 items-start grow ' >
                    <p className='text-xl font-bold'>Premium</p>

                    <p className=' text-normal text-[#899A82] font-normal'> <b>Cutting-edge service</b> for professionals</p>

                    <div>
                      <ul className=' grid grid-cols-1 md:grid-cols-2 justify-between gap-x-6 text-normal  '>
                        <li className=' w-fit list-inside text-[#899A82] ' >Node API: 1.5k reqs/sec</li>
                        <li className=' w-fit list-inside text-[#899A82] ' >Team accounts</li>
                        <li className=' w-fit list-inside text-[#899A82] ' >Advanced API: 1k reqs/min</li>

                        <li className=' w-fit list-inside text-[#899A82] ' >Support portal</li>
                        <li className=' w-fit list-inside text-[#899A82] ' >Multi-project stats</li>
                        <li className=' w-fit list-inside text-[#899A82] ' >80+ blockchains</li>
                      </ul>
                    </div>

                    <button className="p-2 items-center rounded-[12px] text-sm grow-0 shrink-0 text-white bg-[linear-gradient(270.26deg,_#013CD3_0.23%,_#6235D0_26.13%,_#AF34B1_49.87%,_#E85658_76.96%,_#FF7710_99.78%)]">
                      Get Premium
                    </button>
                  </div>

                  <img src="/assets/premium.png" alt="Premium Plan" className="w-[240px] h-[240px] object-cover rounded-full" />

                </div>


                <div class="relative flex items-end justify-center">
                  <div className=' absolute '>

                    <ul className=' flex gap-2 list-none  '>
                      <li></li>
                      <li>
                        <div className=' w-2 h-2 bg-blue-600 rounded-full'></div>
                      </li>
                      <li>
                        <div className=' w-2 h-2 bg-blue-200 rounded-full'></div>
                      </li>
                      <li></li>
                    </ul>

                  </div>

                  <div className=' flex gap-2 ml-auto '>
                    <button className=' inline-flex items-center justify-center cursor-pointer relative h-8 w-8 bg-white rounded-full ' >
                      <MdKeyboardArrowLeft size={20} />
                    </button>
                    <button className=' inline-flex items-center justify-center cursor-pointer relative h-8 w-8 bg-white rounded-full ' >
                      <MdKeyboardArrowRight size={20} />
                    </button>
                  </div>


                </div>
              </div>

              {/* Node API */}
              <div className=" p-8 rounded-[20px] relative flex flex-col gap-3 bg-[linear-gradient(294deg,_rgba(255,_255,_255,_0.26)_0%,_rgba(255,_255,_255,_0.8)_32%)]  shadow group relative ">

                <img src='/assets/node_api.png' className=' z-0 absolute inset-0 object-cover w-full h-full rounded-[20px] ' alt='' />

                <div className=' z-20 flex gap-3 relative items-center ' >

                  <IoCubeOutline className=' inline-block  text-blue-500 ' size={30} />
                  <p>Node API</p>

                  <button className=' group-hover:block hidden absolute ml- auto items-center justify-center cursor-pointer absolute top-0 right-0 h-8 w-8 bg-white rounded-lg p-1 bg-white ' >
                    <MdKeyboardArrowRight size={20} />
                  </button>

                </div>

                <div className=' z-20 flex flex-col text-[#82899A] font-normal  '>
                  <p className=' text-normal text-sm '>Instant gateway to blockchain interaction:</p>

                  <div>
                    <ul className=' text-sm pt-4 '>
                      <li className=' list-disc list-inside  ' >RPC/REST endpoints</li>
                      <li className=' list-disc list-inside  ' >Standard, trace, and debug calls</li>
                      <li className=' list-disc list-inside  ' >HTTPS and WSS support</li>
                    </ul>
                  </div>

                </div>

              </div>

              {/* Advanced API */}
              <div className=" p-8 rounded-[20px] relative flex flex-col gap-3 bg-[linear-gradient(294deg,_rgba(255,_255,_255,_0.26)_0%,_rgba(255,_255,_255,_0.8)_32%)] shadow group relative  ">

                <img src='/assets/advanced.png' className=' z-0 absolute inset-0 object-cover w-full h-full rounded-[20px] ' alt='' />

                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/80 z-10"></div>


                <div className=' flex gap-3 relative items-center z-20 ' >

                  <IoCubeOutline className=' inline-block  text-blue-500 ' size={30} />
                  <p>Advanced API</p>

                  <button className=' group-hover:block hidden absolute ml-auto items-center justify-center cursor-pointer absolute top-0 right-0 h-8 w-8 bg-white rounded-lg p-1 bg-white ' >
                    <MdKeyboardArrowRight size={20} />
                  </button>

                </div>

                <div className=' flex flex-col text-[#82899A] font-normal z-20  '>
                  <p className=' text-normal text-sm '>Optimized, indexed, and cached data for most popular Web3 scenarios:</p>

                  <div>
                    <ul className=' text-sm pt-4 '>
                      <li className=' list-disc list-inside  ' >High-speed Archive data access</li>
                      <li className=' list-disc list-inside  ' >Multi-chain queries in a single request</li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        <div className=' col-span-1 sticky top-30 h-fit flex flex-col gap-8  ' >


          {/* Docs Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Docs</h3>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-xl border border-blue-100"
              >
                View all
              </a>
            </div>
            <div className="space-y-3 text-sm text-gray-500">
              <a href="#" className="flex items-center gap-2 hover:underline">
                <span>🌐</span> Getting started
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <span>ℹ️</span> Service plans
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <span>💳</span> Pricing
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline text-black">
                <span>🧱</span> Supported chains
              </a>
            </div>
          </div>

          {/* Socials Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
            <h3 className="text-lg font-bold">Socials</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-sm text-gray-500">
              <a href="#" className="flex items-center gap-2 hover:underline">
                <span>🕊️</span> X (Twitter)
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <span>🎮</span> Discord
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <span>✈️</span> Telegram
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <span>📬</span> Substack
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <span>👽</span> Reddit
              </a>
            </div>
          </div>


        </div>

      </div>


    </main >

  );
};

export { HomePage };
