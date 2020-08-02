import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { change, open, changeTitulo,  changeConteudo} from './noticiaActions'

class NoticiaEdtForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        const hash = document.location.hash;
        const barPos =  document.location.hash.lastIndexOf("/");
        const lastPos = document.location.hash.length;
        let id = hash.substring(barPos+1, lastPos);
        this.props.open({_id: id})
    }

    keyHandler(e) {
        const { change, open, titulo, conteudo, _id } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : change({_id: _id, titulo: titulo, conteudo: conteudo})
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { change, open, titulo, conteudo, _id } = this.props
        return (
            <div role='form' className='noticiaForm'>
                <Grid cols='12 9 10'>
                    <input id='tituloEdt' className='form-control'
                        placeholder='Edite uma noticia'
                        onChange={this.props.changeTitulo}
                        onKeyUp={this.keyHandler}
                        value={this.props.titulo}></input>

                    <input id='conteudoEdt' className='form-control'
                        placeholder='Edite um conteudo'
                        onChange={this.props.changeConteudo}
                        onKeyUp={this.keyHandler}
                        value={this.props.conteudo}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='save'
                        onClick={() => change({_id: _id, titulo: titulo, conteudo: conteudo})}></IconButton>

                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({_id: state.noticia._id, datapublicacao: state.noticia.datapublicacao, titulo: state.noticia.titulo, conteudo: state.noticia.conteudo})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ open, change, changeTitulo,  changeConteudo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NoticiaEdtForm)