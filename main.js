
import { CreateButton } from "./src/components/Button/Button";
import "./style.css";

const divApp  = document.querySelector("#app");

divApp.innerHTML = `
  <h1>Mi primer componente</h1>  
  ${CreateButton("Click me", "red", "red-button")}
  ${CreateButton("Click me 2", "green", "green-button")}
`;