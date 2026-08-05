import React, { Component } from 'react'
import StatewithClass from './StatewithClass'
import Product from './Product'
const App = () => {

    const Products = [
        {
            name: "iphone",
            description: "this is an iphone",
            price: 150000,
            rating: "*****",
        }, {
            name: "iphone",
            description: "this is an iphone",
            price: 150000,
            rating: "*****",
        }, {
            name: "iphone",
            description: "this is an iphone",
            price: 150000,
            rating: "*****",
        }, {
            name: "iphone",
            description: "this is an iphone",
            price: 150000,
            rating: "*****",
        }, {
            name: "iphone",
            description: "this is an iphone",
            price: 150000,
            rating: "*****",
        }, {
            name: "iphone",
            description: "this is an iphone",
            price: 150000,
            rating: "*****",
        }, {
            name: "iphone",
            description: "this is an iphone",
            price: 150000,
            rating: "*****",
        }, {
            name: "iphone",
            description: "this is an iphone",
            price: 150000,
            rating: "*****",
        }, {
            name: "iphone",
            description: "this is an iphone",
            price: 150000,
            rating: "*****",
        }, {
            name: "iphone",
            description: "this is an iphone",
            price: 150000,
            rating: "*****",
        }
    ]

    return (
        <div>
            {Products.map((product) =>
                <Product
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                />
            )}
        </div>
    )
}

export default App;
