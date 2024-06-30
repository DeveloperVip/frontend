import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <>
      <div className="introduct-content ">
        <div>
          <img
            src="https://s.alicdn.com/@img/imgextra/i4/O1CN01ustqhi1Tz44lu4arh_!!6000000002452-0-tps-3840-1248.jpg_q60.jpg"
            alt=""
          />
        </div>
        <div className="p-4 ">
          <div className="d-flex">
            <div className="text-center align-self-center">
              <h3 className="text-center">Về chúng tôi</h3>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                atque aliquid alias impedit quas, tenetur maxime perferendis
                nisi fugit? Necessitatibus ducimus autem distinctio dolores,
                unde error asperiores veritatis reprehenderit laudantium!
              </span>
              <br />
              <button type="button" class="btn btn-success w-25 mt-5">Learn more</button>
            </div>
            <>
            <span
                style={{
                    width:"1000px",
                    height:"700px",
                    backgroundRepeat:"round",
                  backgroundImage: `url("https://s.alicdn.com/@img/imgextra/i3/O1CN01blSupV1NpY5ZcwvIj_!!6000000001619-2-tps-920-920.png")`,
                }}
              ></span>
            </>
          </div>
          <div className="d-flex content mt-5">
            <div className="bg-body-secondary p-5">
              <h4 className="h-auto text-center">Tầm nhìn</h4>
              <span>
                Với khả năng hậu cần đầu cuối và kiểm soát hoàn toàn chuỗi cung
                ứng của chúng tôi, hầu như bất kỳ sản phẩm nào cũng chỉ cần một
                cú nhấp chuột. Chúng tôi có các trung tâm thực hiện tại 17 thành
                phố Đông Nam Á và việc đầu tư vào kho hàng, trung tâm phân loại
                và công nghệ kỹ thuật số bổ sung cho mạng lưới đối tác và các
                thỏa thuận xuyên biên giới và chặng cuối của chúng tôi ở mỗi
                quốc gia.
              </span>
            </div>
            <div className="bg-dark-subtle p-5">
              <h4 className="h-auto text-center">Giá trị</h4>
              <span>
                Đảm bảo các giao dịch an toàn và liền mạch hướng dẫn sự phát
                triển của cơ sở hạ tầng dịch vụ tài chính và thanh toán an toàn
                nhất Đông Nam Á. Trong một khu vực vẫn đang ở các giai đoạn khác
                nhau của việc áp dụng thanh toán điện tử và Thương mại điện tử,
                chúng tôi đã phát triển một bộ các tùy chọn phục vụ cho các sở
                thích hiện có đồng thời giúp khách hàng dễ dàng sử dụng thanh
                toán kỹ thuật số thông qua các giải pháp trực quan mà họ có thể
                tin tưởng.
              </span>
            </div>
            <div className="bg-secondary-subtle p-5">
              <h4 className="h-auto text-center">Ưu đãi hấp dẫn</h4>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
                nam.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
