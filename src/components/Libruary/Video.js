import React, { useState } from 'react';

const Video = () => {
	// const token = localStorage.token;

	// const [book, setBook] = useState([]);
	// const [data, setData] = useState([]);

	// ReadBooks();
	// ToReadBooks();

	// async function ReadBooks() {
	// 	await fetch('http://127.0.0.1:5000/api/v1/getreadbooks', {
	// 		headers: new Headers({
	// 			Authorization: `Bearer ${token}`,
	// 		}),
	// 	})
	// 		.then((response) => response.json())
	// 		.then((book) => {
	// 			setBook(book.book);
	// 		})
	// 		.catch((err) => console.log(err));

	// 	document.getElementById('tableone');
	// }

	// async function ToReadBooks() {
	// 	await fetch('http://127.0.0.1:5000/api/v1/gettoreadbooks', {
	// 		headers: new Headers({
	// 			Authorization: `Bearer ${token}`,
	// 		}),
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setData(data.data);
	// 		})
	// 		.catch((err) => console.log(err));

	// 	document.getElementById('tabletwo');
	// }
	const videoList = [
		{ id: 1, url: 'https://example.com/video1.mp4' },
		{ id: 2, url: 'https://example.com/video2.mp4' },
		// Thêm các phần tử khác nếu cần
	  ];
	
	  return (
		<div className="container h-auto mt-5">
		  <h3>Thư viện Video</h3>
		  <div className="row">
			{videoList.map(video => (
			  <div key={video.id} className="col-md-4">
				<div className="card">
				  <video controls className="card-img-top img-fluid">
					<source src={video.url} type="video/mp4" />
					Your browser does not support the video tag.
				  </video>
				</div>
			  </div>
			))}
		  </div>
		</div>
	  );
};

export default Video;