import { AnimtionChar } from "@/components/main/animtion-char";
import { Button } from "@/components/main/button";
import { HomeBg } from "../../public/icon/home-bg";
import { ServicesCard } from "@/components/main/services-card";
import {
  ourServicesData,
  appTechnologiesData,
  erpData,
  appMobileData,
  uxUiData,
  uxUiTechData,
  opData,
  cosultingData,
  caruselData1,
  caruselData2,
} from "@/data/data";
import { AnimNumber } from "@/components/main/anim-number";
import { TeamBg } from "../../public/icon/team-bg";
import FadeInUp from "@/components/main/fadeInUp";
import { AppMobileCard } from "@/components/main/app-mobile-card";
import { TechnologiesCard } from "@/components/main/technologies-card";
import { ConsultingBg } from "../../public/icon/consulting-bg";
import { ToolsActiveBlock } from "@/components/main/tools-active-block";
import { Carusel } from "@/components/main/carusel";

export default function Home() {
  const metadata = {
    title: "  IT- Аутсориннг компания Udevs - IT консолтинг, и внедрение IT",
    description:
      "  IT- Аутсориннг компания Udevs - IT консолтинг, и внедрение IT",
  };
  return (
    <div className="scroll-smooth">
      <title>
        IT- Аутсориннг компания Udevs - IT консолтинг, и внедрение IT
      </title>
      <>
        <section className="tablet:py-[110px] py-[94px] mt-[64px] tablet:mt-[94px]">
          <div className="container">
            <div className="gap-6 flex flex-col tablet:flex-row justify-center tablet:justify-between items-center ">
              <div className="tablet:w-full tablet:mx-auto">
                <div className="tablet:max-w-[270px] max-w-[125px] mb-6 tablet:mb-12 w-full animate-fadeInUp">
                  <img
                    className="w-full "
                    src="/img/logo.svg"
                    alt="uDevs logo"
                  />
                </div>
                <h2 className="font-semibold animate-fadeInUp tablet:font-bold text-secondary text-2xl mb-4 tablet:mb-10 tablet:text-[40px]">
                  IT-Outsourcing Company
                </h2>
                <div className="tablet:mb-10 mb-6 animate-fadeInUp ">
                  <AnimtionChar
                    texts={[
                      "Optimization IT consulting infrastructure",
                      "IT consulting",
                      "Development of mobile applicications",
                      "Development and implementation ERP systems",
                      "User interface,User experience design",
                      "Optimization IT consulting infrastructure",
                    ]}
                  />
                </div>
                <Button
                  className={
                    "w-[40%] hidden tablet:block animate-fadeInUp font-semibold text-xl"
                  }
                >
                  <a href="#">Contact</a>
                </Button>
              </div>
              <div className="w-[90%] h-[350px] mx-auto">
                <HomeBg />
              </div>
            </div>
          </div>
        </section>
        <section id="directtion" className="py-[100px] ">
          <div className="container">
            <FadeInUp>
              <h2 className="text-center animate-fadeInUp tablet:text-left text-primary font-extrabold text-3xl tablet:text-[64px] leading-[64px] mb-[94px] ">
                Our Services
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-2 tablet:grid-cols-3 gap-3 justify-center">
              {ourServicesData?.map((item, i) => (
                <ServicesCard data={item} key={i} />
              ))}
            </div>
          </div>
        </section>
        <section id="team" className="py-[80px] bg-ma-white">
          <div className="container">
            <FadeInUp>
              <h2 className="text-center animate-fadeInUp tablet:text-left text-primary font-extrabold text-3xl tablet:text-[64px] leading-[64px] mb-[40px]">
                Team
              </h2>
            </FadeInUp>
            <div className=" tablet:grid tablet:grid-cols-2 flex flex-col-reverse">
              <div className="w-[70%] mx-auto tablet:w-full tablet:mx-0">
                <FadeInUp>
                  <p className="tablet:text-xl animate-fadeInUp text-base font-normal text-secondary mb-6 tablet:mb-7">
                    For each project, we form a team that includes a project
                    manager, business analyst, UI / UX designer, DevOps, QA
                    engineer, backend and front-end developers.
                  </p>
                </FadeInUp>
                <AnimNumber n="100" />
                <p className="font-extrabold animate-fadeInUp tablet:text-[40px] text-2xl tablet:leading-[72px] text-secondary">
                  Dedicated team
                </p>
              </div>
              <FadeInUp>
                <div className="animate-fadeInUp m-8 tablet:m-0 w-[70%] mx-auto tablet:w-full tablet:mx-0">
                  <TeamBg />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>
        <section id="services" className="tablet:py-[80px] py-6">
          <div className="container">
            <FadeInUp>
              <h2 className=" max-w-[55%] text-left tablet:max-w-[75%] animate-fadeInUp  text-primary font-extrabold  text-3xl tablet:text-[64px] tablet:leading-[64px] mb-[40px]">
                Development of mobile applications
              </h2>
            </FadeInUp>
            <div className="tablet:grid tablet:grid-cols-2 flex flex-col-reverse gap-20 tablet:mt-20 mt-5">
              <div>
                <FadeInUp>
                  <p className="tablet:text-xl animate-fadeInUp text-base font-normal text-secondary mb-10 tablet:mb-7">
                    In collaboration with startups, we have learned how to
                    create a creative and functional user interface for mobile
                    applications.
                  </p>
                </FadeInUp>
                <div className="flex items-center flex-wrap gap-4 tablet:mb-10 mb-4">
                  {appMobileData?.map((item, i) => (
                    <AppMobileCard key={i} data={item} />
                  ))}
                </div>
                <div>
                  <p className="font-extrabold text-secondary text-3xl mb-8">
                    Technologies
                  </p>
                  <div className="flex items-center gap-4">
                    {appTechnologiesData?.map((item, i) => (
                      <TechnologiesCard key={i} data={item} />
                    ))}
                  </div>
                </div>
              </div>
              <FadeInUp>
                <div className="bg-[url(/img/technolies-bg2.png)] bg-no-repeat flex justify-center bg-center rounded-3xl overflow-hidden z-0 relative">
                  <img className="z-20" src="/img/technologies-bg.png" />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>
        <section id="erp" className="tablet:py-[80px] py-6 bg-ma-white">
          <div className="container">
            <FadeInUp>
              <h2 className=" max-w-[55%] text-left tablet:max-w-[75%] animate-fadeInUp  text-primary font-extrabold  text-3xl tablet:text-[64px] tablet:leading-[64px] mb-[40px]">
                ERP systems
              </h2>
            </FadeInUp>
            <div className="tablet:grid tablet:grid-cols-2 tablet:gap-20  ">
              <FadeInUp>
                <div className="bg-[url(/img/technolies-bg2.png)] w-[70%] mb-6 tablet:mb-0 tablet:w-full  bg-no-repeat flex justify-center bg-center rounded-3xl overflow-hidden">
                  <img className="" src="/img/erp-bg.png" />
                </div>
              </FadeInUp>

              <div>
                <FadeInUp>
                  <p className="tablet:text-xl animate-fadeInUp text-base font-normal text-secondary mb-10 tablet:mb-6">
                    IT Systems of any level of complexity at a convenient time
                    for you
                  </p>
                </FadeInUp>
                <div className="flex flex-wrap gap-2 tablet:gap-4">
                  {erpData?.map((item, i) => (
                    <AppMobileCard key={i} data={item} className="!bg-husky" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ux/ui" className="tablet:py-[80px] py-6">
          <div className="container">
            <FadeInUp>
              <h2 className=" max-w-[55%] text-left tablet:max-w-[75%] animate-fadeInUp  text-primary font-extrabold  text-3xl tablet:text-[64px] tablet:leading-[64px] mb-[40px]">
                UX/UI design
              </h2>
            </FadeInUp>
            <div className="tablet:grid tablet:grid-cols-2 justify-between flex flex-col-reverse tablet:mt-20 mt-5">
              <div>
                <FadeInUp>
                  <p className="tablet:text-2xl w-[80%] animate-fadeInUp text-base font-medium text-secondary mb-10 tablet:mb-7">
                    Our company takes a human-centered approach to design
                  </p>
                </FadeInUp>
                <div className="flex items-center flex-wrap gap-4 tablet:mb-10 mb-4">
                  {uxUiData?.map((item, i) => (
                    <AppMobileCard key={i} data={item} />
                  ))}
                </div>
                <div>
                  <p className="font-extrabold text-secondary text-3xl mb-8">
                    Technologies
                  </p>
                  <div className="flex items-center gap-4 w-full">
                    {uxUiTechData?.map((item, i) => (
                      <TechnologiesCard key={i} data={item} />
                    ))}
                  </div>
                </div>
              </div>
              <FadeInUp>
                <div className="bg-[url(/img/technolies-bg2.png)] bg-no-repeat flex justify-center bg-center rounded-3xl overflow-hidden z-0 relative">
                  <img className="z-20" src="/img/technologies-bg.png" />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>
        <section
          id="optimization"
          className="tablet:py-[80px] py-6 bg-ma-white"
        >
          <div className="container">
            <FadeInUp>
              <h2 className=" max-w-[55%] text-left tablet:max-w-[75%]   text-primary font-extrabold  text-3xl tablet:text-[64px] tablet:leading-[64px] mb-[60px]">
                Optimization Infrastructure
              </h2>
            </FadeInUp>
            <div className="tablet:grid  tablet:grid-cols-2 tablet:gap-20">
              <FadeInUp>
                <div className="bg-[url(/img/technolies-bg2.png)] py-28  mb-6 tablet:mb-0 tablet:w-full  bg-no-repeat flex justify-center bg-center rounded-3xl overflow-hidden">
                  <img className="w-[90%]" src="/img/erp-bg.png" />
                </div>
              </FadeInUp>
              <div>
                <FadeInUp>
                  <p className="tablet:text-xl animate-fadeInUp text-base font-normal text-secondary mb-10 tablet:mb-6">
                    Our experienced professionals will help you optimize your
                    infrastructure
                  </p>
                </FadeInUp>
                <div className="flex flex-wrap gap-2 tablet:gap-4">
                  {opData?.map((item, i) => (
                    <AppMobileCard key={i} data={item} className="!bg-husky" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="consulting" className="tablet:py-[80px] py-6">
          <div className="container">
            <FadeInUp>
              <h2 className=" max-w-[55%] text-left tablet:max-w-[75%] animate-fadeInUp  text-primary font-extrabold  text-3xl tablet:text-[64px] tablet:leading-[64px] mb-[40px]">
                IT consulting
              </h2>
            </FadeInUp>
            <div className="tablet:grid tablet:grid-cols-2 justify-between flex flex-col-reverse tablet:mt-20 mt-5">
              <div>
                <FadeInUp>
                  <p className="tablet:text-2xl w-[80%] animate-fadeInUp text-base font-medium text-secondary mb-10 tablet:mb-7">
                    Our company takes a human-centered approach to design
                  </p>
                </FadeInUp>
                <div className="flex items-center flex-wrap gap-4">
                  {cosultingData?.map((item, i) => (
                    <AppMobileCard key={i} data={item} />
                  ))}
                </div>
              </div>
              <FadeInUp>
                <div className="flex justify-center">
                  <ConsultingBg />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>
        <section id="tools" className="tablet:py-[80px] py-6 bg-ma-white">
          <div className="container">
            <FadeInUp>
              <h2 className=" max-w-[55%] text-left tablet:max-w-[75%] animate-fadeInUp  text-primary font-extrabold  text-3xl tablet:text-[64px] tablet:leading-[64px] mb-[40px]">
                Tools
              </h2>
            </FadeInUp>
            <FadeInUp>
              <ToolsActiveBlock />
            </FadeInUp>
          </div>
        </section>
        <section
          id={"clients"}
          className="tablet:py-[80px] py-6 overflow-x-hidden"
        >
          <div className="container">
            <FadeInUp>
              <h2 className=" max-w-[55%] text-left tablet:max-w-[75%] animate-fadeInUp  text-primary font-extrabold  text-3xl tablet:text-[64px] tablet:leading-[64px] mb-[30px] tablet:mb-[80px]">
                Our Clients
              </h2>
            </FadeInUp>
          </div>
          <>
            <FadeInUp className="mb-6">
              <Carusel data={caruselData1} bool={false} />
            </FadeInUp>
            <FadeInUp>
              <Carusel data={caruselData2} bool={true} />
            </FadeInUp>
          </>
        </section>
        <section id="delever" className="tablet:py-[80px] py-6 bg-ma-white">
          <div className="container">
            <FadeInUp>
              <h2 className="   text-smashing-pumpkins  text-right font-extrabold  text-3xl tablet:text-[64px] tablet:leading-[64px] mb-[60px]">
                Delever
              </h2>
            </FadeInUp>
            <div className="tablet:grid  tablet:grid-cols-2 tablet:gap-20">
              <FadeInUp>
                <div className="bg-[url(/img/technolies-bg2.png)]   mb-6 tablet:mb-0 tablet:w-full  bg-no-repeat flex justify-center bg-center rounded-3xl overflow-hidden">
                  <img className="w-[90%]" src="/img/erp-bg.png" />
                </div>
              </FadeInUp>
              <div>
                <FadeInUp>
                  <p className="tablet:text-xl animate-fadeInUp text-base font-normal text-secondary mb-10 tablet:mb-6">
                    Our experienced professionals will help you optimize your
                    infrastructure
                  </p>
                </FadeInUp>
                <div className="flex items-center flex-wrap gap-4">
                  {cosultingData?.map((item, i) => (
                    <AppMobileCard key={i} data={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
// /
