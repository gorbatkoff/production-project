import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./ArticleCodeBlockComponent.module.scss";
import {ArticleCodeBlock} from "../../model/types/article";
import {Code} from "shared/ui/Code/Code";

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {

    const {className, block} = props

    const {t} = useTranslation();

    return (
        <Code
            className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}
            text={block.code}
        />
    );
});