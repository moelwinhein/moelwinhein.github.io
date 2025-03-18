import ProfileDetail from "@/app/components/profile-detail";
import Summary from "@/app/components/summary";
import WorkExperience from "@/app/components/work-experience";
import Education from "@/app/components/education";
import Certificates from "@/app/components/certificates";
import Skills from "@/app/components/skills";

export default function Home() {
  return (
    <div className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <ProfileDetail/>
        <Summary/>
        <WorkExperience/>
        <Skills/>
        <Education/>
        <Certificates/>
      </section>
    </div>
  );
}
