import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchBoardsRequest() {
  return {type: types.FETCH_BOARDS_REQUEST};
}

export function fetchBoardsSuccess(boards) {
  return {type: types.FETCH_BOARDS_SUCCESS, boards};
}

export function fetchBoardRequest() {
  return {type: types.FETCH_BOARD_REQUEST};
}

export function fetchBoardSuccess(board) {
  return {type: types.FETCH_BOARD_SUCCESS, board};
}

export function createBoardRequest() {
  return {type: types.CREATE_BOARD_REQUEST};
}

export function createBoardSuccess(board) {
  return {type: types.CREATE_BOARD_SUCCESS, board: board};
}

export function createListSuccess(list) {
  return {type: types.CREATE_LIST_SUCCESS, list: list};
}

export function updateListSuccess(list) {
  return {type: types.UPDATE_LIST_SUCCESS, list: list};
}

export function createCardSuccess(card) {
  return {type: types.CREATE_CARD_SUCCESS, card: card};
}

export function fetchBoards() {
  return function(dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards(boards => dispatch(fetchBoardsSuccess(boards)));
  };
}

export function fetchSingleBoard(id) {
  return function(dispatch) {
    dispatch(fetchBoardRequest());
    apiClient.getSingleBoard(id, board => {
      dispatch(fetchBoardSuccess(board));
    });
  };
}

export function createList(boardId, list, callback) {
  return function(dispatch) {
    //dispatch(createBoardRequest());
    apiClient.createList(boardId, list, newList => {
      dispatch(createListSuccess(newList));

      if (callback) {
        callback(newList);
      }
    });
  };
}

export function updateListTitle(id, title, callback) {
  return function(dispatch) {
    //dispatch(createBoardRequest());
    apiClient.updateListTitle(id, title, newList => {
      dispatch(updateListSuccess(newList));

      if (callback) {
        callback(newList);
      }
    });
  };
}

export function createBoard(board, callback) {
  return function(dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, newBoard => {
      dispatch(createBoardSuccess(newBoard));

      if (callback) {
        callback(newBoard);
      }
    });
  };
}

export function createCard(listId, card, callback) {
  return function(dispatch) {
    // dispatch(createBoardRequest());
    apiClient.createCard(listId, card, newCard => {
      dispatch(createCardSuccess(newCard));

      if (callback) {
        callback(newCard);
      }
    });
  };
}
