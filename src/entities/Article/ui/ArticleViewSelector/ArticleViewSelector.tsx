import {ArticleView} from "entities/Article/model/types/article";
import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./ArticleViewSelector.module.scss";
import TileIcon from "shared/assets/images/tiles-20-20.svg"
import ListIcon from "shared/assets/images/list-20-20.svg"
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Icon} from "shared/ui/Icon/Icon";

interface ArticleViewSelectorProps {
    className?: string,
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: ListIcon
    },
    {
        view: ArticleView.TILE,
        icon: TileIcon
    }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {

    const {className, view, onViewClick} = props;

    const onClick = (view: ArticleView) => {
        onViewClick?.(view)
    }

    return (
        <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    onClick={() => onClick(viewType.view)}
                    theme={ButtonTheme.CLEAR}
                    key={Math.random() * 100}

                >
                    <Icon Svg={viewType.icon}
                        className={classNames(styles.Button, {
                            [styles.notSelected]: viewType.view !== view
                        }, [])}
                    />
                </Button>
            ))}
        </div>
    );
});