import clsx from "clsx";
import Logo from "./Logo";
import Link from "next/link";

type HeaderProps = {
  className: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header className={clsx(className, "flex justify-between items-center")}>
      <Logo />

      <nav>
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
    </header>
  );
}
