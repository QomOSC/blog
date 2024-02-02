"use client";

import clsx from "clsx";
import Logo from "./Logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRef, forwardRef } from "react";

const HeaderMobileMenu = forwardRef<HTMLDialogElement>((_, ref) => (
  <dialog ref={ref} className="modal">
    <div className="bg-white w-screen h-screen p-6 flex flex-col">
      <form method="dialog" className="text-left">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost">
          <X />
        </button>
      </form>

      <nav className="mt-24 text-center text-lg">
        <ul className="flex flex-col">
          <li className="p-4">
            <Link href="/">صفحه اصلی</Link>
          </li>

          <li className="mt-2 p-4">
            <Link href="/blog">وبلاگ</Link>
          </li>

          <li className="mt-2 p-4">
            <Link href="/events">رویدادها</Link>
          </li>

          <li className="mt-2 p-4">
            <Link href="/leaderboard">امتیازات</Link>
          </li>

          <li className="mt-2 p-4">
            <Link href="/about">درباره ما</Link>
          </li>
        </ul>
      </nav>
    </div>
  </dialog>
));

HeaderMobileMenu.displayName = "HeaderMobileMenu";

type HeaderProps = {
  className: string;
};

export default function Header({ className }: HeaderProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onMenuClick = () => {
    modalRef.current?.showModal();
  };

  return (
    <header className={clsx(className, "flex justify-between items-center")}>
      <Logo />

      <nav className="hidden xl:block">
        <ul className="flex">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>

          <li className="mr-8">
            <Link href="/blog">وبلاگ</Link>
          </li>

          <li className="mr-8">
            <Link href="/events">رویدادها</Link>
          </li>

          <li className="mr-8">
            <Link href="/leaderboard">امتیازات</Link>
          </li>

          <li className="mr-8">
            <Link href="/about">درباره ما</Link>
          </li>
        </ul>
      </nav>

      <button className="btn btn-ghost xl:hidden" onClick={onMenuClick}>
        <Menu />
      </button>

      <HeaderMobileMenu ref={modalRef} />
    </header>
  );
}
