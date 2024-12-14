
export const reducer = (state, action) => {
    //akhane amra doyta jinis pacchi ekta action.type r action.payload

    if(action.type === "ADD"){
        const allBooks = [...state.books, action.payload]
        return {...state, books: allBooks, isModal:true, modalText: "Book is added"}
    }
    if(action.type === "REMOVE"){
        const filteredBooks = [...state.books].filter(book => book.id !== action.payload) 
        return{...state, books: filteredBooks, isModal: true, modalText: "Books is removed"}
    }



    return state;
}