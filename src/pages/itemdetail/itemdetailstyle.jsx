import styled from 'styled-components'
import {useState} from 'react'



export const Container = styled.div`
  padding: 6rem calc((100vw - 900px) / 2);
  margin:auto;
  background-image: white;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width:768px){
    padding-top:0rem;
  }
`

export const ItemContainer = styled.div`
  background: transparent;
  height: 100%;
`
// image detail

export const ImageDetail = styled.div`
  height: 50vh;
  margin: 0px;
  padding: 0px;
`
export const Imageslider = styled.div`
  padding:1rem 0rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Imageproduct = styled.div`
  display: flex;
  flex-direction:column;
  height: 100%;
  justify-content: space-between;
  width:14%;
`
export const Imageproductimg = styled.img`
  height: 23%;
  width: 100%;
  border-radius: 20px;
  opacity: 0.8;
  transition: all 0.5s ease-in-out;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
`
export const Imagepreveiw = styled.div`
height:100%;
margin-left : 1rem;
width:70%;
overflow: hidden;
`

export const Imagepreviwimg = styled.img`
height: 100%;
width: 100%;
border-radius: 20px;
transition: all 0.5s ease-in-out;
&:hover{
  transform: scale(1.2);
}
`

export const Cocontainer = styled.div`
width: 90%;
padding-top: 3rem;
margin:auto;
color: white;

`
export const CoFormcontainer = styled.div``
export const CoForm = styled.form`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;
  @media screen and (max-width:768px){
    width: 100%;
}
`
export const CoFormname = styled.h3`
font-size:1.2rem;
color:#29591C;
@media screen and (max-width:768px){
  display: none;
}
`
export const CoFormbutton = styled.button`
border: 2px solid #C1D9A9; 
background: #508C3F;
width: 8%;
border-radius: 30px;
color:white;
transition: all 0.5s ease-in-out;
&:hover{
  background:#C1D9A9;
  color: #1C4012;

}
@media screen and (max-width:768px){
  width: 17%;
}
`
export const CoForminput = styled.input`
  font-size: 1.2rem;
  width: 79%;
  border:none;
  border-bottom: 2px solid #4F8C3F;
  background: transparent;
  color:#4F8C3F;
`

export const CoCommentcontainer = styled.div`
`
export const CoCommentall =styled.div`
display: flex;
flex-direction: column;
`
export const CoCommentuserandcomment =styled.div`
display:flex;
flex-direction:row;
justify-content: flex-start;
align-items: center;
margin-top:2rem;
margin-bottom: 1rem;
`
export const CoComentusername = styled.h3`
  font-size:1.2rem;
  margin-left: 1rem;
  background: transparent;
  color: #508c3f;
`
export const CoComentdate = styled.h2`
  font-size: 0.8rem;
  text-align: end;
  color:#86869e;
  margin-left: 1rem;
`
export const CoComentcoment = styled.p`
  border: 2px solid #C1D9A9;
  width:100%;
  border-radius: 30px;
  background: #1C4012;
  color:white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
 
`



// item detail
export const ItemDetail = styled.div`
  height: 30%;  
  padding:1rem 3.6rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:768px){
    padding: 1.3rem;
  }
`

export const Usercontainer = styled.div`
border-bottom: 1px solid #cac5c5;
padding-bottom: 1rem;
display:flex;
align-items: center;
justify-content: space-between;

`
export const Userimg = styled.img`
 height: 2.5rem;
 width: 2.5rem;
 border-radius: 50%;
` 
export const UserContainerall = styled.div`
display: flex;
flex-direction: row;
`
export const UserInfoContainer = styled.div`
margin-left: 0.5rem;
display: flex;
flex-direction: column;
align-self: center;
justify-content: center;
`
export const UserInfoName = styled.h1`
font-size: 1.2rem;
color:#040404;
`
export const UserInfoAddress = styled.h3`
font-size: 0.7rem;
color:#b2d1eb;
`

export const Loveconstainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`

export const Lovetext = styled.h1`
  font-size: 1.3rem;
  margin-left: 1rem;
  color:#080808;
  transform:scale(1.2);
`

const Love = () => {
  const [style, setStyle] = useState({
    color: '#FFD432',
    transform: '',
    fontSize: "1.3rem",
    transition: "all 0.5s ease-in-out"
  })
  const changecolor = ()=>{
    setStyle({...style,color:'red',transform:"scale(1.2)"})
  }
  const changecolor2 = ()=>{
    setStyle({...style,color:'#FFD432',transform:""})
  }

  return(
    <i onMouseEnter={changecolor} onMouseOut={changecolor2} style={style} className="fas fa-heart"></i>  
  )
}

export const LoveMark = styled(Love)`
 & i:hover i{
   font-size: 1.5rem;
 }
`

export const BodyContainer = styled.div`
`
export const BodyTitle = styled.h1`
 font-size: 1.8rem;
 font-weight: bold;
 margin-top: 1rem;
 color: #070706d5;
`
export const Bodydate = styled.h3`
 font-size: 0.9rem;
 font-weight: 300;
 margin-top: 0.3rem;
 color:#726763
`
export const BodyPrice = styled.h3`
font-size: 1.5rem;
margin-top: 0.3rem;
color:#F7A656;

`
export const BodyPara = styled.p`
margin-top: 1rem;
`

export const ContactButton = styled.button`
width: 40%;
margin: auto;
font-size: 1.3rem;
font-weight: bold;
background:transparent;
border:2px solid #508c3f;
color:#508c3f;
border-radius: 30px;
transition: all 0.5s ease-in-out;
&:hover{
  background: #508c3f;
  color: #010101;
}
@media screen and (max-width:768px){
  margin-top: 2rem;
  width: 90%;
}
`
