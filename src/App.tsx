import { Button } from "@chakra-ui/react";
import React, { useState, createContext, useContext } from "react";

const criandoContexto = createContext({} as any)

function Exemplo_Um() {
  const { primeiroTeste, setMudarValor } = useContext(criandoContexto)
  return (
    <h1>Valor do exemplo 1: {primeiroTeste}
      <Button onClick={() => setMudarValor(2)}>Mudar o valor dos exemplos</Button>
    </h1>
  )
}

function Exemplo_Dois() {

  const { primeiroTeste } = useContext(criandoContexto)
  return <h1>Valor do exemplo 2: {primeiroTeste}</h1>

}

export function App() {

  const [mudarValor, setMudarValor] = useState(0);

  return (
    <criandoContexto.Provider value={{ setMudarValor }}> 

      <div> 
        <Exemplo_Um />
        <Exemplo_Dois />
      </div>
    </criandoContexto.Provider>

  )
}