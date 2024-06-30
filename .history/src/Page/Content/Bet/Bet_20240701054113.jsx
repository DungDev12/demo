import { useEffect, useState } from "react";
import { useAuth } from "../../../App/AppContext";
import InputPrice from "../../../Component/InputPrice/InputPrice";
const color = [
  {
    color: "d9534f",
    border: "d9534f",
    hover: "AD423F",
  },
  {
    color: "5cb85c",
    hover: "5cb85c",
    border: "488f48",
  },
  {
    color: "f0ad4e",
    hover: "f0ad4e",
    border: "c0822b",
  },
  {
    color: "5bc0de",
    border: "5bc0de",
    hover: "3298B8",
  },
];
const Bet = () => {
  const { db } = useAuth();

  function getRandomNumbersArray(length, max) {
    const numbers = [];
    for (let i = 0; i < length; i++) {
      numbers.push(Math.floor(Math.random() * max));
    }
    return numbers;
  }
  const [getColor, setGetColor] = useState([]);
  useEffect(() => {
    const randomNumbers = getRandomNumbersArray(4, color.length);
    setGetColor(randomNumbers);
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
            db.data &&
            db.data.map((v, i) => {
              const colorIndex = getColor[i % getColor.length];
              const bgColor = `#${color[colorIndex].color}`;
              const hoverColor = `#${color[colorIndex].hover}`;
              const borderColor = `#${color[colorIndex].border}`;
              return (
                <button
                  key={i}
                  style={{ backgroundColor: bgColor, borderColor: bgColor }}
                  className={`px-2 py-1 rounded-[4px] w-[50%] mx-auto border-[2px]  `}
                >
                  {v.content}
                </button>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Bet;
