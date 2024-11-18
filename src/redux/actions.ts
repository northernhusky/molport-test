import { Supplier, CatalogItem } from "../types/types";

export const ADD_SUPPLIER = "ADD_SUPPLIER";
export const SELECT_SUPPLIER = "SELECT_SUPPLIER";
export const UPLOAD_CATALOG = "UPLOAD_CATALOG";

export const addSupplier = (supplier: Supplier) => ({
  type: ADD_SUPPLIER,
  payload: supplier,
});

export const selectSupplier = (supplier: Supplier) => ({
  type: SELECT_SUPPLIER,
  payload: supplier,
});

export const uploadCatalog = (supplierId: string, catalog: CatalogItem[]) => ({
  type: UPLOAD_CATALOG,
  payload: { supplierId, catalog },
});