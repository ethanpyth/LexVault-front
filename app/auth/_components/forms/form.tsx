import { login } from "@/app/lib/user/auth/action"
import { PersonOutlined, LockOutlined, LoginOutlined } from "@mui/icons-material"

export default function Form() {
  return (
    <form action={login} className="space-y-stack-md">
      <div className="space-y-unit">
        <label htmlFor="agent-id" className="block font-label-caps text-label-caps text-on-surface-variant uppercase">
          Identifiant agent<span className="text-primary">*</span>
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-stack-sm flex items-center pointer-event-none">
            <span className="material-symbols-outlined text-outline">
              <PersonOutlined />
            </span>
          </span>
          <input
            type="text"
            name="agent-id"
            id="agent-id"
            placeholder="Ex: M.DUPONT-12345"
            className="w-full pl-10 pr-stack-sm py-stack-sm bg-surface-container-low border border-outline focus:ring-2 focus:ring-primary focus:border-primary border-b-2 rounded-none transition-all"
          />
        </div>
      </div>
      <div className="space-y-unit">
        <label htmlFor="pwd" className="block font-label-caps text-label-caps text-on-surface-variant uppercase">
          Mot de passe<span className="text-primary">*</span>
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-stack-sm flex items-center pointer-event-none">
            <span className="material-symbols-outlined text-outline">
              <LockOutlined />
            </span>
          </span>
          <input
            type="password"
            name="pwd"
            id="pwd"
            placeholder="••••••••"
            className="w-full pl-10 pr-stack-sm py-stack-sm bg-surface-container-low border border-outline focus:ring-2 focus:ring-primary focus:border-primary border-b-2 rounded-none transition-all"
          />
        </div>
        <div className="flex justify-end">
          <a href="./password-forgotten" className="font-label-caps text-label-caps text-primary hover:underline transition-all">
            Mot de passe oublié ?
          </a>
        </div>
      </div>
      <button
        type="submit"
        title="Bouton de soumission de formulaire"
        className="w-full bg-primary text-on-primary py-stack-sm font-button text-button flex justify-center items-center gap-stack-sm hover:bg-primary-container transition-all shadow-sm"
      >
        <span className="material-symbols-outlined" data-icon="login">
          <LoginOutlined />
        </span>Se connecter
      </button>
    </form>
  )
}