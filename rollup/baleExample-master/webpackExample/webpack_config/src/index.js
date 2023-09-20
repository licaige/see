import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'

const App = () => {
    return (
        <div className={styles['homepage']}>hello from woyao!</div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
