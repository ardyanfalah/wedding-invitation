import React from 'react'
import tw from 'twin.macro'
import Iframe from 'react-iframe'
import {
  Countdown,
  Layout,
  Button,
  Link,
  LazyImage,
  LazyImageNonStyle,
  Logo
} from '../components'
import { Player } from '@lottiefiles/react-lottie-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarAlt,
  faClock,
  faHeart,
  faCopy,
  faComment
} from '@fortawesome/free-regular-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { createClient } from '@supabase/supabase-js'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import styled, { createGlobalStyle } from 'styled-components'

import QRImage from '../images/qrbca.png'
import couple2 from '../images/couple2.png'
import bismillah from '../images/bismillah.png'
import roundedArdy from '../images/rounded-ardy.png'
import roundedFirda from '../images/rounded-firda.png'
import ring from '../images/ring.png'
import aisle from '../images/aisle.png'
import akad from '../images/akad.png'
import resepsi from '../images/resepsi.png'
import mute from '../images/mute.png'
import unmute from '../images/unmute.png'
import Butterfly from '../images/butterfly.json'
import bgImie from '../images/bgImie.jpeg'
import ppImie from '../images/ppImie.png'

import Modal from '../components/Modal'
import { photos } from '../components/photos'

const supabase = createClient(
  process.env.GATSBY_SUPABASE_HOST,
  process.env.GATSBY_SUPABASE_KEY
)

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
  }
`

const Grid = styled.div`
  display: grid;
  padding: 16px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;
`

const App = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [showGiving, setShowGiving] = React.useState(false)
  const { register, errors, handleSubmit } = useForm()
  const [posts, setPosts] = React.useState([])
  const [isPlaying, setIsPlaying] = React.useState(false)

  const textCopy = 'Salin Nomor Rekening'
  const [copyButtonText, setCopyButtonText] = React.useState(textCopy)

  const textCopy2 = 'Salin Nomor Rekening'
  const [copyButtonText2, setCopyButtonText2] = React.useState(textCopy2)

  var audio = null
  if (typeof Audio != 'undefined') {
    audio = new Audio('../images/song.mp3')
  }
  const audioRef = React.useRef(null)
  const play = (audio) => {
    !isPlaying ? audioRef.current.play() : audioRef.current.pause()
    setIsPlaying(!isPlaying)
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCopyButtonText(textCopy)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copyButtonText])

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCopyButtonText2(textCopy2)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copyButtonText2])

  React.useEffect(() => {
    fetchPosts()
    const mySubscription = supabase
      .from('comment')
      .on('*', () => fetchPosts())
      .subscribe()
    return () => supabase.removeSubscription(mySubscription)
  }, [])

  var ObjectRow = React.creat({
    render: function () {
      return (
        <tr>
          <td>test</td>
        </tr>
      )
    }
  })

  const masjidRow = () => {
    return (
      <div>
        <div
          className="mirror"
          tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20"
        />
        <div tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20" />
        <div
          className="mirror"
          tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20"
        />
        <div tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20" />
      </div>
    )
  }

  async function fetchPosts() {
    const { data } = await supabase
      .from('comment')
      .select('*')
      .order('created_at', { ascending: false })
    setPosts(data)
  }

  const onSubmit = (data) => {
    clear()
    let loadingToast = toast.loading('Please wait...')
    supabase
      .from('comment')
      .insert([data])
      .then(({ data, error }) => {
        if (!error) {
          if (data[0]) {
            toast.success('Pesan Berhasil Dikirim.', {
              id: loadingToast
            })
            clear()
          }
        } else {
          toast.error(error.message, {
            id: loadingToast
          })
        }
      })
  }

  const copyAccountNumber = (accNum) => {
    navigator.clipboard.writeText(accNum)
    setCopyButtonText('Rekening berhasil disalin')
  }

  const copyAccountNumber2 = (accNum) => {
    navigator.clipboard.writeText(accNum)
    setCopyButtonText2('Rekening berhasil disalin')
  }

  const clear = () => {
    document.getElementById('messageForm').reset()
  }

  return (
    <Layout css={tw`min-h-screen  overflow-hidden relative`}>
      <Global />

      {/* <div tw="absolute -top-8 -right-4 w-28 h-28 bg-cover bg-no-repeat transform rotate-180  bg-kmbg3 z-10" />
      <div tw="absolute -top-5 -left-8 w-28 h-28 bg-cover bg-no-repeat transform  rotate-90 bg-kmbg3 z-10" /> */}

      <div
        className="container"
        tw="mx-0 flex flex-col justify-center items-center bg-bgimie bg-cover bg-center bg-no-repeat min-h-screen min-w-full"
      >
        {/* <div tw="p-5 block mt-24">
          <Logo />
        </div> */}
        <div className="container " tw="text-center mt-96">
          <p className="subtitle">Tasyakuran Khitanan</p>
          <p className="title">HILMI AS-SYAUQI</p>
          <p className="subtitle">Senin, 25 Juli 2022</p>
        </div>
        {/* <div tw="w-full sm:w-3/5 ">
          <LazyImageNonStyle
            src={couple2}
          />
        </div>

        <div tw="w-20 h-20 absolute ml-40 top-32">
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src={Butterfly}
            style={{ height: '100%', width: '100%' }}
          ></Player>
        </div> */}
      </div>

      <div tw="py-24 bg-blues-100 relative ">
        <div className="container" tw="mx-auto items-center pb-6 px-8  sm:px-0">
          <div tw="absolute top-0 -right-20 w-32 h-32 bg-contain bg-no-repeat transform bg-lampu z-20" />
          <div
            className="mirror"
            tw="absolute top-0 -left-20 w-32 h-32 bg-contain bg-no-repeat  rotate-0  bg-lampu z-20"
          />
          <div tw="px-8">
            {/* <img src={bismillah} /> */}
            <LazyImageNonStyle src={bismillah} />
          </div>

          <p
            className="title-identity"
            tw="text-center text-white mt-8 text-lg"
          >
            Assalamu'alaikum Warahmatullahi Wabarakatuh.
            <br />
            <br />
            Dengan memohon rahmat dan ridho Allah SWT, Kami mengundang Bapak/Ibu
            Saudara/i untuk menghadiri acara Tasyakuran Walimatul Khitan Putra
            Kami:
          </p>

          <div className="container" tw="mt-8 text-center">
            <div tw="grid justify-items-center">
              <img src={ppImie} width="50%" alt="" />
              <br />
              <span className=" title" tw="mt-2 text-2xl ">
                HILMI AS-SYAUQI
              </span>
            </div>
            <div className="explainbride" tw="text-white text-lg">
              {' '}
              Putra dari
              <br /> <span tw="font-bold">Bpk. Dhani Nursetia</span> <br />{' '}
              &amp; <span tw="font-bold">Ibu Winda Iriantie Achmad</span>{' '}
            </div>
          </div>
        </div>

        <div className="display-xs">
          <div tw=" absolute flex flex-nowrap z-20 h-10 bottom-3">
            {[...Array(5)].map((x, i) => (
              <ObjectRow key={i + 1} index={i + 1} />
            ))}
          </div>
        </div>
        <div className="display-sm">
          <div tw=" absolute flex flex-nowrap z-20 h-10 bottom-3">
            <div
              className="mirror"
              tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20"
            />
            <div tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20" />
            <div
              className="mirror"
              tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20"
            />
            <div tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20" />
            <div
              className="mirror"
              tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20"
            />
            <div tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20" />
            <div
              className="mirror"
              tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20"
            />
            <div tw=" w-28 h-28 bg-contain bg-no-repeat bg-masjid z-20" />
          </div>
        </div>
      </div>
      <div tw="py-24 bg-blues-200 relative min-h-screen">
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-8  sm:px-0"
        >
          <p tw="text-white text-lg font-dosis">
            Yang Insya Allah akan dilaksanakan pada:
          </p>
          <div tw="text-4xl sm:text-5xl font-brittany text-white text-center mb-12 mt-5">
            Khitanan
          </div>
          <p tw="text-white text-lg font-dosis font-bold mb-12">
            <FontAwesomeIcon icon={faCalendarAlt} tw="mr-2" /> Senin, 25 Juli
            2022 <br /> <FontAwesomeIcon icon={faClock} tw="mr-2" /> 10.00 -
            21.00 WIB
          </p>
          <div tw="text-4xl sm:text-5xl font-brittany text-white text-center mb-12 mt-5">
            Lokasi
          </div>
          <p tw="text-white text-lg mb-10 font-bold font-dosis">
            <FontAwesomeIcon icon={faMapMarker} tw="mr-2" />
            Jl. Asia Baru No. 1 RT 03 RW 04 Kel. Duri Kepa, Kec. Kebon Jeruk,
            Jakarta Barat
          </p>
          <div tw="flex mb-4 items-center justify-center">
            <div tw="py-4">
              <Link
                isPrimary={true}
                href="https://goo.gl/maps/WsYpVC3oFimvwRmF6"
              >
                Lihat Map
              </Link>
            </div>
          </div>

          <div
            className="mirror"
            tw="absolute bottom-0 right-2 w-28 h-28 bg-contain bg-no-repeat rotate-0   bg-pohon z-20"
          />

          <div tw="absolute bottom-0 left-2 w-28 h-28 bg-contain bg-no-repeat  rotate-0  bg-pohon z-20" />
        </div>
      </div>

      <div tw="py-24 bg-blues-300 ">
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-green-100 text-center mb-12 mt-5">
            Hadiah
          </div>

          <p tw="text-green-100 text-lg mb-10 font-bold font-dosis">
            Bagi yang berkeinginan memberikan tanda kasih, kami juga menyediakan
            nomor rekening di bawah ini.
          </p>

          <Button isSecondary={true} onClick={() => setShowGiving(!showGiving)}>
            Amplop Digital
          </Button>
          {showGiving ? (
            <>
              <div
                tw="mx-auto w-full p-4 leading-loose font-sans items-center justify-center text-center"
                style={{ maxWidth: 640 }}
              >
                <div tw="text-green-100 font-dosis">Transfer via BCA </div>
                <div tw="text-green-100 font-dosis text-2xl">1270155304</div>
                <div tw="text-green-100 font-dosis mb-4 ">Dhani Nursetia</div>
                <Button
                  isPrimary={true}
                  onClick={() => copyAccountNumber('1270155304')}
                  isSmall={true}
                >
                  <FontAwesomeIcon icon={faCopy} tw="mr-1 " />
                  {copyButtonText}
                </Button>

                <div tw="mt-6 text-green-100 font-dosis">
                  Transfer via Mandiri
                </div>
                <div tw=" text-2xl text-green-100 font-dosis">
                  1180010901089
                </div>
                <div tw=" mb-10 text-green-100 font-dosis">
                  Winda Iriantie Achmad
                </div>

                <Button
                  isPrimary={true}
                  onClick={() => copyAccountNumber2('1180010901089')}
                  isSmall={true}
                >
                  <FontAwesomeIcon icon={faCopy} tw="mr-1" />
                  {copyButtonText2}
                </Button>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div tw="py-24 justify-center relative flex bg-bgimie2 bg-cover bg-center bg-no-repeat  h-4/5">
        <div
          className="container"
          tw=" pb-12 px-4 sm:px-0 place-items-center justify-start h-96"
        >
          <div
            className="container"
            tw="mx-auto items-center pb-12 px-4 sm:px-0 absolute -bottom-2 "
          >
            <div tw="text-4xl sm:text-5xl font-brittany text-white text-center mb-12 mt-5">
              Menuju Hari Bahagia
            </div>
            <div tw="mt-10">
              <Countdown></Countdown>
            </div>
          </div>
        </div>
      </div>

      <div tw="pt-8 bg-blues-100 ">
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-white text-center mb-12 mt-5">
            Protokol Kesehatan
          </div>

          <div className="explainbride health-advice" tw="pb-8">
            <p>
              <FontAwesomeIcon icon={faHeart} />
              <br />
              Guna mencegah penularan covid-19 kami harapkan kedatangan para
              tamu undangan tetap menerapkan protokol yang berlaku :
            </p>
            <div className="advices">Wajib menggunakan masker</div>
            <div className="advices">
              Menggunakan salam namaste / salam hangat tanpa bersentuhan
            </div>
            <div className="advices">Saling menjaga jarak di dalam acara</div>
            <div className="advices">
              Menjaga kebersihan dengan menggunakan handsanitizer
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-blues-300 ">
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-green-100 text-center mb-12 mt-5">
            Gallery
          </div>
          <Grid>
            {photos.map((i) => (
              <LazyImage key={i} src={i.src} alt={`Moment Image `} />
            ))}
          </Grid>
        </div>
      </div>
      <div tw="py-12 bg-blues-100  relative">
        <div>
          <div tw="text-4xl sm:text-5xl font-brittany text-white text-center mb-12 mt-12">
            Message
          </div>
          <div tw="rounded-b-lg  mx-4 mt-4 ">
            <form id="messageForm" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" />
              <div tw="font-semibold font-poppin text-sm">
                <div tw="mb-5 text-left">
                  <label className="title-identity" tw="font-semibold text-xl">
                    Nama
                  </label>
                  <input
                    name="name"
                    ref={register({ required: true })}
                    css={tw`focus:ring-1 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                    type="text"
                    aria-label="Nama."
                    placeholder="Masukan nama anda"
                  />
                  <div tw="text-xs text-gold-900">
                    {errors.name && 'Your Name is required'}
                  </div>
                </div>
                <div tw="mb-5 text-left">
                  <label className="title-identity" tw="font-semibold text-xl">
                    Ucapan
                  </label>
                  <textarea
                    name="desc"
                    ref={register({ required: true })}
                    tw="w-full shadow-inner p-4 border-0 mb-4 rounded-lg  text-sm"
                    aria-label="Ucapan Doa dan Harapan"
                    placeholder="Ucapan Doa dan Harapan"
                    rows={5}
                    cols={5}
                    id="comment_content"
                    spellCheck="false"
                  ></textarea>

                  <div tw="text-xs text-gold-900">
                    {errors.name && 'Your Name is required'}
                  </div>
                </div>
              </div>
              <Button isPrimary={true}>Submit</Button>

              {/* <button tw="font-bold py-2 px-4 w-full bg-purple-400 text-lg text-white shadow-md rounded-lg ">Comment </button> */}
            </form>

            <div className="mxh-50" tw="mt-10  overflow-auto">
              <table tw="">
                <tbody>
                  {posts.map((post) => (
                    <>
                      <tr className="spacer" tw="h-4"></tr>
                      <tr tw="mt-10">
                        <td valign="top">
                          <div tw="w-8 text-white" className="mirror">
                            <FontAwesomeIcon icon={faComment} tw="mr-1 " />
                          </div>
                        </td>
                        <td className="message" tw="text-left">
                          <div className="wishdisplayname" tw="font-bold">
                            {post.name}
                          </div>
                          <div tw="pb-4">{post.desc}</div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative text-center font-sans">
        © 2022 by{' '}
        <a href="https://sonnylab.com" tw="font-semibold">
          sonnylab,
        </a>
        <br />
        Remake by <span tw="font-semibold">Ardyan & Firda</span>
        <div
          className="mirror"
          tw="absolute -bottom-1 right-2 w-28 h-28 bg-contain bg-no-repeat rotate-0   bg-pohon z-20"
        />
        <div tw="absolute -bottom-1 left-2 w-28 h-28 bg-contain bg-no-repeat  rotate-0  bg-pohon z-20" />
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
      <Toaster />

      <div className="music-box">
        <audio
          src={'../images/song.mp3'}
          ref={audioRef}
          loop={true}
          autoPlay={true}
        ></audio>
        {isPlaying ? (
          <button type="button" className="music" id="unmute2-sound">
            <img
              alt=""
              onClick={() => play(audio)}
              src={unmute}
              width="30"
              height="30"
            />
          </button>
        ) : (
          <button type="button" className="music" id="mute-sound">
            <img
              alt=""
              onClick={() => play(audio)}
              src={mute}
              width="30"
              height="30"
            />
          </button>
        )}
      </div>
    </Layout>
  )
}

export default App
