import React from 'react'

function Table(props) {
  return (
    <tbody>
        {props.entries.map((entry)=>{
            return <tr id={entry.id}>
                <td>{entry.date}</td>
                <td>{entry.entry}</td>
                <td class="d-flex justify-content-end"><button class="btnRemove btn btn-danger" onClick={props.handleRemove} id={entry.id}><i class="bi bi-trash"></i> Remove</button></td>
            </tr>
        })
    }
    <button onClick={props.handleDelete} class="d-flex justify-content-end align-items-end"> Delete All</button>
    </tbody>
)

}

export default Table