import {Card} from "react-bootstrap";

export const TodoListTitle = () => {
    return <Card className="mb-5">
        <Card.Header>All you need is...</Card.Header>
        <Card.Body>
            <Card.Title>Remember to take all you need</Card.Title>
        </Card.Body>
    </Card>;
}
