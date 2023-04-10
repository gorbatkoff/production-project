import {StateSchema} from "app/providers/StoreProvider";
import {getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading} from "./articleDetails";

describe("articleDetails.test", () => {
    test("should return a state", () => {

        const data = {
            id: "1",
            title: "This is a title",
        }

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test("should return isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test("should return isLoading with empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });

    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: "error"
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual("error");
    });

    test("shouldn't return error with empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
})