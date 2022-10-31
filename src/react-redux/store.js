import {createStore} from 'redux';


// 定义常量
export const ADD = "ADD";
export const MINUS = "MINUS";

function reducer(state={count: 0}, action) {
    console.log('reducer -- action', action , state);

    switch (action.type){
        case 'ADD':
            return  {count: state.count + 1};
            break;
        case 'MINUS':
            return {count: state.count - 1};
            break;
        default:
            return state;

    }
}

const store = createStore(reducer);
export default store;

