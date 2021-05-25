import React from "react";
import Form from "./style/Formulaire";

const Formulaire = () => {
  return (
    <Form id="contact">
      <h2>Get in touch</h2>
      <form action="">
        <div className="input--wrap">
          <input type="text" placeholder="your name" />
          <input type="text" placeholder="About" />
        </div>
        <input type="email" placeholder="your mail" className="input--mail" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="your message"
        ></textarea>
        <button>Send</button>
      </form>
    </Form>
  );
};

export default Formulaire;
