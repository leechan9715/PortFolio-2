import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const DEFAULT_PDF_FILE = "/files/이승찬_이력서.pdf";

const getFileName = (file) => {
  if (!file || typeof file !== "string") return "PDF 파일";

  return decodeURIComponent(file.split("/").pop());
};

export const Pdf = ({
  isOpen,
  setIsOpen,
  title = "PDF 미리보기",
  file = DEFAULT_PDF_FILE,
  fileName = getFileName(file),
  pageWidth = 1024,
}) => {
  const [pdfInfo, setPdfInfo] = useState({ file: null, numPages: 0 });
  const numPages = pdfInfo.file === file ? pdfInfo.numPages : 0;

  const closePdf = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 cursor-pointer "
          onClick={closePdf}
        >
          <div
            className="relative w-full max-w-full h-[85vh] rounded-2xl border border-[#1F4360] bg-[#071A2A] overflow-hidden shadow-2xl "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#1F4360] px-5 py-4">
              <div>
                <h2 className="text-white font-bold">{title}</h2>
                <p className="mt-1 text-xs text-gray-400">{fileName}</p>
              </div>

              <button
                onClick={closePdf}
                className="text-gray-400 hover:text-white text-xl transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div
              className="
                    h-[calc(100%-57px)] overflow-y-auto overflow-x-hidden pb-20
                    project-list-scroll
                  "
            >
              <Document
                file={file}
                onLoadSuccess={({ numPages }) => setPdfInfo({ file, numPages })}
                loading={
                  <p className="text-center text-gray-400">
                    PDF를 불러오는 중입니다...
                  </p>
                }
                error={
                  <p className="text-center text-red-400">
                    PDF를 불러오지 못했습니다.
                  </p>
                }
              >
                <div className="flex flex-col items-center gap-6">
                  {Array.from({ length: numPages || 0 }, (_, index) => (
                    <div
                      key={`page_${index + 1}`}
                      className="overflow-hidden rounded-xl bg-white shadow-xl"
                    >
                      <Page
                        pageNumber={index + 1}
                        width={pageWidth}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                      />
                    </div>
                  ))}
                </div>
              </Document>
            </div>
            <a
              href={file}
              download={fileName}
              className="absolute right-5 bottom-5 rounded-full border border-[#4EA8FF] bg-[#071A2A]/95 px-5 py-2 text-sm font-semibold text-[#D8EEFF] shadow-xl shadow-black/30 transition-colors hover:border-[#8DD3FF] hover:bg-[#0B263D] hover:text-white"
            >
              PDF 다운로드
            </a>
          </div>
        </div>
      )}
    </>
  );
};
