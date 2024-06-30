import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({amountPage,setPage}) => {
  const totalPages = amountPage; // Tổng số trang
  const [currentPage, setCurrentPage] = useState(1);

  // Hàm xử lý khi click vào trang
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {setCurrentPage(page); setPage(page -1)};
  };

  // Tạo mảng các số trang
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <>
      <nav className="pagination" aria-label="Page navigation example" style={{width:"100%"}}>
        <ul className="pagination" style={{width:"auto"}}>
          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              aria-label="Previous"
              onClick={() => handleClick(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <span aria-hidden="true">«</span>
            </Link>
          </li>
          {pages.map((page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <Link
                className="page-link"
                to="#"
                onClick={() => handleClick(page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              aria-label="Next"
              onClick={() => handleClick(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span aria-hidden="true">»</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
