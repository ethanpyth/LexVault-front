import { NotificationsOutlined } from "@mui/icons-material";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-8 bg-surface border-b border-outline variant sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-bold">Apercu de l&apos;activité</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative group">
          <span className="material-icons-outlined text-on-surface-variant hover:text-on-surface cursor-pointer">
            <NotificationsOutlined />
          </span>
          <span className="absolute -top-1 -right-1 size-2 bg-error rounded-full">
          </span>
        </div>
        <div className="h-8 w-px bg-outline-variant"></div>
        <div className="flex items-center gap-3">
          <div className="text-right"></div>
          <div className="size-10 rounded-full border border-outline-variant overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYJwV2APeQcy9LGf3S5JdGp6EGo9ffYURdWsnJrondjt1XhJPvP-tL5HfSMPpvNaR3QVdBY8oipKqqQRS_2QplTu07GIwBQQdWYDD3_ewyUWxNu4_AZzp8str0FneGlV16Ro-le8vUPcDr9S75L4o8AgSUN6-2T0H2y9xAepqR7B0jEasm9jCwhVf76mM6C5RuRMP7s79f9YJVazDLbyHtkZmi8FgeQlZ9lji2L2mBmDsA_YJMF_O_b9rLOzanXhzD3utBtlzUiQHd"
              alt="Profil de l'utilisateur"
              className="w-full h-full object-cover"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </header>
  )
}