import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        heading="Kite"
        paragraph="Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices."
        mainImage="media/images/kite.png"
        linkb="Learn more"
        linka="Try demo"
      />
      <RightSection
        heading="Console"
        paragraph="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        mainImage="media/images/console.png"
        link="Learn more"
      />
      <LeftSection
        heading="Coin"
        paragraph="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        mainImage="media/images/coin.png"
        linka="Coin"
      />
      <RightSection
        heading="Kite Connect API"
        paragraph="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        mainImage="media/images/kiteconnect.png"
        link="Kite connect"
      />
      <LeftSection
        heading="Varsity mobile"
        paragraph="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        mainImage="media/images/varsity.png"
      />

      <Universe />
    </>
  );
}

export default ProductPage;
