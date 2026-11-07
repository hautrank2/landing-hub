import { About } from "~/app/_components/about";
import { BusinessLines } from "~/app/_components/business-lines";
import { CompanyInfo } from "~/app/_components/company-info";
import { Contact } from "~/app/_components/contact";
import { Hero } from "~/app/_components/hero";
import { Operations } from "~/app/_components/operations";
import { SingaporeHub } from "~/app/_components/singapore-hub";
import { SiteFooter } from "~/app/_components/site-footer";
import { SiteHeader } from "~/app/_components/site-header";
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
