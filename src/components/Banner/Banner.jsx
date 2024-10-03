import BannerImg from "../../assets/images/banner.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <img
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
            src={BannerImg}
            alt="banner-image"
          />
        </div>
        {/* Banner Text*/}
      </div>
    </section>
  );
};

export default Banner;
