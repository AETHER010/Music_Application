import React from "react";

function CenterMenu() {
  const liStyle = "mr-[3rem] hover:cursor-pointer hover:text-[#E600FF] ";
  return (
    <div className="menu flex">
      <ul className="flex w-[100%] justify-between">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle}>About Us</li>
        <li className={liStyle}>Event Shedule</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
