import { IoCopyOutline } from "react-icons/io5";
import "../History/style.scss";
import { toast } from "react-toastify";
import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";

const HowPlay = ({ step }) => {
  const user = ["Lương Văn Vũ", "Nguyễn Huy Cường", "Pham Thanh Hoan"];
  const db = {
      id: 
      data: [
        {
          id: 1,
          content: "C",
          title: "2-4-6-8",
          getPay: "2.5",
        },
        {
          id: 2,
          content: "L",
          title: "1-3-5-7",
          getPay: "2.5",
        },
        {
          id: 3,
          content: "T",
          title: "5-6-7-8",
          getPay: "2.5",
        },
        {
          id: 4,
          content: "X",
          title: "1-2-3-4",
          getPay: "2.5",
        },
      ],
    },
    {
      id: 2,
      data: [
        {
          id: 1,
          content: "C2",
          title: "0-2-4-6-8",
          getPay: "1.9",
        },
        {
          id: 2,
          content: "L2",
          title: "1-3-5-7-9",
          getPay: "1.9",
        },
        {
          id: 3,
          content: "T",
          title: "5-6-7-8-9",
          getPay: "1.9",
        },
        {
          id: 4,
          content: "X",
          title: "0-1-2-3-4",
          getPay: "1.9",
        },
      ],
    },
    {
      id: 4,
      data: [
        {
          id: 1,
          content: "N0",
          title: "0",
          getPay: "5",
        },
        {
          id: 2,
          content: "N1",
          title: "1-2-3",
          getPay: "3",
        },
        {
          id: 3,
          content: "N2",
          title: "4-5-6",
          getPay: "3",
        },
        {
          id: 4,
          content: "N3",
          title: "7-8-9",
          getPay: "3",
        },
      ],
    },
    {
      id: 5,
      data: [
        {
          id: 1,
          content: "CT",
          title: "6-8",
          getPay: "3.3",
        },
        {
          id: 2,
          content: "LT",
          title: "5-7-9",
          getPay: "3",
        },
        {
          id: 3,
          content: "CX",
          title: "0-2-4",
          getPay: "3",
        },
        {
          id: 4,
          content: "LX",
          title: "1-3",
          getPay: "3.3",
        },
      ],
    },
    {
      id: 6,
      data: [
        {
          id: 1,
          content: "CT",
          title: "6-8",
          getPay: "3.3",
        },
        {
          id: 2,
          content: "LT",
          title: "5-7-9",
          getPay: "3",
        },
        {
          id: 3,
          content: "CX",
          title: "0-2-4",
          getPay: "3",
        },
        {
          id: 4,
          content: "LX",
          title: "1-3",
          getPay: "3.3",
        },
      ],
    },
  ];
  const notify = () =>
    toast.success(`Sao chép tài khoản thành công`, {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: false,
    });

  const handleCopy = (u) => {
    navigator.clipboard.writeText(u);
    notify();
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
                        onClick={() => handleCopy(u)}
                      >
                        <IoCopyOutline />
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
          <table className="table-auto show user w-full mb-[20px]">
            <thead>
              <tr className="text-[#FFFFFF] text-[13px]">
                <th className="bg-[#E77F08]">Nội dung</th>
                <th className="bg-[#E77F08]">Số</th>
                <th className="bg-[#E77F08]">Tiền nhận</th>
              </tr>
            </thead>
            <tbody>
              {console.log(db)}
              <tr>
                <th className="uppercase">c</th>
                <th>2-4-6-8</th>
                <th>2.5</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

HowPlay.propTypes = {
  step: PropTypes.number,
};
export default HowPlay;
