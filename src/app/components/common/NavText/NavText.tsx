const NavText = ({ children }) => {
  return (
    <a
      href='#'
      className='block py-2 px-3 text-3xl text-offBrown'
      aria-current='page'
    >
      {children}
    </a>
  );
};

export default NavText;
