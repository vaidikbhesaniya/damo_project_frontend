"use client";
import Image from "next/image";
import Button from "@components/Button";
import Link from "next/link";
const LogoAndInfo = () => {
  return (
    <div className="w-full py-2 px-4">
      <div className="flex justify-between max-w-screen-xl items-center mx-auto w-full">
        <Link href={"/"}>
          <Image
            src={"/Logo.jpg"}
            alt="Markham college of commerce"
            width={100}
            height={100}
          />
        </Link>
        <text className="text-3xl"> Sri Ramakrishna Matriculation Higher Secondary School</text>
        <div className="hidden md:flex items-center gap-4">
          <Button href={"/admin/login"} text={"Admin LogIn"} />
          {/* <Button href={"/student/login"} text={"Log In"} /> */}
        </div>
      </div>
    </div>
  );
};

export default LogoAndInfo;
