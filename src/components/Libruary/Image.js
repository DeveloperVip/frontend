import React from 'react';

const Image = () => {
  // Giả sử danh sách các ảnh
  const imageList = [
    { id: 1, url: 'https://example.com/image1.jpg' },
    { id: 2, url: 'https://example.com/image2.jpg' },
    // Thêm các phần tử khác nếu cần
  ];

  return (
    <div className="container h-auto mt-5" >
      <h3>Thư viện Ảnh</h3>
      <div className="row">
        {imageList.map(image => (
          <div key={image.id} className="col-md-4">
            <div className="card">
              <img src={image.url} alt={`Image ${image.id}`} className="card-img-top img-fluid" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
