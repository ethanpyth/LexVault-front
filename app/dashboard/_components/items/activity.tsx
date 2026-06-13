import { SvgIconComponent } from "@mui/icons-material";

type Activity = {
  id: number;
  label: string;
  type: string;
  description: string;
  timestamp: string;
  icon: SvgIconComponent;
}

export function ActivityItem({ activity }: Readonly<{ activity: Activity }>) {
  const Icon = activity.icon;
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="size-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center border border-outline-variant shrink-0">
          <span className="material-symbol-outlined text-sm">
            <Icon />
          </span>
        </div>
        <div className="w-px h-full bg-outline-variant mt-2"></div>
      </div>
      <div className="pb-6">
        <p className="text-sm font-bold">
          {activity.label}
          <span className="text-primary font-extrabold">{activity.id}</span>
        </p>
        <p className="text-xs text-on-surface-variant mt-1">{activity.description}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-bold uppercase">{activity.type}</span>
          <span className="text-xs text-outline">{activity.timestamp}</span>
        </div>
      </div>
    </div>
  )
}