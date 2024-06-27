import { useNavigate } from "react-router-dom";
import "./style.scss";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      
      <div className="w-full sticky top-0">
        <marquee className="pointer-events-none Font text-[#ffffff]">
          <b>
            <p>
              <strong>
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
