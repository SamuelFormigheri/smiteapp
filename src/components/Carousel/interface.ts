import { IFrame } from "../Frame/interface";

export interface ICarousel{
    width: number;
    height: number;
    max: number;
    start: number;
    diamonds?: boolean;
    frame?: IFrame;
}