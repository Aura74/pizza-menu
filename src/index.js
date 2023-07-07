import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// start = npm start
// stop = ctrl c

// alt moveUpArrow
// alt moveuDownArrow

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 89,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 105,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 120,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 125,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 150,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 180,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1
        style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Pizza AB
      </h1>

      <h1>className</h1>
    </header>
  );
}

function Menu() {
  const style = { color: "blue", fontSize: "28px", textTransform: "uppercase" };

  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2 style={style}>Meny</h2>

      <h2>MenyH3</h2>

      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {numPizzas > 0 ? (
        <React.Fragment key="seriannummer">
          <p>Här är det mer text</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Vi har ingen meny just nu</p>
      )}

      {/* <Pizza
        name="Pizza Båt"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/salamino.jpg"
        price={135}
      />

      <Pizza
        name="Pizza bil"
        ingredients="Tomato, kött cheese"
        photoName="pizzas/salamino.jpg"
        price={155}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price} kr</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} kr</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen); // true är open // false stängt

  // if (hour >= openHour && hour <= closeHour) console.log("Öppet");
  // else console.log("Stängt");
  // console.log(hour);

  // if (!isOpen)
  //   return (
  //     <p>
  //       Du är väkommen tillbaka mellan tidera: {openHour}:00 och {closeHour}:00
  //       imorgon.
  //     </p>
  //   );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Stängt just nu vi öppnar kl: {openHour}:00 och stänger kl: {closeHour}
          :00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Vi har öppet till: {closeHour}:00 Öppnar: kl {openHour}:00 imorgon
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// Render in REACT v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
