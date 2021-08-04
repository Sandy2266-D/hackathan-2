import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from'react-router-dom';
import {ButtonContainer} from './Button';
export default class details extends Component
{
    render()
    {
        return(
 <ProductConsumer>
{value =>
{
const {id,img,info,price,title,inCart}=value.detailProducts;
return(
<div classname="container py-5">
<div classname="row">
<div classname="col-4 mx-auto text-center text-slanted text-blue my-5">
<h1>{title}</h1>
</div>
</div>
<div className="row">
<div classname="col-4 mx-auto col-md-2 my-3 text-capitalize">
<img src={img} classname="img-fluid" />
</div>
<div className="col-6 mx-auto col-md-4 my-3 text-capitalize">
<h2>model:{title}</h2>
<h4 className="text-blue">
<strong>
price:<span>$</span>{price}
</strong>
</h4>
<p className="text-capitalize font-weight-bold mt-3 mb-0">
some info about product
</p>
<p className="text-muted lead">{info}
</p>
<div>
<Link to='/'>
<ButtonContainer> Back to Products</ButtonContainer>
</Link>
<ButtonContainer cart
disabled ={inCart ? true : false}
onClick={()=>
{
value.addToCart(id);
value.openModel(id);
}
}
>
{inCart ? "inCart" : "add to cart"}</ButtonContainer>
</div>

</div>
</div>
</div>
);
}}
</ProductConsumer>
)
}
}