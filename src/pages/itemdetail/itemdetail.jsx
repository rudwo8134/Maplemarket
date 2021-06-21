import React,{useState,useEffect} from 'react'
import { firestore } from '../../firebase/util'
import image from '../../img/1.JPG'
import './itemdetail.css'
import * as L from './itemdetailstyle'
import {createStructuredSelector} from 'reselect'
import {selectUsername,selectCurrentUser} from '../../redux/user/user.selectors'
import {connect} from 'react-redux'
import axios from 'axios'
import {useHistory} from 'react-router-dom'




function Itemdetail({ID,currentUsername,CurrentUser}) {
  const history = useHistory()
  const postid = ID.match.params.id
  const [data,setdata] = useState(null)
  const [comment,setcomment] = useState()
  const [all,setall] = useState()
  const updateitem = async() =>{
    const docRef = (await firestore.doc(`/post/${postid}`).get()).data()
    const CommentRef = await firestore.collection('comment').get()
    const Commentdata = CommentRef.docs.filter(li=>li.data().postid === postid).map(li=>{
      const {Username,comment,postid,date,newdate} = li.data()
      return{
        newdate,
        Username,
        comment,
        postid,
        date
      }
    })
    setall(Commentdata.sort((a,b)=>b.newdate-a.newdate))
    const {date,description,price,title,urls,userid:{UserName,email}} = docRef
    setdata({
      title,
      price,
      description,
      date,
      urls,
      UserName,
      email,
    })
  }
  const additem = async(e)=>{
    e.preventDefault()
    const docRef = await firestore.collection(`comment`).doc()
    var today = new Date()
    var newdate = today;
    var date = (today.getMonth() + 1) + ' ' + today.getDate() + ' '+ today.getFullYear() + ' '  + today.getHours()+ ':' + today.getMinutes()
    await docRef.set({
      newdate,
      postid,
      Username: currentUsername,
      comment,
      date:date
    })
    setcomment('')
  }
  useEffect(() => {
    updateitem()
  }, [comment])

  const onchange = (e) =>{
    const value = e.target.value
    setcomment(value)
  }

  const [main, setmain] = useState()
  const handleevent=(e)=>{
    setmain(e.target.src)
  }


  const Handlechat = async ()=>{
    var formdata = new FormData();
    formdata.append('usernames',data.UserName)
    formdata.append('is_direct_chat',true)
    formdata.append('title',data.title)
    
   
   await axios.put(
    `https://api.chatengine.io/chats/`,
    formdata,
   {headers:{ 'Project-ID': process.env.REACT_APP_CHAT_ENGINE_KEY,
   'User-Name': currentUsername,
   'User-Secret': CurrentUser.id,}} ).then(res=>console.log(res)).catch(err=>console.log(err))  
   
   history.push('/chat')
  }



  return (
    <L.Container>
      <L.ItemContainer>
        <L.ImageDetail>
          <L.Imageslider>
            <L.Imageproduct>
              {data && data.urls.map((img) =>(
                <L.Imageproductimg onClick={handleevent} src={img} alt='img'/>
              ))}
            
            </L.Imageproduct>
            <L.Imagepreveiw>
             <L.Imagepreviwimg src={main ? (main) : (data && data.urls[0])} alt='img'/>
            </L.Imagepreveiw>
          </L.Imageslider>
        </L.ImageDetail>
        <L.ItemDetail>
         <L.Usercontainer>
           <L.UserContainerall>
           <L.Userimg src={image} alt="name"/>
          <L.UserInfoContainer>
              <L.UserInfoName>{data && data.UserName}</L.UserInfoName>
            <L.UserInfoAddress>Kyoungjae shin</L.UserInfoAddress>
          </L.UserInfoContainer>
           </L.UserContainerall>
           <L.Loveconstainer>
            <L.LoveMark/>
              <L.Lovetext>{data && data.price}</L.Lovetext>
         </L.Loveconstainer>
         </L.Usercontainer>
        <L.BodyContainer>
              <L.BodyTitle>{data && data.title}</L.BodyTitle>
          <L.Bodydate>{data && data.date}</L.Bodydate>
          <L.BodyPrice>{data && data.price}$</L.BodyPrice>
          <L.BodyPara>
            {data && data.description}
          </L.BodyPara>
        </L.BodyContainer>
        <L.ContactButton onClick={Handlechat}>contact with seller</L.ContactButton>
        </L.ItemDetail>
        <L.Cocontainer>
        <L.CoFormcontainer>
        <L.CoForm  onSubmit={additem}>
          <L.CoFormname>{currentUsername} : </L.CoFormname>
          <L.CoForminput value={comment} onChange={onchange} type='text' placeholder='enter your comment'/>
          <L.CoFormbutton type='submit'>Add</L.CoFormbutton>
        </L.CoForm>
        </L.CoFormcontainer>
        <L.CoCommentcontainer>
        {
          all && all.map(li=>{
            const {Username,comment,date} =li
            return(
              <L.CoCommentall>
              <L.CoCommentuserandcomment>
              <L.CoComentusername>{Username}</L.CoComentusername>
              <L.CoComentdate>{date}</L.CoComentdate>
              </L.CoCommentuserandcomment>
              <L.CoComentcoment>{comment}</L.CoComentcoment> 
              </L.CoCommentall>     
            )
          })          
        }
        </L.CoCommentcontainer>
        </L.Cocontainer>
      </L.ItemContainer>
    </L.Container>
  )
}

const statetoprops =createStructuredSelector({
  currentUsername: selectUsername,
  CurrentUser: selectCurrentUser
})

export default connect(statetoprops)(Itemdetail);