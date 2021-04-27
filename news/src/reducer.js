export default function reducer(state,action){
   
    switch(action.type){
        case 'entertainment':
            return 'entertainment'
        case 'sports':
            return 'sports'
        case 'health':
            return 'health'
        case 'science':
            return 'science'
        case 'technology':
            return 'technology'
        case 'business':
            return 'business'
        case 'general':{
            return 'general'
        }
        default :
        return state
    }
}