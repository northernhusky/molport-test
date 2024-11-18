import React from "react";
import SupplierForm from "./components/SupplierForm/SupplierForm";
import SupplierList from "./components/SupplierList/SupplierList";
import CatalogUpload from "./components/CatalogUpload/CatalogUpload";
import CatalogTable from "./components/CatalogTable/CatalogTable";
import { useDispatch, useSelector } from "react-redux";
import { CatalogItem } from "./types/types";
import { RootState } from "./redux/reducers";
import { selectSupplier, uploadCatalog } from "./redux/actions";
import "./App.css";

const App: React.FC = () => {
  const suppliers = useSelector((state: RootState) => state.suppliers);
  const selectedSupplier = useSelector((state: RootState) => state.selectedSupplier);
  const supplierCatalogs = useSelector((state: RootState) => state.supplierCatalogs);
  const dispatch = useDispatch();

  const handleSelectSupplier = (supplierId: string) => {
    const supplier = suppliers.find((s) => s.id === supplierId);
    if (supplier) {
      dispatch(selectSupplier(supplier));
    }
  };

  const handleUploadCatalog = (catalog: CatalogItem[]) => {
    if (selectedSupplier) {
      dispatch(uploadCatalog(selectedSupplier.id, catalog));
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <svg width="164" height="49" viewBox="0 0 327 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.6502 46.2919C64.6502 38.1968 61.2524 32.6033 54.759 32.6033C46.7648 32.6033 41.3692 39.2982 41.0705 50.0893V75.6703H32.4751V46.2919C32.4751 38.1968 29.178 32.6033 22.6811 32.6033C14.5896 32.6033 8.89178 39.597 8.89178 50.8883V75.6703H0.299988V25.7105H8.89538V33.4024C11.7929 28.1077 17.1884 24.7098 23.9841 24.7098C31.4781 24.7098 36.8736 28.7052 39.3716 35.4037C42.0675 28.9067 48.1649 24.7098 55.7597 24.7098C66.6515 24.7098 73.2456 32.7041 73.2456 44.9961V75.6739H64.6502V46.2919ZM79.5518 50.6868C79.5518 36.2963 90.5444 24.7062 105.73 24.7062C120.916 24.7062 131.812 36.2963 131.812 50.6868C131.812 65.0772 120.722 76.6673 105.73 76.6673C90.7387 76.6673 79.5518 65.0772 79.5518 50.6868ZM123.018 50.6868C123.018 40.6948 116.122 32.7005 105.73 32.7005C95.3388 32.7005 88.3451 40.6948 88.3451 50.6868C88.3451 60.6787 95.3388 68.673 105.73 68.673C116.122 68.673 123.018 60.6787 123.018 50.6868ZM138.121 0.726959H146.717V75.6703H138.121V0.726959ZM257.345 25.6997H265.94V35.3929C267.837 28.9967 274.233 25.1993 279.927 25.1993C281.227 25.1993 282.526 25.3001 283.825 25.5989V34.493C282.227 33.7947 280.827 33.6939 279.128 33.6939C272.833 33.6939 265.94 39.1902 265.94 50.8811V75.6703H257.345V25.6997ZM298.918 60.8839V33.6076H288.325V25.7141H298.918V11.8239H307.51V25.7141H321.9V33.6076H307.51V59.7861C307.51 66.1822 310.306 68.2807 315.803 68.2807C317.901 68.2807 320.298 67.9819 321.896 67.28V74.9756C319.798 75.6739 317.3 76.1742 314.204 76.1742C305.411 76.1742 298.918 71.279 298.918 60.8839ZM250.707 48.8691C249.872 36.2855 239.776 25.9516 227.225 24.8322C219.317 24.1267 211.646 26.9954 206.183 32.7041C205.607 33.3052 204.833 33.6364 204.001 33.6364C203.17 33.6364 202.396 33.3052 201.82 32.7041C196.356 26.9954 188.686 24.1267 180.782 24.8322C175.08 25.3397 169.886 27.7549 165.837 31.4155V25.7105H157.241V50.1828C157.241 50.262 157.241 50.3412 157.241 50.4204V96.5576H165.837V69.8968C170.566 74.1369 176.754 76.5377 183.143 76.5377C190.046 76.5377 196.54 73.849 201.424 68.9646C202.846 67.5428 205.16 67.5428 206.579 68.9646C211.463 73.849 217.956 76.5377 224.86 76.5377C231.764 76.5377 238.898 73.5466 243.778 68.3275C248.728 63.0363 251.19 56.1255 250.707 48.8691ZM237.497 62.4496C234.19 65.9842 229.701 67.9351 224.86 67.9351C220.019 67.9351 215.923 66.139 212.662 62.8816C210.275 60.4951 207.136 59.3001 204.001 59.3001C200.866 59.3001 197.728 60.4951 195.341 62.8816C192.08 66.139 187.75 67.9351 183.143 67.9351C178.302 67.9351 173.813 65.9878 170.505 62.4496C167.201 58.915 165.556 54.297 165.88 49.4378C166.438 41.0403 173.172 34.1439 181.545 33.3988C186.832 32.9273 191.961 34.8422 195.608 38.6539C197.821 40.9648 200.801 42.2389 204.001 42.2389C207.201 42.2389 210.182 40.9648 212.395 38.6539C216.045 34.8422 221.171 32.9273 226.458 33.3988C234.83 34.1439 241.565 41.0403 242.123 49.4378C242.447 54.2934 240.802 58.915 237.497 62.446V62.4496Z" fill="#201232"/>
        </svg>
      </header>
      <div className="form-list-container">
        <SupplierForm />
        <SupplierList suppliers={suppliers} onSelectSupplier={handleSelectSupplier} />
      </div>
      {selectedSupplier && (
        <div className="catalog-section">
          <CatalogUpload onUploadCatalog={handleUploadCatalog} />
          <CatalogTable catalog={supplierCatalogs[selectedSupplier.id] || []} />
        </div>
      )}
    </div>
  );
};

export default App;