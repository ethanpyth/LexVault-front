import PaymentDetail from "./sections/payments-details"
import Notice from "./sections/notice-info"

export default function CostBreakdown() {
  return (
    <div className="md:cols-span-7 space-y-stack-lg">
      <PaymentDetail />
      <Notice />
    </div>
  )
}