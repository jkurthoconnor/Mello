import 'boardsReducer' from './BoardsReducer';

export default function reducer(state = {}, action) {
  return {
    boards: boardsReducer(state.boards, action),
    lists: ,
    cards: cardsReducer(state.cards, action),
  };
}
