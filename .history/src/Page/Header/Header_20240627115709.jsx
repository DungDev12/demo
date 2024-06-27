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
        
        </div>
      </div>
    </>
  );
};

export default Header;
