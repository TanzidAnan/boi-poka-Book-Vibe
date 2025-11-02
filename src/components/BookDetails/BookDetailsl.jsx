import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetailsl = () => {

    const {id} = useParams();
    const bookId =parseInt(id)
    const data = useLoaderData();
    console.log(data)

    const singleBooks = data.find(book => book.bookId === bookId)
    console.log(singleBooks)


    return (
        <div>
            <h1>Book datils</h1>
        </div>
    );
};

export default BookDetailsl;