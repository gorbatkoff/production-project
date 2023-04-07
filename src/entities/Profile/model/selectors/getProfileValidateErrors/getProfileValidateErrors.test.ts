import {StateSchema} from "app/providers/StoreProvider";
import {getProfileValidateErrors} from "./getProfileValidateErrors";
import {ValidateProfileError} from "entities/Profile";

describe("getProfileValidateErrors.test", () => {
    test("should return a state", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_USER_DATA,
                    ValidateProfileError.NO_DATA
                ]
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.NO_DATA
        ]);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
})