import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';


const Request = () => {

    const joke_api ="https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode";

    const[joke, setJoke] = useState("");
    const[character, setCharacter] = useState({});
    const[tailleStarWars,setTailleStarWars] = useState({});
    const swapi_people="https://swapi.dev/api/people/";
    const [id, setId] = useState(1);
    

    const getJoke = async () => {
        const {data} = await axios.get(joke_api);
        //joke est un attribut de l'objet data de la response JSON
        setJoke(data.joke);
    }

    //utiliser AXIOS
    //url pr récuperer les personnages https://swapi.dev/api/people/{id}
    // ==> swapi_people + id
    //data est 1 attribut non qui contient les données récupérées
    const getStarWars = async () => {
        
        const {data} = await axios.get(swapi_people + id);
        setCharacter(data);
     }
   
     const getTailleStarWars  = () => {
        axios.get(swapi_people)
            .then(res => setTailleStarWars(res.data))

     }





    

    useEffect( () => {
        console.log("coucou de use!effect");
        getJoke();

    },[])  // []    : aucune valeur à surveiller, ne s execute qu'une seule fois, au rendu

   
   //on va surveiller l'ID, qd l'id change => on le recupere ds l'API et on l'affiche
    //qd l'id change, useEffect se lance et appelle la methode getStarWars
    //qui charge les données venant de l'API    
    useEffect( () => { 
        console.log("Coucou de StarWars");
        getStarWars();
    },[id]);


    useEffect ( () => {
        getTailleStarWars();
    },[])



    
    return (
        <>
            <h1>Les requêtes</h1>
            <main>
                <h2>Présentation</h2>
                <p>pr commencer, il faut isntall AXIOS ds le projet</p>
                <p><code>npm i axios</code></p>
                <div className="card">{joke}</div>
                <p>Pr récup 1 fois des données dans une API, au moment du chargement
                    du composant, on passe notre requête ds useEffect, et en second 
                    param de useEffect, on passe un tableau vide []
                </p>
                <p>ainsi, on précise à useEffect qu'il n'a aucune valeur à surveiller,
                    il ne s executera qu une seule fois, au chargement
                </p>

                <h2>Avec filtre dynamique :</h2>
                <p><button disabled={id <=1} onClick={  () => setId(id - 1) }>Précédent</button> 
                <button disabled={id>tailleStarWars.count} onClick={ () => setId(id + 1) }>Next</button></p>

                <div className="card">
                    <h3>{character.name}</h3>
                    <p>{character.birth_year}</p>
                    <p>{character.height}</p>
                    <p>{character.mass}</p>
                    <p>nb de persos = {tailleStarWars.count} </p>
                 
                </div>


                
            </main>
        </>



    )
}

export default Request;