import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./ArticleTextBlockComponent.module.scss";
import {ArticleTextBlock} from "../../model/types/article";
import {Text} from "shared/ui/Text/Text";

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {

    const {className, block} = props;

    const {t} = useTranslation();

    return (
        <div className={classNames(styles.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={styles.title}/>)
            }

            {block.paragraphs.map((paragraph, index) => {
                return (<Text
                    key={index}
                    description={paragraph}
                    className={styles.paragraph}
                />)
            })}
        </div>
    );
});