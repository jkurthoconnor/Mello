import React from 'react';
import PropTypes from 'prop-types';
import ListWrapper from './ListWrapper.jsx'

const ExistingList = (props) => {
    const lists = props.lists.map(list => {
        return (
            <ListWrapper
            key={list.id}
            list={list}
            />
        )
    })

    return (
        <div id="existing-lists" className="existing-lists">
            {lists}
        </div>
    )
}

export default ExistingList