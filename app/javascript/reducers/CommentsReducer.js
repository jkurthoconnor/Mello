export default function commentsReducer(state = [], action) {
  if (action.type === "CREATE_COMMENT_SUCCESS") {
    console.log('create comment')
    return state.concat(action.comment)
  } else if (action.type === 'FETCH_CARD_SUCCESS') {
    console.log('fetching card')
    return [...action.card.comments]
  } else {
    return state;
  }
}
