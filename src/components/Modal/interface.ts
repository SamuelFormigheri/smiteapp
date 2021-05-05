import { ReactNode } from "react";

export interface IModal{
    children?: ReactNode;
}

export interface IRefModal{
    closeModal: () => void;
    openModal: () => void;
}