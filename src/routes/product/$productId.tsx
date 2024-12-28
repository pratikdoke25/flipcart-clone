import { ErrorComponent, createFileRoute } from '@tanstack/react-router';
import { fetchProduct } from '../../api/product';
import type { ErrorComponentProps } from '@tanstack/react-router';

export const Route = createFileRoute('/product/$productId')({
  loader: async ({ params: { productId } }) => fetchProduct(productId), // Corrected to use productId
  errorComponent: ProductErrorComponent,
  notFoundComponent: () => {
    return <p>Product not found</p>;
  },
  component: ProductComponent,
});

export function ProductErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function ProductComponent() {
  const product = Route.useLoaderData();

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 mt-8">
      <h4 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h4>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-64 h-64 object-contain rounded-md border border-gray-200"
          />
        </div>
        {/* Product Info */}
        <div className="flex-grow space-y-4">
          <div className="text-lg font-semibold text-gray-600">
            Price: <span className="text-green-600">${product.price}</span>
          </div>
          <div className="text-gray-600">
            <span className="font-medium">Description:</span> {product.description}
          </div>
          <div className="text-gray-600">
            <span className="font-medium">Category:</span> {product.category}
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
