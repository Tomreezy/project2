import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components';
import { SliderItems } from '../data';
import { useState } from 'react';

const Container=styled.div`
width:100%;
height:100vh;
display:flex;

position:relative;
`

const Arrow =styled.div`
width:50px;
height:50px;
background-color:white;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:0;
bottom:0;
left: ${props=>props.direction==="left" && "10px"};
right: ${props=>props.direction==="right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2
`

const Wrapper= styled.div`
display:flex;
height:100%;
transform:translate(${props=>props.slideIndex * -100}vw);
transition:all 0.5s linear;
`
const Slide= styled.div`
display:flex;
align-items:center;
width:100vw;
heigth:100vh;
background-color:bg;
`

const IMG = styled.img`
width:80%;
height:100%;
object-fit:cover
`

const ImgContanier= styled.div`
height:100%;
flex:1;
`
const InfoContainer= styled.div`
padding:50px;
flex:1;
`
const Title=styled.h1`
margin: 50px 0px;
font-size:20px;
font-weight:bold;
letter-spacing:3px;
`
const Desc=styled.p``


const Button=styled.button`
font-size:20px;
background-color:transparent;
cursor:pointer;
`

export default function Slider() {

    const[slideIndex, setSlideIndex]= useState(0)

    const handleClick= (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:5)
        }else{
            setSlideIndex(slideIndex<5?slideIndex+1:0)
        }

    }



  return (
    <Container>


        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon  />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
           {SliderItems.map(item=>(
         <Slide key={item.id} bg={item.bg}>
           <ImgContanier>
            <IMG src={item.img}/>
           </ImgContanier>
           <InfoContainer>
             <Title>{item.title}</Title>
             <Desc>{item.desc}</Desc>
             <Button>Click here</Button>
           </InfoContainer>
         </Slide>
           ))}
        </Wrapper>


        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>

    </Container>
  )
}
