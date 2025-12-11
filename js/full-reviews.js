

// Init featured reviews Swiper
const featured = new Swiper(".featured-swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 1.2 },
  },
})

const additionalReviews = [
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NielsHome",
    username: "NielsHome",
    country: "Denmark",
    flag: "https://flagcdn.com/24x18/dk.png",
    timeAgo: "5 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad built a stunning minimalist furniture store that embodies our Scandinavian design philosophy perfectly. The user experience is clean and intuitive, and the inventory management handles our complex product variations effortlessly.",
    gigDetails: "$520 • 11 days • Furniture Store Build",
    hasResponse: true,
    response: "Thank you Niels! Your furniture designs are truly inspiring. It was a pleasure bringing them online!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SiobhanOrganic",
    username: "SiobhanOrganic",
    country: "Ireland",
    flag: "https://flagcdn.com/24x18/ie.png",
    timeAgo: "5 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Exceptional work on our organic food marketplace! The multi-vendor system runs flawlessly and customers absolutely love the subscription box feature. Our search visibility has improved dramatically thanks to the SEO optimization.",
    gigDetails: "$680 • 14 days • Multi-vendor Marketplace",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DimitrisClay",
    username: "DimitrisClay",
    country: "Greece",
    flag: "https://flagcdn.com/24x18/gr.png",
    timeAgo: "6 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad crafted a beautiful store for our traditional pottery. The cultural storytelling elements and product customization features resonate wonderfully with buyers. International shipping integration has opened exciting new markets!",
    gigDetails: "$360 • 9 days • Cultural Artisan Store",
    hasResponse: true,
    response: "Your pottery is absolutely gorgeous Dimitris! Honored to help share Greek culture with the world.",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=KasiaAmber",
    username: "KasiaAmber",
    country: "Poland",
    flag: "https://flagcdn.com/24x18/pl.png",
    timeAgo: "6 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Outstanding execution on our amber jewelry store! The authentication system and certificate generation give customers complete confidence in our genuine Baltic amber. Professional, elegant design throughout!",
    gigDetails: "$440 • 10 days • Jewelry Authentication Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TomasCrystal",
    username: "TomasCrystal",
    country: "Czech Republic",
    flag: "https://flagcdn.com/24x18/cz.png",
    timeAgo: "7 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Rafad delivered an exceptional crystal and glassware store featuring stunning product galleries with 360-degree views. The B2B wholesale section has completely streamlined our dealer relationships. Brilliant work!",
    gigDetails: "$590 • 12 days • Crystal Gallery + B2B Portal",
    hasResponse: true,
    response:
      "Your crystal craftsmanship is absolutely stunning Tomas! Thank you for the opportunity to showcase such artistry.",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BalazVino",
    username: "BalazVino",
    country: "Hungary",
    flag: "https://flagcdn.com/24x18/hu.png",
    timeAgo: "7 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Perfect wine e-commerce solution! The vintage tracking, cellar management, and age verification work flawlessly. Customers love the tasting notes integration and wine pairing suggestions. Exactly what we needed!",
    gigDetails: "$650 • 13 days • Wine E-commerce + Features",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JoaoTiles",
    username: "JoaoTiles",
    country: "Portugal",
    flag: "https://flagcdn.com/24x18/pt.png",
    timeAgo: "8 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad created a magnificent store for our traditional azulejos. The pattern visualization tool and custom design service integration have revolutionized how customers interact with our products. Truly impressed!",
    gigDetails: "$480 • 11 days • Tile Design Studio",
    hasResponse: true,
    response:
      "Your azulejos are genuine works of art Joao! Happy to help preserve and share this beautiful Portuguese tradition.",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MaxAlpine",
    username: "MaxAlpine",
    country: "Austria",
    flag: "https://flagcdn.com/24x18/at.png",
    timeAgo: "8 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Exceptional alpine sports equipment store! The gear compatibility checker and mountain weather integration provide incredible value. The seasonal inventory management handles our complex product cycles perfectly!",
    gigDetails: "$720 • 15 days • Alpine Sports Store + Weather API",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnjaBees",
    username: "AnjaBees",
    country: "Slovenia",
    flag: "https://flagcdn.com/24x18/si.png",
    timeAgo: "9 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful organic honey store with engaging educational content about beekeeping and sustainability. The subscription service and bee adoption program integration have created an incredibly loyal customer community!",
    gigDetails: "$380 • 8 days • Organic Honey Store + Subscriptions",
    hasResponse: true,
    response:
      "Your commitment to sustainable beekeeping is truly inspiring Anja! Happy to help spread awareness about bee conservation.",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MartinBlock",
    username: "MartinBlock",
    country: "Estonia",
    flag: "https://flagcdn.com/24x18/ee.png",
    timeAgo: "9 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Cutting-edge digital services marketplace with seamless blockchain integration for secure transactions. The smart contract system and reputation scoring algorithm work flawlessly. Truly innovative solution!",
    gigDetails: "$850 • 18 days • Blockchain Marketplace",
    hasResponse: true,
    response:
      "Your vision for blockchain integration was ahead of its time Martin! Exciting to work on such innovative projects.",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=WeiMingTech",
    username: "WeiMingTech",
    country: "Singapore",
    flag: "https://flagcdn.com/24x18/sg.png",
    timeAgo: "9 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Flawless execution! Rafad built our electronics store with advanced filtering and comparison features that customers love. The warehouse system integration is seamless and saves us hours every day.",
    gigDetails: "$890 • 16 days • Electronics Store + Inventory",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AhmedPrestige",
    username: "AhmedPrestige",
    country: "UAE",
    flag: "https://flagcdn.com/24x18/ae.png",
    timeAgo: "10 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "The luxury watch store Rafad created is absolutely stunning. VIP customer portal, authentication certificates, and white-glove shipping integration all work perfectly. Our high-end clients are thoroughly impressed!",
    gigDetails: "$1200 • 20 days • Luxury Watch Store",
    hasResponse: true,
    response: "It was an honor to work on such a prestigious brand Ahmed. Thank you for your trust!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SomchaiKitchen",
    username: "SomchaiKitchen",
    country: "Thailand",
    flag: "https://flagcdn.com/24x18/th.png",
    timeAgo: "10 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Our Thai restaurant's online ordering system is fantastic! Menu customization, spice level options, and delivery integration work smoothly. Customers love the easy ordering experience!",
    gigDetails: "$280 • 5 days • Restaurant Ordering System",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HarperTrails",
    username: "HarperTrails",
    country: "New Zealand",
    flag: "https://flagcdn.com/24x18/nz.png",
    timeAgo: "10 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Amazing outdoor adventure gear store! The rental booking system and trail finder integration are unique features our customers absolutely love. Sales have increased dramatically!",
    gigDetails: "$520 • 10 days • Adventure Gear + Rentals",
    hasResponse: true,
    response: "New Zealand's landscapes are incredible Harper! Glad to help adventurers explore them safely.",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ValeriaBeans",
    username: "ValeriaBeans",
    country: "Colombia",
    flag: "https://flagcdn.com/24x18/co.png",
    timeAgo: "11 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad created the perfect platform for our specialty coffee brand. Farm-to-cup traceability, subscription options, and brewing guides make our store special and unique in the market!",
    gigDetails: "$420 • 9 days • Coffee Subscription Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=OscarMinimal",
    username: "OscarMinimal",
    country: "Sweden",
    flag: "https://flagcdn.com/24x18/se.png",
    timeAgo: "11 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Clean, minimalist furniture store that matches our brand perfectly. The AR room preview feature has been a complete game-changer for our conversion rates. Exceptional work!",
    gigDetails: "$680 • 14 days • Furniture Store + AR Preview",
    hasResponse: true,
    response: "Scandinavian design is always a pleasure to work with Oscar. Thank you!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=FatimaWeave",
    username: "FatimaWeave",
    country: "Morocco",
    flag: "https://flagcdn.com/24x18/ma.png",
    timeAgo: "11 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful store for our handwoven Berber rugs. The storytelling elements about our artisans and custom sizing tool are excellent additions that customers appreciate deeply!",
    gigDetails: "$340 • 7 days • Artisan Rug Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlastairSpirits",
    username: "AlastairSpirits",
    country: "UK",
    flag: "https://flagcdn.com/24x18/gb.png",
    timeAgo: "12 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Outstanding whisky e-commerce with age verification, tasting notes database, and collector features. The rare bottles auction system is fantastic and our collectors love it!",
    gigDetails: "$780 • 15 days • Whisky Store + Auctions",
    hasResponse: true,
    response: "Working on whisky e-commerce was a treat Alastair! Cheers to your continued success!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RaviSpice",
    username: "RaviSpice",
    country: "India",
    flag: "https://flagcdn.com/24x18/in.png",
    timeAgo: "12 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Our spice marketplace is thriving! Recipe integration, spice pairing suggestions, and freshness guarantees have set us apart from competitors. Excellent execution!",
    gigDetails: "$390 • 8 days • Spice Marketplace",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=IsabellaVino",
    username: "IsabellaVino",
    country: "Chile",
    flag: "https://flagcdn.com/24x18/cl.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Excellent wine store with vineyard virtual tours and wine club subscriptions. The harvest tracking feature is unique and our customers love following their favorite vintages!",
    gigDetails: "$560 • 12 days • Winery E-commerce",
    hasResponse: true,
    response: "Chilean wines deserve a beautiful showcase Isabella. Happy to deliver!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ThanhLacquer",
    username: "ThanhLacquer",
    country: "Vietnam",
    flag: "https://flagcdn.com/24x18/vn.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad built an elegant gallery for our traditional lacquerware art. The virtual exhibition feature and artist profiles add wonderful depth that collectors appreciate!",
    gigDetails: "$450 • 10 days • Art Gallery Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=EmreBazaar",
    username: "EmreBazaar",
    country: "Turkey",
    flag: "https://flagcdn.com/24x18/tr.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Our Grand Bazaar-style marketplace is beautiful! Multi-vendor system, bargaining feature simulation, and cultural storytelling are perfect for our diverse products!",
    gigDetails: "$720 • 14 days • Marketplace Platform",
    hasResponse: true,
    response: "Turkish craftsmanship is legendary Emre. Honored to showcase it online!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AminHeritage",
    username: "AminHeritage",
    country: "Egypt",
    flag: "https://flagcdn.com/24x18/eg.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Stunning replica artifact store with authentication certificates and historical context for each piece. The educational and commercial balance is absolutely perfect!",
    gigDetails: "$480 • 11 days • Artifact Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LuzAlpaca",
    username: "LuzAlpaca",
    country: "Peru",
    flag: "https://flagcdn.com/24x18/pe.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful store for our alpaca textiles! The artisan profiles, fair trade certifications, and sizing guides are exactly what we needed to connect with conscious consumers!",
    gigDetails: "$380 • 8 days • Textile E-commerce",
    hasResponse: true,
    response: "Peruvian textiles are incredible Luz. Thank you for sharing this craft with the world!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=OleSeafood",
    username: "OleSeafood",
    country: "Norway",
    flag: "https://flagcdn.com/24x18/no.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Our premium seafood store is performing excellently. Cold chain tracking, freshness guarantees, and subscription boxes work flawlessly. Customer satisfaction is at an all-time high!",
    gigDetails: "$620 • 13 days • Seafood E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=WambuiRoast",
    username: "WambuiRoast",
    country: "Kenya",
    flag: "https://flagcdn.com/24x18/ke.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad created an amazing platform for our single-origin coffee. Farm stories, roast date tracking, and brewing tutorials are wonderful additions our customers appreciate!",
    gigDetails: "$340 • 7 days • Coffee Direct Store",
    hasResponse: true,
    response: "Kenyan coffee is exceptional Wambui! Happy to help connect farmers directly with coffee lovers.",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GudrunKnit",
    username: "GudrunKnit",
    country: "Iceland",
    flag: "https://flagcdn.com/24x18/is.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Perfect store for our traditional lopapeysa sweaters. The customization tool for patterns and size guide with real measurements are excellent features customers love!",
    gigDetails: "$420 • 9 days • Wool Products Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusRum",
    username: "MarcusRum",
    country: "Jamaica",
    flag: "https://flagcdn.com/24x18/jm.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Our rum distillery store is fantastic! Age verification, cocktail recipes, and distillery tour booking integration work seamlessly. The Caribbean vibe comes through perfectly!",
    gigDetails: "$480 • 10 days • Spirits E-commerce",
    hasResponse: true,
    response: "Caribbean rum culture is vibrant Marcus! Great working on this exciting project.",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LigitaLinen",
    username: "LigitaLinen",
    country: "Latvia",
    flag: "https://flagcdn.com/24x18/lv.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Beautiful linen products store with fabric care guides and custom sizing. The traditional pattern catalog adds a wonderful cultural touch our customers appreciate!",
    gigDetails: "$350 • 8 days • Linen Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MariaArtisan",
    username: "MariaArtisan",
    country: "Philippines",
    flag: "https://flagcdn.com/24x18/ph.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad built a wonderful marketplace for Filipino artisans. The community features and artisan stories make it so much more than just a store. Truly meaningful work!",
    gigDetails: "$520 • 11 days • Artisan Marketplace",
    hasResponse: true,
    response: "Filipino craftsmanship deserves global recognition Maria. Thank you for this opportunity!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AndreiBees",
    username: "AndreiBees",
    country: "Romania",
    flag: "https://flagcdn.com/24x18/ro.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Our organic honey store is perfect. Bee farm stories, pollen analysis certificates, and seasonal availability tracking are great features that build customer trust!",
    gigDetails: "$320 • 7 days • Honey E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SantiagoLeather",
    username: "SantiagoLeather",
    country: "Argentina",
    flag: "https://flagcdn.com/24x18/ar.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Stunning leather goods store! The product customization tool, monogramming options, and care guides are exactly what our premium buyers expect. Exceptional quality!",
    gigDetails: "$580 • 12 days • Leather Goods Store",
    hasResponse: true,
    response: "Argentinian leather quality is unmatched Santiago. Proud to showcase it!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=IvanOlive",
    username: "IvanOlive",
    country: "Croatia",
    flag: "https://flagcdn.com/24x18/hr.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Perfect olive oil store with harvest tracking, tasting notes, and pairing suggestions. The subscription model has been incredibly successful with our loyal customers!",
    gigDetails: "$380 • 8 days • Olive Oil E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ElinaRose",
    username: "ElinaRose",
    country: "Bulgaria",
    flag: "https://flagcdn.com/24x18/bg.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad created a beautiful store for our rose products. The ingredient transparency and production process showcases build deep trust with our discerning customers!",
    gigDetails: "$340 • 7 days • Natural Beauty Store",
    hasResponse: true,
    response: "Bulgarian rose products are legendary Elina. Happy to help share them globally!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JosephLace",
    username: "JosephLace",
    country: "Malta",
    flag: "https://flagcdn.com/24x18/mt.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Our traditional lace and filigree store is elegant and highly functional. The artisan profiles and heritage storytelling are wonderful additions customers love!",
    gigDetails: "$420 • 9 days • Heritage Crafts Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JonasAmber",
    username: "JonasAmber",
    country: "Lithuania",
    flag: "https://flagcdn.com/24x18/lt.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Excellent Baltic amber jewelry store! Authentication system, inclusion catalogs, and custom design requests work perfectly. Our collectors are thoroughly impressed!",
    gigDetails: "$480 • 10 days • Amber Jewelry Store",
    hasResponse: true,
    response: "Baltic amber has millions of years of history Jonas. Honored to showcase it!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AisyahBatik",
    username: "AisyahBatik",
    country: "Malaysia",
    flag: "https://flagcdn.com/24x18/my.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful batik fabric store with pattern meanings explained and custom fabric ordering. The cultural education content resonates deeply with our customers worldwide!",
    gigDetails: "$360 • 8 days • Batik Fabric Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BudiWood",
    username: "BudiWood",
    country: "Indonesia",
    flag: "https://flagcdn.com/24x18/id.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad built an impressive furniture store with 3D product views and sustainability certifications. The custom order system handles our most complex requests beautifully!",
    gigDetails: "$720 • 15 days • Furniture E-commerce",
    hasResponse: true,
    response: "Indonesian craftsmanship is world-renowned Budi. Thank you for the collaboration!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AndreasOlive",
    username: "AndreasOlive",
    country: "Cyprus",
    flag: "https://flagcdn.com/24x18/cy.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Our family olive farm store is perfect. Generation stories, harvest updates, and oil tasting subscriptions create genuine customer connections that last!",
    gigDetails: "$340 • 7 days • Farm Direct Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MartinCuero",
    username: "MartinCuero",
    country: "Uruguay",
    flag: "https://flagcdn.com/24x18/uy.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Stunning leather accessories store with customization and monogramming. The quality guarantee and care service booking are excellent features customers appreciate!",
    gigDetails: "$460 • 10 days • Leather Accessories",
    hasResponse: true,
    response: "Uruguayan leather craftsmanship is exceptional Martin. Great working together!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChiomaStyle",
    username: "ChiomaStyle",
    country: "Nigeria",
    flag: "https://flagcdn.com/24x18/ng.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Amazing African fashion store! The fabric catalog, custom tailoring requests, and occasion guides are perfect for our diverse and style-conscious customers!",
    gigDetails: "$520 • 11 days • Fashion E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MeiLingTea",
    username: "MeiLingTea",
    country: "Taiwan",
    flag: "https://flagcdn.com/24x18/tw.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad created the perfect tea store with harvest tracking, brewing guides, and teaware pairing. Our subscription tea club has become incredibly popular!",
    gigDetails: "$420 • 9 days • Tea E-commerce",
    hasResponse: true,
    response: "Taiwanese oolong teas are exceptional MeiLing. Honored to help share the culture!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PeterGlass",
    username: "PeterGlass",
    country: "Slovakia",
    flag: "https://flagcdn.com/24x18/sk.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful glass art store with custom commission system and artist portfolios. The packaging tracking for fragile items works excellently and protects our pieces!",
    gigDetails: "$480 • 10 days • Glass Art Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MilicaBees",
    username: "MilicaBees",
    country: "Serbia",
    flag: "https://flagcdn.com/24x18/rs.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Our artisan honey store is thriving! The bee-friendly practices showcase and seasonal variety subscriptions have built an incredibly loyal customer base!",
    gigDetails: "$320 • 7 days • Honey E-commerce",
    hasResponse: true,
    response: "Serbian beekeeping traditions are wonderful Milica. Happy to support sustainable practices!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PabloFresh",
    username: "PabloFresh",
    country: "Costa Rica",
    flag: "https://flagcdn.com/24x18/cr.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad built an amazing coffee store with farm virtual tours and sustainability certifications. The freshness tracking is a unique feature our customers love!",
    gigDetails: "$380 • 8 days • Coffee Direct Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=YohannesWeave",
    username: "YohannesWeave",
    country: "Ethiopia",
    flag: "https://flagcdn.com/24x18/et.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful traditional textile store! The weaving technique explanations and artisan community features make it so much more than just shopping. Meaningful work!",
    gigDetails: "$420 • 9 days • Traditional Textiles",
    hasResponse: true,
    response: "Ethiopian textile heritage is rich and beautiful Yohannes. Thank you for sharing it!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RosaMaya",
    username: "RosaMaya",
    country: "Guatemala",
    flag: "https://flagcdn.com/24x18/gt.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Wonderful Mayan crafts marketplace with artisan cooperatives featured. The fair trade certifications and cultural context add real value for conscious buyers!",
    gigDetails: "$460 • 10 days • Crafts Marketplace",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BatukhanSoft",
    username: "BatukhanSoft",
    country: "Mongolia",
    flag: "https://flagcdn.com/24x18/mn.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Luxurious cashmere store with herder stories and quality grading explanations. The care guides and repair services booking are fantastic additions customers appreciate!",
    gigDetails: "$580 • 12 days • Cashmere E-commerce",
    hasResponse: true,
    response: "Mongolian cashmere is unparalleled Batukhan. Proud to help showcase its quality!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CarlosWeave",
    username: "CarlosWeave",
    country: "Panama",
    flag: "https://flagcdn.com/24x18/pa.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Perfect Panama hat store! The weave quality guides and custom sizing system are exactly what our discerning international customers need. Excellent work!",
    gigDetails: "$380 • 8 days • Hat E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NadiaGourmet",
    username: "NadiaGourmet",
    country: "Lebanon",
    flag: "https://flagcdn.com/24x18/lb.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad created a fantastic gourmet food store with recipe pairings and gift box builder. International shipping for fragile items works perfectly every time!",
    gigDetails: "$440 • 9 days • Gourmet Food Store",
    hasResponse: true,
    response: "Lebanese cuisine is incredible Nadia. Happy to help share it worldwide!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TshiringWeave",
    username: "TshiringWeave",
    country: "Bhutan",
    flag: "https://flagcdn.com/24x18/bt.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful store for our traditional woven textiles. The pattern meanings and artisan village features create meaningful customer connections that we treasure!",
    gigDetails: "$420 • 9 days • Heritage Textiles",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PemaArtisan",
    username: "PemaArtisan",
    country: "Nepal",
    flag: "https://flagcdn.com/24x18/np.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Our Himalayan crafts store is perfect! The fair trade focus, artisan empowerment stories, and product authenticity certificates are excellent features!",
    gigDetails: "$380 • 8 days • Himalayan Crafts",
    hasResponse: true,
    response: "Nepali artisanship is remarkable Pema. Honored to support the communities!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SamiClay",
    username: "SamiClay",
    country: "Tunisia",
    flag: "https://flagcdn.com/24x18/tn.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Rafad built a stunning pottery store with workshop booking and custom design requests. The traditional technique videos are a wonderful educational touch!",
    gigDetails: "$340 • 7 days • Pottery E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RafaelTobacco",
    username: "RafaelTobacco",
    country: "Cuba",
    flag: "https://flagcdn.com/24x18/cu.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Excellent cigar store with humidor guides and aging recommendations. The tasting notes and pairing suggestions elevate the entire shopping experience!",
    gigDetails: "$520 • 11 days • Premium Cigars Store",
    hasResponse: true,
    response: "Cuban cigar culture is legendary Rafael. Great project to work on!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LaithGold",
    username: "LaithGold",
    country: "Jordan",
    flag: "https://flagcdn.com/24x18/jo.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful Middle Eastern jewelry store with customization and heritage storytelling. The authentication and appraisal features build deep customer trust!",
    gigDetails: "$480 • 10 days • Heritage Jewelry",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RuwanGems",
    username: "RuwanGems",
    country: "Sri Lanka",
    flag: "https://flagcdn.com/24x18/lk.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Rafad created an excellent gemstone store with certification integration and mine-to-market traceability. Virtual consultations work smoothly for our global clients!",
    gigDetails: "$680 • 14 days • Gemstone E-commerce",
    hasResponse: true,
    response: "Sri Lankan gems are world-famous Ruwan. Thank you for trusting me with this!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AliCarpet",
    username: "AliCarpet",
    country: "Pakistan",
    flag: "https://flagcdn.com/24x18/pk.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Stunning carpet store with detailed knot count specifications and room visualization. The custom sizing calculator helps customers make confident purchases!",
    gigDetails: "$520 • 11 days • Carpet E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LeylaCaviar",
    username: "LeylaCaviar",
    country: "Azerbaijan",
    flag: "https://flagcdn.com/24x18/az.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Premium caviar store with freshness tracking and serving guides. The cold chain shipping integration ensures perfect delivery every single time!",
    gigDetails: "$580 • 12 days • Luxury Food Store",
    hasResponse: true,
    response: "Caspian caviar deserves premium presentation Leyla. Happy with the results!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=KhalidIncense",
    username: "KhalidIncense",
    country: "Oman",
    flag: "https://flagcdn.com/24x18/om.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful aromatics store with grade explanations and burning rituals guides. The heritage and sustainability focus deeply resonates with our customers!",
    gigDetails: "$380 • 8 days • Aromatics E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=FahadPearls",
    username: "FahadPearls",
    country: "Bahrain",
    flag: "https://flagcdn.com/24x18/bh.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Rafad created an elegant natural pearl store with diving heritage stories and authentication certificates. The custom design service is absolutely excellent!",
    gigDetails: "$620 • 13 days • Pearl Jewelry Store",
    hasResponse: true,
    response: "Bahraini pearl diving heritage is fascinating Fahad. Honored to showcase it!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NoraGallery",
    username: "NoraGallery",
    country: "Qatar",
    flag: "https://flagcdn.com/24x18/qa.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Stunning art gallery platform with virtual exhibition tours and collector membership features. The bidding system for limited editions works absolutely perfectly!",
    gigDetails: "$780 • 16 days • Art Gallery Platform",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahScent",
    username: "SarahScent",
    country: "Kuwait",
    flag: "https://flagcdn.com/24x18/kw.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Luxurious perfume store with scent profile matching and custom blend requests. The gift packaging and personal shopping service integration is truly excellent!",
    gigDetails: "$540 • 11 days • Perfume E-commerce",
    hasResponse: true,
    response: "Arabian perfumery is an art form Sarah. Thank you for this opportunity!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AbdullahDates",
    username: "AbdullahDates",
    country: "Saudi Arabia",
    flag: "https://flagcdn.com/24x18/sa.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Perfect premium dates store with variety guides and gift box customization. The Ramadan special collections feature drives excellent seasonal sales every year!",
    gigDetails: "$420 • 9 days • Gourmet Dates Store",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaLace",
    username: "EmmaLace",
    country: "Belgium",
    flag: "https://flagcdn.com/24x18/be.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Rafad built a beautiful lace products store with pattern catalogs and custom orders. The artisan heritage storytelling adds wonderful depth customers appreciate!",
    gigDetails: "$380 • 8 days • Lace E-commerce",
    hasResponse: true,
    response: "Belgian lace craftsmanship is legendary Emma. Happy to showcase it online!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarcMoselle",
    username: "MarcMoselle",
    country: "Luxembourg",
    flag: "https://flagcdn.com/24x18/lu.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Elegant Moselle wine store with vineyard stories and tasting event booking. The wine club subscription model has been incredibly successful for our business!",
    gigDetails: "$480 • 10 days • Wine E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HansCraft",
    username: "HansCraft",
    country: "Liechtenstein",
    flag: "https://flagcdn.com/24x18/li.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful alpine crafts store with local artisan features and limited edition releases. The exclusivity strongly appeals to our discerning customer base!",
    gigDetails: "$420 • 9 days • Alpine Crafts Store",
    hasResponse: true,
    response: "Liechtenstein's intimate craft community is special Hans. Great collaboration!",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JordiSlopes",
    username: "JordiSlopes",
    country: "Andorra",
    flag: "https://flagcdn.com/24x18/ad.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Great ski equipment store with gear fitting guides and resort partnership integrations. The rental reservation system works seamlessly for our mountain visitors!",
    gigDetails: "$560 • 12 days • Ski Equipment Store",
    hasResponse: false,
  },
]

let currentlyShown = 10
let loadedReviews = 0

document.getElementById("loadMoreBtn").addEventListener("click", () => {
  const reviewsContainer = document.getElementById("reviewsContainer")
  const reviewCount = document.getElementById("reviewCount")
  const loadMoreBtn = document.getElementById("loadMoreBtn")

  // Load 5 more reviews each time
  const reviewsToLoad = Math.min(5, additionalReviews.length - loadedReviews)

  for (let i = 0; i < reviewsToLoad; i++) {
    const review = additionalReviews[loadedReviews + i]

    const reviewHTML = `
      <article class="bg-white rounded-lg p-4 shadow-md review-card">
        <div class="review-header">
          <div class="review-user-info">
            <img src="${review.avatar}" alt="avatar" class="w-12 h-12 rounded-full flex-shrink-0 bg-gray-100" />
            <div class="review-user-details">
              <div class="review-user-meta">
                <p class="font-medium">${review.username}</p>
                <img src="${review.flag}" alt="${review.country}" />
                ${review.isRepeated ? '<span class="repeated-client-badge">Repeated Client</span>' : ""}
              </div>
              <p class="text-xs text-gray-500">${review.timeAgo}</p>
              <div class="review-rating">
                ${'<i class="ri-star-fill"></i>'.repeat(review.rating)}
              </div>
            </div>
          </div>
        </div>

        <p class="text-gray-700">${review.review}</p>

        <div class="review-footer">
          <div class="text-xs text-gray-500">${review.gigDetails}</div>
          ${
            review.hasResponse
              ? `
            <div class="text-xs text-gray-500">
              <div class="font-medium text-heading">Seller's Response</div>
              <div class="mt-1">${review.response}</div>
            </div>
          `
              : `
            <div class="text-xs text-gray-500">Helpful? <a href="#" class="text-gray-700 hover:underline">Yes</a> <span class="mx-2">|</span> <a href="#" class="text-gray-700 hover:underline">No</a></div>
          `
          }
        </div>
      </article>
    `

    reviewsContainer.insertAdjacentHTML("beforeend", reviewHTML)
  }

  loadedReviews += reviewsToLoad
  currentlyShown += reviewsToLoad

  // Update counter
  reviewCount.textContent = `Showing ${currentlyShown} of 942 reviews`

  // Hide button if all additional reviews are loaded
  if (loadedReviews >= additionalReviews.length) {
    loadMoreBtn.style.display = "none"
    reviewCount.textContent = `Showing ${currentlyShown} of 942 reviews • Load more by refreshing the page`
  }
})
