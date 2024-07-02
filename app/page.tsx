
import type { NextPage } from "next";
import { headers } from 'next/headers'

const Home: NextPage = () => {
  const countryCode = headers().get('x-vercel-ip-city') 

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
      {countryCode}
      adada
      </div>
    </>
  );
};

export default Home;
