import {StateSchema} from "app/providers/StoreProvider";
import {getProfileData} from "./getProfileData";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

describe("getProfileData.test", () => {
    test("should return a state", () => {

        const data = {
            username: "admin",
            age: 22,
            country: Country.Ukraine,
            lastname: "Gorbatkov",
            first: "Artem",
            city: "Rostov on Don",
            currency: Currency.EUR,
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
})