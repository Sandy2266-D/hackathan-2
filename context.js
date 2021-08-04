import React, { Component } from 'react';
import {storeProducts,detailProducts} from './data';
const ProductContext = React.createContext(); //method
//provider
//consumer

class ProductProvider extends Component
{
    state={
        products:[],
        detailProducts:detailProducts,
        cart:[],
        modelOpen:false,
        modelProduct:detailProducts,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
        }
componentDidMount()
        {
            this.setProducts();
        }
        setProducts = ()=>
        {
        let tempProducts=[];
        storeProducts.forEach(item=>
        {
        const singleItem = {...item};
        tempProducts = [...tempProducts,singleItem];
        })
        this.setState(()=>
        {
        return{products:tempProducts}
        })
        }
getItem=(id)=>
{
const product=this.state.products.find(item=> item.id===id);
return product;
};
handleDetail=(id)=>
{
    const product=this.getItem(id);
    this.setState(()=>
    {
            return {detailProducts:product}
    });
}
addToCart = (id)=>
{
let tempProducts=[...this.state.products];
const index = tempProducts.indexOf(this.getItem(id))
const product=tempProducts[index]
product.inCart=true;
product.count=1;
const price = product.price;
product.total=price;
this.setState(()=>
{
return{products:tempProducts,cart:[...this.state.cart,product]};
},
()=>
{
console.log(this.state)
});
}

openModel =id=>
{
    const product=this.getItem(id);
    this.setState(()=>
    {
    return {modelProduct:product,modelOpen:true}
})
}
closeModel = () =>
{
    this.setState(()=>
    {
return{modelOpen:false}
    })
}

increment =(id) =>
{
console.log("increm")
}

decrement =(id) =>
{
console.log("decrem")
}

removeItem = (id) =>
{
console.log("remove")
}

clearCart = () =>
{
console.log("cart is cleared")
}

render(){
return(
<ProductContext.Provider 
value={{
...this.state,
handleDetail:this.handleDetail,
addToCart:this.addToCart,
openModel:this.openModel,
closeModel:this.closeModel,
increment:this.increment,
decrement:this.decrement,
removeItem:this.removeItem,
clearCart:this.clearCart
}}
>
{this.props.children}   
</ProductContext.Provider>
)
}
}
const ProductConsumer = ProductContext.Consumer;
export{ProductProvider,ProductConsumer}