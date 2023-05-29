import type {PayloadAction} from "@reduxjs/toolkit"
import {createSlice} from "@reduxjs/toolkit"
import {ScrollSaveSchema} from "../types/scrollSave";

const initialState: ScrollSaveSchema = {
    scroll: {}
}

export const scrollSaveSlice = createSlice({
    name: "scrollSave",
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            action: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position
        },
    },
})

// Action creators are generated for each case reducer function
export const {actions: scrollSaveActions} = scrollSaveSlice;
export const {reducer: scrollSaveReducer} = scrollSaveSlice;
