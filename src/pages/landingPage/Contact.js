import React,{useState} from "react";
import { Form } from "../../components/formcomponents/Form";
import "../../components/formcomponents/formstyle.css"

import { FormTwo } from "../../components/formtwo/Formtwo";
const Contact = () => {
  const pageName = "Contact";

  

  return (
    <div>
      <h1>{pageName}</h1>
      <Form />
     
    </div>
  );
};

export default Contact;
