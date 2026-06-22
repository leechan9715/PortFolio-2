import { forwardRef } from "react";

export const Card = forwardRef(function Card(
  { children, className, style, onClick },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`border border-(--border) bg-(--dark-gradient) px-7.5 py-4 rounded-[10px] hover:border-(--hover-border) duration-300 cursor-pointer ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

export const Circle = ({ className }) => {
  return <div className={`h-1 w-1 rounded-full bg-[#008cff] ${className}`} />;
};

export const CardTitleBlue = ({ children = "프로필", style }) => {
  return (
    <div className="flex items-center gap-2 mb-4.25" style={style}>
      <div className="h-2 w-2 rounded-full bg-[#78D6FF]" />
      <h3 className="text-lg font-semibold ">{children}</h3>
    </div>
  );
};
export const CardTitleGreen = ({ children = "프로필", style }) => {
  return (
    <div className="flex items-center gap-2 mb-4.25" style={style}>
      <div className="h-2 w-2 rounded-full bg-[#18c688]" />
      <h3 className="text-lg font-semibold ">{children}</h3>
    </div>
  );
};

export default Card;
