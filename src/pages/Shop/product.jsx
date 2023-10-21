import React from "react";
// import products from './db.json';

const Product = ({ products }) => {
    // const { id, productName, price, productImage } = props
    return (
        <div className="products">
            { products.map((product) => {
                <div className="product" key={product.id}>
                    <h1>{ product.productName }</h1>
                    <img src={ product.productImage } alt={ product.productName } />
                </div>
            })}
        </div>
    );
}
 
export default Product;