import { useEffect, useState } from "react";
import { useAuth } from "../../../App/AppContext";
import InputPrice from "../../../Component/InputPrice/InputPrice";
function getRandomNumber() {
  return Math.floor(Math.random() * color.length); // Số ngẫu nhiên từ 0 đến 99
}
const Bet = () => {
  const { db } = useAuth();
  const color = [
    {
      color: "#d9534f",
      hover: "#d9534f",
    },
    {
      color: "#5cb85c",
      hover: "#5cb85c",
    },
    {
      color: "#f0ad4e",
      hover: "#f0ad4e",
    },
    {
      color: "#5bc0de",
      hover: "#5bc0de",
    },
  ];

  const [numberColor, setNumberColor] = useState([]);
  useEffect(() => {
    const number = getRandomNumber();
    setNumberColor([...numberColor, number]);
  }, [db]);
  return (
    <>
      <div className="border-[#E77F08] border-[1px] rounded-[4px] w-[50%]">
        <div className="text-[#FFFFFF] text-[14px] py-[10px] px-[15px] bg-[#E77F08] text-center uppercase">
          đặt cược và kiểm tra
        </div>
        <div className="py-[20px] px-[15px]">
          <InputPrice />
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          {db &&
            db.data.map((data) => {
              return (
                <button
                  key={data.id}
                  className={`px-2 py-1 rounded-[4px] w-[50%] mx-auto`}
                >
                  {data.content}
                </button>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Bet;
