import {Form} from "react-bootstrap";

export const ListFilters = ({handleFilter}) => {
    return <div className="mb-3">
        <Form.Label className="mx-3">
            Filters:
        </Form.Label>
        <Form.Check
            inline
            type="radio"
            name="list-filter"
            label="all"
            defaultChecked
            onChange={() => handleFilter(null)}
        />
        <Form.Check
            inline
            type="radio"
            name="list-filter"
            label="taken"
            onChange={() => handleFilter(true)}
        />
        <Form.Check
            inline
            type="radio"
            name="list-filter"
            label="to take"
            onChange={() => handleFilter(false)}
        />
    </div>
}
