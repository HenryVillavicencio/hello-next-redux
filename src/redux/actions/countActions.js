import { count } from "./actionsTypes";

export const increase = (value) => ({
  type: count.INCREASE,
  payload: value,
});

export const decrease = () => ({
  type: count.DECREASE,
});
