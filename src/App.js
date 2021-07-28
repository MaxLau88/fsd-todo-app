import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from "react-bootstrap";
import {EntryInput} from "./components/EntryInput";
import {EntriesList} from "./components/EntriesList";
import {TodoListTitle} from "./components/TodoListTitle";
import {ListFilters} from "./components/ListFilters";
import {useState} from "react";


const App = () => {

    const [list, setList] = useState([
        {
            title: "Beautiful UI",
            taken: true,
            archived: false,
        },
        {
            title: "Fantastic Library",
            taken: false,
            archived: false,
        },
        {
            title: "Awesome Instrument",
            taken: true,
            archived: false,
        },
    ]);

    const insertNewListElement = text => {
        setList([
            ...list,
            {
                title: text,
                taken: false,
                archived: false
            }
        ]);
    }

    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col md={6} className="border border-2 p-3">
                    <TodoListTitle/>
                    <EntryInput handleNewElementInput={insertNewListElement}/>
                    <ListFilters/>
                    <hr/>
                    <EntriesList list={list}/>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
