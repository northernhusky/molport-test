import React from "react";
import { parseExcelFile } from "../../utils/excelParser";
import { CatalogItem } from "../../types/types";
import "./CatalogUpload.css";

const CatalogUpload: React.FC<{
  onUploadCatalog: (catalog: CatalogItem[]) => void;
}> = ({ onUploadCatalog }) => {
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const data = await parseExcelFile(file);
      onUploadCatalog(data);
    }
  };

  return (
    <div className="catalog-upload">
      <label htmlFor="upload" className="upload-label">
        Upload Catalog File
      </label>
      <input
        id="upload"
        type="file"
        accept=".xlsx"
        onChange={handleFileChange}
        className="upload-input"
      />
    </div>
  );
};

export default CatalogUpload;