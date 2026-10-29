'use client'

import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function TestimonialsCard(props: any) {
  console.log(props)
  let { args, reduceAction } = props

  const [testimonialIdx, setTestimonialIdx] = useState(0)
  //for scrolling
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
      <div className="overflow-hidden min-h-0 flex-1 card border-2 bg-secondary">
        <div className="overflow-hidden min-h-0 card-body flex flex-col items-center justify-between">
          <div className=" grid w-full grid-cols-[1fr_auto_1fr] items-center " >
            <span />
            <h2 className="card-title text-2xl font-bold">{args.title}</h2>
            <button className="shrink-0 justify-self-end cursor-pointer active:scale-95" onClick={() => handleReduceBtn(args.type)}>
              <BsBoxArrowInDownLeft size={20} className="[stroke-width:1.5] " />
            </button>
          </div>
          <div className="overflow-hidden card-body w-full">
            <button className="absolute left-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer active:scale-95">
              <MdKeyboardArrowLeft className=" block w-[45px] h-[45px]" />
            </button>
            {/*
            <button className="shrink-0 w-[45px] h-[45px] cursor-pointer active:scale-95">
              left
            </button>
            */}
            <div ref={containerRef} className="overflow-y-auto overflow-x-hidden flex-1 text-xl flex flex-col items-center-safe">
              <img src={args.testimonials[testimonialIdx]["picture"]}
                className="flex-none h-[110px] w-auto"
                alt={`client-${testimonialIdx}-picture`} />
              <p className="text-sm font-bold flex-none">{args.testimonials[testimonialIdx]["name"]}</p>
              <p className="text-sm pb-2 flex-none">{args.testimonials[testimonialIdx]["occupation"]}</p>
              <div className="flex-1">
                <p className="text-sm px-10">{args.testimonials[testimonialIdx]["text"]}</p>
              </div>

            </div>
            <button className="absolute right-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer active:scale-95">

              <MdKeyboardArrowRight className=" block w-[45px] h-[45px]" />
            </button>
            {/*
            <button className="shrink-0 w-[45px] h-[45px] cursor-pointer active:scale-95">
              right
            </button>
            */}

          </div>

          {hasScroll && (
            <button className="flex-none cursor-pointer w-[45px] h-[45px]" onClick={() => {
              (containerRef.current as any).scrollBy({ top: 100, behavior: "smooth" });
            }}
            >
              <MdKeyboardArrowDown className=" block w-[45px] h-[45px]" />
            </button>
          )}

          <div className="flex flex-row justify-evenly w-full">
            <div className="btn bg-neutral hover:bg-secondary active:bg-secondary border-2 rounded-xl shadow-[7px_7px_0_rgba(0,0,0,0.3)]">Button 1</div>
            <div className="btn bg-neutral hover:bg-secondary active:bg-secondary border-2 rounded-xl shadow-[7px_7px_0_rgba(0,0,0,0.3)]">Button 2</div>
          </div>
        </div>
      </div >
    </>
  )
}
