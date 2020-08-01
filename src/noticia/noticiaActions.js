import axios from 'axios'

const URL = 'http://localhost:3000/api/noticias'

export const changeTitulo = event => ({
    type: 'TITULO_CHANGED',
    payload: event.target.value
})

export const changeConteudo = event => ({
    type: 'CONTEUDO_CHANGED',
    payload: event.target.value
})


export const search = () => {
    return (dispatch, getState) => {
        const titulo = getState().noticia.titulo
        const search = titulo ? `&titulo__regex=/${titulo}/` : ''
        const request = axios.get(`${URL}?sort=-datapublicacao${search}`)
            .then(resp => dispatch({type: 'NOTICIA_SEARCHED', payload: resp.data}))
    }
}

export const add = (titulo, conteudo) => {
    return dispatch => {
        axios.post(URL, { titulo, conteudo } )
            .then(resp => console.log("aqui"))
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
            
    }
}

export const change = (titulo, conteudo) => {
    return dispatch => {
        axios.put(`${URL}/${noticia._id}`, { titulo, conteudo })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const remove = (noticia) => {
    return dispatch => {
        axios.delete(`${URL}/${noticia._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'NOTICIA_CLEAR' }, search()]
}