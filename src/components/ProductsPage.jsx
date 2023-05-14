import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

function ProductsPage() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setSearch={setSearch}/>
      <ProductTable search={search} />
    </div>
  );
}
export default ProductsPage;
