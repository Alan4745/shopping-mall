import Image from "next/image"
import useStore from "../../helpers/store"
import url from "../../public/assets/img/background.png"

const PlayerIntroduce = () => {

  const uiStep:number = useStore((s) => s.uiStep)

  const changeShowState = ()=>{
    useStore.setState({ startWorld: true, uiStep:3 });
  }

  return (
    <>
      <div
        className="input-name-ui absolute top-0 left-0 w-screen h-screen overflow-hidden"
        style={{display:uiStep===2?'block':'none', backgroundImage: `url(${url.src})`, backgroundSize: 'cover' }} 
      >
        <div className='absolute bottom-8 right-8 left-[40px] flex justify-end md:justify-between items-center'>
          <div className='hidden md:block'>
            <div className=' flex justify-start'>
              <Image className="uilogo pt-8 pr-1 mr-4" src={'/assets/img/Logo.png'} width={60} height={50} alt={'logo'} />
            </div>
          </div>
        </div>

        <div className="flex w-screen marker:justify-center items-center flex-col max-[564px]:hidden">
          <span className="md:my-[93px] sm:my-[85px] max-[563px]:my-[90px] px-3 block text-[30px] max-[563px]:text-[24px] font-semibold text-white font-poppins line-[35px]">
            Move around the store
          </span>
        </div>

        <div className="flex w-screen justify-center items-center flex-col max-[564px]:hidden">
          <div className="">
            <div className="columns-2 md:columns-2 py-2">
              <div className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-3xl sm:text-sm focus:ring-1 pointer-events-auto mx-2">
                <div className="py-8 grid place-items-center">
                  <svg className="my-[24px]" width="130" height="87" viewBox="0 0 130 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="46.26" y="0.5" width="37.48" height="38.52" rx="7.5" stroke="white"/>
                    <rect x="46.26" y="47.2998" width="37.48" height="38.52" rx="7.5" stroke="white"/>
                    <rect x="0.5" y="47.2998" width="36.44" height="38.52" rx="7.5" stroke="white"/>
                    <rect x="93.06" y="47.2998" width="36.44" height="38.52" rx="7.5" stroke="white"/>
                    <path d="M59.6493 21.52H60.6793L62.1293 27.23H62.1893L64.0093 21.52H64.9393L66.7593 27.23H66.8193L68.2793 21.52H69.3093L67.4593 28.52H66.1393L64.5093 23.35H64.4493L62.8093 28.52H61.4893L59.6493 21.52Z" fill="white"/>
                    <path d="M64.5471 75.3998C64.0004 75.3998 63.5304 75.2898 63.1371 75.0698C62.7504 74.8432 62.4571 74.5532 62.2571 74.1998C62.0637 73.8465 61.9671 73.4765 61.9671 73.0898V73.0398H63.1071V73.0898C63.1071 73.3032 63.1571 73.5165 63.2571 73.7298C63.3571 73.9365 63.5171 74.1132 63.7371 74.2598C63.9571 74.3998 64.2337 74.4698 64.5671 74.4698C64.9737 74.4698 65.3037 74.3665 65.5571 74.1598C65.8171 73.9532 65.9471 73.6732 65.9471 73.3198C65.9471 73.0265 65.8471 72.7932 65.6471 72.6198C65.4537 72.4465 65.2071 72.3298 64.9071 72.2698L63.9471 72.0798C63.5271 71.9932 63.1204 71.8165 62.7271 71.5498C62.3404 71.2765 62.1471 70.8232 62.1471 70.1898C62.1471 69.7832 62.2437 69.4265 62.4371 69.1198C62.6371 68.8132 62.9137 68.5798 63.2671 68.4198C63.6204 68.2532 64.0237 68.1698 64.4771 68.1698C64.9971 68.1698 65.4437 68.2732 65.8171 68.4798C66.1904 68.6865 66.4704 68.9565 66.6571 69.2898C66.8504 69.6165 66.9471 69.9598 66.9471 70.3198V70.3598H65.8071V70.3298C65.8071 70.1498 65.7637 69.9632 65.6771 69.7698C65.5904 69.5765 65.4437 69.4132 65.2371 69.2798C65.0371 69.1398 64.7737 69.0698 64.4471 69.0698C64.0604 69.0698 63.7537 69.1765 63.5271 69.3898C63.3071 69.5965 63.1971 69.8565 63.1971 70.1698C63.1971 70.4432 63.2904 70.6665 63.4771 70.8398C63.6704 71.0132 63.9204 71.1298 64.2271 71.1898L65.1171 71.3698C65.6304 71.4765 66.0771 71.6732 66.4571 71.9598C66.8437 72.2465 67.0371 72.6898 67.0371 73.2898C67.0371 73.7032 66.9304 74.0698 66.7171 74.3898C66.5104 74.7098 66.2171 74.9598 65.8371 75.1398C65.4637 75.3132 65.0337 75.3998 64.5471 75.3998Z" fill="white"/>
                    <path d="M108.552 68.3198H111.162C111.789 68.3198 112.335 68.4598 112.802 68.7398C113.275 69.0198 113.642 69.4232 113.902 69.9498C114.162 70.4765 114.292 71.0965 114.292 71.8098C114.292 72.5298 114.162 73.1565 113.902 73.6898C113.642 74.2165 113.275 74.6198 112.802 74.8998C112.329 75.1798 111.779 75.3198 111.152 75.3198H108.552V68.3198ZM110.992 74.3698C111.659 74.3698 112.192 74.1565 112.592 73.7298C112.992 73.3032 113.192 72.6632 113.192 71.8098C113.192 70.9565 112.992 70.3165 112.592 69.8898C112.199 69.4632 111.665 69.2498 110.992 69.2498H109.562V74.3698H110.992Z" fill="white"/>
                    <path d="M19.0413 73.3898H16.3313L15.6613 75.3198H14.6113L17.2013 68.3198H18.1813L20.7813 75.3198H19.7313L19.0413 73.3898ZM18.7513 72.5698L17.7013 69.6298H17.6513L16.6213 72.5698H18.7513Z" fill="white"/>
                    <path d="M64.8336 6.92651C64.6383 6.73124 64.3217 6.73124 64.1265 6.92651L60.9445 10.1085C60.7492 10.3037 60.7492 10.6203 60.9445 10.8156C61.1397 11.0109 61.4563 11.0109 61.6516 10.8156L64.48 7.98716L67.3084 10.8156C67.5037 11.0109 67.8203 11.0109 68.0155 10.8156C68.2108 10.6203 68.2108 10.3037 68.0155 10.1085L64.8336 6.92651ZM64.98 14.5601L64.98 7.28006L63.98 7.28006L63.98 14.5601L64.98 14.5601Z" fill="white"/>
                    <path d="M64.1265 61.7136C64.3217 61.9089 64.6383 61.9089 64.8336 61.7136L68.0155 58.5317C68.2108 58.3364 68.2108 58.0198 68.0155 57.8245C67.8203 57.6293 67.5037 57.6293 67.3084 57.8245L64.48 60.653L61.6516 57.8245C61.4563 57.6293 61.1397 57.6293 60.9445 57.8245C60.7492 58.0198 60.7492 58.3364 60.9445 58.5317L64.1265 61.7136ZM63.98 54.0801L63.98 61.3601L64.98 61.3601L64.98 54.0801L63.98 54.0801Z" fill="white"/>
                    <path d="M13.6865 57.3667C13.4912 57.5619 13.4912 57.8785 13.6865 58.0738L16.8684 61.2557C17.0637 61.451 17.3803 61.451 17.5755 61.2557C17.7708 61.0605 17.7708 60.7439 17.5755 60.5486L14.7471 57.7202L17.5755 54.8918C17.7708 54.6965 17.7708 54.3799 17.5755 54.1847C17.3803 53.9894 17.0637 53.9894 16.8684 54.1847L13.6865 57.3667ZM21.32 57.2202L14.04 57.2202L14.04 58.2202L21.32 58.2202L21.32 57.2202Z" fill="white"/>
                    <path d="M115.794 57.8867C115.989 58.0819 115.989 58.3985 115.794 58.5938L112.612 61.7758C112.416 61.971 112.1 61.971 111.904 61.7758C111.709 61.5805 111.709 61.2639 111.904 61.0687L114.733 58.2402L111.904 55.4118C111.709 55.2165 111.709 54.9 111.904 54.7047C112.1 54.5094 112.416 54.5094 112.612 54.7047L115.794 57.8867ZM108.16 57.7402L115.44 57.7402L115.44 58.7402L108.16 58.7402L108.16 57.7402Z" fill="white"/>
                  </svg>

                  <span className="mx-8 px-2 py-2 block text-[20px] font-medium text-white text-center font-vietnam leading-6">
                    Use W, A, S, D to 
                    <br />
                    navigate through
                    <br />
                    the store
                  </span>
                </div>
              </div>
              <div className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-3xl sm:text-sm focus:ring-1 pointer-events-auto mx-2">
                <div className="py-8 grid place-items-center">
                  <svg className="my-[42px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.54 37.9098L41.0763 39.0786C40.12 39.3973 39.355 40.1411 39.0363 41.1186L37.8675 44.5823C36.8688 47.5786 32.6613 47.5148 31.7263 44.5186L27.795 31.8748C27.03 29.3673 29.3463 27.0298 31.8325 27.816L44.4975 31.7473C47.4725 32.6823 47.515 36.911 44.54 37.9098Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M46.75 25.5C46.75 13.77 37.23 4.25 25.5 4.25C13.77 4.25 4.25 13.77 4.25 25.5C4.25 37.23 13.77 46.75 25.5 46.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="mx-8 px-2 py-2 block text-[20px] font-medium text-white text-center font-vietnam leading-6">
                    To change
                    <br />
                    viewpoint, just
                    <br />
                    move your mouse
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-screen justify-end items-center flex-col min-[563px]:hidden h-2/3">
          <div className="p-4 w-full">
            <div className="">
              <div className="sm:text-sm focus:ring-1 pointer-events-auto">
                <div className="pt-8 grid place-items-center">
                  <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="54" cy="54" r="52.5" stroke="white" strokeWidth="3"/>
                    <circle cx="53.9999" cy="54.0001" r="20.8043" fill="white" fillOpacity="0.9" stroke="#00DCC3" strokeWidth="3"/>
                  </svg>


                  <span className="py-8 block text-[20px] font-medium text-white text-center font-vietnam leading-6">
                    Move the joystick
                    <br />
                    to move around
                    <br />
                    the store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-screen justify-center items-center flex-col pointer-events-auto">
          <div className="p-4 max-[564px]:mt-[20px] min-[563px]:mt-[100px]">
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

export default PlayerIntroduce
