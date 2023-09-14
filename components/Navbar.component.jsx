import Link from "next/link";
import { Zoom } from "./Animate.component";
import { Drawer, useDrawer } from "./Drawer.component";
import { HiBars3BottomRight } from "react-icons/hi2";

import { Button } from "./Button.component";

const linkData = [
  {
    link: "Plans",
    href: "/",
  },
  {
    link: "Find Domain",
    href: "/",
  },
  {
    link: "Why Hosterr",
    href: "/",
  },
];

export const Navbar = () => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

const MobileNav = () => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  return (
    <nav className="xl:hidden flex items-center justify-between px-[20px] py-[10px] bg-[#f9f4e8]">
      {/* Drawer For Links */}
      <Drawer
        open={isOpen}
        openFrom="right"
        onClose={closeDrawer}
        heading="Menu"
      >
        <Links isMobile onClick={closeDrawer} />
      </Drawer>
      {/* Logo */}
      <div className="flex items-center gap-[8px]">
        <Zoom>
          <Link href="/" className="cursor-pointer">
            <img
              src="/svg/logo.svg"
              alt="logo"
              className="w-[100px] md:w-[150px]"
            />
          </Link>
        </Zoom>
        <Zoom>
          <Hire />
        </Zoom>
      </div>
      {/* Icons */}

      <button onClick={openDrawer}>
        <HiBars3BottomRight size={35} color="black" />
      </button>
    </nav>
  );
};

export const DesktopNav = () => {
  return (
    <nav className="hidden xl:block px-[20px] w-full py-[12px] bg-[#f9f4e8]">
      <div className="max-w-[1200px] m-auto">
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-[8px]">
            <Zoom>
              <Link href="/" className="cursor-pointer">
                <img src="/svg/logo.svg" alt="logo" className="w-[150px]" />
              </Link>
            </Zoom>
            <Hire />
          </div>
          <Links />
          <div className="flex items-center gap-[12px]">
            <Zoom>
              <Link
                href="/"
                className="text-[20px] md:px-[16px] md:py-[10px] text-[#525252] font-[500] cursor-pointer font-body transition-all duration-500 hover:font-[600]"
              >
                Sign in
              </Link>
            </Zoom>
            <Button />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Links = ({ isMobile = false, onClick = () => {} }) => {
  const linkClass = ` text-[20px] md:px-[16px] md:py-[10px] text-[#525252] font-[500] cursor-pointer font-body transition-all duration-500 flex items-center`;
  const hoverClass = ` hover:text-[#525252] hover:font-[600] hover:transition-all`;

  return (
    <div
      className={`flex ${
        isMobile
          ? "flex-col text-[1.6rem] font-body font-medium navbar gap-[20px]"
          : " p-[6px]"
      } gap-[20px] items-center `}
    >
      {linkData.map((link) => {
        return (
          <>
            <Link
              key={link?.link}
              href={link.href}
              className={`${linkClass} ${hoverClass}`}
              onClick={onClick}
            >
              {link?.link}
            </Link>
          </>
        );
      })}
    </div>
  );
};

const Hire = () => {
  return (
    <div className="rounded-[50px] px-[16px] py-[10px] linear-bg flex justify-center items-center text-[14px] font-body font-[300]  text-white">
      Hoster is hiring!
    </div>
  );
};
