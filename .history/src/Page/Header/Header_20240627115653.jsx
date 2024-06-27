import { useNavigate } from "react-router-dom";
import "./style.scss";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#E77F08] h-[63px] w-full px-[250px]">
        <div className="w-[170px] cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="https://chanlebank.bet/uploads/1717640717_2024-06-06%2009.12.20.jpg"
            alt="Logo"
            className="w-full block"
          />
        </div>
      </div>
      <div className="bg-[#ffffff] h-[110px]">
        <div className="w-full h-[26px] sticky top-0">
          <marquee className="pointer-events-none Font text-[#ffffff]">
            <b>
              <p>
                <strong>
                  Clmm.bet - Đẳng Cấp Chẵn Lẻ Momo - Uy Tín Xanh Chín - Trả
                  thưởng nhanh chóng
                </strong>
              </p>
            </b>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Header;
