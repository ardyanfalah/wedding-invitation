import React from 'react'
import tw from 'twin.macro'
import Iframe from 'react-iframe'
import { Logo, Layout, Button, Link } from '../components'
import { Player } from '@lottiefiles/react-lottie-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { createClient } from '@supabase/supabase-js'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

import GroomsBride from '../images/groomsbride.png'
import QRImage from '../images/qrbca.png'
import Paynow from '../images/paynow.jpg'
import Googlepay from '../images/googlepay.jpg'
import couple1 from '../images/couple1.png'
import couple2 from '../images/couple2.png'
import bismillah from '../images/bismillah.png'
import roundedArdy from '../images/rounded-ardy.png'
import roundedFirda from '../images/rounded-firda.png'
import ring from '../images/ring.png'
import aisle from '../images/aisle.png'
import Butterfly from '../images/butterfly.json'
import Modal from '../components/Modal'

const supabase = createClient(
  process.env.GATSBY_SUPABASE_HOST,
  process.env.GATSBY_SUPABASE_KEY
)
const App = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [showGiving, setShowGiving] = React.useState(false)
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    let loadingToast = toast.loading('Please wait...')
    if (!data.person) data.person = 0
    supabase
      .from('comment')
      .insert([data])
      .then(({ data, error }) => {
        if (!error) {
          if (data[0]) {
            toast.success('Pesan Berhasil Dikirim.', {
              id: loadingToast
            })
          }
        } else {
          toast.error(error.message, {
            id: loadingToast
          })
        }
      })
  }

  return (
    <Layout css={tw`min-h-screen bg-gold-100 overflow-hidden relative`}>
      <div tw="absolute -top-16 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-kmbg2 z-10" />
      <div
        className="container"
        tw="mx-auto flex flex-col items-center relative"
      >
        {/* <div tw="p-5 block mt-24">
          <Logo />
        </div> */}
        <div className='container ' tw="text-center">
          <h1 className='subtitle'></h1>
          <h2 className='title'>Firda</h2>
          <h2 className='title'>&</h2>
          <h2 className='title'>Ardyan</h2>

        </div>
        <div tw="w-full sm:w-3/5 -mt-8">
          <img src={couple1} />
        </div>

        <div tw="w-20 h-20 absolute ml-40 top-32">
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src={Butterfly}
            style={{ height: '100%', width: '100%' }}
          ></Player>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div >
            <img src={bismillah} />
          </div>

          <p className='title-identity' tw="text-center text-xl mt-8">
            Assalamu'alaikum Warahmatullahi Wabarakatuh.
            <br />
            Dengan memohon rahmat dan ridha Allah swt,
            <br />
            kami bermaksud mengundang Bapak/Ibu/Saudara/Saudari pada acara pernikahan kami
          </p>

          <div className='container' tw="mt-8 text-center">
            <div tw='grid justify-items-center'>
              <img src={roundedFirda} width="50%" alt="" />
              <br />
              <span className='brideFront font-rouge-script color-primary' tw='mt-2 text-4xl '>
                Firda Meilani Fauziah
              </span>
            </div>
            <div className="explainbride color-primary">Putri dari<br />Bpk. Moch. Irfan  &amp; Ibu Ida Herawati</div>
            <br />
            <div className="explainbride color-primary ">dan</div>
            <br />
            <div tw='grid justify-items-center'><img src={roundedArdy} width="50%" alt="" />
              <br />
              <span className='brideFront font-rouge-script color-primary' tw='mt-2 text-4xl'>
                Ardyan Hidayatul Falah
              </span>
            </div>
            <div className="explainbride color-primary">Putra dari<br />Bpk. Sihabudin S.Pd &amp; Ibu Pupu Marpuah S.Pd</div>

          </div>

        </div>
      </div>
      <div tw="py-24  relative">
        <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
        {/* <div tw="absolute -top-36 -left-16 w-48 h-48 bg-cover rotate-180 z-10 transform bg-kmbg4" /> */}
        {/* <div tw="absolute -top-16 -left-24 w-56 h-20 bg-cover bg-no-repeat transform rotate-90  bg-kmbg4 z-10" /> */}

        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
            Wedding Schedule
          </div>
          {/* <div>
            <div className='card card-schedule' tw='card'>
              <h4>Test <FontAwesomeIcon icon={faCalendarAlt} /></h4>
            </div>
            <div className='card card-schedule' tw='card'>
              <h4>Test</h4>
            </div>
          </div> */}
          <div className="cardevent" >
            <div className="row" tw='flex flex-col'>
              <div className="column" tw='mb-10'>
                <div className="card card-schedule" tw='card'>
                  <div className="containerijabwd" tw='ml-2'>

                    <table>
                      <tbody><tr>
                        <th tw='w-1/5'>  <img src={ring} width="100%" /></th>
                        <th></th>
                        <th tw='w-4/5'><p ><b>Akad Pernikahan</b></p></th>
                      </tr>
                        <tr>
                          <td></td>
                          <td><FontAwesomeIcon icon={faCalendarAlt} /></td>
                          <td>Minggu, 26 Desember 2021</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><br /></td>
                          <td><br /></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><FontAwesomeIcon icon={faClock} /></td>
                          <td>08.00 WIB</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><br /></td>
                          <td><br /></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><FontAwesomeIcon icon={faMapMarker} /></td>
                          <td>Gedung Achmad Yani</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>Jl. Jend. Gatot Soebroto,</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>Jurangombo Utara,</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>Magelang</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><br /></td>
                          <td><br /></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td ><div tw="flex ">
                            <Link
                              isSmall={true}
                              isPrimary={true}
                              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Akad+Nikah+Firda+%26+Ardyan&location=https://goo.gl/maps/zfU5YT6uRSWKd1G68&dates=20211219T020000Z/20211219T040000Z"
                            >
                              Save The Date
                            </Link>
                          </div></td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>

              </div>

              <div className="column">
                <div className="card card-schedule" tw='card'>
                  <div className="containerweddingwd" tw='mr-2'>

                    <table tw='text-right'>
                      <tbody><tr>
                        <th tw='text-right w-4/5'><p ><b>Resepsi Pernikahan</b></p></th>
                        <th></th>
                        <th tw='w-1/5'><img src={aisle} width="100%" /></th>
                      </tr>
                        <tr tw='text-right'>
                          <td>Minggu, 26 Desember 2021</td>
                          <td><FontAwesomeIcon icon={faCalendarAlt} /></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><br /></td>
                          <td><br /></td>
                          <td></td>
                        </tr>
                        <tr tw='text-right'>
                          <td>13.00 - 15.00 WIB</td>
                          <td><FontAwesomeIcon icon={faClock} /></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><br /></td>
                          <td><br /></td>
                          <td></td>
                        </tr>
                        <tr tw='text-right'>
                          <td>Gedung Achmad Yani</td>
                          <td><FontAwesomeIcon icon={faMapMarker} /></td>
                          <td></td>
                        </tr>
                        <tr tw='text-right'>
                          <td>Jl. Jend. Gatot Soebroto,</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr tw='text-right'>
                          <td>Jurangombo Utara,</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr tw='text-right'>
                          <td>Magelang</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr tw='text-right'>
                          <td><br /></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr tw='text-right w-1/5'>
                          <td>
                            <Link
                              isSecondary={true}
                              isSmall={true}
                              href="https://www.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Firda+%26+Ardyan&location=https%3A%2F%2Fgoo.gl%2Fmaps%2FzfU5YT6uRSWKd1G68&dates=20211219T040000Z%2F20211219T080000Z"
                            >
                              Add to Calendar
                            </Link></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div tw="absolute -top-24 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <Button isSecondary={true} onClick={() => setShowGiving(!showGiving)}>
            Electronic Giving
          </Button>
          {showGiving ? (
            <>
              <div
                tw="mx-auto w-full p-4 leading-loose font-sans items-center justify-center text-center"
                style={{ maxWidth: 640 }}
              >
                <div tw="">Transfer via BCA QR</div>
                <div tw="font-bold text-2xl">2700427415</div>
                <div tw="mb-4 font-bold">Firda Meilani Fauziah</div>
                <img src={QRImage} tw="mx-auto w-80 mb-16 rounded-lg" />

                <div tw="">Transfer via Mandiri</div>
                <div tw="font-bold text-2xl">130001780613</div>
                <div tw="font-bold mb-16">Ardyan Hidayatul Falah</div>

              </div>
            </>
          ) : null}
        </div>
      </div>
      <div tw="py-24  relative">
        <div tw="absolute -top-24 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12 mt-12">
            Location
          </div>
          <div tw="font-poppin font-semibold mb-2">Sarirasa Ayam Kampung Cijere</div>
          <div tw="font-poppin mb-4 text-sm">
            Kp Cijere, Desa, RT.06/RW.03, Cintakarya, Sindangkerta
            <br />
            Kabupaten Bandung Barat, Jawa Barat 40563
          </div>
          <div tw="flex mb-4 items-center justify-center">
            <div tw="py-4">
              <Link
                isPrimary={true}
                href="https://goo.gl/maps/zfU5YT6uRSWKd1G68"
              >
                Direction
              </Link>
            </div>
          </div>
          <div tw="">
            <div className="google-map">
              {/* <iframe frameborder="0"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJZVrx5DQo1i0R6sjtcxJobd4" allowfullscreen=""></iframe> */}
              <Iframe url="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJZVrx5DQo1i0R6sjtcxJobd4"

                className="map" />
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
        <div tw="grid grid-cols-2 gap-4">
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>09</div>
        </div>
      </div>
      <div tw="py-24  relative">
        <div>

          <div tw="rounded-b-lg  mx-4 mt-4 ">


            <form onSubmit={handleSubmit(onSubmit)}><input type="hidden" />
              <div tw="font-semibold font-poppin text-sm">
                <div tw="mb-5 ">
                  <label>Full Name</label>
                  <input
                    name="name"
                    ref={register({ required: true })}
                    css={tw`focus:ring-1 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                    type="text"
                    aria-label="Nama."
                    placeholder="Nama."
                  />
                  <div tw="text-xs text-gold-900">
                    {errors.name && 'Your Name is required'}
                  </div>
                </div>
                <div tw="mb-5 ">
                  <label>Ucapan</label>
                  <textarea
                    name="desc"
                    ref={register({ required: true })}
                    tw="w-full shadow-inner p-4 border-0 mb-4 rounded-lg  text-sm"
                    aria-label="Ucapan Doa dan Harapan"
                    placeholder="Ucapan Doa dan Harapan"
                    rows={5}
                    cols={5}
                    id="comment_content"
                    spellcheck="false"></textarea>

                  <div tw="text-xs text-gold-900">
                    {errors.name && 'Your Name is required'}
                  </div>
                </div>
              </div>
              <Button isPrimary={true}>Submit</Button>

              {/* <button tw="font-bold py-2 px-4 w-full bg-purple-400 text-lg text-white shadow-md rounded-lg ">Comment </button> */}
            </form>



            <table tw='mt-10'>
              <tbody>
                <tr>
                  <td valign="top">
                    <div tw='w-8'>

                      <img src={ring} tw='w-8' width="25px" />
                    </div>
                  </td>
                  <td className='message' >
                    <div className="wishdisplayname">
                      Riyandanu
                    </div>
                    <div tw='pb-4'>
                      Selamat untuk Leia dan Pati, Semoga dilancarkan segala urusannya yaa, kelak menjadi keluarga yang Sakinah Mawadah Warohmah, selalu diberikan kebahagiaan dan keberkahan selalu, serta cepet dapet momongan, aamiin
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>



            <div id="task-comments" tw="pt-4">
              <div tw="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                <div tw="flex flex-row justify-center mr-2">
                  <img className="avatar" width="48" height="48" tw="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" />
                  <h3 tw="text-purple-600 font-semibold text-lg text-center md:text-left ">@Shanel</h3>
                </div>


                <p tw="w-11/12 text-gray-600 text-lg text-center md:text-left ">Hi good morning will it be the entire house. </p>

              </div>
              <div tw="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                <div tw="flex flex-row justify-center mr-2">
                  <img alt="avatar" width="48" height="48" tw="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" />
                  <h3 tw="text-purple-600 font-semibold text-lg text-center md:text-left ">@Tim Motti</h3>
                </div>


                <p tw=" w-11/12 text-gray-600 text-lg text-center md:text-left "><span tw="text-purple-600 font-semibold">@Shanel</span> Hello. Yes, the entire exterior, including the walls. </p>

              </div>
            </div>
          </div>

        </div>
      </div>
      <div tw="py-24 bg-white relative" >
        <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
        {/* <div tw="absolute -top-36 -left-16 w-48 h-48 bg-cover rotate-180 z-10 transform bg-kmbg4" /> */}
        {/* <div tw="absolute -top-16 -left-24 w-56 h-20 bg-cover bg-no-repeat transform rotate-90  bg-kmbg4 z-10" /> */}

        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
            Wedding Schedule
          </div>

          <div tw="text-center">
            Due to the current situation, we opted for an intimate wedding
            ceremony with only immediate family present. Hence, we humbly
            solicit your presence through the link below.
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              HOLY
              <br />
              MATRIMONY
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="text-lg">SATURDAY</div>
              <div tw="font-bold">20.03.2021</div>
              <div tw="text-lg">15.30 WIB</div>
              <div tw="text-lg mb-4">16.30 SGT</div>
              <div tw="px-12">
                <div tw="flex mb-4">
                  <Link isPrimary={true} href="https://youtu.be/NDTuzo31Hlw">
                    Live Stream
                  </Link>
                </div>
                <div tw="flex">
                  <Link
                    isSecondary={true}
                    href="https://www.google.com/calendar/render?action=TEMPLATE&text=Delicia+%26+Sonny+Wedding&details=Live+Streaming%3A+https%3A%2F%2Fyoutu.be%2FNDTuzo31Hlw&location=Bali&dates=20210320T083000Z%2F20210320T100000Z"
                  >
                    Add to Calendar
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              WEDDING
              <br />
              RSVP
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest">
              <div tw="font-brittany text-4xl mb-8">Invitation Only</div>
              <div tw="px-12">
                <Button isSecondary={true} onClick={() => setShowModal(true)}>
                  RSVP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div tw="py-24 bg-white bg-opacity-30 relative">
        <div tw="absolute -top-24 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-24 mt-12">
            Our Little Story
          </div>
          <div
            tw="mx-auto w-full leading-loose font-sans p-1"
            style={{ maxWidth: 640 }}
          >
            <img src="/images/story.png" tw="w-full" />
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div tw="absolute -top-24 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <Button isSecondary={true} onClick={() => setShowGiving(!showGiving)}>
            Electronic Giving
          </Button>
          {showGiving ? (
            <>
              <div
                tw="mx-auto w-full p-4 leading-loose font-sans items-center justify-center text-center"
                style={{ maxWidth: 640 }}
              >
                <div tw="">Transfer via OCBC NISP QR</div>
                <div tw="font-bold text-2xl">545-810-22349-9</div>
                <div tw="mb-4 font-bold">Delicia Ulyta</div>
                <img src={QRImage} tw="mx-auto w-80 mb-16 rounded-lg" />

                <div tw="">Transfer via BCA</div>
                <div tw="font-bold text-2xl">8090138651</div>
                <div tw="font-bold mb-16">Sonny Lazuardi Hermawan</div>

                <div tw="">Transfer via PayNow</div>
                <div tw="flex items-center justify-center">
                  <img src={Paynow} tw="mx-auto w-80 mb-16 rounded-lg" />
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div tw="py-24 bg-gold-100 relative text-center font-sans">
        © 2021 by{' '}
        <a href="https://sonnylab.com" tw="font-semibold">
          sonnylab
        </a>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </Layout >
  )
}

export default App
