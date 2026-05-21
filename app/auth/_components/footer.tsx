export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant py-stack-md mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-stack-md max-w-container-max mx-auto px-gutter">
        <span className="font-button text-button text-primary">RDCongo</span>
        <div className="flex flex-wrap justify-center gap-stack-md">
          <a href="" className="font-label-caps text-label-caps text-on-secondary-container hover:underline transition-all">Mentions légales</a>
          <a href="" className="font-label-caps text-label-caps text-on-secondary-container hover:underline transition-all">Politique de confidentialité</a>
          <a href="" className="font-label-caps text-label-caps text-on-secondary-container hover:underline transition-all">Contact</a>
        </div>
        <p className="font-label-caps text-label-caps text-on-secondary-container text-center md:text-right opacity-70">
          © 2024 Secrétariat général du Ministère de la Justice
        </p>
      </div>
    </footer>
  )
}