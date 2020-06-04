import React, { Component } from 'react'

const Produit = (props) =>{
   return(
        <li className="list-group-item">
           {props.libelle}-{props.categorie}-{props.quantite}
        </li>   
   )
}

export default Produit