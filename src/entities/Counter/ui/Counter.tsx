/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {
  className?: string;
}
export const Counter = (props: CounterProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment">increment</Button>
            <Button onClick={decrement} data-testid="decrement">decrement</Button>
        </div>
    );
};
