import { IoCopyOutline } from "react-icons/io5";
import "../History/style.scss";
import { toast } from "react-toastify";
import { FaCheck, FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useAuth } from "../../../App/AppContext";
import parser from "html-react-parser";
import InputComponent from "../../../Component/InputComponent/InputComponent";
const HowPlay = ({ step }) => {
  const user = ["Lương Văn Vũ", "Nguyễn Huy Cường", "Pham Thanh Hoan"];
  const [copy, setCopy] = useState(null);
  const errCheck = false;
  const { fetchTableHowPlay, db, time, setTime } = useAuth();

  useEffect(() => {
    fetchTableHowPlay(step);
  }, [step]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          return 20; // Reset to 20 when it reaches 0
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const notify = () =>
    toast.success(`Sao chép tài khoản thành công`, {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: false,
    });

  const handleCopy = (u, i) => {
    navigator.clipboard.writeText(u);
    setCopy(i);
    notify();
    setTimeout(() => setCopy(null), 3000);
  };

  const handleInputOut = (e) => {
    const { name, value } = e;
    console.log(name, value);
  };
  return (
    <>
      <div className="border-[#E77F08] h-full border-[1px] rounded-[4px] w-[50%]">
        <div className="text-[#FFFFFF] text-[14px] py-[10px] px-[15px] bg-[#E77F08] text-center">
          Cách chơi
        </div>
        {errCheck && (
          <div className="text-center bg-[#FCF8E3] text-[#8a6d3b] p-[15px] m-[20px]">
            Mã giftcode và số điện thoại không được bỏ trống.
          </div>
        )}
        {step <= 9 ? (
          <div className="px-[15px] pt-[25px]">
            <table className="table-auto user w-full mb-[20px]">
              <thead>
                <tr className="text-[#FFFFFF] text-[13px]">
                  <th className="bg-[#E77F08]">Tài khoản</th>
                  <th className="bg-[#E77F08]">Tối thiểu</th>
                  <th className="bg-[#E77F08]">Tối đa</th>
                </tr>
              </thead>
              <tbody>
                {user &&
                  user.map((u, i) => (
                    <tr key={i} className="text-[14px] boxUser text-center">
                      <td className="font-bold flex items-center justify-center gap-2">
                        {u}
                        <span
                          className="bg-[#5CB85C] py-[3px] px-[6px]  rounded-[4px] mt-0.5 text-[#FFFFFF] cursor-pointer"
                          onClick={() => handleCopy(u, i)}
                        >
                          {copy == i ? <FaCheck /> : <IoCopyOutline />}
                        </span>
                        <span className="bg-[#5CB85C] block lg:hidden py-[5px] px-[6px] text-[10px] rounded-[4px] mt-0.5 text-[#FFFFFF] cursor-pointer">
                          <FaPlay />
                        </span>
                      </td>
                      <td>10.000 VND</td>
                      <td>1.000.000 VND</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : step == 10 ? (
          <div className="px-[15px]">
            <p className="uppercase text-[18px] text-center mt-[20px] font-bold text-[#155724]">
              code khuyến mại
            </p>
            <form className="w-[60%] mx-auto p-4">
              <div className="mb-4">
                <InputComponent
                  nameI="code"
                  label="Mã code"
                  valueOut={handleInputOut}
                  placeholder="ABCXYZ"
                />
              </div>
              <div className="mt-2">
                <InputComponent
                  nameI="phone"
                  label="Số điện thoại"
                  valueOut={handleInputOut}
                  placeholder="094xxxxxxx"
                />
              </div>
              <div>
                <button className="bg-[#5CB85C] hover:bg-[#4cae4c] text-[#FFFFFF] py-[5px] px-[15px] rounded-[4px] mt-[10px] block mx-auto">
                  Kiểm tra
                </button>
              </div>
            </form>
            <div className="bg-[#aed6b8] text-[#155724] p-[20px] text-center text-[14px] leading-relaxed mb-[20px]">
              <p>
                1. Mã quà tặng là chương trình chi ân dành riêng cho khách hàng
                CHANLEBANK.BET
              </p>
              <p>
                2. Mã quà tặng có thể nhận được tại các sự kiện hoặc hoàn thành
                nhiệm vụ do CHANLEBANK.BET tổ chức.
              </p>
              <p>
                3. Mã quà tặng sẽ tùy vào điều kiện để sử dụng, có thời hạn.
              </p>
              <p>4. Mã quà tặng sẽ có giá trị ngẫu nhiên hoặc cố định .</p>
              <p>
                5. Mã quà tặng chỉ được áp dụng cho thành viên của
                CHANLEBANK.BET .
              </p>
            </div>
          </div>
        ) : step == 11 ? (
          <div className="px-[15px]">
            <p className=" text-[18px] text-center mt-[20px] font-bold text-[#155724]">
              Chương trình hoàn tiền khách mới
            </p>
            <form className="w-[56%] mx-auto p-4">
              <div className="mt-2">
                <InputComponent
                  nameI="phone"
                  label="Số điện thoại"
                  valueOut={handleInputOut}
                />
              </div>
              <div>
                <button className="bg-[#5CB85C] hover:bg-[#4cae4c] text-[#FFFFFF] py-[5px] px-[15px] rounded-[4px] mt-[10px] block mx-auto">
                  Kiểm tra
                </button>
              </div>
            </form>
            <div className="bg-[#aed6b8] text-[#155724] p-[20px] text-center text-[14px] leading-relaxed mb-[20px]">
              <p>
                SỰ KIỆN HOÀN CƯỢC là chương trình đặc biệt mà CLMM.BET dành
                riêng cho các người chơi mới nhằm trải nghiệm dịch vụ của chúng
                tôi. Khi bạn chơi game trên CLMM.BET với tổng cược đạt 50,000
                vnđ và BẤT KỂ THẮNG THUA bạn sẽ nhận lại 20,000 vnđ.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        {db && (
          <div className="px-[15px]">
            {db.data && (
              <table className="table-auto show user w-full mb-[20px]">
                <thead>
                  <tr className="text-[#FFFFFF] text-[13px]">
                    <th className="bg-[#E77F08]">Nội dung</th>
                    <th className="bg-[#E77F08]">Số</th>
                    <th className="bg-[#E77F08]">Tiền nhận</th>
                  </tr>
                </thead>
                <tbody>
                  {db.data.map((it, i) => (
                    <tr key={i}>
                      <th className="uppercase">{it.content}</th>
                      <th>{it.title}</th>
                      <th>{it.getPay}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {db.albert && (
              <div className="my-[20px] text-[14px] border-black border-[1px] p-2">
                {/* <div>
              <h4 className="uppercase text-center text-[18px]">
                tiền thắng = tiền cược x 1.9
              </h4>
              <p>&nbsp;</p>
              <p>
                <strong>
                  <span className="text-[#e74c3c]">CHẴN LẺ 2</span> LÀ GAME TÍNH
                  BẰNG SỐ CUỐI CỦA{" "}
                  <span className="text-[#e74c3c]">KẾT QUẢ&nbsp;</span>
                </strong>
              </p>
              <p>
                <strong>
                  VD: Kết quả là :&nbsp;&nbsp;xxx69883&nbsp;=&gt; kết quả là 3
                </strong>
              </p>
              <p>
                <strong>
                  Chẵn lẻ 2 - Tài xỉu 2 là game đủ 0,9 cho ae cược
                </strong>
              </p>
              <p>
                <strong>
                  <em>
                    NHẬN CODE 25K TRẢI NGHIỆM TẠI&nbsp;
                    <a
                      href="https://t.me/MD5CLMM"
                      className="text-[#AD4105] hover:underline"
                    >
                      GROUP TELEGRAM
                    </a>
                  </em>
                </strong>
              </p>
            </div> */}
                {db.albert != null ? parser(db.albert) : ""}
              </div>
            )}

            <div className="text-center mt-3">
              <b>
                Làm mới sau{" "}
                <span className="text-[#AD4105] text-[14px]">{time}</span> s
              </b>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

HowPlay.propTypes = {
  step: PropTypes.number,
};
export default HowPlay;
