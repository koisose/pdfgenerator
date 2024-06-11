"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";

import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">DAO</span>
            <span className="block text-4xl font-bold">Create proposal </span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>


        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <h2 className="text-center text-4xl font-bold">Explore</h2>
          <div className="flex justify-center mt-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create DAO
            </button>
          </div>
          <div className="flex space-x-4 justify-center mt-4">
            <div className="bg-gray-900 text-white rounded-lg p-4 flex flex-col items-center space-y-2 shadow-lg" style={{width: '250px'}}>
              <img src={"https://source.unsplash.com/random/200x200"} alt={`dwa`} className="w-16 h-16" />
              <h2 className="text-xl font-semibold">adw</h2>
              <p className="text-gray-400">ad members</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Join
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
