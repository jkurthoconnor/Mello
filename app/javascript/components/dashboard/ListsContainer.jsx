import React from 'react';
import PropTypes from 'prop-types';
import ExistingList from './ExistingList.jsx'
import NewListFormContainer from './NewListFormContainer.jsx'

class ListsContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const lists = this.context.store.getState().lists.filter(list => list.board_id === this.props.boardId)

    return (
     <div id="list-container" className="list-container">
       <ExistingList
         lists={lists} />
       <NewListFormContainer 
        boardId={this.props.boardId}
       />
    </div>
    )
  }
}

export default ListsContainer;