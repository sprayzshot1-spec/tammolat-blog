'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function IndexMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-40 p-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform flex items-center gap-2 group"
        title="فهرس المدونة"
      >
        <span className="hidden md:block text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute left-14 whitespace-nowrap bg-slate-800 text-white px-2 py-1 rounded">
          الفهرس
        </span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 transition-opacity backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div 
        className={`fixed top-0 right-0 w-[85vw] md:w-96 h-full bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8 border-b pb-4 dark:border-slate-800">
            <h2 className="text-2xl font-bold">فهرس المدونة</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                📚 السلاسل والمقالات
              </h3>
              <ul className="space-y-4 pr-4 border-r-2 border-slate-100 dark:border-slate-800">
                <li>
                  <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">هل انتصرت مصر علي الارجنتين</div>
                  <ul className="space-y-2 pr-4 border-r border-slate-200 dark:border-slate-700">
                    <li>
                      <Link 
                        href="/posts/egypt-argentina-01" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الأول: صفارة الإنذار
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">عوالم اياك نعبد واياك نستعين</div>
                  <ul className="space-y-2 pr-4 border-r border-slate-200 dark:border-slate-700">
                    <li>
                      <Link 
                        href="/posts/eyaka-naaboud-part-1" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الأول: عتبات الدخول
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/eyaka-naaboud-part-2" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثاني: التدريب وتدرج اليقين
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/eyaka-naaboud-part-3" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثالث
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/eyaka-naaboud-part-4" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الرابع
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/eyaka-naaboud-part-5" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الخامس
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/eyaka-naaboud-part-6" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء السادس
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/eyaka-naaboud-part-7" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء السابع
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/eyaka-naaboud-part-8" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثامن
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/eyaka-naaboud-part-9" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء التاسع: جندي الرعب
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/eyaka-naaboud-part-10" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء العاشر: سر المغضوب عليهم
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2"> رقعة الشطرنج الأخيرة</div>
                  <ul className="space-y-2 pr-4 border-r border-slate-200 dark:border-slate-700">
                    <li>
                      <Link 
                        href="/posts/last-chessboard-part-1" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الأول: أول حجر دومينو
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/last-chessboard-part-2" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثاني: لماذا بدأت القصة من بابل؟
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/last-chessboard-part-3" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثالث: شفرة الهيكل
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/last-chessboard-part-4" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الرابع: معادلة الإسراء
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/last-chessboard-part-5" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الخامس: لماذا لا تتطابق التفسيرات ؟
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/last-chessboard-part-6" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء السادس: التاريخ الخفي؟
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">انا والآخر ( إشكالية العقل والنقل )</div>
                  <ul className="space-y-2 pr-4 border-r border-slate-200 dark:border-slate-700">
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-1" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الأول
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-2" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثاني
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-3" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثالث
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-4" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الرابع
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-5" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الخامس
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-6" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء السادس
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-7" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء السابع
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-8" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثامن
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-9" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء التاسع
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-10" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء العاشر
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-11" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الحادي عشر
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-12" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثاني عشر
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/me-and-other-part-13" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثالث عشر
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">التحذير الأخير</div>
                  <ul className="space-y-2 pr-4 border-r border-slate-200 dark:border-slate-700">
                    <li>
                      <Link 
                        href="/posts/final-warning-part-1" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الأول: ترمينيتور 84
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/final-warning-part-2" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثاني: اضحك وابكي
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/final-warning-part-3" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثالث: وشهد شاهد من أهلها
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/final-warning-part-4" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الرابع: الإله..الإنسان.. الآلة
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">الهرم المقلوب</div>
                  <ul className="space-y-2 pr-4 border-r border-slate-200 dark:border-slate-700">
                    <li>
                      <Link 
                        href="/posts/inverted-pyramid-part-1" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الأول: صورة تخيلية
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/inverted-pyramid-part-2" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثاني: اكبر اختبار جماعي في التاريخ
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/inverted-pyramid-part-3" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثالث: مخبا القيامة 
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">طاقة التكوين</div>
                  <ul className="space-y-2 pr-4 border-r border-slate-200 dark:border-slate-700">
                    <li>
                      <Link 
                        href="/posts/creation-energy-part-1" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الأول: بين السلب والايجاب
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/creation-energy-part-2" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثاني: ملف اسكوديرو 
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">التفكير الجانبي</div>
                  <ul className="space-y-2 pr-4 border-r border-slate-200 dark:border-slate-700">
                    <li>
                      <Link 
                        href="/posts/lateral-thinking-part-1" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الأول: العقل والجمال
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/posts/lateral-thinking-part-2" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm" 
                        onClick={() => setIsOpen(false)}
                      >
                        - الجزء الثاني: في الميزان المرض النفسي
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
