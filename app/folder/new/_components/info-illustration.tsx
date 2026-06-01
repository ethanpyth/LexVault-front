import Image from "next/image"

export default function InformationalIllustration() {
  return (
    <div className="mt-stack-md">
      <div className="h-64 w-full bg-surface-variant rounded-lg overflow-hidden relative">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6vvKTv8jsCb3BfuvX6rWRa8_zICMNRCwOVCmv0HetQ2s9c2tuA42mkrVuJFZxLizCRe8VW0iuzuqeCOyPQvjOlAgnEGPop6ix14HYjczH6l8ezwpChpdg4blEjBEMvYWklT9OfbTvVAy--e2pryL8SubYCrsyv9tTvyqXgxbufZd0EmkioOapi6InbFfNAzxu73ddFJTZrAAaoXceJJ8QUlzEknf7Ss3-ggAaFY7xE4paLOxdjgGfCs5HVsRJwkqDHqYijdjz-_iU"
          alt="Institutional Legal Environment"
          fill
          sizes="(max-w: 896px) 100vw, 896px"
          loading="eager"
          data-alt="A professional, high-end photography of a modern courthouse interior with clean architectural lines and soft natural lighting. The scene features a combination of warm wood textures and cool stone surfaces, reflecting the institutional rigor and stability of the French Ministry of Justice. The color palette is dominated by deep blues and neutral grays, creating a serene and authoritative atmosphere that aligns with the digital interface's aesthetic."
          className="w-full h-full object-cover mix-blend-multiply opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/40 to-transparent flex items-center p-stack-lg">
          <div className="max-w-sm text-white">
            <h4 className="font-h3 text-h3 mb-2">
              Rigueur et éxactitude
            </h4>
            <p className="font-body-md text-body-md">
              Veillez à ce que les informations saisies correspondent exactement au dispositif de la décision jointe au dossier.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}