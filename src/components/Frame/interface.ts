export interface IFrame{
    className?: string;
    style?: React.CSSProperties;
    layout?: {
        noBorderRight?: boolean;  
        noSharpEdges?: boolean;
        square?: boolean;
    };
}