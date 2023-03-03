import {CounterSchema} from "entities/Counter";
import {UserChema} from "entities/User";

export interface StateSchema {
    counter: CounterSchema;
    user: UserChema;
}