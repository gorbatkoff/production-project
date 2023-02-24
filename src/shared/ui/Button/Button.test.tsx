import {Button, ThemeButton} from "shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";

describe("Button", () => {
    test("Button rendering", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    })

    test("Button check classNames", () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText("Test")).toHaveClass("clear");
        screen.debug();
    })
})