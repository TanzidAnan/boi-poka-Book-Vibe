// import React, { use } from 'react';
import { FaStar } from "react-icons/fa6";

const Book = ({ singleBook }) => {
    // const data =use(bookPromise);
    console.log(singleBook);
    const {image,totalPages,author,bookName,rating,category} =singleBook
    return (
        <div>
            <div className="card  w-96 bg-emerald-50 shadow-sm p-2.5">
                <figure className="p-3 bg-amber-50 rounded-lg">
                    <img className="h-[30vh] w-[60%] lg:w-[40%] rounded"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStar /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;


