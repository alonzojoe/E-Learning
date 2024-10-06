import subscribersImg from "../../assets/images/bg.png";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${subscribersImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribers = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="container py-28 md:py-32" style={bgStyle}>
        <div className="flex flex-col justify-center">
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto border-solid border-[1px]">
            <h1 className="text-4xl font-bold !leading-snug">
              450K+ Students are learning
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              molestiae natus deleniti reprehenderit sed suscipit placeat,
              quaerat nisi pariatur eos facere cum quidem veritatis esse,
              officiis recusandae, perspiciatis dolore itaque!
            </p>
            <a
              href="#"
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
            >
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribers;
