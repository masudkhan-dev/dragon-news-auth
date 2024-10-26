import moment from 'moment';
import logo from '/assets/logo.png'

const Header = () => {
  return (
    <div className='text-center space-y-2 mt-5'>
      <img src={logo} alt="logo" className='mx-auto' />
      <p className="text-lg">Journalism Without Fear or Favour</p>
      <p className="text-xl"> {moment().format("dddd, MMMM D, YYYY")} </p>
    </div>
  );
};

export default Header;
