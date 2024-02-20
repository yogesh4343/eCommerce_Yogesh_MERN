import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Tags = ({tag }) => {

  // const [icon, setIcon] = useState()

  // console.log(<tagIcon />)
  return (
    <>
    <div className="categoryTag flex flex-column  items-center gap-2 "> 
        <div className="categoryLogo w-9 h-9 bg-blue-300 rounded-2xl flex flex-column  text-center items-center justify-center   ">
      <LocalOfferIcon />
        {/* {icon} */}
        </div>
        <div className="category font-bold text-blue-gray-900 ">

        {tag}
        </div> 
        </div>
    </>
  )
}

export default Tags
