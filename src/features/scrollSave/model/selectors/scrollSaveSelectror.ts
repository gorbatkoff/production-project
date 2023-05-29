import {StateSchema} from "app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";

export const getScrollData = (state: StateSchema) => state.ui.scroll;
export const getScrollByPath = createSelector(
    getScrollData,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
)