import React, { useState, useEffect } from 'react';
import './AccountSettings.css';
import APIprofile from '../../services/APIprofile.service';

const AccountSettings = ({ user,updateProfile }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const token = localStorage.getItem("token_user")
  // Cập nhật state khi nhận được giá trị mới từ props
  useEffect(() => {
    if (user) {
      setFullName(user.fullName || '');
      setPhone(user.phone || '');
      setEmail(user.email || '');
    }
  }, [user]);

  // Hàm xử lý khi thay đổi giá trị các trường nhập liệu
  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tạo đối tượng userData để lưu trữ dữ liệu người dùng
    const userData = {
      fullName,
      phone,
      email,
    };

    try {
      const response = await APIprofile.updateUser(user._id,token,userData);
      console.log('User updated successfully:', response);
      updateProfile(true);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Thông tin cá nhân</h1>

      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Tên của bạn <span>*</span></label>
          <input 
            type='text' 
            name='name' 
            id='name' 
            value={fullName} 
            onChange={handleNameChange} 
            placeholder="Nhập tên của bạn"
          />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Số điện thoại <span>*</span></label>
          <input 
            type='number' 
            name='phone' 
            id='phone' 
            value={phone} 
            onChange={handlePhoneChange} 
            placeholder="Nhập số điện thoại của bạn"
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Địa chỉ email <span>*</span></label>
          <input 
            type='email' 
            name='email' 
            id='email' 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Nhập địa chỉ email của bạn"
          />
        </div>

        <button className='mainbutton1' type='submit'>Lưu thay đổi</button>
      </form>
    </div>
  );
}

export default AccountSettings;