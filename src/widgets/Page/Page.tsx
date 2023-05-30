import React, {MutableRefObject, ReactNode, useRef} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Page.module.scss";
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getScrollByPath, scrollSaveActions} from "features/scrollSave";
import {useLocation} from "react-router-dom";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useSelector} from "react-redux";
import {StateSchema} from "app/providers/StoreProvider";
import {useThrottle} from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {

    const {className, children, onScrollEnd} = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();

    const {pathname} = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScrollHandler = useThrottle((e: React.UIEvent<HTMLElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop
        }))
    }, 500)

    return (
        <section
            ref={wrapperRef}
            className={classNames(styles.Page, {}, [className])}
            onScroll={e => onScrollHandler(e)}
        >
            {children}

            {onScrollEnd ? <div className={styles.trigger} ref={triggerRef}/> : null}
        </section>
    );
};