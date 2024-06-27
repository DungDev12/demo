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
                <th className="bg-[#E77F08]">Tiền thắng</th>
                <th className="bg-[#E77F08]">Phần thường</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[14px] boxTopPlayer text-center">
                <td>1</td>
                <td>083853****</td>
                <td>
                  <strong className="text-[#3C763D]">31,542,000 VND</strong>
                </td>
                <td>
                  <strong className="text-[#A94442]">+2,000,000 VND</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TopPlayer;
