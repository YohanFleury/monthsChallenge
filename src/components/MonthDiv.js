import React from 'react'

import '../styles/Month.css'

const MonthDiv = ({ contentTitle, content }) => {
    return (
        <div className="head-container">
            <div className="container">
                <div className="month-container">
                    <h4 className="content-title"> {contentTitle} </h4>
                    <p className="content"> {content} </p>    
                </div>
            </div>
        </div>
    )
}

export default MonthDiv
