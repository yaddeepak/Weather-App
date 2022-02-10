import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import "./style.css"

export const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(()=>{
     const fetchApi= async ()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8ff71e70185007f6b7605f8bde37ece5`
        const response=await fetch(url);
        const resJson=await response.json();
        console.log(resJson);
        setCity(resJson.main);
     }  
      fetchApi();
    },[search])

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            placeholder="Enter name of a place"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {!city ? (
          <h1 className='errorMsg'>No Data Found</h1>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp} &#176;Cel</h1>
              <h3 className="tempmin_max">
                MIN: {city.temp_min} &#176;Cel | MAX: {city.temp_max} &#176;Cel
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
}
