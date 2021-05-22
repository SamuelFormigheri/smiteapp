export interface ICardList{
    firstWinOfDay?: boolean;
    title: string;
    onClick: () => void;
    selected?: boolean;
}