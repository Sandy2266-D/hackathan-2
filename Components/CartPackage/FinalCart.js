import React from 'react';
import {Link} from 'react-router-dom';
export default function FinalCart({value})
{
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return (
        <React.Fragments>
            <div className="container">
                <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8">
<Link to ="/">
<button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
clear cart
</button>
</Link>
<h5>
<span classname="text-title">
subtotal: </span>
<strong>${cartSubTotal}</strong>
</h5>
<h5>
<span classname="text-title">
tax : </span>
<strong>${cartTax}</strong>
</h5>
<h5>
<span classname="text-title">
total: </span>
<strong>${cartTotal}</strong>
</h5>
</div>
</div>
</div>
</React.Fragments>
)
}