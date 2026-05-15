'use client'

type CardProps = {
    title: string;
    value: string;
    info: string;
    icon: React.ReactNode;
}

export default function Card({ title, value, info, icon }: Readonly<CardProps>) {
  return (
    <div className="bg-surface p-6 rounded border border-outline-variant shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="size-12 rounded bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">{info}</span>
      </div>
      <div className="mt-4">
        <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">{title}</p>
        <h3 className="text-3xl font-extrabold mt-1">{value}</h3>
      </div>
    </div>
  );
}