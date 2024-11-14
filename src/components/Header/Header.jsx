import logo from "../../assets/logo.png";
import moment from "moment";
moment.locale('af');
// import moment from './../../../node_modules/moment/dist/locale/af';

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 my-5">
      <img src={logo} alt="" />
      <p className="font-semibold text-gray-500 text-xl">
        Journalism Without Fear or Favour
      </p>
      <div className="flex items-center gap-2">
      <p className="font-bold text-xl">
        {moment().format('dddd,')}
      </p>
      <p className="font-semibold text-gray-500 text-xl">
        {moment().format( "MMMM Do YYYY")}
      </p>
      </div>
    </div>
  );
};

export default Header;
