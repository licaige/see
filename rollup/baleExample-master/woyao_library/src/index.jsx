import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'woyao'
        }
    }
    setup() {
        console.log('setup')
    }

    render() {
        return (
            <div className="container">
                Hello from woyao
            </div>
        )
    }

}

ReactDOM.render(<App />, document.querySelector('#root'))

