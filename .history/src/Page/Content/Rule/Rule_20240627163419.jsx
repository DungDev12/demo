import { Link } from "react-router-dom";

const Rule = () => {
  return (
    <>
      <div className="border-[#F0AD4E] border-[1px] rounded-[4px] text-center">
        <h4>
          <strong>
            <em>1. MINH BẠCH KẾT QUẢ - MD5 LÀ GÌ ?</em>
          </strong>
        </h4>
        <p className="text-[14px]">
          Mã hóa MD5{" "}
          <span className="font-bold">
            là một hàm băm (thuật toán băm) thuật toán được sử dụng để tạo ra
            một hàm băm giá trị (giá trị băm) từ một đầu vào (đầu vào) bất kỳ
            tùy chọn độ dài nào
          </span>
          . MD5 băm giá trị thường có độ dài cố định là 128 bit (16 byte) và
          thường được biểu hiện dưới dạng hexa mã hóa.
        </p>
        <p>
          <strong>HƯỚNG DẪN KIỂM TRA KẾT QUẢ MD5 &nbsp;: </strong>
          <Link
            className="font-bold text-red-600 hover:underline decoration-blue-600"
            target="_blank"
          >
            TẠI ĐÂY
          </Link>
        </p>
      </div>
    </>
  );
};

export default Rule;
