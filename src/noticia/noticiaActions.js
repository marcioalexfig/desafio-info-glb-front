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

export const open = (noticia) => {
    return (dispatch, getState) => {
        const request = axios.get(`${URL}/${noticia._id}`)
        .then(resp => dispatch({type: 'NOTICIA_OPENED', payload: resp.data}))
    }
}

export const add = (titulo, conteudo) => {
    return dispatch => {
        axios.post(URL, { titulo, conteudo } )
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
            
    }
}

export const change = (noticia) => {
    console.log("ENVIADO", noticia)
    const id = noticia._id
    return dispatch => {
        axios.put(`${URL}/${id}`, noticia )
        .then(resp => {
            console.log("RETORNADO", resp)
            dispatch({type: 'NOTICIA_OPENED', payload: resp.data})
        })
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