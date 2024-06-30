import React, { useState } from 'react';
import './ChangePassword.css';
import APIprofile from '../../services/APIprofile.service';

const ChangePassword = ({user,updateProfile}) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const token = localStorage.getItem("token_user")
    const handleOldPasswordChange = (e) => {
        setOldPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Tạo đối tượng chứa dữ liệu mật khẩu
        const passwordData = {
            password:oldPassword,
            newPassword,
        };

        try {
            // Giả sử bạn có một hàm changePassword để gửi dữ liệu đến server
            const response = await APIprofile.changePassword(user._id,token,passwordData);
            console.log('Password changed successfully:', response);
            updateProfile(true)
        } catch (error) {
            console.error('Error changing password:', error);
        }
    };

    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Thay đổi mật khẩu</h1>

            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='oldpass'>Mật khẩu cũ <span>*</span></label>
                    <input 
                        type="password" 
                        name="oldpass" 
                        id="oldpass" 
                        value={oldPassword} 
                        onChange={handleOldPasswordChange} 
                        placeholder="Nhập mật khẩu cũ"
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='newpass'>Mật khẩu mới <span>*</span></label>
                    <input 
                        type="password" 
                        name="newpass" 
                        id="newpass" 
                        value={newPassword} 
                        onChange={handleNewPasswordChange} 
                        placeholder="Nhập mật khẩu mới"
                    />
                </div>

                <button className='mainbutton1' type="submit">Lưu mật khẩu</button>
            </form>
        </div>
    );
}
export default ChangePassword;