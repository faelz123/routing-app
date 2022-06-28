import React from "react";

const Input = ({ label, input, setInputData, inputData }) => {

  const handleInputChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{ paddingRight: "5px" }}>
      <input
        name={input}
        type={label === "senha" ? "password" : "text"}
        placeholder={label}
        size="15"
        onChange={handleInputChange}
        value={inputData[input] || ""}
      />
    </div>
  );
};

export default Input;
