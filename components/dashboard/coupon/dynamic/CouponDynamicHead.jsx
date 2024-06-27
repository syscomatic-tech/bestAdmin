import Link from "next/link";

export default function CouponDynamicHead({ id, title }) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-start items-center">
        <Link href="/dashboard/coupon">
          <svg
            width="19"
            height="32"
            viewBox="0 0 19 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer w-5 md:w-10 h-5 md:h-10"
          >
            <path d="M17 2L3 16L17 30" stroke="black" strokeWidth="3" />
          </svg>
        </Link>

        <h1 className="text-lg md:text-5xl font-semibold ml-5">EID2024</h1>
      </div>
      <div className="text-sm md:text-lg flex flex-col md:flex-row">
        <p className="">Coupon Created at jan 15, 2024</p> <span className="hidden md:block mx-5">.</span> <p className="">Expires
        Jan 24, 2024</p>
      </div>
    </div>
  );
}
