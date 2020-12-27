import React, { Component } from 'react'
import styles from './src/css/footer.module.css'
import heart from './src/img/heart.svg'
export default class Footer extends Component{
    render() {
        return (
            <div className={styles.outercontainer}>
              <div className={styles.love}><p>Made with</p> <img src={heart} alt="heart" /><p> by Karuna</p></div>
              <p>Happy Cooking!</p><br />
              <p>Hope It will help You!</p>
              
            </div>
        )
    }
}