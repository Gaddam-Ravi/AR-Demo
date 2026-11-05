import React, { useEffect, useState } from "react";
import axios from "axios";
 
function App() {
 
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
 
    axios.get("http://a85384ef2189b45bea22b3302b3e21bc-576480333.ap-southeast-2.elb.amazonaws.com:5000/products")
      .then(res => setProducts(res.data));
 
  }, []);
 
  return (
    <div>
      <h1>E-Commerce Store</h1>
 
      {products.map(product => (
 
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹ {product.price}</p>
        </div>
 
      ))}
    </div>
  );
}
 
export default App;

