import { InputHTMLAttributes, RefObject } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    ref?: RefObject<HTMLInputElement>;
}