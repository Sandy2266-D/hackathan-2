import React from 'react';
export default function CartItem({item,value})
{
    const{id,title,img,price,total,count} =item;
    const{increment,decrement,removeItem}=value;
return(
    <div classname="row my-2 text-capitialize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img src={img} style ={{width:"4rem",height:"4rem"}}
            className="img-fluid"/>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span>Product :</span>{title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span>Price :</span>{price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
        <div>
        <span classname="btn btn-black mx-1" onClick={()=>decrement(id)}>
            -
        </span>
        <span className="btn btn-black mx-1">{count}</span>
        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
        +
        </span>
</div>
</div>
</div>
<div className="col-10 mx-auto col-lg-2">
    <div className="cartIcon">
    <button onClick={()=>removeItem(id)}><h6>Remove</h6>
    </button>
    </div>
</div>
<div className="col-10 mx-auto col-lg-2">
<strong>item total : $ {total }</strong>
</div>
</div>
)
}
