import {Form} from "react-bootstrap";

export const ListFilters = () => {
    return <div className="mb-3">
        <Form.Label className="mx-3">
            Filters:
        </Form.Label>
        <Form.Check
            inline
            type="radio"
            name="list-filter"
            label="all"
            checked
        />
        <Form.Check
            inline
            type="radio"
            name="list-filter"
            label="taken"
        />
        <Form.Check
            inline
            type="radio"
            name="list-filter"
            label="to take"
        />
    </div>
}
