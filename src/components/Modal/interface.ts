import { ReactNode } from "react";

export interface IModal{
    children?: ReactNode;
    outsideClick?: boolean;
    escKey?: boolean;
    style?: React.CSSProperties;
}

export interface IRefModal{
    closeModal: () => void;
    openModal: () => void;
}