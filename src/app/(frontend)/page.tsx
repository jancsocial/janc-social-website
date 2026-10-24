import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import HomepageClient from './HomepageClient'
import { IoLogoLinkedin } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineTikTok } from "react-icons/ai";

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  //const payloadConfig = await config
  //const payload = await getPayload({ config: payloadConfig })
  //const { user } = await payload.auth({ headers })

//  const result = await payload.find({
//    collection: "pages",
//    where: {
//      slug: { equals: "homepage" }
//    }
//  })
//
//  const page = result.docs[0]


  return (
    <>
      <HomepageClient />
    </>
  )


}
