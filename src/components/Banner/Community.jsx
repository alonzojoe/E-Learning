import CommunityImg from "../../assets/images/education.png";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Community Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-dark2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              repellat asperiores tenetur voluptatibus, aut ducimus voluptate
              illum aperiam aliquam iure non omnis nemo quia beatae, aliquid
              sint, explicabo nam? Dolorem?
            </p>
            <a href="" className="primary-btn !mt-8">
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Community Image */}
        <div className="flex justify-center items-center ">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
            src={CommunityImg}
            alt="banner-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
