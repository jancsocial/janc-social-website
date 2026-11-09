'use client'

import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
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

  let [mainAreaActive, setMainAreaActive] = useState(true)
  let [btnGridActive, setBtnGridActive] = useState(true)
  let [presentationTextActive, setPresentationTextActive] = useState(true)
  let [textCardActive, setTextCardActive] = useState(false)
  let [testimonialsCardActive, setTestimonialsCardActive] = useState(false)
  let [callBtnActive, setCallBtnActive] = useState(true)
  let [questionaryActive, setQuestionaryActive] = useState(false)
  let [calendlyActive, setCalendlyActive] = useState(false)
  let [actionArgs, setActionArgs] = useState()
  const [cardButtons, setCardButtons] = useState([null, null])


  function activate_button(action: any) {
    setBtnGridActive(false)
    setPresentationTextActive(false)
    setCardButtons(action.cardButtonIds.map((id: number) => buttons.find(button => button.id === id)))
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

  function openBtn(btn: any) {
    activate_button(btn.action)
  }

  function reduceTextCard() {
    console.log("reduceTextCard")
    setBtnGridActive(true)
    setPresentationTextActive(true)
    setTextCardActive(false)
  }

  function reduceTestimonialsCard() {
    console.log("reduceTestimonialsCard")
    setBtnGridActive(true)
    setPresentationTextActive(true)
    setTestimonialsCardActive(false)
  }
  
  function reduceQuestionary() {
    console.log("reduceQuestionary")
    setMainAreaActive(true)
    setBtnGridActive(true)
    setPresentationTextActive(true)
    setQuestionaryActive(false)
    setCallBtnActive(true)
  }

  function reduceCalendly() {
    console.log("reduceCalendly")
    setMainAreaActive(true)
    setBtnGridActive(true)
    setPresentationTextActive(true)
    setCalendlyActive(false)
    setCallBtnActive(true)
  }


  function openQuestionary() {
    //make all useState that control the Active state of element be false
    setMainAreaActive(false)
    setBtnGridActive(false)
    setPresentationTextActive(true)
    setTextCardActive(false)
    setTestimonialsCardActive(false)

    setCalendlyActive(false)
    setQuestionaryActive(true)
    setCallBtnActive(false)
  }

  // only called inside the Questionary, so no need to make all active elements false
  function openCalendly() {
    //make all useState that control the Active state of element be false
    setMainAreaActive(false)
    setBtnGridActive(false)
    setTextCardActive(false)
    setTestimonialsCardActive(false)
    setQuestionaryActive(false)

    setCalendlyActive(true)
    setCallBtnActive(false)
  }

  return (
    <>
      <div className="bg-[#fff]">
        <div className="h-dvh flex flex-col justify-start items-center md:px-6 ">
          <div className=" w-dvw overflow-hidden bg-[#E6E5E3] " >
            <div className="relative h-[170px]">
              <div className="absolute left-[52%] top-0 h-full -translate-x-1/2">
                <img className="absolute -left-[55%] h-[170px] w-auto object-cover scale-120 max-w-none " src="/profile-bg-crop-3.jpg" /> 
                <div className="relative w-full z-10 flex flex-row justify-center gap-4 items-start pb-4 pt-2">
                  <div className="w-[110px]"></div>
                  <div className="flex flex-col gap-0 w-full">
                    <h1 className="text-[14px] font-bold -mt-[2px] ">Jan Cinis</h1>
                    <div>
                      <p className="text-[10px]">Certified Coach, ACC ICF</p>
                      <div className="flex flex-row gap-1 items-center">
                        <p className="text-[10px]">4 375 followers</p>
                        <div className="flex flex-row items-center">
                          <IoLogoLinkedin className="h-[16px] w-auto" />
                          <CiInstagram className="h-[16px] w-auto" />
                          <AiOutlineTikTok className="h-[16px] w-auto" />
                          <FaFacebook className="h-[13px] w-auto" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold">Boundaries, Confidence,</p>
                      <p className="text-[8px] font-bold">People-pleasing Coaching</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center h-full max-h-[calc(100dvh-170px)] w-full">
            {/*SET OF BUTTONS (+ presentation text)*/}
            { mainAreaActive &&
              <>
                {/*my-auto is kinda equivalent to flex-1, with the text being centered vertically*/}
                <p className={`max-w-80 text-[17.5px] font-light text-center py-6 ${presentationTextActive ? null : 'invisible'}`} >You are here because the people you give the most to are the ones who treat you <span className="font-semibold">the worst</span></p> 
                <div className="overflow-x-auto w-dvw h-max min-w-0 flex flex-col items-center justify-start bg-primary py-[20px] " > 
                  {// btnGridActive ?
                    <div className={`grid grid-cols-[repeat(2,10rem)] gap-4 ${btnGridActive ? null : 'invisible'}`}>
                      {buttons.map((button) => (
                        <button key={button.id} className={`btn border-none after:absolute after:inset-0 after:z-20  hover:after:ring-inset hover:after:ring-1 hover:after:ring-black after:rounded-[inherit] relative overflow-hidden h-[131px] w-[151px] rounded-md shadow-[7px_7px_4px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[4px] active:translate-y-[3px] ${button.style?.button ?? ''} `} 
                          onClick={() => activate_button(button.action)} >
                            {button.image && button.layout != 'testimonials' && (
                              <img
                                src={button.image as any}
                                alt=""
                                aria-hidden="true"
                                className={`absolute  ${button.style?.image ?? ''}`}
                              />
                            )}

                          <label htmlFor={`button-${button.id}`} className="z-10 p-4 justify-between flex flex-col gap-2 items-center cursor-pointer">
                            <h2 className={`card-title text-[14px] font-medium h-12 text-center whitespace-pre-line ${button.style?.text ?? ''} `}>{button.title}</h2>
                            {Array.isArray(button.image) && button.layout === 'testimonials' ? (
                              <div className="flex items-center">
                                <img
                                  key="btn-img-1"
                                  src={button.image[0]}
                                  alt=""
                                  className="h-10 w-auto"
                                  draggable={false}
                                  onContextMenu={event => event.preventDefault()}
                                />
                                <img
                                  key="btn-img-2"
                                  src={button.image[1]}
                                  alt=""
                                  className="-ml-3 h-10 w-auto"
                                  draggable={false}
                                  onContextMenu={event => event.preventDefault()}
                                />
                                <img
                                  key="btn-img-3"
                                  src={button.image[2]}
                                  alt=""
                                  className="-ml-3 h-10 w-auto"
                                  draggable={false}
                                  onContextMenu={event => event.preventDefault()}
                                />
                              </div>
                            ) 
                              // : button.image ?
                              // <img src={button.image} className=`h-10 w-auto` alt={button.alt} 
                              //   draggable={false}
                              //   onContextMenu={event => event.preventDefault()}
                              // />
                              // :<div className="h-10 [&>svg]:h-10 [&>svg]:w-auto">{button.icon}</div>
                              : null
                            }
                          </label>
                        </button>
                      ))}
                    </div> 
                    //: null 
                  }
                  {callBtnActive ?
                    <button className="btn bg-black border-none text-white mt-6 rounded-md mb-2 shadow-[7px_7px_4px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[4px] active:translate-y-[3px] w-[320px]  " onClick={() => openCalendly()} >BOOK MY FREE DISCOVERY CALL</button>
                    : null
                  }
                </div>
              </>
              
            }
            {/*TEXT CARD*/}
            {textCardActive ? 
              <div className="absolute inset-0 z-30 w-full h-[428px] pt-4 px-5 pb-2 flex flex-col justify-start items-center">
                <TextCard 
                  args={actionArgs} reduceAction={reduceTextCard} 
                  cardButtons={cardButtons}
                  btnAction={openBtn}
                />
              </div>
              : null
            }
            {/*TESTIMONIALS CARD*/}
            {testimonialsCardActive ? 
              <div className="absolute inset-0 z-30 w-full h-[428px] pt-4 md:px-5 pb-2 flex flex-col justify-start items-center">
                <TestimonialsCard 
                  args={actionArgs} reduceAction={reduceTestimonialsCard} 
                  cardButtons={cardButtons}
                  btnAction={openBtn} 
                />
              </div>
              : null
            }
            {questionaryActive ? 
              <div className="bg-[#4F2ABD8A] h-full w-[calc(100%+3rem)] -mx-6 -mb-4 border-t-2 px-4">
                <Questionary reduceAction={reduceQuestionary} triggerOpenCalendly={openCalendly} />
              </div >
              : null
            }
            {calendlyActive ?
              <div className="bg-[#0C1B33] w-[calc(100%+3rem)] h-full -mx-6 -mb-4 border-t-2 px-4 pt-[30px]">
                <Calendly reduceAction={reduceCalendly} />
              </div >
              : null
            }
          </div >
        </div >
      </div >
    </>
      )
}
