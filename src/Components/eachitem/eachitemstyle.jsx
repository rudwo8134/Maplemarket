import styled from 'styled-components'

const heartlogo = () =>{
  return(
      <i className='far fa-heart'></i>
  )
}
export const Heartcontainer = styled.span`

`

export const DesignItem = styled.div`
  height: 30vh;
  width: 90%;
  padding: auto;
  margin: 0;
  display: flex;
  flex-direction: column;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width:768px){
    height: 28vh;
    width: 100%;
    padding: 0;
    margin:auto;
  }
 

`
export const DesignImageContainer = styled.div`
  height: 100%;
  max-width: 100%;
  border-radius: 30px;
  overflow: hidden;
  &:hover img{
    transform: scale(1.2);
    opacity: 1;
  }
  @media screen and (max-width:768px){
    height: 80%;
    width: 80%;
  }
`
export const Designimage = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.85;
  transition: all 0.4s ease-in-out;
`
export const Desginheart = styled(heartlogo)`

`
export const Desginname = styled.span`

`
export const DesignTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem 0.5rem;
`
export const DesigntitleTitle = styled.h1`
  font-size: 1.1rem;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color:#1C4012;
  @media screen and (max-width:768px){
    width: 80%;
  }
`
export const Designtitleuserid = styled.h1`
  color:#979FA5;
  font-size:0.8rem;
  font-weight: bold;
`
export const Designtitleprice = styled.h1`
  color:#508C3F;
  font-size: 1.1rem;
  @media screen and (max-width:768px){
    font-size: 1.0rem;
  }
`
export const Dateandprice = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const Designtitledate = styled.h4`
  font-size: 0.9rem;
  color:#a9a9b1;
  @media screen and (max-width:768px){
    font-size: 0.6rem;
    margin-right: 2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  
`
