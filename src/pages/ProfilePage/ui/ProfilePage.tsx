import {memo} from "react";
import {Page} from "widgets/Page/Page";
import {VStack} from "shared/ui/Stack/VStack/VStack";
import {EditableProfileCard} from "features/editableProfileCard";
import {classNames} from "shared/lib/classNames/classNames";
import {useParams} from "react-router-dom";
import {Text} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {
    EditableProfileCardHeader
} from "features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader";


interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({className}: ProfilePageProps) => {
    const {id} = useParams<{ id: string }>();
    const {t} = useTranslation();

    if (!id) {
        return <Text title={t("Профиль не найден")}/>
    }

    return (
        <Page className={classNames("", {}, [className])}>
            <VStack max={true} gap="16">
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
})

export default ProfilePage