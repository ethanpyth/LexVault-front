import PaymentMethodSection from "./sections/payment-methods" 

export default function PaymentMethodContainer() {
  return (
    <div className="md:col-span-5 space-y-stack-lg">
      <PaymentMethodSection />
    </div>
  )
}