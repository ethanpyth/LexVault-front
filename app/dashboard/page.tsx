import Content from "./_components/content";
import Footer from "./_components/footer";
import Header from "./_components/header";

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col overflow-y-auto">
      <Header/>
      <Content/>
      <Footer/>
    </main>
  );
}