import { Item } from "../../types/Item";

type Props = {
    onAdd: (item : Item) => void;
}

export function InputArea({onAdd}: Props) {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2023, 9, 27),
            category: 'food',
            title: 'Hamburger',
            value: 12.50
        };
        onAdd(newItem);
    }

    return(
        <div className="bg-white rounded-lg shadow-[0px_0px_5px_#CCC] mt-5 p-5">
                <div className="flex">
                    <label className="font-bold">Titulo:</label>
                    <input className="ml-1" type="text" />
                </div>
                <div className="flex mt-2">
                    <label className="font-bold">Categoria:</label>
                    <input className="ml-1" type="text" />
                </div>
                <div className="flex mt-2">
                    <label className="font-bold">Data:</label>
                    <input className="ml-1" type="date" />
                </div>
                <div className="flex mt-2">
                    <label className="font-bold">Valor:</label>
                    <input className="ml-1" type="number" />
                </div>
                <button className="font-semibold mt-2" onClick={handleAddEvent}>Adicionar</button>
        </div>
    );
}