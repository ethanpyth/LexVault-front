import LoginCard from "./_components/card/login-card"
import FooterMessage from "./_components/footer-message"

export default function Page() {
  return (
    <div className="w-full max-w-120 space-y-stack-md">
      <LoginCard />
      <FooterMessage />
      <div className=""></div>
    </div>
  )
}