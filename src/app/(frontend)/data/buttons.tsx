'use client'

import { MdQuestionMark } from "react-icons/md";

//id and action.id must be the same
//title and action.title must be the same
export const buttons = [
    {
      id: 1, layout: "testimonials", title: "Real\nStories", alt: "null", image: ["/client_01_tone.png", "/client_02_tone.png", "/client_03_tone.png"], 
      style: {
        button: "bg-[#794B4B] ",
        text: "text-white"
      },
      action: {
        id: 1,
        type: "testimonials",
        title: "Real Stories",
        cardButtonIds: [2, 3],
        testimonials: [{
          name: "Rick Nikolic",
          occupation: "Solopreneur",
          picture: "/client_01_tone.png",
          text: `Jan helped me recognize manipulative patterns in my work and relationships. By building awareness and responding appropriately, I strengthened my position and set clear, respectful boundaries.`

        },
        {
          name: "Lee Khedr",
          occupation: "Writer",
          picture: "/client_02_tone.png",
          text: `I truly enjoyed being coached by Jan. At every stage, I knew exactly where I stood and what to improve to move forward. As a result, I gained confidence and earned greater respect for myself and my boundaries.`
        },
        ],
      }
    },
    {
      id: 2, layout: "why", title: "Is it for\nyou?", alt: "null", image: "/thinking_statue_cropped.png", icon:  <MdQuestionMark />,
        style: {
          button: "bg-[linear-gradient(270deg,_#CFC4C0_0%,_#E5DADA_29.81%,_#E5DDDA_63.94%,_#EBE8E5_100%)]",
          image: "absolute object-contain bottom-0 right-0 h-[88%] w-[55%]",
          text: "absolute left-[15%] top-1/2 -translate-y-1/2 text-center text-xl"
        },
        action: {
        id: 2,
        type: "text",
        title: "Is it for you?",
        cardButtonIds: [4, 1],
        text: `If you keep ending up in the same kind of relationship - if socializing or dating goes nowhere, if you’ve read the books, tried the techniques, maybe sat with a therapist, but then you are still stuck in the same loop and even hate yourself for it - then yes, this is for you.

It starts with a free intro call: no pitch, just whether this fits. Then 1:1 over video, working a plan for what you actually do differently this week.`
      }
    },
    {
      id: 3, layout: "about", title: "Meet\nJan", alt: "null", image: "/bg-meet-jan.jpg", 
      style: {
        image: "scale-125 h-full w-full object-cover",
        text: "absolute left-[55%] top-1/2 -translate-y-1/2 text-center text-xl"
      },
      action: {
        id: 3,
        type: "text",
        title: "Meet Jan",
        cardButtonIds: [1, 4],
        text: `Hello. I coach people worldwide on confidence, boundaries and dating - I work with those who struggle in relationships and dating, avoid socializing, and end up burned out and unseen - at work, with friends, and at home. ACC-credentialed through the International Coaching Federation.

Most come to me in a life crisis, or simply unhappy. That’s where the pattern gets loudest - rarely where it starts. I’m also an engineer by education, so I work from both sides: rational enough to map the problem, careful enough to unpack the pain and emotions behind it. From there we build a clear action plan, laid out as a roadmap - awareness, self-integrity, assertive steps - toward a happier life and healthier relationships.

If low confidence or people-pleasing is weighing on your life, book a free intro call. 1:1 online, over video, in English.` }
        
    },
    {
      id: 4, layout:"expect", title: "What to expect", alt: "null", image: null, 
      icon: <span className="inline-block rotate-[90deg] text-3xl leading-none"> :) </span>, 
      style: {
        button: "bg-[#2B3361]", 
        text: "text-white"
      },
      action: {
      id: 4,
      type: "text",
      title: "What to expect",
      cardButtonIds: [3, 2],
      text: `The first call is free and takes about 45-60 minutes. You describe what’s been happening - I ask questions to find where the pattern actually starts rather than where it hurts most. There’s no pitch at the end of it. You’ll leave either with a clear picture of what working together would involve, or with something useful regardless.

If we continue, we work 1:1 over video, based on the agreed frequency. The first few sessions are mostly mapping: what keeps repeating, which situations it shows up in, and what you’ve already tried. After that we build the roadmap - awareness, self-integrity, assertive steps and work through it in order rather than jumping to the hardest thing first.

Between sessions you’ll have something specific to try without pushing yourself - usually a situation you would normally avoid or smooth over. We look at what actually happened, adjust, and go again. Most of the change comes from those repetitions rather than from the conversations themselves 0 the sessions are where we work out what to do next and why the last attempt went the way it did.`
      }
    },
  ]

