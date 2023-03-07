import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { Category, Value } from "./styles";

type Props = {
  item: Item
}

export function TableItem({ item }: Props) {
  return (
    <tr>
      <td className="p-5 w-20">
        {formatDate(item.date)}
      </td>
      <td className="p-5 w-24">
        <Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Category>
      </td>
      <td className="p-5 w-auto">{item.title}</td>
      <td className="p-5 w-28">
        <Value color={categories[item.category].expense ? 'red' : 'green'}> R$ {item.value}</Value>
      </td>
    </tr>
  );
}