import React from 'react'
import Image from '../../components/Libruary/Image'
import Video from '../../components/Libruary/Video'
import PathDirect from '../../components/PathDirect/PathDirect'
import { useParams } from 'react-router-dom'

const Library = () => {
  const { param } = useParams();

  // Kiểm tra giá trị của param
  console.log(param);

  return (
    <div className='h-auto'>
      {/* Hiển thị PathDirect và tiêu đề */}
      <PathDirect name="Thư viện" />
      <h1>Thư viện</h1>
      
      {/* Hiển thị Image hoặc Video tùy thuộc vào giá trị của param */}
      {param === undefined && (
        <div>
          <Image />
          <Video />
        </div>
      )}

      {param === "image" && <Image />}
      {param === "video" && <Video />}
    </div>
  );
}

export default Library;
