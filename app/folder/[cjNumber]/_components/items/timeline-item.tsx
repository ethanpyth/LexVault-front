import { SvgIconComponent, CalendarTodayOutlined } from "@mui/icons-material"

type TimelineItemProps = {
  status: string,
  icon: SvgIconComponent,
  description: string,
  délit: string,
  date: string,
  side: boolean,
  action: React.ReactNode
}

export default function TimelineItem(timelineItem: Readonly<TimelineItemProps>) {
  const Icon = timelineItem.icon
  const date = new Date(timelineItem.date).toLocaleDateString()

  return (
    <div className={`relative flex flex-col ${timelineItem.side ? "lg:flex-row-reverse" : "lg:flex-row"} group items-start`}>
      <div
        className="absolute left-5 -translate-x-1/2 lg:left-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-[3px] borer-error text-error z-10 shadow-md"
      >
        <span className="material-symbols-outlined text-[24px] font-bold">
          <Icon />
        </span>
      </div>
      <div
        className="w-full lg:w-[45%] bg-white p-7 rounded-2xl border-2 border-error/20 shadow-sm hover:shadow-lg hover:border-error/40 transition-all"
      >
        <div className="flex items-center justify-between mb-4">
          <time
            dateTime={date.toLocaleString()}
            className="font-bold text-error text-sm tracking-tight flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              <CalendarTodayOutlined />
            </span>{date}
          </time>
          <span className="px-3 py-1 rounded-full text- font-bold bg-error text-white uppercase tracking-widest shadow-sm">
            {timelineItem.status}
          </span>
        </div>
        <h4 className="font-bold text-on-surface text-xl mb-3 leading-snug">{ timelineItem.délit }</h4>
        <p className="text- text-on-surface-variant leading-relaxed mb-6">{ timelineItem.description }</p>
        { timelineItem.action }
      </div>
    </div>
  )
}