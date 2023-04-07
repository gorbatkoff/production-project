import {updateProfileData} from "./updateProfileData";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {profile} from "console";
import {ValidateProfileError} from "entities/Profile";

const data = {
    username: "admin",
    age: 22,
    country: Country.Ukraine,
    lastname: "Gorbatkov",
    first: "Artem",
    city: "Rostov on Don",
    currency: Currency.EUR,
}

describe("fetchProfileData.test", () => {
    test("Success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({data}));

        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");

        expect(result.payload).toEqual(data);
    });

    test("Error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ])
    });

    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, lastname: ""},
            }
        });
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    });
})