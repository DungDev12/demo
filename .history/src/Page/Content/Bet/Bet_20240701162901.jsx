import { useEffect, useState } from "react";
import { useAuth } from "../../../App/AppContext";
import InputPrice from "../../../Component/InputPrice/InputPrice";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);
import { Link } from "react-router-dom";
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
  const { db, dataContact } = useAuth();
  const [hover, setHover] = useState(null);
  const [err, setErr] = useState("");
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
    BsBorderWidth: "2px",
    BsBorderStyle: "solid",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 500,
    outline: "none",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue(value);
  };

  const handleCheck = () => {
    setErr("1");
  };
  const [betPrice, setBetPrice] = useState({});
  const handleOut = (e) => {
    setBetPrice(e);
  };
  const handleBet = (e) => {
    MySwal.fire({})
  };
  return (
    <>
      <div className="text-[#FFFFFF] text-[14px] py-[10px] bg-[#E77F08] text-center uppercase">
        đặt cược và kiểm tra
      </div>
      <div className="p-[15px]">
        <div className="py-[20px] px-[15px]">
          <InputPrice nameI="amount" valueOut={handleOut} />
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
                  onClick={() => handleBet(v.content.toLowerCase())}
                >
                  {v.content.toUpperCase()}
                </button>
              );
            })}
        </div>
        <hr className="my-[20px]" />
        <div className="text-left bg-[#d9edf7] text-[#31708f] p-[15px] mb-[20px] rounded-[4px]">
          Nếu quá 5p không nhận được tiền vui lòng kiểm tra mã giao dịch
        </div>
        <div className="text-center">
          <label className="font-bold">Nhập mã giao dịch</label>
          <input
            name="tran_id"
            className="block w-[90%] mx-auto border-black border-[1px] rounded-[4px] text-[16px] mt-[0.5rem] mb-[0.3rem] px-2 py-1"
            onChange={handleOnChange}
            value={value}
            placeholder="Mã giao dịch hoặc mã phiên: Ví dụ 58438383257"
          />
          <small className="text-[12px] font-bold text-gray-400">
            Nhập mã giao dịch để kiểm tra.
          </small>
        </div>
        <button
          className="bg-[#e77f08] text-[#ffffff] py-[6px] px-[13px] text-[14px] rounded-[4px] mx-auto block mt-[10px]"
          onClick={() => handleCheck()}
        >
          Kiểm tra
        </button>
        {err && (
          <div className="bg-[#f2dede] text-[#a94442] text-[14px] mt-[5px] mb-[20px] p-[15px] text-center">
            Tên người nhận không chính xác
          </div>
        )}
        <div>
          {dataContact &&
            dataContact.map((d, i) => (
              <div key={i} className=" flex items-center justify-center">
                <Link
                  to={d.href}
                  className="inline-block text-center py-[6px] px-[13px] text-[#ffffff] my-1 bg-[#5cb85c] border-[#4cae4c] border-[1px] text-[14px] rounded-[4px]"
                >
                  {d.name.toUpperCase()}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Bet;
