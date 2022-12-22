import { useLocation } from "react-router-dom";

const NotFound = () => {

    //Hook  :   retourne un objet location qui représente l'url courant
    const location = useLocation();
    console.log(location);

    return (
        <>
            <h1>oups !</h1>
            <h2> R U lost ?</h2>
            <img alt="404 page not found" src="  https://img.buzzfeed.com/buzzfeed-static/static/2016-02/1/11/enhanced/webdr07/anigif_enhanced-21255-1454345675-2.gif"></img>
        <p>le chemin <i>{location.pathname}</i>n'existe pas</p>
        
        </>
    )
}

export default NotFound;