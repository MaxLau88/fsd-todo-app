import 'bootstrap/dist/css/bootstrap.css';
import {Button, Card, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";


const EntryInput = () => {
    return <InputGroup className="my-3">
        <FormControl placeholder="TODO Entry"/>
        <Button variant="outline-secondary">+</Button>
    </InputGroup>
}

const EntryItem = ({title, completed = false}) => {
    return <InputGroup className="mb-3">
        <InputGroup.Checkbox checked={completed}/>
        <FormControl disabled={completed} placeholder={title} className={completed ? 'text-decoration-line-through' : ''}/>
        <Button disabled={completed} variant="outline-secondary">x</Button>
    </InputGroup>;

}

const EntriesList = () => {
    return <>
        <EntryItem title="Beautiful UI" completed/>
        <EntryItem title="Fantastic Library"/>
        <EntryItem title="Awesome Instrument" completed/>
        <EntryItem title="..."/>
    </>
}

const TodoListTitle = () => {
    return <Card className="mb-5">
        <Card.Header>All you need is...</Card.Header>
        <Card.Body>
            <Card.Title>Remember to take all you need</Card.Title>
        </Card.Body>
    </Card>;
}

const ListFilters = () => {
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

const App = () => (
    <Container className="mt-3">
        <Row className="justify-content-center">
            <Col md={6} className="border border-2 p-3">
                <TodoListTitle/>
                <EntryInput/>
                <ListFilters/>
                <hr/>
                <EntriesList/>
            </Col>
        </Row>
    </Container>
);

export default App;
