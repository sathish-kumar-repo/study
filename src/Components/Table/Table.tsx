import { FC, ReactNode, useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./Table.css";

interface TableProps {
  children?: ReactNode;
  textAlign?: "left" | "center" | "right";
  file?: string;
}

interface RowData {
  [key: string]: string | number;
}

const Table: FC<TableProps> = ({ children, textAlign = "left", file }) => {
  const [data, setData] = useState<RowData[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchExcelData = async (fileUrl: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(fileUrl);
      const arrayBuffer = await response.arrayBuffer();
      const wb = XLSX.read(arrayBuffer, { type: "array" });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });

      if (jsonData.length > 0) {
        const [headerRow, ...bodyRows] = jsonData as (string[] | any[])[];
        setHeaders(headerRow as string[]);
        const formattedData = bodyRows.map((row) =>
          Object.fromEntries(headerRow.map((h, i) => [h, row[i]]))
        );
        setData(formattedData);
      }
    } catch (err) {
      console.error("Error fetching or parsing Excel file:", err);
      setError("Failed to load Excel data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (file && !children) {
      const fileUrl = `/study/excel/${file}`;
      fetchExcelData(fileUrl);
    }
  }, [file, children]);

  // Handle invalid usage
  if (file && children) {
    return (
      <div className="glass-table error-message">
        ⚠️ Error: Provide either `file` or `children`, not both.
      </div>
    );
  }

  return (
    <div className={`glass-table text-align-${textAlign}`}>
      <table>
        {file ? (
          <>
            {loading ? (
              <thead>
                <tr>
                  <td colSpan={headers.length} style={{ textAlign }}>
                    Loading...
                  </td>
                </tr>
              </thead>
            ) : error ? (
              <thead>
                <tr>
                  <td colSpan={headers.length} style={{ textAlign }}>
                    {error}
                  </td>
                </tr>
              </thead>
            ) : (
              <>
                <thead>
                  <tr>
                    {headers.map((header, index) => (
                      <th key={index} className="table-header">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr key={i}>
                      {headers.map((header, j) => (
                        <td key={j} className="table-cell">
                          {row[header]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </>
        ) : (
          <>{children}</>
        )}
      </table>
    </div>
  );
};

export default Table;
