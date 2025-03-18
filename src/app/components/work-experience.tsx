import { ProfileData as my } from "@/data/profile-data";

interface WorkExperienceItemProps {
  work: typeof my.work[number];
}

function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  return (
    <div className="py-1 print:py-1">
      <div className="flex flex-col space-y-1.5 print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <a className="hover:underline" href={work.link} target="_blank" rel="noopener noreferrer">
              {work.company}
            </a>
          </h3>
          <div className="text-sm tabular-nums text-gray-500 print:text-[12px]">
            {work.start} - {work.end ?? "Present"}
          </div>
        </div>
        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {work.title}
        </h4>
      </div>
      <div className="text-pretty font-mono text-sm text-muted-foreground">
        <div className="mt-2 text-sm text-foreground/80 print:mt-1 print:text-[12px] text-pretty">
          <ul className="list-outside list-disc pl-3">
            {
              work.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
      <h2 className="text-xl font-bold">Work Experience</h2>
      <div className="space-y-4 print:space-y-0" role="feed">
        {my.work.map((currWork) => (
          <article key={`${currWork.company}-${currWork.start}`} role="article">
            <WorkExperienceItem work={currWork}/>
          </article>
        ))}
      </div>
    </section>
  );
}
