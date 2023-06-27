//an interface specifies how a specific structure should look like, what values 
// variables should it have

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    //setManufacturer is a fn that takes manufacturer as a string input and
    //returns nothing. Its just a setter state
    setManufacturer: (manufacturer: string) => void; 
}

export interface CarProps {
    "city_mpg": number;
    "class": "string";
    "combination_mpg": number;
    "cylinders": number;
    "displacement": number;
    "drive": string;
    "fuel_type": string;
    "highway_mpg": number;
    "make": string;
    "model": string;
    "transmission": string;
    "year": number;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}