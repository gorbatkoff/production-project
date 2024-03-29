import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./CommentCard.module.scss";
import {Comment} from "../../model/types/comment";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Text} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {VStack} from "shared/ui/Stack";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {className, comment, isLoading} = props;
    const {t} = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(styles.CommentCard, {}, [className, styles.loading])}>
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border={"50%"}/>
                    <Skeleton width={100} height={20} className={styles.username}/>
                </div>

                <div>
                    <Skeleton width={"100%"} height={50} className={styles.text}/>
                </div>
            </div>
        )
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack max gap="8" className={classNames(styles.CommentCard, {}, [className])}>
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={styles.header}
            >
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}
                <Text className={styles.username} title={comment.user.username}/>
            </AppLink>

            <div>
                <Text className={styles.text} description={comment.text}/>
            </div>
        </VStack>
    );
});