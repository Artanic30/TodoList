import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './app/todoList/index'



class AppRouter extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Index} />
                </Switch>
            </Router>
        )
    }
}


export default AppRouter;
