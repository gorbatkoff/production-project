import { FC, lazy } from "react";
import {AddCommentFormProps} from "./AddCommentForm";
// import { LoginFormProps } from "./LoginForm";

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // Имитация загрузки компонента
    // @ts-ignore
    setTimeout(() => resolve(import("../AddCommentForm/AddCommentForm")), 1500);
}));
