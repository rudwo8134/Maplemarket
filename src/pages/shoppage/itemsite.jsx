import React,{useState,useEffect} from 'react'

import {Design,Container,Title,TitleH2,TitleP,DesignContent} from './itemsitestyle'

import ItemContainer from '../../Components/eachitem/eachitem'

import {firestore} from '../../firebase/util'
import {v4 as uuid} from 'uuid'

function Itemsite() {
  const [data,setdata] =useState()
  const Getdata = async()=>{
    const postRef = await firestore.collection('post').get()
    const PostallData = postRef.docs.map(list =>{
      const {urls,price,title,date,userid:{UserName,id},today} =list.data()
      const  lol = list.id
      return{
        title:title,
        price:price,
        imgurl:urls,
        Username:UserName,
        id:id,
        Date:date,
        postid:lol,
        today
      }
    })
    return PostallData
  }

  useEffect(async()=>{
    const data1 =  await Getdata()
    try{
      setdata(data1.sort((a,b)=>b.today-a.today))
    }catch(err){
      alert(err)
    }
  },[])
  return (
    <Design>
      <Container>
        <Title>
          <TitleH2>Recent Items</TitleH2>
          <TitleP>recent items on the blog</TitleP>
        </Title>
        <DesignContent>
          {data && data.map(all =>{
            const {title,price,imgurl,Username,id,Date,postid} = all;
            const i = uuid()
            return(
              <ItemContainer 
              key={i}
              title={title}
              price={price}
              imgurl={imgurl}
              Username={Username}
              id={id}
              date={Date}
              postid={postid}
              />
            )

          }
          )}
         
        </DesignContent>
      </Container>
    </Design>
  )
}

export default Itemsite
