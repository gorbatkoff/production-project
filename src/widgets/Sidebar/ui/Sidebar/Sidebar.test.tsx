import {fireEvent, render, screen} from "@testing-library/react";
import {Sidebar} from "./Sidebar";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
    test("Sidebar rendering", () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
    })

    test("Sidebar collapsing test", () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId("sidebar-toggle")
        expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("Sidebar")).toHaveClass("collapsed")
    })
})