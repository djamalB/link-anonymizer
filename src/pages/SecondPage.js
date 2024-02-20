function SecondPage({ addkey, redirectTo }) {
  function btnclick() {
    if (addkey) {
      window.location.href = redirectTo;
    }
    
  }

  return (
    <>
      <p className="key-form">Уникальный ключ: {addkey}</p>
      <button onClick={btnclick}>Перейти по ключу</button>
    </>
  );
}

export default SecondPage;
