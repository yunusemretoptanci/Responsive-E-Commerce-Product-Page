export const initialState = {
    basket: [],
    light:false,
    currentPhoto:[1]
  };
  
  
  function reducer(state, action) {
    
  
    switch (action.type) {
      case "ADD_CART":
        return { ...state, basket: [...state.basket, action.item] };

        case "REMOVE_CART":
      let newBasket = [...state.basket];
      
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      
      if (index >= 0) {
        
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };

      case "OPEN_LIGHT":
        return { ...state, light:true };

        case "CLOSE_LIGHT":
        return { ...state, light:false };

        case "NEXT_IMAGE":
          
        return { ...state, currentPhoto:[...state.currentPhoto, action.item]};

        case "PREVIOUS_IMAGE":
        let newCurrent=[...state.currentPhoto];
        newCurrent.splice(1,1);
        
        return { ...state, currentPhoto:newCurrent};
    default:
      return state;
    }
  }
  
  export default reducer;
  