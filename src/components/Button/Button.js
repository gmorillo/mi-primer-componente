import "./Button.css";

export const CreateButton = (texto,  bgColor, className) =>{
  return `<button className="main-button ${className}" style="background-color: ${bgColor}">${texto}</button>`;
}