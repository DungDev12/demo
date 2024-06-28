import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-center mt-[24px] py-[20px] min-h-[124px] bg-[#E77F08]  text-[#FFFFFF]">
        <div className="pb-[9px] text-[12px] mt-[7px]">
          Copyright 2023 © CLMM.BET | All rights reserved
        </div>
        <ul>
          <li>
            <Link>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link>
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
