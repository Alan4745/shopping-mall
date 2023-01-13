import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"
import useStore from "../../helpers/store"
import AllDetails from "./AllDetails/Index"
import RandomAvatar from "../../webgl/RandomAvatar"
import { useRef } from "react"
import { useState } from "react"
import React from "react"



// const Item = (props:any) => {
//   const createAvatarItem:number = useStore((s) => s.createAvatarItem)
//   return(
//     <>
//       <div className="customize-avatar-item bg-[#585858] hover:border-[#00DCC3]" onClick={()=>useStore.setState({ createAvatarItem: props.item })}>
//         <div className={createAvatarItem===props.item?"item-bkground selected-item":"item-bkground"}/>
//         <div className="relative w-[26px] h-[24px] ml-[13px] mr-[10px] mt-[16px] border border-1 border-white rounded-[6px] block max-sm:hidden">
//           <img src={props.url} className="w-[40px] h-[24px] rounded-full"/>
//         </div>
//         <div className="relative w-[26px] h-[24px] ml-[13px] mr-[10px] mt-[11px] border border-1 border-white rounded-[6px] min-[564px]:hidden">
//           <img src={props.url} className="w-[40px] h-[24px] rounded-full"/>
//         </div>

//         <span className={createAvatarItem===props.item?"item-text selected-item-text text-[16px] text-white mt-1":"item-text text-[16px] text-white mt-1"}>{props.text}</span>
//       </div>
//     </>
//   )
// }


// "onDataFromChild" is the parameter that we pass to the parent component
const ProfileUI = ({ onDataFromChild }) => {

  const uiStep: number = useStore((s) => s.uiStep)
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      console.log('prfoleUI useEffect')
    }
  }, [])

  const moveShowroom = () => {
    useStore.setState({ uiStep: 3 })
  }



  const subdomain = 'demo'
  const iFrameRef = useRef(null)
  const [avatarUrl, setAvatarUrl] = useState('')
  const [showIFrame, setShowIFrame] = useState(true)
  const [predicting, setPredicting] = useState(false)

  useEffect(() => {
    let iFrame = iFrameRef.current
    if (iFrame) {
      //here we send the Iframe the url that it will render
      iFrame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`
    }
  })

  useEffect(() => {
    window.addEventListener('message', subscribe)
    document.addEventListener('message', subscribe)

    return () => {
      window.removeEventListener('message', subscribe)
      document.removeEventListener('message', subscribe)
    }
  });

  function subscribe(event: any) {
    const json = parse(event)

    if (json?.source !== 'readyplayerme') {
      return;
    }

    // Subscribe to all events sent from Ready Player Me once frame is ready
    if (json.eventName === 'v1.frame.ready') {
      let iFrame = iFrameRef.current
      if (iFrame && iFrame.contentWindow) {
        iFrame.contentWindow.postMessage(
          JSON.stringify({
            target: 'readyplayerme',
            type: 'subscribe',
            eventName: 'v1.**'
          }),
          '*'
        );
      }
    }

    // Get avatar GLB URL
    if (json.eventName === 'v1.avatar.exported') {
      console.log(`Avatar URL: ${json.data.url}`);
//here later we send our url of our model obtained from ready player to me to be able to use them in other components
      setAvatarUrl(json.data.url)
      // setShowIFrame(false);
      // setPredicting(true)
      const data = json.data.url;
//we send the url to the parent component to be able to use it as a playable character
      onDataFromChild(data);
//redirect to the next step
      useStore.setState({ startWorld: true, uiStep: 3 })

    }

    // Get user id
    if (json.eventName === 'v1.user.set') {
      console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
    }
  }

  function parse(event: { data: string }) {
    try {
      return JSON.parse(event.data);

    } catch (error) {
      return null;
    }
  }


  return (
    <>
      <div className="profile-ui absolute top-0 left-0 h-screen" style={{ display: uiStep === 4 ? 'block' : 'none' }}>
        {/* <div className="absolute left-0 bottom-24 md:bottom-16 w-screen">
          <div className="w-screen flex justify-center">
            <div className="flex w-screen justify-center items-center flex-col pointer-events-auto">
              <div className="p-4 mt-[100px]">
                <div className="columns-1">
                  <button
                    type="button"
                    className="py-2.5 flex flex-row rounded-3xl text-black text-[16px] bg-[#00DCC3] hover:bg--[#00DCC3] focus:ring-4 focus:ring-[#00DCC3] font-medium text-sm px-5  mr-2 mb-2 dark:bg-[#00DCC3] dark:hover:bg--[#00DCC3] focus:outline-none dark:focus:ring--[#00DCC3] font-vietnam"
                    onClick={() => moveShowroom()}
                  >I am ready
                    <div className='px-2 py-1'>
                      <svg width="13" height="13" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33333 9L12 5L8.33333 1L12 5H1" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute bottom-[40px] left-[40px] w-[75px] h-[80px]'>
          <div className='hidden md:block'>
            <div className=' flex justify-start'>
              <Image className="uilogo1 pt-8 pr-1 mr-4" src={'/assets/img/Logo.png'} width={100} height={100} alt={'logo'} />
            </div>
          </div>
        </div>

        <div className="absolute top-8 left-0 w-screen">
          <div className="md:flex w-screen justify-center hidden ">
            <div className="p-4">
              <div className="text-gray-300 text-[30px] mt-4 text-center font-semibold">
                Customize Avatar
              </div>
            </div>
          </div>
          <div className="max-md:flex w-screen justify-start md:hidden">
            <div className="py-4 ml-8">
              <div className="text-gray-300 text-[21px] mt-4 text-left font-semibold">
                Customize Avataraaaaaaa
              </div>
            </div>
          </div>
        </div> */}

        <div className="w-screen flex justify-center">
          <iframe
            allow="camera *; microphone *"
            className="iFrame"
            id="frame"
            ref={iFrameRef}
            style={{
              display: `${showIFrame ? 'block' : 'none'}`,
              width: '100%',
              height: '100vh',
              pointerEvents: 'auto',
              position: 'absolute'
            }}
            title={"Ready Player Me"}
          />
          {/* <div className="flex w-screen justify-center items-center flex-col pointer-events-auto">
              <div className="p-4 mt-[100px]">
                <div className="columns-1">
                  <button
                    type="button"
                    className="py-2.5 flex flex-row rounded-3xl text-black text-[16px] bg-[#00DCC3] hover:bg--[#00DCC3] focus:ring-4 focus:ring-[#00DCC3] font-medium text-sm px-5  mr-2 mb-2 dark:bg-[#00DCC3] dark:hover:bg--[#00DCC3] focus:outline-none dark:focus:ring--[#00DCC3] font-vietnam"
                    onClick={() => moveShowroom()}
                  >I am ready
                    <div className='px-2 py-1'>
                      <svg width="13" height="13" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33333 9L12 5L8.33333 1L12 5H1" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div> */}
        </div>

      </div>
    </>
  )
}

export default ProfileUI
