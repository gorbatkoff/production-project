import {counterReducer, counterActions} from "./counterSlice";
import {CounterSchema} from "../types/counterSchema";

describe("counterSlice.test", () => {
    test("decrement action", () => {
        const state: CounterSchema = {value: 10}
        expect(counterReducer(state, counterActions.decrement()))
            .toEqual({value: 9});
    })

    test("increment action", () => {
        const state: CounterSchema = {value: 10}
        expect(counterReducer(state, counterActions.increment()))
            .toEqual({value: 11});
    })

    test("have undefined", () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({value: 1});
    })
})