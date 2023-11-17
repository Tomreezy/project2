import styled from "styled-components"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Container=styled.div`
display:flex;
margin: 3px 10px;
gap:5px
`

const Left =styled.div`
display:flex;
flex-direction:column;
flex:1;

`
const Logo=styled.h1``

const Desc=styled.p``

const IconsSocial= styled.div`
display:flex;

`

const Icon=styled.div`
background-color:;
margin: ${props=>props.m==="b"?"0 10px":"0px"};

`

const Center=styled.div`
flex:1;
`
const Title=styled.h1`
font-weight:800;
font-size:16px
`
const LinksContainer=styled.div`
display:flex;
justify-content:space-between
`

const Links = styled.div`
display:flex;
flex-direction:column;

`

const Tag=styled.a`
margin-top:10px
`

const Right = styled.div`
flex:1;
`





export default function Footer() {
  return (
    <Container>
     <Left>
      <Logo>Scelo Gumede</Logo>
      <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ad nam maiores nesciunt rem  iusto a aliquid?</Desc>
      <IconsSocial>
        <Icon >
          <FacebookOutlinedIcon />
        </Icon>
        <Icon m="b">
          <InstagramIcon />
        </Icon>
        <Icon m="b">
          <TwitterIcon  />
        </Icon>
        <Icon m="b">
          <PinterestIcon />
        </Icon>
      </IconsSocial>
     </Left>

     <Center>
      <Title>Useful Links</Title>
      <LinksContainer>
        <Links>
        <Tag>Home</Tag>
        <Tag>Man fashion</Tag>
        <Tag>Accessories</Tag>
        <Tag>Order</Tag>
        <Tag>WishList</Tag>   
        </Links>
        <Links>
        <Tag>Cart</Tag>
        <Tag>Woman</Tag>
        <Tag>My account</Tag>
        <Tag>WishList</Tag>
        <Tag>Terms</Tag>
        </Links>
      </LinksContainer>
     </Center>



     <Right>
       <Title>Contacts</Title>
       
     </Right>

    </Container>
  )
}
