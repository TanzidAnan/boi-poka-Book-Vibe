import React from 'react';

const ReadListTable = ({b}) => {
    const {bookName,image,totalPages,rating} =b
    console.log(b)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table my-3">
                    <tbody>
                        {/* row 1 */}
                        <tr className='bg-amber-100 flex justify-between items-center w-full'>
                            <td className='w-[33%]'>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask  h-28 w-16">
                                            <img
                                                src={image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{bookName}</div>
                                        <div className="text-sm opacity-50">{totalPages}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='w-[33%]'>
                                <p className='text-center'>{rating}</p>
                            </td>
                            <td className='w-[33%]'>
                                <th className='flex gap-6 justify-end'>
                                <button className="btn btn-ghost bg-amber-700 text-white">details</button>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReadListTable;