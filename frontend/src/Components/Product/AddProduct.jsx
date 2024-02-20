import React, { useEffect, useState } from 'react'
import NavBar from '../../Assests/NavBar/NavBar'
import {
Card, Input, Button, Typography, } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addProductDatabaseReducer } from '../../Store/Slice/ProductSlice';

const AddProduct = () => {

  // const imageArr = [
  //   {url:"https://venturebeat.com/wp-content/uploads/2018/09/IMG_0182.jpeg?resize=1024%2C576&strip=all"}
  //   ,
  //   {url:"https://venturebeat.com/wp-content/uploads/2018/09/IMG_1661.jpeg?resize=1024%2C576&strip=all?w=2048&strip=all"}
  //   ,
  //   {url:"https://venturebeat.com/wp-content/uploads/2018/09/IMG_0190.jpeg?resize=1024%2C576&strip=all?w=2048&strip=all"}
  //   ,
  //   {url:"https://venturebeat.com/wp-content/uploads/2018/09/IMG_0187.jpeg?resize=1024%2C576&strip=all?w=2048&strip=all"}

  // ]

  const dispatch = useDispatch(); 

  const[name , setName] = useState('iphone')
  const[description , setDescription] = useState('iphone h')
  const[price , setPrice] = useState('1')
  const[images , setImages] = useState("")
  const[images1 , setImages1] = useState("")
  const[images2 , setImages2] = useState("")
  const[images3 , setImages3] = useState("")
  const[images4 , setImages4] = useState("")
  // const[images , setImages] = useState(images1 , images2 , images3 , images4);
  // const[images , setImages] = useState([{"url":"https://s3no.cashify.in/cashify/product/img/xxhdpi/bf8ed21e-96c9.jpg?p=es5sq&s=es"}])
  // const[images , setImages] = useState([{url:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=169284636399"}])
  const[category , setCategory] = useState('Phones')
  const[brand , setBrand] = useState('Apple')
  const[model , setModel] = useState('Iphone')
  const[feature , setFeature] = useState(true)
  const[newArrivals , setNewArrivals] = useState(true)
  const[colors , setColors] = useState('black')
  const[Stock , setStock] = useState(1)


  // const [newImages , setNewImages] = useState([])
  // console.log(newImages)



  const imageArr = [
    {url:images1}
    ,
    {url:images2}
    ,
    {url:images3}
    ,
    {url:images4}

  ]

  console.log(imageArr)


  useEffect(()=>{
    
    setImages(imageArr);
  },[dispatch ])



  
  // console.log(images)
  
  const addBtnFunc = () =>{
    // setImages(images1, images2 , images3 , images4)
    setImages(imageArr);

    const productObj = {
      name , description , price , images , category , brand , model , feature , newArrivals , colors ,
      Stock , 
    }
    // setImages(imageArr)
    console.log(productObj)
    dispatch(addProductDatabaseReducer(productObj))
  }


  


  return (
    <>
        <NavBar />

       


    <div className="container m-auto flex justify-center ">
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
      AddProduct
      </Typography>
      
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
             Name
          </Typography>
          <Input
            size="lg"
            placeholder=" Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Description
          </Typography>
          <Input
            size="lg"
            placeholder="Description"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Price
          </Typography>
          <Input
            size="lg"
            placeholder="Price"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
          />
          
          

          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Images1
          </Typography>
          <Input
            size="lg"
            placeholder=" Images"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={images1}
            onChange={(e)=> setImages1(e.target.value)}
            // onChange={(e)=> setImages({
            //   `url:${e.target.value}`
            //   })}
            // onChange={(e)=> setNewImages((prev)=>{
            //   return {
            //     ...prev,
            //     url : e.target.value
            //   }
            // })}
          />


          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Images2
          </Typography>
          <Input
            size="lg"
            placeholder=" Images"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={images2}
            onChange={(e)=> setImages2(e.target.value)}
            
          />


          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Images3
          </Typography>
          <Input
            size="lg"
            placeholder=" Images"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={images3}
            onChange={(e)=> setImages3(e.target.value)}

          />


          
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Images4
          </Typography>
          <Input
            size="lg"
            placeholder=" Images"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={images4}
            onChange={(e)=> setImages4(e.target.value)}
          />
          
          

          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Category
          </Typography>
          <Input
            size="lg"
            placeholder="Category"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          />
          
          

          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Brand
          </Typography>
          <Input
            size="lg"
            placeholder=" Brand"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={brand}
            onChange={(e)=>setBrand(e.target.value)}
          />
          
          

          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Model
          </Typography>
          <Input
            size="lg"
            placeholder="Model"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={model}
            onChange={(e)=>setModel(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Feature (true. false)
          </Typography>
          <Input
            size="lg"
            placeholder=" Feature ("
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={feature}
            onChange={(e)=>setFeature(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
          newArrivals (true. false)
          </Typography>
          <Input
            size="lg"
            placeholder=" newArrivals"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={newArrivals}
            onChange={(e)=>setNewArrivals(e.target.value)}
          />
          
          

          <Typography variant="h6" color="blue-gray" className="-mb-3">
          colors
          </Typography>
          <Input
            size="lg"
            placeholder=" colors"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={colors}
            onChange={(e)=>setColors(e.target.value)}
          />


          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Stock
          </Typography>
          <Input
            size="lg"
            placeholder=" colors"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={Stock}
            onChange={(e)=>setStock(e.target.value)}
          />
          
          

          
         
        </div>
        
        
        <Button className="mt-6" fullWidth onClick={addBtnFunc}>
         Addup
        </Button>
      

      </form>
    </Card>
    </div>

    </>
  )
}

export default AddProduct



