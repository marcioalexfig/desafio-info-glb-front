import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Noticia from '../noticia/noticia'


export default props => (
    <Router history={hashHistory}>
        <Route path='/noticias' component={Noticia} />
        <Redirect from='*' to='/noticias' />
    </Router>
)