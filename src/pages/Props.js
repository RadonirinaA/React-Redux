import { useState } from "react";
import { Product, ProductTyped } from "../components/Product";
import { ProductObj } from "../components/Product";
import { Btn } from "../components/Buttons";

const Props = () => {

    /*
        Un props est une propriété que l'on passe à un composant (enfant)
        C'est une information qui vient de l'extrieur, du composant, généralement, 
        de son parent 

        Les composants sont comme les fonctions Javascript 
        Ils acceptent des entrées quelconques (appelées "props")
        et renvoient des éléments Réact décrivant ce qui doit apparaître à l'écran
    */

        const prod = "Ecran";
        const products = ['Ordinateur', 'Souris', 'Clavier'];
        const obj_products = [
            {id : 1, name: 'Pomme', price: 2},
            {id : 2, name: 'Mouchoirs', price: 1},
            {id : 3, name: 'T-shirt', price: 20},
        ]

        const [isLoading, setLoading] = useState(false);

        const testBtn = () => {
            setLoading(true);
            console.log("Coucou");
            setTimeout(() => {
                setLoading(false);
            }, 5000)
        }
    
    //JSX 
    return (
        <>
            <h1>Les Props</h1>
            <main>
                <article>
                    <h2>Fonctionnement</h2>
                    <h3>Simple: </h3>
                    <div  className="grid">
                        {/* 
                            Qd on appelle le composant  Product, on peut lui 
                            transmettre des propriété
                            ici, on lui donne la propriété  name    avec valeur "Tasse"
                            On peut passer autant de propriétés que l'on souhaite au composant
                            cela peut-ê n'importe quel type de valeur
                         */}


                        <Product name="Tasse"   />
                        <Product name={prod}    />
                        <Product                />
                        {products.map (p => <Product key={p} name={p}   />)}
                    </div>

                    <h3>Objets</h3>
                    <div className="grid">
                        {/* 
                            on peut transmettre un objet entier en tant que props et acceder
                            au propriété de l'objet dans le composant enfant
                        */}
                        {obj_products.map(p => <ProductObj key={p.id} name={p.name} price={p.price}/>)}

                        <ProductObj name="Vanille" price="40" currency="$" />
                        <ProductObj name="Chocolat"  />
                        <ProductObj name="Koba" price="quatre"  />
                        <ProductObj name="Ravitoto" prix="5"  />

                    </div>
                </article>

                <article>
                    <h2>Typage</h2>
                    <p>les props , et la soupleese de JS sur les types peuvent poser probleme :</p>
                    <ul>
                        <li>Propriétés non passées</li>
                        <li>Mauvais titre</li>
                        <li>Erreur sur le nom d'une propriété</li>
                    </ul>
                    <p>pour pallier à ça, il existe une librairie : prop-types</p>
                    <p><code>npm i prop-types</code></p>
                    <ul>
                        <li>ne fontionne qu'avec les attributs calculés { 'prop={valeur}' }</li>
                        <li>c'est une libraitrie de dévpmt qui ne lance que des warnings</li>
                    </ul>

                    <h3>Produits typés : </h3>
                    <div className="grid">
                        <ProductTyped name={'Machin'} price={300}  />
                        <ProductTyped name={'Bidule'} price={300} action={ () => alert ('coucou action')} />
                        </div>                             
                </article>
                <article>
                    <h2>Test Bouton: </h2>
                    <Btn action={testBtn} loading={isLoading} txt ={"Clic clic"}/>
                    <Btn action={testBtn} disabled={true} txt ={"Clic clac"}/>
                </article>
            </main>
        </>
    )
}
export default Props;
