export interface Supplier {
    id: string;
    name: string;
    country: string;
    website: string;
}

export interface CatalogItem {
    [key: string]: string | number;
}

export interface State {
    suppliers: Supplier[];
    selectedSupplier: Supplier | null;
    supplierCatalogs: { [key: string]: CatalogItem[] };
}