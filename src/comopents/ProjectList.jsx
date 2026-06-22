import Card from "./Card";
import { ProjectLink } from "./ProjectLink";

export const ProjectList = ({
  onClick,
  title,
  desc,
  href,
  src,
  skills = [],
}) => {
  return (
    <Card
      className="flex  gap-2 flex-col max-md:flex-col"
      style={{ padding: 15 }}
    >
      <a target="_blank" rel="noreferrer" href={href} onClick={onClick}>
        <img className=" w-full" src={src} alt="ProjectImg" />
      </a>
      <div className="flex flex-col items-start gap-1.5 max-md:items-center">
        <h3 className="font-bold text-xs">{title}</h3>
        <h4 className="text-xs text-[#a4a4a4]">{desc}</h4>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((item, index) => (
            <ProjectLink key={index} label={item} />
          ))}
        </div>
      </div>
    </Card>
  );
};
