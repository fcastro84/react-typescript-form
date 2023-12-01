import {ChangeEvent, FormEvent} from "react";
import {Data} from "../interfaces/interfaces";
import {useNewForm} from "../hooks/useNewForm";

interface FormProps {
    onNewSub: (newSub: Data) => void
}






export const Form = ({ onNewSub }: FormProps) => {

    //const [inputValues, setInputValues] = useState<Data>(INITIAL_STATE);



    const [inputValues, dispatch] = useNewForm();

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onNewSub( inputValues );
        handleClear();
    }

    const handleChange = ( evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = evt.target;
        dispatch({type:'change_value', payload:{inputName: name, inputvalue: value}});
        // setInputValues({
        //     ...inputValues,
        //     [evt.target.name]: evt.target.value
        // });

    }

    const handleClear = () => {
        dispatch({type: 'clear'});
    // setInputValues(INITIAL_STATE);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}  className="display_form">
                <input type="text" name="nick" placeholder="Nick" value={inputValues.nick} onChange={handleChange} />
                <input type="number" name="subMonths" placeholder="subMonths" value={inputValues.subMonths} onChange={handleChange} />
                <input type="text" name="avatar" placeholder="Avatar" value={inputValues.avatar} onChange={handleChange} />
                <textarea name="description" placeholder="Description" value={inputValues.description} onChange={handleChange}> </textarea>
                <button type="button" onClick={handleClear}>Clear the Form</button>
                <button type="submit">Save new Subscription</button>
            </form>
        </div>
    );
};
