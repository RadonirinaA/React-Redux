import { useState } from 'react';
import { Btn } from './../components/Buttons';

const Connexion = () => {

    const [isLogged,updateLog]=useState(false);

    function login() {

        //if (isLogged0 {updateLog(false) else updatelog(true)})
        updateLog(!isLogged);
    }
//JSX 
return (
        <>
        <h1>Login  </h1>
            <main>
                <article>                   
                 <Btn action={login} disabled={false} txt ={(isLogged) ? "Déconnexion"   : "Connexion"}/>    
              
                                
                <section>                                               
                        {(isLogged) ? <p>Bienvenue</p>    : <p>Vous n'êtes pas connecté.e</p>}
                </section>
                </article>
               
            </main>
        
        </>
       
)


}

export default Connexion;


