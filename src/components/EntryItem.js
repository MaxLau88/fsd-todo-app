import {Button, FormControl, InputGroup} from "react-bootstrap";
import {debounce} from 'lodash';
import {useMemo, useState} from "react";

export const EntryItem = ({title, completed = false, handleEdit, handleRemove, handleMark}) => {

    const [titleValue, setTitleValue] = useState(title);

    const debouncedHandleTitle = useMemo(() => debounce(handleEdit, 500), [handleEdit]);

    const handleChange = event => {
        setTitleValue(event.target.value)
        debouncedHandleTitle(event.target.value);
    };

    return <InputGroup className="mb-3">
        <InputGroup.Checkbox checked={completed} onChange={handleMark}/>
        <FormControl
            disabled={completed}
            value={titleValue}
            className={completed ? 'text-decoration-line-through' : ''}
            onChange={handleChange}
        />
        <Button disabled={completed} variant="outline-secondary" onClick={handleRemove}>x</Button>
    </InputGroup>;

}
