import React from 'react';
import "./Tag.css";
import { Link } from 'react-router-dom';

const Tag = () => {
  const initial = ["nội thất", "ngoại thất", "thời trang", "đồ điện tử", "đồ công nghệ", "hi-tech"];
  
  return (
    <div className='tag'>
      <h4>tag</h4>
      <div className='d-flex flex-wrap'>
        {initial.map((item, index) => (
          <Link to="" key={index} className='w-auto p-2 border border-1 bg-body-secondary m-2 text-decoration-none text-dark link-hover'>
            <span>{item}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tag;
