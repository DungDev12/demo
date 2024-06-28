import "../History/style.scss";
const HowPlay = () => {
  return (
    <>
      <div className="border-[#E77F08] border-[1px] rounded-[4px] w-[50%]">
        <div className="text-[#FFFFFF] text-[14px] py-[10px] px-[15px] bg-[#E77F08] text-center">
          Cách chơi
        </div>
        <div className="px-[15px] pt-[25px]">
          <table className="table-auto user w-full mb-[20px]">
            <thead>
              <tr className="text-[#FFFFFF] text-[13px]">
                <th className="bg-[#E77F08]">Tài khoản</th>
                <th className="bg-[#E77F08]">Tối thiểu</th>
                <th className="bg-[#E77F08]">Tối đa</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[14px] boxUser">
                <td>083853****</td>
                <td>85.000 VND</td>
                <td>t2</td>
                <td>Chẵn Lẻ 2 - Tài Xỉu 2</td>
             
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HowPlay;
