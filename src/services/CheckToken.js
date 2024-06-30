import { jwtDecode } from 'jwt-decode';

function isTokenExpired(token) {
    if (!token) return true;
    const decodedToken = jwtDecode(token);
    console.log("🚀 ~ isTokenExpired ~ decodedToken:", decodedToken)
    const currentTime = Date.now() / 1000; // Tính thời gian hiện tại bằng giây
    console.log("🚀 ~ isTokenExpired ~ currentTime:", currentTime)
    return decodedToken.exp < currentTime;
}

function monitorToken() {
    const accessToken = localStorage.getItem('token_user');

    if (isTokenExpired(accessToken)) {
        localStorage.removeItem("token_user");
        alert('Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.');
        window.location.href = '/login'; // Điều hướng đến trang đăng nhập
    }
}

function startTokenMonitoring() {
    // Kiểm tra token mỗi phút
    const interval = setInterval(monitorToken, 3600000);

    // Kiểm tra ngay khi bắt đầu giám sát
    monitorToken();

    // Trả về hàm để dừng giám sát khi cần thiết
    return () => clearInterval(interval);
}

export default startTokenMonitoring;
