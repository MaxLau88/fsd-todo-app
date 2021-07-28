import {Button, FormControl, InputGroup} from "react-bootstrap";
import {useRef} from "react";

export const EntryInput = ({handleNewElementInput}) => {

    const textInputRef = useRef();

    const submitElement = e => {
        e.preventDefault();
        handleNewElementInput(textInputRef.current.value);
        textInputRef.current.value = '';
    };

    return <form onSubmit={submitElement}>
        <InputGroup className="my-3">
            <FormControl ref={textInputRef} placeholder="TODO Entry"/>
            <Button type="submit" variant="outline-secondary">+</Button>
        </InputGroup>
    </form>
}
