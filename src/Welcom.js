import React, { Component } from 'react'
import ListProduit from './components/ListProduit'
class Welcom extends React.Component {
    render(){
        return (
            <div>
                <header>
                    Gestion de Stock
                    <ListProduit />
                </header>
            </div>
        );
    }
       
    
}
export default Welcom;