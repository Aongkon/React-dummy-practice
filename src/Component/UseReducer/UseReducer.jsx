import React, { useReducer, useState } from 'react';
import {v4 as uuidv4} from "uuid"
import {reducer} from "./Reducer"

const booksData = [
    {id: 1, name: "Jannat Mahmud"},
    {id: 2, name: "Sabrina Kongkon"},
    {id: 3, name: "Kohinur Akter"}
]

const initialState = {
    books: booksData,
    isModal: false,
    modalText: "",
}

const UseReducer = () => {

    // const [books, setBooks] = useState(booksData);
    const [booksName, setBooksName] = useState("");
    // const [isModal, setIsModal] = useState(false);
    // const [modalText, setModalText] = useState("");

    //for useReducer
    
 

    const [bookState, dispatch] = useReducer(reducer, initialState)





    const handleChange = (e) => {
        setBooksName(e.target.value)
    }

 
    const handleSubmit = (e) =>{
        e.preventDefault()
         const newBooksName = {id:uuidv4(), name: booksName}

         dispatch({type:"ADD", payload: newBooksName})


        // setBooks((oldBooksName) => {
        //     const newBooksName = {id:uuidv4(), name: booksName}

        //     return [...oldBooksName, newBooksName]
        // })
        // setIsModal(true)
        // setModalText("jan hum ayengge")
    }

    
    const Modal = ({modalText}) => {
       return <p>{modalText}</p>
    }


    const removeBook = (id) => {
        dispatch({type : "REMOVE", payload: id})
    }

  return (
    <div>
    <h1>Books List</h1>

    <form onSubmit={handleSubmit}>
        <input type="text" value={booksName} onChange={handleChange}></input>
        {bookState.isModal && <Modal modalText={bookState.modalText}/>}
        <br></br>
        <button type="submit">Submit</button>
    </form>
<br/><br/>
    {bookState.books.map((book) => {
        const {id, name} = book;

        return <li key={id}>{name} <button onClick={() => {removeBook(id)}}>remove</button></li>
    })}
    </div>
  );
}

export default UseReducer;



// reducer function ar moddhe always state or action thake  r state always return korbe 
// action hote pate add, remove, delete
//jokhoni kono kicho pass korbo payload er maddhome pass korbo

//onk golo useState jokhon ekshathe use korte hoy tokhon onk gola useState akshathe use na kore sodo useReduce use kora jay