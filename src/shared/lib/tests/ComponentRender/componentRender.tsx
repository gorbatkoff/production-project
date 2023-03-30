import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import i18nForTests from "shared/config/i18n/i18nForTests";

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(children: ReactNode, options: componentRenderOptions = {}) {

    const {
        route = "/",
        initialState,
    } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {children}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}