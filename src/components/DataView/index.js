import React from "react";

import './style.css'

import prepareDate from "../../utils/prepareDate";

const DataView = props => {
    let {day, month} = prepareDate(props.date)

    if(day < 10) day = '0' + day;
    if(month < 10) month = '0' + month;

    return (
        <div className="dataView">
            <span className="day"> {day} </span> / {" "}
            <span className="month"> {month} </span>
        </div>
    )
}

export default DataView;