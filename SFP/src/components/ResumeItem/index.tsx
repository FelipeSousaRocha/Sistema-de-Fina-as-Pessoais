import * as C from './styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export function ResumeItem({title, value, color}: Props) {

    return(
        <div className="flex-1">
            <C.Title 
                color={color}
                className="flex text-center font-bold mb-1">
                    {title}
            </C.Title>
            <C.Info 
                color={color}>
                    R$ {value}
            </C.Info>
        </div>
    );
}