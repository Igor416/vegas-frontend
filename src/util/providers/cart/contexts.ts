import { Dispatch, createContext } from "react";

import { BasicProduct } from "../../interfaces";

import { cartAction } from "./action";

export const CartContext = createContext<BasicProduct[]>([]);
export const CartDispatchContext = createContext<Dispatch<cartAction>>({} as Dispatch<cartAction>);