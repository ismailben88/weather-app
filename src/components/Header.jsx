import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
export default function Header() {
  return (

    <div className=" header">

      <span>
        <TiWeatherPartlySunny />
        </span> 
        <h3>Weather Now</h3>
      </div>
 
  );
}
