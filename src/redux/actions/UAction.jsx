import { userService } from "../../Services/index";
import { FETCH_CREDENTIAL } from "../types/ElearningType";
import { createAtion } from "./ElearningAction";

export const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAtion(FETCH_CREDENTIAL,res.data));
        localStorage.setItem('credentials',JSON.stringify(res.data))
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
