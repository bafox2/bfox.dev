import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { GetStaticProps } from 'next'
import styles from '../styles/About.module.css'
import { google } from 'googleapis'
import letterboxd from 'letterboxd'
import spotify from 'spotify-web-api-node'
import strava from 'strava-v3'
import { Client as PodClient } from 'podcast-api'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Bodoni_Moda } from '@next/font/google'

type aboutPageProps = {
  githubData: {
    id: string
    repo: {
      name: string
      url: string
      html_url: string
    }
    created_at: string
    payload: {
      commits: {
        message: string
        sha: string
      }[]
    }
  }[]

  foodData: {
    items: {
      id: string
      value: {
        id: string
        title: string
      }
    }[]
  }
  podData: {
    items: {
      title: string
      data: {
        id: string
        link: string
        title: string
        podcast: {
          title: string
          thumbnail: string
        }
      }
    }[]
  }

  bookData: {
    items: {
      id: string
      volumeInfo: {
        title: string
        authors: string[]
        imageLinks: {
          thumbnail: string
        }
      }
    }[]
  }

  videoData: {
    items: {
      id: {
        videoId: string
      }
      snippet: {
        title: string
        videoOwnerChannelTitle: string
        thumbnails: {
          high: {
            url: string
          }
        }
      }
    }[]
  }

  codewarsData: {
    data: {
      id: string
      name: string
      completedAt: string
      completedLanguages: string[]
    }[]
  }

  playlistData: {
    tracks: {
      items: {
        track: {
          id: string
          name: string
          external_urls: {
            spotify: string
          }
          artists: {
            name: string
          }[]
          album: {
            name: string
            images: {
              url: string
            }[]
          }
        }
      }[]
    }
  }
  guitarData: {
    tracks: {
      items: {
        track: {
          id: string
          name: string
          external_urls: {
            spotify: string
          }
          artists: {
            name: string
          }[]
          album: {
            name: string
            images: {
              url: string
            }[]
          }
        }
      }[]
    }
  }
  runData: {
    recent_run_totals: {
      distance: number
      elapsed_time: number
      moving_time: number
    }
    ytd_run_totals: {
      distance: number
      elapsed_time: number
      moving_time: number
    }
  }
  moviesData: {
    id: string
    film: {
      title: string
      year: string
      description: string
      image: {
        large: string
      }
    }
    rating?: {
      text: string
    }
    uri: string
  }[]
}

const Ben: NextPage<aboutPageProps> = ({
  githubData,
  codewarsData,
  foodData,
  podData,
  videoData,
  bookData,
  playlistData,
  guitarData,
  runData,
  moviesData,
}) => {
  const formatSeconds = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secondsLeft = Math.floor(seconds % 60)
    return `${hours}h ${minutes}m ${secondsLeft}s`
  }

  const formatMeters = (meters: number) => {
    //format meters to miles
    const miles = meters * 0.000621371
    return `${miles.toFixed(2)} miles`
  }

  const formatDate = (date: string) => {
    //format the date and time
    const d = new Date(date)
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()
    const hour = d.getHours()
    const min = d.getMinutes()
    const mins = min < 10 ? '0' + min : min
    const secs = d.getSeconds()
    const sec: string | number = secs < 10 ? `0${secs}` : secs
    const time = `${hour}:${mins}:${sec}`
    return `${month}/${day}/${year} @${time}`
  }

  console.log(githubData)

  return (
    <>
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Who am I?</h1>
        <p>I do not keep up with social media, but I do exist. Here are things that I like.</p>
        {/* <div className={styles.carousel}>
          <Carousel
            showThumbs={false}
            emulateTouch={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
            stopOnHover={true}
          >
            <div>
              <h3>1</h3>
              <Image src="/images/carousel/1.jpg" width={500} height={500} alt={'picture of ben'} />
              <p>Circus, specifically trapeze, is one of my most favorite things to do</p>
            </div>
            <div>
              <h3>2</h3>
              <Image src="/images/carousel/2.jpg" width={500} height={500} alt={'picture of ben'} />
              <p>Camp is a second home to me, I have spent 5 great summers there</p>
            </div>
            <div>
              <h3>3</h3>
              <Image src="/images/carousel/3.jpeg" width={500} height={500} alt={'picture of ben'} />
              <p>Desert landscape makes me feel creative</p>
            </div>
            <div>
              <h3>3</h3>
              <Image src="/images/carousel/4.jpeg" width={500} height={500} alt={'picture of ben'} />
              <p>Focus is literally not on me, but the art</p>
            </div>
            <div>
              <h3>3</h3>
              <Image src="/images/carousel/5.jpeg" width={500} height={500} alt={'picture of ben'} />
              <p>My younger brother is the best chef, you should try his food</p>
            </div>
            <div>
              <h3>3</h3>
              <Image src="/images/carousel/6.jpg" width={500} height={500} alt={'picture of ben'} />
              <p>Children should not know which are your favorite, but it is okay to have a favorite</p>
            </div>
            <div>
              <h3>3</h3>
              <Image src="/images/carousel/7.jpg" width={500} height={700} alt={'picture of ben'} />
              <p>This trooper was only dropped once</p>
            </div>
            <div>
              <h3>3</h3>
              <Image src="/images/carousel/8.jpg" width={500} height={500} alt={'picture of ben'} />
              <p>Atlantic coast</p>
            </div>
            <div>
              <h3>3</h3>
              <Image src="/images/carousel/9.jpg" width={500} height={500} alt={'picture of ben'} />
              <p>The Great Sand Dunes</p>
            </div>
            <div>
              <h3>3</h3>
              <Image src="/images/carousel/10.jpeg" width={500} height={500} alt={'picture of ben'} />
              <p>I went to Arizona and stayed in a camper</p>
            </div>
            <div>
              <h3>3</h3>
              <Image src="/images/carousel/11.jpeg" layout={'fill'} alt={'picture of ben'} />
              <p>Juggling is my natural talent</p>
            </div>
            <div>
              <h3>3</h3>
              <Image src="/images/carousel/12.jpeg" width={500} height={500} alt={'picture of ben'} />
              <p>Eating makes me happy</p>
            </div>
          </Carousel>
        </div> */}
        <h2>Podcasts</h2>
        <div className={styles.cardContainer}>
          {podData.items.map((pod) => (
            <div className={styles.card} key={pod.data.id}>
              <Link href={pod.data.link}>
                <h3>{pod.data?.title}</h3>
                <h3>{pod.data.podcast?.title}</h3>
                <Image
                  src={pod.data.podcast?.thumbnail}
                  width={300}
                  height={300}
                  layout={'fixed'}
                  alt={'podcast thumbnail'}
                />
              </Link>
            </div>
          ))}
        </div>
        <h2>Letterboxd</h2>
        <div className={styles.cardContainer}>
          {moviesData.map((movie) => (
            <div className={styles.card} key={movie.id}>
              <Link href={movie.uri}>
                <p>{movie.film?.description}</p>
                <p>
                  {movie.film?.title} - {movie.film?.year}
                </p>
                <Image layout={'fixed'} src={movie.film.image.large} width={230} height={345} alt={'movie poster'} />
                <p>{movie.rating?.text}</p>
              </Link>
            </div>
          ))}
        </div>
        <h2>Github</h2>
        <div className={styles.cardContainer}>
          {githubData.map((dataEntry) => (
            <div className={styles.card} key={dataEntry.id}>
              <Link href={`https://github.com/${dataEntry.repo.name}`}>
                <p>{dataEntry.repo.name}</p>
                <p>{formatDate(dataEntry.created_at)}</p>
                {dataEntry.payload.commits?.map((commit) => (
                  <div key={commit.sha}>
                    <p>{commit.message}</p>
                  </div>
                ))}
              </Link>
            </div>
          ))}
        </div>
        <h2>Codewars</h2>
        <div className={styles.cardContainer}>
          {codewarsData.data.map((challenge) => (
            <div className={styles.card} key={challenge.id}>
              <Link href={`https://www.codewars.com/kata/${challenge.id}`}>
                <p>{challenge.name}</p>
                <p>{formatDate(challenge.completedAt)}</p>
                <p>{challenge.completedLanguages[0]}</p>
              </Link>
            </div>
          ))}
        </div>
        <h2>Food</h2>
        <div className={styles.cardContainer}>
          {foodData.items.map((food) => (
            <div className={styles.card} key={food.id}>
              <Link href={`https://spoonacular.com/${food.value.title}`}>
                <p>{food.value.title}</p>
                <Image
                  layout={'fixed'}
                  src={`https://webknox.com/recipeImages/${food.value.id}-240x150.jpg`}
                  width={240}
                  height={150}
                  alt={'food that looks tasty'}
                />
              </Link>
            </div>
          ))}
        </div>
        <h2>Videos</h2>
        <div className={styles.cardContainer}>
          {videoData.items.map((video: any) => (
            <div className={styles.card} key={video.id.videoId}>
              <Link href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}>
                <p>{video.snippet.title}</p>
                <p>{video.snippet.videoOwnerChannelTitle}</p>
                <Image
                  layout={'fixed'}
                  src={video.snippet.thumbnails.high.url}
                  width={480}
                  height={360}
                  alt={'video thumbnail'}
                />
              </Link>
            </div>
          ))}
        </div>
        <h2>Books</h2>
        <div className={styles.cardContainer}>
          {bookData.items.map((book: any) => (
            <div className={styles.card} key={book.id}>
              <Link href={book.volumeInfo.canonicalVolumeLink}>
                <p>{book.volumeInfo.title}</p>
                <p>{book.volumeInfo.authors}</p>
                <Image
                  layout={'fixed'}
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={'book cover'}
                  width={128}
                  height={190}
                />
              </Link>
            </div>
          ))}
        </div>
        <h2>Music</h2>
        <div className={styles.cardContainer}>
          {playlistData.tracks.items.map((track) => (
            <div className={styles.card} key={track.track.id}>
              <Link href={track.track.external_urls.spotify}>
                <p>{track.track.name}</p>
                <p>{track.track.artists[0].name}</p>
                <p>{track.track.album.name}</p>
                <Image
                  layout={'fixed'}
                  src={track.track.album.images[0].url}
                  width={640}
                  height={640}
                  alt={'album cover'}
                />
              </Link>
            </div>
          ))}
        </div>
        <h2>Guitar</h2>
        <div className={styles.cardContainer}>
          {guitarData.tracks.items.map((track) => (
            <div className={styles.card} key={track.track.id}>
              <p>{track.track.name}</p>
              <p>{track.track.artists[0].name}</p>
              <p>{track.track.album.name}</p>
              <Image
                layout={'fixed'}
                src={track.track.album.images[0].url}
                width={640}
                height={640}
                alt={'album cover'}
              />
            </div>
          ))}
        </div>
        <h2>Running</h2>
        <div className={styles.cardContainer}>
          <div>
            <Link href={'https://www.strava.com/athletes/108608247'}>
              <h3>Runs this month</h3>
              <p>Distance: {formatMeters(runData.recent_run_totals.distance)}</p>
              <p>Elapsed time: {formatSeconds(runData.recent_run_totals.elapsed_time)}</p>
              <p>Time moving: {formatSeconds(runData.recent_run_totals.moving_time)}</p>
            </Link>
          </div>
          <div>
            <Link href={'https://www.strava.com/athletes/108608247'}>
              <h3>Runs this year</h3>
              <p>Distance: {formatMeters(runData.ytd_run_totals.distance)}</p>
              <p>Elapsed time: {formatSeconds(runData.ytd_run_totals.elapsed_time)}</p>
              <p>Time moving: {formatSeconds(runData.ytd_run_totals.moving_time)}</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Ben
export const getStaticProps: GetStaticProps = async () => {
  const githubRes = await fetch('https://api.github.com/users/bafox2/events/public')
  const githubDataJSON = await githubRes.json()
  //only send 10 commits
  const githubData = githubDataJSON.slice(0, 10)
  const codewars = await fetch('https://www.codewars.com/api/v1/users/bafox2/code-challenges/completed')
  const codewarsData = await codewars.json()

  //works - just need to put the id into a webknox.com/recipeImages/{id} url
  const apiFood = await fetch(
    `https://api.spoonacular.com/mealplanner/bfox/day/2022-11-28?hash=6bdf691c3f03c8bcfde559be3c7120ef5fe73e3c&apiKey=${process.env.SPOONACULAR_API_KEY}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SPOONACULAR_API_KEY}`,
      },
    }
  )
  const foodData = await apiFood.json()

  //works
  const podClient = PodClient({ apiKey: process.env.PODCAST_API_KEY })

  // const podData = await podClient
  //   .fetchPlaylistById({
  //     id: 'K32TZHFeqra',
  //     type: 'episode_list',
  //     last_timestamp_ms: 0,
  //     sort: 'recent_added_first',
  //   })
  //   .then((response) => {
  //     // Get response json data here
  //     return response.data
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  const podData = {
    id: 'm1pe7z60bsw',
    name: 'Podcasts about podcasting',
    type: 'episode_list',
    image:
      'https://production.listennotes.com/podcast-playlists/podcasts-about-podcasting-4bU7MZIlEVO-m1pe7z60bsw.1600x1600.jpg',
    items: [
      {
        id: 846112,
        data: {
          id: 'f4d0feb5bed64c8fac67306e7ed6c6e3',
          link: 'https://anchor.fm/this-week-in-startups/episodes/Revolutionizing-podcasting--standards-vs--innovation-with-Anchor-Co-Founder-Mike-Mignano--E1520-e1lqm2g?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/f4d0feb5bed64c8fac67306e7ed6c6e3/',
          image:
            'https://production.listennotes.com/podcasts/this-week-in-startups-jason-calacanis-x2RL7ujsCWm-EKckR36zrnA.1400x1400.jpg',
          title: 'Revolutionizing podcasting + standards vs. innovation with Anchor Co-Founder Mike Mignano | E1520',
          podcast: {
            id: '9a62e2581908415185dee35d2d19f9b5',
            image:
              'https://production.listennotes.com/podcasts/this-week-in-startups-jason-calacanis-x2RL7ujsCWm-EKckR36zrnA.1400x1400.jpg',
            title: 'This Week in Startups',
            publisher: 'Jason Calacanis',
            thumbnail:
              'https://production.listennotes.com/podcasts/this-week-in-startups-jason-calacanis-e9OjnJ3rBt_-EKckR36zrnA.300x300.jpg',
            listen_score: 63,
            listennotes_url: 'https://www.listennotes.com/c/9a62e2581908415185dee35d2d19f9b5/',
            listen_score_global_rank: '0.05%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/this-week-in-startups-jason-calacanis-e9OjnJ3rBt_-EKckR36zrnA.300x300.jpg',
          description:
            "<p>Today's show is a CLASSIC TWiST founder interview. Anchor Co-Founder Mike Mignano joins to tell Anchor's founding story (1:40), break down what it's like getting acquired by Spotify (15:32), and talk about how RSS standards might be stunting innovation in the podcasting space. (33:17)</p>\n<p><br /></p>\n<p>0:00 Jason intros today's guest: Anchor Co-Founder Mike Mignano</p>\n<p>1:40 Mike explains why he started Anchor, the original inspiration and first versions, finding PMF, building the nuts and bolts of a great podcast publishing experience</p>\n<p>14:23 Helpware - Go to https://helpware.com/TWIST to get $1000 off your first invoice</p>\n<p>15:32 Why Anchor sold to Spotify, the Series B term sheet they were considering at the time of acquisition, getting courted by Spotify CEO Daniel Ek, Anchor's first check story</p>\n<p>24:44 LinkedIn Jobs - Post your first job for free at https://linkedin.com/twist</p>\n<p>25:58 Why Apple hasn't innovated in podcasting, paid podcasts vs. advertising</p>\n<p>31:59 Babbel - Save up to 60% off your language learning subscription at https://babbel.com/twist </p>\n<p>33:17 Why Mike wrote his recent article: “The Standards Innovation Paradox”, evolving standards to increase innovation, the Substack example</p>\n<p><br /></p>\n<p>Read Mike's article:</p>\n<p>https://mignano.medium.com/the-standards-innovation-paradox-e14cab521391</p>",
          pub_date_ms: 1659036538000,
          guid_from_rss: '44bc2eb9-2f3a-415e-9f7e-e8e4e16b30c8',
          listennotes_url: 'https://www.listennotes.com/e/f4d0feb5bed64c8fac67306e7ed6c6e3/',
          audio_length_sec: 3220,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/f4d0feb5bed64c8fac67306e7ed6c6e3/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1659049802678,
      },
      {
        id: 830890,
        data: {
          id: 'b6965b7bcdab4df1b108a93309cedfc6',
          link: 'https://anchor.fm/anthony-pompliano3/episodes/1014-Oscar-Merry-On-Pioneering-Listen-To-Earn-With-Bitcoin-e1nag1l?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/b6965b7bcdab4df1b108a93309cedfc6/',
          image:
            'https://production.listennotes.com/podcasts/the-pomp-podcast/1014-oscar-merry-on-0_Nv4FrTdO5-s5SUXWPM2IZ.1400x1400.jpg',
          title: '#1014 Oscar Merry On Pioneering Listen To Earn With Bitcoin',
          podcast: {
            id: '537c372ad9c7470cb2be897a14a7c7f9',
            image:
              'https://production.listennotes.com/podcasts/the-pomp-podcast-anthony-pompliano-pEkRnc8BJOb-f1na5MVD_Qz.1400x1400.jpg',
            title: 'The Pomp Podcast',
            publisher: 'Anthony Pompliano',
            thumbnail:
              'https://production.listennotes.com/podcasts/the-pomp-podcast-anthony-pompliano-ihInEBX1QbK-f1na5MVD_Qz.300x300.jpg',
            listen_score: 64,
            listennotes_url: 'https://www.listennotes.com/c/537c372ad9c7470cb2be897a14a7c7f9/',
            listen_score_global_rank: '0.05%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/the-pomp-podcast/1014-oscar-merry-on-W-qrn7XULpm-s5SUXWPM2IZ.300x300.jpg',
          description:
            'Oscar Merry is the Co-Founder of Fountain, a new podcast platform where viewers can get paid to listen to their favorite podcasts and is powered by the Bitcoin Lightning Network.\n\nIn this conversation, we talk about podcasting 2.0, how the Fountain product works, why podcasters should be interested in paying their listeners, and on-boarding people to the Bitcoin network through Fountain.\n=======================\nLMAX Digital - the market-leading solution for institutional crypto trading & custodial services - offers clients a regulated, transparent and secure trading environment, together with the deepest pool of crypto liquidity. LMAX Digital is also a primary price discovery venue, streaming real-time market data to the industry’s leading analytics platforms. LMAX Digital - secure, liquid, trusted. Learn more at LMAXdigital.com/pomp\n=======================\nThe Pod Pro Cover by Eight Sleep is the most advanced solution on the market for thermoregulation. It pairs dynamic cooling and heating with biometric tracking. Go to https://www.eightsleep.com/Pomp to check out the Pod Pro Cover and save $150 at checkout. Eight Sleep currently ships within the USA, Canada, and the UK.\n=======================\nDeFi Technologies represents what’s next in the digital economy -- providing simplified, trusted access to crypto, decentralized finance and Web 3.0 investment opportunities. Institutions and investors can gain diversified, secure, compliant, and easily tradable access to a diversified set of industry-leading equity products and protocols, through a single stock purchase on a regulated exchange. Currently listed on U.S. (OTC: DEFTF) and Canadian (NEO:DEFI) exchanges.\n \nFor more information or to subscribe to receive company updates and financial information, visit our website at http://defi.tech \n=======================',
          pub_date_ms: 1655835471082,
          guid_from_rss: '210c3350-f192-11ec-9037-036c07c848a8',
          listennotes_url: 'https://www.listennotes.com/e/b6965b7bcdab4df1b108a93309cedfc6/',
          audio_length_sec: 1788,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/b6965b7bcdab4df1b108a93309cedfc6/#edit',
        },
        type: 'episode',
        notes: 'Listen Notes API powers this app :) Awesome to see another success story of our podcast api!',
        added_at_ms: 1655882791242,
      },
      {
        id: 827612,
        data: {
          id: '202d91e59bd8460492a220886d177eea',
          link: 'https://www.vox.com/recode-media-podcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/202d91e59bd8460492a220886d177eea/',
          image:
            'https://production.listennotes.com/podcasts/recode-media-recode-h9zPK_1UkdB-1iPwTajLXlS.1400x1400.jpg',
          title: 'Bill Simmons on podcasts, celebrity interviews and life at Spotify',
          podcast: {
            id: '2aba49dc3fc04e3e96fe89f79a261798',
            image:
              'https://production.listennotes.com/podcasts/recode-media-recode-h9zPK_1UkdB-1iPwTajLXlS.1400x1400.jpg',
            title: 'Recode Media',
            publisher: 'Recode',
            thumbnail:
              'https://production.listennotes.com/podcasts/recode-media-recode-eHTVnkiXyu9-1iPwTajLXlS.300x300.jpg',
            listen_score: 54,
            listennotes_url: 'https://www.listennotes.com/c/2aba49dc3fc04e3e96fe89f79a261798/',
            listen_score_global_rank: '0.5%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/recode-media-recode-eHTVnkiXyu9-1iPwTajLXlS.300x300.jpg',
          description:
            '<p>The Bill Simmons Podcast is, by its own description, "the most downloaded sports podcast of all time." This week, it hits its 1,000th episode.</p><p>Bill Simmons began his career as a Boston sportswriter and went on to found ESPN\'s sports and pop culture blog Grantland. After ESPN shut down the site, Simmons started the Ringer — which he sold to Spotify in 2020.</p><p>In this wide-ranging conversation, Recode’s Peter Kafka talks to Simmons about how he became a podcasting pioneer, and when he realized nerditry about the NBA and Game of Thrones could both live under the same roof. Simmons also reflects on what he learned from his time as an employee of The Walt Disney Corporation and how things are different at Spotify. Plus, he reveals the number one dream guest he’d love to have on his show.</p><p><br /></p><p><strong>Featuring</strong>: Bill Simmons (<a href="https://twitter.com/BillSimmons">@BillSimmons</a>), Founder of The Ringer</p><p><strong>Host</strong>: Peter Kafka (<a href="https://twitter.com/pkafka">@pkafka</a>), Senior Editor at Recode</p><p><strong>More to explore</strong>: <a href="https://pod.link/1080467174">Subscribe for free to Recode Media</a>, Peter Kafka, one of the media industry\'s most acclaimed reporters, talks to business titans, journalists, comedians, and more to get their take on today\'s media landscape.</p><p><strong>About Recode by Vox</strong>: Recode by Vox helps you understand how tech is changing the world — and changing us.</p><p> </p><p>Learn more about your ad choices. Visit <a href="https://podcastchoices.com/adchoices">podcastchoices.com/adchoices</a></p>',
          pub_date_ms: 1655266568008,
          guid_from_rss: '72fffa04-5221-11ec-ae31-23e900b8cde4',
          listennotes_url: 'https://www.listennotes.com/e/202d91e59bd8460492a220886d177eea/',
          audio_length_sec: 3626,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/202d91e59bd8460492a220886d177eea/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1655274047437,
      },

      {
        id: 678931,
        data: {
          id: 'af19ceda98d84d3c92eafe7e7f63b6dd',
          link: 'https://tim.blog/podcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/af19ceda98d84d3c92eafe7e7f63b6dd/',
          image:
            'https://production.listennotes.com/podcasts/the-tim-ferriss-show-tim-ferriss-7NwMpUz5o0S.1400x1400.jpg',
          title:
            '#538: How I Built The Tim Ferriss Show to 700+ Million Downloads — An Immersive Explanation of All Aspects and Key Decisions (Featuring Chris Hutchins)',
          podcast: {
            id: '25212ac3c53240a880dd5032e547047b',
            image:
              'https://production.listennotes.com/podcasts/the-tim-ferriss-show-tim-ferriss-7NwMpUz5o0S.1400x1400.jpg',
            title: 'The Tim Ferriss Show',
            publisher: 'Tim Ferriss: Bestselling Author, Human Guinea Pig',
            thumbnail:
              'https://production.listennotes.com/podcasts/the-tim-ferriss-show-tim-ferriss-7NwMpUz5o0S.300x300.jpg',
            listen_score: 82,
            listennotes_url: 'https://www.listennotes.com/c/25212ac3c53240a880dd5032e547047b/',
            listen_score_global_rank: '0.01%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/the-tim-ferriss-show-tim-ferriss-7NwMpUz5o0S.300x300.jpg',
          description:
            '<p><strong>How I Built The Tim Ferriss Show to 700+ Million Downloads — An Immersive Explanation of All Aspects and Key Decisions (Featuring Chris Hutchins) | Brought to you by </strong><a href="http://linkedin.com/tim" rel="noopener noreferrer" target="_blank"><strong>LinkedIn Jobs</strong></a><strong> recruitment platform with 770M+ users</strong>, <a href="http://athleticgreens.com/tim" rel="noopener noreferrer" target="_blank"><strong>Athletic Greens</strong></a><strong> all-in-one nutritional supplement, and </strong><a href="http://helixsleep.com/tim" rel="noopener noreferrer" target="_blank"><strong>Helix Sleep</strong></a><strong> premium mattresses. More on all three below.</strong></p><p><strong>Chris Hutchins</strong> (<a href="https://twitter.com/hutchins" rel="noopener noreferrer" target="_blank">@hutchins</a>) is an avid life hacker and financial optimizer. He’s the host of <a href="https://www.allthehacks.com/" rel="noopener noreferrer" target="_blank"><strong><em>All the Hacks</em></strong></a> podcast and the Head of New Product Strategy at <a href="https://www.wealthfront.com/tim" rel="noopener noreferrer" target="_blank">Wealthfront</a>.</p><p>Previously, Chris was co-founder and CEO of Grove (acquired by <a href="https://www.wealthfront.com/tim" rel="noopener noreferrer" target="_blank">Wealthfront</a>), co-founder of Milk (acquired by Google), and a partner at <a href="https://www.gv.com/" rel="noopener noreferrer" target="_blank">Google Ventures</a>, where he focused on seed and early stage investments.</p><p>Chris reached out with many questions about podcasting. He had already read much of <a href="https://tim.blog/2016/04/11/tim-ferriss-podcast-business/" rel="noopener noreferrer" target="_blank">what I had written</a> and <a href="https://rolfpotts.com/podcast/tim-ferriss/" rel="noopener noreferrer" target="_blank">listened to several interviews</a>, and this is intended to be an updated guide to all things podcasting.</p><p>Please enjoy!</p><p><strong>This episode is brought to you by </strong><a href="https://www.athleticgreens.com/tim" rel="noopener noreferrer" target="_blank"><strong>Athletic Greens</strong></a><strong>.</strong> I get asked all the time, “If you could only use one supplement, what would it be?” My answer is usually <a href="https://www.athleticgreens.com/tim" rel="noopener noreferrer" target="_blank">Athletic Greens</a>, my all-in-one nutritional insurance. I recommended it in <em>The 4-Hour Body</em> in 2010 and did not get paid to do so. I do my best with nutrient-dense meals, of course, but <a href="https://www.athleticgreens.com/tim" rel="noopener noreferrer" target="_blank">AG</a> further covers my bases with vitamins, minerals, and whole-food-sourced micronutrients that support gut health and the immune system. </p><p><strong>Right now, </strong><a href="https://www.athleticgreens.com/tim" rel="noopener noreferrer" target="_blank"><strong>Athletic Greens</strong></a><strong> is offering you their Vitamin D Liquid Formula free with your first subscription purchase</strong>—a vital nutrient for a strong immune system and strong bones. <strong>Visit </strong><a href="https://www.athleticgreens.com/tim" rel="noopener noreferrer" target="_blank"><strong>AthleticGreens.com/Tim</strong></a><strong> to claim this special offer today and receive the free Vitamin D Liquid Formula (and five free travel packs) with your first subscription purchase! </strong>That’s up to a one-year supply of Vitamin D as added value when you try their delicious and comprehensive all-in-one daily greens product.</p><p>*</p><p><strong>This episode is also brought to you by </strong><a href="http://helixsleep.com/tim" rel="noopener noreferrer" target="_blank"><strong>Helix Sleep</strong></a><strong>! </strong>Helix was selected as the #1 overall mattress of 2020 by <em>GQ </em>magazine<em>, Wired, </em>Apartment Therapy, and many others. With <a href="http://helixsleep.com/tim" rel="noopener noreferrer" target="_blank">Helix</a>, there’s a specific mattress to meet each and every body’s unique comfort needs. Just take their quiz—<a href="http://helixsleep.com/tim" rel="noopener noreferrer" target="_blank">only two minutes to complete</a>—that matches your body type and sleep preferences to the perfect mattress for you. They have a 10-year warranty, and you get to try it out for a hundred nights, risk free. They’ll even pick it up from you if you don’t love it. </p><p><strong>And now, to my dear listeners, Helix is offering up to 200 dollars off all mattress orders plus two free pillows at </strong><a href="http://helixsleep.com/tim" rel="noopener noreferrer" target="_blank"><strong>HelixSleep.com/Tim</strong></a><strong>.</strong></p><p><strong>*</strong></p><p><strong>This episode is also brought to you by </strong><a href="https://linkedin.com/Tim" rel="noopener noreferrer" target="_blank"><strong>LinkedIn Jobs</strong></a><strong>.</strong> Whether you are looking to hire now for a critical role or thinking about needs that you may have in the future, <a href="https://linkedin.com/Tim" rel="noopener noreferrer" target="_blank">LinkedIn Jobs</a> can help. LinkedIn screens candidates for the hard and soft skills you’re looking for and puts your job in front of candidates looking for job opportunities that match what you have to offer.</p><p>Using LinkedIn’s active community of more than 770 million professionals worldwide, <a href="https://linkedin.com/Tim" rel="noopener noreferrer" target="_blank"><strong>LinkedIn Jobs</strong></a> can help you find and hire the right person faster. <strong>When your business is ready to make that next hire, find the right person with LinkedIn Jobs. And now, you can post a job for free.</strong> <a href="https://linkedin.com/Tim" rel="noopener noreferrer" target="_blank"><strong>Just visit LinkedIn.com/Tim</strong></a><strong>.</strong></p><p><strong>*</strong></p><p><strong>If you enjoy the podcast, would you please consider </strong><a href="https://podcasts.apple.com/us/podcast/the-tim-ferriss-show/id863897795?mt=2" rel="noopener noreferrer" target="_blank"><strong>leaving a short review on Apple Podcasts</strong></a><strong>?</strong> It takes less than 60 seconds, and it really makes a difference in helping to convince hard-to-get guests. I also love reading the reviews!</p><p><strong>For show notes and past guests, please visit</strong> <a href="https://tim.blog/podcast/?utm_source=podcast&utm_medium=podcast&utm_campaign=podcast-description" rel="noopener noreferrer" target="_blank"><strong>tim.blog/podcast</strong></a><strong>.</strong></p><p><strong>Sign up for Tim’s email newsletter (“5-Bullet Friday”) at </strong><a href="https://go.tim.blog/5-bullet-friday-1/" rel="noopener noreferrer" target="_blank"><strong>tim.blog/friday</strong></a><strong>.</strong></p><p><strong>For transcripts of episodes, go to </strong><a href="http://tim.blog/transcripts" rel="noopener noreferrer" target="_blank"><strong>tim.blog/transcripts</strong></a><strong>.</strong></p><p><strong>Discover Tim’s books: </strong><a href="http://tim.blog/books" rel="noopener noreferrer" target="_blank"><strong>tim.blog/books</strong></a><strong>.</strong></p><p><strong>Follow Tim:</strong></p><p><strong>Twitter</strong>: <a href="https://twitter.com/tferriss" rel="noopener noreferrer" target="_blank">twitter.com/tferriss</a> </p><p><strong>Instagram</strong>: <a href="https://instagram.com/timferriss/" rel="noopener noreferrer" target="_blank">instagram.com/timferriss</a></p><p><strong>Facebook</strong>: <a href="https://www.facebook.com/TimFerriss/" rel="noopener noreferrer" target="_blank">facebook.com/timferriss</a> </p><p><strong>YouTube</strong>: <a href="https://www.youtube.com/timferriss" rel="noopener noreferrer" target="_blank">youtube.com/timferriss</a></p><p>Past guests on <a href="http://tim.blog/podcast" rel="noopener noreferrer" target="_blank"><strong><em>The Tim Ferriss Show</em></strong></a> include <a href="https://tim.blog/2020/12/08/jerry-seinfeld/" rel="noopener noreferrer" target="_blank">Jerry Seinfeld</a>, <a href="https://tim.blog/2020/06/26/hugh-jackman/" rel="noopener noreferrer" target="_blank">Hugh Jackman</a>, <a href="https://tim.blog/2020/04/16/jane-goodall/" rel="noopener noreferrer" target="_blank">Dr. Jane Goodall</a>, <a href="https://tim.blog/2018/11/27/lebron-james-mike-mancias/" rel="noopener noreferrer" target="_blank">LeBron James</a>, <a href="https://tim.blog/2020/05/20/kevin-hart/" rel="noopener noreferrer" target="_blank">Kevin Hart</a>, <a href="https://tim.blog/2018/09/07/doris-kearns-goodwin-leadership/" rel="noopener noreferrer" target="_blank">Doris Kearns Goodwin</a>, <a href="https://tim.blog/2015/12/06/jamie-foxx/" rel="noopener noreferrer" target="_blank">Jamie Foxx</a>, <a href="https://tim.blog/2020/10/19/matthew-mcconaughey/" rel="noopener noreferrer" target="_blank">Matthew McConaughey</a>, <a href="https://tim.blog/2017/05/21/esther-perel/" rel="noopener noreferrer" target="_blank">Esther Perel</a>, <a href="https://tim.blog/2020/05/08/elizabeth-gilbert/" rel="noopener noreferrer" target="_blank">Elizabeth Gilbert</a>, <a href="https://tim.blog/2017/12/20/terry-crews-how-to-have-do-and-be-all-you-want/" rel="noopener noreferrer" target="_blank">Terry Crews</a>, <a href="https://tim.blog/2020/08/12/sia/" rel="noopener noreferrer" target="_blank">Sia</a>, <a href="https://tim.blog/2020/10/27/yuval-noah-harari/" rel="noopener noreferrer" target="_blank">Yuval Noah Harari</a>, <a href="https://tim.blog/2016/06/21/malcolm-gladwell/" rel="noopener noreferrer" target="_blank">Malcolm Gladwell</a>, <a href="https://tim.blog/2020/05/27/secretary-madeleine-albright/" rel="noopener noreferrer" target="_blank">Madeleine Albright</a>, <a href="https://tim.blog/2017/03/30/cheryl-strayed/" rel="noopener noreferrer" target="_blank">Cheryl Strayed</a>, <a href="https://tim.blog/2019/02/18/jim-collins/" rel="noopener noreferrer" target="_blank">Jim Collins</a>, <a href="https://tim.blog/2020/11/11/mary-karr/" rel="noopener noreferrer" target="_blank">Mary Karr,</a> <a href="https://tim.blog/2014/10/21/brain-pickings/" rel="noopener noreferrer" target="_blank">Maria Popova</a>, <a href="https://tim.blog/2020/05/15/sam-harris-2/" rel="noopener noreferrer" target="_blank">Sam Harris</a>, <a href="https://tim.blog/2021/01/21/michael-phelps-grant-hackett/" rel="noopener noreferrer" target="_blank">Michael Phelps</a>, <a href="https://tim.blog/2020/01/16/bob-iger/" rel="noopener noreferrer" target="_blank">Bob Iger</a>, <a href="https://tim.blog/2019/10/31/edward-norton-motherless-brooklyn/" rel="noopener noreferrer" target="_blank">Edward Norton</a>, <a href="https://tim.blog/2015/02/02/arnold-schwarzenegger/" rel="noopener noreferrer" target="_blank">Arnold Schwarzenegger</a>, <a href="https://tim.blog/2014/06/24/neil-strauss/" rel="noopener noreferrer" target="_blank">Neil Strauss</a>, <a href="https://tim.blog/2019/09/12/ken-burns/" rel="noopener noreferrer" target="_blank">Ken Burns</a>, <a href="https://tim.blog/2017/08/26/maria-sharapova/" rel="noopener noreferrer" target="_blank">Maria Sharapova</a>, <a href="https://tim.blog/2016/05/29/marc-andreessen/" rel="noopener noreferrer" target="_blank">Marc Andreessen</a>, <a href="https://tim.blog/2019/03/28/neil-gaiman/" rel="noopener noreferrer" target="_blank">Neil Gaiman</a>, <a href="https://tim.blog/2019/10/03/neil-degrasse-tyson/" rel="noopener noreferrer" target="_blank">Neil de Grasse Tyson</a>, <a href="https://tim.blog/2016/09/21/jocko-willink-on-discipline-leadership-and-overcoming-doubt/" rel="noopener noreferrer" target="_blank">Jocko Willink</a>, <a href="https://tim.blog/2020/12/03/daniel-ek/" rel="noopener noreferrer" target="_blank">Daniel Ek</a>, <a href="https://tim.blog/2020/09/08/kelly-slater/" rel="noopener noreferrer" target="_blank">Kelly Slater</a>, <a href="https://tim.blog/2019/11/27/peter-attia-fasting-metformin-longevity/" rel="noopener noreferrer" target="_blank">Dr. Peter Attia</a>, <a href="https://tim.blog/2016/02/10/seth-godin/" rel="noopener noreferrer" target="_blank">Seth Godin</a>, <a href="https://tim.blog/2018/09/25/howard-marks/" rel="noopener noreferrer" target="_blank">Howard Marks</a>, <a href="https://tim.blog/2020/02/06/brene-brown-striving-self-acceptance-saving-marriages/" rel="noopener noreferrer" target="_blank">Dr. Brené Brown</a>, <a href="https://tim.blog/2019/04/09/eric-schmidt/" rel="noopener noreferrer" target="_blank">Eric Schmidt</a>, <a href="https://tim.blog/2020/05/01/michael-lewis/" rel="noopener noreferrer" target="_blank">Michael Lewis</a>, <a href="https://tim.blog/2018/03/08/joe-gebbia-co-founder-of-airbnb/" rel="noopener noreferrer" target="_blank">Joe Gebbia</a>, <a href="https://tim.blog/2018/05/06/michael-pollan-how-to-change-your-mind/" rel="noopener noreferrer" target="_blank">Michael Pollan</a>, <a href="https://tim.blog/2021/03/01/jordan-peterson/" rel="noopener noreferrer" target="_blank">Dr. Jordan Peterson</a>, <a href="https://tim.blog/2017/05/31/vince-vaughn/" rel="noopener noreferrer" target="_blank">Vince Vaughn</a>, <a href="https://tim.blog/2020/04/23/brian-koppelman/" rel="noopener noreferrer" target="_blank">Brian Koppelman</a>, <a href="https://tim.blog/2019/05/07/ramit-sethi/" rel="noopener noreferrer" target="_blank">Ramit Sethi</a>, <a href="https://tim.blog/2020/11/18/dax-shepard/" rel="noopener noreferrer" target="_blank">Dax Shepard</a>, <a href="https://tim.blog/2014/10/15/money-master-the-game/" rel="noopener noreferrer" target="_blank">Tony Robbins</a>, <a href="https://tim.blog/2020/05/18/jim-dethmer/" rel="noopener noreferrer" target="_blank">Jim Dethmer</a>, <a href="https://tim.blog/2020/11/19/dan-harris/" rel="noopener noreferrer" target="_blank">Dan Harris</a>, <a href="https://tim.blog/2017/09/13/ray-dalio/" rel="noopener noreferrer" target="_blank">Ray Dalio</a>, <a href="https://tim.blog/2015/08/18/the-evolutionary-angel-naval-ravikant/" rel="noopener noreferrer" target="_blank">Naval Ravikant</a>, <a href="https://tim.blog/2021/03/08/vitalik-buterin-naval-ravikant/" rel="noopener noreferrer" target="_blank">Vitalik Buterin</a>, <a href="https://tim.blog/2021/03/16/elizabeth-lesser/" rel="noopener noreferrer" target="_blank">Elizabeth Lesser</a>, <a href="https://tim.blog/2019/04/18/amanda-palmer-2/" rel="noopener noreferrer" target="_blank">Amanda Palmer</a>, <a href="https://tim.blog/2021/02/18/katie-haun/" rel="noopener noreferrer" target="_blank">Katie Haun</a>, <a href="https://tim.blog/2017/10/09/richard-branson/" rel="noopener noreferrer" target="_blank">Sir Richard Branson</a>, <a href="https://tim.blog/2020/09/02/chuck-palahniuk/" rel="noopener noreferrer" target="_blank">Chuck Palahniuk</a>, <a href="https://tim.blog/2017/10/18/arianna-huffington/" rel="noopener noreferrer" target="_blank">Arianna Huffington</a>, <a href="https://tim.blog/2015/08/31/the-oracle-of-silicon-valley-reid-hoffman-plus-michael-mccullough/" rel="noopener noreferrer" target="_blank">Reid Hoffman</a>, <a href="https://tim.blog/2017/09/17/bill-burr/" rel="noopener noreferrer" target="_blank">Bill Burr</a>, <a href="https://tim.blog/2015/06/26/whitney-cummings/" rel="noopener noreferrer" target="_blank">Whitney Cummings</a>, <a href="https://tim.blog/2015/05/15/rick-rubin/" rel="noopener noreferrer" target="_blank">Rick Rubin</a>, <a href="https://tim.blog/2020/03/26/vivek-murthy/" rel="noopener noreferrer" target="_blank">Dr. Vivek Murthy</a>, <a href="https://tim.blog/2017/09/09/darren-aronofsky/" rel="noopener noreferrer" target="_blank">Darren Aronofsky</a>, and many more.</p><p>See Privacy Policy at <a href="https://art19.com/privacy" rel="noopener noreferrer" target="_blank">https://art19.com/privacy</a> and California Privacy Notice at <a href="https://art19.com/privacy#do-not-sell-my-info" rel="noopener noreferrer" target="_blank">https://art19.com/privacy#do-not-sell-my-info</a>.</p>',
          pub_date_ms: 1634222633073,
          guid_from_rss: 'gid://art19-episode-locator/V0/BtqNd8i7Fya-HhzGx_0SKu-ZiX1V8AB2Te4M0bCkakQ',
          listennotes_url: 'https://www.listennotes.com/e/af19ceda98d84d3c92eafe7e7f63b6dd/',
          audio_length_sec: 10927,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/af19ceda98d84d3c92eafe7e7f63b6dd/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1634779096596,
      },
      {
        id: 580202,
        data: {
          id: '463b7db874c04c3ca66cefda3e9d4679',
          link: 'https://exponent.fm/episode-194-back-on-spotify/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/463b7db874c04c3ca66cefda3e9d4679/',
          image:
            'https://production.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-L8QBusAiaXq-OaJSjb4xQv3.1400x1400.jpg',
          title: 'Episode 194 — Back on Spotify',
          podcast: {
            id: '37589a3e121e40debe4cef3d9638932a',
            image:
              'https://production.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-L8QBusAiaXq-OaJSjb4xQv3.1400x1400.jpg',
            title: 'Exponent',
            publisher: 'Ben Thompson / James Allworth',
            thumbnail:
              'https://production.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-IrgMw5cPALF-OaJSjb4xQv3.300x300.jpg',
            listen_score: 59,
            listennotes_url: 'https://www.listennotes.com/c/37589a3e121e40debe4cef3d9638932a/',
            listen_score_global_rank: '0.1%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-IrgMw5cPALF-OaJSjb4xQv3.300x300.jpg',
          description:
            '<p>Ben and James discuss the history of podcasts and why Spotify’s recent announcements are so compelling for creators.</p>\n<p><strong>Links</strong></p>\n<ul>\n<li>Ben Thompson: Spotify’s Surprise — <a href="https://stratechery.com/2021/spotifys-surprise/">Stratechery</a></li>\n<li>Episode 185 — Open, Free, and Spotify — <a href="https://exponent.fm/episode-185-open-free-and-spotify/">Exponent</a></li>\n<li>Ben Thompson: Podcasts, Analytics, and Centralization — <a href="https://stratechery.com/2017/podcasts-analytics-and-centralization/">Stratechery</a></li>\n<li>Ben Thompson: Spotify’s Podcast Aggregation Play — <a href="https://stratechery.com/2019/spotifys-podcast-aggregation-play/">Stratechery</a></li>\n<li>Ben Thompson: Dithering and Open Versus Free — <a href="https://stratechery.com/2020/dithering-and-the-open-web/">Stratechery</a></li>\n<li>Ben Thompson: Spotify Earnings, Podcasts and Lifetime Value, The Ringer Acquisition — <a href="https://stratechery.com/2020/spotifys-earnings-podcasts-and-lifetime-value-the-ringer-acquisition/">Stratechery</a></li>\n<li>Ben Thompson: The European Super League, Apple Music’s Letter to Artists — <a href="https://stratechery.com/2021/the-european-super-league-apple-musics-letter-to-artists/">Stratechery</a></li>\n<li>Ben Thompson: Podcast Subscriptions vs. the App Store — <a href="https://stratechery.com/2021/podcast-subscriptions-vs-the-app-store/">Stratechery</a></li>\n<li>Ben Thompson: Fearing Spotify?, Apple’s Earnings, Margins and Chips — <a href="https://stratechery.com/2021/fearing-spotify-apples-earnings-margins-and-chips/">Stratechery</a></li>\n</ul>\n<p><strong>Hosts</strong></p>\n<p> </p>\n<ul>\n<li>Ben Thompson, <a href="http://twitter.com/benthompson">@benthompson</a>, <a href="http://stratechery.com">Stratechery</a></li>\n<li>James Allworth, <a href="http://twitter.com/jamesallworth">@jamesallworth</a>, <a href="https://hbr.org/search?term=James+Allworth&sort=popularity_score">Harvard Business Review</a></li>\n</ul>\n<p> </p>\n<p><strong>Podcast Information</strong></p>\n<p> </p>\n<ul>\n<li><a href="https://exponent.fm/feed/">Feed</a></li>\n<li><a href="https://itunes.apple.com/us/podcast/exponent/id826420969">iTunes</a></li>\n<li><a href="https://soundcloud.com/exponentfm">SoundCloud</a></li>\n<li><a href="http://twitter.com/exponentfm">Twitter</a></li>\n<li><a href="http://stratechery.com/exponent-feedback/">Feedback</a></h2>\n</li>\n</ul>',
          pub_date_ms: 1619771580002,
          guid_from_rss: 'https://exponent.fm/?p=429',
          listennotes_url: 'https://www.listennotes.com/e/463b7db874c04c3ca66cefda3e9d4679/',
          audio_length_sec: 3978,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/463b7db874c04c3ca66cefda3e9d4679/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1619799889806,
      },
      {
        id: 475797,
        data: {
          id: '4c72c4dfac004ffca0867a70361f77ab',
          link: 'https://jas.simplecast.com/episodes/side-hustle-friday-why-should-you-start-a-podcast-and-monetize-your-podcast-through-ads-and-patreon-bY620w_A?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/4c72c4dfac004ffca0867a70361f77ab/',
          image:
            'https://production.listennotes.com/podcasts/the-james-altucher/side-hustle-friday-why-x-OdlkHPweS-jDmTs6Nl-tr.1400x1400.jpg',
          title:
            'Side Hustle Friday: Why should you START a podcast and MONETIZE your podcast through Ads and Patreon!',
          podcast: {
            id: '6dabf2f65c384e1f897bb606859309f4',
            image:
              'https://production.listennotes.com/podcasts/the-james-altucher-show-james-altucher-50EFuIdlcY4-sSHocv8YjIe.1400x1400.jpg',
            title: 'The James Altucher Show',
            publisher: 'James Altucher',
            thumbnail:
              'https://production.listennotes.com/podcasts/the-james-altucher-show-james-altucher-6q58dRHpmvW-sSHocv8YjIe.300x300.jpg',
            listen_score: 67,
            listennotes_url: 'https://www.listennotes.com/c/6dabf2f65c384e1f897bb606859309f4/',
            listen_score_global_rank: '0.05%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/the-james-altucher/side-hustle-friday-why-BpGUVA-oL_v-jDmTs6Nl-tr.300x300.jpg',
          description:
            '<p>Another Side Hustle Friday! I sat down with Jay Yow, the Sound Engineer/ Producer of The James Altucher, to discuss ways to monetize a podcast, we spoke about why this is the best time to launch a podcast and our equipment set up for remote recording and interview. In this episode, we break down that\'s the different ways you can monetize through Ads, sponsors, affiliate deals, and Patreon! Part 2 will be coming soon Monday!</p>\n<hr />\n<p><strong>I write about all my podcasts! Check out the full post and learn what I learned at <a href="https://www.jamesaltucher.com/podcast">jamesaltucher.com/podcast</a>.</strong></p>\n<p><strong>Thanks so much for listening! If you like this episode, please subscribe to “The James Altucher Show” and rate and review wherever you get your podcasts:</strong></p>\n<p><a href="https://itunes.apple.com/us/podcast/the-james-altucher-show/id794030859?mt=2">Apple Podcasts</a></p>\n<p><a href="https://www.stitcher.com/podcast/stansberry-radio-network/the-james-altucher-show/e/52735033">Stitcher</a></p>\n<p><a href="https://www.iheart.com/podcast/232-The-James-Altucher-Show-27085086/episode/ep-298-ryan-holiday-competition-28789411/">iHeart Radio</a></p>\n<p><a href="https://open.spotify.com/episode/0ABi9w3Qrb2EFNDeeXlHyz">Spotify</a></p>\n<p> </p>\n<p><strong>Follow me on Social Media:</strong></p>\n<p><a href="https://www.youtube.com/channel/UCRQlx2klE_aNrPhz2OyKRdg">YouTube</a></p>\n<p><a href="https://twitter.com/jaltucher">Twitter</a></p>\n<p><a href="https://www.facebook.com/JAltucher.Blog/">Facebook</a></p>\n<p><a href="https://www.linkedin.com/in/jamesaltucher">Linkedin</a></p>',
          pub_date_ms: 1602831600335,
          guid_from_rss: 'fae163b1-dcc2-4600-b040-ac5600102349',
          listennotes_url: 'https://www.listennotes.com/e/4c72c4dfac004ffca0867a70361f77ab/',
          audio_length_sec: 3007,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/4c72c4dfac004ffca0867a70361f77ab/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1603256538471,
      },
      {
        id: 475796,
        data: {
          id: 'd5e2112643ac4d01baaa8eab6c7b7cae',
          link: 'https://jas.simplecast.com/episodes/side-hustle-friday-monetize-your-podcast-right-now-LY_D4F1p?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/d5e2112643ac4d01baaa8eab6c7b7cae/',
          image:
            'https://production.listennotes.com/podcasts/the-james-altucher/side-hustle-friday-monetize-nJaycZ39zdH-vZt0gi5hoDN.1400x1400.jpg',
          title: 'Side Hustle Friday: Monetize your podcast right now!',
          podcast: {
            id: '6dabf2f65c384e1f897bb606859309f4',
            image:
              'https://production.listennotes.com/podcasts/the-james-altucher-show-james-altucher-50EFuIdlcY4-sSHocv8YjIe.1400x1400.jpg',
            title: 'The James Altucher Show',
            publisher: 'James Altucher',
            thumbnail:
              'https://production.listennotes.com/podcasts/the-james-altucher-show-james-altucher-6q58dRHpmvW-sSHocv8YjIe.300x300.jpg',
            listen_score: 67,
            listennotes_url: 'https://www.listennotes.com/c/6dabf2f65c384e1f897bb606859309f4/',
            listen_score_global_rank: '0.05%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/the-james-altucher/side-hustle-friday-monetize-TGCj-9qP0Nw-vZt0gi5hoDN.300x300.jpg',
          description:
            '<p>Part 2 on monetizing your podcast! In this episode, we talked about ways to monetize your podcast via merchandising, getting hired as a consultant through your podcast, speaking gigs, on and on! Also, enjoy Jay\'s episodic debut on the podcast! (Technically a second since this is a part of Friday\'s podcast!)</p>\n<hr />\n<p><strong>I write about all my podcasts! Check out the full post and learn what I learned at <a href="https://www.jamesaltucher.com/podcast">jamesaltucher.com/podcast</a>.</strong></p>\n<p><strong>Thanks so much for listening! If you like this episode, please subscribe to “The James Altucher Show” and rate and review wherever you get your podcasts:</strong></p>\n<p><a href="https://itunes.apple.com/us/podcast/the-james-altucher-show/id794030859?mt=2">Apple Podcasts</a></p>\n<p><a href="https://www.stitcher.com/podcast/stansberry-radio-network/the-james-altucher-show/e/52735033">Stitcher</a></p>\n<p><a href="https://www.iheart.com/podcast/232-The-James-Altucher-Show-27085086/episode/ep-298-ryan-holiday-competition-28789411/">iHeart Radio</a></p>\n<p><a href="https://open.spotify.com/episode/0ABi9w3Qrb2EFNDeeXlHyz">Spotify</a></p>\n<p> </p>\n<p><strong>Follow me on Social Media:</strong></p>\n<p><a href="https://www.youtube.com/channel/UCRQlx2klE_aNrPhz2OyKRdg">YouTube</a></p>\n<p><a href="https://twitter.com/jaltucher">Twitter</a></p>\n<p><a href="https://www.facebook.com/JAltucher.Blog/">Facebook</a></p>\n<p><a href="https://www.linkedin.com/in/jamesaltucher">Linkedin</a></p>',
          pub_date_ms: 1603090800333,
          guid_from_rss: '7e70863f-ebf1-4641-b151-ac5800ea8773',
          listennotes_url: 'https://www.listennotes.com/e/d5e2112643ac4d01baaa8eab6c7b7cae/',
          audio_length_sec: 2617,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/d5e2112643ac4d01baaa8eab6c7b7cae/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1603256526157,
      },
      {
        id: 434674,
        data: {
          id: '3c311c8cf83448dea0463c69bfe61c75',
          link: 'https://anchor.fm/this-week-in-startups/episodes/E1096-Podcasting-State-of-the-Union-featuring-Overcasts-Marco-Arment--Oxford-Roads-Dan-Granger-e1cgtk4?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/3c311c8cf83448dea0463c69bfe61c75/',
          image:
            'https://production.listennotes.com/podcasts/this-week-in-startups-jason-calacanis-x2RL7ujsCWm-EKckR36zrnA.1400x1400.jpg',
          title: 'E1096: Podcasting State of the Union featuring Overcast’s Marco Arment & Oxford Road’s Dan Granger',
          podcast: {
            id: '9a62e2581908415185dee35d2d19f9b5',
            image:
              'https://production.listennotes.com/podcasts/this-week-in-startups-jason-calacanis-x2RL7ujsCWm-EKckR36zrnA.1400x1400.jpg',
            title: 'This Week in Startups',
            publisher: 'Jason Calacanis',
            thumbnail:
              'https://production.listennotes.com/podcasts/this-week-in-startups-jason-calacanis-e9OjnJ3rBt_-EKckR36zrnA.300x300.jpg',
            listen_score: 63,
            listennotes_url: 'https://www.listennotes.com/c/9a62e2581908415185dee35d2d19f9b5/',
            listen_score_global_rank: '0.05%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/this-week-in-startups-jason-calacanis-e9OjnJ3rBt_-EKckR36zrnA.300x300.jpg',
          description:
            'Follow Marco: https://twitter.com/marcoarment<br />\n<br />\nDownload Overcast: https://overcast.fm<br />\n<br />\nFollow Oxford Road: https://twitter.com/Oxford_Road<br />\n<br />\nFollow Jason: https://linktr.ee/calacanis<br />\n<br />\nThanks to our partners...<br />\nSendPro Online from Pitney Bowes - Try it free for 30 days and get a free 10-pound scale at https://pb.com/twist<br />\nLinkedIn Marketing - Get $100 off your first advertising campaign at https://linkedin.com/thisweekinstartups<br />\nVanta - $1k off your SOC 2 at https://vanta.com/twist',
          pub_date_ms: 1597416466467,
          guid_from_rss: 'https://thisweekinstartups.com/?p=41080',
          listennotes_url: 'https://www.listennotes.com/e/3c311c8cf83448dea0463c69bfe61c75/',
          audio_length_sec: 5249,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/3c311c8cf83448dea0463c69bfe61c75/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1597421395248,
      },
      {
        id: 424141,
        data: {
          id: '50d0110bec79414eac61cb472c3c1de2',
          link: 'https://anchor.fm/caseyadams/episodes/Elise-Hu---Hosting-TED-Talks-Daily--The-Future-of-Podcasting-ecfp5b?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/50d0110bec79414eac61cb472c3c1de2/',
          image:
            'https://production.listennotes.com/podcasts/the-casey-adams-show/elise-hu-hosting-ted-talks-Y6q40Ejr-ZX-wUV0p1Rd3zs.1400x1400.jpg',
          title: 'Elise Hu - Hosting "TED Talks Daily" & The Future of Podcasting',
          podcast: {
            id: '11362a0682e744b29ce5ea73c920132e',
            image:
              'https://production.listennotes.com/podcasts/the-casey-adams-show-casey-adams-gZ74W6otfKC-YuarHs5lfDI.1400x1400.jpg',
            title: 'The Casey Adams Show',
            publisher: 'Casey Adams',
            thumbnail:
              'https://production.listennotes.com/podcasts/the-casey-adams-show-casey-adams-xcAJz4tX0Gg-YuarHs5lfDI.300x300.jpg',
            listen_score: 53,
            listennotes_url: 'https://www.listennotes.com/c/11362a0682e744b29ce5ea73c920132e/',
            listen_score_global_rank: '0.5%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/the-casey-adams-show/elise-hu-hosting-ted-talks-FbSdafYDC9N-wUV0p1Rd3zs.300x300.jpg',
          description:
            '<p>Elise Hu is a host-at-large based at NPR West in Culver City, Calif. Previously, she explored the future with her video series, <a href="https://www.npr.org/2019/05/06/716414780/videos-future-you"><em>Future You with Elise Hu</em></a>, and served as the founding bureau chief and International Correspondent for NPR\'s Seoul office. She was based in Seoul for nearly four years, responsible for the network\'s coverage of both Koreas and Japan, and filed from a dozen countries across Asia. Before joining NPR, she was one of the founding reporters at <a href="http://www.texastribune.org/">The Texas Tribune</a>, a non-profit digital news startup devoted to politics and public policy. While at the Tribune, Hu oversaw television partnerships and multimedia projects, contributed to <em>The New York Times</em>\' expanded Texas coverage, and pushed for editorial innovation across platforms.Her work at NPR has earned a DuPont-Columbia award and a Gracie Award from the Alliance for Women in Media for her video series, <em>Elise Tries</em>. Her previous work has earned a Gannett Foundation Award for Innovation in Watchdog Journalism, a National Edward R. Murrow award for best online video, and beat reporting awards from the Texas Associated Press. <em>The Austin Chronicle</em> once dubiously named her the "<a href="http://www.austinchronicle.com/gyrobase/Awards/BestOfAustin?Award=660138">Best TV Reporter Who Can Write</a>."</p>\n<p>Follow Elise Hu on Instagram: <a href="https://www.instagram.com/elisewho/?hl=en">https://www.instagram.com/elisewho/?hl=en</a></p>\n<p>Learn more about Elise Hu: <a href="https://elisehu.com/">https://elisehu.com/</a></p>\n<p>Listen to "TED Talks Daily" <a href="https://podcasts.apple.com/us/podcast/ted-talks-daily/id160904630">https://podcasts.apple.com/us/podcast/ted-talks-daily/id160904630</a></p>\n<p> </p><p>Learn more about your ad choices. Visit <a href="https://podcastchoices.com/adchoices">podcastchoices.com/adchoices</a></p>',
          pub_date_ms: 1586266731135,
          guid_from_rss: '9aeee818-e72c-4928-8149-7cae42595d82',
          listennotes_url: 'https://www.listennotes.com/e/50d0110bec79414eac61cb472c3c1de2/',
          audio_length_sec: 2520,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/50d0110bec79414eac61cb472c3c1de2/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1595791871517,
      },
      {
        id: 423865,
        data: {
          id: '8f51c8e8b19a4c638ecbce12f9322ba8',
          link: 'https://thefeed.libsyn.com/167-cleanfeed-with-a-side-of-google-podcasts?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/8f51c8e8b19a4c638ecbce12f9322ba8/',
          image:
            'https://production.listennotes.com/podcasts/the-feed-the/167-cleanfeed-with-a-side-of-_HxANWiUlRk-OS-PBaQKcgl.1400x1400.jpg',
          title: '167 Cleanfeed With A Side of Google Podcasts',
          podcast: {
            id: 'ce3754058c7a44a0abd574f86ff5c719',
            image:
              'https://production.listennotes.com/podcasts/the-feed-the-official-libsyn-podcast-elsie-vpSizOJdtuG-2kOexVdGJIv.1400x1400.jpg',
            title: 'The Feed The Official Libsyn Podcast',
            publisher: 'Elsie Escobar and Rob Walch',
            thumbnail:
              'https://production.listennotes.com/podcasts/the-feed-the-official-libsyn-podcast-elsie-1gCfKIP5XVy-2kOexVdGJIv.300x300.jpg',
            listen_score: 44,
            listennotes_url: 'https://www.listennotes.com/c/ce3754058c7a44a0abd574f86ff5c719/',
            listen_score_global_rank: '1%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/the-feed-the/167-cleanfeed-with-a-side-of-KEMJ65zVY4x-OS-PBaQKcgl.300x300.jpg',
          description:
            '<p>Tons of details on all things Google Podcasts Manager! It’s like Apple Podcasts connect but of course Google. Then, we move on to jobs in podcasting, so much about feedback about Cleanfeed, some very interesting Facebook updates, Libsyn player automation, what if someone uses YOUR podcast name, a massive breakdown of the podfader types and of course we’ve got a crazy amount of stats!</p> <p>Audience feedback drives the show. We’d love for you to email us and keep the conversation going! Email thefeed@libsyn.com or call 412–573–1934. We’d love to hear from you!</p> Quick Episode Summary <ul> <li><em>:07</em> Intro!</li> <li><em>3:04 PROMO 1: Sailing in the Mediterranean and Beyond</em></li> <li><em>3:34</em> Rob and Elsie conversation</li> <li>Announcement of Google Podcasts Manager!</li> <li>What it is, what it gives you and how it it different than Apple Podcasts analytics</li> <li>9:46 Apple is hiring for all kinds of podcasting positions</li> <li>13:56 Cleanfeed audio feedback from Carey Green</li> <li>Emails about Cleanfeed</li> <li>18:08 Cleanfeed audio feedback from CG</li> <li>Thoughts and processes about remote recording</li> <li>There’s a new kid in town</li> <li>27:35 Facebook updates about charging for online events and listening to Faceboook Lives</li> <li>30:58 PROMO 2: The Naturist Living Show</li> <li>New version of Podcast Addict now with reviews</li> <li>Custom automation for the libsyn players</li> <li>Face ID and masks</li> <li>39:55 What if someone is using the name of your show? How do you go about dealing with it?</li> <li>A show appearing twice on some apps</li> <li>49:43 Podfading - the key main groups</li> <li>UK data from Rajar on internet delivery audio services via Neil!</li> <li>57:38 PROMO 3: The Europe Desk</li> <li>Stats, stats, stats: mean and median</li> <li>59:52 COVID–19 libsyn stats</li> <li>Where have we been?</li> <li>Where are we going?</li> </ul> Featured Podcast Promos + Audio <ul> <li><a href="https://www.medsailor.com/">PROMO 1: Sailing in the Mediterranean and Beyond</a></li> <li><a href="https://www.naturistlivingshow.com/">PROMO 2: The Naturist Living Show</a></li> <li><a href="https://cges.georgetown.edu/research/podcast/">PROMO 3: The Europe Desk</a></li> <li><a href="https://podcastfasttrack.com/">Carey Green from Podcast Fast Track</a></li> <li><a href="https://www.therocketryshow.com/">CB from the Rocketry Show</a></li> </ul> <p>Thank you to Nick from <a href="http://micme.com">MicMe</a> for our awesome intro!</p>  <p><em>Podcasting Articles and Links mentioned by Rob and Elsie</em></p> <ul> <li><a href="http://speakpipe.com/thefeed">Our SpeakPipe Feedback page!</a> Leave us feedback :)</li> <li><a href="http://podcastsmanager.google.com">Google Podcasts Podcast Manager</a></li> <li><a href="https://podcasts.google.com/manager/about">Google Podcasts Manager About Page</a></li> <li><a href="https://support.google.com/podcast-publishers/answer/9479755?hl=en&ref_topic=9476973&authuser=0"> Adding new and existing podcasts</a></li> <li><a href="https://search.google.com/devtools/podcast/preview">Is your show already in Google Podcasts? Check here</a></li> <li><a href="https://support.google.com/podcast-publishers/answer/9696727?hl=en&ref_topic=9476973&authuser=0"> Manage users and permissions on Google Podcasts Manager</a></li> <li><a href="https://support.google.com/podcast-publishers?hl=en&authuser=0#topic=9476973"> Google Podcasts Manager Support</a></li> <li><a href="https://jobs.apple.com/en-us/details/200164774/podcasts-operations-manager?team=MKTG"> Podcasts Operations Manager</a></li> <li><a href="https://jobs.apple.com/en-us/details/200164287/program-manager-podcasts-apple-media-products?team=SFTWR"> Program Manager, Podcasts, Apple Media Products</a></li> <li><a href="https://jobs.apple.com/en-us/details/200164774/podcasts-operations-manager?team=MKTG"> UI Engineer, Apple Media Products (Podcasts)</a></li> <li><a href="https://youtu.be/DpRHSmJT_Vk">Carey’s Cleanfeed demo video</a></li> <li><a href="http://podcastification.com/in-search-of-the-best-way-to-record-an-interview-with-mark-hills-of-cleanfeed-ep-69"> Carey’s interview with Mark from Cleanfeed</a></li> <li><a href="https://podcastengineeringschool.com/marc-bakos-of-cleanfeed-pes-104/"> Chris Curran’s interview with Marc from Cleanfeed</a></li> <li><a href="https://www.reddit.com/r/podcasting/comments/flw9ae/services_and_applications_to_allow_remote/"> Services and applications to allow remote recordings of remote guests and co-hosts. - Reddit</a></li> <li><a href="http://podcast411.com/mixer.pdf">Rob’s PDF</a></li> <li><a href="https://resonaterecordings.com/2020/04/voice-recorder">Resonate Recordings new recorder</a></li> <li><a href="https://about.fb.com/news/2020/04/introducing-messenger-rooms/">Facebook news</a></li> <li><a href="https://www.rajar.co.uk/docs/news/MIDAS_Spring_2020.pdf">Rajar data for Measurement of Internet Delivery Audio Services</a></li> <li><a href="https://twitter.com/search?q=podcast411%20%23cmworld&src=typed_query&f=live"> Rob’s #CMWorld twitter chat</a></li> <li><a href="https://jacobsmedia.com/there-are-over-a-million-podcasts-in-apples-podcasts-app-what-does-it-mean/"> There Are Over A Million Podcasts In Apple’s Podcasts App, What Does It Mean?</a></li> <li><a href="http://www.insideradio.com/podcastnewsdaily/walch-podcast-downloads-aren-t-down-as-much-as-mobility-showing-medium-s-stickiness/article_394e057a-84ba-11ea-a6d0-a3defc713949.html"> Walch: Proof Of Podcast ‘Stickiness.’</a></li> </ul>  <em>HELP US SPREAD THE WORD!</em> <p><em>We’d love it if you could please share #TheFeed with your twitter followers. <a href="http://clicktotweet.com/9d2te">Click here to post a tweet!</a></em></p> <p><em>If you dug this episode head on over to Apple Podcasts and kindly <a href="https://itunes.apple.com/us/podcast/feed-official-libsyn-podcast/id668413144"> leave us a rating, a review and subscribe!</a></em></p> <em>Ways to subscribe to The Feed: The Official Libsyn Podcast</em> <ul> <li><em><a href="https://itunes.apple.com/us/podcast/feed-official-libsyn-podcast/id668413144"> Click here to subscribe via Apple Podcasts</a></em></li> <li><em><a href="http://thefeed.libsyn.com/rss">Click here to subscribe via RSS</a></em></li> <li><em><a href="http://www.stitcher.com/podcast/libsyn/the-feed">You can also subscribe via Stitcher</a></em></li> </ul> FEEDBACK + PROMOTION <p><em>You can ask your questions, make comments and create a segment about podcasting for podcasters! Let your voice be heard.</em></p> <ul> <li>Download the FREE The Feed App for <a href="https://itunes.apple.com/us/app/the-feed-podcasting-tips-from-libsyn/id381787434?mt=8"> iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.libsyn.android.thefeed&hl=en"> Android</a> (you can send feedback straight from within the app)</li> <li>Call 412 573 1934</li> <li>Email thefeed@libsyn.com</li> <li>Use our <a href="http://speakpipe.com/thefeed">SpeakPipe Page</a>!</li> </ul>',
          pub_date_ms: 1588694700062,
          guid_from_rss: '7d758875-6443-4260-a57f-f31e35d21ec8',
          listennotes_url: 'https://www.listennotes.com/e/8f51c8e8b19a4c638ecbce12f9322ba8/',
          audio_length_sec: 4337,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/8f51c8e8b19a4c638ecbce12f9322ba8/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1595731343450,
      },
      {
        id: 345601,
        data: {
          id: 'dbd3d477dfc94128982b79e8152301b4',
          link: 'http://mschool.libsyn.com/spotify-acquired-the-ringer-podcast-15m-in-revenues-heres-what-it-means-ep-1306?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/dbd3d477dfc94128982b79e8152301b4/',
          image:
            'https://production.listennotes.com/podcasts/marketing-school-digital-marketing-and-knLzBPreqYx-pHyiIJT4Lxl.1400x1400.jpg',
          title: "Spotify Acquired 'The Ringer' Podcast ($15M In Revenues) - Here's What It Means  | Ep. #1306",
          podcast: {
            id: '9a2abf6b68b54554a60a32a2932febcb',
            image:
              'https://production.listennotes.com/podcasts/marketing-school-digital-marketing-and-knLzBPreqYx-pHyiIJT4Lxl.1400x1400.jpg',
            title: 'Marketing School - Digital Marketing and Online Marketing Tips',
            publisher: 'Eric Siu & Neil Patel',
            thumbnail:
              'https://production.listennotes.com/podcasts/marketing-school-digital-marketing-and-9FS5Tsvab0Q-pHyiIJT4Lxl.300x300.jpg',
            listen_score: 63,
            listennotes_url: 'https://www.listennotes.com/c/9a2abf6b68b54554a60a32a2932febcb/',
            listen_score_global_rank: '0.1%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/marketing-school-digital-marketing-and-9FS5Tsvab0Q-pHyiIJT4Lxl.300x300.jpg',
          description:
            '<p>In episode #1306, we discuss Spotify’s acquisition of The Ringer. The podcasting industry is growing exponentially and Spotify wanted to make an aggressive move toward growing its market share. Tune in to hear why this was a super smart decision on their part!</p> <p>TIME-STAMPED SHOW NOTES:</p> <ul> <li>[00:25] Today’s topic: How Spotify Acquired The Ringer.  </li> <li>[00:42] The solid financial results for Spotify in Q4 of 2019.</li> <li>[00:56] How Spotify recognized exponential growth in podcast hours streamed.</li> <li>[01:24] Realizing that they needed to acquire a big podcast to double down on opportunities.   </li> <li>[01:53] The impressive retention rates of the Marketing School podcast.</li> <li>[02:09] Why Spotify’s decision makes a lot of sense. </li> <li>[02:39] Keep in mind that all good channels eventually become crowded.  </li> <li>[03:09] Spotify’s market share around podcasting and how they’re more aggressive than Apple. </li> <li>[03:48] The number of downloads The Ringer podcast is getting. </li> <li>[04:07] Start comparing your Apple Podcast and Spotify analytics for your podcast. </li> <li>[04:50] How our podcasts and Eric’s own podcast are performing.  </li> <li>[05:56] The proposed price for The Ringer stated by Bill Simmons: $100 million. </li> <li>[06:25] That’s it for today!</li> <li>[06:26] To stay updated with events and learn more about our mastermind, go to the <a href="https://marketingschool.io/growth-accelerator-mastermind"> Marketing School</a> site for more information.</li> </ul> <p>Links Mentioned in Today’s Episode:</p> <ul> <li><a href="https://www.spotify.com/">Spotify</a> </li> <li><a href="https://www.theringer.com">The Ringer</a></li> <li><a href="https://www.apple.com">Apple</a></li> <li><a href="https://growtheverywhere.com/podcast-player/">Leveling Up Podcast</a></li> <li><a href="https://twitter.com/BillSimmons?ref_src">Bill Simmons on Twitter</a></li> </ul> <p>Leave Some Feedback:</p> <p> </p> <ul> <li>What should we talk about next? Please let us know in the comments below</li> </ul> <ul> <li>Did you enjoy this episode? If so, please leave a short review.</li> </ul> <p> </p> <p>Connect with Us: </p> <ul> <li style="font-weight: 400;"><a href="http://neilpatel.com">Neilpatel.com</a></li> <li style="font-weight: 400;"><a href="https://www.quicksprout.com/">Quick Sprout</a> </li> <li style="font-weight: 400;"><a href="https://growtheverywhere.com/">Growth Everywhere</a></li> <li style="font-weight: 400;"><a href="https://www.singlegrain.com/">Single Grain</a></li> <li style="font-weight: 400;"><a href="https://twitter.com/neilpatel">Twitter @neilpatel</a> </li> <li style="font-weight: 400;"><a href="https://twitter.com/ericosiu">Twitter @ericosiu</a></li> </ul>',
          pub_date_ms: 1582812000943,
          guid_from_rss: 'bf073240-9680-42e7-89aa-82a2338840dc',
          listennotes_url: 'https://www.listennotes.com/e/dbd3d477dfc94128982b79e8152301b4/',
          audio_length_sec: 434,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/dbd3d477dfc94128982b79e8152301b4/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1582824661788,
      },
      {
        id: 337223,
        data: {
          id: '5b8b9d5851ad4634812798d25553d8d7',
          link: 'https://www.vox.com/recode-media-podcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/5b8b9d5851ad4634812798d25553d8d7/',
          image:
            'https://production.listennotes.com/podcasts/recode-media-recode-h9zPK_1UkdB-1iPwTajLXlS.1400x1400.jpg',
          title: 'Spotify, The Ringer and the future of podcasts',
          podcast: {
            id: '2aba49dc3fc04e3e96fe89f79a261798',
            image:
              'https://production.listennotes.com/podcasts/recode-media-recode-h9zPK_1UkdB-1iPwTajLXlS.1400x1400.jpg',
            title: 'Recode Media',
            publisher: 'Recode',
            thumbnail:
              'https://production.listennotes.com/podcasts/recode-media-recode-eHTVnkiXyu9-1iPwTajLXlS.300x300.jpg',
            listen_score: 54,
            listennotes_url: 'https://www.listennotes.com/c/2aba49dc3fc04e3e96fe89f79a261798/',
            listen_score_global_rank: '0.5%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/recode-media-recode-eHTVnkiXyu9-1iPwTajLXlS.300x300.jpg',
          description:
            '<p>Spotify is buying Bill Simmons’ sports and pop culture website and podcast network, The Ringer. It’s Spotify’s fourth podcast acquisition in a year. Recode’s Peter Kafka (who broke the story) sits down with Vox Media Podcast Network producer and former Ringer staff member Zach Mack to discuss what this deal means for Spotify, The Ringer and the future of podcasts.</p><p><br /></p><p><strong>Featuring</strong>: Zach Mack (<a href="https://twitter.com/zachthemack">@zachthemack</a>), Senior Podcast Producer at Vox Media Podcast Network</p><p><strong>Host</strong>: Peter Kafka (<a href="https://twitter.com/pkafka">@pkafka</a>), Senior Editor at Recode</p><p><strong>More to explore</strong>: <a href="https://pod.link/1080467174">Subscribe for free to Recode Media</a>, Peter Kafka, one of the media industry\'s most acclaimed reporters, talks to business titans, journalists, comedians, and more to get their take on today\'s media landscape.</p><p><strong>About Recode by Vox</strong>: Recode by Vox helps you understand how tech is changing the world — and changing us.</p><p> </p><p>Learn more about your ad choices. Visit <a href="https://podcastchoices.com/adchoices">podcastchoices.com/adchoices</a></p>',
          pub_date_ms: 1581021870145,
          guid_from_rss: '984d87fe-491d-11ea-a150-ab286b86e563',
          listennotes_url: 'https://www.listennotes.com/e/5b8b9d5851ad4634812798d25553d8d7/',
          audio_length_sec: 1216,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/5b8b9d5851ad4634812798d25553d8d7/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1581032059508,
      },
      {
        id: 312262,
        data: {
          id: 'eaa81f7bba344ae78bcf228b88e102a7',
          link: 'https://a16z.simplecast.com/episodes/a16z-podcast-how-what-why-500th-episode-behind-the-scenes-XgOK8aBT?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/eaa81f7bba344ae78bcf228b88e102a7/',
          image:
            'https://production.listennotes.com/podcasts/a16z-podcast-andreessen-horowitz-sBmS7T_86qH-IWF2alEr-9h.1400x1400.jpg',
          title: 'How We Podcast',
          podcast: {
            id: '7c20388d8d7e45d6ae4b770c1fe36b6f',
            image:
              'https://production.listennotes.com/podcasts/a16z-podcast-andreessen-horowitz-sBmS7T_86qH-IWF2alEr-9h.1400x1400.jpg',
            title: 'a16z Podcast',
            publisher: 'Andreessen Horowitz',
            thumbnail:
              'https://production.listennotes.com/podcasts/a16z-podcast-andreessen-horowitz-3bPEYm06XuR-IWF2alEr-9h.300x300.jpg',
            listen_score: 62,
            listennotes_url: 'https://www.listennotes.com/c/7c20388d8d7e45d6ae4b770c1fe36b6f/',
            listen_score_global_rank: '0.1%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/a16z-podcast-andreessen-horowitz-3bPEYm06XuR-IWF2alEr-9h.300x300.jpg',
          description:
            '<p>"Hi everyone, welcome to the a16z Podcast..." ... and welcome to our 500th episode, where, for the first time, we reveal behind-the-scenes details and the backstory of how we built this show, and the broader editorial operation. [You can also listen to episode 499, with head of marketing Margit Wennmachers, on building the a16z brand, <a href="https://a16z.com/2019/11/20/brand-building-a16z-ideas-people-marketing/" target="_blank">here</a>.]</p><p>We\'ve talked a lot about the podcasting industry, and even done podcasts about podcasting, so for this special episode, editor-in-chief and showrunner Sonal Chokshi reveals the how, what, and why in conversation with a16z general partner (and guest-host for this special episode) <a href="https://a16z.com/2019/10/01/knowable-audio-startups/" target="_blank">podcasting</a> fan Connie Chan. We also answer some frequently asked questions that we often get (and recently <a href="https://twitter.com/smc90/status/1198026729421324289" target="_blank">got</a> via Twitter), such as:</p><ul><li>how we program podcasts</li><li>what\'s the process, from ideas to publishing</li><li>do we edit them and how!</li><li>do guests prep, do we have a script</li><li>technical stack</li></ul><p>...and much more. In fact, much of the conversation goes beyond the a16z Podcast and towards Sonal\'s broader principles of \'editorial content marketing\', which hopefully helps those thinking about their own content operations and podcasts, too. Including where podcasting may be going.</p><p>Finally, we share some unexpected moments, and lessons learned along the way; our positions on "tics", swear-words, and talking too fast; failed experiments, and new directions. But most importantly, we share some of the people behind the scenes who help make the a16z Podcast what it was, is, and can be... with thanks most of all to *you*, our wonderful fans!</p>',
          pub_date_ms: 1574838000171,
          guid_from_rss: '2307c44b-8b88-4348-b4f5-3deaa204135e',
          listennotes_url: 'https://www.listennotes.com/e/eaa81f7bba344ae78bcf228b88e102a7/',
          audio_length_sec: 2860,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/eaa81f7bba344ae78bcf228b88e102a7/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1574917254490,
      },
      {
        id: 312259,
        data: {
          id: '1ca5d330311d4808a4dbc668680f565b',
          link: 'https://www.instagram.com/tboypod?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/1ca5d330311d4808a4dbc668680f565b/',
          image:
            'https://production.listennotes.com/podcasts/the-best-one-yet-nick-jack-studios-Yw2Q5dIpK3A-kmx0XIZTAys.1400x1400.jpg',
          title:
            '*Live* at Spotify - Part II: Why Spotify is doing podcasts — Our interview with Max Cutler,  Founder & MD of podcasts at Spotify',
          podcast: {
            id: 'c5ce6c02cbf1486496206829f7d42e8e',
            image:
              'https://production.listennotes.com/podcasts/the-best-one-yet-nick-jack-studios-Yw2Q5dIpK3A-kmx0XIZTAys.1400x1400.jpg',
            title: 'The Best One Yet',
            publisher: 'Nick & Jack Studios',
            thumbnail:
              'https://production.listennotes.com/podcasts/the-best-one-yet-nick-jack-studios-KlIFOa-dpRW-kmx0XIZTAys.300x300.jpg',
            listen_score: 71,
            listennotes_url: 'https://www.listennotes.com/c/c5ce6c02cbf1486496206829f7d42e8e/',
            listen_score_global_rank: '0.05%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/the-best-one-yet-nick-jack-studios-KlIFOa-dpRW-kmx0XIZTAys.300x300.jpg',
          description:
            '<p>The 2nd half of our Snacks recording live from Spotify. We sit down with Max Cutler, the Founder & MD of Parcast Studios at Spotify — his startup was acquired by Spotify earlier this year. We’re asking about how he first pitched his company, whether podcasts will follow the Netflix strategy, and what his favorite pod is. Ever.</p><p><br /></p><p><br /></p><p> </p><p>Learn more about your ad choices. Visit <a href="https://podcastchoices.com/adchoices">podcastchoices.com/adchoices</a></p>',
          pub_date_ms: 1574852400655,
          guid_from_rss: 'b1210966-10a8-11ea-a5b5-6fb6124a64cd',
          listennotes_url: 'https://www.listennotes.com/e/1ca5d330311d4808a4dbc668680f565b/',
          audio_length_sec: 1020,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/1ca5d330311d4808a4dbc668680f565b/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1574917188846,
      },
      {
        id: 310664,
        data: {
          id: 'df11c9fde8234140a705c4aedff2561e',
          link: 'https://www.instagram.com/tboypod?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/df11c9fde8234140a705c4aedff2561e/',
          image:
            'https://production.listennotes.com/podcasts/the-best-one-yet-nick-jack-studios-Yw2Q5dIpK3A-kmx0XIZTAys.1400x1400.jpg',
          title: '*Live* at Spotify - Part I: How we build this (every day)',
          podcast: {
            id: 'c5ce6c02cbf1486496206829f7d42e8e',
            image:
              'https://production.listennotes.com/podcasts/the-best-one-yet-nick-jack-studios-Yw2Q5dIpK3A-kmx0XIZTAys.1400x1400.jpg',
            title: 'The Best One Yet',
            publisher: 'Nick & Jack Studios',
            thumbnail:
              'https://production.listennotes.com/podcasts/the-best-one-yet-nick-jack-studios-KlIFOa-dpRW-kmx0XIZTAys.300x300.jpg',
            listen_score: 71,
            listennotes_url: 'https://www.listennotes.com/c/c5ce6c02cbf1486496206829f7d42e8e/',
            listen_score_global_rank: '0.05%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/the-best-one-yet-nick-jack-studios-KlIFOa-dpRW-kmx0XIZTAys.300x300.jpg',
          description:
            '<p>Spotify invited us to their NYC offices to record a live podcast — it’s a podcast about podcasts for our podcast listening Snackers. We introduce to the Snackers how we got into podcasting, how we built this podcast (every day), and the 5 ingredients for a podcast that people will actually listen to. </p><p> </p><p>Learn more about your ad choices. Visit <a href="https://podcastchoices.com/adchoices">podcastchoices.com/adchoices</a></p>',
          pub_date_ms: 1574420400658,
          guid_from_rss: 'b1632e3a-0ccb-11ea-82ce-6fd47d59f86e',
          listennotes_url: 'https://www.listennotes.com/e/df11c9fde8234140a705c4aedff2561e/',
          audio_length_sec: 1226,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/df11c9fde8234140a705c4aedff2561e/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1574445406609,
      },
      {
        id: 309738,
        data: {
          id: '756203eef51f488fa990fda9daa3c54b',
          link: 'https://product-hunt-radio.simplecast.com/episodes/the-future-of-podcasting-with-andrew-mason-trD3wUwe?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/756203eef51f488fa990fda9daa3c54b/',
          image:
            'https://production.listennotes.com/podcasts/product-hunt-radio-product-hunt-GWVKjh-0kgs-4qPNklrZI93.1400x1400.jpg',
          title: 'The future of podcasting with Andrew Mason',
          podcast: {
            id: '40426582e3cd4dd2bf931f880e7374aa',
            image:
              'https://production.listennotes.com/podcasts/product-hunt-radio-product-hunt-GWVKjh-0kgs-4qPNklrZI93.1400x1400.jpg',
            title: 'Product Hunt Radio',
            publisher: 'Product Hunt',
            thumbnail:
              'https://production.listennotes.com/podcasts/product-hunt-radio-product-hunt--QOpzec69YV-4qPNklrZI93.300x300.jpg',
            listen_score: 44,
            listennotes_url: 'https://www.listennotes.com/c/40426582e3cd4dd2bf931f880e7374aa/',
            listen_score_global_rank: '1%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/product-hunt-radio-product-hunt--QOpzec69YV-4qPNklrZI93.300x300.jpg',
          description:
            '<p>On this episode Abadesi talks to <a href="https://www.producthunt.com/@andrewmason">Andrew Mason</a>, founder and CEO of <a href="https://www.producthunt.com/posts/descript-podcast-studio">Descript</a>. He was formerly founder of Detour, which Descript emerged within before it was spun out into its own company when Bose bought the technology behind Detour. Andrew was also founder of Groupon.</p><p>In this episode they talk about...</p><h2>Descript’s origin as part of Detour, and how to know when it’s the right time to pivot from your original idea</h2><blockquote><p>“We would have been over-investing in Descript if all we were using it for was for Detour, but we knew there was a potential business there and were treating it like a kind of a backup plan when you’re pre-product-market fit, like we were. You’re staying open to different paths.”</p></blockquote><p>Descript actually emerged as a part of Detour, the company Andrew founded to create local audio tours. The team built themselves a better workflow for editing audio and realized that the internal product they had created could be much larger than Detour itself. They also recognized that a confluence of factors in tech were going to allow them to create the next generation of audio editing tools. Andrew explains how he went through the process of figuring out when to “cut bait” on Detour. He previously had pivoted The Point into Groupon, so he has some insightful things to say about when and how to pivot.</p><blockquote><p>“We tried every last possible approach that we could think of and eventually it was like, it’s not supposed to be this hard. Having been through this before, it felt like we were doing the most elaborate things to market the product and reach customers, and at some point it just clicked that it’s not supposed to be this hard and we should move on.”</p></blockquote><h2>Andrew’s advice on managing people and scaling a company</h2><blockquote><p>“In a lot of companies the way that people get into management is they\'ll be individual contributors who have great ideas and nobody wants to listen to their ideas because it\'s the people in management that get to have those conversations. So people say \'okay, I guess I\'ll become a manager\' and then they become a manager for completely the wrong reasons — not because they care about people or unlocking the best possible incarnation of their teams, but because they care about having their ideas listened to.”</p></blockquote><p>He gives a rundown of the history of the company and where they are at now, after having raised a large Series A round and made the acquisition of Lyrebird. He talks about what the next stage of growth will hold for them, and how he is managing the scaling process by putting into place processes and protocols that will provide structure for the company as it grows. He also talks about the importance of delegating the work that the founder has been doing in a growing company.</p><h2>Personal development as a leader and helping your team grow</h2><p>Andrew explains what a typical day looks like for the team at Descript. He explains how they manage internal tools and how he tries to create an environment where feedback can flow freely among the team members. He talks about some of the best ways to grow as a leader, including some of the events that he attends and why he reads a lot. He also says that they have created an internal podcast for the team, a cool idea which you might expect from the company given what Descript is typically used for!</p><p>Andrew also tells us about one of his favorite products that he uses to build tools for the team.</p><p>We’ll be back next week so be sure to subscribe on <a href="https://itunes.apple.com/podcast/product-hunt-radio/id862714883">Apple Podcasts</a>, <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9yc3Muc2ltcGxlY2FzdC5jb20vcG9kY2FzdHMvNjI2MS9yc3M%3D">Google Podcasts</a>, <a href="https://open.spotify.com/show/4Ak6HpbVkLKGacY3E0GHL8?si=N8xXCfscQPapPSFIF2rP3w">Spotify</a>, <a href="https://www.breaker.audio/product-hunt">Breaker</a>, <a href="https://overcast.fm/itunes862714883/product-hunt-radio">Overcast</a>, or wherever you listen to your favorite podcasts. 😸</p><h3>Companies and Products Mentioned In This Episode</h3><p><a href="https://www.producthunt.com/posts/retool-2">Retool</a> — Customized internal tools in minutes.</p>',
          pub_date_ms: 1574226009020,
          guid_from_rss: '30b4169f-c117-4530-b416-e057e16c3f30',
          listennotes_url: 'https://www.listennotes.com/e/756203eef51f488fa990fda9daa3c54b/',
          audio_length_sec: 1816,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/756203eef51f488fa990fda9daa3c54b/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1574273649602,
      },
      {
        id: 294620,
        data: {
          id: '44017cd438a24139a913a3e288a518fe',
          link: 'http://demandgenradio.com/e/129-how-to-build-your-brand-with-podcasting/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/44017cd438a24139a913a3e288a518fe/',
          image:
            'https://production.listennotes.com/podcasts/demandgen-radio-bdo-digital-llc-ufxFwTAZDqp-oVByO3tuFwR.1400x1400.jpg',
          title: '#129 How to Build your Brand with Podcasting',
          podcast: {
            id: 'f446a0eaac2e481991e36467e4a4f96f',
            image:
              'https://production.listennotes.com/podcasts/demandgen-radio-bdo-digital-llc-ufxFwTAZDqp-oVByO3tuFwR.1400x1400.jpg',
            title: 'DemandGen Radio',
            publisher: 'BDO Digital, LLC',
            thumbnail:
              'https://production.listennotes.com/podcasts/demandgen-radio-bdo-digital-llc-Q8LPFuqxXwN-oVByO3tuFwR.300x300.jpg',
            listen_score: 35,
            listennotes_url: 'https://www.listennotes.com/c/f446a0eaac2e481991e36467e4a4f96f/',
            listen_score_global_rank: '2.5%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/demandgen-radio-bdo-digital-llc-Q8LPFuqxXwN-oVByO3tuFwR.300x300.jpg',
          description:
            '<p></p>\n<p>Jordan Paris is a 21-year-old entrepreneur who runs a wildly successful podcast. In this episode, he shares how and why he started his podcast and how podcasting propelled the growth of his business and personal brand. Tune in as Jordan shares how he remains so driven and accomplished at an early age, what lessons he’s learned from starting his podcast, and how you can benefit from starting your own podcast.</p>',
          pub_date_ms: 1569146400126,
          guid_from_rss:
            'demandgen.podbean.com/129-how-to-build-your-brand-with-podcasting-b3619189abc76e1d857a35d5ff3062d9',
          listennotes_url: 'https://www.listennotes.com/e/44017cd438a24139a913a3e288a518fe/',
          audio_length_sec: 2329,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/44017cd438a24139a913a3e288a518fe/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1570177564050,
      },
      {
        id: 293809,
        data: {
          id: '9df23a4053c940fa8762cc94d08c4836',
          link: 'https://hbr.org/podcast/2019/10/can-gimlet-turn-a-podcast-network-into-a-disruptive-platform?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/9df23a4053c940fa8762cc94d08c4836/',
          image:
            'https://production.listennotes.com/podcasts/cold-call-hbr-presents-brian-kenny-UepvPhNmMFV-sC2kfX7gM0D.1400x1400.jpg',
          title: 'Can Gimlet Turn a Podcast Network Into a Disruptive Platform?',
          podcast: {
            id: '841eca7a25c64420b2bd0b536d35108d',
            image:
              'https://production.listennotes.com/podcasts/cold-call-hbr-presents-brian-kenny-UepvPhNmMFV-sC2kfX7gM0D.1400x1400.jpg',
            title: 'Cold Call',
            publisher: 'HBR Presents / Brian Kenny',
            thumbnail:
              'https://production.listennotes.com/podcasts/cold-call-hbr-presents-brian-kenny-egRtK2b1Odo-sC2kfX7gM0D.300x300.jpg',
            listen_score: 47,
            listennotes_url: 'https://www.listennotes.com/c/841eca7a25c64420b2bd0b536d35108d/',
            listen_score_global_rank: '1%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/cold-call-hbr-presents-brian-kenny-egRtK2b1Odo-sC2kfX7gM0D.300x300.jpg',
          description:
            '<p>Harvard Business School professors <strong><a href="https://www.hbs.edu/faculty/Pages/profile.aspx?facId=6446" rel="noopener" target="_blank">John Deighton</a></strong> and <strong><a href="https://www.hbs.edu/faculty/Pages/profile.aspx?facId=6536" rel="noopener" target="_blank">Jeffrey Rayport</a></strong> discuss their case, “<a href="https://store.hbr.org/product/gimlet-media-a-podcasting-startup/918413?sku=918413-PDF-ENG" rel="noopener" target="_blank">Gimlet Media: A Podcasting Startup</a>,” and how two former public radio producers launch a podcast network, entering the last frontier of digital media. Can they turn a content supplier into a disruptive platform?</p>',
          pub_date_ms: 1569948476079,
          guid_from_rss: 'tag:audio.hbr.org,2016-09-16:cold-call.0104',
          listennotes_url: 'https://www.listennotes.com/e/9df23a4053c940fa8762cc94d08c4836/',
          audio_length_sec: 1584,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/9df23a4053c940fa8762cc94d08c4836/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1569971844390,
      },
      {
        id: 274212,
        data: {
          id: '00d8c43df3f94eb7b409135fcba6a083',
          link: 'https://glitch.com/culture/function-episode-6/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          audio: 'https://www.listennotes.com/e/p/00d8c43df3f94eb7b409135fcba6a083/',
          image:
            'https://production.listennotes.com/podcasts/function-with-anil/the-wild-world-of-podcast-ads--OEJf2RUIkX-igyS-B5r24A.1400x1400.jpg',
          title: 'The Wild World of Podcast Ads',
          podcast: {
            id: '3b7c6c851ec14f40bb062b918942aa15',
            image:
              'https://production.listennotes.com/podcasts/function-with-anil-dash-vox-media-3DjNoAIGtV_-pfqIzGD4odn.1400x1400.jpg',
            title: 'Function with Anil Dash',
            publisher: 'Vox Media',
            thumbnail:
              'https://production.listennotes.com/podcasts/function-with-anil-dash-vox-media-yYP_8KQFk06-pfqIzGD4odn.300x300.jpg',
            listen_score: 42,
            listennotes_url: 'https://www.listennotes.com/c/3b7c6c851ec14f40bb062b918942aa15/',
            listen_score_global_rank: '1%',
          },
          thumbnail:
            'https://production.listennotes.com/podcasts/function-with-anil/the-wild-world-of-podcast-ads-Rj6u3btNrmq-igyS-B5r24A.300x300.jpg',
          description:
            '<p>Squarespace. Mailchimp. Casper. Blue Apron. If you\'re a regular podcast listener, then there\'s no doubt you\'ve heard ads from these companies, among many others. Podcasting\'s reach has grown exponentially over the past few years, and companies like these are spending millions of dollars to reach listeners whenever, wherever and however they tune in. But is this truly effective? What type of ads work best? And if you\'re not a podcast from a big media organization, how can <em>you</em> can get a piece of the pie?</p><p>This week on Function, we examine the world of podcast advertising. Anil sits down with <strong>Francesco Baschieri</strong>, president of Voxnest, and talks about some of the trends and technology behind podcast ads. We also hear from New York City podcasting duo <strong>Jade + XD</strong> and pull back the curtain on advertising and monetization from an independent media perspective.</p><p>How does podcast advertising stay ahead of tech like adblockers? What happens when an ad is automatically placed in your podcast by the network that goes against both the host and the audience? You\'ll find out the answers to all this and more on this week\'s episode!</p><p>But first, a word from our sponsors....</p><p><strong>Guests</strong></p><ul>\n<li><a href="https://twitter.com/thebask">Francesco Baschieri</a></li>\n<li><a href="https://twitter.com/JadeAndXD">Jade + XD</a></li>\n</ul><p></p><p><strong>Other Links</strong></p><ul>\n<li><a href="https://voxnest.com/">Voxnest</a></li>\n<li><a href="https://jadeandxd.com/">Jade + XD\'s Website</a></li>\n<li>\n<a href="https://blog.voxnest.com/dynamic-ad-insertion-what-it-is-why-use-it/"><em>Dynamic Ad Insertion — What it is and Why You Should Be Utilising It</em></a> (Voxnest)</li>\n<li>\n<a href="https://stratechery.com/2017/podcasts-analytics-and-centralization/"><em>Podcasts, Analytics, and Centralization</em></a> (Stratechery)</li>\n<li>\n<a href="https://fivethirtyeight.com/features/but-first-a-word-from-100-podcast-sponsors/"><em>But First, A Word From 100 Podcasts\' Sponsors</em></a> (FiveThirtyEight)</li>\n</ul><p></p>',
          pub_date_ms: 1543834800017,
          guid_from_rss: 'gid://art19-episode-locator/V0/3NB2Qv5duR9Q5DGswnGa7R31to3M60gmiXhPD6Ou1Fk',
          listennotes_url: 'https://www.listennotes.com/e/00d8c43df3f94eb7b409135fcba6a083/',
          audio_length_sec: 3338,
          explicit_content: false,
          maybe_audio_invalid: false,
          listennotes_edit_url: 'https://www.listennotes.com/e/00d8c43df3f94eb7b409135fcba6a083/#edit',
        },
        type: 'episode',
        notes: '',
        added_at_ms: 1565460047367,
      },
    ],
    total: 38,
    thumbnail:
      'https://production.listennotes.com/podcast-playlists/podcasts-about-podcasting-0LlKxjtQnf1-m1pe7z60bsw.300x300.jpg',
    visibility: 'public',
    description: 'A curated playlist of podcasts by Wenbin Fang.',
    listennotes_url: 'https://www.listennotes.com/playlists/podcasts-about-podcasting-m1pe7z60bsw/episodes/',
    last_timestamp_ms: 1565460047367,
    total_audio_length_sec: 111877,
  }

  //works
  const googleYoutube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY,
  })
  const videoData = await googleYoutube.playlistItems
    .list({
      part: ['snippet'],
      playlistId: 'PLwbRRpWdMfabEFoqhntE6lsVLi3yb8OFo',
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  //works

  const googleBookshelf = await google.books({
    version: 'v1',
    auth: process.env.GOOGLE_BOOKS_API_KEY,
  })
  const bookData = await googleBookshelf.bookshelves.volumes
    .list({
      userId: '106145325458311565501',
      shelf: '3',
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  //works
  const Spotify = new spotify({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  })
  let token = await Spotify.clientCredentialsGrant()
  Spotify.setAccessToken(token.body.access_token)

  const guitarData = await Spotify.getPlaylist('6hmuDdNOrk4CbQ9qTIMXrP').then((response: any) => {
    return response.body
  })

  const playlistData = await Spotify.getPlaylist('2hhmhP5sF3f9n9qJwrbOIB').then((response: any) => {
    return response.body
  })

  //works
  const moviesData = await letterboxd('airysoftgoth')
    .then((items: any) => {
      return items
    })
    .catch((error: any) => console.log(error))
  // works
  // const runData = await strava.athletes
  //   .stats({
  //     access_token: process.env.STRAVA_ACCESS_TOKEN,
  //     id: 108608247,
  //   })
  //   .then((data) => {
  //     console.log('here')
  //     return data
  //   })
  //   .catch((error) => console.log(error))

  const runData = {
    biggest_ride_distance: null,
    biggest_climb_elevation_gain: null,
    recent_ride_totals: {
      count: 0,
      distance: 0,
      moving_time: 0,
      elapsed_time: 0,
      elevation_gain: 0,
      achievement_count: 0,
    },
    all_ride_totals: {
      count: 0,
      distance: 0,
      moving_time: 0,
      elapsed_time: 0,
      elevation_gain: 0,
    },
    recent_run_totals: {
      count: 1,
      distance: 933.5999755859375,
      moving_time: 504,
      elapsed_time: 598,
      elevation_gain: 0,
      achievement_count: 0,
    },
    all_run_totals: {
      count: 1,
      distance: 934,
      moving_time: 504,
      elapsed_time: 598,
      elevation_gain: 0,
    },
    recent_swim_totals: {
      count: 0,
      distance: 0,
      moving_time: 0,
      elapsed_time: 0,
      elevation_gain: 0,
      achievement_count: 0,
    },
    all_swim_totals: {
      count: 0,
      distance: 0,
      moving_time: 0,
      elapsed_time: 0,
      elevation_gain: 0,
    },
    ytd_ride_totals: {
      count: 0,
      distance: 0,
      moving_time: 0,
      elapsed_time: 0,
      elevation_gain: 0,
    },
    ytd_run_totals: {
      count: 1,
      distance: 934,
      moving_time: 504,
      elapsed_time: 598,
      elevation_gain: 0,
    },
    ytd_swim_totals: {
      count: 0,
      distance: 0,
      moving_time: 0,
      elapsed_time: 0,
      elevation_gain: 0,
    },
  }

  return {
    props: {
      githubData,
      codewarsData,
      foodData,
      podData,
      videoData,
      bookData,
      guitarData,
      playlistData,
      runData,
      moviesData,
    },
  }
}
