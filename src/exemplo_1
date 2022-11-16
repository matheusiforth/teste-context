import { Button } from "@chakra-ui/react";
import React, { useState, createContext, useContext } from "react";
import { Exemplo_1 } from "./exemplo_1/exemplo1";
import { Exemplo_2 } from "./exemplo_2/exemplo_2";

const criandoContexto = createContext({} as any)

function Exemplo_Um() {

  const { primeiroTeste, setMudarValor } = useContext(criandoContexto)
  return <h1>Valor do exemplo 1: {primeiroTeste}</h1>
}

function Exemplo_Dois() {

  const { primeiroTeste } = useContext(criandoContexto)
  return <h1>Valor do exemplo 2: {primeiroTeste}</h1>

}

export function App() {

  const [mudarValor, setMudarValor] = useState(0);

  return (
    <criandoContexto.Provider value={{ primeiroTeste: mudarValor, setMudarValor }}> 

      <div> 
        <Exemplo_Um />
        <Exemplo_Dois />
        <Exemplo_1 />
        <Exemplo_2 />
      </div>
      
    </criandoContexto.Provider>

  )
}

{/* <Button onClick={() => setMudarValor(2)}>Mudar o valor dos exemplos</Button> */}
