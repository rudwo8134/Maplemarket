import styled,{css} from 'styled-components'

const Usericon = ()=>{
  const stylelol={
    textAlign: 'center',
    lineHeight: '55px',
    color: '#acacac',
    fontSize: '1.5rem' 
  }
  return(
    <i style={stylelol}className="fas fa-user"></i>
  )
}
const Passwordicon = ()=>{
  const stylelol={
    textAlign: 'center',
    lineHeight: '55px',
    color: '#acacac',
    fontSize: '1.5rem' 
  }
  return(
    <i style={stylelol}className="fas fa-lock"></i>
  )
}
const emailicon = ()=>{
  const stylelol={
    textAlign: 'center',
    lineHeight: '55px',
    color: '#acacac',
    fontSize: '1.5rem' 
  }
  return(
    <i style={stylelol}className="fas fa-envelope"></i>
  )
}
const Formstyle = css`
   display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.2s 0.7s ease-in-out;
`

export const Container = styled.div`
position: relative;
background-color: #fff;
min-height: 90vh;
overflow: hidden;
&::before{
  content: '';
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: ${({control})=>control ? `52%`:`48%`};
  background-image: linear-gradient(-45deg, #4F8C3F 0%, #4F8C3F 100%);
  transform: ${({control})=>control ? `translate(100%,-50%)`:`translateY(-50%)`};
  border-radius: 50%;
  z-index: 6;
  transition: 1.8s ease-in-out;
}
`

export const FormContainer = styled.div`
   position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  @media screen and (max-width:768px){
  width :90% ;
  }
  

`


export const Title = styled.h2`
 font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
  @media screen and (max-width:768px){
    font-size: 1.4rem;
   }
`

export const InputField = styled.div`
   max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
  @media screen and (max-width:768px){
    width: 65%;
    height: 55px;
   }
`

export const Usericondisplay = styled(Usericon)`
`
export const PasswordIcondisplay =styled(Passwordicon)`
`
export const EmailIcondisplay = styled(emailicon)``
 

export const UsernameInput = styled.input`
  text-align: center;
  line-height: 55px;
  color: #acacac;
  font-size: 1.5rem;
  border:none;
  background-color: transparent;
  &::placeholder{
    color: #aaa;
  font-weight: 500;
  @media screen and (max-width:768px){
  font-size:1.2rem ;
  }
  }
`
const Btn = css`
width: 150px;
  height: 49px;
  outline: none;
  border: none;
  border-radius: 48px;
  background-color: #4F8C3F;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: all 0.5s;
  cursor: pointer;
  &:hover{
    background-color: #C1D9A9;
  }
  `
export const BtnSolid = styled.input`
  ${Btn}
`

export const SocialText = styled.p`
 padding: 0.7rem 0;
`
export const SocialMedia = styled.div`
 display: flex;
  justify-content: center;
`
export const SocialIcon = styled.button`
  height: 46px;
  width: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.3rem;
  border-radius: 50%;
  transition: all 0.5s;
  background-color: transparent;
  color: #333;
  &:hover{
    color: #C1D9A9;
    border-color: #508C3F;
  }
`

export const SigninSignup = styled.div`
position: absolute;
  top: 50%;
  left:  ${({control})=>control ? '25%':'75%'};
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;


`

export const Signinform = styled.form`
  ${Formstyle};
  z-index: ${({control})=>control ? '1':'2'};
  opacity: ${({control})=>control ? '0':'1'};
`
export const SignUpform = styled.form`
 ${Formstyle};
  z-index: ${({control})=>control ? '2':'1'};
  opacity: ${({control})=>control ? '1':'0'};
  @media screen and (max-width:768px){
    margin-left: 5rem;
  }

  

 
`

export const Image = styled.img`
  width: 100%;
  transition: 1.1s .4s ease-in-out;
  @media screen and (max-width:768px){
    width: 80%;
  }
`

export const PanelContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 90vh;
  top:0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2,1fr);
`
const Panel = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 7;
`
export const LeftPanel = styled.div`
  ${Panel}
  pointer-events: all;
  padding: 3rem 17% 2rem 12%; 
  ${({control})=>control && css`
    pointer-events: none;
    &>img{
      transform: translate(-800px);
    }
    &>div{
      transform: translate(-800px);
    }
  `}
`

export const RightPanel = styled.div`
 ${Panel}
  pointer-events: none;
  padding: 3rem 12% 2rem 17%; 
  & > div{
    transform: translateX(800px);
  };
  & > img{
    transform: translateX(800px);
  };

    ${({control})=> control && css`
    pointer-events: all;
    &>img{
      transform: translateX(0%);
    }
    &>div{
      transform: translateX(0%);
    }
  `}
  

`
export const Content = styled.div`
  color: #fff;
  transition: .9s .6s ease-in-out;
`
export const PanelH3 = styled.h3`
    font-weight: 600;
   line-height: 1;
   font-size: 1.5rem;
`
export const PanelP = styled.p`
    font-size: .95rem;
    padding: 0.7rem 0;
`
export const BtnTransparent = styled.button`
  ${Btn}
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width:130px;
  font-size:0.8rem;
`