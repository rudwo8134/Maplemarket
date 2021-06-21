import React,{useState,useEffect} from 'react'
import {Itemcontainer,Background,BannerTitleP,BannerTitlespan,Banner,Container,BannerTitle,Form,SearchInput,Searchbutton,Searchlogo} from './homestyle'
import {firestore} from '../firebase/util'
import ItemContainer from '../Components/eachitem/eachitem'
import {v4 as uuid} from 'uuid'

function Home() {
  const [data, setdata] = useState()
  const [search, setsearch] = useState('')
  const getdata = async()=>{
    const postRef = await firestore.collection('post').get()
    const Postdata = postRef.docs.map(list=>{
      const {urls,price,title,date,userid:{UserName,id},description,today} =list.data()
      const  lol = list.id
      return{  
        title:title,
        price:price,
        imgurl:urls,
        Username:UserName,
        id:id,
        Date:date,
        postid:lol,
        description:description,
        today
      }
    })
    setdata(Postdata.sort((a,b)=>b.today-a.today))
  }
  useEffect(()=>{
    getdata()
  },[search])
  return (
    <Background>
    <Banner>
      <Container>
        <BannerTitle>
          <BannerTitlespan>Maple </BannerTitlespan> Market
        </BannerTitle>
        <BannerTitleP>everything that you want to buy it</BannerTitleP>
        <Form>
          <SearchInput onChange={event =>{setsearch(event.target.value)}}type = "text" className = "search-input" placeholder="find your item . ."></SearchInput>
          <Searchbutton></Searchbutton>
          <Searchlogo></Searchlogo>
        </Form>
      </Container>
    </Banner>
    <Itemcontainer>
    {data && data.filter((lo)=>{
      if(search === ""){
        return 
      }else if(lo.title.toLowerCase().includes(search.toLowerCase()) || lo.description.toLowerCase().includes(search.toLowerCase()))
      { return lo}
    }).map(all =>{
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
              ></ItemContainer>
            )
    })}
    </Itemcontainer>
  </Background>
  )
}

export default Home
