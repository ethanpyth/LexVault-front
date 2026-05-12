type StatusProps = {
  status: string;
  infrastructure: string;
}

export default function StatusCard({ status }: { status: StatusProps }) {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2">
        <div className="size-2 rounded-full bg-emerald-600"></div>
        <span className="text-sm font-medium">{status.infrastructure}</span>
      </div>
      <span className="text-[10px] text-emerald-700 font-bold uppercase">{status.status}</span>
    </div>
  )
}