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
          quantity: 2,
          price: 14.99,
        },
        {
          name: "Wilson Basketball",
          quantity: 1,
          price: 19.99
        },
        {
          name: "Nike Golf Balls 6ct",
          quantity: 1,
          price: 9.99
        }
      ]
    }
  }

  // incQuantity = (i) => {
  //   this.setState({
  //     quantity: this.state.items[i].quantity++
  //   })
  // }
  render() {
    // initializing variables
    let item1 = this.state.items[0]
    let item2 = this.state.items[1]
    let item3 = this.state.items[2]
    let subtotal = (item1.price * item1.quantity) + (item2.price * item2.quantity) + (item3.price * item3.quantity)
    let salesTax = 0.06
    // let taxedTotal = (subtotal * .06).toFixed(2)
    let shipping = 9.99


  return (
    <div className="App">
      <div className="items-and-cart-total">

      <div className="cartTotal">
          <h1>Cart Total</h1>
          <h3>Subtotal: ${subtotal}</h3>
        </div> 

        <div className='items'>
          <h1>Items</h1>

          {/* ITEM 1 */}
          <div className="itemName">        
            <h3>{item1.name}</h3>
          </div>
          <div class='itemChunk'>
          <div class='itemImg'>
            <img src={require('./assets/football.jpg')} />
          </div>
          <div className='itemQuantity'>
            <p>Quantity: {item1.quantity}</p>
          </div>
          <div className='incButtons'>
            <button 
              // onClick={item1.quantity++}
              >+</button>
            <button>-</button>
          </div>
          <div className='itemPrice'>
            <p>Price: {item1.price}</p>
          </div>
          <div className='itemTotal'>
            <p>Item Total: ${item1.price * item1.quantity}</p>
          </div>
          </div>


          {/* ITEM 2 */}
          <div className="itemName">
            <h3>{item2.name}</h3>
          </div>
          <div class='itemChunk'>
          <div class='itemImg'>
          <img src={require('./assets/basketball.jpg')} />
          </div>
          <div className='itemQuantity'>
            <p>Quantity: {item2.quantity}</p>
          </div>
          <div className='incButtons'>
            <button>+</button>
            <button>-</button>
          </div>
          <div className='itemPrice'>
            <p>Price: ${item2.price}</p>
          </div>
          <div className='itemTotal'>
            <p>Item Total: ${item2.price * item2.quantity}</p>
          </div>
          </div>


          {/* ITEM 3 */}
          
          <div className="itemName">
            <h3>{item3.name}</h3>
          </div>
          <div class='itemChunk'>
          <div class='itemImg'>
          <img src={require('./assets/golf-balls.jpg')} />
          </div>
          <div className='itemQuantity'>
            <p>Quantity: {item3.quantity}</p>
          </div>
          <div className='incButtons'>
            <button>+</button>
            <button>-</button>
          </div>
          <div className='itemPrice'>
            <p>Price: ${item3.price}</p>
          </div>
          <div className='itemTotal'>
            <p>Item Total: ${item3.price * item3.quantity}</p>
          </div>
          </div>
        </div> {/* END OF ITEMS */}

      </div> {/* END OF ITEMS AND SUBTOTAL */}



      <div class='summary'>
        <h2>Summary</h2>
        <h3>Subtotal: ${subtotal} </h3>
        <h3>Shipping: ${shipping}</h3>
        <h3>Tax: ${(subtotal * .06).toFixed(2)}</h3>
        <br />
        <h2>Total: ${((subtotal * salesTax) + subtotal + shipping).toFixed(2)}
        {console.log(subtotal)}</h2>
      </div>
    </div>
  )
  }
}

export default App;
