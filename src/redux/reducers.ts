import { State } from "../types/types";
import { ADD_SUPPLIER, SELECT_SUPPLIER, UPLOAD_CATALOG } from "./actions";

const initialState: State = {
  suppliers: [
    { id: "1", name: "ChemDiv, Inc.", country: "USA", website: "http://www.chemdiv.com/" },
    { id: "2", name: "BIONET - Key Organics Ltd.", country: "UK", website: "http://www.keyorganics.net/" },
    { id: "3", name: "AnalytiCon Discovery", country: "Germany", website: "http://www.ac-discovery.com/" },
  ],
  selectedSupplier: null,
  supplierCatalogs: {},
};

const rootReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case ADD_SUPPLIER:
      return {
        ...state,
        suppliers: [...state.suppliers, action.payload],
      };
    case SELECT_SUPPLIER:
      return {
        ...state,
        selectedSupplier: action.payload,
      };
    case UPLOAD_CATALOG:
      return {
        ...state,
        supplierCatalogs: {
          ...state.supplierCatalogs,
          [action.payload.supplierId]: action.payload.catalog,
        },
      };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;