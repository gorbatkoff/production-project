import {initArticlesPage} from "./initArticlesPage";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchArticlesList} from "../../services/fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList")

const params = new URLSearchParams("?search=Ruby&sort=views&order=asc")

describe("fetchNextArticlesPage.test", () => {
    test("Success", async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlePage: {
                page: 2,
                hasMore: true,
                limit: 5,
                ids: [],
                entities: {},
                isLoading: false,
                _inited: false
            }
        });

        await thunk.callThunk(params)

        // Pending + Fulfilled + 2 dispatches
        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticlesList).toHaveBeenCalledWith({
            page: 1
        })
    });

})

// describe("fetchNextArticlesPage.test", () => {
//     test("Success", async () => {
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articlePage: {
//                 page: 2,
//                 hasMore: true,
//                 limit: 5,
//                 ids: [],
//                 entities: {},
//                 isLoading: false,
//                 _inited: true
//             }
//         });
//
//         await thunk.callThunk(params)
//
//         // Pending + Fulfilled
//         expect(thunk.dispatch).toBeCalledTimes(2)
//         expect(thunk.dispatch).not.toBeCalledTimes(3)
//     });
//
// })