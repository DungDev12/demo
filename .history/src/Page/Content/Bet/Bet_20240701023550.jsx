import InputPrice from "../../../Component/InputPrice/InputPrice";

const Bet = () => {
  const color = ["#"];
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
          <button className="bg-[#000000]">C</button>
          <button className="bg-[#000000]">L</button>
          <button className="bg-[#000000]">T</button>
          <button className="bg-[#000000]">X</button>
        </div>
      </div>
    </>
  );
};

export default Bet;
