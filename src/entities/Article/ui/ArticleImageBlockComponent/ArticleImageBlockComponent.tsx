import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./ArticleImageBlockComponent.module.scss";
import {ArticleImageBlock} from "../../model/types/article";
import {Text, TextAlign} from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {

    const {className, block} = props;

    const {t} = useTranslation();

    return (
        <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt="" className={styles.img}/>

            {block.title && (
                <Text description={block.title} align={TextAlign.CENTER}/>
            )}
        </div>
    );
});