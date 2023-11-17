import styled from "styled-components"
import { products } from "../data"
import Product from "./Product"

const Container=styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`


export default function Products() {
  return (
    <Container>
        {products.map((item)=>(
            <Product  item={item} />
        ))}
    </Container>
  )
}

                