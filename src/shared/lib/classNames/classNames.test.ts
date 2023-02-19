import {classNames} from "./classNames"


describe("classNames testing", () => {
    test("Only one first parameter", () => {
        expect(classNames("banner", {}, [])).toBe("banner")
    })
    test("Also with additional parameters", () => {
        expect(classNames("banner",
            {},
            ["cls1", "cls2"])).toBe("banner cls1 cls2")
    })
    test("Also with mods and additional parameters", () => {
        expect(classNames("banner",
            {hover: true, clicked: true},
            ["cls1", "cls2"])).toBe("banner cls1 cls2 hover clicked")
    })
    test("Mods have falsy values", () => {
        expect(classNames("banner",
            {"hover": false, "clicked": true},
            ["cls1", "cls2"])).toBe("banner cls1 cls2 clicked")
    })
    test("Mods have only falsy values", () => {
        expect(classNames("banner",
            {"hover": false, "clicked": false},
            ["cls1", "cls2"])).toBe("banner cls1 cls2")
    })
    test("Any values", () => {
        expect(classNames("banners",
            {"hover": true, "clicked": true},
            ["cls1", undefined, null, ""])).toBe("banners cls1 hover clicked")
    })
});
