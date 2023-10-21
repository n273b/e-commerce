import { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import Product from "./product";
import './Shop.css'
// import Json from './data/db.json'

const Shop = () => {

    // const { data: products, isPending, error } = useFetch('http://localhost:8001/products')
    const [data, setData] = useState(null)
     
    useEffect(() => {
        fetch('http://localhost:8001/products')
        .then(res => res.json())
        .then(data => setData(data.products))
    }, ['http://localhost:8001/products'])
    
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1> My Shop </h1>
            </div>
            <div className="products">
                <div className="random">HEttt</div>
                {/* { error && <div>{ error }</div>}
                { isPending && <div>Loading...</div>} */}
                {data && <Product products={data}/>}
            </div>   
        </div>
    );
}
 
export default Shop;