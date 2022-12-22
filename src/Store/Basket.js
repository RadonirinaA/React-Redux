import {createSlice} from "@reduxjs/toolkit";


/*
    Le Reducer, c’est le cerveau de Redux. C’est là que l'on va mettre la logique de notre application. 
    Un Reducer Redux est une fonction qui reçoit le state et une action en paramètre,
     et qui retourne un nouveau state.
    création d'un reducer pr le slice de notre basket
*/
export const Basket = createSlice({

    //nom du slice
    name: 'basket',

    // le state intitial du slice
    initialState : {
        value:0
    },

    // on définti les actions et la logique du reducer
    reducers : {
        add : (state) => {state.value++},
        remove: (state) => {state.value--}
    }

})

export const {add, remove} = Basket.actions;
export default Basket.reducer;