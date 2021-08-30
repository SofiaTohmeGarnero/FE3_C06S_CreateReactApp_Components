import React from 'react'
import functionStyle from './FunctionComponent.module.css'

const functionComponent = (props) => {
    //css dinámico
    const {x} = props;
    return (
        <li className={functionStyle[x]}>{props.nombre} traerá {props.tarea}</li>
    )
}

export default functionComponent