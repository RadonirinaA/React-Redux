import { useEffect } from "react";
import { useState } from 'react';

const Effect = () => {


/*
    Le hook d'effet permet l'exécution d'effets de bord ds les f° composants :
    -Charger des données dps un serveur distant, -s'abonner, -déclencher une alerte à
    chaque fois que votre panier est mis à jour, -sauvegarder ce panier à chauque maj
    et -modifier manuellement le DOM sont des ex d'effet de bord

    Ce sont des act° qui ne font pas partie du return, qui interviennent après que
    React ait mis à jour le DOM


*/
    const[counter, setCounter] = useState(0);
    const[isLogged, setLog] = useState(false);
    let toto = "toto";

    const increment = () => {
        setCounter(counter+1);
        toto= "Not toto";
        console.warn("in increment : ", toto)
    }



    //1er Agit à chaque modif°
    /*
        l'effet ici met à jour le counter qui s'incrémente  
    */
    useEffect( () => {
        console.log("(First) Counter a été incrémenté, new value : ", counter);
    })


    //2e useEffect ne se lancera que lorsque ce sont ces valeurs qui sont modif
    // on peut passer ici un 2e param à cette f° useEffect :
    // un tableau contenant les effets à surveiller
    useEffect ( () => {
        console.warn("(second) Counter a été incrémenté : ",counter);
    }, [counter])
    

    //3e useEffect : pour couper les connexions à des flux, des websockets, des obervables...
    //
    useEffect( () => {
        let seconds = 0;
        console.log("component a été rendu depuis : ");
        let intervalle = setInterval( () => {
            seconds++;
            console.log(`${seconds} secondes`);
        }, 1000)
        return () => {
            //couper ts les flux 
            //sans ça à chaque nouveau click sur btn, les précédentes flux continuent à s'incrementer
            //ici, on clic >> le nouveau flux se lance et le précédent flux s'interrompt
            clearInterval(intervalle);
        }
    })


//JSX

    return (
        <>
            <h1>Effect</h1>
            <main>
                <article>
                    <h2>Presentation : useEffect</h2>
                    <p>Compteur : {counter}</p>
                    <p>
                        <button onClick={increment}>++</button>
                        <button onClick={ () => setLog(!isLogged)}>
                            {(isLogged) ?   'Logout'    :   'Login'}
                        </button>
                    </p>
                    <p>useEffect permet d'agir lorsque le DOM est m.a.j. / rendu</p>
                    <p>il agit à la créat° du composant, au 1er rendu, et chacunes
                        des modif°</p>
                    <p>On se sert de useEffect pour : </p>
                        <ul>
                            <li>faire des requêtes à la créat° du composant</li>
                            <li>agir à la modif° d'1 valeur précise</li>
                            <li>agir à chaque modif°</li>
                            <li>pour couper les connex° à des flux, des websockets, des observables...</li>
                        </ul>
                </article>
            </main>
        </>

    )





}


export default Effect;