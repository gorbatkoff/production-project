import {StateSchema} from "app/providers/StoreProvider";
import {getProfileError} from "./getProfileError";

describe("getProfileError.test", () => {
    test("should return a state", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "123"
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual("123");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
})