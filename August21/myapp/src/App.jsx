import React from 'react'
import Navbar from './cart/Navbar'
import FoodItem from './components/FoodItem'
import Cart from './cart/Cart'

const App = () => {
    return (
        <div>
            <main>
                <nav>
                    <Navbar />
                </nav>
            <section>
                <article>
                    <FoodItem />
                <Cart />
                </article>
            </section>
                
            </main>

        </div>
    )
}

export default App
