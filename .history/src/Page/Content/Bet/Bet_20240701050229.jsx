import { useAuth } from "../../../App/AppContext";
import InputPrice from "../../../Component/InputPrice/InputPrice";

const Bet = () => {
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max); // Số ngẫu nhiên từ 0 đến 99
  }
  const color = [
    {
      color: "#d9534f",
      hover: "#d9534f",
    },
    {
      color: "#5cb85c",
      hover: "#5cb85c",
    },
    {
      color: "#f0ad4e",
      hover: "#f0ad4e",
    },
    {
      color: "#5bc0de",
      hover: "#5bc0de",
    },
  ];
  const { db } = useAuth();

  return (
    <>
     
    </>
  );
};

export default Bet;
