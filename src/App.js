import React, { useState } from "react";
import Product from "./components/Product/Product";
import HookCounter from "./components/HookCounter";
import Timer from "./components/Timer";
// class App extends Component {
//   state = {
//     products: [
//       { title: "React.js", price: "99 $" },
//       { title: "Node.js", price: "89 $" },
//       { title: "JavaScript", price: "79 $" },
//     ],
//   };
//   clickHandler = () => {
//     this.setState({
//       products: [
//         { title: "React.js", price: "65 $" },
//         { title: "Node.js", price: "55 $" },
//         { title: "JavaScript", price: "45 $" },
//       ],
//     });
//   };
//   render() {
//     return (
//       <div className="container" id="title">
//         <h1>shopping App</h1>
//         {this.state.products.map((product, index) => {
//           return (
//             <Product name={product.title} key={index} price={product.price} />
//           );
//         })}
//         <button onClick={this.clickHandler}>change price</button>
//       </div>
//     );
//   }
// }
const App = () => {
  const [products, setproducts] = useState([
    { title: "React.js", price: "99 $" },
    { title: "Node.js", price: "89 $" },
    { title: "JavaScript", price: "79 $" },
  ]);

  const clickHandler = () => {
    setproducts([
      { title: "React.js", price: "65 $" },
      { title: "Node.js", price: "55 $" },
      { title: "JavaScript", price: "45 $" },
    ]);
  };
  return (
    <div className="container" id="title">
      <h1>shopping App</h1>
      {products.map((product, index) => {
        return (
          <Product name={product.title} key={index} price={product.price} />
        );
      })}
      <button onClick={clickHandler}>change price</button>
      <div>
        <HookCounter />
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
};
export default App;
