import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Profile, ValidateProfileError} from "../../types/profile";
import {getProfileForm} from "../../selectors/getProfileForm/getProfileForm";
import {validateProfileData} from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>>(
        "profile/updateProfileData",
        async (_, thunkApi) => {
            const {
                extra,
                rejectWithValue,
                getState
            } = thunkApi

            // Получаем данные с формы и отправляем на бэкенд
            const formData = getProfileForm(getState())

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors)
            }

            try {
                const response = await extra.api.put<Profile>(
                    `/profile/${formData?.id}`,
                    formData
                );

                if (!response.data) {
                    throw new Error();
                }

                return response.data
            } catch (error) {
                console.log(error)
                return rejectWithValue([ValidateProfileError.SERVER_ERROR])
            }
        }
    )