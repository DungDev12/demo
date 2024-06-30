import InputPrice from "../../../Component/InputPrice/InputPrice";

const Bet = () => {
  return (
    <>
      <div className="border-[#E77F08] border-[1px] rounded-[4px] w-[50%]">
        <div className="text-[#FFFFFF] text-[14px] py-[10px] px-[15px] bg-[#E77F08] text-center uppercase">
          đặt cược và kiểm tra
        </div>
        <div className="py-[20px] px-[15px]">
          <InputPrice />
        </div>
        <div>
                    
        </div>
      </div>
    </>
  );
};

export default Bet;
