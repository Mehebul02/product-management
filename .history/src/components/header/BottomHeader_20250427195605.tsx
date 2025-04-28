import { Link } from "react-router-dom";
import Container from "../../shared/Container";
import { navigation } from "../../constants";


const BottomHeader = () => {
  return (
    <div className="border-b border-b-gray-400">
      <Container className="flex items-center justify-between py-1">
        <div className="text-xs md:text-sm font-medium flex items-center gap-5">
          {navigation?.map((item) => (
            <Link key={item?.title} to={item?.path}>
              {item?.title}
            </Link>
          ))}
        </div>
        <p className="text-xs text-gray-400 font-medium hidden md:inline-flex">
          Hotline: <span className="text-black">+8801642287450</span>
        </p>
      </Container>
    </div>
  );
};

export default BottomHeader;
