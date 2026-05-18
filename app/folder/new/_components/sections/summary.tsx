import IdentityRecapCard from "../card/identity-recap-card"
import LegalRecapCard from "../card/legal-recap-decision"
import DocumentsColumn from "../documents-column"

export default function Summary() {
  return (
    <div className="grid grid-cols-1 md :grid-cols-2 gap-stack-lg mb-12">
      <IdentityRecapCard />
      <LegalRecapCard />
      <DocumentsColumn />
    </div>
  )
}