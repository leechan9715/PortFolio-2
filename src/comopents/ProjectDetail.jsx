import Card from "./Card";
import { ProjectLink } from "./ProjectLink";
const TextWithBreak = ({ text, className }) => {
  if (!text) return null;

  const lines = text.split("<br/>");

  return (
    <p className={className}>
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index !== lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
};
export const ProjectDetail = ({
  className,
  itemsClassName,
  thumbnail,
  title,
  desc,
  items,
  links,
  onClick,
  textArea,
}) => {
  return (
    <Card
      className={`flex min-w-0 items-stretch gap-6 overflow-hidden ${className}`}
      style={{ padding: 0, border: "none" }}
    >
      <div className={`max-w-1/3 overflow-y-auto ${itemsClassName}`}>
        <img
          className="w-full h-full rounded-2xl border-2 border-(--border) bg-white/95 "
          src={thumbnail}
          alt={thumbnail}
        />
      </div>
      <div
        className={`project-list-scroll flex max-h-screen max-w-2/3 w-full flex-1 flex-col overflow-y-auto p-8 gap-4 ${itemsClassName} `}
      >
        <div className="flex justify-between items-center-safe">
          <h2 className=" text-4xl font-bold tracking-wide text-white">
            {title}
          </h2>
          <div className="grid grid-cols-6 gap-2 text-center">
            {links?.map((item, index) => (
              <ProjectLink
                key={index}
                onClick={(event) => onClick?.(item, event)}
                label={item.label}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <p className=" text-lg leading-8 text-gray-200">{desc}</p>

        <ul className=" grid gap-2 text-sm text-gray-300">
          {items.map((item, index) => (
            <li key={index}>
              <p className="flex gap-2">
                <span className="min-w-20 text-[#4EA8FF]">{item.label}</span>
                <span>{item.value}</span>
              </p>
            </li>
          ))}
        </ul>
        <TextWithBreak
          text={textArea}
          className="text-base leading-7 text-gray-300"
        />
      </div>
    </Card>
  );
};
