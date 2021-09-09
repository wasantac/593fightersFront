// constantes
import axios from 'axios';
const dataInicial = {
    isSession : false
}

const SESSION_EXITO = 'SESSION_EXITO'
const SESSION_FAIL = 'SESSION_FAIL'

// reducer
export default function sessionReducer(state = dataInicial.isSession,action){
    switch(action.type){
        case SESSION_EXITO:{
            return {...state, isSession: action.payload}
        }case SESSION_FAIL:{
            return {...state, isSession: action.payload}
        }default:{
            return state
        }
    }
}
//acciones
export const obtenerSessionAccion = () => async (dispatch,getState) => {
    await axios.get('/login',{withCredentials:true}).then(res =>{
        if(res.data.data){
            dispatch({
                type: SESSION_EXITO,
                payload: res.data.data
            })
        }
        else{
            dispatch({
                type: SESSION_FAIL,
                payload : res.data.data
            })
        }

    }).catch((err) =>{
        console.log(err)
    })
}
