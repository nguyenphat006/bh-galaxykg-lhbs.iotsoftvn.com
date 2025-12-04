import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

import type { Route } from './+types/root'
import './app.css'

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
  },
  {
    rel: "icon",
    href: "https://lhbs.edu.vn/wp-content/uploads/2021/05/cropped-ky-niem-10-nam-lhbs-32x32.png",
    sizes: "32x32"
  },
  {
    rel: "icon",
    href: "https://lhbs.edu.vn/wp-content/uploads/2021/05/cropped-ky-niem-10-nam-lhbs-192x192.png",
    sizes: "192x192"
  },
  {
    rel: "apple-touch-icon",
    href: "https://lhbs.edu.vn/wp-content/uploads/2021/05/cropped-ky-niem-10-nam-lhbs-180x180.png",
  }
]


export function metaTag() {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:image", content: "https://lhbs.edu.vn/wp-content/uploads/2023/10/BL8Q7643-600x400.jpg" },
    { property: "og:site_name", content: "Trường song ngữ Lạc Hồng" },
    { name: "msapplication-TileImage", content: "https://lhbs.edu.vn/wp-content/uploads/2021/05/cropped-ky-niem-10-nam-lhbs-270x270.png" }
  ];
}


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a5336] to-[#0f3a26] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-4">{message}</h1>
        <p className="text-lg mb-8">{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto bg-black/30 rounded-lg text-xs text-left mb-8">
            <code>{stack}</code>
          </pre>
        )}
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#FABA1E] text-[#1a5336] px-6 py-3 rounded-full font-bold hover:bg-[#e5a812] transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}
