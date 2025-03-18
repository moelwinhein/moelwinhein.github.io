import { ProfileData as my } from "@/data/profile-data";

interface EducationItemProps {
  school: typeof my.education[number];
}

function EducationItem({ school }: EducationItemProps) {
  return (
    <div className="py-1 print:py-1">
      <div className="flex flex-col space-y-1.5 print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            {school.school}
          </h3>
          <div className="text-sm tabular-nums text-gray-500 print:text-[12px]">
            {school.start} - {school.end ?? "Present"}
          </div>
        </div>
      </div>
      <div className="text-pretty font-mono text-sm text-muted-foreground">
        <div className="mt-2 text-sm text-foreground/80 print:mt-1 print:text-[12px] text-pretty">
          {school.degree}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1 break-before-page">
      <h2 className="text-xl font-bold">Education</h2>
      <div className="space-y-4 print:space-y-0" role="feed">
        {my.education.map((currSchool) => (
          <article key={`${currSchool.school}`} role="article">
            <EducationItem school={currSchool}/>
          </article>
        ))}
      </div>
    </section>
  );
}
