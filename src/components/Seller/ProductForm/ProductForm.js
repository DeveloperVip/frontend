import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ onSubmit }) => {
  const [productImg, setProductImg] = useState('');
  const [describe,setDescribe]=useState('');
  const [productId,setProductId] = useState("")
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [category, setCategory] = useState('');
  const [categoryDetail,setCategoryDetail] = useState('');
  const [name,setName] = useState([]);

  const handleProductImgChange = (e) => {
    setProductImg(e.target.value);
  };

  const handleDescribeChange=(e)=>{
    setDescribe(e.target.value)
  }
  const handleProductIdChange=(e)=>{
    setProductId(e.target.value);
  }
  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    handleCategory(e.target.value)
    setCategory(e.target.value);
  };

  const handleCategoryDetailChange = (e)=>{
    setCategoryDetail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productName,productImg , productPrice, category,categoryDetail,productId,describe });
    setProductImg('');
    setProductName('');
    setProductPrice('');
    setCategoryDetail('');
    setProductId('');
    setName('');
    setCategory('');
    setDescribe('')
  };

  const handleCategory=(category)=>{
    switch (category) {
      case "doDienTu": setName(
        [
          "Điện thoại",
          "Máy tính",
          "Tablet",
          "Phụ kiện công nghệ",
          "Máy giặt",
          "Tủ lạnh",
        ],
      )
        
        break;
        case "noiThat": setName(
          ["Ghế", "Sofa", "Bàn", "Giường", "Khác"],
        )
          
          break;
          case "thoiTrang": setName(
            ["Đầm/váy", "Dép và Guốc", "Quần", "Áo", "Balo", "Giày"],
          )
            
            break;
    
      default:setName(
        [
          "Máy chiếu",
          "Tivi",
          "Quạt",
          "Gia dụng",
          "Bàn ủi",
          "Máy quay phim",
          "Máy ảnh",
          "Công cụ",
          "Máy in",
        ],
      )
        break;
    }
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="form-label">
        Tên sản phẩm:
        <input type="text" className="form-input" value={productName} onChange={handleProductNameChange} />
      </label>
      <br />
      <label className="form-label">
        Ảnh sản phẩm:
        <input type="text" className="form-input" value={productImg} onChange={handleProductImgChange} />
      </label>
      <br />
      <label className="form-label">
        Gía sản phẩm:
        <input type="number" className="form-input" value={productPrice} onChange={handleProductPriceChange} />
      </label>
      <br />
      <label className="form-label">
        Danh mục sản phẩm:
        <select className="form-select" value={category} onChange={handleCategoryChange}>
          <option value="">Lựa chọn </option>
          <option value="doDienTu">Đồ điện tử</option>
          <option value="noiThat">Nội thất</option>
          <option value="thoiTrang">Thời trang</option>
          <option value="thietBiKhac">Thiết bị khác</option>
        </select>
      </label>
      <br />
      <label className="form-label">
        Thiết bị:
        <select className="form-select" value={categoryDetail} onChange={handleCategoryDetailChange}>
          {name.map((item)=>{return (
            <option value={item}>{item}</option>
          )})}
        </select>
      </label>
      <br />
      <label className="form-label">
        Khuyến mại sản phẩm:
        <input type="text" className="form-input" value={productId} onChange={handleProductIdChange} />
      </label>
      <br />
      <label className="form-label">
        Mô tả sản phẩm:
        <input type="text" className="form-input" value={describe} onChange={handleDescribeChange} />
      </label>
      <br />
      <button className="form-button m-auto" type="submit">Thêm sản phẩm</button>
    </form>
  );
};

export default ProductForm;