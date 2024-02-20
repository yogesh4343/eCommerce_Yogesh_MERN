import React from 'react'
// import EmailImage from '../../Images/EmailImage.jpg'
import "./EmailSection.css"
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import CategoryName from '../CategoryName';
import EmailIcon from '@mui/icons-material/Email';
// import LargeButton from '../Buttons/LargeButton';

const backgroundStyle = {
  backgroundImage: 'url(https://etrade-delta.vercel.app/images/bg/bg-image-5.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const EmailSection = () => {
  return (
    <div className="flex justify-center my-[-5rem] sm:my-[4rem]">
        <div className="container m-12 mx-auto w-[100vw] h-[60vh] flex justify-center md:mx-12 md:h-[50vh]  ">
            {/* <div className="main " style={"backgroundImage: url('https://etrade-delta.vercel.app/images/bg/bg-image-5.jpg')" } > */}
            <div className="main w-full h-full " style={backgroundStyle} >

              <div className="main py-11 flex flex-col justify-center h-[100%] px-7 md:p-20 ">
                <div className="categoryTag flex flex-column  items-center gap-2 "> 
                 <div className="categoryLogo w-9 h-9 bg-blue-300 rounded-2xl flex flex-column  text-center items-center justify-center text-white  ">
                   <MarkAsUnreadIcon />

                 </div>
               <div className="category font-bold text-blue-gray-900 ">  NewsLetter </div> 
              </div>



              <CategoryName category="Get weekly update"  />


              <div className="email flex   flex-wrap  md:gap-6 ">
                <div className="input rounded-lg   bg-white px-2 mt-4 md:px-5 md:my-4  ">
                    <EmailIcon />
                  <input type="text" placeholder='example@gmail.com' className=" py-5 px-3 cursor-pointer rounded-lg outline-none md:ml-3 md:p-5 " />
                </div>
                       
                       {/* <LargeButton btn="Subscribe"  className="h-3"/> */}
                       <div className="button pt-5 pb-5 pl-8 pr-8 bg-[#3477f0] w-fit rounded-2xl text-white font-semibold cursor-pointer my-4 hover:scale-110 1s ">
                       Subscribe
        </div> 
              </div>


            </div>
                
            </div>
        </div>
    </div>
  )
}

export default EmailSection
