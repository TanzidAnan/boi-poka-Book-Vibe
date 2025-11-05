import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utlites/addToDB';
import ReadListTable from '../../components/ReadListTable/ReadListTable';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const data = useLoaderData();
    console.log(data)

    useEffect(() => {

        const storedBookData = getStoredBook();
        console.log(storedBookData)
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        console.log(myReadList)
        setReadList(myReadList)
    }, [])

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-center text-3xl font-bold text-blue-900'>Book i read :{readList.length}</h2>
                    <div className=''>
                        {
                            readList.map(b =><ReadListTable key={b.bookId} b={b}></ReadListTable>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;