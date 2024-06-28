import { IoCopyOutline } from "react-icons/io5";
import "../History/style.scss";
import { toast } from "react-toastify";
const HowPlay = () => {
  const user = ["Lương Văn Vũ", "Nguyễn Huy Cường", "Pham Thanh Hoan"];
  const notify = () => toast("Wow so easy !", { autoClose: 3000 });

  const handleCopy = (u) => {
    navigator.clipboard.writeText(u);
    notify();
  };
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
              {user &&
                user.map((u, i) => (
                  <tr key={i} className="text-[14px] boxUser text-center">
                    <td className="font-bold flex items-center justify-center gap-2">
                      {u}
                      <span
                        className="bg-[#5CB85C] py-[3px] px-[6px]  rounded-[4px] mt-0.5 text-[#FFFFFF] cursor-pointer"
                        onClick={() => handleCopy(u)}
                      >
                        <IoCopyOutline />
                      </span>
                      <span>2</span>
                    </td>
                    <td>10.000 VND</td>
                    <td>1.000.000 VND</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HowPlay;
