import { IoCopyOutline } from "react-icons/io5";
import "../History/style.scss";
import { toast } from "react-toastify";
import { FaCheck, FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../App/AppContext";

const HowPlay = ({ step }) => {
  const user = ["Lương Văn Vũ", "Nguyễn Huy Cường", "Pham Thanh Hoan"];
  const [copy, setCopy] = useState(null);
  const [time, setTime] = useState(20);
  const { fetchTableHowPlay, db } = useAuth();

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
  return (
    <>
      <div className="border-[#E77F08] border-[1px] rounded-[4px] w-[50%]">
        <div className="text-[#FFFFFF] text-[14px] py-[10px] px-[15px] bg-[#E77F08] text-center">
          Cách chơi
        </div>
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
        <div className="px-[15px]">
          {db && (
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
          <div className="my-[20px] text-[14px]">
            <h4 className="uppercase text-center text-[18px]">
              tiền thắng = tiền cược x 2.45
            </h4>
            <p>&nbsp;</p>
            <p>
              <strong>
                <span className="text-[#e74c3c]">CHẴN LẺ</span> LÀ GAME TÍNH
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
                Chẵn lẻ - Tài xỉu là game tỉ lệ cao, không tính 0 và 9 , nếu
                muốn tính 0 và 9 vui lòng chơi chẵn lẻ 2 !
              </strong>
            </p>
            <p>
              <strong>
                <em>
                  NHẬN CODE 25K TRẢI NGHIỆM TẠI&nbsp;
                  <Link
                    href="https://t.me/MD5CLMM"
                    className="text-[#AD4105] hover:underline"
                  >
                    GROUP TELEGRAM
                  </Link>
                </em>
              </strong>
            </p>
          </div>
          {rule && <div dangerouslySetInnerHTML={{ __html: rule }} />}
          <div className="text-center mt-3">
            <b>
              Làm mới sau{" "}
              <span className="text-[#AD4105] text-[14px]">{time}</span> s
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

HowPlay.propTypes = {
  step: PropTypes.number,
};
export default HowPlay;
