import Container from "@/components/Container";
import ProductList from "@/components/ProductList";
import { searchProductsByName } from "@/sanity/helpers";

interface Props {
  searchParams: {
    query: string;
  };
}

const SearchPage = async ({ searchParams }: Props) => {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products?.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <h1 className="text-3xl font-bold text-gray-800">
          No products found for <span className="text-red-500">"{query}"</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Try searching with different keywords.
        </p>
        {/* Inline SVG Image */}
        <svg
          className="w-64 mt-6"
          viewBox="0 0 300 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="80" r="50" fill="#E0E7FF" />
          <path
            d="M200 100 Q250 30, 300 100"
            stroke="#6366F1"
            strokeWidth="8"
            fill="transparent"
          />
          <text x="80" y="180" fill="#6B7280" fontSize="14">
            No results found!
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="py-10">
      <Container>
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Search results for <span className="text-blue-600">"{query}"</span>
        </h1>
        <ProductList products={products} categories={[]} />
      </Container>
    </div>
  );
};

export default SearchPage;
