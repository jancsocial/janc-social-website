'use client'

import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function TextCard(props: any) {
  console.log(props)
  let { args, reduceAction } = props

  const containerRef = useRef(null);
  const [hasScroll, setHasScroll] = useState(false);

  const handleReduceBtn = (cardType: string) => {
    console.log("handleReduceBtn")
    console.log(cardType)
    reduceAction()
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkScroll = () => {
      setHasScroll((container as any).scrollHeight > (container as any).clientHeight);
    };

    checkScroll();

    const observer = new ResizeObserver(checkScroll);
    observer.observe(container);

    return () => observer.disconnect();
  }, [])

  return (
    <>
      <div className="overflow-hidden flex-1 card border-2 bg-secondary">
        <div className="overflow-hidden card-body flex flex-col items-center justify-between">
          <div className=" grid w-full grid-cols-[1fr_auto_1fr] items-center " >
            <span />
            <h2 className="card-title text-2xl font-bold">{args.title}</h2>
            <button className="justify-self-end cursor-pointer active:scale-95" onClick={() => handleReduceBtn(args.type)}>
              <BsBoxArrowInDownLeft size={20} className="[stroke-width:1.5] " />
            </button>
          </div>
          <div ref={containerRef} className="flex-1 text-xl overflow-y-auto">
            <p >{args.text}  </p>
          </div>
          {hasScroll && (
            <button className="flex-none w-[45px] h-[45px]" onClick={() => {
              (containerRef.current as any).scrollBy({ top: 100, behavior: "smooth" });
            }}
            >
              <MdKeyboardArrowDown className=" block w-[45px] h-[45px]" />
            </button>
          )}

          <div className="flex flex-row justify-evenly">
            <div className="btn">Button 1</div>
            <div className="btn">Button 2</div>
          </div>
        </div>
      </div >
    </>
  )
}
