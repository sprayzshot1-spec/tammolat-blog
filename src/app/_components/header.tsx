import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link 
        href="/" 
        className="flex items-center gap-4 hover:opacity-80 transition-opacity text-slate-900 dark:text-slate-100"
      >
        {/* 🔴 استدعاء اللوجو الجديد، تم افتراض أن المقاس 50x50 */}
        <Image 
          src="/images/logo.png" 
          alt="لوجو تأملات وسط الضباب" 
          width={160} 
          height={160} 
          className="rounded-full object-cover" // تم إضافة rounded-full لجعله دائرياً بشكل أنيق
        />
        <span>وسط الضباب</span>
      </Link>
      <span className="mr-2 text-xl font-normal text-slate-500">
        .
      </span>
    </h2>
  );
}

export default Header;