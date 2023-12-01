import {Data} from "../interfaces/interfaces";
import {useReducer} from "react";

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
};


type FormReducerAction = { type: 'change_value', payload: {inputName: string; inputvalue: string} } | { type: 'clear'};

const formReducer = (state: Data, action: FormReducerAction) => {
    switch (action.type) {
        case "change_value":
            const {inputName, inputvalue} = action.payload;
            return {
                ...state,
                [inputName]: inputvalue
            }
        case "clear":
            return INITIAL_STATE;
    }
}


export const useNewForm = () => {

    return useReducer(formReducer, INITIAL_STATE);

};
