import {
  AnalyticsBlock,
  Footer,
  GetItNowBlock,
  Header,
  PriceBlock,
  SeeOurBlock,
  SomeExelentblock,
  Tracker,
} from "@/shared/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SomeExelentblock />
      <AnalyticsBlock />
      <Tracker />
      <PriceBlock/>
      <SeeOurBlock/>
      <GetItNowBlock/>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
