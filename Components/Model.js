import React, { Component } from 'react';
import styled from"styled-components";
import {ProductConsumer} from '../context';
import {Link} from'react-router-dom';
import {ButtonContainer} from './Button';

export default class Model extends Component
{
    render()
    {
        return(
            <ProductConsumer>
                {
                    (value) =>
                     {const {modelOpen,closeModel}=value;
                     const {img,title,price}= value.modelProduct;
                     if(!modelOpen)
                     {
                         return null;
                     }
                     else{
                         return (
                         <ModelContainer>
                            <div class="container">
                            <div class="row">
                                <div id="modal" className="col-4 mx-auto" col-md-4 col-lg-5 text-center text-capitialize>
                                    <h5>Item Added to cart</h5>
                                    <img src={img} className="img-fluid"/>
<h5>{title}</h5>
<h5 className="text-muted">price:${price}</h5>
<Link to='/'>
<ButtonContainer onClick ={()=>closeModel()}>
Continue Shopping
</ButtonContainer >
</Link>
<Link to='/Cart'>
<ButtonContainer cart onClick ={()=>closeModel()}>
Go To Cart
</ButtonContainer >
</Link>
</div>
</div>
</div>
</ModelContainer>
 )
}
}
}
</ProductConsumer>
        )           
    } 
}

const ModelContainer=styled.div
`
position:fixed;
top:0;
right:0;
left:0;
bottom;
background:rgba(0,0,0,0.3)
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite)
}
`;