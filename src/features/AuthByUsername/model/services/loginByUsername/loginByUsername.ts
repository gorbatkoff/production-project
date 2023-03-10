import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User";
import i18n from "i18next";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localStorage";
import {userActions} from "entities/User";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>("http://localhost:8000/login", authData)

            if(!response.data) throw new Error();

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue("Error")
        }
    }
)