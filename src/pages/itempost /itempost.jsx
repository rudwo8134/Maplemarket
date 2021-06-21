import React, {useState,useEffect} from 'react'
import Image from '../../img/no-image-icon-23489.png'

import * as C from './itempoststyle'
import firebase,{firestore} from '../../firebase/util'
import {v4 as uuid} from 'uuid'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


function Itempost({currentuser}) {
  const history = useHistory()

  const [Postinfo, setPostinfo] = useState({
    userid: '',
    title: '',
    price: '',
    description:''
  })
  const [files, setfile] = useState([])
  const {UserName,email,id} = currentuser 

  useEffect(()=>{
    if(!currentuser){
      history.push('/')
      return;
    }
    axios.get('https://api.chatengine.io/users/',{
      header:{
        "project-id": process.env.REACT_APP_CHAT_ENGINE_KEY,
        "username": UserName,
        "secret": id
      }
    }).then(()=>{
    })
    .catch(()=>{
      var formdata = new FormData();
      formdata.append('email', email)
      formdata.append('username',UserName)
      formdata.append('secret',id)

      axios.post('https://api.chatengine.io/users/', 
      formdata,{headers:{'PRIVATE-KEY': "78dea8f9-5ee4-4e8c-b4fc-b3922d181f00"}})
      .then(res=>console.loge(res)).catch(err=>console.log(err))
    })
  },[currentuser,history])
 
   
  const onChangeImage = (e)=>{
    if(e.target.files.length > 5){
      alert('You can upload only 5 pictures. try again')
    }else{
    for(let i=0; i< e.target.files.length; i++){
      const imageFile = e.target.files[i]
      imageFile["id"] = uuid()
      imageFile['url'] = URL.createObjectURL(e.target.files[i])
      setfile(prev =>[...prev, imageFile])
    }}
    }

  const onSubmit = async (e)=>{
    e.preventDefault()
    let urllinks = []
    for(let i=0; i< files.length; i++){
      const storeRef = firebase.storage().ref(`images/${files[i].id}`)
      await storeRef.put(files[i])
      await storeRef.getDownloadURL().then(url=>{
        urllinks.push(url)
      })
      }
    const PostRef = await firestore.collection(`post`).doc()
    const snapshot = await PostRef.get()
    if(!snapshot.exists){
      try{
        var today = new Date()
        var date = (today.getMonth() + 1) + ' ' + today.getDate() + ' '+ today.getFullYear() + ' '  + today.getHours()+ ':' + today.getMinutes()
        await PostRef.set({
          ...Postinfo,
          userid: currentuser,
          urls:urllinks,
          date,
          comments:[],
          today
        })
        alert('upload Successfuly')
        history.push('/market')
      }catch(err){
        alert(err)
      }
    } 
   return PostRef
  }

const handlechange = (e) =>{
    const {name, value} = e.target
    setPostinfo({...Postinfo,[name]:value}) 
}

  return (
   <C.Container>
     <C.FormContainer>
       <C.FormHeader>Item Post</C.FormHeader>
       <C.FormWriter>Writer: {currentuser.UserName}</C.FormWriter>
       
       <C.FormForm onSubmit={onSubmit}>
         <C.FormContainer2>
         <C.Formlabel htmlFor='title'>Title:</C.Formlabel>
         <C.FormInput2 required type='text' onChange={handlechange} name='title' value={Postinfo.title} placeholder='Enter Title!!'></C.FormInput2>
         </C.FormContainer2>
         <C.PriceContainer>
         <C.Formlabel htmlFor='price'>Price:</C.Formlabel>
         <C.FormInput required type='number' onChange={handlechange} name='price' value={Postinfo.price} placeholder='Enter Price!!'></C.FormInput>
         <C.Price>$</C.Price>
         </C.PriceContainer>
         <C.FormContainer3>
         <C.Formlabel htmlFor='Description'>Description:</C.Formlabel>
         <C.FormInput1 required type='text' onChange={handlechange} name='description' value={Postinfo.description} placeholder='Enter Description!!'></C.FormInput1>
         </C.FormContainer3>
         <C.Formimagecontainer>
         <C.Formlabel  htmlFor='image'>Image</C.Formlabel>
         <C.Formimageinput required multiple onChange={onChangeImage} name='image' type='file'accept="image/*"></C.Formimageinput>
         <C.Formimages>
           {files.length !== 0 ? (files.map(file =>{
             return(
              <C.Formeachimage key={file.id} src={file.url} alt='img'></C.Formeachimage>
             )
           })) : (<C.Formeachimage src={Image} alt="no image"></C.Formeachimage>)}
         </C.Formimages>
         </C.Formimagecontainer>
          <C.Buttoncontainer>
            <C.FormButton type='submit'>Post</C.FormButton>
          </C.Buttoncontainer>
       </C.FormForm>
     </C.FormContainer>
   </C.Container>
  )
}
const statetoprops = createStructuredSelector({
  currentuser: selectCurrentUser
})

export default connect(statetoprops)(Itempost)
