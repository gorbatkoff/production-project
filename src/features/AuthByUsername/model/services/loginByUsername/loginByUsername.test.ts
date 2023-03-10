import axios from "axios";
import {loginByUsername} from "./loginByUsername";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername.test", () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // })
    //
    // test("Success login", async () => {
    //
    //     const userData = {username: "123", id: "1"};
    //     mockedAxios.post.mockReturnValue(Promise.resolve({data: userData}));
    //     const action = loginByUsername({username: "123", password: "123"});
    //     const result = await action(dispatch, getState, undefined)
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("fulfilled");
    //     expect(result.payload).toEqual(userData);
    // });
    //
    // test("Error login", async () => {
    //
    //     mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
    //     const action = loginByUsername({username: "123", password: "123"});
    //     const result = await action(dispatch, getState, undefined)
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("rejected");
    //     expect(result.payload).toBe("Error")
    // });

    test("Success login", async () => {

        const userData = {username: "123", id: "1"};
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userData}));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username: "123", password: "123"})

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userData);
    });

    test("Error login", async () => {

        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username: "123", password: "123"})

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("Error")
    });
})