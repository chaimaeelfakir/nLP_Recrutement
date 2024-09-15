import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineUpload } from 'react-icons/ai'; // Ensure you have this icon package installed

const CVUpload = () => {
  const [file, setFile] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please upload a PDF file.');
      return;
    }

    if (file.type !== 'application/pdf') {
      setError('Only PDF files are accepted.');
      return;
    }

    const formData = new FormData();
    formData.append('cv', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.jobs) {
        console.log('Recommended jobs:', response.data.jobs);
        setJobs(response.data.jobs); // Set recommended jobs
        setError(null); // Clear error
      } else {
        setError('No jobs found in the response.');
      }
    } catch (err) {
      console.error(err);
      setError(err.response ? err.response.data.error : 'An error occurred while uploading the file.');
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      {/* File Upload Button */}
      <label 
        htmlFor="file-upload" 
        className="flex justify-center items-center w-[300px] py-3 px-5 bg-blueColor text-white font-semibold text-[14px] rounded-[10px] shadow-lg hover:bg-darkBlue transition-colors cursor-pointer mb-4"
      >
        <input 
          id="file-upload" 
          type="file" 
          className="hidden" 
          onChange={handleFileChange}
          accept=".pdf" // Only accept PDF files
        />
        <span className="flex items-center gap-2">
          <AiOutlineUpload /> {/* File upload icon */}
          Upload File
        </span>
      </label>

      {/* Process Button */}
      <button 
        className="w-[300px] py-3 px-5 bg-greenColor text-black font-semibold text-[14px] rounded-[10px] shadow-lg hover:bg-darkGreen transition-colors"
        onClick={handleSubmit}
      >
        Process
      </button>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-2 text-center">{error}</p>} {/* Style error message */}

      {/* Recommended Jobs */}
      {jobs.length > 0 && (
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
          <h2 className="w-full text-center text-[20px] font-bold text-textColor mb-10">
            Recommended Jobs
          </h2>
          {jobs.map((job, index) => (
            <div 
              key={index}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <h1 className="text-[16px] font-semibold text-textColor">
                {job.Title}
              </h1>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {job.Description}
              </p>
              <p className="text-[14px] text-textColor mt-[10px]">
                <strong>Skills:</strong> {job.Skills.join(', ')}
              </p>
              <p className="text-[14px] text-textColor mt-[10px]">
                <strong>Entreprise:</strong> {job.Entreprise}
              </p>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white mt-[20px]">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CVUpload;
