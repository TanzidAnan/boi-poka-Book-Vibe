import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center py-28 bg-orange-50'>
            <div className='ml-5'>
                <h1 className='text-6xl font-bold '>Books to freshen up your bookshelf</h1>
                <button className='text-2xl font-bold bg-indigo-600 py-2 px-5 rounded mt-4'>View The List</button>
            </div>
            <div>
                <img className='w-12/12 mx-auto rounded mr-2' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;