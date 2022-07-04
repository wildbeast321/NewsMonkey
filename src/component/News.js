import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "This new Apple Maps feature set to give tough competition to Google Maps - HT Tech",
      description:
        "Apple Maps' new feature will bring navigation for ebikes. Here’s how it will be different from Google Maps.",
      url: "https://tech.hindustantimes.com/tech/news/this-new-apple-maps-feature-set-to-give-tough-competition-to-google-maps-71656936147592.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2022/07/04/1600x900/52fa5bd378d48d0e45f9451625518_1617193099311_1656936233158.jpg",
      publishedAt: "2022-07-04T12:04:18Z",
      content:
        "Apple Maps was released back in 2012 and since then iPhone users have come to depend on it in a major way even though there is the option of Google Maps available at all times. Apple Maps comes as a … [+1801 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Tech Desk",
      title:
        "Apple Watch Series 8 Coming With Body Temperature Monitor, But Will Readings Be Accurate? - News18",
      description:
        "This is not the first time we have heard about the next Apple Watch coming with the ability to monitor your body temperature.",
      url: "https://www.news18.com/news/tech/apple-watch-series-8-coming-with-body-temperature-monitor-but-will-readings-be-accurate-5489557.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/05/apple-watch-pride-month-2022-165345172816x9.jpg",
      publishedAt: "2022-07-04T12:03:46Z",
      content:
        "Apple will launch the eight generation Apple Watch this year in September. The Apple Watch has already been rumoured to come with several health-related features, along with other improvements over i… [+1968 chars]",
    },
    {
      source: {
        id: null,
        name: "THE WEEK",
      },
      author: "The Week Focus",
      title:
        "Oprah Winfrey Keto Gummies Reviews (ACV Shark Tank) Hoax Alert | Shark Tank Weight Loss - The Week",
      description:
        "Oprah Winfrey Keto Gummies: Using this product might help to get a slim and fit body",
      url: "https://www.theweek.in/news/biz-tech/2022/07/04/Oprah-Winfrey-Keto-Gummies-Reviews-ACV-Shark-Tank-Hoax-Alert-Shark-Tank-Weight-Loss.html",
      urlToImage:
        "https://www.theweek.in/content/dam/week/news/biz-tech/images/2022/7/4/Winfrey-Keto-Gummies.jpg",
      publishedAt: "2022-07-04T11:42:45Z",
      content:
        "Oprah Winfrey Keto Gummies: Using this product might help to get a slim and fit body figure\r\nWhy do we need to lose weight? When a person is overweight, their body doesn't operate as efficiently. Wha… [+13660 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Aaditya Thackeray Opposes Eknath Shinde In Trust Vote, May Face Action - NDTV",
      description:
        'Aaditya Thackeray, Shiv Sena MLA, may face disqualification after he "defied" a whip to vote for Maharashtra Chief Minister Eknath Shinde during a test of strength today.',
      url: "https://www.ndtv.com/india-news/aaditya-thackeray-defies-voting-whip-may-face-disqualification-3125475",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/6pqtdbgg_aaditya-thackeray_625x300_04_July_22.jpg",
      publishedAt: "2022-07-04T11:41:00Z",
      content:
        'By voting against Eknath Shinde, Aaditya Thackeray defied the whip\r\nMumbai: Aaditya Thackeray, Shiv Sena MLA, may face disqualification after he "defied" a whip to vote for Maharashtra Chief Minister… [+1610 chars]',
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "Ashish Pant",
      title:
        "Recent Match Report - SL Women vs IND Women 2nd ODI 2022 - ESPNcricinfo",
      description:
        "Sri Lanka never recovered from Renuka's early blows and couldn't take a single wicket in India's dominating chase",
      url: "https://www.espncricinfo.com/series/india-women-in-sri-lanka-2022-1319706/sri-lanka-women-vs-india-women-2nd-odi-1319713/match-report",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/342100/342114.3.jpg",
      publishedAt: "2022-07-04T11:15:00Z",
      content:
        "ReportSri Lanka never recovered from Renuka's early blows and couldn't take a single wicket in India's dominating chase",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Leena Manimekalai: Outrage over poster of smoking Hindu goddess - BBC",
      description:
        "A poster for director Leena Manimekalai's new movie shows her dressed as a goddess, smoking a cigarette.",
      url: "https://www.bbc.com/news/world-asia-india-62033006",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/11B74/production/_125746527_kali.jpg",
      publishedAt: "2022-07-04T11:00:54Z",
      content:
        "A film poster that depicts a woman dressed as Hindu goddess Kali smoking a cigarette has sparked anger in India.\r\nDirector Leena Manimekalai tweeted the poster of her new film Kaali - described as a … [+3314 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Rakesh Patil",
      title:
        "Closing Bell: Nifty ends above 15,800, Sensex gains 300 pts; FMCG gains, metals drag - Moneycontrol",
      description:
        "Among sectors, FMCG, bank and capital goods indices rose 1-2 percent, while Metal index shed 1.5 percent.",
      url: "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-july-4-latest-news-bse-nse-sensex-nifty-covid-coronavirus-phoenix-mills-eicher-motors-endurance-technologies-selan-exploration-ashoka-buildcon-mtar-tech-8774441.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/06/Sensex-1-770x433.jpg",
      publishedAt: "2022-07-04T10:59:02Z",
      content:
        "July 04, 2022 / 04:19 PM IST\r\nSiddhartha Khemka, Head - Retail Research, Motilal Oswal Financial Services:\r\nNifty opened lower and remained range bound for most part of the session. However, it gaine… [+1027 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        'Watch - "An Absolute Jaffa": Virat Kohli Gets Dismissed By Brilliant Delivery From Ben Stokes - NDTV Sports',
      description:
        "After getting out for 11 in the first innings, Virat Kohli was dismissed for 20 in the second innings by Ben Stokes on Monday",
      url: "https://sports.ndtv.com/england-vs-india-2022/india-vs-england-an-absolute-jaffa-virat-kohli-gets-dismissed-by-brilliant-delivery-from-ben-stokes-watch-3126015",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/2m12g7n_virat-kohli_625x300_04_July_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-07-04T10:52:30Z",
      content:
        "India have slowly but surely taken a commanding position in the fifth rescheduled Test against England at Edgbaston. Their lead has ballooned past the 300-mark on the fourth day as the Jasprit Bumrah… [+1527 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "OnePlus TV 50 Y1S Pro Budget Smart TV with 4K screen, MEMC, ALLM Launched in India - gizmochina",
      description:
        "OnePlus TV 50 Y1S Pro Budget Smart TV with 4K screen, MEMC, ALLM Launched in India - gizmochina",
      url: "https://news.google.com/__i/rss/rd/articles/CBMid2h0dHBzOi8vd3d3Lmdpem1vY2hpbmEuY29tLzIwMjIvMDcvMDQvb25lcGx1cy10di01MC15MXMtcHJvLWJ1ZGdldC1zbWFydC10di13aXRoLTRrLXNjcmVlbi1tZW1jLWFsbG0tbGF1bmNoZWQtaW4taW5kaWEv0gF9aHR0cHM6Ly93d3cuZ2l6bW9jaGluYS5jb20vMjAyMi8wNy8wNC9vbmVwbHVzLXR2LTUwLXkxcy1wcm8tYnVkZ2V0LXNtYXJ0LXR2LXdpdGgtNGstc2NyZWVuLW1lbWMtYWxsbS1sYXVuY2hlZC1pbi1pbmRpYS8_YW1wPTE?oc=5",
      urlToImage: null,
      publishedAt: "2022-07-04T10:48:56Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "India vs England Live Score, 5th Test, Day 4: Pant scores fifty again - Hindustan Times",
      description:
        "India vs England 5th Test Live Cricket Score Day 4: India lost two wickets in the first hour of the day but Rishabh Pant has scored another half century and taken India's lead well past the 300-run mark. Follow Live Cricket Score and Updates of the IND vs ENG…",
      url: "https://www.hindustantimes.com/cricket/india-vs-england-live-score-5th-test-day-4-ind-vs-eng-latest-cricket-updates-edgbaston-birmingham-101656922230592.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/04/1600x900/Britain-Cricket-England-India-44_1656922350612_1656922378937.jpg",
      publishedAt: "2022-07-04T10:34:34Z",
      content:
        "India vs England 5th Test Live Score: Jonny Bairstow on his on-field altercation with Virat KohliBairstow had an altercation with Kohli, while strugglng at 13 from 61 balls during England's first inn… [+592 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: null,
      title:
        "Next stop Moon: Capstone mission escapes Earth's orbit on its way to lunar world - India Today",
      description:
        "The Capstone mission, that will identify a new orbit around the Moon and pave the way for the big-ticket Moon missions, has left Earth's orbit on course to the lunar world.",
      url: "https://www.indiatoday.in/science/story/next-stop-moon-capstone-mission-escapes-earth-s-orbit-on-its-way-to-lunar-world-1970106-2022-07-04",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/Capstone-647x363.jpeg?AsqTvdBMo7G7XBIUf8y.LDbGuQxlGxXy",
      publishedAt: "2022-07-04T10:32:23Z",
      content:
        "Days after being launched from New Zealand, the Capstone mission that will find a new route in lunar orbit has begun its journey towards the Moon.\r\nThe Cislunar Autonomous Positioning System Technolo… [+2503 chars]",
    },
    {
      source: {
        id: null,
        name: "Pragativadi.com",
      },
      author: "Pradeep Sahoo",
      title:
        "Whatsapp Will Soon Let You Delete Messages Two Days After Sending Them - Pragativadi",
      description:
        "New Delhi: Meta-owned messaging platform, WhatsApp is rolling out a new feature on its beta channel that will allow users to delete messages two days after sending them.Currently, any message you send on WhatsApp can only be deleted for everyone for",
      url: "https://pragativadi.com/whatsapp-will-soon-let-you-delete-messages-two-days-after-sending-them/",
      urlToImage:
        "https://pragativadi.com/wp-content/uploads/2022/05/52141889_101.jpg",
      publishedAt: "2022-07-04T10:32:14Z",
      content:
        "New Delhi: Meta-owned messaging platform, WhatsApp is rolling out a new feature on its beta channel that will allow users to delete messages two days after sending them.\r\nCurrently, any message you s… [+662 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Himesh Mankad",
      title:
        "EXCLUSIVE: Salman Khan and Shah Rukh Khan team up for India's BIGGEST action film written by Aditya Chopra - PINKVILLA",
      description:
        "Meanwhile, another spy universe film, War 2 is also in the making with Hrithik Roshan in the lead. As reported by Pinkvilla before, a subject has also been narrated to Hrithik Roshan, and the superstar has loved the idea. More details",
      url: "https://www.pinkvilla.com/entertainment/exclusives/exclusive-salman-khan-and-shah-rukh-khan-team-indias-biggest-action-film-written-aditya-chopra-1155271",
      urlToImage:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/salman-khan-shah-rukh-khan-spy-universe-social.jpg?itok=BKFVETyk",
      publishedAt: "2022-07-04T10:16:40Z",
      content:
        "On August 15, 2012, Salman Khan took charge as Tiger aka. Avinash Singh Rathore in Ek Tha Tiger. He followed it up with the sequel, Tiger Zinda Hai in 2017. Both the films proved to be the highest gr… [+4079 chars]",
    },
    {
      source: {
        id: null,
        name: "The Quint",
      },
      author: "The Quint",
      title:
        "12 Dead as School Bus Falls Into Gorge in Kullu, PM Modi Announces Compensation - The Quint",
      description:
        "Twelve people, including some schoolchildren, have been killed as a private bus fell into a gorge in Himachal Pradesh's Kullu district.",
      url: "https://www.thequint.com/news/india/bus-accident-school-children-kullu-himachal-pradesh-fall-gorge-death",
      urlToImage:
        "https://images.thequint.com/thequint%2F2022-07%2F698773e8-77a3-4182-b308-8b8176237596%2FFWy_43gacAAMh9L.jfif?w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2022-07-04T09:49:48Z",
      content:
        "At least 12 people, including schoolchildren, died as a private bus fell into a gorge in Himachal Pradesh's Kullu district at around 8 am on Monday, 4 July.\r\nInitial reports had suggested that 16 pas… [+309 chars]",
    },
    {
      source: {
        id: null,
        name: "Coingape",
      },
      author: "Ambar Warrick",
      title:
        "After Vauld Suspends Withdrawals, These Crypto Exchanges Could Be Next - CoinGape",
      description:
        "Vauld is the latest in a growing list of crypto exchanges to suspend their operations in the face of a market crash.",
      url: "https://coingape.com/after-vauld-suspends-withdrawals-these-crypto-exchanges-could-be-next/",
      urlToImage:
        "https://cdn.coingape.com/wp-content/uploads/2022/02/15132525/flag-india-bitcoin-waving-over-blue-sky-212911087.jpg",
      publishedAt: "2022-07-04T09:37:46Z",
      content:
        "Indian and Singaporean firm  Vauld is the latest in a growing list of crypto exchanges to suspend their operations in the face of a market crash.\r\nThe exchange- which is exposed to Indian and Singapo… [+1962 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "IndiaToday.in",
      title:
        "CBSE Class 10th result 2022 LIVE: CBSE 10th results not to be declared today, direct link for CBSE term 2 results - India Today",
      description:
        "CBSE Class 10th Result 2022 LIVE: The Central Board of Secondary Education, CBSE is likely to announce Class 10th final result 2022 soon. Students, who are eagerly waiting for the Class 10 results will check their results on the official website, i.e., cbsere…",
      url: "https://www.indiatoday.in/education-today/news/story/cbse-class-10th-result-2022-live-updates-cbse-10th-final-results-expected-today-check-via-sms-and-mobile-app-1969902-2022-07-04",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202207/Copy_of_APPLY_NOW__3__0-647x363.jpeg?dXgQ3gc_uEG8fMHdOaQ5Mp7YLPE7p8sc",
      publishedAt: "2022-07-04T09:36:22Z",
      content:
        "cbseresults.nic.in CBSE Result 2022 LIVE: Around 21 Lakh students are anxiously awaiting the CBSE 10th Result 2022.\r\nFor the convenience of students, CBSE marksheets and certificates will be made ava… [+940 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title: 'Akasa Air Crew\'s Uniforms Are "Eco-Friendly, Fun" - NDTV',
      description:
        "Akasa Air, India's newest airline backed by billionaire investor Rakesh Jhunjhunwala, unveiled its crew's uniform on Monday. The airline is preparing to start operations towards the end of this month.",
      url: "https://www.ndtv.com/offbeat/akasa-air-unveils-first-look-of-its-eco-friendly-crew-uniform-3125639",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/v969jal8_akasa-air_625x300_04_July_22.jpg",
      publishedAt: "2022-07-04T09:08:24Z",
      content:
        "The jackets and trousers have been designed by Delhi-based fashion designer Rajesh Pratap Singh\r\nAkasa Air, India's newest airline backed by billionaire investor Rakesh Jhunjhunwala, unveiled its cre… [+2562 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Earth is farthest from Sun on July 4, 152 million km away | Aphelion 2022 | Oneindia News*Space - Oneindia News",
      description:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsheIeCzwoYQ",
      urlToImage: null,
      publishedAt: "2022-07-04T08:58:09Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: {
        id: null,
        name: "Zoom",
      },
      author: "TN Digital",
      title:
        "Cervical cancer: Ladies, pain in THESE 3 areas could be a major red flag - Times Now",
      description:
        "Experts blame 79 per cent cervical cancer cases on a group of human papillomavirus (HPV). There are over 100 types of HPV; of these, 16 to 18 per cent can result in the development of cervical cancer.",
      url: "https://www.timesnownews.com/health/cervical-cancer-ladies-pain-in-these-3-areas-could-be-a-major-red-flag-article-92647746",
      urlToImage:
        "https://static.tnn.in/thumb/msid-92647746,imgsize-100,width-1280,height-720,resizemode-75/92647746.jpg",
      publishedAt: "2022-07-04T08:41:43Z",
      content:
        "CBSE Class 10 Result 2022 Live: 10th Result date, Term 1, Term 2 weightage on cbseresults.nic.in, cbse.gov.in",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Jayprakash S Naidu",
      title:
        "'Intent to terrorise people': Police slap UAPA charges on all accused in Amravati murder - The Indian Express",
      description:
        "Amravati killing: Umesh Kolhe, 54, was hacked to death allegedly because he circulated posts on WhatsApp supporting the controversial comments on Prophet Mohammed made by BJP's Nupur Sharma.",
      url: "https://indianexpress.com/article/cities/mumbai/amravati-killing-uapa-charges-accused-intent-to-terrorise-8007963/",
      urlToImage:
        "https://images.indianexpress.com/2022/07/amravati-2col-1.jpg",
      publishedAt: "2022-07-04T08:15:05Z",
      content:
        "The Kotwali city police on Monday added sections of the Unlawful Activities Prevention Act (UAPA) against all accused in the murder of Umesh Kolhe, 54, who was killed allegedly for supporting BJP lea… [+3478 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <h1 className="mx-sm-5 ms-3 my-4">NewsMonkey - Top Headlines</h1>
        <div className="container my-2">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <Newsitem
                    title={element.title.slice(0, 45)}
                    description={element.description.slice(0, 80)}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
