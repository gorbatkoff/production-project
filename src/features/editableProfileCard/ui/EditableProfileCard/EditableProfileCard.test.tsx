import {screen} from "@testing-library/react";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";
import {Profile} from "entities/Profile";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import userEvent from "@testing-library/user-event";
import {profileReducer} from "../../model/slice/profileSlice";
import {EditableProfileCard} from "./EditableProfileCard";

const profile: Profile = {
    id: "1",
    first: "admin",
    lastname: "admin",
    age: 465,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: "Moscow",
    username: "admin213",
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: "1", username: "admin" },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe("features/EditableProfileCard", () => {
    test("Режим рид онли должен переключиться", async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
        expect(screen.getByTestId("EditableProfileCardHeader.CancelButton")).toBeInTheDocument();
    });

    test("При отмене значения должны обнуляться", async () => {
        componentRender(<EditableProfileCard id="2" />, options);

        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));

        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

        await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
        await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user");

        expect(screen.getByTestId("ProfileCard.firstname")).toBeInTheDocument();
        expect(screen.getByTestId("ProfileCard.lastname")).toBeInTheDocument();

        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.CancelButton"));

        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("admin");
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin");
    });

});
