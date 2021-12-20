import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const Basketslice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //actions
    addToBasket: (state, action) => {
      state.items=[...state.items,action.payload]
    },
    removeFromBasket: (state, action) => {
      const index=state.items.findIndex((item)=>(item.id===action.payload.id));
     
      let newbasket=[...state.items]
     if(index>=0){
      newbasket.splice(index,1);
     
     }
     else{
       console.warn('cannot proceed');
     }
     state.items=newbasket;
     console.log(state.items);
    },
  },
});

export const { addToBasket, removeFromBasket } = Basketslice.actions;

// Selectors - This is how we pull information from the Global store slice
export const Selectitems = (state) => state.basket.items;
export const Totalprice=(state)=>
  state.basket.items.reduce((total,item)=>total+item.price,0)


export default Basketslice.reducer;