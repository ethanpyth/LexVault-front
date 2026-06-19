import { FileDownloadOutlined } from '@mui/icons-material'
import Metrics from './_components/grid/metrics-grid'
import Filters from './_components/filters'
import Table from './_components/table'
import FooterBanner from './_components/footer-banner'
import { getAuditPerPage } from '@/app/lib/audits/action'
import { AuditData } from '@/app/lib/types'

type PageParamsProps = {
  page: string,
  pageSize: string,
  period?: string,
  action?: string,
  userId?: string,
}

export default async function Page({ searchParams }: Readonly<{ searchParams: Promise<PageParamsProps> }>) {
  const params = await searchParams;

  const result: AuditData = await getAuditPerPage({
    page: (params.page ?? 1).toString(),
    pageSize: (params.pageSize ?? 10).toString(),
    period: params.period,
    action: params.action,
    userId: params.userId,
  })

  return (
    <main className="flex-1 p-8 lg:p-12 overflow-y-auto bg-surface">
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-on-surface">Journal d&apos;audit</h2>
            <p className="text-on-surface-variant text-lg">
              Consultation des opérations du système pour la conformité règlementaire
            </p>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              title="Exporter au format PDF"
              className="flex items-center gap-2 px-6 py-2 border-primary text-primary rounded font-bold hover:bg-primary hover:text-on-primary transition-all"
            >
              <span className="material-symbols-outlined">
                <FileDownloadOutlined />
              </span>Exporter au format PDF
            </button>
            <button
              type="button"
              title="Actualiser"
              className="flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded font-bold hover:opacity-90"
            >
              Actualiser
            </button>
          </div>
        </div>
        <Metrics />
        <Filters />
        <Table
          audits={result.data}
          pagination={{
            page: Number(result.meta.page),
            pageSize: Number(result.meta.pageSize),
            total: Number(result.meta.total),
            pageCount: Number(result.meta.pageCount)
          }}
        />
        <FooterBanner />
      </div>
    </main>
  )
}