const cart =[]
const handelCart = (state=cart , action)=>{
    switch (action.type) {
        case "ADDITEM":
                return[
                    ...state,
                    action.payload,
                     
                ]
            break;
        case "DELITEM":
           return state = state.filter(item =>{ return item.id !== action.payload.id})
            break;
        default:
            return state;
            break;
    }

}

export default handelCart