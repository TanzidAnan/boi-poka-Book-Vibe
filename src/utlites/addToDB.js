const getStoredBook =() =>{
    const storedBookST =localStorage.getItem('readList');
    if(storedBookST){
        const storeBooksData =JSON.parse(storedBookST)
        return storeBooksData;
    }
    else{
        return [];
    }

}

const addToStoreBD =(id) =>{
    const storedBookData =getStoredBook();


    if(storedBookData.includes(id)){
        alert('already exited')
    }
    else{
        storedBookData.push(id)
        const data =JSON.stringify(storedBookData)
        localStorage.setItem('readList',data)
    }
}

export {addToStoreBD,getStoredBook}
