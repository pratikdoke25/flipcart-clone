import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { fetchProducts } from '../api/product'

export const Route = createFileRoute('/product')({
  loader: fetchProducts,
  component: ProductComponent,
})

function ProductComponent() {
  const products = Route.useLoaderData()

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {[
          ...products,
          { id: 'i-do-not-exist', title: 'Non-existent Post' },
        ].map((product) => {
          return (
            <li key={product.id} className="whitespace-nowrap">
              <Link
                to="/product/$productId"
                params={{
                  productId: product.id,
                }}
                className="block py-1 text-blue-600 hover:opacity-75"
                activeProps={{ className: 'font-bold underline' }}
              >
                <div>{product.title.substring(0, 20)}</div>
              </Link>
            </li>
          )
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}