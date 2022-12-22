import { useState } from "react";

const State =() => {

    let counter1 = 0;
    const boom = () => alert ("BOOM !!");
    const event = (event) => console.log(event);

    const param = (p) => console.log(p);
    const incrementCount = () => {
        counter1++;
        console.log(counter1);
    }

    /*  ---HOOKS---- */
    /* import {useState} from "react"; */
    const[count, setCount] = useState(0);  
    const[message, setMessage]= useState("Hello World");

    const increment = () => {
        const new_value = count + 1;
        setCount(new_value);
    }


    const handleSubmit =(e) => {
        //Pr éviter que la page se recharge à cause du submit
        e.preventDefault();
        console.log(e);
        const form = e.target; //tableau
        const input = form[0]; // element HTML input
        console.log(input);
        const new_message=input.value;
        setMessage(new_message); // f° issue de useState
        input.value="";

    }



    // ---------JSX-------------------


    return (
        <>

            <h1>les Hooks d'état</h1>
            <main>
                <article>
                    <h2>Problèmes</h2>
                    <h3>Evenement de click</h3>
                    <div>
                        <button onClick={boom}>Ne cliquez pas ici</button>
                        <button onClick={event}>Event</button>
                        <button onClick={() => console.log("Hello")}>Hello</button>
                        <button onClick={e => console.log(e)}>Event 2</button>
                        <button onClick={() => param("coucou")}>Paramètre</button>
                    </div>
                    <h3>Compteur : </h3>
                    <p>Mon compteur : {counter1}</p>
                    <div>
                        <button onClick={incrementCount}>+</button>
                    </div>
                    <p>la modifif° se fait bien avec counter, mais uniquement ds la console et non 
                        répercutée dans le DOM
                    </p>
                    <p>Pour que React modifie le DOM dynamiquement, il faut lui demander
                        d'écouter l'état des variables avec le HOOK d'état
                    </p>
                </article>

                <article>
                    <h2>le hook d'état  :   useState</h2>
                    <p>les hooks existent dps React 16.8, avant, on utilisait les states</p>
                    <p>
                        useState est une methode qui retourne un tableau  de 2 valeurs  :
                        l'état actuel qui est la valeur actuelle, et une f° pr modifier
                        cet état.
                    </p>

                    <p>Mon deuxieme compteur avec Hook: <b>{count}</b></p>
                    <div><button onClick={increment}>Incrémente count</button></div>

                    <p>Mon message : </p>
                    <p>{message}</p>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="msg">New message : </label>
                        <input id="msg" name="msg" />
                        <button type="submit">Save</button>
                    </form>

                </article>
            </main>

        </>
    )

}





export default State;
