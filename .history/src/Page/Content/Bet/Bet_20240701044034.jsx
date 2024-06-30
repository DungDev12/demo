import { useAuth } from "../../../App/AppContext";
import InputPrice from "../../../Component/InputPrice/InputPrice";

const Bet = () => {
  const {db} = useAuth()
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
  const randomColor = () => {
    const index = Math.floor(Math.random() * color.length);
    return color[index];
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
        {
          db && db.map((data) => {
            const 
          })
        }
          
          <button className="px-2 py-1 rounded-[4px] w-[50%] mx-auto ">
            L
          </button>
          <button className="px-2 py-1 rounded-[4px] w-[50%] mx-auto ">
            T
          </button>
          <button className="px-2 py-1 rounded-[4px] w-[50%] mx-auto ">
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Bet;
