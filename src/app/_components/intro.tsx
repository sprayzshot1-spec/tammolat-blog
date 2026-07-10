import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex items-center gap-6">
        <Image 
          src="/images/logo.png" 
          alt="لوجو تأملات وسط الضباب" 
          width={160} 
          height={160} 
          className="rounded-full object-cover shadow-lg" 
        />
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
          وسط الضباب.
        </h1>
      </div>
      {/* 🔴 تم تعديل الحجم إلى text-2xl للموبايل و md:text-3xl للشاشات الكبيرة */}
      <h4 className="text-center md:text-right text-2xl md:text-3xl mt-5 md:pl-8 text-slate-600 dark:text-slate-400">
        تأملات أحمد شاكر
      </h4>
    </section>
  );
}