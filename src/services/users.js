import { http } from './config'

export default {

    listar: () => {
        return http.get('user')
    },
    salvar: (usuario) =>{
        return http.post('user', usuario)
    },
    atualizar: (usuario)=>{
        return http.put('user', usuario)
    }
}