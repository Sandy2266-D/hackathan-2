import React, { Component } from 'react';
export default function Title({name,title})
{
return(
<div className="row">
<div classname="col-10 mx-auto my-2 text-center text-title">
<h1 classname="text-capitalize font-weight-bold">{name}
<strong classname="text-blue">{title}</strong>
</h1>
</div>
</div>
);

}