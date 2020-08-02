import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Noticia from '../noticia/noticia'
import NoticiaEdt from '../noticia/noticiaEdtForm'


export default props => (
    <Router history={hashHistory}>
        <Route path='/noticias' component={Noticia} />
        <Route path='/noticia/:id' component={NoticiaEdt} />
        <Redirect from='/' to='/noticias' />
    </Router>
)