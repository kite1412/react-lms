import logo from "../assets/logo.svg"

function TopBar({ className }) {
  return (
    <div className={`
      h-[80px] w-screen flex items-center gap-4
      bg-midnightBlue p-4 ${className}
    `}>
      <img 
        src={logo}
        className="h-[60px] w-[60px]"
      />
      <b>SMKN 2 Bandar Lampung</b>
    </div>
  );
}

export default TopBar;