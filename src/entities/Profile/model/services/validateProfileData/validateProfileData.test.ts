import {validateProfileData} from "./validateProfileData";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {ValidateProfileError} from "entities/Profile";

describe("fetchProfileData.test", () => {
    test("Success validating", async () => {

        const data = {
            username: "admin",
            age: 22,
            country: Country.Ukraine,
            lastname: "Gorbatkov",
            first: "Artem",
            city: "Rostov on Don",
            currency: Currency.EUR,
        }

        const result = validateProfileData(data)
        expect(result).toEqual([])
    });

    test("INCORRECT_AGE error", async () => {
        const data = {
            username: "admin",
            country: Country.Ukraine,
            lastname: "Gorbatkov",
            first: "Artem",
            city: "Rostov on Don",
            currency: Currency.EUR,
        }

        const result = validateProfileData(data)
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    });

    test("INCORRECT_USER_DATA error", async () => {
        const data = {
            username: "admin",
            age: 22,
            country: Country.Ukraine,
            lastname: "Gorbatkov",
            city: "Rostov on Don",
            currency: Currency.EUR,
        }

        const result = validateProfileData(data)
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    });

    test("NO_DATA ERROR", async () => {
        const result = validateProfileData()
        expect(result).toEqual([ValidateProfileError.NO_DATA])
    });
})