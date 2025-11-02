import React from 'react';

const SingleBookDetails = ({ singleBooks }) => {
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
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBookDetails;