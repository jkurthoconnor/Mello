import React from 'react';
import PropTypes from 'prop-types';
import ExistingList from './ExistingList.jsx'
import NewListForm from './NewListForm.jsx'

class ListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const lists = this.context.store.getState().lists.filter(list => list.board_id === this.props.boardId)

    return (
     <div id="list-container" className="list-container">
        <ExistingList
        lists={lists} />
        <NewListForm />
    </div>
    )
  }
}

export default ListContainer;