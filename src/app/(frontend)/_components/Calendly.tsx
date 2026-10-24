import { BsBoxArrowInDownLeft } from "react-icons/bs";
import Script from "next/script";

export default function Calendly() {
  function handleReduceBtn() { 
    console.log("TODO")
  }

  return (
    <>
      <div className="flex justify-end ">
        <button className="flex gap-4 cursor-pointer active:scale-95" onClick={() => handleReduceBtn()}>
        <p>Back to the questionnaire</p>
        <div>
          <BsBoxArrowInDownLeft size={20} className="[stroke-width:1.5] " />
          </div>
        </button>
      </div>
      {/* Calendly inline widget begin */}
      <div className="calendly-inline-widget h-full pb-4" data-url="https://calendly.com/antony-lao-web/30min" 
        style={{minWidth: "320px", height: "500px"}}></div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      {/* Calendly inline widget end */}
    </>
  )
}
