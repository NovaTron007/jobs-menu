import React from 'react'

// destructure
const Button = ({company, index, jobIndex, setJobIndex}) => {
  return (
    <button 
        key={index}
        className={`job-btn ${index === jobIndex && "active-btn"}`}
        onClick={()=>setJobIndex(index)}
    >
        {company}
    </button>
  )
}

export default Button