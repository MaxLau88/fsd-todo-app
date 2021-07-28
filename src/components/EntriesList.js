import {EntryItem} from "./EntryItem";
import {map} from 'lodash';

export const EntriesList = ({list = []}) => {
    return <>
        {
            map(list,
                ({archived, taken, title}, index) =>
                    (
                        !archived &&
                        <EntryItem
                            key={index}
                            title={title}
                            completed={taken}
                        />
                    )
            )
        }
    </>
}
