import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{ 
    style?: React.CSSProperties;
    layout?: "secondary" | "yellow";
}