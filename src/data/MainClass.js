export const layoutClasses = {
  section:
    "flex flex-wrap items-center justify-between relative z-10 w-full rounded-2xl border-none border-(--border) px-10 py-5.25 gap-3.5 max-sm:py-3.25 max-sm:px-5",
  topRow: "flex w-full max-lg:flex-col max-lg:gap-2.5 max-md:gap-2.5",
  bottomRow:
    "w-full flex justify-between max-md:flex-col max-md:gap-2.5 max-lg:gap-2.5",
};

export const profileClasses = {
  card: "max-w-83 w-full max-lg:order-2 max-lg:max-w-none",
  body: "flex flex-col items-center text-center",
  image: "max-w-1/2 mb-6.5",
  role: "text-sm bg-clip-text text-transparent bg-(image:--text-color) bac mb-6.5",
  desc: "text-sm font-light mb-6.5",
  tags: "flex gap-1.5 items-center",
  tag: "text-sm bg-clip-text text-transparent bg-(image:--text-color) px-2 py-1 rounded-lg border border-(--border)",
};

export const heroClasses = {
  wrap: "flex items-center justify-center flex-col gap-3 flex-1 text-center tracking-widest max-lg:order-1 max-lg:w-full",
  meta: "flex items-center gap-5 mb-8  max-xl:grid max-xl:grid-cols-2 max-md:mb-2 max-xl:justify-items-center max-lg:flex max-md:grid max-md:grid-cols-2 ",
  metaItem: "flex items-center max-lg:gap-2.5 min-xl:gap-5",
  circle: "max-md:hidden min-lg:hidden min-xl:block",
  metaText: "font-extralight text-gray-300 text-sm ",
  name: "text-center text-7xl bg-clip-text text-transparent bg-(image:--main-title-color) font-bold max-xl:text-5xl max-lg:text-4xl max-md:text-3xl",
  line: "text-4xl font-semibold max-xl:text-3xl max-md:text-2xl",
  accent:
    "text-5xl bg-clip-text text-transparent bg-(image:--text-color) max-xl:text-4xl max-md:text-3xl",
  button:
    "text-gray-500 cursor-pointer [background:var(--button-bg)] border-2 border-(--border) px-14 py-2.5 rounded-lg duration-300 hover:[background:var(--button-hover)] hover:text-white hover:border-(--hover-border) max-md:px-8 max-md:py-1",
  buttonText: "font-bold text-2xl max-xl:text-xl max-md:text-lg",
};

export const projectClasses = {
  card: "max-w-83 w-full flex flex-col max-lg:order-3 max-lg:max-w-none",
  list: "flex flex-col gap-3",
};

export const contactClasses = {
  card: "max-w-83 w-full max-md:max-w-full",
  list: "flex flex-col gap-5.5",
};

export const processClasses = {
  card: "max-w-83 w-full flex flex-col max-md:max-w-full max-sm:hidden ",
  layout: "flex gap-3.5 ",
  rail: "flex flex-col items-center justify-center",
  step: "w-8 h-8 border border-(--border) text-sm rounded-full flex justify-center items-center before",
  line: "h-5 w-0.5 bg-(--border)",
  content: "flex flex-col justify-between items-start",
};

export const certClasses = {
  card: "max-w-83 w-full flex flex-col max-md:max-w-full max-sm:hidden",
  list: "flex flex-col gap-3 max-h-[140px] overflow-y-auto overscroll-contain project-list-scroll pr-1",
  item: "flex items-center gap-3.5 p-3 rounded-xl border border-(--border)",
  badge: "w-8 h-8 shrink-0 rounded-full border border-(--border) flex items-center justify-center text-sm font-bold bg-clip-text text-transparent bg-(image:--text-color)",
  name: "text-sm font-semibold",
  issuer: "text-xs text-gray-400 mt-0.5",
};

export const skillClasses = {
  wrap: "w-full min-w-0",
  panel: "w-full min-w-0 overflow-hidden bg-(--dark-gradient)",
  tile: "bg-(--deepdark-gradient) flex flex-col gap-1.5",
  icon: "skill-icon-image cursor-pointer",
  floatingIcon: "pointer-events-none fixed z-50 w-12",
};
