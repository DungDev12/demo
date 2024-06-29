import parse from "html-react-parser";
import { useAuth } from "../../../App/AppContext";

const Rule = () => {
  const { rule } = useAuth();
  return (
    <>
      <div className="border-[#F0AD4E] border-[1px] rounded-[4px] text-center p-[5px] mt-[26px]">
        {/* <h4 className="mb-[10px]">
          <strong>
            1 .&nbsp;
            <em>MINH BẠCH KẾT QUẢ - MD5 LÀ GÌ ?</em>
          </strong>
        </h4>
        <p className="text-[14px] mb-[3px]">
          Mã hóa MD5
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
                TRONG 1 PHIÊN MUỐN CƯỢC
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
                TUYỆT ĐỐI KHÔNG CƯỢC
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
              </span>
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
        <p>
          . Hiện nay CLMM.BET&nbsp;đang là đơn vị&nbsp;momo chẵn lẻ, chanlemomo
          thanh toán tự động chỉ trong 3 giây và uy tín nhất hiện tại, Hỗ trợ
          khách hàng 24/7 và còn&nbsp;là một trang web đáng tin cậy để chơi chắn
          lẻ trực tuyến. Trang web này cung cấp một giao diện đơn giản và dễ sử
          dụng, với nhiều tính năng&nbsp;...
        </p>
        <p>
          - Chan le momo có cách chơi đơn giản và dễ hiểu. Người chơi chỉ cần
          chọn cược vào chẵn hoặc lẻ, hoặc cược vào một số lẻ nhất định từ 1 đến
          9. Kết quả của trò chơi sẽ được xác định dựa trên số cuối của mã giao
          dịch chuyển tiền qua ứng dụng Momo.
        </p>
        <p>
          - Momo chan le có nhiều ưu điểm vượt trội so với các trò chơi khác.
          Đầu tiên, trò chơi này hoàn toàn xanh chín do mã giao dịch ngân hàng
          là không thể thay đổi và can thiệp. Thêm vào đó người chơi có thể tham
          gia trò chơi mọi lúc mọi nơi chỉ cần có kết nối Internet. Thứ hai,
          không hề có chế độ nạp rút như các game khác. Tiền được chuyển thẳng
          về Tài Khoản Momo của bạn ngay sau khi bạn Thắng.
        </p>
        <p>
          Lưu Ý: Hiện nay do tính phổ biến của trò chơi có rất nhiều đối tượng
          lừa đảo, scam giả mạo để lừa người chơi. Hãy cẩn thận và chỉ chơi trên
          website của chúng tôi để đảm bảo tính an toàn và xanh chín.
        </p>
        <p>- Các lưu ý khi chơi chan le momo được chúng tôi khuyến nghị:</p>
        <p>- Quay video nêu sbanj bảo mình chỉnh kết quả&nbsp;</p>
        <p>- Đọc rõ luật chơi và các chú ý trước khi bắt đầu đặt cược.</p>
        <p>
          - Khởi đầu với một số tiền hợp lý, không nên vội vàng dẫn tới cháy tài
          khoản.
        </p>
        <p>- Đặt cược một cách thông minh, không lên tất tay vào một lệnh.</p>
        <p>
          - Không nên lạm dung hoặc tìm cách lợi dụng lỗi của hệ thống bạn có
          thể bị Block mà không được thanh toán.
        </p>
        <p>
          - Cuối cùng chúc bạn may mắn và kiếm được nhiều tiền thông qua trò
          chơi Chanlemomo!
        </p> */}
        {/* {rule && <div dangerouslySetInnerHTML={{ __html: rule }} />} */}
        {rule && parse(rule)}
      </div>
    </>
  );
};

export default Rule;
