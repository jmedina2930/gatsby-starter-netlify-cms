import React from "react";

const Button = () => {
  return (
    <button
      className="button is-success"
      onClick={() =>
        window.open(
          "https://api.whatsapp.com/send?phone=+573053357482&text=Cotizar%20Facturaci%C3%B3n%20y%20N%C3%B3mina%20Electr%C3%B3nica"
        )
      }
    >
      WhatsApp
    </button>
  );
};

export default Button;
