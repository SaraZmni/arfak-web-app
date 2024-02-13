import { FC } from "react";

const Banner: FC = () => {
  return (
    <div className="px-4 py-32 bg-blue-200 mx-auto">
      <div className="text-white text-center">
        <h1 className="text-500 lg:text-7xl leading-snug font-bold mb-5">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          temporibus repellendus, expedita ipsam omnis laudantium dolor nemo
          rerum reiciendis dignissimos, inventore animi, aliquid consequuntur
          ipsum mollitia! Aliquid accusamus vel architecto.
        </p>
      </div>
    </div>
  );
};

export default Banner;
