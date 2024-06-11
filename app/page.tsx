"use client";

import type { NextPage } from "next";
import {useState} from 'react';
import {generatePDF} from './actions';
const Home: NextPage = () => {
  const [time,setTime]=useState("")
  const [loading,setLoading]=useState(false)

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Generate PDF</span>
            <span className="block text-4xl font-bold">Generate pdf from url </span>
          </h1>
          


        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex items-center">
            
            <button disabled={loading} onClick={async()=>{
              setLoading(true)
              const timeTaken=await generatePDF("https://duckduckgo.com/","coba.pdf");
              setTime(timeTaken);
              setLoading(false)
              }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
              {loading ? (
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Generate PDF"
              )}
            </button>
            {time} 
          {time.length > 0 && (
            <button 
              onClick={() => window.location.href = "/coba.pdf"} 
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              View PDF
            </button>
          )}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
