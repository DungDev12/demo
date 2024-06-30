import axios from "axios";
import "./style.scss";
import { useEffect, useState } from "react";
import {
  ConverterMoney,
  hidePhone,
} from "../../../Component/ConverterMoney/Converter";
import { useAuth } from "../../../App/AppContext";
const TopPlayer = () => {
  const [topPlayer, setTopPlayer] = useState(null);
  const { setDataContact } = useAuth();
  const fetchAPI = async () => {
    try {
      const response = await axios.post("https://clmm.bet/api/load-settings");
      if (response.status === 200) {
        // console.log(response.data.Settings.topList);
        setTopPlayer(response.data.Settings.topList);
        setDataContact(response.data.Settings.dataContact);
      } else {
        console.log("Lỗi lấy dữ liệu");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      <div className="w-full border-[#E77F08] border-[1px] rounded-[4px] mt-[21px]">
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
              {topPlayer && topPlayer.length ==0 ? (
                <tr className="text-[14px] text-center">
                  <td colSpan="4">Chưa có dữ liệu</td>
                </tr>
              ) : (
                topPlayer.map((player) => (
                  <tr
                    key={player.top}
                    className="text-[14px] boxTopPlayer text-center"
                  >
                    <td>{player.top}</td>
                    <td>{hidePhone(player.user)}</td>
                    <td>
                      <strong className="text-[#3C763D] font-bold">
                        {ConverterMoney(player._am.toString(), ",", "VND")}
                      </strong>
                    </td>
                    <td>
                      <strong className="text-[#A94442] font-bold">
                        +{ConverterMoney(player.gift.toString(), ",", "VND")}
                      </strong>
                    </td>
                  </tr>
                ))
              )}
              {}
            </tbody>
          </table>
          <div className="text-center">
            <b className="text-[#A94442] text-[14px]">
              Phần thưởng TOP sẽ dược trao vào 24h chủ nhật hàng tuần.
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPlayer;
