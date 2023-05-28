import {fetchNextArticlesPage} from "./fetchNextArticlesPage";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchArticlesList} from "../../services/fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList")

describe("fetchNextArticlesPage.test", () => {
    test("Success", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                hasMore: true,
                limit: 5,
                ids: [],
                entities: {},
                isLoading: false,
            }
        });

        await thunk.callThunk()

        // Pending + Fulfilled + 2 dispatches
        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticlesList).toHaveBeenCalledWith({
            page: 3
        })
    });

    test("fetchArticleList not called", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                hasMore: false,
                limit: 5,
                ids: [],
                entities: {},
                isLoading: false,
            }
        });

        await thunk.callThunk();
        
        // Pending + Fulfilled
        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test("fetchArticleList not called again", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                hasMore: true,
                limit: 5,
                ids: [],
                entities: {},
                isLoading: true,
            }
        });

        await thunk.callThunk();

        // Pending + Fulfilled
        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

})