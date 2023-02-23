import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18nextForTests from "../../../config/i18n/i18nextForTests";

export function renderWithTranslation(children: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nextForTests}>
            {children}
        </I18nextProvider>
    )
}