import styled from 'styled-components'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container= styled.div`

`

const Wrapper = styled.div`
 padding:10px 20px;
 display:flex;
 justify-content:space-between;
 align-items:center;
`

const Left =styled.div` 
flex:1;
display:flex;
align-items:center;


`
const Center =styled.div`flex:1`


const Right =styled.div`
flex:1;
display:flex;
justify-content:flex-end;

`


const Language= styled.span`
 font-size:14px;
 cursor:pointer
`


const SearchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`

const Input =styled.input`
border:none;
outline:none;
`


const Logo =styled.h1`
font-weight:bold;
text-align:center;
`

const MenuItems= styled.div`
 fonts-size:14px;
 cursor:pointer;
 margin: 0px 5px;
`

export default function NavBar() {
  return (
    <Container>
     

     <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
               <Input />
              <SearchIcon />
            </SearchContainer>
        </Left>
        <Center>

         <Logo>     
            SCELO.
        </Logo> 

        </Center>


        <Right>
        
        <MenuItems>REGISTER</MenuItems>
        <MenuItems>SIGN IN</MenuItems>
        <MenuItems>
    
        <Badge badgeContent={3} color="primary">
       <ShoppingCartOutlinedIcon />
    </Badge>
        </MenuItems>
        </Right>
     </Wrapper>

   
    </Container>
        
  )
}
