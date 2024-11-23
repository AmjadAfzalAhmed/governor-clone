'use client';

import { useState } from 'react';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropDown = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  
  const toggleCourses = () => setIsVisible(!isVisible);

  return (
    <div className="max-w-md mx-auto mt-10">
  
      <button
        onClick={toggleCourses}        
      >
        <h1 className='absolute mt-0'>Courses</h1>
        <span className={`${isVisible ? 'rotate-180' : ''} transition-transform`}>
        <FontAwesomeIcon
              icon={faChevronDown}
              className="relative w-3 h-3 ml-2 cursor-pointer"              
            />
        </span>
      </button>
      
      {isVisible && (
        <div className="bg-white shadow-lg p-4 rounded-lg mt-2">
          
          <div className="mb-4">
            <h2 className="font-bold mb-2">Core Courses</h2>
            <ul>
              <li className="mb-2">Programming Fundamentals</li>
              <li className="mb-2">Web2 Using NextJS</li>
              <li className="mb-2">Earn as You Learn</li>
            </ul>
          </div>

          <hr className="my-2" />

          
          <div>
            <h2 className="font-bold mb-2">Advanced Courses</h2>
            <ul>
              <li className="mb-2">Web3 Metaverse</li>
              <li className="mb-2">Cloud-Native Computing</li>
              <li className="mb-2">Artificial Intelligence and Deep Learning</li>
              <li className="mb-2">Ambient Computing and IoT</li>
              <li className="mb-2">Genomics and Bioinformatics</li>
              <li className="mb-2">Network Programability and Automation</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
