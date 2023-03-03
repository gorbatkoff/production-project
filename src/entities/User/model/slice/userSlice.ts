import {createSlice} from "@reduxjs/toolkit"
import {UserChema} from "../types/user";

const initialState:UserChema = {}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
})

// Action creators are generated for each case reducer function
export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice