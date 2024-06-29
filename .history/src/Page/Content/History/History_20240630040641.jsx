import { useAuth } from "../../../App/AppContext";
import "./style.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";

const History = () => {
  const { historyData } = useAuth();
  return (
    <>
      {historyData && (
        <div className="border-[1px] rounded-[4px] border-[#E77F08] text-center mt-[20px]">
          <h3 className="uppercase text-[24px] mt-[15px] mb-[38px]">
            lịch sử tham gia
          </h3>
          <table className="table-auto history w-full mb-[20px]">
            <thead>
              <tr className="text-[#FFFFFF] text-[13px]">
                <th className="bg-[#E77F08]">Số điện thoại</th>
                <th className="bg-[#E77F08]">Tiền đặt</th>
                <th className="bg-[#E77F08]">Cược</th>
                <th className="bg-[#E77F08]">Trò chơi</th>
                <th className="bg-[#E77F08]">Trạng thái</th>
                <th className="bg-[#E77F08]">Thời gian</th>
              </tr>
            </thead>
            <tbody>
            {
              his
            }
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
      )}
    </>
  );
};

export default History;
