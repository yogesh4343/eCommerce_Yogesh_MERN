import React, { useState } from 'react'
import LargeButton from './Buttons/LargeButton'
// import CategoryName from './CategoryName'
import Tags from './Tags'
import Headphone from '../Images/Headphone.jpg'
// import HeadphonesIcon from '@mui/icons-material/Headphones';





const MusicHeroSection = () => {

    let [date , setDate] = useState(0)
    let [hour , setHour] = useState(0)
    let [minute , setMinute] = useState(0)
    let [second , setSecond] = useState(0)

  
    var countDownDate = new Date("mar 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    // let x = setInterval(function() {
     setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
       setDate(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinute(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSecond(Math.floor((distance % (1000 * 60)) / 1000));
    
      // Display the result in the element with id="demo"


    //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //   + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text
      if (distance < 0) {
        // clearInterval(x);
        // document.getElementById("demo").innerHTML = "EXPIRED";
        // var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();;
      }
    }, 1000);


  return (
    <div className="main my-auto mt-4  flex justify-center align-middle text-center items-center w-full md:mt-32 ">
            <div className="container pt-8 pb-8 rounded-2xl w-full bg-[#f6f7fb] flex flex-col md:flex-row   md:p-12    ">
                <div className="left flex flex-col items-center   m-auto md:w-[50%] md:place-items-start   ">
                    <Tags tag="Don't Miss!!!"  />
                    {/* <CategoryName category="Enhance Your Music Experience"/> */}
                    <div className="categoryHeading text-2xl   sm:text-3xl  md:text-4xl lg:text-6xl font-semibold mt-5 text-left ">
                    Enhance Your Music Experience  </div> 

{/* clock  */}

            <div className="dates flex gap-4 mt-11 mb-11  ">
                <div className="timeCircle w-20 h-20 rounded-full bg-white text-black  font-bold flex justify-center text-center align-middle items-center  ">{date} <br /> Day </div>
                <div className="timeCircle w-20 h-20 rounded-full bg-white text-black  font-bold  flex justify-center text-center align-middle items-center   "> {hour}  <br /> Hrs </div>
                    <div className="timeCircle w-20 h-20 rounded-full bg-white text-black  font-bold flex justify-center text-center align-middle items-center  "> {minute} <br /> Min </div>
                    <div className="timeCircle w-20 h-20 rounded-full bg-white text-red-600  font-bold flex justify-center text-center align-middle items-center  "> {second} <br /> Sec </div>
            </div>


                    <LargeButton btn=" Check It Out" />
                </div>


                <div className="right flex justify-center  w-full p-11  md:w-[50%] md:relative  ">
                    <div className="rightImg md:absolute bottom-12">
                    {/* mt-[-153px] */}
                            <img src={Headphone} alt="HeadphoneImage " className="  " />
                    </div>
                </div>
            </div> 
    </div>
  )
}

export default MusicHeroSection
