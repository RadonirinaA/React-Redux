import {configureStore} from "@reduxjs/toolkit";
import { Basket } from './Basket';

//on va assembler le state, les actions et le reducer
/*
Nous avons maintenant tous les ingrédients prêts : le state, les actions et le reducer.
Il est temps de les faire fonctionner ensemble grâce au Store !
Le Store de Redux, c’est un peu comme les œufs dans une tarte : c’est ce qui lie tous les ingrédients ensemble.
*/
const Store = configureStore({

    reducer : {
        Basket: Basket.reducer


    }

})
export default Store;