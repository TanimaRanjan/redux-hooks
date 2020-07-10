const initialState = {
    toggle:false,
    todo:[
        {   id:1,
            title:'Study',
            completed:false
        },
        {   
            id:2,
            title:'Cover Letter',
            completed:false

        }
    ]
}

export default (state=initialState, action) => {

    const {type, payload} = action
    switch(type) {
        case 'TOGGLE' : {
            return {
                ...state,
                toggle : !state.toggle
            }
        }
        
        default:
            return {...state }
    }

}

export const toggleSwitch = () => dispatch => {
    dispatch({type:'TOGGLE'})
}