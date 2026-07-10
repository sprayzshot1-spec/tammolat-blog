import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline text-slate-900 dark:text-slate-100">
        وسط الضباب
      </Link>
      <span className="mr-2 text-xl font-normal text-slate-500">
        .
      </span>
    </h2>
  );
}

export default Header;