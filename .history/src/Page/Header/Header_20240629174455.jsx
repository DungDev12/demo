import { useNavigate } from "react-router-dom";
import "./style.scss";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative w-full h-full">
        <div className="bg-[#E77F08] h-[63px] w-full px-[275px] relative z-[1]">
          <div
            className="w-[170px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="https://chanlebank.bet/uploads/1717640717_2024-06-06%2009.12.20.jpg"
              alt="Logo"
              className="w-full block"
            />
          </div>
        </div>
        <div className="min-h-[170px] w-full bg-white absolute top-0 left-0 "></div>
      </div>
      <div className="w-full sticky top-[63px] z-[3] pl-[275px]">
        <marquee className="pointer-events-none Font text-[#ffffff]">
          <b>
            <p>
              <strong className="pointer-events-none">
                Clmm.bet - Đẳng Cấp Chẵn Lẻ Momo - Uy Tín Xanh Chín - Trả thưởng
                nhanh chóng
              </strong>
            </p>
          </b>
        </marquee>
      </div>
    </>
  );
};

export default Header;
