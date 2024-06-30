import { useEffect, useState } from "react";
import { useAuth } from "../../../App/AppContext";
import InputPrice from "../../../Component/InputPrice/InputPrice";
import { BsBorderWidth } from "react-icons/bs";
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
  const [hover, setHover] = useState(null);
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

  let style = {
    backgroundColor: "",
    color: "#fff",
    borderColor: "",
    BsBorderWidth: "2px ",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 500,
    outline: "none",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

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
                  style={{
                    ...style,
                    backgroundColor: hover == i ? hoverColor : bgColor,
                    borderColor: hover == i ? borderColor : bgColor,
                  }}
                  className={`px-2 py-1 rounded-[4px] w-[50%] mx-auto border-[2px] hover:bg-[#c0822b] `}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
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
