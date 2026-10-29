import { BsBoxArrowInLeft } from "react-icons/bs";
import Script from "next/script";

import { InlineWidget } from "react-calendly";

export default function Calendly(props) {
  const {reduceAction} = props
  function handleReduceBtn() { 
    reduceAction()
  }

  return (
    <>
      <div className="flex justify-end align-center ">
        <button className="flex gap-4 cursor-pointer active:scale-95" onClick={() => handleReduceBtn()}>
        <p className="font-bold text-white">Back to the Home page</p>
        <div>
          <BsBoxArrowInLeft size={24} className=" text-white " />
        </div>
        </button>
      </div>
      <InlineWidget url="https://calendly.com/janc-social-team/30min" />

    </>
  )
}
