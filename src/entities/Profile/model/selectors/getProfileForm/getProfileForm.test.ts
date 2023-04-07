import {StateSchema} from "app/providers/StoreProvider";
import {getProfileForm} from "./getProfileForm";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

describe("getProfileForm.test", () => {
    test("should return a state", () => {

        const form = {
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
                form,
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
})