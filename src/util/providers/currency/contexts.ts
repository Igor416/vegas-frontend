import { Dispatch, createContext } from "react";

import { Price } from "../../interfaces";

import { currencyAction } from "./action";

export const CurrencyContext = createContext<keyof Price>('MDL');
export const CurrencyDispatchContext = createContext<Dispatch<currencyAction>>({} as Dispatch<currencyAction>);