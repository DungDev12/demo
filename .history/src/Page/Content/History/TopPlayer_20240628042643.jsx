import "./style.scss";

const TopPlayer = () => {
  return (
    <>
      <div className="w-full border-[#E77F08] border-[1px] rounded-[4px]">
        <div className="text-center bg-[#E77F08] text-white py-[10px] px-[15px]">
          <h4 className="uppercase mb-[10px] text-[18px]">top thắng tuần</h4>
        </div>
        <div className="p-[15px]">
          <table className="table-auto topPlayer w-full mb-[20px]">
            <thead>
              <tr className="text-[#FFFFFF] text-[13px]">
                <th className="bg-[#E77F08]">TOP</th>
                <th className="bg-[#E77F08]">Số điện thoại</th>
                <th className="bg-[#E77F08]">Cược</th>
                <th className="bg-[#E77F08]">Trò chơi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[14px] boxTopPlayer">
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
              <tr className="text-[14px] boxHistory">
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

export default TopPlayer;
