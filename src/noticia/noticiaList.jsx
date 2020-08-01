import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { remove } from './noticiaActions'

const NoticiaList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(noticia => (
            <tr key={noticia._id}>
                <td className='titulo'>{noticia.titulo}</td>
                <td className='conteudo'>{noticia.conteudo}</td>
                <td>

                    <IconButton style='danger' icon='trash-o' hide="false"
                        onClick={() => props.remove(noticia)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Conteúdo</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.noticia.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NoticiaList)