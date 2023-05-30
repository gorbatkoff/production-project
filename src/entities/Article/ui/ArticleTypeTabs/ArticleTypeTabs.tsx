import {memo, useCallback, useMemo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {TabItem, Tabs} from "shared/ui/Tabs/Tabs";
import {ArticleTypes} from "../../model/types/article";

interface ArticleTypeTabsProps {
    className?: string,
    value: ArticleTypes,
    onChangeType: (type: ArticleTypes) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {

    const {className, value, onChangeType} = props;
    const {t} = useTranslation();
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleTypes.ALL,
            content: `${t("Все статьи")}`,
        },
        {
            value: ArticleTypes.IT,
            content: `${t("Айти")}`,
        },
        {
            value: ArticleTypes.ECONOMICS,
            content: `${t("Экономика")}`,
        },
        {
            value: ArticleTypes.SCIENCE,
            content: `${t("Наука")}`,
        },
    ], [t])

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleTypes)
    }, [onChangeType])

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames("", {}, [className])}
        />
    );
});