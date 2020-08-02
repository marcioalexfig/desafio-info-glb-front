const INITIAL_STATE = { titulo: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TITULO_CHANGED':
            return { ...state, titulo: action.payload }
        case 'CONTEUDO_CHANGED':
            return { ...state, conteudo: action.payload }
        case 'NOTICIA_OPENED':
            return { ...state, _id: action.payload._id, titulo: action.payload.titulo, conteudo: action.payload.conteudo, datapublicacao: action.payload.datapublicacao }
        case 'NOTICIA_SEARCHED':
            return { ...state, list: action.payload }
        case 'NOTICIA_CLEAR':
            return { ...state, titulo: '', conteudo: '' }
        default:
            return state
    }
}