import {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input/Input";
import {Button} from "shared/ui/Button/Button";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {addCommentFormActions, addCommentFormReducer} from "../../model/slice/addCommentFormSlice";
import {getAddCommentFormError, getAddCommentFormText} from "../../model/selectors/addCommentFormSelectors";
import styles from "./AddCommentForm.module.scss";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {

    const {className, onSendComment} = props;
    const {t} = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((text: string) => {
        dispatch(addCommentFormActions.setText(text))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("")
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(styles.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t("Введите текст комментария")}
                    value={text}
                    onChange={onCommentTextChange}
                    className={styles.input}
                />

                <Button
                    onClick={onSendHandler}
                >
                    {t("Отправить")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;