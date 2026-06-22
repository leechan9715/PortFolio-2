export const ProjectLink = ({ link, label, onClick }) => {
  return (
    <a
      onClick={onClick}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="border border-[#1F4360] px-3 py-1 text-xs text-[#a4a4a4] hover:border-(--hover-border)"
    >
      <p>{label}</p>
    </a>
  );
};
