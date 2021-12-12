import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Button, Link } from '../components'
import GroomsBride from '../images/groomsbride.png'
import QRImage from '../images/qrocbc.png'
import Paynow from '../images/paynow.jpg'
import Googlepay from '../images/googlepay.jpg'
import couple1 from '../images/couple1.png'
import couple2 from '../images/couple2.png'
import bismillah from '../images/bismillah.png'
import roundedArdy from '../images/rounded-ardy.png'
import roundedFirda from '../images/rounded-firda.png'

import { Player } from '@lottiefiles/react-lottie-player'
import Butterfly from '../images/butterfly.json'
import Modal from '../components/Modal'
const App = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [showGiving, setShowGiving] = React.useState(false)
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
      <div tw="py-24 bg-white relative">
        <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
        {/* <div tw="absolute -top-36 -left-16 w-48 h-48 bg-cover rotate-180 z-10 transform bg-kmbg4" /> */}
        {/* <div tw="absolute -top-16 -left-24 w-56 h-20 bg-cover bg-no-repeat transform rotate-90  bg-kmbg4 z-10" /> */}

        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
            Wedding Schedule
          </div>
          <div className='card' tw=''>
            <h4>Test</h4>
          </div>
          {/* <div class="cardevent">
            <div class="row">
              <div class="column">
                    <div class="card">

                        <div class="containerijabwd">

                            <table style="color: #63402f;">
                                <tbody><tr>
                                    <th style="width: 20%"><img src="https://nikahankami.com/assets/de18wdakad.png" width="100%"></th>
                                    <th></th>
                                    <th style="width: 80%"><p style="font-size: 18px; font-family: dosis; color: #63402f;"><b>Akad Pernikahan</b></p></th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><i class="fa fa-calendar"></i></td>
                                    <td>Minggu, 26 Desember 2021</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><br></td>
                                    <td><br></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><i class="fa fa-clock-o"></i></td>
                                    <td>08.00 WIB</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><br></td>
                                    <td><br></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><i class="fa fa-map-marker"></i></td>
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
                                    <td><br></td>
                                    <td><br></td>
                                </tr>
                                <!-- <tr>
                                    <td></td>
                                    <td></td>
                                    <td><a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MWZkMWVyODI1cmJzNG9zNzhjaDY2Y25udjEgYWRtaW4tbmlrYWhhbmthbWlAem1haWwubXkuaWQ&tmsrc=admin-nikahankami%40zmail.my.id" target="_blank" style="background-color: #b8765e; font-family: dosis; font-size: 18px; color: white; padding: 18px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 8px"><strong>SaveTheDate</strong></a></td>
                                </tr> -->
                            </tbody></table>
                        </div>
                    </div>

              </div>

              <div class="column">
                    <div class="card">
                          <div class="containerweddingwd">

                                <table style="color: #63402f;" align="right">
                                    <tbody><tr>
                                        <th style="width: 80%;" align="right"><p style="font-size: 18px; font-family: dosis; color: #63402f; text-align: right;"><b>Resepsi Pernikahan</b></p></th>
                                        <th></th>
                                        <th style="width: 20%"><img src="https://nikahankami.com/assets/de18wdresepsi.png" width="100%"></th>
                                    </tr>
                                    <tr align="right">
                                        <td>Minggu, 26 Desember 2021</td>
                                        <td><i class="fa fa-calendar"></i></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><br></td>
                                        <td><br></td>
                                        <td></td>
                                    </tr>
                                    <tr align="right">
                                        <td>13.00 - 15.00 WIB</td>
                                        <td><i class="fa fa-clock-o"></i></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><br></td>
                                        <td><br></td>
                                        <td></td>
                                    </tr>
                                    <tr align="right">
                                        <td>Gedung Achmad Yani</td>
                                        <td><i class="fa fa-map-marker"></i></td>
                                        <td></td>
                                    </tr>
                                    <tr align="right">
                                        <td>Jl. Jend. Gatot Soebroto,</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr align="right">
                                        <td>Jurangombo Utara,</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr align="right">
                                        <td>Magelang</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr align="right">
                                        <td><br/></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr align="right">
                                        <td><a href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MjNtdjU4dTNxazQ1dGhtdGk2aWVtYmozczEgYmxrb2M5ZHFvcGs3a2trNm9nNnAzNDlzaDRAZw&amp;tmsrc=blkoc9dqopk7kkk6og6p349sh4%40group.calendar.google.com" target="_blank" style="background-color: #b8765e; font-family: dosis; font-size: 18px; color: white; padding: 18px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 8px"><strong>SaveTheDate</strong></a></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody></table>
                        <div style="clear: both;"></div>
                    </div>
                    </div>
              </div>
            </div>
        </div> */}
        </div>
      </div>
      <div tw="py-24 bg-white relative">
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
      </div>
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
    </Layout>
  )
}

export default App
