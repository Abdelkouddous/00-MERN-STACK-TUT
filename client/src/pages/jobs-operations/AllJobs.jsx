import React, { useState } from "react";
import {
  FaLocationArrow,
  FaCalendarAlt,
  FaBriefcase,
  FaSearch,
} from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import {
  JobCardWrapper,
  SearchFormWrapper,
  PageWrapper,
} from "../../assets/wrappers/AllJobsWrapper";

const JobCard = ({ job }) => {
  return (
    <JobCardWrapper>
      <article className="job-card">
        <header>
          <div className="main-icon">{job.company.charAt(0)}</div>
          <div className="info">
            <h5>{job.position}</h5>
            <p>{job.company}</p>
          </div>
        </header>
        <div className="content">
          <div className="content-center">
            <div className="job-info">
              <span className="job-icon">
                <FaLocationArrow />
              </span>
              <span>{job.location}</span>
            </div>
            <div className="job-info">
              <span className="job-icon">
                <FaCalendarAlt />
              </span>
              <span>{job.date}</span>
            </div>
            <div className="job-info">
              <span className="job-icon">
                <FaBriefcase />
              </span>
              <span>{job.type}</span>
            </div>
            <div className="job-info">
              <span className="job-icon">
                <GiMedicines />
              </span>
              <span>{job.specialization}</span>
            </div>
            <div className="status-container">
              <span className={`status ${job.status}`}>{job.status}</span>
            </div>
          </div>
          <footer className="actions">
            <button className="btn edit-btn">Edit</button>
            <button className="btn delete-btn">Delete</button>
          </footer>
        </div>
      </article>
    </JobCardWrapper>
  );
};

const SearchForm = ({ handleSearch }) => {
  return (
    <SearchFormWrapper>
      <div className="search-container">
        <form className="form">
          <div className="form-center">
            <div className="form-row">
              <label htmlFor="search" className="form-label">
                Search
              </label>
              <input
                type="text"
                id="search"
                className="form-input"
                placeholder="Search by position, hospital, or location"
              />
            </div>

            <div className="form-row">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select name="status" id="status" className="form-select">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="interview">Interview</option>
                <option value="assessment">Assessment</option>
                <option value="offered">Offered</option>
                <option value="declined">Declined</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="specialization" className="form-label">
                Specialization
              </label>
              <select
                name="specialization"
                id="specialization"
                className="form-select"
              >
                <option value="all">All</option>
                <option value="general">General</option>
                <option value="cardiology">Cardiology</option>
                <option value="emergency">Emergency</option>
                <option value="family medicine">Family Medicine</option>
                <option value="pediatrics">Pediatrics</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <select name="type" id="type" className="form-select">
                <option value="all">All</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="locum">Locum</option>
                <option value="remote">Remote</option>
              </select>
            </div>

            <button className="btn btn-block">
              <FaSearch /> Search
            </button>
          </div>
        </form>
      </div>
    </SearchFormWrapper>
  );
};

const AllJobs = () => {
  // Sample data for demonstration
  const [jobs, setJobs] = useState([
    {
      id: 1,
      position: "Resident Physician",
      company: "Memorial Hospital",
      location: "Boston, MA",
      date: "2023-10-15",
      type: "full-time",
      specialization: "cardiology",
      status: "interview",
    },
    {
      id: 2,
      position: "Locum Pediatrician",
      company: "Children's Medical Center",
      location: "Chicago, IL",
      date: "2023-09-28",
      type: "locum",
      specialization: "pediatrics",
      status: "pending",
    },
    {
      id: 3,
      position: "Emergency Physician",
      company: "City General Hospital",
      location: "New York, NY",
      date: "2023-10-05",
      type: "part-time",
      specialization: "emergency",
      status: "assessment",
    },
  ]);

  return (
    <PageWrapper>
      <h4 className="page-title">Medical Job Applications</h4>
      <SearchForm />

      <div className="jobs-container">
        {jobs.length === 0 ? (
          <div className="no-jobs">
            <h5>No applications found</h5>
          </div>
        ) : (
          <>
            <h5 className="jobs-count">
              {jobs.length} application{jobs.length > 1 ? "s" : ""} found
            </h5>
            <div className="jobs">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default AllJobs;
