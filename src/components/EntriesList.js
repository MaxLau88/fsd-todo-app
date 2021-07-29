import {EntryItem} from "./EntryItem";
import {map} from 'lodash';

export const EntriesList = ({list = [], filtered, handleEdit, handleRemove, handleMark}) => {
    return <>
        {
            map(filtered,
                (index) => {
                    const {archived, taken, title} = list[index];
                    return (
                        !archived &&
                        <EntryItem
                            key={index}
                            title={title}
                            completed={taken}
                            handleEdit={(text) => handleEdit(text, index)}
                            handleRemove={() => handleRemove(index)}
                            handleMark={() => handleMark(index)}
                        />
                    );
                }
            )
        }
    </>
}
