import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center py-28 bg-orange-50'>
            <div className='ml-5'>
                <h1 className='text-6xl font-bold '>Books to freshen up your bookshelf</h1>
                <button className='text-lg font-bold text-white bg-indigo-600 py-2 px-5 rounded mt-7'>View The List</button>
            </div>
            <div className='pr-3'>
                <img className='w-12/12 mx-auto rounded mr-2' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;