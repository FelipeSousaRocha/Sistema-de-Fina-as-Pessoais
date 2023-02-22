import { Item } from "../types/Item";

export const getCurrentMounth = () => {
  let now = new Date(); //Instanciando variavel do tipo Date
  return `${now.getFullYear()}-${now.getMonth()+1}`; //Pegar mes com + 1 porque comeca do zero e ano
};

export const filterListByMounth = (list:Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, mounth] = date.split('-');//Gera um Array com dois itens [0]-[1]

  for(let i in list){
    if (
      list[i].date.getFullYear() === parseInt(year)
      && (list[i].date.getMonth()+ 1) === parseInt(mounth) 
    ) 
    {
      newList.push(list[i]);//Se o ano e mes forem iguais eu coloco no Array
    }
  }

  return newList;
};