import {fireEvent, render, screen} from "@testing-library/react";
import {Sidebar} from "./Sidebar";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import {componentRender} from "shared/lib/tests/ComponentRender/componentRender";

describe("Sidebar", () => {
    test("Sidebar rendering", () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
    })

    test("Sidebar collapsing test", () => {
        componentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId("sidebar-toggle")
        expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("Sidebar")).toHaveClass("collapsed")
    })
})