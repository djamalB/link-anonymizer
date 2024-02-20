import React, { useState } from "react";
import HomePage from "../src/pages/HomePage";
import SecondPage from "../src/pages/SecondPage";

function App() {
  const [key, setKey] = useState("");
  const [redirectTo, setRedirectTo] = useState("");

  const handleSubmit = (url) => {
    const uniqueKey = Math.random().toString(36).substring(7);
    setKey(uniqueKey);
    setRedirectTo(url);
  };

  return (
    <div>
      <HomePage handleSubmit={handleSubmit} />
      <SecondPage addkey={key} redirectTo={redirectTo} />
    </div>
  );
}

export default App;
