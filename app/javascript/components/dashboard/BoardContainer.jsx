import React from 'react';
import PropTypes from 'prop-types';

import Board from './Board';
import * as actions from '../../actions/BoardActions';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());

    const boardId = this.getBoardId()

    store.dispatch(actions.fetchSingleBoard(boardId));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getBoardId(){
    let boardId;
    let cardId;
    const regex = new RegExp('^/board')
    const store = this.context.store;

    if (this.props.match.url.match(regex)){
      boardId = +this.props.match.params.id;
    } else {
      cardId = +this.props.match.params.id
      boardId = +store.getState().cards.find(card => card.id === cardId).board_id
    }
    return boardId
  }


  render() {
    const store = this.context.store;
    const boardId = this.getBoardId()

    const board = store.getState().boards.find( (board) => board.id === boardId);
    return (
      <Board board={board} />
    )
  }
}

export default BoardContainer;
