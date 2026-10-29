'use client'

import { IoLogoLinkedin } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineTikTok } from "react-icons/ai";
import { useState } from "react";
import TextCard from "./_components/TextCard";
import TestimonialsCard from "./_components/TestimonialsCard";
import Questionary from "./_components/Questionary";
import Calendly from "./_components/Calendly";
import { MdQuestionMark } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { buttons } from "./data/buttons";

export default function HomepageClient() {
  let [btnGridActive, setBtnGridActive] = useState(true)
  let [textCardActive, setTextCardActive] = useState(false)
  let [testimonialsCardActive, setTestimonialsCardActive] = useState(false)
  let [callBtnActive, setCallBtnActive] = useState(true)
  let [questionaryActive, setQuestionaryActive] = useState(false)
  let [calendlyActive, setCalendlyActive] = useState(false)
  let [actionArgs, setActionArgs] = useState()
  const [cardButtons, setCardButtons] = useState([null, null])


  function activate_button(action: any) {
    setBtnGridActive(false)
    setCardButtons(action.cardButtonIds.map(id => buttons.find(button => button.id === id)))
    setActionArgs({ ...action })
    console.log(String.fromCodePoint(0x1F516) + / HomepageClient.tsx ~ { ...action }: /.source)
    console.log({ ...action })
    if (!action?.type) {
      console.log("error: no action or no action.type")
    } else if (action.type === 'text') {
      setTestimonialsCardActive(false)
      setTextCardActive(true)
    } else if (action.type === 'testimonials') {
      setTextCardActive(false)
      setTestimonialsCardActive(true)
    }
    return
  }

  function openBtn(btn) {
    activate_button(btn.action)
  }

  function reduceTextCard() {
    console.log("reduceTextCard")
    setBtnGridActive(true)
    setTextCardActive(false)
  }

  function reduceTestimonialsCard() {
    console.log("reduceTestimonialsCard")
    setBtnGridActive(true)
    setTestimonialsCardActive(false)
  }
  
  function reduceQuestionary() {
    console.log("reduceQuestionary")
    setBtnGridActive(true)
    setQuestionaryActive(false)
    setCallBtnActive(true)
  }

  function reduceCalendly() {
    console.log("reduceCalendly")
    setBtnGridActive(true)
    setCalendlyActive(false)
    setCallBtnActive(true)
  }


  function openQuestionary() {
    //make all useState that control the Active element be false
    setBtnGridActive(false)
    setTextCardActive(false)
    setTestimonialsCardActive(false)

    setCalendlyActive(false)
    setQuestionaryActive(true)
    setCallBtnActive(false)
  }

  // only called inside the Questionary, so no need to make all active elements false
  function openCalendly() {
    //make all useState that control the Active element be false
    setBtnGridActive(false)
    setTextCardActive(false)
    setTestimonialsCardActive(false)
    setQuestionaryActive(false)

    setCalendlyActive(true)
    setCallBtnActive(false)
  }

  return (
    <>
      <div className="bg-primary">
        <div className="h-dvh flex flex-col justify-start items-center pb-4 px-6 gap-4">
          <div>
            <div className="h-[14px] bg-[#DAB886]"></div>
            <div className="w-dvw flex flex-row justify-center gap-4 items-center 
            bg-[linear-gradient(to_bottom,#f6dfbb_0_24%,#FAEED4_24%_45%,#c5dfed_43%_100%)]">
              <img src="/profile_picture_2.jpg"
                className="h-[110px] w-auto rounded-full object-cover border-[1.5px] border-[#006D9C] "
                alt="jan-cinis-picture" />
              <div className="flex flex-col gap-1 justify-between">
                <h1 className="text-xl font-bold -mt-[2px] ">Jan Cinis</h1>
                <div>
                  <p className="text-sm">Certified Coach, ACC ICF</p>
                  <div className="flex flex-row gap-1 items-center">
                    <p className="text-sm">5 371 followers</p>
                    <div className="flex flex-row">
                      <IoLogoLinkedin className="h-[16px] w-auto" />
                      <CiInstagram className="h-[16px] w-auto" />
                      <AiOutlineTikTok className="h-[16px] w-auto" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold">Boundaries, Confidence,</p>
                  <p className="text-xs font-bold">People-pleasing Coaching</p>
                </div>
              </div>
            </div>
          </div>

          {/*SET OF BUTTONS (+ presentation text)*/}
          {btnGridActive ?
            <>
              {/*my-auto is kinda equivalent to flex-1, with the text being centered vertically*/}
              <p className="max-w-80 text-2xl font-semibold text-center" >You are here because the people you give the most to are the ones who treat you <span className="text-[#006D9C]">the worst</span></p>
              <div className="overflow-x-auto w-full min-w-0 flex flex-col items-center pb-4"> 
                <div className="grid grid-cols-[repeat(2,10rem)] gap-4">
                  {buttons.map((button) => (
                    <button key={button.id} className="btn h-40 w-40 border-[1.5px] border-black bg-neutral hover:bg-[#fff] active:bg-[#fff] border-2 rounded-xl shadow-[7px_7px_0_rgba(0,0,0,0.3)] active:shadow-none hover:shadow-none active:translate-x-[4px] active:translate-y-[3px]  hover:translate-x-[4px] hover:translate-y-[3px]"
                      onClick={() => activate_button(button.action)} >
                      <label htmlFor={`button-${button.id}`} className="p-4 justify-between flex flex-col gap-2 items-center cursor-pointer">
                        <h2 className="card-title text-xl font-bold h-12 text-center ">{button.title}</h2>
                        {Array.isArray(button.image) ? (
                          <div className="flex items-center">
                            <img
                              key="btn-img-1"
                              src={button.image[0]}
                              alt=""
                              className="h-10 w-auto"
                            />
                            <img
                              key="btn-img-2"
                              src={button.image[1]}
                              alt=""
                              className="-ml-7 h-10 w-auto"
                            />
                          </div>
                        ) : button.image ?
                          <img src={button.image} className="h-10 w-auto" alt={button.alt} />
                          : <div className="h-10 [&>svg]:h-10 [&>svg]:w-auto">{button.icon}</div>
                        }
                      </label>
                    </button>
                  ))}
                </div>
              </div>
            </>
            : null
          }
          {/*TEXT CARD*/}
          {textCardActive ? <TextCard 
            args={actionArgs} reduceAction={reduceTextCard} 
            cardButtons={cardButtons}
            btnAction={openBtn}
            />
            : null
          }
          {/*TESTIMONIALS CARD*/}
          {testimonialsCardActive ? <TestimonialsCard 
            args={actionArgs} reduceAction={reduceTestimonialsCard} 
            cardButtons={cardButtons}
            btnAction={openBtn} 
            />
            : null
          }
          {callBtnActive ?
            <button className="btn btn-accent rounded-xl mb-2 shadow-[7px_7px_0_rgba(0,0,0,0.3)] active:shadow-none hover:shadow-none active:translate-x-[4px] active:translate-y-[3px]  hover:translate-x-[4px] hover:translate-y-[3px] " onClick={() => openCalendly()} > BOOK MY FREE DISCOVERY CALL <FaCircleArrowRight size={20} color="#0078AD" className="bg-white rounded-full" /></button>
            : null
          }
          {questionaryActive ? 
            <div className="bg-[#4F2ABD8A] h-full w-[calc(100%+3rem)] -mx-6 -mb-4 border-t-2 px-4">
              <Questionary reduceAction={reduceQuestionary} triggerOpenCalendly={openCalendly} />
            </div >
            : null
          }
          {calendlyActive ?
            <div className="bg-[#0C1B33] h-full w-[calc(100%+3rem)] -mx-6 -mb-4 border-t-2 px-4 pt-[30px]">
              <Calendly reduceAction={reduceCalendly} />
            </div >
            : null
          }
        </div >
      </div >
    </>
      )
}
