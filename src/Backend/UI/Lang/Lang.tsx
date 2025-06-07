import { useState, useMemo } from "react";
import ReactPaginate from "react-paginate";
import Table from "../Table/Table";
import styles from "./Lang.module.scss";
import HighlightMatch from "../../components/HighlightMatch";
import SearchBar from "../../components/SearchBar/SearchBar";

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
  const [viewType, setViewType] = useState<ViewType>(type);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  // 🔍 Filter sentences
  const filtered = useMemo(
    () =>
      sentences.filter(
        (s) =>
          s.eng.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.tam.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, sentences]
  );

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  const safePage = Math.min(Math.max(0, currentPage), pageCount - 1);

  const pageItems = filtered.slice(
    safePage * ITEMS_PER_PAGE,
    (safePage + 1) * ITEMS_PER_PAGE
  );

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={(value) => {
            setSearchTerm(value);
            setCurrentPage(0);
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

      {filtered.length === 0 ? (
        <div className={styles.noResult}>No result found.</div>
      ) : viewType === "Sentence" ? (
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
                <td>
                  <HighlightMatch text={sentence.eng} query={searchTerm} />
                </td>
                <td>
                  <HighlightMatch text={sentence.tam} query={searchTerm} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="▶"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="◀"
          containerClassName={styles.pagination}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabled}
          forcePage={safePage}
        />
      )}
    </div>
  );
};

export default Lang;
