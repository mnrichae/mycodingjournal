import React, { useEffect, useRef, useState } from 'react'
import Table from './Table.js'

const retrieveEntries = localStorage.getItem('entryList') ? JSON.parse(localStorage.getItem('entryList')) : [];
function Tasks() {

    //references
    const dateRef = useRef(null);
    const entryRef = useRef(null);
    const [id, setId] = useState(Date.now());
    const [allEntries, setAllEntries] = useState(retrieveEntries);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: id,
            date: dateRef.current.value,
            entry: entryRef.current.value
        }
        setAllEntries([...allEntries,data]);
        setId(Date.now());
        dateRef.current.value = "";
        entryRef.current.value = "";
    }

    useEffect(() => {
        localStorage.setItem('Entry List', JSON.stringify(allEntries));
    },[allEntries])

    const handleDelete = () => {
        setAllEntries([]);
    }

    const handleRemove = (e) => {
        let numId = parseInt(e.target.id);
        let newEntries = [...allEntries].filter(entry => {return entry.id !== numId});
        setAllEntries(newEntries)
    }

    //striking option
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    // const handleRemove = (e) => {
    //     if (e.target.closest('tr').style.textDecoration){
    //         e.target.closest('tr').style.removeProperty('text-decoration','none');
    //     } else {
    //         e.target.closest('tr').style.setProperty('text-decoration', 'line-through');
    //     }
    // } 

    return (
        <div>
            <form onSubmit={(e) => {handleSubmit(e)}} class="d-grid mt-3 p-3 justify-content-center align-items center">
                <div class="row">
                    <h4><label for="entry" class="labelEntry">
                        Task
                    </label></h4>
                </div>
                <input type="date" class="date p-2" ref={dateRef}/>
                <textarea id="entry" name="entry" rows="4" cols="50" ref={entryRef} class="p-3 mt-2" placeholder="What's on your mind?"/><br />
                <button type="submit" value="Save" class="btn btnSave btn-primary">Save</button>
            </form>
            <br />
            <div class="row mx-5">
                <h4 class="text-center">Tasks</h4>
                <table class="table table-primary table-striped table-hover">
                    <thead>
                        <th>Date</th>
                        <th>Entry</th>
                    </thead>
                    <Table entries={allEntries} handleDelete={handleDelete} handleRemove={handleRemove}/>
                </table>
            </div>
        </div>
  )
}

export default Tasks