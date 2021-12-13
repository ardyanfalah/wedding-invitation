import React from 'react'
import tw from 'twin.macro'
import Iframe from 'react-iframe'
import { Countdown, Layout, Button, Link, LazyImage, LazyImageNonStyle } from '../components'
import { Player } from '@lottiefiles/react-lottie-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { createClient } from '@supabase/supabase-js'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import styled, { createGlobalStyle } from "styled-components";

import QRImage from '../images/qrbca.png'
import couple2 from '../images/couple2.png'
import bismillah from '../images/bismillah.png'
import roundedArdy from '../images/rounded-ardy.png'
import roundedFirda from '../images/rounded-firda.png'
import ring from '../images/ring.png'
import aisle from '../images/aisle.png'
import mute from '../images/mute.png'
import unmute from '../images/unmute.png'
import Butterfly from '../images/butterfly.json'
import Modal from '../components/Modal'
import { photos } from "./photos";


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
`;

const Grid = styled.div`
  display: grid;
  padding: 16px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;
`;

const App = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [showGiving, setShowGiving] = React.useState(false)
  const { register, errors, handleSubmit } = useForm()
  const [posts, setPosts] = React.useState([])
  const [isPlaying, setIsPlaying] = React.useState(false);

  var audio = null
  if (typeof Audio != "undefined") {
    audio = new Audio("../images/song.mp3")
  }
  const audioRef = React.useRef(null);
  const play = (audio) => {
    !isPlaying ? audioRef.current.play() : audioRef.current.pause();
    setIsPlaying(!isPlaying);
  };

  React.useEffect(() => {

    fetchPosts()
    const mySubscription = supabase
      .from('comment')
      .on('*', () => fetchPosts())
      .subscribe()
    return () => supabase.removeSubscription(mySubscription)
  }, [])


  async function fetchPosts() {
    const { data } = await supabase
      .from('comment')
      .select('*')
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

  const clear = () => {
    document.getElementById("messageForm").reset();
  }

  return (
    <Layout css={tw`min-h-screen bg-gold-100 overflow-hidden relative`}>
      <Global />

      <div tw="absolute -top-8 -right-4 w-28 h-28 bg-cover bg-no-repeat transform rotate-180  bg-kmbg3 z-10" />
      <div tw="absolute -top-5 -left-8 w-28 h-28 bg-cover bg-no-repeat transform  rotate-90 bg-kmbg3 z-10" />

      <div
        className="container"
        tw="mx-auto flex flex-col items-center relative"
      >
        {/* <div tw="p-5 block mt-24">
          <Logo />
        </div> */}
        <div className='container ' tw="text-center mt-10">
          <h4 className='subtitle'>The Wedding of</h4>
          <h2 className='title'>Firda</h2>
          <h2 className='title'>&</h2>
          <h2 className='title'>Ardyan</h2>

        </div>
        <div tw="w-full sm:w-3/5 ">
          <LazyImageNonStyle
            src={couple2}
          />
          {/* <img src={couple1} /> */}
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
          <div tw='px-8'>

            {/* <img src={bismillah} /> */}
            <LazyImageNonStyle
              src={bismillah}
            />
          </div>



          <p className='title-identity' tw="text-center text-lg mt-8">
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
        <div tw="absolute -top-24 -right-11 w-24 h-24 bg-contain bg-no-repeat transform bg-daun4 z-20" />
        <div tw="absolute -top-6 -right-8 w-24 h-24 bg-contain bg-no-repeat transform rotate-180  bg-daun4 z-10" />
        <div tw="absolute -top-24 right-1 w-24 h-24 bg-contain bg-no-repeat transform rotate-12  bg-daun2 z-0" />

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
                        <th tw='w-4/5'><p className='title-identity ' tw='text-xl text-left'><b>Akad Pernikahan</b></p></th>
                      </tr>
                        <tr className='title-identity' tw='text-left'>
                          <td></td>
                          <td><FontAwesomeIcon icon={faCalendarAlt} /></td>
                          <td >Minggu, 19 Desember 2021</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><br /></td>
                          <td><br /></td>
                        </tr>
                        <tr className='title-identity ' tw='text-left'>
                          <td></td>
                          <td><FontAwesomeIcon icon={faClock} /></td>
                          <td>09.00 WIB</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><br /></td>
                          <td><br /></td>
                        </tr>
                        <tr className='title-identity ' tw='text-left'>
                          <td></td>
                          <td><FontAwesomeIcon icon={faMapMarker} /></td>
                          <td>Rumah Makan Sarirasa Cijere</td>
                        </tr>
                        <tr className='title-identity ' tw='text-left'>
                          <td></td>
                          <td></td>
                          <td>Kp Cijere, RT.06/RW.03, Cintakarya,</td>
                        </tr>
                        <tr className='title-identity ' tw='text-left'>
                          <td></td>
                          <td></td>
                          <td>Sindangkerta</td>
                        </tr>
                        <tr className='title-identity ' tw='text-left'>
                          <td></td>
                          <td></td>
                          <td>Kabupaten Bandung Barat</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><br /></td>
                          <td><br /></td>
                        </tr>

                      </tbody></table>
                  </div>
                </div>

              </div>

              <div className="column">
                <div className="card card-schedule" tw='card'>
                  <div className="containerweddingwd" tw='mr-2'>

                    <table tw='text-right'>
                      <tbody><tr className='title-identity '>
                        <th tw='text-right w-4/5'><p tw='text-lg'><b>Resepsi Pernikahan</b></p></th>
                        <th></th>
                        <th tw='w-1/5'><img src={aisle} width="100%" /></th>
                      </tr>
                        <tr className='title-identity ' tw='text-right '>
                          <td>Minggu, 19 Desember 2021</td>
                          <td><FontAwesomeIcon icon={faCalendarAlt} /></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><br /></td>
                          <td><br /></td>
                          <td></td>
                        </tr>
                        <tr className='title-identity ' tw='text-right'>
                          <td>11.00 - 15.00 WIB</td>
                          <td><FontAwesomeIcon icon={faClock} /></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><br /></td>
                          <td><br /></td>
                          <td></td>
                        </tr>
                        <tr className='title-identity ' tw='text-right'>
                          <td>Rumah Makan Sarirasa Cijere</td>
                          <td><FontAwesomeIcon icon={faMapMarker} /></td>
                          <td></td>
                        </tr>
                        <tr className='title-identity ' tw='text-right'>
                          <td>Kp Cijere, RT.06/RW.03, Cintakarya,</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='title-identity ' tw='text-right'>
                          <td>Sindangkerta,</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='title-identity ' tw='text-right'>
                          <td>Kabupaten Bandung Barat</td>
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
                              isPrimary={true}
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
          <div tw='mt-10'>
            <div className="explainbride health-advice" >
              <p><FontAwesomeIcon icon={faHeart} /><br />
                Guna mencegah penularan covid-19 kami harapkan kedatangan para tamu undangan tetap menerapkan protokol yang berlaku :
              </p>
              <div className='advices'>
                Wajib menggunakan masker
              </div>
              <div className='advices'>
                Menggunakan salam namaste / salam hangat tanpa bersentuhan
              </div>
              <div className='advices'>
                Saling menjaga jarak di dalam acara
              </div>
              <div className='advices'>
                Menjaga kebersihan dengan menggunakan handsanitizer
              </div>
            </div>
            <p className="explainbride" tw='mt-10'>
              Merupakan suatu kehormatan dan kebahagiaan
              <br />bagi kami apabila Bapak/Ibu/Saudara(i)
              <br />berkenan untuk hadir dan memberikan do'a restu
              <br />
              kepada kedua mempelai.</p>
          </div>
          <div tw='mt-10'>

            <Countdown></Countdown>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div tw="absolute -top-24 -left-8 w-24 h-24 bg-contain bg-no-repeat transform bg-daun4 z-20" />
        <div tw="absolute -top-6 -left-11 w-24 h-24 bg-contain bg-no-repeat transform rotate-180  bg-daun4 z-10" />
        <div tw="absolute -top-24 -left-6 w-24 h-24 bg-contain bg-no-repeat transform rotate-90  bg-daun2 z-0" />

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
      <div tw="py-12  relative">
        <div tw="absolute -top-24 -right-11 w-24 h-24 bg-contain bg-no-repeat transform bg-daun4 z-20" />
        <div tw="absolute -top-6 -right-8 w-24 h-24 bg-contain bg-no-repeat transform rotate-180  bg-daun4 z-10" />
        <div tw="absolute -top-24 right-1 w-24 h-24 bg-contain bg-no-repeat transform rotate-12  bg-daun2 z-0" />

        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12 mt-12">
            Location
          </div>
          <div className='title-identity ' tw="text-xl font-semibold mb-2">Sarirasa Ayam Kampung Cijere</div>
          <div className='title-identity ' tw="text-xl mb-4 text-sm">
            Kp Cijere, Desa, RT.06/RW.03, Cintakarya, Sindangkerta
            <br />
            Kabupaten Bandung Barat, Jawa Barat 40563
          </div>
          <div tw="flex mb-4 items-center justify-center">
            <div tw="py-4">
              <Link
                isPrimary={true}
                href="https://goo.gl/maps/keZpJcXCbszN7PQbA"
              >
                Direction
              </Link>
            </div>
          </div>
          <div tw="">

            <div className="google-map">
              {/* <iframe frameborder="0"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJZVrx5DQo1i0R6sjtcxJobd4" allowfullscreen=""></iframe> */}
              <Iframe url="https://maps.google.com/maps?q=Sarirasa%20Ayam%20Kampung%20Cijere&t=&z=15&ie=UTF8&iwloc=&output=embed"

                className="map" />
            </div>
          </div>
        </div>
      </div>
      <div tw="py-12 bg-white relative">
        <div tw="absolute -top-24 -left-8 w-24 h-24 bg-contain bg-no-repeat transform bg-daun4 z-30" />
        <div tw="absolute -top-6 -left-11 w-24 h-24 bg-contain bg-no-repeat transform rotate-180  bg-daun4 z-20" />
        <div tw="absolute -top-24 -left-6 w-24 h-24 bg-contain bg-no-repeat transform rotate-90  bg-daun2 z-10" />

        <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
        <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12 mt-12">
          Gallery
        </div>
        <Grid>
          {[...Array(10).keys()].map(i => (
            <LazyImage
              key={i}
              src={`https://picsum.photos/1000/1000?random=${i}`}
              alt={`Random image ${i}`}
            />
          ))}
        </Grid>
      </div>
      <div tw="py-12  relative">
        <div>
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12 mt-12">
            Message
          </div>
          <div tw="rounded-b-lg  mx-4 mt-4 ">

            <div tw="absolute -top-20 -right-12 w-24 h-24 bg-contain bg-no-repeat transform bg-daun4 z-20" />
            <div tw="absolute -top-2 -right-9 w-24 h-24 bg-contain bg-no-repeat transform rotate-180  bg-daun4 z-10" />
            <div tw="absolute -top-20 -right-1 w-24 h-24 bg-contain bg-no-repeat transform rotate-12  bg-daun2 z-0" />

            <form id='messageForm' onSubmit={handleSubmit(onSubmit)}><input type="hidden" />
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
                    spellCheck="false"></textarea>

                  <div tw="text-xs text-gold-900">
                    {errors.name && 'Your Name is required'}
                  </div>
                </div>
              </div>
              <Button isPrimary={true}>Submit</Button>

              {/* <button tw="font-bold py-2 px-4 w-full bg-purple-400 text-lg text-white shadow-md rounded-lg ">Comment </button> */}
            </form>

            <div tw='mt-10 max-h-96 overflow-auto'>
              <table tw=''>
                <tbody>
                  {posts.map(post => (
                    <>
                      <tr className="spacer" tw='h-4'></tr>
                      <tr tw='mt-10'>
                        <td valign="top">
                          <div tw='w-8'>

                            <img src={ring} tw='w-8' width="25px" />
                          </div>
                        </td>
                        <td className='message' tw='text-left'>
                          <div className="wishdisplayname" tw='font-bold'>
                            {post.name}
                          </div>
                          <div tw='pb-4'>
                            {post.desc}
                          </div>
                        </td>
                      </tr>
                    </>

                  )
                  )
                  }

                </tbody>
              </table>
            </div>



          </div>

        </div>
      </div>
      <div tw="py-24 bg-gold-100 relative text-center font-sans">
        © 2021 by{' '}
        <a href="https://sonnylab.com" tw="font-semibold">
          sonnylab,
        </a>
        <br />
        Remake by <span tw='font-semibold'>Ardyan</span>
        <div tw="absolute -bottom-6 -right-7 w-28 h-28 bg-cover bg-no-repeat transform -rotate-90  bg-kmbg3 z-10" />
        <div tw="absolute -bottom-8 -left-4 w-28 h-28 bg-cover bg-no-repeat transform  bg-kmbg3 z-10" />
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
      <Toaster />

      <div className="music-box">
        <audio
          src={"../images/song.mp3"}
          ref={audioRef}
          loop={true}

        ></audio>
        {isPlaying ? (
          <button type="button" className="music" id="unmute2-sound" >
            <img alt="" onClick={() => play(audio)} src={unmute} width="30" height="30" />
          </button>
        ) : (
          <button type="button" className="music" id="mute-sound" >
            <img alt="" onClick={() => play(audio)} src={mute} width="30" height="30" />
          </button>
        )}
      </div>
    </Layout >
  )
}

export default App
