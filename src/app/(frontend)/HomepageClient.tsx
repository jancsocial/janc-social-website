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

export default function HomepageClient() {
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
      id: 2, title: "Is it for you", alt: "null", image: null, icon:  <MdQuestionMark />,action: {
        type: "text",
        title: "Is it for you",
        text: `If you keep ending up in the same kind of relationship - if socializing or dating goes nowhere, if you’ve read the books, tried the techniques, maybe sat with a therapist, but then you are still stuck in the same loop and even hate yourself for it - then yes, this is for you.

It starts with a free intro call: no pitch, just whether this fits. Then 1:1 over video, working a plan for what you actually do differently this week.`
      }
    },
    {
      id: 3, title: "Meet Jan", alt: "null", image: "/profile-picture-grayscale.png", action: {
        type: "text",
        title: "Meet Jan",
        text: `Hello. I coach people worldwide on confidence, boundaries and dating - I work with those who struggle in relationships and dating, avoid socializing, and end up burned out and unseen - at work, with friends, and at home. ACC-credentialed through the International Coaching Federation.

Most come to me in a life crisis, or simply unhappy. That’s where the pattern gets loudest - rarely where it starts. I’m also an engineer by education, so I work from both sides: rational enough to map the problem, careful enough to unpack the pain and emotions behind it. From there we build a clear action plan, laid out as a roadmap - awareness, self-integrity, assertive steps - toward a happier life and healthier relationships.

If low confidence or people-pleasing is weighing on your life, book a free intro call. 1:1 online, over video, in English.` }
    },
    {
      id: 4, title: "What to expect", alt: "null", image: null, 
      icon: <span className="inline-block rotate-[90deg] text-3xl leading-none"> :) </span>, 
        action: {
        type: "text",
        title: "Meet Jan",
        text: `The first call is free and takes about 45-60 minutes. You describe what’s been happening - I ask questions to find where the pattern actually starts rather than where it hurts most. There’s no pitch at the end of it. You’ll leave either with a clear picture of what working together would involve, or with something useful regardless.

If we continue, we work 1:1 over video, based on the agreed frequency. The first few sessions are mostly mapping: what keeps repeating, which situations it shows up in, and what you’ve already tried. After that we build the roadmap - awareness, self-integrity, assertive steps and work through it in order rather than jumping to the hardest thing first.

Between sessions you’ll have something specific to try without pushing yourself - usually a situation you would normally avoid or smooth over. We look at what actually happened, adjust, and go again. Most of the change comes from those repetitions rather than from the conversations themselves 0 the sessions are where we work out what to do next and why the last attempt went the way it did.`
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
    setQuestionaryActive(false)
    setCalendlyActive(true)
  }

  return (
    <>
      <div className="bg-primary">
        <div className="h-[14px] bg-[#DAB886]"></div>
        <div className="h-dvh flex flex-col justify-around items-center px-6 pb-4 gap-4">
          <div className="w-dvw flex flex-row justify-center gap-4 items-center 
          bg-[linear-gradient(to_bottom,#f6dfbb_0_24%,#FAEED4_24%_45%,#c5dfed_43%_100%)]">
            <img src="/profile-picture.png"
              className="h-[110px] w-auto"
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

          {/*SET OF BUTTONS (+ presentation text)*/}
          {btnGridActive ?
            <>
              {/*my-auto is kinda equivalent to flex-1, with the text being centered vertically*/}
              <p className="max-w-80  my-auto text-2xl font-semibold text-center" >You are here because the people you give the most to are the ones who treat you <span className="text-[#006D9C]">the worst</span></p>
              <div className="overflow-x-auto w-full min-w-0 flex flex-col items-center pb-4"> 
                <div className="grid grid-cols-[repeat(2,10rem)] gap-4">
                  {buttons.map((button) => (
                    <button key={button.id} className="btn h-40 w-40 bg-neutral hover:bg-secondary active:bg-secondary border-2 rounded-xl shadow-[7px_7px_0_rgba(0,0,0,0.3)]"
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
          {textCardActive ? <TextCard args={actionArgs} reduceAction={reduceTextCard} />
            : null
          }
          {/*TESTIMONIALS CARD*/}
          {testimonialsCardActive ? <TestimonialsCard args={actionArgs} reduceAction={reduceTestimonialsCard} />
            : null
          }
          {callBtnActive ?
            <button className="btn btn-accent rounded-xl mb-2 shadow-[7px_7px_0_rgba(0,0,0,0.3)]" onClick={() => openCalendly()} > BOOK MY FREE DISCOVERY CALL <FaCircleArrowRight size={20} color="#0078AD" className="bg-white rounded-full" /></button>
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
              <Calendly reduceAction={reduceCalendly} />
            </div >
            : null
          }
        </div >
      </div >
    </>
      )
}
