import React from 'react'

import PageHeader from '../template/pageHeader'
import NoticiaForm from './noticiaForm'
import NoticiaList from './noticiaList'

export default props => (
    <div>
        <PageHeader name='Noticias' small='Cadastro'></PageHeader>
        <NoticiaForm />
        <NoticiaList />
    </div>
)