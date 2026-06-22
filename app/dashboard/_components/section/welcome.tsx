import { User } from "@/app/lib/types"
import { getCurrentUser } from "@/app/lib/user/action"

export default async function Welcome() {
  const user: User = await getCurrentUser()

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-on-surface">
        Bienvenue sur votre tableau de bord, {`${user.personne.nom} ${user.personne.prenom} `}!
      </h1>
      <p className="text-on-surface-variant mt-1 text-lg">
        L&apos;infrastructure nationale de traitement des casiers est stable.
      </p>
    </div>
  )
}