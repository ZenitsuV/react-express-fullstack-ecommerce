import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  favouriteItems: [],
  totalFavouriteitems: 0,
};


const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addFavouriteItem(state, action) {
      let updatedFavouriteItems = [];

      const existingFavItemIndex = state.favouriteItems.findIndex(
        (item) => item.user === action.payload.user
      );
 
      const existingFavData = state.favouriteItems[existingFavItemIndex];
    

      if (existingFavData) {
        const existingFavProducts = existingFavData.items; 
        let updatedFavProducts = existingFavProducts.push({
          productId:action.payload.productId,
          addedAt: Date.now(),
        });

        const updatedItem = {
          ...existingFavData,
          items: updatedFavProducts,
        };
        updatedFavouriteItems = [...state.favouriteItems];
        updatedFavouriteItems[existingFavItemIndex] = updatedItem;
      } else {
        updatedFavouriteItems =  state.favouriteItems.concat({
          _id: Date.now(),
          user: action.payload.user,
          items: [{
            productId: action.payload.productId,
            addedAt: Date.now(),
          }] 
        });
      }

      return {
        favouriteItems: updatedFavouriteItems,
        totalFavouriteitems: updatedFavouriteItems.length,
      };
    },
    removeFavouriteItem(state, action) {
      let updatedFavouriteItem = state.favouriteItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        favouriteItems: updatedFavouriteItem,
        totalFavouriteitems: updatedFavouriteItem.length,
      };
    },
    itemIsFavourite(state, action) {
      if (state.favouriteItems.length > 0)
        return state.favouriteItems.items.some((item) => item.id === action.payload.productId);
    },
  },
});




export default favSlice.reducer;
export const favActions = favSlice.actions;
