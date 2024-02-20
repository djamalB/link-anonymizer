import React, { useState } from "react";

const HomePage = ({ handleSubmit }) => {
  const [url, setUrl] = useState("");

  const handleInput = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div className="form-container">
      <input
        className="input-form"
        type="text"
        value={url}
        onChange={handleInput}
      />
      <button
        className="btn-form"
        onClick={() => {
          handleSubmit(url);
          setUrl("");
        }}
      >
        Получить ключ
      </button>
    </div>
  );
};

export default HomePage;
