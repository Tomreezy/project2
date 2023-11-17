import styled from "styled-components"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Container=styled.div`
display:flex;
flex-direction:column;
background-color:pink;
align-items:center;
justify-content:center;
height:70vh;

`
const Title=styled.h1`
font-weight:900;
font-size:70px

`
const Desc=styled.p`
font-weight:300;

`
const InfoCont=styled.div`
display:flex;
width:40vw;
justify-content:space-between;
background-color:white;

`
const Input = styled.input`
flex:8;
border:none;
outline:none;
padding:10px;
`

const Button=styled.button`
flex:1;
background-color:teal;
height:100%;
width:100%;
color:white
`

export default function Newsletter() {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Get timely updates from your favourite products</Desc>
        <InfoCont>
            <Input placeholder="place your email"/>
            <Button>
            <SendOutlinedIcon   />
            </Button>
        </InfoCont>
    </Container>
  )
}
