import { IMAGES_URL } from "../utils/constants";
import NonVegSymbol from "./NonVegSymbol";
import VegSymbol from "./VegSymbol";

const AccordianBody = ({ itemInfo }) => {
  const { name, price, description, imageId, isVeg } = itemInfo;
  return (
    <div className="mb-4 ">
      <div className="flex pl-3 p-2 shadow-lg shadow-pink-200 bg-pink-100">
        <div className="content w-9/12 text-left">
          {isVeg ? <VegSymbol /> : <NonVegSymbol />}
          <div className="font-bold my-1 pr-2">{name}</div>
          <div>₹{price / 100}</div>
          <div className=" text-sm py-2">{description}</div>
        </div>
        <div className="image w-3/12 m-auto">
          <img src={IMAGES_URL + imageId} className="rounded-lg" />
        </div>
      </div>
      <div className="mt-3 border border-b-1 border-pink-200 shadow"></div>
    </div>
  );
};

export default AccordianBody;
