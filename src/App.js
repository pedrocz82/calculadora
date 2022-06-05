import React, { useState } from "react";

function App() {

  const [primeiroNumero, setPrimeiroNumero] = useState(0);
  const [operacao, setOperacao] = useState('');
  const [segundoNumero, setSegundoNumero] = useState(0);
  const [resultado, setResultado] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
  

  switch (operacao) {
    case '+':
      setResultado(primeiroNumero+segundoNumero);
      break;

      case '-':
      setResultado(primeiroNumero-segundoNumero);
      break;

      case '/':
      setResultado(primeiroNumero/segundoNumero);
      break;

      case '*':
      setResultado(primeiroNumero*segundoNumero);
      break;

    default:
      break
  }
}

return (

  <>
    <form onSubmit={handleSubmit}>
      <input type="number" onChange={(e) => { setPrimeiroNumero(e.target.valueAsNumber) }} value={primeiroNumero} />
      <select onChange={(e) => { setOperacao(e.target.value) }} value={operacao}>
        <option value="">--Selecione a operação--</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
      </select>

      <input type="number" onChange={(e) => { setSegundoNumero(e.target.valueAsNumber) }} value={segundoNumero} />
      <button type="submit">CALCULAR</button><b>RESULTADO: </b>{resultado}
    </form>


  </>


);
}

export default App;
