import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error('Error: ', errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = {
  getBoards: function(callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createBoard: function(board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, {board})
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  getSingleBoard: function(id, callback) {
    return axios
      .get(routes.SHOW_BOARD_URL.concat(id))
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createList: function(boardId, list, callback) {
    return axios
      .post(routes.CREATE_LIST_URL, {board_id: boardId, list: list})
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  updateListTitle: function(listId, title, callback) {
    return axios
      .put(routes.UPDATE_LIST_URL.concat(listId), {title: title})
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createCard: function(listId, card, callback) {
    return axios
      .post(routes.CREATE_CARD_URL, {list_id: listId, card: card})
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;
