import { ReactNode } from "react";

export interface ITabs{
    tabs: Array<{
        id: number;
        title: string;
        content: ReactNode;
    }>
    startSelected: number;
}