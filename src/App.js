import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from "react-bootstrap";
import {EntryInput} from "./components/EntryInput";
import {EntriesList} from "./components/EntriesList";
import {TodoListTitle} from "./components/TodoListTitle";
import {ListFilters} from "./components/ListFilters";
import {useEffect, useState} from "react";
import {keys} from 'lodash';

const listInitialState = [
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
];


const App = () => {

    const [list, setList] = useState(listInitialState);
    const [takenFilter, setTakenFilter] = useState(null);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        if (typeof takenFilter === 'boolean') {
            setFilteredList(keys(list).filter(index => list[index].taken === takenFilter));
        } else {
            setFilteredList(keys(list));
        }
    }, [takenFilter, list])

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

    const editListElement = (newText, elementPosition) => {
        const newList = [...list];

        newList.splice(elementPosition, 1, {
            ...list[elementPosition],
            title: newText
        });

        setList(newList);
    }

    const removeListElement = (elementPosition) => {
        const newList = [...list];

        newList[elementPosition].archived = true;

        setList(newList);
    }

    const markListElement = (elementPosition) => {
        const newList = [...list];
        newList[elementPosition].taken = !newList[elementPosition].taken;
        setList(newList);
    }

    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col md={6} className="border border-2 p-3">
                    <TodoListTitle/>
                    <EntryInput handleNewElementInput={insertNewListElement}/>
                    <ListFilters handleFilter={setTakenFilter}/>
                    <hr/>
                    <EntriesList
                        list={list}
                        filtered={filteredList}
                        handleEdit={editListElement}
                        handleRemove={removeListElement}
                        handleMark={markListElement}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
