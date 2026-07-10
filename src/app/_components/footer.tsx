import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 dark:border-slate-700 mt-16">
      <Container>
        <div className="py-10 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold tracking-tighter leading-tight mb-4 text-slate-800 dark:text-slate-200">
            تأملات وسط الضباب
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            جميع الحقوق محفوظة © 2026
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;