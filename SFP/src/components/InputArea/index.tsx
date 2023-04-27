import { useState } from "react";
import { Item } from "../../types/Item";

type Props = {
    onAdd: (item : Item) => void;
}

export function InputArea({onAdd}: Props) {
    //onAdd(newItem);

    const handleSingupForm = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        let newItem: Item = {
            preventDefault: function (): unknown {
                throw new Error("Function not implemented.");
            },
            target: undefined,
            date: new Date(date),
            category: category,
            title: title,
            value: parseInt(value)
        }
        onAdd(newItem);
        console.log(newItem)
    }

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');

    return(
        <div className="bg-white rounded-lg shadow-[0px_0px_5px_#CCC] mt-5 p-5">
                <form onSubmit={handleSingupForm}>
                    <div className="flex">
                        <label className="font-bold">Titulo:</label>
                        <input className="ml-1"
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div className="flex mt-2">
                        <label className="font-bold">Categoria:</label>
                        <input className="ml-1"
                        type="text"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        />
                    </div>
                    <div className="flex mt-2">
                        <label className="font-bold">Data:</label>
                        <input className="ml-1"
                        type="date"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                        />
                    </div>
                    <div className="flex mt-2">
                        <label className="font-bold">Valor:</label>
                        <input className="ml-1"
                        type="number"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        />
                    </div>
                    <button className="font-semibold mt-2" 
                    type="submit"
                    >Adicionar</button>
                </form>
        </div>
    );
}