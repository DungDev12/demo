import { Link } from "react-router-dom";

const Rule = () => {
  return (
    <>
      <div className="border-[#F0AD4E] border-[1px] rounded-[4px] text-center">
        <h4 className="mb-[10px]">
          <strong>
            1 .&nbsp;
            <em>MINH BẠCH KẾT QUẢ - MD5 LÀ GÌ ?</em>
          </strong>
        </h4>
        <p className="text-[14px] mb-[3px]">
          Mã hóa MD5{" "}
          <span className="font-bold">
            là một hàm băm (thuật toán băm) thuật toán được sử dụng để tạo ra
            một hàm băm giá trị (giá trị băm) từ một đầu vào (đầu vào) bất kỳ
            tùy chọn độ dài nào
          </span>
          . MD5 băm giá trị thường có độ dài cố định là 128 bit (16 byte) và
          thường được biểu hiện dưới dạng hexa mã hóa.
        </p>
        <p className="mb-[3px]">
          <strong>HƯỚNG DẪN KIỂM TRA KẾT QUẢ MD5 &nbsp;: </strong>
          <Link
            className="font-bold text-red-600 hover:underline decoration-blue-600"
            to={"https://t.me/BET_FAMILYVN/765790"}
          >
            TẠI ĐÂY
          </Link>
        </p>
        <h4 className="mb-[10px]">
          <strong>
            2 .&nbsp;
            <em>
              <em>QUY ĐỊNH LUẬT CHƠI&nbsp;</em>
            </em>
          </strong>
        </h4>
        <ul>
          <li>
            <strong>MỖI PHIÊN CÓ 60S ĐẾM NGƯỢC&nbsp;.</strong>
          </li>
          <li>
          <strong>TRONG 1 PHIÊN MUỐN CƯỢC <span style="color:#e74c3c">NHIỀU BILL THÌ HÃY CHƠI NHIỀU GAME KHÁC NHAU&nbsp;</span></strong>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Rule;
