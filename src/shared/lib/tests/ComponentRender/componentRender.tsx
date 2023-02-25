import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18nextForTests from "shared/config/i18n/i18nextForTests";

export interface componentRenderOptions {
    route?: string;
}

export function componentRender(children: ReactNode, options: componentRenderOptions = {}) {

    const {
        route = "/",
    } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nextForTests}>
                {children}
            </I18nextProvider>
        </MemoryRouter>
    )
}