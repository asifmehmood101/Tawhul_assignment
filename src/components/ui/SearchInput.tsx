import { SearchIcon } from "@/assets/icons";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useLazySearchQuery } from "@/store/api/searchApi";
import { Skeleton } from "./Skeleton";

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [triggerSearch, { data: results = [], isLoading: loading }] = useLazySearchQuery();
  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    if (!debouncedQuery) {
      return;
    }

    triggerSearch(debouncedQuery);
  }, [debouncedQuery, triggerSearch]);


  return (
    <div className="relative max-w-80 w-full">
      <div className="relative border border-[#E0E8ED] rounded-lg">
        <SearchIcon
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-[#F5F8FA] rounded-lg outline-none"
        />
      </div>
      {query && (
        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg z-50">

          {loading && (
            <div className="p-3 space-y-2">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} width="100%" height="20px" />
              ))}
            </div>
          )}

          {!loading && results.length === 0 && (
            <p className="p-3 text-sm text-gray-400">
              No results found
            </p>
          )}

          {!loading && results.map((item, index) => (
            <div
              key={index}
              className="p-3 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {item}
            </div>
          ))}

        </div>
      )}

    </div>
  );
};
