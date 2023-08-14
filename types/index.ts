import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    tile: string;
    containerStyles?: string;
    handleClik?: MouseEventHandler <HTMLButtonElement>;
}