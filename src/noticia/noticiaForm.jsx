import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeTitulo, changeConteudo, search, clear } from './noticiaActions'

class NoticiaForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, titulo, conteudo } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(titulo, conteudo)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, titulo, conteudo } = this.props
        return (
            <div role='form' className='noticiaForm'>
                <Grid cols='12 9 10'>
                    <input id='titulo' className='form-control'
                        placeholder='Adicione uma noticia'
                        onChange={this.props.changeTitulo}
                        onKeyUp={this.keyHandler}
                        value={this.props.titulo}></input>

                    <input id='conteudo' className='form-control'
                        placeholder='Adicione um conteudo'
                        onChange={this.props.changeConteudo}
                        onKeyUp={this.keyHandler}
                        value={this.props.conteudo}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => add(titulo, conteudo)}></IconButton>

                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({titulo: state.noticia.titulo, conteudo: state.noticia.conteudo})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeTitulo, changeConteudo, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NoticiaForm)