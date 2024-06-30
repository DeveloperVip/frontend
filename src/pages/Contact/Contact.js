import React, { useState } from 'react';
import PathDirect from "../../components/PathDirect/PathDirect";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Đoạn mã xử lý việc gửi thông tin liên hệ sẽ được thêm sau
    console.log(formData);
    // Reset form sau khi gửi
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='h-auto'>
      <PathDirect name="liên hệ"/>
      <div className="container h-auto d-flex gap-5">
      
      <div className='mt-5'>
        <p style={{color:"green"}}>Thắc mắc xin liên hệ</p>
      <h1>Gửi liên hệ</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nhập họ và tên của bạn"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Nhập email của bạn"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Thông điệp</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Nhập thông điệp của bạn"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className='text-center mt-5'><button type="submit" className="btn btn-primary w-auto">Gửi</button></div>
      </form>

      </div>
      <div className="mt-5" style={{width:"40%"}}>
        <h3>Thông tin liên hệ:</h3>
        <p><strong>Số hotline:</strong> 0123 456 789</p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/example">facebook.com/example</a></p>
        <p><strong>Email:</strong> example@example.com</p>
        <p><strong>Địa chỉ:</strong> 123 Đường ABC, Thành phố XYZ</p>
        <iframe
          title="Google Map"
          className="mt-3"
          width="100%"
          height="300"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d106.688028!3d10.762936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d8eb5f287b%3A0x5c60be7bca0328a8!2sExample%20Address!5e0!3m2!1sen!2suk!4v1607512345678!5m2!1sen!2suk"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
