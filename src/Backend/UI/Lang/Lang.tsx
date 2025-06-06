import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Table from "../Table/Table";
import styles from "./Lang.module.scss";

type ViewType = "Table" | "Sentence";
type Sentence = { eng: string; tam: string };
interface Lang {
  primary: string;
  secondary: string;
}
interface LangProps {
  lang?: Lang;
  type?: ViewType;
  sentences: Sentence[];
}

const ITEMS_PER_PAGE = 10;

const Lang: React.FC<LangProps> = ({
  type = "Sentence",
  lang = { primary: "English", secondary: "Tamil" },
  sentences,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize view type from URL or fallback default
  const initialViewType = (searchParams.get("view") as ViewType) || type;

  // Initialize search term from URL or empty string
  const initialSearch = searchParams.get("search") || "";

  // Initialize page from URL (1-based), convert to 0-based internally
  const initialPage = Number(searchParams.get("page") || "1") - 1;

  const [viewType, setViewType] = useState<ViewType>(initialViewType);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [currentPage, setCurrentPage] = useState(
    initialPage >= 0 ? initialPage : 0
  );

  // Update URL params when viewType, searchTerm, or currentPage changes
  useEffect(() => {
    const params: any = {};

    if (viewType !== type) params.view = viewType;
    if (searchTerm.trim() !== "") params.search = searchTerm.trim();
    if (currentPage !== 0) params.page = (currentPage + 1).toString();

    setSearchParams(params);
  }, [viewType, searchTerm, currentPage, setSearchParams, type]);

  // Filter sentences by search term (case insensitive)
  const filtered = sentences.filter(
    (s) =>
      s.eng.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.tam.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const pageItems = filtered.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  // Handle page change from pagination component
  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(0); // Reset page on search change
          }}
        />
        <button
          className={styles.toggleBtn}
          onClick={() => {
            setViewType(viewType === "Sentence" ? "Table" : "Sentence");
            setCurrentPage(0);
          }}
        >
          Switch to {viewType === "Sentence" ? "Table" : "Sentence"} View
        </button>
      </div>

      {viewType === "Sentence" ? (
        <div className={styles.sentenceContainer}>
          {pageItems.map((sentence, index) => (
            <div className={styles.sentence} key={`sentence-${index}`}>
              <div className={styles.primary}>{sentence.eng}</div>
              <div className={styles.secondary}>{sentence.tam}</div>
            </div>
          ))}
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>{lang.primary}</th>
              <th>{lang.secondary}</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((sentence, index) => (
              <tr key={`sentence-${index}`}>
                <td>{sentence.eng}</td>
                <td>{sentence.tam}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next ▶"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="◀ Prev"
          containerClassName={styles.pagination}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabled}
          // breakClassName={styles.ellipsis}
          forcePage={currentPage} // Important: sync UI to currentPage state (0-based)
        />
      )}
    </div>
  );
};

export default Lang;
