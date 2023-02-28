import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";

type Props = {
  item: Item
}

export function TableItem({item}:Props) {
  return(
    <tr>
      <td className="p-5 w-20">
        {formatDate(item.date)}
      </td>
      <td className="p-5 w-24">
        <div className={`inline-block p-[5px_10px] rounded-md text-white bg-slate-500`}>{categories[item.category].title}
        </div>
      </td>
      <td className="p-5 w-auto">{item.title}</td>
      <td className="p-5 w-28">R$ {item.value}</td>
    </tr>
  );
}