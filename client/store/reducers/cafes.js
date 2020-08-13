const cafes = (state=[], action) => {
  switch(action.type) {
    case 'DELETE_CAFE':
      return state.filter(cafe => cafe.shopId !== id)
      default:
        return state
  }
}

export default cafes;