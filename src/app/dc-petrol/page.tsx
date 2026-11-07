import { About } from "~/app/dc-petrol/_components/about";
import { BusinessLines } from "~/app/dc-petrol/_components/business-lines";
import { CompanyInfo } from "~/app/dc-petrol/_components/company-info";
import { Contact } from "~/app/dc-petrol/_components/contact";
import { Hero } from "~/app/dc-petrol/_components/hero";
import { Operations } from "~/app/dc-petrol/_components/operations";
import { SingaporeHub } from "~/app/dc-petrol/_components/singapore-hub";
import { SiteFooter } from "~/app/dc-petrol/_components/site-footer";
import { SiteHeader } from "~/app/dc-petrol/_components/site-header";
import { navData } from "~/data/site";

export default function ClassicPage() {
  return (
    <>
      <SiteHeader items={navData} />
      <main>
        <Hero />
        <About />
        <BusinessLines />
        <SingaporeHub />
        <Operations />
        <CompanyInfo />
        <Contact />
      </main>
      <SiteFooter items={navData} />
    </>
  );
}
