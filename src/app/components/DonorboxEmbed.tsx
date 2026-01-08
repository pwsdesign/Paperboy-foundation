"use client";

import { useRef, useEffect } from "react";
import Script from "next/script";

export default function DonorboxEmbed() {
  const elRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // You generally don't need to do anything here.
    // This just proves the element exists after mount.
    // console.log(elRef.current);
  }, []);

  return (
    <>
      <Script src="https://donorbox.org/widgets.js" strategy="afterInteractive" />

      <dbox-widget
        ref={elRef as any}
        campaign="support-paperboy"
        type="donation_form"
        enable-auto-scroll="true"
      ></dbox-widget>
    </>
  );
}