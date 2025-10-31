import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks,setAllBooks] =useState([]);
    useEffect(() =>{
        fetch("bookData.json")
        .then(res=>res.json())
        .then(data =>setAllBooks(data))
    },[])
    return (
        <div>
            <h2>Hello ami Books</h2>
        </div>
    );
};

export default Books;