import React, { Component } from "react";

class App extends Component {

    products = [
        { id: 1, category: "Mobiles", name: "iPhone", price: 150000 },
        { id: 2, category: "Mobiles", name: "Samsung", price: 90000 },
        { id: 3, category: "Books", name: "Atomic Habits", price: 500 },
        { id: 4, category: "Books", name: "Rich Dad Poor Dad", price: 450 },
        { id: 5, category: "Furniture", name: "Chair", price: 3000 },
        { id: 6, category: "Furniture", name: "Table", price: 5000 },
    ];

    constructor() {
        super();

        this.state = {
            selectedCategory: "Books",
        };
    }

    render() {

        const filteredProducts = this.products.filter(
            product => product.category === this.state.selectedCategory
        );

        return (
            <div>

                <button
                    onClick={() =>
                        this.setState({ selectedCategory: "Mobiles" })
                    }
                >
                    Mobiles
                </button>

                <button
                    onClick={() =>
                        this.setState({ selectedCategory: "Books" })
                    }
                >
                    Books
                </button>

                <button
                    onClick={() =>
                        this.setState({ selectedCategory: "Furniture" })
                    }
                >
                    Furniture
                </button>

                <hr />

                {filteredProducts.map(product => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>₹{product.price}</p>
                    </div>
                ))}

            </div>
        );
    }
}

export default App;




