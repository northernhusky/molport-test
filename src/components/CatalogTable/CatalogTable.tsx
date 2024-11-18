import React from "react";
import { CatalogItem } from "../../types/types";
import "./CatalogTable.css";

const CatalogTable: React.FC<{ catalog: CatalogItem[] }> = ({ catalog }) => {
  if (catalog.length === 0) {
    return <p className="no-data">No catalog data available</p>;
  }

  const headers = Object.keys(catalog[0]);

  return (
    <div className="catalog-table-container">
      <table className="catalog-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {catalog.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatalogTable;