import CostBreakdown from "../cost-breakdown"
import PaymentMethodContainer from "../payment-method"

export default function Payments() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
      <CostBreakdown />
      <PaymentMethodContainer />
    </div>
  ) 
}