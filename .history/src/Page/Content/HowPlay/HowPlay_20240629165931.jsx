import { IoCopyOutline } from "react-icons/io5";
import "../History/style.scss";
import { toast } from "react-toastify";
import { FaCheck, FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useAuth } from "../../../App/AppContext";
import parse from "html-react-parser";

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
       {
        step <= 9 
       }
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
            <div className="my-[20px] text-[14px]">
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
              {db != null && db.albert != null ? parse(db.albert) : ""}
            </div>

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
