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
