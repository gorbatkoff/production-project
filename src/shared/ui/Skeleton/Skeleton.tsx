import {CSSProperties, memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {className, height, width, border} = props;

    const cls: CSSProperties = {
        width,
        height,
        borderRadius: border,
    }

    return (
        <div className={classNames(styles.Skeleton, {}, [className])} style={cls}/>
    );
});