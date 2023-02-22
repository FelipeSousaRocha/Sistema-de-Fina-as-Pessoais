import * as C from './styles'

export function TableArea() {
  return(
    <table className="w-full bg-white p-3 shadow-[0px_0px_5px_#CCC] rounded-xl mt-5">
       <thead>
          <tr>
            <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
            <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
            <C.TableHeadColumn>Titulo</C.TableHeadColumn>
            <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
          </tr>
       </thead>
       <tbody>
         
       </tbody>
    </table>
  );
}