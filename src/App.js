
import React, { useState, useEffect } from "react"
import { FaAngleDoubleRight } from "react-icons/fa"

const url = "https://course-api.com/react-tabs-project"

function App() {
  // state
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [jobIndex, setJobIndex] = useState(0)

  // fetch jobs 
  const fetchJobs = async() => {
    const response = await fetch(url)
    const jobs = await response.json() // get json part ffrom response
    setJobs(jobs)
    setLoading(false)
  }

  // run on render
  useEffect(() => {
    fetchJobs()
  },[])


  // conditionally return
  if(loading) {
    return (
      <section className="loading">
      <h1>Loading...</h1></section>
    )
  }

  // after loading destructure current job
  const { company, dates, duties, title } = jobs[jobIndex]


  return (
    <div className="section">
      <div className="title">
        <h2>Available Jobs</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container add active class when index is same as jobIndex */}
        <div className="btn-container">
          {jobs.map((item, index) => {
              return (
                <button 
                  key={index}
                  className={`job-btn ${index === jobIndex && "active-btn"}`}
                  onClick={()=>setJobIndex(index)}
                >
                {item.company}
              </button>
              )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((item, index) => {
            return(
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
    </div>
  );
}

export default App;
