import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import {t} from "i18next";

interface CounterProps {
    className?: string
}

export const Counter = ({className}: CounterProps) => {

    const dispatch = useDispatch();

    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>

            <Button theme={ButtonTheme.OUTLINE}
                onClick={increment}
                data-testid="increment-btn"
            >
                {t("Increment")}
            </Button>
            <Button theme={ButtonTheme.OUTLINE}
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t("Decrement")}
            </Button>
        </div>
    );
};