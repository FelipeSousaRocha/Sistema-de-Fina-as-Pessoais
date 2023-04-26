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
            <div>
                <button onClick={handleAddEvent}>Adicionar</button>
            </div>
        </div>
    );
}