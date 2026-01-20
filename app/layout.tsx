import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import CookieConsent from "@/components/CookiesConsent"

export const metadata: Metadata = {
  title: "Engage360 - Printing Partners Program",
  description: "Grow your print business with Engage360. Earn 30% commission on every QR code printed.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://campaign.basiq360.com/loyalty-management-system/images/fevicon.png" />
      
        {/* Meta Pixel Code */}
<Script
  id="facebook-pixel"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '733484639407288');
      fbq('track', 'PageView');
    `,
  }}
/>
<noscript><img height="1" width="1" style={{display:'none'}}
src="https://www.facebook.com/tr?id=733484639407288&ev=PageView&noscript=1"
/></noscript>
 {/* End Meta Pixel Code  */}
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
        <GoogleTagManager gtmId="GTM-MM5PWB94" />
        <GoogleAnalytics gaId="G-M6HMK9JLLG" />
      </body>

    </html>
  )
}
