import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleBookDetails from './SingleBookDetails';
import { addToStoreBD } from '../../utlites/addToDB';

const BookDetailsl = () => {

    const {id} = useParams();
    const bookId =parseInt(id)
    const data = useLoaderData();
    // console.log(data)

    const singleBooks = data.find(book => book.bookId === bookId)
    // console.log(singleBooks)

    const handleMaekAsRead =(id) =>{
        console.log(id)
        addToStoreBD(id)
    }

    

    return (
        <div>
            <SingleBookDetails singleBooks={singleBooks} handleMaekAsRead={handleMaekAsRead}></SingleBookDetails>
        </div>
    );
};

export default BookDetailsl;