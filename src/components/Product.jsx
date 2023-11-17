import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';




const Info= styled.div`
z-index:3;
opacity:0;
position:absolute;
background-color:black;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center
`


const Container = styled.div`
flex:1;
min-width:300px;
margin:20px;
position:relative;

&:hover ${Info}{
opacity:0.2;
}


`


const ImgContainer=styled.div`

}
`
const Img = styled.img`
width:100%;
height:100%;
object-fit:cover;

`


const Icon=styled.div`
z-index:5;
background-color:black;
margin:10px;
font-size:20px;
color:white;
font-weight:bold;
transition:all 0.2s ease-out;

&:hover{
  transform:scale(1.3)
}
`



export default function Product({item}) {
  return (
    <Container key={item.id} >
        
       <ImgContainer>
        <Img src={item.img}/>
       </ImgContainer>
       <Info>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <DataSaverOnOutlinedIcon />
        </Icon>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
       </Info>

    </Container>
  )
}
