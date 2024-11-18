import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSupplier } from "../../redux/actions";
import { Supplier } from "../../types/types";
import "./SupplierForm.css";

const SupplierForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSupplier: Supplier = {
      id: Date.now().toString(),
      name,
      country,
      website,
    };
    dispatch(addSupplier(newSupplier));
    setName("");
    setCountry("");
    setWebsite("");
  };

  return (
    <form className="supplier-form" onSubmit={handleSubmit}>
      <h2>Add Supplier</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-submit">
        Add Supplier
      </button>
    </form>
  );
};

export default SupplierForm;