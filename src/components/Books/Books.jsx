import React, { Suspense, useEffect, useState } from 'react';
import Book from '../../pages/Books/Book';

const Books = ({ data }) => {
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() =>{
    //     fetch("bookData.json")
    //     .then(res=>res.json())
    //     .then(data =>setAllBooks(data))
    // },[])

    // const bookPromise = fetch('/bookData.json').then(res => res.json())

    return (
        <div>
            <h2 className='text-4xl text-center p-6 font-bold'>All Books :{data.length}</h2>
            <Suspense fallback={<span>Loading.........</span>}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 '>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;