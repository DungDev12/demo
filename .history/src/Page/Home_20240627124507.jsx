import "./style.scss";

const Home = () => {
  return (
    <>
      <div className=" w-full min-h-[90em] bg-[#E6E6E6] px-[275px] ">
        <div className="bg-[#ffffff] content rounded-[5px] content min-h-[60em] relative z-[2] mt-[26px] pt-[30px] px-[25px] pb-[40px]">
          <div className="min-h-[80px] text-center relative">
            <div className="text-[#6d2f0f] content-title">
              <h3 className="text-[24px] after:animate-text-">Chẵn Lẻ MoMo Tự Động</h3>
              <h4 className="text-[18px]">
                Uy Tín - Nhanh Gọn - Tự Động 24/7 !
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
