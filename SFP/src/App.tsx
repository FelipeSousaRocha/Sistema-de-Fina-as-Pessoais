import { useState, useEffect } from "react"; //UseEffect para monitorar determinadas circunstancias
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items"; //Mutaveis por isso o uso do State
import { getCurrentMounth, filterListByMounth } from "./helpers/dateFilter"; //Importa mes/ano atual
import { TableArea } from "./components/TableArea";

function App() {
  const [list, setList] = useState(items); //Lista de items de data
  const [filteredList, setFilteredList] = useState<Item[]>([]); //Array de Item vazio
  const [currentMounth, setCurrentMounth] = useState(getCurrentMounth()); //Mes/Ano atual

  useEffect(()=>{
    setFilteredList( filterListByMounth(list, currentMounth) );//Funcao vai pegar a lista pura vai filtrar e gerar uma nova lista
    }, [list, currentMounth] 
  );//Caso um desses Estados se modifique

  return (
    <div>
      <header className="bg-blue-900 h-40 text-center">
        <h1 className="m-0 p-0 text-white pt-8 font-bold text-3xl">
          Sistema Financeiro Pessoal
        </h1>
      </header>
      <body className="m-auto max-w-5xl mb-12">
        {/* Area de informacoes */}

        {/* Area de insercao */}

        {/* Tabela de itens */}
        <TableArea/>
      </body>
    </div>
  )
}

export default App
