import'../styles/Logo.css';
function Logo() {
    return (
        <header>

            {
                /*
                        les img affichées ds les JSX doivent se trouver
                        ds le répertoire public
                */

            }
            <img id="spin" alt="" src="images/logo192.png" />
            <h1>Formation React</h1>
            <img id="spin" alt="" src="images/logo192.png" />

        </header>
    )
}
export default Logo;