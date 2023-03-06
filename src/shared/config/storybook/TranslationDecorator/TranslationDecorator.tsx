import {Suspense} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import {Story} from "@storybook/react";
import i18n from "i18next";

export const TranslationDecorator = (StoryComponent: Story) => {
    return render(
        <I18nextProvider i18n={i18n}>
            <Suspense fallback="">
                <StoryComponent />
            </Suspense>
        </I18nextProvider>
    )
}