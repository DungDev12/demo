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
                <td>
                  <span className="bg-[#5CB85C] text-[#FFFFFF] text-[10.5px] uppercase py-[2px] px-[6px] font-bold rounded-[2.5px]">
                    Thắng
                  </span>
                </td>
                <td>28-06-2024 03:40:45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HowPlay;
