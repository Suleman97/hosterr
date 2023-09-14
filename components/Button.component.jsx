import Link from "next/link";

export const Button = () => {
  return (
    <Link
      href="/"
      className="bg-[#4977ea] px-[22px] py-[14px] flex items-center justify-center rounded-[12px] text-[#fff] text-[14px] font-body font-[700] hover:scale-[1.115] hover:rounded-[12px] transition-all"
    >
      Join Waitlist
    </Link>
  );
};
