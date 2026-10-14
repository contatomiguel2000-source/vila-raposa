"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/data";

const groups = ["Berçário (a partir de 4 meses)", "Educação Infantil (até 5 anos)"];

/** Sem backend: monta a mensagem e abre o WhatsApp da escola. */
export function VisitForm() {
  const [f, setF] = useState({ name: "", child: "", age: "", group: "", msg: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Olá! Gostaria de agendar uma visita ao Vila Raposa. 🦊",
      `Responsável: ${f.name}`,
      f.child && `Criança: ${f.child}`,
      f.age && `Idade: ${f.age}`,
      f.group && `Turma de interesse: ${f.group}`,
      f.msg,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const label = "mb-1.5 block text-[0.85rem] font-bold";
  const field = "w-full rounded-xl border-2 border-ink bg-white px-3 py-2.5 text-[0.95rem] placeholder:text-muted/60 focus:outline-none focus:ring-4 focus:ring-sun/60";

  return (
    <form onSubmit={submit} className="card grid gap-4 bg-white p-5 sm:grid-cols-2 md:p-6">
      <div className="sm:col-span-2">
        <label htmlFor="f-name" className={label}>Seu nome</label>
        <input id="f-name" required value={f.name} onChange={set("name")} placeholder="Nome do responsável" className={field} />
      </div>
      <div>
        <label htmlFor="f-child" className={label}>Nome da criança</label>
        <input id="f-child" value={f.child} onChange={set("child")} placeholder="Opcional" className={field} />
      </div>
      <div>
        <label htmlFor="f-age" className={label}>Idade</label>
        <input id="f-age" value={f.age} onChange={set("age")} placeholder="Ex.: 1 ano e 3 meses" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-group" className={label}>Turma</label>
        <select id="f-group" value={f.group} onChange={set("group")} className={field}>
          <option value="">Selecione</option>
          {groups.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-msg" className={label}>Mensagem</label>
        <textarea id="f-msg" rows={3} value={f.msg} onChange={set("msg")} placeholder="Melhor dia e horário para a visita" className={`${field} resize-none`} />
      </div>
      <button type="submit" className="btn justify-center bg-coral text-white sm:col-span-2">
        Agendar pelo WhatsApp →
      </button>
    </form>
  );
}
