import { formatCurrentMonth } from "../../helpers/dateFilter";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { ResumeItem } from "../ResumeItem";

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expanse: number;
}

export function InfoArea ({ currentMonth, onMonthChange, income, expanse }: Props){ 
    
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split("-");
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split("-");
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}}`);
    }

    return (
        <div className="items-center bg-white shadow-[0px_0px_5px_#CCC] rounded-lg p-5 mt-[-40px] flex">
            <div className="flex flex-1  items-center">
                <div onClick={handlePrevMonth} 
                        className="w-10 text-center text-base cursor-pointer"><AiOutlineArrowLeft/></div>
                <div className="flex-1 text-center font-semibold">{formatCurrentMonth(currentMonth)}</div>
                <div onClick={handleNextMonth} 
                className="w-10 text-center text-base cursor-pointer"><AiOutlineArrowRight/></div>
            </div>
            <div className="flex flex-1">
                <ResumeItem title="Receita" value={income}/>
                <ResumeItem title="Despesa" value={expanse}/>
                <ResumeItem 
                title="Balanço" 
                value={income-expanse}
                color={(income-expanse) < 0 ? 'red' : 'green'}
                />
            </div>
        </div>
    );
}