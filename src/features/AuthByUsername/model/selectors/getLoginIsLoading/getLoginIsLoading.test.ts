import {StateSchema} from "app/providers/StoreProvider";
import {getLoginIsLoading} from "./getLoginIsLoading";

describe("getLoginError.test", () => {
    test("should return truer", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
})