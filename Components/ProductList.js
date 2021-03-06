import React, { Component } from 'react';
import Products from './Products';
import Title from './Title';
import {ProductConsumer} from "../context";
export default class ProductList extends Component
{
 render()
    {
//console.log(this.state.products)
return(
<React.Fragment>
<div className="py-5">
<div className="container">
<Title name="OUR" title="PRODUCTS"/>
<div class="row">
    <ProductConsumer>
    {value=>{
        return value.products.map(product=>
        {
        return <Products key={product.id} product={product}/>
        });
    }}
</ProductConsumer>
</div>
</div>
</div>
</React.Fragment>  
 )       
}
}