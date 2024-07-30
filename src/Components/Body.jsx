import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex ">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end ">
        <img src="./assets/Blue.svg" alt="1st" className="-rotate-45 h-64 md:h-72 lg:h-[400px]"/>
        <img src="./assets/Pink.svg" alt="2st" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"/>
        <img src="./assets/Purple.svg" alt="3st" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"/>
        <img src="./assets/asset 2.png" alt="hero" className="absolute h-64 md:h-72 lg:h-[400px]"/>
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight lg:text-10xl">Host your website in less than 5 minutes.</h1>
        <p className="font-lato text-gray-400 ">With Hosterr, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online. </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
            <input className="rounded-md px-4 py-1 placeholder:text-gray-400" type="email" placeholder="Enter e-mail address"/>
            <button className="rounded-md mx-3 my-3 bg-blue-400 hover:bg-blue-600  text-white md:rounded-0 font-medium md:px-4 md:py-3">Join Waitlist</button>
        </form>
        <div className="flex gap-3 " >
            <img src="./assets/asset 1.svg" alt="check" />
            <p className="font-lato text-gray-400">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
