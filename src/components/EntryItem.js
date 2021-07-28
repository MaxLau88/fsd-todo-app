import {Button, FormControl, InputGroup} from "react-bootstrap";

export const EntryItem = ({title, completed = false}) => {
    return <InputGroup className="mb-3">
        <InputGroup.Checkbox checked={completed}/>
        <FormControl disabled={completed} value={title} className={completed ? 'text-decoration-line-through' : ''}/>
        <Button disabled={completed} variant="outline-secondary">x</Button>
    </InputGroup>;

}
