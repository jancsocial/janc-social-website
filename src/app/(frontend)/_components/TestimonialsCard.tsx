'use client'

import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { RiArrowDropLeftLine} from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import { buttons } from "../data/buttons";

export default function TestimonialsCard(props: any) {
  let { args, reduceAction, btnAction, cardButtons } = props
  let [btn1, btn2] = cardButtons
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
      <div className="overflow-hidden h-[432px] card bg-[#E5DEDB] shadow-[7px_7px_4px_rgba(0,0,0,0.3)] ">
        <div className="overflow-hidden min-h-0 card-body flex flex-col items-center justify-between">
          <div className=" grid w-full grid-cols-[1fr_auto_1fr] items-center " >
            <span />
            <h2 className="card-title text-2xl font-bold">{args.title}</h2>
            <button className="shrink-0 justify-self-end cursor-pointer active:scale-95" onClick={() => handleReduceBtn(args.type)}>
              <BsBoxArrowInDownLeft size={20} className="[stroke-width:1.5] " />
            </button>
          </div>
          <div className="overflow-hidden card-body w-full">
            <button className="absolute left-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer active:scale-95"
              onClick={() => setTestimonialIdx((testimonialIdx - 1 + args.testimonials.length)  % args.testimonials.length) }
            >
              <SlArrowLeft className=" block w-[20px] h-[20px]" />
            </button>
            {/*
            <button className="shrink-0 w-[45px] h-[45px] cursor-pointer active:scale-95">
              left
            </button>
            */}
            <div ref={containerRef} className="overflow-y-auto overflow-x-hidden flex-1 text-xl flex flex-col items-center-safe">
              <img src={args.testimonials[testimonialIdx]["picture"]}
                className="flex-none h-[80px] w-auto"
                alt={`client-${testimonialIdx}-picture`} />
              <p className="text-sm font-bold flex-none">{args.testimonials[testimonialIdx]["name"]}</p>
              <p className="text-sm pb-2 flex-none">{args.testimonials[testimonialIdx]["occupation"]}</p>
              <div className="flex-1">
                <p className="text-sm px-10">{args.testimonials[testimonialIdx]["text"]}</p>
              </div>

            </div>
            <button className="absolute right-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer active:scale-95 w-[45px] h-[45px] flex items-center justify-right"
              onClick={() => setTestimonialIdx((testimonialIdx + 1)  % args.testimonials.length) }
            >
              <SlArrowRight className="w-[20px] h-[20px]" />
            </button>
            {/*
            <button className="shrink-0 w-[45px] h-[45px] cursor-pointer active:scale-95">
              right
            </button>
            */}

          </div>

          <div className="flex flex-row justify-evenly w-full">
            <button className="btn bg-[#794B4B] w-[90px] text-white border-none text-[12px] leading-4 rounded-md shadow-[7px_7px_4px_rgba(0,0,0,0.3)]  active:shadow-none active:translate-x-[4px] active:translate-y-[3px]" 
            onClick={() => btnAction(btn1)}
            >
              {btn1.action.title}
            </button>

            {hasScroll && (
              <button className="flex-none cursor-pointer w-[45px] h-[45px]" onClick={() => {
                (containerRef.current as any).scrollBy({ top: 100, behavior: "smooth" });
              }}
              >
                <MdKeyboardArrowDown className="block w-[45px] h-[45px]" />
              </button>
            )}
          
            <button className="btn bg-[#2B3361] w-[90px] text-white border-none text-[12px] leading-4 rounded-md shadow-[7px_7px_3px_rgba(0,0,0,0.3)] active:shadow-none  active:translate-x-[4px] active:translate-y-[3px]"
            onClick={() => btnAction(btn2)}
            >
              {btn2.action.title}
            </button>
          </div>
        </div>
      </div >
    </>
  )
}
