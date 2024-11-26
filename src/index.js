import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function App (){
  return (
    <div>
      <Header/>   
       <Menu/>
      <Footer/>
    </div>
  );

// Header Component
function Header (){
  return (
    <div>
      <h1>Fast React Pizza Co.</h1>
    </div>
  )
}

// Menu Component
function Menu (){
    return (
      <div>
        <h2>Our Menu</h2>
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    );
}

// Footer Component
function Footer  (){
  return (
    <div>
      <footer>{new Date().toLocaleTimeString()}. we're currently open</footer>
    </div>
  );
    
  // return React.createElement("footer", null, "We're currently open!");
}



}
// We write new component using function
function Pizza(){
   return (
     <div>
        <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
       <h2>Pizza Spinaci</h2>
       <p>"Tomato, mozarella, spinach, and ricotta cheese"</p>
     </div>
   );
}


// React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
   
  </StrictMode>
);

// REACT V17

