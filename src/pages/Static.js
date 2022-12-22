const Static= () =>{
    
    let message = "les JSX servent à interpréter du JavaScript"
    + "entre {}, on peut donc y manipuler des données.";

    const fruits = ['Pomme', 'Poire', 'Banane', 'Ananas'];
    
    const fruits_bis = [
        {id:1, name:'Pomme', price: 2.9},
        {id:2, name:'Mangue', price: 2},
        {id:3, name:'Clémentine', price: 3.1},
        {id:4, name: 'litchee', price: 1000}
    ]

    const isLogged = true;
    const name="Jane Doe"

    const conditionDisplay = () => {
        if(isLogged) {
            return <p>Connecté.e (ce message est affiché par une fonction)</p>
        } else {
            return <p>Pas connecté.e (ce message est affiché par une fonction)</p>
        }
    }

    return(
        <>
            <h1>Données statiques</h1>
            <main>
                <div className="Card">{message}</div>
                <article>
                    <h2>les listes</h2>
                    <ul>
                        {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
                    </ul>

                    <div className="grid">
                        {
                            fruits_bis.map(f => (
                                <div className="card" key={f.id}>{f.name},{f.price} </div>
                            ))
                        }
                    </div>

                </article>

                <article>
                    <h2>Affichage conditionnel</h2>
                    <p>Plusieurs soluces possibles :</p>
                    <p> soit directement ds le JSX</p>
                    <p> soit via une f°</p>
                    <section>
                        <h3>Exemple JSX "Si ...Sinon"</h3>
                        {/* Afficher le nom de l'utilisateur si connecté (isLogged),
                            sinon écrire "Anonyme" */}
                            <p>Bonjour {(isLogged) ? name : 'Anonyme'}</p>

                            {
                                (fruits.length > 0) ?
                                    (
                                        <ul>
                                            {fruits.map(f => <li key={f+10}>{f}</li>)}
                                        </ul>
                                    ):
                                    (<p>Pas de fruits...</p>)

                            }
                    </section>
                    <section>
                        <h3>JSX: Si ...Alors</h3>
                        {/* si c'est truthy alors vs etes connecté.e */}
                        {isLogged && <p>Vous êtes connecté.e</p>}
                    </section>
                    <section>
                    <h3>en f°</h3>
                    {conditionDisplay()}
                    </section>
                            
                    
                </article>
            </main>
        </>
    )



}

export default Static;