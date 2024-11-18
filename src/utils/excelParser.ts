import * as XLSX from "xlsx";
import { CatalogItem } from "../types/types";

export const parseExcelFile = (file: File): Promise<CatalogItem[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);
      resolve(json as CatalogItem[]);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
};