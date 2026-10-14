"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, school } from "@/lib/data";
import { asset } from "@/lib/base-path";

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-ink bg-white">
        <Image src={asset("/img/raposa.webp")} alt="" fill sizes="40px" className="scale-[1.6] object-cover object-[50%_22%]" />
      </span>
      <span className="font-display text-[1.35rem] font-semibold leading-none tracking-[-0.01em]">
        <span className="text-fox">Vila</span> <span className="text-cocoa">Raposa</span>
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a href="#visita" className="block bg-ink py-1.5 text-center text-[0.8rem] font-bold text-white">
        ✨ Matrículas abertas para 2027 · vagas limitadas →
      </a>
      <div className="px-4 pt-3">
        <div className="card mx-auto flex max-w-[1160px] items-center justify-between gap-4 !rounded-full bg-white py-2 pl-3 pr-2">
          <a href="#inicio" aria-label={school.name}>
            <Logo />
          </a>
          <nav className="hidden lg:block" aria-label="Menu principal">
            <ul className="flex items-center gap-5 text-[0.9rem] font-bold">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-coral">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#visita" className="btn hidden bg-sun !py-2 lg:inline-flex">
            Agende uma visita →
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative h-10 w-10 rounded-full border-2 border-ink bg-sun lg:hidden"
          >
            <span className={`absolute left-2.5 right-2.5 h-[2px] bg-ink transition-transform ${open ? "top-1/2 rotate-45" : "top-[calc(50%-4px)]"}`} />
            <span className={`absolute left-2.5 right-2.5 h-[2px] bg-ink transition-transform ${open ? "top-1/2 -rotate-45" : "top-[calc(50%+3px)]"}`} />
          </button>
        </div>
        {open && (
          <nav className="card mx-auto mt-2 max-w-[1160px] bg-white p-3 lg:hidden" aria-label="Menu principal">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-bold hover:bg-sun-soft">
                {n.label}
              </a>
            ))}
            <a href="#visita" onClick={() => setOpen(false)} className="btn mt-2 w-full justify-center bg-sun">
              Agende uma visita →
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
