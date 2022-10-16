import type { GetServerSidePropsContext, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'

import dynamic from 'next/dynamic'
import { Fields } from '../types/fields'

import Platform from 'platform'
// @ts-expect-error
import Detect from 'just-detect-adblock'
import { useDetectAdBlock } from 'adblock-detect-react'
import { Pattern } from '../components'

const LazyLoadedLanding = dynamic(() => import('../components/landing.page'), {
  ssr: false
})


type Props = {
  ip: string
}


const Home: NextPage<Props> = (props) => {
  const {
    ip
  } = props

  const adBlockEnabled = useDetectAdBlock()

  const [loading, setLoading] = useState<boolean>(true)
  const [name, setName] = useState<string>("Joseph")
  const [fields, setFields] = useState<Fields>({platform: '', version: '', os: '', language: '', ip: ip, width: 0, height: 0, availHeight: 0, availWidth: 0, colorDepth: 0, pixelRatio: 0, adBlockEnabled: adBlockEnabled, reducedMotion: true, javaEnabled: true, cookiesEnabled: true})

  useEffect(() => {
    console.log("RUN")
    themeChange(false)
    setFields(currentValue => ({
      ...currentValue,
      platform: Platform.name || '',
      version: Platform.version || '',
      os: Platform.os ? Platform.os.toString() : '',
      language: navigator.language,
      width: screen.width,
      height: screen.height,
      availHeight: screen.availHeight,
      availWidth: screen.availWidth,
      colorDepth: screen.colorDepth,
      pixelRatio: devicePixelRatio,
      adBlockEnabled: adBlockEnabled,
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      javaEnabled: window.navigator.javaEnabled() || false,
      cookiesEnabled: navigator.cookieEnabled
   }))
  }, [adBlockEnabled])

  const handleLoading = () => {
    setLoading(false)
  }

  return (
    <>
    <div className={`absolute w-screen h-screen overflow-hidden bg-black ${loading ? '' : 'hidden'}`}>
      <LazyLoadedLanding handleLoading={handleLoading}/>
    </div>
      <main className={`${loading ? 'invisible' : 'visible'} relative z-40 w-screen h-screen max-h-screen overflow-x-hidden text-primary flex flex-col items-center`}>
        <nav className="fixed top-0 left-0 z-30 lg:px-3 lg:py-3 mx-auto w-full mb-8">
          <div className="bg-main h-12 border border-1 border-accent w-full window-shadow flex items-center">
            <h3>NavBar</h3>
          </div>
        </nav>
        <section className="container mx-auto relative z-20 my-20 lg:my-32">
          <div className="box-border -mx-4">
            <div className="relative border border-accent window-shadow-2 bg-main">
              <header className="text-center p-1">
                <div className="bg-accent text-card flex justify-between">
                  <button className="btn btn-error" data-set-theme="win98">Win98</button>
                  About Your COmputer
                  <button className="btn btn-warning" data-set-theme="bw">B&W</button>
                </div>
              </header>
              <main>
                <section className="px-8 py-8 grid grid-flow-row gap-4 bg-pixels-light my-2 mx-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className='grid grid-cols-12 col-span-12 lg:col-span-6 gap-4'>
                      <article className="window-shadow-2 border border-1 border-accent bg-card col-span-12 px-8 py-6">
                        <span>Operating System</span>
                      </article>
                      <article className="window-shadow-2 border border-1 border-accent bg-card col-span-12 lg:col-span-6 px-8 py-6">
                        <span>Color Depth</span>
                      </article>
                      <article className="window-shadow-2 border border-1 border-accent bg-card col-span-12 lg:col-span-6 px-8 py-6">
                        <span>Flash</span>
                      </article>
                    </div>
                    <div className='grid grid-cols-12 col-span-12 lg:col-span-6 gap-4'>
                      <article className="window-shadow-2 border border-1 border-accent bg-card col-span-12 lg:col-span-6 px-8 py-6">
                        <span>Javascript</span>
                      </article>
                      <article className="window-shadow-2 border border-1 border-accent bg-card col-span-12 lg:col-span-6 px-8 py-6">
                        <span>Cookies</span>
                      </article>
                      <article className="window-shadow-2 border border-1 border-accent bg-card col-span-12 px-8 py-6">
                        <span>Web Browser</span>
                      </article>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <article className="window-shadow-2 border border-1 border-accent bg-card col-span-12 lg:col-span-3 px-8 py-6">
                      <span>Ad blocker</span>
                    </article>
                    <article className="window-shadow-2 border border-1 border-accent bg-card col-span-12 lg:col-span-3 px-8 py-6">
                      <span>Motion</span>
                    </article>
                    <article className="window-shadow-2 border border-1 border-accent bg-card col-span-12 lg:col-span-3 px-8 py-6">
                      <span>DPI</span>
                    </article>  
                    <article className="window-shadow-2 border border-1 border-accent bg-card col-span-12 lg:col-span-3 px-8 py-6">
                      <span>Resolution</span>
                    </article>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </section>
        <Pattern/>
      </main>    
    </>
  )
}

export const getServerSideProps = (context:GetServerSidePropsContext) => {
  const ip = context.req.socket.remoteAddress

  return {props: {ip: ip||''}}
}

export default Home
