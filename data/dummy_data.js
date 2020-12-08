import StockPriceByTime from '../models/StockPriceByTime';
import StockPriceByDate from "../models/StockPriceByDate";
import BitcoinScore from "../models/BitcoinScore";
import BitcoinRate from "../models/BitcoinRate";
import CompanyDetail from "../models/CompanyDetail";
import CurrencyRate from "../models/CurrencyRate";
import ForexRate from "../models/ForexRate";
import News from "../models/News";

export const CompanyDetailList = [
    new CompanyDetail(
        'c1',
        'IBM',
        'Common Stock',
        'IBM',
        'International Business Machines Corporation operates as an integrated solutions and services company worldwide. Its Cloud & Cognitive Software segment offers software for vertical and domain-specific solutions in health, financial services, and Internet of Things (IoT), weather, and security software and services application areas; and customer information control system and storage, and analytics and integration software solutions to support client mission critical on-premise workloads in banking, airline, and retail industries. It also offers middleware and data platform software, including Red Hat, which enables the operation of clients\' hybrid multi-cloud environments; and Cloud Paks, WebSphere distributed, and analytics platform software, such as DB2 distributed, information integration, and enterprise content management, as well as IoT, Blockchain and AI/Watson platforms. The company\'s Global Business Services segment offers business consulting services; system integration, application management, maintenance, and support services for packaged software; finance, procurement, talent and engagement, industry-specific business process outsourcing services; IT infrastructure and platform services. Its Global Technology Services segment provides project, managed, outsourcing, and cloud-delivered services for enterprise IT infrastructure environments; and IT infrastructure support services. It\'s Systems segment offers servers for businesses, cloud service providers, and scientific computing organizations; data storage products and solutions; and z/OS, an enterprise operating system, as well as Linux. Its Global Financing segment provides lease, installment payment, loan financing, short-term working capital financing, and remanufacturing and remarketing services. It was formerly known as Computing-Tabulating-Recording Co. and changed its name to International Business Machines Corporation in 1924. It was founded in 1911 and is headquartered in Armonk, New York.',
        'NYSE',
        'USA',
        'Technology',
        'One New Orchard Road, Armonk, NY, United States, 10504',
        'Information Technology Services',
        'https://cdn.pixabay.com/photo/2016/10/29/19/54/supercomputer-1781372_1280.jpg'
        ),
    new CompanyDetail(
        'c2',
        'AAPL',
        'Common Stock',
        'Apple Inc',
        'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, iPod touch, and other Apple-branded and third-party accessories. It also provides digital content stores and streaming services; AppleCare support services; and iCloud, a cloud service, which stores music, photos, contacts, calendars, mail, documents, and others. In addition, the company offers various service, such as Apple Arcade, a game subscription service; Apple Card, a co-branded credit card; Apple News+, a subscription news and magazine service; and Apple Pay, a cashless payment service, as well as licenses its intellectual property, and provides other related services. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It sells and delivers third-party applications for its products through the App Store, Mac App Store, and Watch App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. has a collaboration with Google to develop COVID-19 tracking system for Android and iOS devices. Apple Inc. was founded in 1977 and is headquartered in Cupertino, California.',
        'NASDAQ',
        'USA',
        'Technology',
        'One Apple Park Way, Cupertino, CA, United States, 95014',
        'Consumer Electronics',
        'https://cdn.pixabay.com/photo/2019/01/17/23/14/work-3938876_1280.jpg'
    ),
    new CompanyDetail(
        'c3',
        'GOOGL',
        'Common Stock',
        'Alphabet Inc',
        'Alphabet Inc. provides online advertising services in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. It offers performance and brand advertising services. The company operates through Google and Other Bets segments. The Google segment offers products, such as Ads, Android, Chrome, Google Cloud, Google Maps, Google Play, Hardware, Search, and YouTube, as well as technical infrastructure. It also offers digital content, cloud services, hardware devices, and other miscellaneous products and services. The Other Bets segment includes businesses, including Access, Calico, CapitalG, GV, Verily, Waymo, and X, as well as Internet and television services. The company has an agreement with Sabre Corporation to develop an artificial intelligence-driven technology platform for travel. Alphabet Inc. was founded in 1998 and is headquartered in Mountain View, California.',
        'NASDAQ',
        'USA',
        'Communication Services',
        '1600 Amphitheatre Parkway, Mountain View, CA, United States, 94043',
        'Internet Content & Information',
        'https://avidgen.com/wp-content/uploads/2020/02/Google-Office-in-China-Closed.jpg'
    ),
    new CompanyDetail(
        'c4',
        'TSLA',
        'Common Stock',
        'Tesla, Inc',
        'Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, Netherlands, Norway, and internationally. The company operates in two segments, Automotive; and Energy Generation and Storage. The Automotive segment offers sedans and sport utility vehicles. It also provides electric powertrain components and systems; and services for electric vehicles through its company-owned service locations, and Tesla mobile service technicians, as well as sells used vehicles. This segment markets and sells its products through a network of company-owned stores and galleries, as well as through its own Website. The Energy Generation and Storage segment offers energy storage products, such as rechargeable lithium-ion battery systems for use in homes, industrial, commercial facilities, and utility grids; and designs, manufactures, installs, maintains, leases, and sells solar energy generation and energy storage products to residential and commercial customers. It also provides vehicle insurance services, as well as renewable energy. The company was formerly known as Tesla Motors, Inc. and changed its name to Tesla, Inc. in February 2017. Tesla, Inc. was founded in 2003 and is headquartered in Palo Alto, California.',
        'NASDAQ',
        'USA',
        'Consumer Cyclical',
        '3500 Deer Creek Road, Palo Alto, CA, United States, 94304',
        'Auto Manufacturers',
        'https://cdn.pixabay.com/photo/2016/10/13/22/30/tesla-1738969_1280.jpg'
    ),
    new CompanyDetail(
        'c5',
        'MSFT',
        'Common Stock',
        'Microsoft Corporation',
        'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide. Its Productivity and Business Processes segment offers Office, Exchange, SharePoint, Microsoft Teams, Office 365 Security and Compliance, and Skype for Business, as well as related Client Access Licenses (CAL); Skype, Outlook.com, and OneDrive; LinkedIn that includes Talent, Learning, Sales, and Marketing solutions, as well as premium subscriptions; and Dynamics 365, a set of cloud-based and on-premises business solutions for small and medium businesses, large organizations, and divisions of enterprises. Its Intelligent Cloud segment licenses SQL and Windows Servers, Visual Studio, System Center, and related CALs; GitHub that provides a collaboration platform and code hosting service for developers; and Azure, a cloud platform. It also offers support services and Microsoft consulting services to assist customers in developing, deploying, and managing Microsoft server and desktop solutions; and training and certification to developers and IT professionals on various Microsoft products. Its More Personal Computing segment provides Windows original equipment manufacturer (OEM) licensing and other non-volume licensing of the Windows operating system; Windows Commercial, such as volume licensing of the Windows operating system, Windows cloud services, and other Windows commercial offerings; patent licensing; Windows Internet of Things; and MSN advertising. It also offers Surface, PC accessories, PCs, tablets, gaming and entertainment consoles, and other intelligent devices; Gaming, including Xbox hardware, and Xbox content and services; video games and third-party video game royalties; and Search, including Bing and Microsoft advertising. It sells its products through OEMs, distributors, and resellers; and directly through digital marketplaces, online stores, and retail stores. The company was founded in 1975 and is headquartered in Redmond, Washington.',
        'NASDAQ',
        'USA',
        'Technology',
        'One Microsoft Way, Redmond, WA, United States, 98052-6399',
        'Software Infrastructure',
        'https://cdn.pixabay.com/photo/2015/10/29/08/17/building-1011876_1280.jpg'
    ),
    new CompanyDetail(
        'c6',
        'FB',
        'Common Stock',
        'Facebook, Inc',
        'Facebook, Inc. develops products that enable people to connect and share with friends and family through mobile devices, personal computers, virtual reality headsets, and in-home devices worldwide. The company\'s products include Facebook that enables people to connect, share, discover, and communicate with each other on mobile devices and personal computers; Instagram, a community for sharing photos, videos, and private messages; Messenger, a messaging application for people to connect with friends, family, groups, and businesses across platforms and devices; and WhatsApp, a messaging application that is used by people and businesses to communicate in a private way. It also provides Oculus, a hardware, software, and developer ecosystem, which allows people to come together and connect with each other through its Oculus virtual reality products. Facebook, Inc. was founded in 2004 and is headquartered in Menlo Park, California.',
        'NASDAQ',
        'USA',
        'Communication Services',
        '1601 Willow Road, Menlo Park, CA, United States, 94025',
        'Internet Content & Information',
        'https://cdn.geekwire.com/wp-content/uploads/2019/05/DSC09426.jpg1-768x502.jpg'
    ),
    new CompanyDetail(
        'c7',
        'AMZN',
        'Common Stock',
        'Amazon.com Inc',
        'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and internationally. The company operates through three segments: North America, International, and Amazon Web Services (AWS). It sells merchandise and content purchased for resale from third-party sellers through physical and online stores. The company also manufactures and sells electronic devices, including Kindle, Fire tablets, Fire TVs, Rings, and Echo and other devices; provides Kindle Direct Publishing, an online service that allows independent authors and publishers to make their books available in the Kindle Store; and develops and produces media content. In addition, it offers programs that enable sellers to sell their products on its Websites, as well as its stores; and programs that allow authors, musicians, filmmakers, skill and app developers, and others to publish and sell content. Further, the company provides compute, storage, database, and other AWS services, as well as fulfillment, advertising, publishing, and digital content subscriptions. Additionally, it offers Amazon Prime, a membership program, which provides free shipping of various items; access to streaming of movies and TV episodes; and other services. The company also operates in the food delivery business in Bengaluru, India. It serves consumers, sellers, developers, enterprises, and content creators. The company also has utility-scale solar projects in China, Australia, and the United States. Amazon.com, Inc. was founded in 1994 and is headquartered in Seattle, Washington.',
        'NASDAQ',
        'USA',
        'Consumer Cyclical',
        '410 Terry Avenue North, Seattle, WA, United States, 98109-5210',
        'Internet Retail',
        'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/K_Kpf7ifutaHJcdAmLpgTCLuJBg=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/QABTQJDHDRCLRL4JPX7HVFWZ4A.JPG'
    ),
    new CompanyDetail(
        'c8',
        'NVDA',
        'Common Stock',
        'NVIDIA Corporation',
        'NVIDIA Corporation operates as a visual computing company worldwide. It operates in two segments, GPU and Tegra Processor. The GPU segment offers processors, which include GeForce for PC gaming and mainstream PCs; GeForce NOW for cloud-based gaming; Quadro for design professionals working in computer-aided design, video editing, special effects, and other creative applications; Tesla for artificial intelligence (AI) utilizing deep learning, accelerated computing, and general purpose computing; GRID, which provides power of NVIDIA graphics through the cloud and datacenters; DGX for AI scientists, researchers, and developers; and EGX for accelerated AI computing at the edge. The Tegra Processor segment provides processors comprising SHIELD devices and services designed to harness the power of mobile-cloud to revolutionize home entertainment, AI, and gaming; AGX, a power-efficient AI computing platform for intelligent edge devices; DRIVE AGX for self-driving vehicles; Clara AGX for medical instruments; and Jetson AGX for robotics and other embedded use. The company\'s products are used in gaming, professional visualization, datacenter, and automotive markets. NVIDIA Corporation sells its products to original equipment manufacturers, original device manufacturers, system builders, add-in board manufacturers, retailers/distributors, Internet and cloud service providers, automotive manufacturers and tier-1 automotive suppliers, mapping companies, start-ups, and other ecosystem participants. NVIDIA Corporation was founded in 1993 and is headquartered in Santa Clara, California.',
        'NASDAQ',
        'USA',
        'Technology',
        '2788 San Tomas Expressway, Santa Clara, CA, United States, 95051',
        'Semiconductors',
        'https://cdn.pixabay.com/photo/2016/09/24/23/14/nvidia-1692796_1280.jpg'
    ),
    new CompanyDetail(
        'c9',
        'NFLX',
        'Common Stock',
        'Netflix, Inc',
        'Netflix, Inc. provides subscription streaming entertainment service. It offers TV series, documentaries, and feature films across various genres and languages. The company provides members the ability to receive streaming content through a host of Internet-connected screens, including TVs, digital video players, television set-top boxes, and mobile devices. It also provides DVDs-by-mail membership services. The company has approximately 167 million paid members in 190 countries. Netflix, Inc. was founded in 1997 and is headquartered in Los Gatos, California.',
        'NASDAQ',
        'USA',
        'Communication Services',
        '100 Winchester Circle, Los Gatos, CA, United States, 95032',
        'Entertainment',
        'https://cdn.pixabay.com/photo/2020/09/14/17/45/tv-5571609_1280.jpg'
    ),
    new CompanyDetail(
        'c10',
        'ZM',
        'Common Stock',
        'Zoom Video Communications, Inc',
        'Zoom Video Communications, Inc. provides a video-first communications platform in the Americas, the Asia Pacific, Europe, the Middle East, and Africa. The company\'s product portfolio includes Zoom Meetings that offers HD video, voice, chat, and content sharing through mobile devices, desktops, laptops, telephones, and conference room systems; Zoom Phone, an enterprise cloud phone system that provides secure call routing, call queuing, call detail reports, call recording, call quality monitoring, voicemail, switch to video, and other services, as well as inbound and outbound calling services; and Zoom Chat enables sharing messages, images, audio files, and content in desktop, laptop, tablet, and mobile devices for meeting and phone customers. It also offers Zoom Rooms, a software-based conference room system; Zoom Conference Room Connector, a gateway for SIP/H.323 endpoints to join Zoom meetings; and Zoom Video Webinars enables users to conduct large-scale online events, such as town hall meetings, workshops, and marketing presentations. In addition, the company provides Zoom for Developers that allows developers to integrate its video, phone, chat, and content sharing into other applications, as well as manages Zoom accounts; and Zoom App Marketplace enhance developers to publish their apps. It serves education, entertainment/media, enterprise infrastructure, finance, government, healthcare, manufacturing, non-profit/not for profit and social impact, retail/consumer products, and software/Internet industries, as well as individuals. Zoom Video Communications, Inc. has partnership with ServiceNow. The company was formerly known as Zoom Communications, Inc. and changed its name to Zoom Video Communications, Inc. in May 2012. Zoom Video Communications, Inc. was founded in 2011 and is headquartered in San Jose, California.',
        'NASDAQ',
        'USA',
        'Communication Services',
        '55 Almaden Boulevard, San Jose, CA, United States, 95113',
        'Telecom Services',
        'https://www.gizchina.com/wp-content/uploads/images/2020/08/zoom-hq.jpg'
    ),
];

export const StockByTimeList = [
    new StockPriceByTime(
        's1',
        'c1',
        107.0600,
        107.0600,
        107.0600,
        107.0600,
        342,
        '2020-10-28 19:40:00'
    ),
    new StockPriceByTime(
        's2',
        'c1',
        107.1000,
        107.1000,
        107.1000,
        107.1000,
        100,
        '2020-10-28 19:10:00'
    ),
    new StockPriceByTime(
        's3',
        'c1',
        107.0600,
        107.0600,
        107.0600,
        107.0600,
        101,
        '2020-10-28 19:00:00'
    ),
    new StockPriceByTime(
        's4',
        'c1',
        107.0401,
        107.0401,
        107.0401,
        107.0401,
        380,
        '2020-10-28 18:50:00'
    ),
    new StockPriceByTime(
        's5',
        'c1',
        107.1900,
        107.1900,
        107.1900,
        107.1900,
        100,
        '2020-10-28 18:45:00'
    ),
    new StockPriceByTime(
        's6',
        'c1',
        107.1000,
        107.1000,
        107.1000,
        107.1000,
        102,
        '2020-10-28 18:25:00'
    ),
];

export const StockPriceByDateList = [
    new StockPriceByDate(
        'st1',
        'c1',
        107.2500,
        109.6400,
        106.5500,
        108.9100,
        6760241,
        108.9100,
        '2020-11-02'
    ),
    new StockPriceByDate(
        'st2',
        'c1',
        108.6600,
        109.7300,
        105.9200,
        106.6500,
        9427321,
        106.6500,
        '2020-10-30'
    ),
    new StockPriceByDate(
        'st3',
        'c1',
        112.1500,
        112.2200,
        110.0300,
        110.5600,
        5936106,
        110.5600,
        '2020-10-29'
    ),
    new StockPriceByDate(
        'st4',
        'c1',
        114.4500,
        114.9000,
        111.8400,
        112.2200,
        7203366,
        112.2200,
        '2020-10-28'
    ),
    new StockPriceByDate(
        'st5',
        'c1',
        116.5000,
        116.6200,
        115.5300,
        116.0000,
        3893362,
        116.0000,
        '2020-10-27'
    ),
    new StockPriceByDate(
        'st6',
        'c1',
        115.0000,
        116.0600,
        112.9800,
        115.7600,
        7858158,
        115.7600,
        '2020-10-26'
    ),
    new StockPriceByDate(
        'st7',
        'c2',
        109.1100,
        110.6800,
        107.3200,
        108.7700,
        122030622,
        108.7700,
        '2020-11-02'
    ),
    new StockPriceByDate(
        'st8',
        'c2',
        111.0600,
        111.9900,
        107.7200,
        108.8600,
        190573476,
        108.8600,
        '2020-10-30'
    ),
    new StockPriceByDate(
        'st9',
        'c2',
        112.3700,
        116.9300,
        112.2000,
        115.3200,
        146129173,
        115.3200,
        '2020-10-29'
    ),
    new StockPriceByDate(
        'st10',
        'c2',
        115.0500,
        115.4300,
        111.1000,
        111.2000,
        143937823,
        111.2000,
        '2020-10-28'
    ),
    new StockPriceByDate(
        'st11',
        'c2',
        115.4900,
        117.2800,
        114.5399,
        116.6000,
        92276772,
        116.6000,
        '2020-10-27'
    ),
    new StockPriceByDate(
        'st12',
        'c2',
        114.0100,
        116.5500,
        112.8800,
        115.0500,
        111850657,
        115.0500,
        '2020-10-26'
    ),
    new StockPriceByDate(
        'st13',
        'c3',
        1623.5400,
        1658.2400,
        1614.2400,
        1624.3200,
        2182125,
        1624.3200,
        '2020-11-02'
    ),new StockPriceByDate(
        'st14',
        'c3',
        1667.4400,
        1681.3150,
        1601.5700,
        1616.1100,
        4996197,
        1616.1100,
        '2020-10-30'
    ),new StockPriceByDate(
        'st15',
        'c3',
        1517.0200,
        1588.7350,
        1516.5500,
        1556.8800,
        2770343,
        1556.8800,
        '2020-10-29'
    ),
    new StockPriceByDate(
        'st16',
        'c3',
        1550.0100,
        1553.8100,
        1508.4800,
        1510.8000,
        2258675,
        1510.8000,
        '2020-10-28'
    ),new StockPriceByDate(
        'st17',
        'c3',
        1588.9319,
        1602.0000,
        1576.9900,
        1598.8800,
        1295138,
        1598.8800,
        '2020-10-27'
    ),new StockPriceByDate(
        'st18',
        'c3',
        1615.0000,
        1629.5800,
        1567.7800,
        1584.2900,
        1791317,
        1584.2900,
        '2020-10-26'
    ),
    new StockPriceByDate(
        'st19',
        'c4',
        394.0000,
        406.9799,
        392.3000,
        400.5100,
        28787485,
        400.5100,
        '2020-11-02'
    ),
    new StockPriceByDate(
        'st20',
        'c4',
        406.8954,
        407.5915,
        379.1100,
        388.0400,
        42587639,
        388.0400,
        '2020-10-30'
    ),
    new StockPriceByDate(
        'st21',
        'c4',
        409.9600,
        418.0600,
        406.4600,
        410.8300,
        22655308,
        410.8300,
        '2020-10-29'
    ),
    new StockPriceByDate(
        'st22',
        'c4',
        416.4800,
        418.6000,
        406.0000,
        406.0200,
        25451409,
        406.0200,
        '2020-10-28'
    ),
    new StockPriceByDate(
        'st23',
        'c4',
        423.7600,
        430.5000,
        420.1000,
        424.6800,
        22686506,
        424.6800,
        '2020-10-27'
    ),
    new StockPriceByDate(
        'st24',
        'c4',
        411.6300,
        425.7600,
        410.0000,
        420.2800,
        28239161,
        424.6800,
        '2020-10-26'
    ),
    new StockPriceByDate(
        'st25',
        'c5',
        204.2900,
        205.2800,
        200.1200,
        202.3300,
        30842163,
        202.3300,
        '2020-11-02'
    ),
    new StockPriceByDate(
        'st26',
        'c5',
        203.5000,
        204.2900,
        199.6200,
        202.4700,
        36980111,
        202.4700,
        '2020-10-30'
    ),
    new StockPriceByDate(
        'st27',
        'c5',
        204.0700,
        207.3600,
        203.3700,
        204.7200,
        31432563,
        204.7200,
        '2020-10-29'
    ),
    new StockPriceByDate(
        'st28',
        'c5',
        207.6700,
        208.8400,
        202.1000,
        202.6800,
        51195593,
        202.6800,
        '2020-10-28'
    ),
    new StockPriceByDate(
        'st29',
        'c5',
        211.5900,
        214.6700,
        210.3290,
        213.2500,
        36700325,
        213.2500,
        '2020-10-27'
    ),
    new StockPriceByDate(
        'st30',
        'c5',
        213.8500,
        216.3399,
        208.1000,
        210.0800,
        37111561,
        210.0800,
        '2020-10-26'
    ),
    new StockPriceByDate(
        'st31',
        'c6',
        264.6000,
        270.4700,
        257.3400,
        261.3600,
        27165679,
        261.3600,
        '2020-11-02'
    ),
    new StockPriceByDate(
        'st32',
        'c6',
        274.5000,
        276.7000,
        259.1000,
        263.1100,
        47299002,
        263.1100,
        '2020-10-30'
    ),
    new StockPriceByDate(
        'st33',
        'c6',
        276.5500,
        283.6000,
        273.7800,
        280.8300,
        32368118,
        280.8300,
        '2020-10-29'
    ),
    new StockPriceByDate(
        'st34',
        'c6',
        278.7900,
        278.7900,
        267.2600,
        267.6700,
        23121808,
        267.6700,
        '2020-10-28'
    ),
    new StockPriceByDate(
        'st35',
        'c6',
        278.7600,
        284.5100,
        276.3100,
        283.2900,
        16287249,
        283.2900,
        '2020-10-27'
    ),
    new StockPriceByDate(
        'st36',
        'c6',
        283.1600,
        285.2300,
        274.2600,
        277.1100,
        21322925,
        277.1100,
        '2020-10-26'
    ),
    new StockPriceByDate(
        'st37',
        'c7',
        3061.7400,
        3079.7050,
        2950.1200,
        3004.4800,
        7257350,
        3004.4800,
        '2020-11-02'
    ),
    new StockPriceByDate(
        'st38',
        'c7',
        3157.7500,
        3167.0040,
        3019.0000,
        3036.1500,
        8396081,
        3036.1500,
        '2020-10-30'
    ),
    new StockPriceByDate(
        'st39',
        'c7',
        3201.2700,
        3257.2500,
        3164.0000,
        3211.0100,
        6596529,
        3211.0100,
        '2020-10-29'
    ),
    new StockPriceByDate(
        'st40',
        'c7',
        3249.3000,
        3264.0200,
        3162.4700,
        3162.7800,
        5588330,
        3162.7800,
        '2020-10-28'
    ),
    new StockPriceByDate(
        'st41',
        'c7',
        3224.9400,
        3291.6600,
        3211.3000,
        3286.3300,
        4291047,
        3286.3300,
        '2020-10-27'
    ),
    new StockPriceByDate(
        'st42',
        'c7',
        3198.7400,
        3282.9799,
        3153.3000,
        3207.0400,
        5901151,
        3207.0400,
        '2020-10-26'
    ),
];

export const ForexRateList = [
    new ForexRate(
        'f1',
        'EUR',
        'USD',
        1.1685,
        1.1688,
        1.1685,
        1.1687,
        '2020-10-30 03:10:00'
        ),
    new ForexRate(
        'f2',
        'EUR',
        'USD',
        1.1686,
        1.1687,
        1.1683,
        1.1687,
        '2020-10-30 03:05:00'
    ),
    new ForexRate(
        'f3',
        'EUR',
        'USD',
        1.1684,
        1.1687,
        1.1683,
        1.1686,
        '2020-10-30 03:00:00'
    ),
    new ForexRate(
        'f4',
        'EUR',
        'USD',
        1.1685,
        1.1686,
        1.1682,
        1.1685,
        '2020-10-30 02:55:00'
    ),
    new ForexRate(
        'f5',
        'EUR',
        'USD',
        1.1687,
        1.1687,
        1.1683,
        1.1686,
        '2020-10-30 02:50:00'
    ),
    new ForexRate(
        'f6',
        'EUR',
        'USD',
        1.1688,
        1.1689,
        1.1685,
        1.1687,
        '2020-10-30 02:45:00'
    ),
];

export const CurrencyRateList = [
    new CurrencyRate(
        'cr1',
        'United States Dollar',
        'USD',
        'Japanese Yen',
        'JPY',
        104.45600000,
        '2020-10-30 03:08:01'
        )
];

export const BitCoinRateList = [
    new BitcoinRate(
        'b1',
        'Bitcoin',
        'BTC',
        'Chinese Yuan',
        'CNY',
        90275.01682800,
        90274.94992000,
        90275.01682800,
    )
];

export const BitCoinScoreList = [
    new BitcoinScore(
        'bs1',
        'BTC',
        'Bitcoin',
        'Attractive',
        885,
        836,
        827,
    ),
    new BitcoinScore(
        'bs2',
        'ETH',
        'Ethereum',
        'Superb',
        966,
        962,
        846,
    ),
    new BitcoinScore(
        'bs3',
        'XRP',
        'XRP',
        'Attractive',
        849,
        864,
        784,
    ),
    new BitcoinScore(
        'bs4',
        'BCH',
        'Bitcoin Cash',
        'Attractive',
        826,
        785,
        805,
    ),
    new BitcoinScore(
        'bs5',
        'LTC',
        'Litecoin',
        'Basic',
        714,
        567,
        804,
    )
];


export const NewsList = [
    new News(
        'n1',
        'TechCrunch',
        'Alex Wilhelm',
        'The Trump Economy',
        'Hello and welcome back to Equity, TechCrunch’s venture capital-focused podcast (now on Twitter!), where we unpack the numbers behind the headlines. A few notes before we get into this. One, we have a bonus episode coming this Saturday focused on this week’s e…',
        'http://techcrunch.com/2020/10/29/tech-optimism-in-this-economy/',
        'https://techcrunch.com/wp-content/uploads/2019/12/equity-podcast-2019-phone-1-2-e1576159337785.jpg?w=300',
        '2020-10-29T18:57:34Z'
        ),
    new News(
        'n2',
        'New York Times',
        'David Leonhardt',
        'Tech optimism…in this economy?',
        '3. Trump deserves some credit. Josh Barro of New York magazine has argued that Trumps overall economic record is problematic, partly because his tax cuts were so skewed to the rich but also that Trum… [+871 chars]',
        'https://www.nytimes.com/2020/10/26/briefing/coronavirus-chile-world-series.html',
        'https://static01.nyt.com/images/2020/10/26/us/politics/26AMBRIEFING-promo/26AMBRIEFING-promo-facebookJumbo-v3.jpg',
        '2020-10-26T10:38:18Z'
    ),
    new News(
        'n3',
        'New York Times',
        'Alex Wilhelm',
        'Trump’s Manufacturing Promises Disappoint as Economy Sours',
        'Last month, Mr. Trump invited Steve Burns, the chief executive of Lordstown Motors, to the White House to herald the companys new electric pickup truck. The visit was intended to celebrate Mr. Trumps… [+1991 chars]',
        'https://www.nytimes.com/2020/10/26/us/politics/trump-manufacturing-economy.html',
        'https://static01.nyt.com/images/2020/10/23/us/00dc-trumpcompanies01/00dc-trumpcompanies01-facebookJumbo.jpg',
        '2020-10-26T19:28:26Z'
    ),
    new News(
        'n4',
        'New York Times',
        'Jim Tankersley and Thomas Kaplan',
        'Would Biden’s Tax Plan Help or Hurt a Weak Economy?',
        'In an interview, Mr. Pomerleau said the drag was small from the proposals because Mr. Biden was largely taxing savings of high earners, which are not major drivers of economic growth given those Amer… [+2032 chars]',
        'https://www.nytimes.com/2020/10/18/business/biden-tax-plan-economy.html',
        'https://static01.nyt.com/images/2020/10/18/us/politics/18biden-tax-1/18biden-tax-1-facebookJumbo.jpg',
        '2020-10-18T09:00:11Z'
    ),
    new News(
        'n5',
        'New York Times',
        'Keith Bradsher',
        'With Covid-19 Under Control, China’s Economy Surges Ahead',
        'Xi Jinping, Chinas top leader, has increasingly emphasized self-reliance, a strategy that calls for expanding service industries and innovation in manufacturing, as well as enabling residents to spen… [+587 chars]',
        'https://www.nytimes.com/2020/10/18/business/china-economy-covid.html',
        'https://static01.nyt.com/images/2020/10/19/business/00JPChina-Econ1-print/00China-Econ-facebookJumbo.jpg',
        '2020-10-19T02:01:00Z'
    )
];
