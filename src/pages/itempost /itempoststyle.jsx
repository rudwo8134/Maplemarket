import styled from 'styled-components'
import style from 'styled-components'
import Image from '../../img/christina-deravedisian-bUoE-w8DTck-unsplash.jpg'


export const Container = styled.div`
 padding: 0.5rem calc((100vw - 1000px) / 2);
 background: linear-gradient(to top,rgba(198, 198, 198, 0.8), rgba(255, 255, 255, 1)),url(${Image});
 background-repeat: no-repeat;
 background-size: cover;
 @media screen and (max-width:768px){
   padding-top: 0;
 }
`
export const FormContainer =styled.div`
 display: flex;
 flex-direction: column;
 padding: 0rem 4rem;
 color:#1C4012;
`
export const FormHeader = styled.h1`
 text-align: center;
 font-size: 1.9rem;
 padding-top: 6rem;
 @media screen and (max-width:768px){
   padding-top: 0.5rem;
 }
` 
export const FormWriter = styled.h2`
  padding: 0.5rem 0rem;
  text-align: end;
  font-size: 1.2rem;
  color:#1C4012;
  @media screen and (max-width:768px){
    padding: 0.5rem;
    margin:0;  
    font-size: 0.7rem;
  }
`
export const FormForm = styled.form`

`
export const Formlabel =styled.label`
  font-size: 1.2rem;
  width: 7%;
  @media screen and (max-width:768px){
    font-size: 1.0rem;
    width: 10%;
  }
`
export const FormInput =styled.input`
  font-size: 1.2rem;
  background: transparent;
  border:none;
  padding: 0;
  margin: 1rem;
  margin-right: -0.2rem;
  text-align: end;
  width: 16%;
  color: #29591C;
  border-bottom: 2px solid #29591C ;
  &::placeholder{
    font-size:1.2rem;
    color:#508C3F;
    padding: 1rem;
  }
  @media screen and (max-width:768px){
    margin-right:0;
    padding: 0;
    width: 50%;
    font-size: 1rem;
    &::placeholder{
    font-size:1.0rem;
  
  }
  }

`
export const FormInput2 =styled.input`
  font-size: 1.2rem;
  background: transparent;
  border:none;
  padding: 0;
  margin: 1rem 0;
  width: 50%;
  color: #29591C;
  border-bottom: 2px solid #29591C ;
  &::placeholder{
    font-size:1.2rem;
    color:#508C3F;
    padding: 1rem;
  }
  @media screen and (max-width:768px){
    margin-left:1rem;
    padding: 0;
    width: 70%;
    font-size: 1rem;
    &::placeholder{
    font-size:1.0rem;
  }}
`
export const FormInput1 =styled.input`
  height: 30vh;
  margin: 1rem 0;
  background: transparent;
  color: #29591C;
  display: flex;
  text-align: start;
  font-size: 1.2rem;
  border: 2px solid #29591C ;
  border-radius: 30px;
 

  &::placeholder{
    font-size:1.2rem;
    color:#508C3F;
    position: relative;
    top:0;
    padding: 1rem;
  }
  @media screen and (max-width:768px){
    font-size: 1rem;
    width: 100%;
    &::placeholder{
    font-size:1.0rem;}}
`

export const PriceContainer = styled.div`
  display:flex;
  align-items: center;


`

export const Price = styled.span`
font-size:1.2rem

`

export const FormContainer2 = styled.div`
  display: flex;
  align-items: center;
 
`
export const FormContainer3 = styled.div`
  display: flex;
  flex-direction: column;
`
export const Formimageinput = styled.input`
  margin-left: 1rem;
`

export const Formimagecontainer = style.div`
  display:flex
  flex-direction: column;
  align-items: center;
` 
export const Formimages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 3rem 0rem;
  
  @media screen and (max-width:768px){
    margin: 1rem 0rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }
`
export const Formeachimage = styled.img`
height: 7.5rem;
@media screen and (max-width:768px){
  height: 5.5rem;
  }
`
export const FormButton = styled.button`

  width: 20%;
  color:#1C4012;
  font-size: 1.3rem;
  padding : auto;
  margin: auto;
  margin-bottom: 2rem;
  background-color: transparent;
  border: 2px solid #29591C;
  border-radius: 30px;
  &:hover{
    background:#B8D9A0;
    color:white;
  }
  @media screen and (max-width:768px){
    width: 90%;
   margin-bottom: 1rem;
  }

`
export const Buttoncontainer = styled.div`
margin-top: 2rem;
width: 100%;
display: flex;
align-items: center;
`