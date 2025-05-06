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
  const url = `/study/excel/${file}`;
  const [data, setData] = useState<RowData[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch the Excel file, parse it, and update state
  const fetchExcelData = async (fileUrl: string) => {
    setLoading(true);

    try {
      const response = await fetch(fileUrl);
      const arrayBuffer = await response.arrayBuffer();
      const wb = XLSX.read(arrayBuffer, { type: "array" });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });

      if (jsonData.length > 0) {
        const [headerRow, ...bodyRows] = jsonData as (string[] | any)[];
        setHeaders(headerRow as string[]);
        const formattedData = bodyRows.map((row: any) => {
          return Object.fromEntries(
            headerRow.map((h: string, i: number) => [h, row[i]])
          );
        });
        setData(formattedData);
      }
    } catch (error) {
      console.error("Error fetching or parsing Excel file:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts or URL changes
  useEffect(() => {
    if (url) {
      fetchExcelData(url);
    }
  }, [url]);

  return (
    <div className={`glass-table text-align-${textAlign}`}>
      <table>
        {url ? (
          // If URL is provided, render table from the fetched Excel data
          <>
            {loading ? (
              <thead>
                <tr>
                  <td colSpan={headers.length} style={{ textAlign }}>
                    Loading...
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
          // If URL is not provided, render the children (static content)
          <>{children}</>
        )}
      </table>
    </div>
  );
};

export default Table;
