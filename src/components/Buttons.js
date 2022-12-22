import '../styles/Buttons.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Btn= ({action, txt, loading = false, disabled = false}) => {
    return (
        <button disabled={disabled} onClick={action}>
            {   (!loading)  ?   txt :   <span className="bounce"    />    }
        </button>
    )
}

export const BackBtn=() => {
    /*
        le hook useNavigate() nous permet de naviguer à travers les routes
        Par ex, nous permet de se rediriger vers la page précédemment visitée
    */
   const navigate = useNavigate();

   //
   const back = () => navigate(-1);

   return<button onClick={back} className="secondary">{'<'} Back</button>
}