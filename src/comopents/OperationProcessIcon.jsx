import Card from "./Card";

export const OperationProcessIcon = ({ src, title, desc }) => {
  return (
    <div className="flex gap-3 ">
      <Card style={{ padding: "8px" }}>
        <img className="max-w-6 h-6 w-full" src={src} alt="Icon1" />
      </Card>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
};
