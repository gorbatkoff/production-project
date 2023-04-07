import {profileActions, profileReducer} from "./profileSlice";
import {ProfileSchema, updateProfileData, ValidateProfileError} from "entities/Profile";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

const data = {
    username: "admin",
    age: 22,
    country: Country.Ukraine,
    lastname: "Gorbatkov",
    first: "Artem",
    city: "Rostov on Don",
    currency: Currency.EUR,
}

describe("profileReducer.test", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false}
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)))
            .toEqual({readonly: true})
    })

    test("test cancel edit", () => {
        const state: DeepPartial<ProfileSchema> = {data, form: {username: ""}}

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data
        })
    })

    test("test update profile", () => {
        const state: DeepPartial<ProfileSchema> = {form: {username: ""}}

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({username: "Artemidze"}),
        )).toEqual({
            form: {username: "Artemidze"}
        })
    })

    test("test update profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            ValidateProfileError: undefined
        })
    })

    test("test update profile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ""),
        )).toEqual({
            isLoading: false,
            ValidateProfileError: undefined,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        })
    })
})