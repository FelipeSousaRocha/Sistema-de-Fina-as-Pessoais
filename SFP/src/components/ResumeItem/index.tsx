import * as C from './styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export function ResumeItem({title, value, color}: Props) {

    return(
        <div className="flex-1">
            <div className="text-center font-bold text-gray-700 mb-1">{title}</div>
            <C.Info color={color}>R$ {value}</C.Info>
        </div>
    );
}