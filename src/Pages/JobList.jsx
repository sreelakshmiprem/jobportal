import React from 'react';
const JobList = () => {
  const jobListings = [
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'XYZ Tech',
      location: 'San Francisco, USA',
      salary: '$70,000 - $90,000 per year',
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'ABC Solutions',
      location: 'London, UK',
      salary: '£50,000 - £70,000 per year',
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      company: 'Marketing Pro',
      location: 'New York City, USA',
      salary: '$60,000 - $80,000 per year',
    },
  ];

  return (
    <div>
      <h2>Job Listings</h2>
      {jobListings.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
