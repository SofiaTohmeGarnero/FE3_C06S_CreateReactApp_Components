import React, { Component } from 'react'
import classStyle from './ClassComponent.module.css'

export default class ClassComponent extends Component {
    render() {
        //css estatico (no se cómo hacerlo dinámico)
        return (            
            <li className={classStyle.invitados}> {this.props.nombre} {this.props.estaEnLista ? "esta": "no está"} invitado a la fiesta</li>
        )
    }
}