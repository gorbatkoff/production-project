import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchArticleById} from "./fetchArticleById";
import {ArticleTypes} from "../../types/article";

const data = {
    "id": "1",
    "title": "Javascript news",
    "subtitle": "Что нового в JS за 2022 год?",
    "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    "views": 1022,
    "createdAt": "26.02.2022",
    "type": [ArticleTypes.IT],
    "blocks": []
}

describe("fetchArticleById.test", () => {
    test("Success", async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk("1")

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("Error", async () => {

        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk("2")

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual("Error");

    });
})