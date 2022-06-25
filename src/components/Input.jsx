import React from "react";

const Input = ({label, input, setInputData, inputData}) => {

    const handleInputChange = (e) => {
        setInputData(prevState => ({...prevState, [e.target.name]: e.target.value}));
        console.log(inputData);
    }

  return (
    <div>
      <input
        name={input}
        type="text"
        placeholder={label}
        size="15"
        onChange={handleInputChange}
        value={inputData[input] || ''}
      />
    </div>
  );
};

export default Input;
