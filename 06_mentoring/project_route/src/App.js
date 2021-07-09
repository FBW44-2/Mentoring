import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" exact component={Products} />
          <Route path="/product/:pid" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}




function Home() {
  return (
    <div>
      <h3>Welcome to Home Page</h3>
    </div>
  )
}




function About() {
  return (
    <div>
      <h3>Welcome to About Page</h3>
    </div>
  )
}




function Products() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then(res => {
      console.log(res.data);
      setProducts(res.data);
    })
    
  }, [])
  return (
    <div>
      <h3>Product Page</h3>

      {products.map(prod => {
        return (
          <div className="prod">
            <h4>{prod.title}</h4>
            <Link to={`/product/${prod.id}`}>
              <img src={prod.image} alt="prod" style={{ width: "20%" }} />
            </Link>
            <p>{prod.price}</p>
          </div>
        );
      })}
    </div>
  )
}


function Item({match}) {
  const [prod, setProd] = useState({});
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${match.params.pid}`,
    }).then(res => {
      console.log(res.data)
      setProd(res.data);
    })
  }, [])

  return (
    <div>
      <h3>{prod.title}</h3>
      <p>{prod.price}</p>
      <p>{ prod.category}</p>
      <p>{ prod.description}</p>
      <img src={prod.image} alt="p" style={{ width: '50%' }}/>
    </div>
  );
}

export default App;