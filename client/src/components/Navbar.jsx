import logo from '../assets/images/logo.svg';

const Navbar = () => {
  return(
    <nav className="flex justify-between items-center bg-SoftRed rounded-[12px] px-8 py-4">
      <div className='flex gap-3'>
        <p className='text-base font-semibold'>Balance:</p>
        <span className="font-semibold font-normal text-white">$400.00</span>
      </div>
      <img src={logo} className="w-[50px]" alt="logo" />
    </nav>
  );
};

export default Navbar;