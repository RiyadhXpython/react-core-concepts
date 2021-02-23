// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  
  const nayoks = ["shanto", "shakib", "sajin", "bappi"]
  const products = [
    {name:"photoshop" ,  price:"$100"},
    {name:"adobe xd" ,  price:"$99.99"},
    {name:"illustrator" ,  price:"$89.99"},
    {name:"premier pro" ,  price:"$69.96"},
  ]


  



  return (
    <div className="App">
      <header className="App-header">
      <p>hello react</p>  
      <Counter></Counter>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <product product={product} ></product>)
        }
      </ul>
      <Product product={products[0]} ></Product>
      <Product product={products[1]} ></Product>
      <Person></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
  setCount(count + 1);
  };
  const handleDecease = () => {
    setCount(count - 1);
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleDecease}>decease</button>
      <button onClick={handleIncrease}>increase</button>
    </div>
  )
}


function Product(props){
  const productStyle={
    border:"1px solid yellow",
    borderRadius:"5px",
    backgroundColor:"red",
    height:"200px",
    float:"left",
  }
  const {name,price}=props.product;
  console.log(name,price);
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h1>{props.product.price}</h1>
      <button>buy now</button>

    </div>
  )

}
function Person(props){
  const PersonStyle={
    border:"2px solid red",
    margin:"10px"
  }
  console.log(props);
  return (
  <div style={{border: "2px solid green",margin:"10px"}} > 
  <h1>nayok:{props.name} </h1>
  <h3>Super dev {props.nayka}</h3>
  </div>
  )
}

export default App;
