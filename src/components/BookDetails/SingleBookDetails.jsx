import React from 'react';

const SingleBookDetails = ({ singleBooks,handleMaekAsRead }) => {
    const {bookId,image,bookName,author,review} = singleBooks;
    return (
        <div>
            <div className="flex justify-between items-center gap-4 bg-base-100 shadow-sm w-[80%] mx-auto border-2 p-4">
                <figure className='w-[50%]'>
                    <img className='h-[60vh] w-full'
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="w-[50%]">
                    <h2 className="card-title">{bookName}</h2>
                    <p>{review}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() =>handleMaekAsRead(bookId)} className="btn btn-primary">Mar as Read</button>
                        <button className="btn bg-yellow-300">Add To WishList</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBookDetails;