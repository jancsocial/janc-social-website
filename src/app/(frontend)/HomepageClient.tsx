'use client'

import { IoLogoLinkedin } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineTikTok } from "react-icons/ai";
import { useState } from "react";
import TextCard from "./_components/TextCard";
import TestimonialsCard from "./_components/TestimonialsCard";
import Questionary from "./_components/Questionary";
import Calendly from "./_components/Calendly";

export default function HomepageClient({ pageData }) {
  let [btnGridActive, setBtnGridActive] = useState(true)
  let [textCardActive, setTextCardActive] = useState(false)
  let [testimonialsCardActive, setTestimonialsCardActive] = useState(false)
  let [callBtnActive, setCallBtnActive] = useState(true)
  let [questionaryActive, setQuestionaryActive] = useState(false)
  let [calendlyActive, setCalendlyActive] = useState(false)
  let [actionArgs, setActionArgs] = useState()

  let buttons = [
    {
      id: 1, title: "Real Stories", alt: "null", image: ["/client_01_tone.png", "/client_02_tone.png"], action: {
        type: "testimonials",
        title: "Real Stories",
        testimonials: [{
          name: "Rick Nikolic",
          occupation: "Solopreneur",
          picture: "/client_01_tone.png",
          text: `Jan helped me recognize manipulative patterns in my work and relationships. By building awareness and responding appropriately, I strengthened my position and set clear, respectful boundaries.`
        },
        {
          name: "Rick Nikolic",
          occupation: "Solopreneur",
          picture: "/client_02_tone.png",
          text: `I truly enjoyed being coached by Jan. At every stage, I knew exactly where I stood and what to improve to move forward. As a result, I gained confidence and earned greater respect for myself and my boundaries.`
        }
        ]
      }
    },
    {
      id: 2, title: "Is it for you", alt: "null", image: "/profile-picture.png", action: {
        type: "text",
        title: "Is it for you",
        text: `Explanation what’s all about - pain points, what’s really achievable and how.`
      }
    },
    {
      id: 3, title: "Meet Jan", alt: "null", image: "/profile-picture-grayscale.png", action: {
        type: "text",
        title: "Meet Jan",
        text: `My short bio. Short story who I was in the past, my background. What experience I went thru.
Current coaching experience, what do I enjoy and whom I help specifically.
Few words about my mission in terms of help clients and in general - about my book` }
    },
    {
      id: 4, title: "What to expect", alt: "null", image: "/profile-picture.png", action: {
        type: "text",
        title: "Meet Jan",
        text: `We begin with a complimentary first session to clarify your goals and design your personal roadmap. Step by step, we move toward each milestone with clarity and purpose.  At the end, you receive a tailored summary and practical tools to sustain your progress after achieving your goals.`
      }
    },
  ]

  function activate_button(action: any) {
    setBtnGridActive(false)
    setActionArgs({ ...action })
    console.log({ ...action })
    if (!action?.type) {
      console.log("error: no action or no action.type")
    } else if (action.type === 'text') {
      setTextCardActive(true)
    } else if (action.type === 'testimonials') {
      setTestimonialsCardActive(true)
    }
    return
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



  function openQuestionary() {
    //make all useState that control the Active element be false
    setBtnGridActive(false)
    setTextCardActive(false)
    setTestimonialsCardActive(false)

    setQuestionaryActive(true)
    setCallBtnActive(false)
  }

  // only called inside the Questionary, so no need to make all active elements false
  function openCalendly() {
    setQuestionaryActive(false)
    setCalendlyActive(true)
  }

  return (
    <>
      <div className="bg-primary">
        <div className="h-dvh flex flex-col justify-around items-center px-6 py-4 gap-4">
          <div className="flex flex-row justify-start md:justify-center gap-4 items-center">
            <img src="/profile-picture.png"
              className="h-[110px] w-auto"
              alt="jan-cinis-picture" />
            <div className="flex flex-col gap-1 justify-between">
              <h1 className="text-xl font-bold underline">Jan Cinis</h1>
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

          {/*SET OF BUTTONS (+ presentation text)*/}
          {btnGridActive ?
            <>
              {/*my-auto is kinda equivalent to flex-1, with the text being centered vertically*/}
              <p className="my-auto text-2xl font-bold" >You are here because the people you give the most to are the ones who treat you the worst</p>
              <div className="overflow-x-auto w-full min-w-0 flex flex-col items-center"> 
                <div className="grid grid-cols-[repeat(2,10rem)] gap-4">
                  {buttons.map((button) => (
                    <button key={button.id} className="btn h-40 w-40 bg-neutral hover:bg-secondary border-2 rounded-xl"
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
                        ) :
                          <img src={button.image} className="h-10 w-auto" alt={button.alt} />
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
          {textCardActive ? <TextCard args={actionArgs} reduceAction={reduceTextCard} />
            : null
          }
          {/*TESTIMONIALS CARD*/}
          {testimonialsCardActive ? <TestimonialsCard args={actionArgs} reduceAction={reduceTestimonialsCard} />
            : null
          }
          {callBtnActive ?
            <button className="btn btn-accent" onClick={() => openQuestionary()} > BOOK MY FREE DISCOVERY CALL</button>
            : null
          }
          {questionaryActive ? 
            <div className="bg-[#4F2ABD8A] h-full w-[calc(100%+3rem)] -mx-6 -mb-4 border-t-2 px-4">
              <Questionary reduceAction={reduceQuestionary} triggerOpenCalendly={openCalendly} />
            </div >
            : null
          }
          {calendlyActive ?
            <div className="bg-[#4F2ABD8A] h-full w-[calc(100%+3rem)] -mx-6 -mb-4 border-t-2 px-4 pt-[30px]">
              <Calendly />
            </div >
            : null
          }
        </div >
      </div >
    </>
      )
}
