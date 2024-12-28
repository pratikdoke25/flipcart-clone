/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProductImport } from './routes/product'
import { Route as IndexImport } from './routes/index'
import { Route as ProductIndexImport } from './routes/product/index'
import { Route as ProductProductIdImport } from './routes/product/$productId'

// Create/Update Routes

const ProductRoute = ProductImport.update({
  id: '/product',
  path: '/product',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductIndexRoute = ProductIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ProductRoute,
} as any)

const ProductProductIdRoute = ProductProductIdImport.update({
  id: '/$productId',
  path: '/$productId',
  getParentRoute: () => ProductRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/product': {
      id: '/product'
      path: '/product'
      fullPath: '/product'
      preLoaderRoute: typeof ProductImport
      parentRoute: typeof rootRoute
    }
    '/product/$productId': {
      id: '/product/$productId'
      path: '/$productId'
      fullPath: '/product/$productId'
      preLoaderRoute: typeof ProductProductIdImport
      parentRoute: typeof ProductImport
    }
    '/product/': {
      id: '/product/'
      path: '/'
      fullPath: '/product/'
      preLoaderRoute: typeof ProductIndexImport
      parentRoute: typeof ProductImport
    }
  }
}

// Create and export the route tree

interface ProductRouteChildren {
  ProductProductIdRoute: typeof ProductProductIdRoute
  ProductIndexRoute: typeof ProductIndexRoute
}

const ProductRouteChildren: ProductRouteChildren = {
  ProductProductIdRoute: ProductProductIdRoute,
  ProductIndexRoute: ProductIndexRoute,
}

const ProductRouteWithChildren =
  ProductRoute._addFileChildren(ProductRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/product': typeof ProductRouteWithChildren
  '/product/$productId': typeof ProductProductIdRoute
  '/product/': typeof ProductIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/product/$productId': typeof ProductProductIdRoute
  '/product': typeof ProductIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/product': typeof ProductRouteWithChildren
  '/product/$productId': typeof ProductProductIdRoute
  '/product/': typeof ProductIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/product' | '/product/$productId' | '/product/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/product/$productId' | '/product'
  id: '__root__' | '/' | '/product' | '/product/$productId' | '/product/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProductRoute: typeof ProductRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProductRoute: ProductRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/product"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/product": {
      "filePath": "product.tsx",
      "children": [
        "/product/$productId",
        "/product/"
      ]
    },
    "/product/$productId": {
      "filePath": "product/$productId.tsx",
      "parent": "/product"
    },
    "/product/": {
      "filePath": "product/index.tsx",
      "parent": "/product"
    }
  }
}
ROUTE_MANIFEST_END */
