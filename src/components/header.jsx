import React, { Component } from 'react'
import styles from './src/css/header.module.css'
import chef from './src/img/cooking.svg'

export default class Header extends Component{
    render() {
        return (
            <div className={styles.outercontainer}>
                    <img src={chef} alt="chef" />
                    <h1>Food-Recipe</h1>
                    <img src={chef} alt="chef" />
            </div>
        )
    }
}