import React from 'react'
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SmallCard from '../../Assests/SmallCard';
import Tags from '../../Assests/Tags';
import CategoryName from '../../Assests/CategoryName';
import { NavLink } from 'react-router-dom';
import {  singleCategoryReducer } from '../../Store/Slice/ProductSlice';
import { useDispatch } from 'react-redux';

const Category = ({newCat }) => {
  const dispatch = useDispatch("")
  // console.log(newCat)
  // const [category , setCategory] = useState(``);
  // console.log(`category` , newCategory);



  const clickFunc = (e)=>{
    console.log(`catFunc` , e)
    dispatch(singleCategoryReducer(e))
  }
 

  // const newObj = {
  //   Phones:"https://images.news18.com/ibnlive/uploads/2021/08/1628405575_apple_iphone_13-16301386043x2.jpg?impolicy=website&width=360&height=240",
  //   "Laptop":"",
  //   "TV":"",
  //   "Watches":""
  // }

  let Phones ="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/10/918564-apple-iphone-12.jpg";
let Laptop="https://tech4growth.dqindia.com/wp-content/uploads/2023/03/Mt57o7YpeYbJxKaSwRYWH-1440x564_c.jpg";
let Tv = "https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY23_Category_TV-Home_audio_M?$toutMobile$&fmt=png-alpha"
let Watches = "https://storage.googleapis.com/stateless-www-lindajewellers-c/2020/12/0ad64452-category-image-61.png"
let Tablets = "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965880/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264336_lik291.png?tr=w-640"
let Printers = "https://cdn.moglix.com/p/ARIPdJ6ojBlIm-xxlarge.jpg"





  return (
    <div className="main mt-16 ml-5 mr-4">
        
        <Tags tag="Categories" />

      <CategoryName category="Browse by Category "/>

        <div className="AllCategory flex overflow-auto pl-3 pb-12    ">

            {/* <div className=" flex gap-14 h-64 p-7  flex-wrap overflow-x-scroll "> */}
            <div className="flex gap-6 h-fit">
              <NavLink to="/product"  onClick={(e)=>clickFunc("Phones")}>
              <SmallCard  img={Phones}  value={Phones} categoryOne="Phones" width="w-32" />
              </NavLink>
              <NavLink to="/product"  onClick={(e)=>clickFunc("Laptop")}>
              <SmallCard  img={Laptop}  value={Laptop}  categoryOne="Laptop" width="w-32" />
              </NavLink>
              <NavLink to="/product"  onClick={(e)=>clickFunc("Tv")}>
              <SmallCard  img={Tv}  value={Tv}  categoryOne="Tv" width="w-32" />
              </NavLink>
            
              <NavLink to="/product"  onClick={(e)=>clickFunc("Watches")}>
              <SmallCard  img={Watches}  value={Watches}  categoryOne="Watches" width="w-32" />
              </NavLink>
              <NavLink to="/product"  onClick={(e)=>clickFunc("Tablets")}>
              <SmallCard  img={Tablets}  value='Tablets'  categoryOne="Tablets" width="w-32" />
              </NavLink>
              <NavLink to="/product"  onClick={(e)=>clickFunc("Printers")}>
              <SmallCard  img={Printers}  value='Printers'  categoryOne="Printers" width="w-32" />
              </NavLink>

  


              {/* {newCat && newCat.map((curEl,id)=>{
                return <>
                <NavLink to="/product" onClick={(e)=>clickFunc(curEl)}>
              <SmallCard  img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-spacegray-config-202306?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1684340991372" value={curEl} categoryOne={curEl}  width="w-24" />
              </NavLink> 
              </>
              })} */}

            </div>
        </div>
    </div>
  )
}

export default Category
