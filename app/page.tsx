import {
  AnalyticsBlock,
  Footer,
  Header,
  SomeExelentblock,
} from "@/shared/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SomeExelentblock />
      <AnalyticsBlock />

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
