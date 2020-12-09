export function manageFriends(state = {friends: []}, action){
    switch (action.type) {

        case "ADD_FRIEND":
            return ({...state, friends: [...state.friends, action.friend]})
                
        case "REMOVE_FRIEND":
            // find the state id: key's value, that matches the action.id's value. 
            // save the full state obj that contains the id to a variable 
            let removeThisIndex = state.friends.findIndex( friend => friend.id === action.id)
            return ({...state, friends: [...state.friends.slice(0, removeThisIndex), ...state.friends.slice(removeThisIndex + 1)]})
            // add into state-- whats BEFORE and whats AFTER the obj we wanted removed
            // aka never really REMOVE the obj...just dont include/invite it to the next state
        default: 
            return state;
    }
}



// When adding a friend, the action will include a friend key 
// assigned to an object with name, hometown, and id keys.

//     ```js
//       action = {
//         type: "ADD_FRIEND",
//         friend: {
//           name: "Chrome Boi"
//           homewtown: "NYC",
//           id: 1
//         }
//       }
//     ```