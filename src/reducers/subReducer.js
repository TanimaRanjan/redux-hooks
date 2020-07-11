const initialState = {
    appTitle:'TodoList',
    appSubTitle:'Get things done',
    toggle:false,
    todos:[
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
        case 'TOGGLE' : 
            return {
                ...state,
                toggle : !state.toggle
            }
        
        case 'TOGGLE_TODO': 
            
            return {
                ...state, 
                todos : state.todos.map(todo => todo.id === payload ? { ...todo, completed:!todo.completed} : todo)
            }

        case 'ADD_TODO':
            return {...state, 
                todos: state.todos.push(payload), 
            }

        case 'EDIT_TODO': 
            return { ...state , 
                todos : state.todos.map(todo => todo.id === payload.id ? {...todo, title:payload.title} : todo)
            }
        
        case 'DELETE_TODO': 
            return {...state.filter(todo => todo.id !== payload),  
            }
        
        default:
            return {...state }
    }

}

export const toggleSwitch = () => dispatch => {
    dispatch({type:'TOGGLE'})
}