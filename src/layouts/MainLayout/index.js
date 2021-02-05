import React, { useEffect } from "react"
import AOS from "aos"
import Menu from "@/components/Menu"
import Footer from "@/components/Footer"
import { Helmet } from "react-helmet"

import "aos/dist/aos.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-alice-carousel/lib/alice-carousel.css"
import "@/styles/style.scss"

function JsonLd({ children }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(children)}</script>
    </Helmet>
  )
}
export default ({ children }) => {
  useEffect(() => {
    // init animations
    AOS.init({
      duration: 1000,
      offset: 100,
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>Colorado Dominating Moves</title>
        <meta name="description" content={"Colorado's Best Moving Company"} />
        <meta
          property="og:description"
          content={
            "We dominate the competition with the best service and prices. When it comes to quality, our team is recommended by name. Every customer remembers Diego and his crew for the amazing moves they provide."
          }
        />
        <meta property="og:title" content="Colorado Dominating Moves" />
        <meta property="og:type" content="LocalBusiness" />
        <link rel="canonical" href="https://coloradodominatingmoves.com" />
        <JsonLd>
          {{
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            name: "Colorado Dominating Moves",
            image:
              "https://dominatingmoves.com/static/5d0a9762acc1dd77e9c465e7f240a4ae/630fb/favicon.png",
            telephone: "720-829-7961",
            email: "colodomo303@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Aurora",
              addressRegion: "Co",
              addressCountry: "United States",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Andrew L",
                },
                reviewBody:
                  "I hired Diego and his crew. They did a great job and very reasonably priced in comparison to other quotes I got. I was very impressed that I hired them for 2 other jobs and will continue to call on Colorado Dominating Moves.</P><P><STRONG>They did a great job",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Douglas",
                },
                reviewBody:
                  "I had a last minute move i needed. I received this companies card from a property management/real estate group where I was moving to. Colorado Dominating Moves had the best rate out of two other&#39;s i called - so it was an easy choice who I&#39;d select. The movers Diego and Luis took care of my stuff and knocked out the task quickly and efficiently. I really appreciate your guys work. Thank you again for helping me.</P><P><STRONG>I really appreciate your guys work",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Andrew B",
                },
                reviewBody:
                  "I hired Diego and his crew for my move and ill be using him again when we close on our next home. Very professional and worked around our busy Schedule. Thanks Diego. Glad I could help.</P><P><STRONG>Very Professional",
              },
            ],
          }}
        </JsonLd>
      </Helmet>
      <Menu />
      {children}

      <Footer />
    </>
  )
}
