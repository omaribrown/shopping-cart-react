import React from 'react';
import './App.css';
// import Cart from './components/Cart'
// import Items from './components/Items'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      items: [
        {
          name: "Wilson Football",
          quantity: 1,
          price: 14.99
        }
        // {
        //   name: "Wilson Basketball",
        //   quantity: 1,
        //   price: 19.99
        // },
        // {
        //   name: "Nike Golf Balls 6ct",
        //   quantity: 1,
        //   price: 9.99
        // }
      ]
    }

    

  }
  render() {
    let item1 = this.state.items[0]
  return (
    <div className="App">
      <div className="items-and-cart-total">

        <div className='items'>
          <h1>items</h1>
          <div className="itemName">
            <h3>{item1.name}</h3>
          </div>
          <div className='itemQuantity'>
            <p>Quantity: {item1.quantity}</p>
          </div>
          <div className='itemPrice'>
            <p>Price: {item1.price}</p>
          </div>
        </div>

        <div className="cartTotal">
          <h1>cart total</h1>
        </div>

      </div>



      <div class='summary'>
        <h1>summary</h1>
      </div>
    </div>
  )
  }
}

export default App;
