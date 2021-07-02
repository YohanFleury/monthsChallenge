import React, { useState } from 'react'
import MonthDiv from './components/MonthDiv'

import data from './monthData'
import './styles/Month.css'


const MonthGroup = () => {
    const currentMonth = data.find(e => e.isCurrent)
    const [contentTitle, setContentTitle] = useState(currentMonth.contentTitle)
    const [content, setContent] = useState(currentMonth.content)
    
    const handleToggle = (monthName) => {
       currentMonth.isCurrent = false
       
       const nextMonth = data.find(e => e.month.slice(0, 3) === monthName.target.innerHTML )
       nextMonth.isCurrent = true

       handleScroll(monthName.target)
       setContentTitle(nextMonth.contentTitle)
       setContent(nextMonth.content)
    }
    
    const handleScroll = (element) => {
       element.scrollIntoView({
           behavior: "smooth",
           inline: "center", 
           block: "end"
        })
    }

    const listMonths = data.map((month, index) => {
       return (
                <div 
                    className={month.isCurrent ? "dark-month-name" : "month-name"} 
                    key={index} 
                    onClick={(month) => handleToggle(month)} >
                    {month.month.slice(0, 3)} 
                </div>
        )
    })

    return (
            <div>
                <div className="container-display">
                    <div className="container-month-display">
                        <div className="month-display">
                            {listMonths}
                        </div>
                    </div>
                </div>
                <MonthDiv contentTitle={contentTitle} content={content} />
            </div>
    )
}

export default MonthGroup
