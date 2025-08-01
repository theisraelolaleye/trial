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
              <div className="bg-white p-8 rounded-[20px] relative flex flex-col gap-3 bg-[linear-gradient(294deg,_rgba(255,_255,_255,_0.26)_0%,_rgba(255,_255,_255,_0.8)_32%)] shadow group ">
                <img src='' />

                <div className=' flex gap-3 relative items-center ' >

                  <IoCubeOutline className=' inline-block  text-blue-500 ' size={30} />
                  <p>Node API</p>

                  <button className=' group-hover:block hidden absolute ml- auto items-center justify-center cursor-pointer absolute top-0 right-0 h-8 w-8 bg-white rounded-full bg-white ' >
                    <MdKeyboardArrowRight size={20} />
                  </button>

                </div>

                <div className=' flex flex-col text-[#82899A] font-normal  '>
                  <p>instant gateway to blockchain interaction:</p>

                  <div>
                    <ul>
                      <li className=' list-disc list-inside  ' >list</li>
                      <li className=' list-disc list-inside  ' >list</li>
                      <li className=' list-disc list-inside  ' >list</li>
                    </ul>
                  </div>

                </div>

              </div>

              {/* Advanced API */}
              <div className="bg-white p-4 rounded-md shadow">
                <p className="font-medium">Advanced API</p>
                <p className="text-sm text-gray-500">Details about Advanced API</p>
              </div>
            </div>


          </div>
        </div>


        {/* <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 ' >
            <div className=' col-span-1 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos facilis libero necessitatibus sapiente. Sit quidem dignissimos nemo tempora veritatis qui? Suscipit voluptatem enim delectus molestias similique magni, nulla ipsam at?</div>

            <div className=' col-span-1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Doloribus, cumque. Quasi, nobis. Doloremque, asperiores. Doloribus, cumque. Quasi, nobis. Doloremque, asperiores. Doloribus, cumque. Quasi, nobis.</div>
          </div> */}


      </div>

      <div className=' col-span-1 grow-0 h-screen overflow-scroll  ' >

      </div>

    </main >
    // <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    //   {/* Summary Cards */}
    //   <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm text-center">
    //     <h2 className="text-sm text-gray-500">Total requests (24h)</h2>
    //     <p className="text-lg font-bold mt-2">No requests.</p>
    //   </div>
    //   <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm text-center">
    //     <h2 className="text-sm text-gray-500">Top chain (reqs) (24h)</h2>
    //     <p className="text-lg font-bold mt-2">No requests.</p>
    //   </div>
    //   <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm text-center">
    //     <h2 className="text-sm text-gray-500">Top project (reqs) (24h)</h2>
    //     <p className="text-lg font-bold mt-2">No requests.</p>
    //   </div>

    //   {/* Charging Model Section */}
    //   <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-xl shadow-sm">
    //     <h3 className="text-sm text-gray-600 mb-1">Charging model</h3>
    //     <div className="flex items-center justify-between">
    //       <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">Freemium</span>
    //       <span className="text-gray-800 font-semibold text-sm">0 API Credits ≈ $0.00</span>
    //     </div>
    //     <div className="mt-3 bg-blue-50 p-3 rounded text-sm text-blue-800 flex justify-between items-center">
    //       <p>Get more: Ultimate number of blockchains, superior rate limits, x3 projects...</p>
    //       <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-3 py-1 rounded">Get Premium</button>
    //     </div>
    //   </div>

    //   {/* Docs Section */}
    //   <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm">
    //     <h3 className="font-semibold mb-2">Docs</h3>
    //     <ul className="space-y-2 text-sm text-blue-600">
    //       <li><a href="#">Getting started</a></li>
    //       <li><a href="#">Service plans</a></li>
    //       <li><a href="#">Pricing</a></li>
    //       <li><a href="#">Supported chains</a></li>
    //     </ul>
    //   </div>

    //   {/* Products and Plans Section */}
    //   <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-white to-blue-50 p-5 rounded-xl shadow-sm">
    //     <h3 className="font-semibold text-lg mb-3">Premium</h3>
    //     <div className="grid md:grid-cols-2 gap-3 text-sm">
    //       <ul className="list-disc list-inside space-y-1">
    //         <li>Node API: 1.5k reqs/sec</li>
    //         <li>Advanced API: 1k reqs/min</li>
    //         <li>80+ blockchains</li>
    //       </ul>
    //       <ul className="list-disc list-inside space-y-1">
    //         <li>Team accounts</li>
    //         <li>Support portal</li>
    //         <li>Multi-project stats</li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Socials Section */}
    //   <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm">
    //     <h3 className="font-semibold mb-2">Socials</h3>
    //     <ul className="space-y-2 text-sm text-blue-600">
    //       <li><a href="#">X (Twitter)</a></li>
    //       <li><a href="#">Telegram</a></li>
    //       <li><a href="#">Reddit</a></li>
    //       <li><a href="#">Discord</a></li>
    //       <li><a href="#">Substack</a></li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export { HomePage };
