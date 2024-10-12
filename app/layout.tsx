import { Metadata } from 'next'
import '../styles/globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Glenn Van De Putte',
  description: 'Personal website for Glenn Van De Putte.',
  icons: 'logo.svg',
  verification: { google: 'Pj1ATvoL2tXCTzxzxr9aG_u73AjTkwjFbXsmm0P9hPw' },
  // todo: add properties for og meta headers
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_MEASUREMENT_ID = 'G-7WKLQH1LCM'

  return (
    <html lang="en">
      <Head>
        {process.env.DISABLE_ANALYTICS !== 'true' ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `,
              }}
            />
          </>
        ) : (
          <></>
        )}
      </Head>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
          <main className="flex flex-col items-center justify-around flex-1 container">{children}</main>
        </div>
      </body>
    </html>
  )
}
