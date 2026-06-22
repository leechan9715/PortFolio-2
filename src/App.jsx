import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Main } from "./comopents/Main";
import { SubPage } from "./comopents/SubPage";

function App() {
  const { isMainHidden, isTransitioning } = useSelector((state) => state.ui);

  const absoluteBg = useRef(null);

  useEffect(() => {
    const element = absoluteBg.current;
    if (!element) return;

    element.style.transition = "opacity 0.5s ease";

    document.body.classList.toggle("bg-2-active", isTransitioning);

    if (isTransitioning) {
      element.style.opacity = "0";

      const timer = setTimeout(() => {
        element.style.display = "none";
      }, 500);

      return () => {
        clearTimeout(timer);
        document.body.classList.remove("bg-2-active");
      };
    }

    element.style.display = "";
    void element.offsetWidth;
    element.style.opacity = "1";

    return () => {
      document.body.classList.remove("bg-2-active");
    };
  }, [isTransitioning]);

  return (
    <div
      className={`relative min-h-screen flex px-6.25 max-md:px-2.25 ${isMainHidden ? "py-0" : "py-2.5"}`}
    >
      <div
        className="absolute inset-0 z-0 [background:var(--full-absolute-bg)]"
        ref={absoluteBg}
        style={{ opacity: 1 }}
      />
      {!isMainHidden && <Main />}
      {isMainHidden && <SubPage />}
    </div>
  );
}

export default App;
