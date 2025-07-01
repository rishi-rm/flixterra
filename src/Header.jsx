import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
function Header() {
  const NavLinkClass = ({isActive})=>{
    return isActive ? "cursor-pointer text-[#00f0ff] underline underline-offset-4 transition-all duration-300"
    : "cursor-pointer hover:text-[#00f0ff] transition-all duration-300 hover:scale-110"
  }
  return (
    <div className='w-full h-[4rem] flex text-white font-semibold justify-between mb-16  pr-8 items-center'>
      <img src="/logo.png" className='h-[130px] w-[280px] -mr-4' alt="" />
      <div className='flex  w-[30%] justify-between'>
          <NavLink to="/" className={NavLinkClass}>Home</NavLink>
          <NavLink to="/favorites" className={NavLinkClass}>Favorites</NavLink>
          <NavLink to="/about" className={NavLinkClass}>About</NavLink>
          {/* <NavLink to="/feedback" className={NavLinkClass}>Feedback</NavLink> */}
      </div>
      <div className='flex w-[15%] justify-end mt-2'>
        {/* <div className='border-2 border-transparent p-2 px-4 rounded transition-all duration-200 hover:scale-110 cursor-pointer'><Menu size={28} color="#ffffff" /></div> */}
      </div>
      {/* <div className='flex w-[15%] justify-around mt-2'>
        <button className='border-2 border-transparent p-2 px-4 rounded hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all duration-300 hover:scale-110'>Log in</button>
        <button className='bg-[#00f0ff] rounded text-[#1e1e1e] px-4 transition-all duration-300 hover:scale-110'>Sign up</button>
      </div> */}
    </div>
  )
}
export default Header