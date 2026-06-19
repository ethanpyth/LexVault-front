import { VerifiedUserOutlined } from "@mui/icons-material";

export default function FooterBanner() {
  return (
    <div className="bg-on-surface text-surface p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-primary">
      <div className="flex gap-6 items-center">
        <div className="size-16 bg-primary flex items-center justify-center text-on-primary">
          <span className="material-symbols-outlined text-4xl">
            <VerifiedUserOutlined />
          </span>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-black uppercase tracking-tight">
            Intégrité du système
          </h3>
          <p className="text-surface-dim font-medium max-w-xl">
            Le journal d&apos;audit est certifié et immuable. Une empreinte cryptographique a été générée le 20/10/2023 à 14:00:00.
          </p>
        </div>
      </div>
      <button
        type="button"
        title="Vérifier l'intégrité"
        className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary font-black uppercase tracking-widest hover:opacity-90 transition-all">
          Vérifier l&apos;intégrité
      </button>
    </div>
  )
}