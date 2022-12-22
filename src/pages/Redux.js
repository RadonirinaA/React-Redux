import {useSelector, useDispatch} from "react-redux"


import { add,  remove } from './../Store/Basket';
//
const Redux = () => {

/*
    On va lire les données du store avec le hook useSelector
    Pour appeler les actions du reducer, nous utiliserons le hook useDispatch();
*/

    //le Hook useSelector   : permet de récup une valeur ds le store
    const count = useSelector((state) => state.Basket.value);
    
    //Hook useDispatch appelle la f° Dispatch
    const dispatch = useDispatch();

    const addBasket = () => dispatch(add());
    function rmvBasket () {
        dispatch(remove())
    }

    return(
        <>
            <h1>Redux</h1>
            <p>Il y a {count} élements dans mon panier</p>
            <div>
                <button onClick={addBasket}>+ Add to basket</button>
                <button onClick={rmvBasket}>- Remove from basket</button>
            </div>
        </>
    )

}

export default Redux;
