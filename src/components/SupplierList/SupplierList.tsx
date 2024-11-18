import React, { useState } from "react";
import "./SupplierList.css";

const SupplierList: React.FC<{
  suppliers: { id: string; name: string; country: string; website: string }[];
  onSelectSupplier: (supplierId: string) => void;
}> = ({ suppliers, onSelectSupplier }) => {
  const [focusedSupplier, setFocusedSupplier] = useState<string | null>(null);

  const handleSelectSupplier = (supplierId: string) => {
    onSelectSupplier(supplierId);
    setFocusedSupplier(supplierId);
  };

  const handleFocus = (supplierId: string) => {
    setFocusedSupplier(supplierId);
  };

  const handleBlur = () => {
    setFocusedSupplier(null);
  };

  return (
    <div className="supplier-list">
      <h2>Suppliers</h2>
      <ul>
        {suppliers.map((supplier) => (
          <li
            key={supplier.id}
            className={`supplier-item ${focusedSupplier === supplier.id ? "focused" : ""}`}
            onClick={() => handleSelectSupplier(supplier.id)}
            onFocus={() => handleFocus(supplier.id)}
            onBlur={handleBlur}
            tabIndex={0}
          >
            <span className="supplier-name">{supplier.name}</span>
            <span className="supplier-website">{supplier.website}</span>
            <span className="supplier-country">({supplier.country})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierList;