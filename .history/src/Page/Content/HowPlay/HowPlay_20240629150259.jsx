import { IoCopyOutline } from "react-icons/io5";
import "../History/style.scss";
import { toast } from "react-toastify";
import { FaCheck, FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";

const HowPlay = ({ step }) => {
  const user = ["Lương Văn Vũ", "Nguyễn Huy Cường", "Pham Thanh Hoan"];
  const [db, setDb] = useState(null);
  const [copy, setCopy] = useState(null);
  const fetchAPI = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/how-play/${id}`
      );
      // console.log(response);
      if (response.status === 200) {
        setDb(response.data);
      } else if (response.status === 204) {
        setDb(null);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchAPI(step);
  }, [step]);
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
                {db.map((it, i) => (
                  <tr key={i}>
                    <th className="uppercase">{it.content}</th>
                    <th>{it.title}</th>
                    <th>{it.getPay}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

HowPlay.propTypes = {
  step: PropTypes.number,
};
export default HowPlay;
