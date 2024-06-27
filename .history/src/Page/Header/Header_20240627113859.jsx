import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="bg-[#E77F08] h-[63px] w-full px-[250px]">
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
        <div className="w-full h-[26px]">
          <Marq className="pointer-events-none block">
            <b>
              <p>
                <strong>
                  Clmm.bet - Đẳng Cấp Chẵn Lẻ Momo - Uy Tín Xanh Chín - Trả
                  thưởng nhanh chóng{" "}
                </strong>
              </p>
            </b>
          </Marq>
        </div>
      </div>
    </>
  );
};

export default Header;
