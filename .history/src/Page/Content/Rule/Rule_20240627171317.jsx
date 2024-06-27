import { Link } from "react-router-dom";

const Rule = () => {
  return (
    <>
      <div className="border-[#F0AD4E] border-[1px] rounded-[4px] text-center p-[5px]">
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
            <p>
              <strong>MỖI PHIÊN CÓ 60S ĐẾM NGƯỢC&nbsp;.</strong>
            </p>
            <p>
              <strong>
                TRONG 1 PHIÊN MUỐN CƯỢC{" "}
                <span className="text-[#e74c3c]">
                  NHIỀU BILL THÌ HÃY CHƠI NHIỀU GAME KHÁC NHAU&nbsp;
                </span>
              </strong>
            </p>
            <p>
              <strong>
                VD: CƯỢC CLTX THÌ CƯỢC THÊM CLTX2 , SICBO, 1P3 , EURO ,
              </strong>
            </p>
            <p>
              <strong>
                TUYỆT ĐỐI KHÔNG CƯỢC{" "}
                <span className="text-[#e74c3c]">
                  NHIỀU BILL VÀO 1 GAME TRONG 1 PHIÊN&nbsp;
                </span>
              </strong>
            </p>
            <p>
              <strong>
                VD : CƯỢC GAME CLTX THÌ K ĐƯỢC CƯỢC CÙNG LÚC NỘI DUNG C,L,T,X
              </strong>
            </p>
          </li>
          <li>
            <strong>
              So sánh mã MD5 tại các trang để minh bạch kết quả&nbsp;:{" "}
              <span className="text-[#e74c3c]">
                MD5.VN , MD5.CZ , MD5.SERVICES
              </span>{" "}
              ,
            </strong>
          </li>
          <li>
            <strong>Xử lý lỗi trong 24h quá 24h</strong>{" "}
            <strong>sẽ không xử lý.&nbsp;</strong>
          </li>
          <li>
            <strong>Sai nội dung , hạn mức , chậm phiên&nbsp;hoàn 50%</strong>
          </li>
          <li>
            Trong suốt quá trình hoạt động chúng tôi chưa nhận được bất cứ tố
            cáo nào về vấn đề <strong>gian lận hay lừa đảo</strong>. Nếu như có
            tin đồn nhà cái không trung thực, lừa người chơi thì nó chỉ dừng lại
            ở tin đồn và không có bằng chứng xác thực.
          </li>
          <li>Mọi hành vi gian lận của người chơi sẽ bị khoá tài khoản</li>
        </ul>
        <hr className="my-[1.5rem]" />
        <h3 className="flex items-center justify-center text-[24px]">
          <img
            alt="enlightened"
            src="https://cdn.ckeditor.com/4.21.0/full/plugins/smiley/images/lightbulb.png"
            title="enlightened"
          />
          &nbsp;CLMM, CHẴN LẺ MOMO LÀ GÌ<strong>&nbsp; ?</strong>
        </h3>
        <p>Chẵn lẻ momo là một trò chơi xanh chín, dựa vào mã md5</p>
      </div>
    </>
  );
};

export default Rule;
