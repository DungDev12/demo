import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-center mt-[24px] py-[20px] min-h-[124px] bg-[#E77F08]  text-[#FFFFFF]">
        <div className="pb-[9px] text-[12px] mt-[7px]">
          Copyright 2023 © CLMM.BET | All rights reserved
        </div>
        <ul className="flex items-center justify-center gap-[15px] mt-[15px] mb-[3px]">
          <li>
            <Link>
              <FaFacebookF className="text-[20px]" />
            </Link>
          </li>
          <li>
            <Link>
              <FaYoutube className="text-[20px]" />
            </Link>
          </li>
          <li>
            <Link>
              <FaXTwitter className="text-[20px]" />
            </Link>
          </li>
          <li>
            <Link>
              <FaLinkedinIn className="text-[20px]" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
