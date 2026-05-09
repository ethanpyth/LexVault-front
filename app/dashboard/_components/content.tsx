import Welcome from "./section/welcome"
import Stats from "./grid/stats"
import Grid from "./grid/main"

export default function Content() {
  return (
    <div className="p-8 space-y-8">
      <Welcome />
      <Stats />
      <Grid />
    </div>
  )
}