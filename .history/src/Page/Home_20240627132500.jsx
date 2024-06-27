import { Link } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <>
      <div className=" w-full min-h-[90em] bg-[#E6E6E6] px-[275px]">
        <div className="bg-[#ffffff] content rounded-[5px] content min-h-[60em] relative z-[2] mt-[26px] pt-[30px] px-[25px] pb-[40px]">
          <div className="h-[80px] text-center relative">
            <div className="text-[#6d2f0f] content-title">
              <h3 className="text-[24px] mb-[10px]">Chẵn Lẻ MoMo Tự Động</h3>
              <h4 className="text-[18px] mb-[10px]">
                Uy Tín - Nhanh Gọn - Tự Động 24/7 !
              </h4>
            </div>
          </div>
          <div className="text-center mt-[15px]">
            <Link
              to={"https://www.youtube.com/watch?v=LDAxI3PiJ54"}
              target="_blank"
              className="bg-[#d9534f] hover:bg-[#d23e38] border-[#d43f3a] text-[#ffffff] py-[6px] px-[13px] rounded-[4px] text-[14px] "
            >
              Hướng dẫn chơi
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
