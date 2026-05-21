import BrandingAnchor from "../branding-anchor"
import Form from "../forms/form"
import SecurityNotices from "../security-notices"

export default function LoginCard() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-stack-lg shadow-sm">
      <BrandingAnchor />
      <Form />
      <SecurityNotices />
    </div>
  )
}