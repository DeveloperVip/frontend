import React, { useState } from "react";
import "./YourOrders.css";
import { useRecoilState } from "recoil";
import { orderSuccessfulProvider } from "../../Providers/OrderSuccessfulProvider";
import OrderSuccessful from "../Order/OrderSuccessful";

const YourOrders = (order) => {
  console.log(order?.order);
  // const data = [
  //     {
  //         id: 112345,
  //         date: '12/12/2021',
  //         status: 'Delivered',
  //         total: 1000
  //     },
  //     {
  //         id: 112346,
  //         date: '12/12/2021',
  //         status: 'On the way',
  //         total: 1600
  //     },
  //     {
  //         id: 112347,
  //         date: '12/12/2021',
  //         status: 'Delivered',
  //         total: 2000
  //     },
  //     {
  //         id: 112348,
  //         date: '12/12/2021',
  //         status: 'Cancelled',
  //         total: 100
  //     },
  //     {
  //         id: 112345,
  //         date: '12/12/2021',
  //         status: 'Delivered',
  //         total: 1000
  //     },
  //     {
  //         id: 112346,
  //         date: '12/12/2021',
  //         status: 'On the way',
  //         total: 1600
  //     },
  //     {
  //         id: 112347,
  //         date: '12/12/2021',
  //         status: 'Delivered',
  //         total: 2000
  //     },
  //     {
  //         id: 112348,
  //         date: '12/12/2021',
  //         status: 'Cancelled',
  //         total: 100
  //     }
  // ]
  const [selectedorderid, setselectedorderid] = useState({});
  const [ordersuccesscont, setordersuccesscont] = useRecoilState(
    orderSuccessfulProvider
  );
  const handleClick = (id) => {
    const viewCart = order.order.filter((item) => item._id === id);
    setselectedorderid(viewCart);
    setordersuccesscont(true);
  };
  return (
    <div className="yourorders">
      <h1 className="mainhead1">Đơn hàng của bạn</h1>
      {ordersuccesscont && <OrderSuccessful orderid={selectedorderid} />}
      <table className="yourorderstable">
        <thead>
          <tr>
            <th scope="col">Mã sản phẩm</th>
            <th scope="col">Ngày</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Tổng</th>
            <th scope="col">Hóa đơn</th>
          </tr>
        </thead>

        <tbody>
          {order
            ? order?.order?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td data-label="OrderID">{item._id}</td>
                    <td data-label="OrderDate">{item.deliveryDate}</td>
                    <td data-label="Delivery Status">
                      <div>
                        {item.status === "completed" && (
                          <span className="greendot"></span>
                        )}
                        {item.status === "onTheWay" && (
                          <span className="yellowdot"></span>
                        )}
                        {item.status === "cancelled" && (
                          <span className="reddot"></span>
                        )}
                        {item.status}
                      </div>
                    </td>
                    <td data-label="Total">${item.totalPrice}</td>
                    <td data-label="Invoice">
                      <button
                        className="mainbutton1"
                        onClick={() => {
                          handleClick(item._id);
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })
            : "Bạn không có đơn hàng nào "}
        </tbody>
      </table>
    </div>
  );
};

export default YourOrders;
