const coffees = [

{
    id: "espresso",
    name: "Espresso",
    category: "espresso",
    cardImage: "images/espresso.png",
    detailImage: "images/espresso_1.jpg",
    description: "Espresso je majhen, koncentriran, sirupasti kavni napitek z bogato kremo. Izraz espresso izvira iz italijanščine in pomeni »izstisnjen«. Razmerje med fino mleto kavo in vodo je 1:2. Običajna količina napitka znaša med 25 mL in 30 mL, količina samega kofeina pa 64 mg. Napitek se postreže vroč, pogosto v majhni skodelici.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Čas ekstrakcije je nekoliko krajši od 30 sekund.",
    caffeine: 1.5,
    alternativeNames: "Un caffè (Italija), Café solo (Španija), Bica (Lizbona, Portugalska), Cimbalino (Porto, Portugalska), Café express (Francija).",
    origin: "Turin in Milan, Italija. Konec 19. in začetek 20. stoletja."
},

{
    id: "ristretto",
    name: "Ristretto",
    category: "espresso",
    cardImage: "images/ristretto.png",
    detailImage: "images/ristretto_1.jpg",
    description: "Ristretto je majhen (manjši kot espresso), koncentriran, sirupasti kavni napitek z bogato kremo. Izraz ristretto izvira iz italijanščine in pomeni »skrajšan« oz. »omejen«. Ristretto je torej »omejena« italijanska različica espressa, pripravljena z enako količino mlete kave, vendar s približno dvakrat manj vode (razmerje kava:voda je od 1:1 do 1:1,5), kar znese približno 20 mL napitka. Zaradi krajše ekstrakcije je okus slajši, bolj sirupast in intenzivnejši. Kljub slovesu in mišljenju, da je »močnejši« od espressa (višja koncentracija kot neposredna posledica manjše količine vode in enake količine kave), prav zaradi manjše količine vode vsebuje nekoliko manj kofeina kot običajen espresso (zaradi zgodnejšega padca koncentracijskega gradienta med kavo in vodo, hitrost difuzije med ekstrakcijo hitreje pade. Svoj prispevek k temu doda tudi krajši ekstrakcijski čas). Njegova »moč« torej izvira iz večje intenzivnosti okusa (večje koncentracije kofeina), ki zamaskira nekoliko nižjo količino kofeina. Količina samega kofeina znaša od 55 mg do 60 mg. Napitek se postreže vroč, pogosto v majhni skodelici.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Ekstrakcija traja okoli 20 sekund.",
    caffeine: 1,
    alternativeNames: "Café serré (Francija), Short shot/restricted shot (angleško govoreče države), Caffè corto (Italija).",
    origin: "Italija. Začetek 20. stoletja."
},

{
    id: "lungo",
    name: "Lungo",
    category: "espresso",
    cardImage: "images/lungo.png",
    detailImage: "images/lungo_1.png",
    description: "Lungo je italijanski »dolgi« espresso, pripravljen z enako količino mlete kave kot espresso, vendar s približno dvakrat do trikrat več vode (razmerje kava:voda približno 1:3 do 1:4). Izraz lungo izvira iz italijanščine in pomeni »dolg«. Po navadi je količina napitka od 50 mL do 60 mL. Zaradi daljše ekstrakcije se razvije izrazitejša grenkoba in višja vsebnost kofeina kot pri espressu (med 75 mg in 90 mg).",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Ekstrakcija traja okoli eno minuto.",
    caffeine: 1.5,
    alternativeNames: "Café allongé (Francija, Kanada), long shot (angleško govoreče države).",
    origin: "Italija. Začetek 20. stoletja."
},

{
    id: "doppio",
    name: "Doppio",
    category: "espresso",
    cardImage: "images/doppio.png",
    detailImage: "images/doppio_1.webp",
    description: "Doppio je italijanski dvojni espresso – dve porciji espressa, pripravljeni v eni skodelici, s skupno prostornino od 50 mL do 60 mL. Izraz izvira iz italijanske besede duplus, kar pomeni »dvojno«. Okus je enak običajnemu espressu, saj gre preprosto za dvojno količino istega napitka. V eni skodelici vsebuje približno 128 mg kofeina. Za razliko od lunga se pri doppiu koncentracija glede na espresso ne poveča, zato ostane intenzivnost okusa enaka. Napitek se postreže vroč, pogosto v skodelici. V večini kavarn v ZDA ob naročilu espressa dejansko dobiš doppio. Zunaj Italije je pogosta praksa priprave espressa iz doppia, saj je za espresso potrebna manjša košarica v portafiltru. Pripravi se ga tako, da se iz aparata z dvema izlivoma prestreže vsak curek posebej. Tako se dobi dve porciji espressa – en se postreže, drugi pa se običajno zavrže ali uporabi za pripravo drugega kavnega napitka.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Ekstrakcija traja okoli 30 sekund.",
    caffeine: 2.5,
    alternativeNames: "Double espresso (angleško govoreče države), espresso (pogosto v ZDA).",
    origin: "Italija. Začetek 20. stoletja."
},

{
    id: "americano",
    name: "Caffè americano",
    category: "espresso",
    cardImage: "images/americano.jpg",
    detailImage: "images/americano_1.webp",
    description: "Caffè americano je kavni napitek, pripravljen iz ene ali dveh porcij espressa, ki se mu/jima dolije vroča voda v približnem razmerju od 1:2 do 1:4. Po priljubljeni zgodbi njegov izvor sega v čas druge svetovne vojne, ko so ameriški vojaki v Italiji espresso redčili z vročo vodo, da bi bil bolj podoben filtrirani kavi, ki so je bili vajeni. Rezultat je napitek s čistejšim in bolj aromatičnim okusom, podoben filtrirani kavi. Odvisno od količine dodanega espressa ima napitek lahko od 64 mg do 128 mg kofeina. Postreže se ga vročega v večji skodelici, saj ga običajno znese od 150 mL do 240 mL. Po predlogih ameriškega predsednika Donalda Trumpa za priključitev Kanade leta 2025 so nekatere kavarne v Kanadi na svojih menijih caffè americano preimenovale v canadiano. Gre za simbolično preimenovanje, ki izraža kanadsko identiteto in predstavlja odziv na politične razprave.",
    preparation: "Pri pripravi americana se najprej s pomočjo espresso aparata pripravi espresso, nato pa se dolije vroča voda, kar je glavna razlika v primerjavi z napitkom long black.",
    caffeine: {min: 1.5, max: 2.5},
    alternativeNames: "Americano (globalno).",
    origin: "Italija (vojaki ZDA). Med letoma 1939 in 1945."
},

{
    id: "long black",
    name: "Long black",
    category: "espresso",
    cardImage: "images/long_black.jpg",
    detailImage: "images/long_black_1.jpg",
    description: "Long black je avstralski in novozelandski kavni napitek, ki sestoji iz dvojnega esspresa (doppia) in vroče vode v približnem razmerju 3:5. Z okoli 160 mL je manjši in močnejši od caffè americana, z značilno aromo ohranjene kreme na vrhu napitka. Napitek vsebuje 128 mg kofeina. Postreže pa se ga vročega v večji skodelici.",
    preparation: "Napitek long black je pripravljen ravno obratno kot caffè americano. Dvojni espresso (doppio) se namreč prelije čez vročo vodo, kar ohrani plast kreme na površini.",
    caffeine: 2.5,
    alternativeNames: "-",
    origin: "Avstralija in Nova Zelandija. 6. in 7. desetletje 20. stoletja."
},

{
    id: "red eye",
    name: "Red eye",
    category: "espresso",
    cardImage: "images/red_eye.jpg",
    detailImage: "images/red_eye_1.webp",
    description: "Red eye je ameriški kavni napitek, ki združuje filtrirano kavo in eno porcijo espressa. Ime je dobil po nočnih letih od zahodne do vzhodne obale Severne Amerike, ki so potnike tako izmučili, da so dobili rdeče oči (angl. red eyes). Ta napitek naj bi pomagal premagovati to utrujenost. Ena skodelica vsebuje 300 mL napitka s približno 160 mg kofeina. Obstajajo tudi različice red-eye-a, ki vsebujejo več espressa. Ti sta black eye (2 porciji espressa) in dead eye ali green eye (tri porcije espressa). Obstaja pa tudi različica z imenom lazy eye, ki vsebuje 1 porcijo espressa in dekofeinizirano filtrirano kavo. Napitek se postreže vroč v skodelici.",
    preparation: "Napitek red eye se pripravi tako, da se eno porcijo espressa, ki je narejen s pomočjo espresso aparata, prelije čez filtrirano kavo (drip coffe).",
    caffeine: 3,
    alternativeNames: "A shot in the dark, a depth charge, an eye opener, a sludge cup, a hammerhead, foglifter, a devil’s crowbar, an oil spill, turbo hot coffee (ZDA).",
    origin: "ZDA. Konec 20. stoletja."
},

{
    id: "crema",
    name: "Caffè crema",
    category: "espresso",
    cardImage: "images/crema.jpg",
    detailImage: "images/crema_1.png",
    description: "Caffè Crema je alpski evropski kavni napitek, pripravljen kot podaljšani espresso z razmerjem med fino mleto kavo in vodo približno 1:6 do 1:7, kar znese od 120 mL do 180 mL napitka, prekritega z debelo plastjo kreme. Priljubljen je predvsem v Švici ter alpskih obmejnih območjih. Ime izvira iz izraza, ki ga je že leta 1948 za espresso uporabljalo podjetje Gaggia (proizvajalec kavnih aparatov). Caffè crema lahko razumemo kot različico polne skodelice kave, pripravljene z espresso aparatom. Je daljši celo od lunga, a še vedno ohrani značilno plast kreme na površini. Vsebnost kofeina v napitku je od 90 mg do 120 mg. Postreže se ga vročega v skodelici.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno bolj grobo mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Čas ekstrakcije je nekoliko krajši od 30 sekund.",
    caffeine: 2,
    alternativeNames: "Kaffee Crème, Schümli (Območje Alp), cream coffee (angleško govoreče države).",
    origin: "Območje Alp (Švica, Italija). 90. desetletje 20. stoletja."
},

{
    id: "romano",
    name: "Espresso romano",
    category: "espresso",
    cardImage: "images/espresso_romano.png",
    detailImage: "images/espresso_romano_1.jpg",
    description: "Espresso Romano je espresso, postrežen z rezino limone ali zvitkom njenega olupka na robu skodelice. Njegov izvor ni povsem jasen, vendar najverjetneje ne izvira iz Rima, temveč iz italijansko-ameriške tradicije. Enako kot espresso gre za majhen koncentriran, sirupasti kavni napitek z bogato kremo. Razmerje med fino mleto kavo in vodo je 1:2. Običajna količina napitka znaša med 25 mL in 30 mL, količina samega kofeina pa 64 mg. Napitek se postreže vroč, pogosto v majhni skodelici. Eterična olja iz limonine lupine poudarijo aromo espressa in prvemu požirku dodajo svežo citrusno noto.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Čas ekstrakcije je nekoliko krajši od 30 sekund. Na koncu se na rob skodelice napitka doda še rezina limone ali zvitek njenega olupka.",
    caffeine: 1.5,
    alternativeNames: "Caffè al limone, caffè romano, caffè canarino (Italija).",
    origin: "Ni znan (trilema med Rimom, drugim italijanskim mestom in italijansko-ameriškim izvorom). 5. in 6. desetletje 20. stoletja."
},

{
    id: "cappuccino",
    name: "Cappuccino",
    category: "milk",
    cardImage: "images/cappuccino.jpg",
    detailImage: "images/cappuccino_1.jpg",
    description: "Espresso z vročim mlekom in mlečno peno.",
    preparation: "Pripravi se iz espressa, vročega mleka in goste mlečne pene.",
    caffeine: 4,
    origin: "Italija"
},
    
];
