import { Link } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";
import Rule from "./Content/Rule/Rule";
import History from "./Content/History/History";
import TopPlayer from "./Content/History/TopPlayer";
import HowPlay from "./Content/HowPlay/HowPlay";
import Bet from "./Content/Bet/Bet";
import { useAuth } from "../App/AppContext";

const Home = () => {
  const [pageCategory, setPageCategory] = useState(1);
  const [md5, setMD5] = useState(null);
  const { category, getCode } = useAuth();
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime().toString();
      setMD5(now);
    }, 14);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full min-h-[90em]  ">
        <div className="bg-[#ffffff] w-[1140px] mx-auto content rounded-[5px] content min-h-[60em] relative z-[2] mt-[26px] pt-[30px] px-[25px] pb-[40px]">
          <div className="min-h-[80px] text-center relative">
            <div className="text-[#6d2f0f] content-title">
              <h3 className="text-[24px] mb-[10px]">Chẵn lẻ MoMo Tự Động</h3>
              <h4 className="text-[18px] mb-[10px]">
                Uy Tín - Nhanh Gọn - Tự Động 24/7 !
              </h4>
            </div>
          </div>
          <div className="text-center mt-[35px]">
            <Link
              to={"https://www.youtube.com/watch?v=LDAxI3PiJ54"}
              target="_blank"
              className="bg-[#d9534f] hover:bg-[#d23e38] border-[#d43f3a] text-[#ffffff] py-[6px] px-[13px] rounded-[4px] text-[14px] "
            >
              Hướng dẫn chơi
            </Link>
          </div>
          <div className="mt-[25px] flex justify-center gap-1 items-center flex-wrap">
            {category &&
              category.map((box, i) => (
                <button
                  key={i}
                  className={`py-[6px] px-[13px] ${
                    pageCategory == box.id
                      ? "bg-[#39B3D7] hover:bg-[#3298B8]"
                      : "bg-[#E77F08]"
                  } text-[#FFFFFF] mt-[9px] whitespace-nowrap text-[14px] font-normal rounded-[4px]`}
                  onClick={() => {
                    if (box.name == "MD5") {
                      console.log("Mở bàn game");
                    } else {
                      setPageCategory(box.id);
                    }
                  }}
                >
                  {box.name}
                </button>
              ))}
          </div>
          <div className="mt-[15px] flex justify-center gap-1 items-center flex-wrap">
            {getCode &&
              getCode.map((box, i) => (
                <button
                  key={i}
                  className={`py-[6px] px-[13px] ${
                    pageCategory == box.id
                      ? "bg-[#5CB85C] hover:bg-[#47A447]"
                      : "bg-[#F0F0F0]"
                  } text-[#000000] mt-[9px] whitespace-nowrap text-[14px] font-normal rounded-[4px] relative text-center`}
                  onClick={() => setPageCategory(box.id)}
                >
                  {box.name}
                  <b className="text-red-500 text-[9px] absolute ml-auto mr-auto left-0 right-0 top-[22px]">
                    ({box.span})
                  </b>
                </button>
              ))}
          </div>
          <div className="mt-[15px] text-center">
            <div className="text-[14px]">
              <p>
                CHỨNG THỰC MD5 : <span className="font-bold">{md5 && md5}</span>
              </p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 justify-center font-bold text-[14px] mt-[0.2rem]">
                <span className="px-[8px] pt-[2px] pb-[4px] rounded-[4px] text-[#FFFFFF] bg-[#5CB85C]">
                  KẾT QUẢ
                </span>
                {" = "}
                <span className="px-[8px] pt-[2px] pb-[4px] rounded-[4px] text-[#FFFFFF] bg-[#F0AD4E]">
                  MÃ THAM CHIẾU
                </span>
                <span className="px-[8px] pt-[2px] pb-[4px] rounded-[4px] text-[#FFFFFF] bg-[#5BC0DE]">
                  +
                </span>
                <span className="px-[8px] pt-[2px] pb-[4px] rounded-[4px] text-[#FFFFFF] bg-[#D9534F]">
                  {md5 && md5.slice(-6)}
                </span>
              </h4>
            </div>
          </div>
          <div className="flex h-full flex-row items-start justify-center gap-[30px] mt-[22px]">
            <div className="border-[#E77F08] h-full border-[1px] rounded-[4px] w-[50%]">
              <HowPlay step={pageCategory} />
            </div>
            <div className="border-[#E77F08] h-[100%] border-[1px] rounded-[4px] w-[50%]">
              <Bet />
            </div>
          </div>
          <History />
          <TopPlayer />
          <Rule />
        </div>
      </div>
    </>
  );
};

export default Home;
