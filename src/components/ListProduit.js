import React from 'react'
import Produit from './Produit'
class  ListProduit extends React.Component{
    
    render(){
        var tabProduit=[
            {
                libelle: 'Clavier',
                categorie: 'Electronique',
                quantite: '3'
            },
            {
                libelle: 'Ordinateur',
                categorie: 'Electronique',
                quantite: '2'
            },
            {
                libelle: 'Souris',
                categorie: 'Electronique',
                quantite: '2'
            }
        ];
        return (
            <ul className="list-group">
                <li className="list-group-item active">List Produit</li>
                <li className="list-group-item"> tabProduit.forEach(element =>
                            <Produit>element</Produit>
                        );
                </li>
            </ul>
        )
    }
}

export default ListProduit