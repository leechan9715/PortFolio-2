import Card from "./Card";

export const ContactMe = ({ src, title, url, href }) => {
  return (
    <Card style={{ padding: "11px 7px" }} className="bg-(--deepdark-gradient)">
      <div className="flex flx-col items-center gap-4">
        <img
          className="max-w-1/6 w-full max-md:max-w-1/8"
          src={src}
          alt="Github"
        />
        <a href={href} target="_blank" rel="noreferrer">
          <p className="text-sm font-semibold ">{title}</p>
          <p className="text-xs text-[#a4a4a4]">{url}</p>
        </a>
      </div>
    </Card>
  );
};

export const ContactMe2 = ({ onClick, title, src, url }) => {
  return (
    <a
      href={url}
      onClick={(event) => {
        if (onClick) {
          event.preventDefault();
          onClick(event);
        }
      }}
    >
      <Card
        style={{ padding: "11px 7px" }}
        className="bg-(--deepdark-gradient)"
      >
        <div className="flex items-center gap-4">
          <img
            className="max-w-1/6 w-full max-md:max-w-1/8"
            src={src}
            alt={title}
          />
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-xs text-[#a4a4a4]">Download PDF</p>
          </div>
        </div>
      </Card>
    </a>
  );
};
