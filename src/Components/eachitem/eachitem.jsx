import React from 'react'
import {useHistory} from 'react-router-dom'

import {DesignItem,DesignImageContainer,Designimage,
 Dateandprice,Designtitledate,DesignTitle,DesigntitleTitle,Designtitleprice,Designtitleuserid} from './eachitemstyle'



function Eachitem(props) {
  const history =useHistory()
  const {title,price,imgurl,Username,date,postid} = props
  return (
       <DesignItem onClick={()=>history.push(`/market/${postid}`)}>
       <DesignImageContainer>
         <Designimage  src={imgurl[0]} alt='image'></Designimage>
       </DesignImageContainer>
       <DesignTitle>
      <DesigntitleTitle href="#">{title}</DesigntitleTitle>
      <Designtitleuserid>{Username}</Designtitleuserid>
      <Dateandprice>
      <Designtitleprice href="#">{price}$</Designtitleprice>
      <Designtitledate href="#">{date}</Designtitledate>
      </Dateandprice>
    
       </DesignTitle>
     </DesignItem>
     )
}

export default Eachitem
