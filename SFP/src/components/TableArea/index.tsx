import { Item } from "../../types/Item";
import { TableItem } from "../TableItem/index";

type Props = {
  list: Item[]
}

export function TableArea({list}:Props) {
  return(
    <table className="w-full bg-white p-5 shadow-[0px_0px_5px_#CCC] rounded-lg mt-5">
       <thead>
          <tr>
            <td className='p-5 w-20 font-bold'>Data</td>
            <td className='p-5 w-24 font-bold'>Categoria</td>
            <td className="p-5 w-auto font-bold">Titulo</td>
            <td className="p-5 w-28 font-bold">Valor</td>
          </tr>
       </thead>
       <tbody>
         {list.map((item, index)=>(
          <TableItem key={index} item={item}/>
         ))}
       </tbody>
    </table>
  );
}