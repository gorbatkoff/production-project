import {getQueryParams} from "./addQueryParams";

describe("new test", function () {
    test("Test with one param", () => {
        const params = getQueryParams({
            test: "value",
        });
        expect(params).toBe("?test=value")
    })

    test("Test with multiple param", () => {
        const params = getQueryParams({
            first: "value",
            second: "value2"
        });
        expect(params).toBe("?first=value&second=value2")
    })

    test("Test with undefined param", () => {
        const params = getQueryParams({
            test: "value",
            second: undefined
        });
        expect(params).toBe("?test=value")
    })
})