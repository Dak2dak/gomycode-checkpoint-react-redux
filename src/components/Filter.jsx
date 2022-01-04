import React from 'react'

const Filter = () => {
    return (
        <div className='filter--box'>
            <select name="tasks">
                <option value="All">All</option>
                <option value="true">Done</option>
                <option value="false">Not yet</option>
            </select>
        </div>
    )
}

export default Filter;
