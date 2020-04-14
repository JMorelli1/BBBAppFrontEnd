import React, { useState, useEffect } from "react";
import { FormGroup, Label, Input } from "reactstrap";

const EditFormInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(props.defaultValue);
  }, [props.defaultValue]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <FormGroup>
      <Label>{props.label}</Label>
      <Input
        type="text"
        defaultValue={inputValue}
        name={props.name}
        onChange={handleChange}
      />
    </FormGroup>
  );
};

export default EditFormInput;
