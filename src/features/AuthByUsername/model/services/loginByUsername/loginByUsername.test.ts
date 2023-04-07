import axios from "axios";
import {loginByUsername} from "./loginByUsername";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe("loginByUsername.test", () => {
    test("Success login", async () => {

        const userData = {username: "123", id: "1"};

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({data: userData}));
        const result = await thunk.callThunk({username: "123", password: "123"})

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userData);
    });

    test("Error login", async () => {

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk({username: "123", password: "123"})

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("Error")
    });
})