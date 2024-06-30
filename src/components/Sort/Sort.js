import React from 'react';
import './Sort.css';
import { useSort } from '../../context/SortContext';


const Sort = () => {
  const { selectedDisplay, selectedSort, handleChangeDisplay, handleChangeSort } = useSort();
  
  return (
    <div className='sort-group'>
        <div className='sort-option'>
            <label htmlFor="display">Hiển thị</label>
            <select onChange={handleChangeDisplay} className="w-auto" name="display" id="display" value={selectedDisplay}>
                <option value="12"> Mặc định</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="48">48</option>
                <option value="60">60</option>
            </select>
        </div>
        <div className='sort-option'>
            <label htmlFor="sort">Sắp xếp</label>
            <select onChange={handleChangeSort} className="w-auto" name="sort" id="sort" value={selectedSort}>
              <option value="default">Mặc định</option>
              <option value="name-az">Sắp xếp theo tên (A{"->"}Z)</option>
              <option value="name-za">Sắp xếp theo tên (Z{"->"}A)</option>
              <option value="price-low-high">Sắp xếp theo giá nhỏ đến lớn (Nhỏ{"->"}Lớn)</option>
              <option value="price-high-low">Sắp xếp theo giá lớn đến nhỏ (Lớn{"->"}Nhỏ)</option>
              <option value="promotion-yes">Sắp xếp theo khuyến mãi (Có)</option>
              <option value="promotion-no">Sắp xếp theo khuyến mãi (Không)</option>
            </select>
        </div>
    </div>
  );
};

export default Sort;
