import Image from 'next/image'
import { useRef, useState } from "react"
import useStore from "../../helpers/store"
import RandomAvatar from "../../webgl/RandomAvatar"
import url from "../../public/assets/img/background.png"
import { isIPhone13, isMobile } from "react-device-detect"

const InputNameUI = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const uiStep:number = useStore((s) => s.uiStep)
  console.log('uiStep = ', uiStep)

  const changeName = (value:string) => {
    setName(value)
  }

  const changeEmail = (value:string) => {
    setEmail(value)
  }

  const changeShowState = ()=>{
    if(name==="") return
      localStorage.setItem("avatarName", name);
    if(email==="") return
      localStorage.setItem("email", email);
    RandomAvatar()
    useStore.setState({ name:name, email: email, uiStep: 2 });
  }

  // if (isIPhone13) {
    if (isMobile) {
    console.log('is Iphone')
    return (
      <>
        <div
          className="input-name-ui absolute top-0 left-0 w-screen h-full overflow-hidden"
          style={{display:uiStep===1?'block':'none', backgroundImage: `url(${url.src})`, backgroundSize: 'cover' }} 
        >
          <div className="flex w-screen marker:justify-center items-center flex-col">
            <Image className="md:mt-[76px] sm:mt-[76px] max-[563px]:mt-[20px] grid place-items-center" src={'/assets/img/Logo.png'} width={73} height={73} alt={'logo'} />
            <span className="md:mt-[53px] sm:mt-[45px] max-[563px]:mt-[10px] px-3 block text-[30px] max-[563px]:text-[24px] font-medium text-white font-poppins line-[35px]">
              Welcome to Kicks
            </span>
          </div>
          {/* hide below 425px */}
          {/* <div className="flex w-screen marker:justify-center items-center flex-col max-[564px]:hidden">
            <div className="p-4">
              <div className="columns-2 md:columns-2 ">
                <div className="border-0 text-white text-[15px] leading-[40px] pointer-events-auto ">
                  <label className="block">
                    <span className="px-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-white">
                      Display Name
                    </span>
                    <input 
                      type="text" 
                      name="username" 
                      className="mt-1 px-8 py-0 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#A1A1A1] focus:ring-[#A1A1A1] block rounded-3xl focus:ring-1 pointer-events-auto" 
                      placeholder="Jane"
                      autoComplete="off"
                      style={{outline:'none', background:'none'}}
                      onChange = {(e)=>changeName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="border-0 text-white text-[15px] leading-[40px] pointer-events-auto">
                  <label className="block">
                    <span className="px-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-white">
                      Email Address
                    </span>
                    <input 
                      type="email" 
                      name="email" 
                      className="mt-1 px-8 py-0 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#A1A1A1] focus:ring-[#A1A1A1] block rounded-3xl focus:ring-1 pointer-events-auto" 
                      placeholder="jane@example.com"
                      autoComplete="off"
                      style={{outline:'none', background:'none'}}
                      onChange = {(e)=>changeEmail(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div> */}
          {/* hide over 426px */}
          <div className="flex w-screen marker:justify-center items-center flex-col min-[563px]:hidden">
            <div className="p-4 w-full">
              <div className="justify-center items-center max-[563px]:flex-col">
                <div className="border-0 text-white text-[15px] leading-[40px] pointer-events-auto ">
                  <label className="block">
                    <span className="px-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-white">
                      Display Name
                    </span>
                    <input 
                      type="text" 
                      name="username" 
                      className="w-full mt-1 px-8 py-0 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#A1A1A1] focus:ring-[#A1A1A1] block rounded-3xl focus:ring-1 pointer-events-auto" 
                      placeholder="Jane"
                      autoComplete="off"
                      style={{outline:'none', background:'none'}}
                      onChange = {(e)=>changeName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="border-0 text-white text-[15px] leading-[40px] pointer-events-auto">
                  <label className="block">
                    <span className="px-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-white">
                      Email Address
                    </span>
                    <input 
                      type="email" 
                      name="email" 
                      className="w-full mt-1 px-8 py-0 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#A1A1A1] focus:ring-[#A1A1A1] block rounded-3xl focus:ring-1 pointer-events-auto" 
                      placeholder="jane@example.com"
                      autoComplete="off"
                      style={{outline:'none', background:'none'}}
                      onChange = {(e)=>changeEmail(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-screen justify-center items-center flex-col max-[564px]:hidden">
            <div className="p-4">
              <div className="columns-1">
                <div className="border-0 text-white text-[20px] leading-[40px] pointer-events-auto">
                  <span className="px-3 block text-[14px] font-medium text-white">
                    Select an option
                  </span>
                </div>
              </div>
              <div className="columns-2 md:columns-2 py-2 my-4">
                <div className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-3xl sm:text-sm focus:ring-1 pointer-events-auto">
                  <div className="py-8 grid place-items-center">
                    <svg className="my-4 justify-self-center" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M37.4933 33.5157C37.185 33.4848 36.815 33.4848 36.4758 33.5157C29.1375 33.269 23.31 27.2565 23.31 19.8565C23.31 12.3023 29.415 6.1665 37 6.1665C44.5542 6.1665 50.69 12.3023 50.69 19.8565C50.6592 27.2565 44.8317 33.269 37.4933 33.5157Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22.0767 44.8935C14.615 49.8885 14.615 58.0285 22.0767 62.9927C30.5558 68.666 44.4617 68.666 52.9408 62.9927C60.4025 57.9977 60.4025 49.8577 52.9408 44.8935C44.4925 39.251 30.5867 39.251 22.0767 44.8935Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="mx-8 px-8 py-2 block text-[14px] font-medium text-white">
                      Enter with avatar
                    </span>
                  </div>
                </div>
                <div className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-3xl sm:text-sm focus:ring-1 pointer-events-auto">
                  <div className="py-8 grid place-items-center">
                    <svg className="my-4 justify-self-center" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48.0383 36.9998C48.0383 43.1048 43.105 48.0381 37 48.0381C30.895 48.0381 25.9617 43.1048 25.9617 36.9998C25.9617 30.8948 30.895 25.9614 37 25.9614C43.105 25.9614 48.0383 30.8948 48.0383 36.9998Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M37 62.4994C47.8842 62.4994 58.0283 56.086 65.0892 44.986C67.8642 40.6385 67.8642 33.331 65.0892 28.9835C58.0283 17.8835 47.8842 11.4702 37 11.4702C26.1158 11.4702 15.9717 17.8835 8.91084 28.9835C6.13584 33.331 6.13584 40.6385 8.91084 44.986C15.9717 56.086 26.1158 62.4994 37 62.4994Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="mx-8 px-8 py-2 block text-[14px] font-medium text-white">
                      Enter without avatar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-screen justify-center items-center flex-col min-[563px]:hidden">
            <div className="p-4 w-full">
              <div className="columns-2 md:columns-2">
                <div className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-3xl sm:text-sm focus:ring-1 pointer-events-auto">
                  <div className="pt-8 grid place-items-center">
                    <svg className="justify-self-center" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M37.4933 33.5157C37.185 33.4848 36.815 33.4848 36.4758 33.5157C29.1375 33.269 23.31 27.2565 23.31 19.8565C23.31 12.3023 29.415 6.1665 37 6.1665C44.5542 6.1665 50.69 12.3023 50.69 19.8565C50.6592 27.2565 44.8317 33.269 37.4933 33.5157Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22.0767 44.8935C14.615 49.8885 14.615 58.0285 22.0767 62.9927C30.5558 68.666 44.4617 68.666 52.9408 62.9927C60.4025 57.9977 60.4025 49.8577 52.9408 44.8935C44.4925 39.251 30.5867 39.251 22.0767 44.8935Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="py-8 block text-[14px] font-medium text-white text-center">
                      Enter with 
                      <br />
                      avatar 
                    </span>
                  </div>
                </div>
                <div className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-3xl sm:text-sm focus:ring-1 pointer-events-auto">
                  <div className="pt-8 grid place-items-center">
                    <svg className="justify-self-center" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48.0383 36.9998C48.0383 43.1048 43.105 48.0381 37 48.0381C30.895 48.0381 25.9617 43.1048 25.9617 36.9998C25.9617 30.8948 30.895 25.9614 37 25.9614C43.105 25.9614 48.0383 30.8948 48.0383 36.9998Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M37 62.4994C47.8842 62.4994 58.0283 56.086 65.0892 44.986C67.8642 40.6385 67.8642 33.331 65.0892 28.9835C58.0283 17.8835 47.8842 11.4702 37 11.4702C26.1158 11.4702 15.9717 17.8835 8.91084 28.9835C6.13584 33.331 6.13584 40.6385 8.91084 44.986C15.9717 56.086 26.1158 62.4994 37 62.4994Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="py-8 block text-[14px] font-medium text-white text-center">
                      Enter without
                      <br />
                      avatar 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-screen justify-center items-center flex-col pointer-events-auto">
            <div className="p-4">
              <div className="columns-1">
              <button 
                type="button" 
                className="py-2.5 flex flex-row rounded-3xl text-black text-[16px] bg-[#00DCC3] hover:bg--[#00DCC3] focus:ring-4 focus:ring-[#00DCC3] font-medium text-sm px-5  mr-2 mb-2 dark:bg-[#00DCC3] dark:hover:bg--[#00DCC3] focus:outline-none dark:focus:ring--[#00DCC3] font-vietnam"
                onClick={()=>changeShowState()}
              >Enter store
                <div className='px-2 py-1'>
                  <svg width="13" height="13" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 9L12 5L8.33333 1L12 5H1" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )  
  }
  return (
    <>
      <div
        className="input-name-ui absolute top-0 left-0 w-screen h-full overflow-hidden"
        style={{display:uiStep===1?'block':'none', backgroundImage: `url(${url.src})`, backgroundSize: 'cover' }} 
      >
        <div className="flex w-screen marker:justify-center items-center flex-col">
          <Image className="md:mt-[96px] sm:mt-[96px] max-[563px]:mt-[60px] grid place-items-center" src={'/assets/img/Logo.png'} width={73} height={73} alt={'logo'} />
          <span className="md:mt-[53px] sm:mt-[45px] max-[563px]:mt-[40px] px-3 block text-[30px] max-[563px]:text-[24px] font-medium text-white font-poppins line-[35px]">
            Welcome to Kicks
          </span>
        </div>
        {/* hide below 425px */}
        <div className="flex w-screen marker:justify-center items-center flex-col max-[564px]:hidden">
          <div className="p-4">
            <div className="columns-2 md:columns-2 ">
              <div className="border-0 text-white text-[15px] leading-[40px] pointer-events-auto ">
                <label className="block">
                  <span className="px-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-white">
                    Display Name
                  </span>
                  <input 
                    type="text" 
                    name="username" 
                    className="mt-1 px-8 py-0 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#A1A1A1] focus:ring-[#A1A1A1] block rounded-3xl focus:ring-1 pointer-events-auto" 
                    placeholder="Jane"
                    autoComplete="off"
                    style={{outline:'none', background:'none'}}
                    onChange = {(e)=>changeName(e.target.value)}
                  />
                </label>
              </div>
              <div className="border-0 text-white text-[15px] leading-[40px] pointer-events-auto">
                <label className="block">
                  <span className="px-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-white">
                    Email Address
                  </span>
                  <input 
                    type="email" 
                    name="email" 
                    className="mt-1 px-8 py-0 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#A1A1A1] focus:ring-[#A1A1A1] block rounded-3xl focus:ring-1 pointer-events-auto" 
                    placeholder="jane@example.com"
                    autoComplete="off"
                    style={{outline:'none', background:'none'}}
                    onChange = {(e)=>changeEmail(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* hide over 426px */}
        <div className="flex w-screen marker:justify-center items-center flex-col min-[563px]:hidden">
          <div className="p-4 w-full">
            <div className="justify-center items-center max-[563px]:flex-col">
              <div className="border-0 text-white text-[15px] leading-[40px] pointer-events-auto ">
                <label className="block">
                  <span className="px-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-white">
                    Display Name
                  </span>
                  <input 
                    type="text" 
                    name="username" 
                    className="w-full mt-1 px-8 py-0 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#A1A1A1] focus:ring-[#A1A1A1] block rounded-3xl focus:ring-1 pointer-events-auto" 
                    placeholder="Jane"
                    autoComplete="off"
                    style={{outline:'none', background:'none'}}
                    onChange = {(e)=>changeName(e.target.value)}
                  />
                </label>
              </div>
              <div className="border-0 text-white text-[15px] leading-[40px] pointer-events-auto">
                <label className="block">
                  <span className="px-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-white">
                    Email Address
                  </span>
                  <input 
                    type="email" 
                    name="email" 
                    className="w-full mt-1 px-8 py-0 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#A1A1A1] focus:ring-[#A1A1A1] block rounded-3xl focus:ring-1 pointer-events-auto" 
                    placeholder="jane@example.com"
                    autoComplete="off"
                    style={{outline:'none', background:'none'}}
                    onChange = {(e)=>changeEmail(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-screen justify-center items-center flex-col max-[564px]:hidden">
          <div className="p-4">
            <div className="columns-1">
              <div className="border-0 text-white text-[20px] leading-[40px] pointer-events-auto">
                <span className="px-3 block text-[14px] font-medium text-white">
                  Select an option
                </span>
              </div>
            </div>
            <div className="columns-2 md:columns-2 py-2 my-4">
              <div className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-3xl sm:text-sm focus:ring-1 pointer-events-auto">
                <div className="py-8 grid place-items-center">
                  <svg className="my-4 justify-self-center" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.4933 33.5157C37.185 33.4848 36.815 33.4848 36.4758 33.5157C29.1375 33.269 23.31 27.2565 23.31 19.8565C23.31 12.3023 29.415 6.1665 37 6.1665C44.5542 6.1665 50.69 12.3023 50.69 19.8565C50.6592 27.2565 44.8317 33.269 37.4933 33.5157Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.0767 44.8935C14.615 49.8885 14.615 58.0285 22.0767 62.9927C30.5558 68.666 44.4617 68.666 52.9408 62.9927C60.4025 57.9977 60.4025 49.8577 52.9408 44.8935C44.4925 39.251 30.5867 39.251 22.0767 44.8935Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="mx-8 px-8 py-2 block text-[14px] font-medium text-white">
                    Enter with avatar
                  </span>
                </div>
              </div>
              <div className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-3xl sm:text-sm focus:ring-1 pointer-events-auto">
                <div className="py-8 grid place-items-center">
                  <svg className="my-4 justify-self-center" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.0383 36.9998C48.0383 43.1048 43.105 48.0381 37 48.0381C30.895 48.0381 25.9617 43.1048 25.9617 36.9998C25.9617 30.8948 30.895 25.9614 37 25.9614C43.105 25.9614 48.0383 30.8948 48.0383 36.9998Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M37 62.4994C47.8842 62.4994 58.0283 56.086 65.0892 44.986C67.8642 40.6385 67.8642 33.331 65.0892 28.9835C58.0283 17.8835 47.8842 11.4702 37 11.4702C26.1158 11.4702 15.9717 17.8835 8.91084 28.9835C6.13584 33.331 6.13584 40.6385 8.91084 44.986C15.9717 56.086 26.1158 62.4994 37 62.4994Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="mx-8 px-8 py-2 block text-[14px] font-medium text-white">
                    Enter without avatar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-screen justify-center items-center flex-col min-[563px]:hidden">
          <div className="p-4 w-full">
            <div className="columns-2 md:columns-2">
              <div className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-3xl sm:text-sm focus:ring-1 pointer-events-auto">
                <div className="pt-8 grid place-items-center">
                  <svg className="justify-self-center" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.4933 33.5157C37.185 33.4848 36.815 33.4848 36.4758 33.5157C29.1375 33.269 23.31 27.2565 23.31 19.8565C23.31 12.3023 29.415 6.1665 37 6.1665C44.5542 6.1665 50.69 12.3023 50.69 19.8565C50.6592 27.2565 44.8317 33.269 37.4933 33.5157Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.0767 44.8935C14.615 49.8885 14.615 58.0285 22.0767 62.9927C30.5558 68.666 44.4617 68.666 52.9408 62.9927C60.4025 57.9977 60.4025 49.8577 52.9408 44.8935C44.4925 39.251 30.5867 39.251 22.0767 44.8935Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="py-8 block text-[14px] font-medium text-white text-center">
                    Enter with 
                    <br />
                    avatar 
                  </span>
                </div>
              </div>
              <div className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-3xl sm:text-sm focus:ring-1 pointer-events-auto">
                <div className="pt-8 grid place-items-center">
                  <svg className="justify-self-center" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.0383 36.9998C48.0383 43.1048 43.105 48.0381 37 48.0381C30.895 48.0381 25.9617 43.1048 25.9617 36.9998C25.9617 30.8948 30.895 25.9614 37 25.9614C43.105 25.9614 48.0383 30.8948 48.0383 36.9998Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M37 62.4994C47.8842 62.4994 58.0283 56.086 65.0892 44.986C67.8642 40.6385 67.8642 33.331 65.0892 28.9835C58.0283 17.8835 47.8842 11.4702 37 11.4702C26.1158 11.4702 15.9717 17.8835 8.91084 28.9835C6.13584 33.331 6.13584 40.6385 8.91084 44.986C15.9717 56.086 26.1158 62.4994 37 62.4994Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="py-8 block text-[14px] font-medium text-white text-center">
                    Enter without
                    <br />
                    avatar 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-screen justify-center items-center flex-col pointer-events-auto">
          <div className="p-4">
            <div className="columns-1">
            <button 
              type="button" 
              className="py-2.5 flex flex-row rounded-3xl text-black text-[16px] bg-[#00DCC3] hover:bg--[#00DCC3] focus:ring-4 focus:ring-[#00DCC3] font-medium text-sm px-5  mr-2 mb-2 dark:bg-[#00DCC3] dark:hover:bg--[#00DCC3] focus:outline-none dark:focus:ring--[#00DCC3] font-vietnam"
              onClick={()=>changeShowState()}
            >Enter store
              <div className='px-2 py-1'>
                <svg width="13" height="13" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33333 9L12 5L8.33333 1L12 5H1" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InputNameUI