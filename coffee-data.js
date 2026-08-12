const coffees = [

{
    id: "espresso",
    name: "Espresso",
    category: "espresso",
    cardImage: "images/espresso.png",
    detailImage: "images/espresso_1.jpg",
    description: "Espresso je majhen, koncentriran, sirupasti kavni napitek z bogato kremo. Izraz espresso izvira iz italijanščine in pomeni »izstisnjen«. Razmerje med fino mleto kavo in vodo je 1:2. Običajna količina napitka znaša med 25 mL in 30 mL, količina samega kofeina pa 64 mg. Napitek se postreže vroč, pogosto v zelo majhni skodelici.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Čas ekstrakcije je nekoliko krajši od 30 sekund.",
    caffeine: 1.5,
    alternativeNames: "Un caffè (Italija), Café solo (Španija), Bica (Lizbona, Portugalska), Cimbalino (Porto, Portugalska), Café express (Francija).",
    origin: "Turin in Milan, Italija, konec 19. in začetek 20. stoletja."
},
    
{
    id: "ristretto",
    name: "Ristretto",
    category: "espresso",
    cardImage: "images/ristretto.png",
    detailImage: "images/ristretto_1.jpg",
    description: "Ristretto je majhen (manjši kot espresso), koncentriran, sirupasti kavni napitek z bogato kremo. Izraz ristretto izvira iz italijanščine in pomeni »skrajšan« oz. »omejen«. Ristretto je torej »omejena« italijanska različica espressa, pripravljena z enako količino mlete kave, vendar s približno dvakrat manj vode (razmerje kava:voda je od 1:1 do 1:1,5), kar znese približno 20 mL napitka. Zaradi krajše ekstrakcije je okus slajši, bolj sirupast in intenzivnejši. Kljub slovesu in mišljenju, da je »močnejši« od espressa (višja koncentracija kot neposredna posledica manjše količine vode in enake količine kave), prav zaradi manjše količine vode vsebuje nekoliko manj kofeina kot običajen espresso (zaradi zgodnejšega padca koncentracijskega gradienta med kavo in vodo, hitrost difuzije med ekstrakcijo hitreje pade. Svoj prispevek k temu doda tudi krajši ekstrakcijski čas). Njegova »moč« torej izvira iz večje intenzivnosti okusa (večje koncentracije kofeina), ki zamaskira nekoliko nižjo količino kofeina. Količina samega kofeina znaša od 55 mg do 60 mg. Napitek se postreže vroč, pogosto v zelo majhni skodelici.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Ekstrakcija traja okoli 20 sekund.",
    caffeine: 1,
    alternativeNames: "Café serré (Francija), Short shot, restricted shot (angleško govoreče države), Caffè corto (Italija).",
    origin: "Italija, začetek 20. stoletja."
},

{
    id: "lungo",
    name: "Lungo",
    category: "espresso",
    cardImage: "images/lungo.png",
    detailImage: "images/lungo_1.png",
    description: "Lungo je italijanski »dolgi« espresso, pripravljen z enako količino mlete kave kot espresso, vendar s približno dvakrat do trikrat več vode (razmerje kava:voda približno 1:3 do 1:4). Izraz lungo izvira iz italijanščine in pomeni »dolg«. Ponavadi je količina napitka od 50 mL do 60 mL. Zaradi daljše ekstrakcije se razvije izrazitejša grenkoba in višja vsebnost kofeina kot pri espressu (med 75 mg in 90 mg). Napitek se postreže vroč, pogosto v majhni skodelici.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Ekstrakcija traja okoli eno minuto.",
    caffeine: 1.5,
    alternativeNames: "Café allongé (Francija, Kanada), long shot (angleško govoreče države).",
    origin: "Italija, začetek 20. stoletja."
},

{
    id: "doppio",
    name: "Doppio",
    category: "espresso",
    cardImage: "images/doppio.png",
    detailImage: "images/doppio_1.webp",
    description: "Doppio je italijanski dvojni espresso – dve porciji espressa, pripravljeni v eni skodelici, s skupno prostornino od 50 mL do 60 mL. Izraz izvira iz italijanske besede duplus, kar pomeni »dvojno«. Okus je enak običajnemu espressu, saj gre preprosto za dvojno količino istega napitka. V eni skodelici vsebuje približno 128 mg kofeina. Za razliko od lunga se pri doppiu koncentracija glede na espresso ne poveča, zato ostane intenzivnost okusa enaka. Napitek se postreže vroč, pogosto v majhni skodelici. V večini kavarn v ZDA ob naročilu espressa dejansko dobiš doppio. Zunaj Italije je pogosta praksa priprave espressa iz doppia, saj je za espresso potrebna manjša košarica v portafiltru. Pripravi se ga tako, da se iz aparata z dvema izlivoma prestreže vsak curek posebej. Tako se dobi dve porciji espressa – en se postreže, drugi pa se običajno zavrže ali uporabi za pripravo drugega kavnega napitka.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Ekstrakcija traja okoli 30 sekund.",
    caffeine: 2.5,
    alternativeNames: "Double espresso (angleško govoreče države), espresso (pogosto v ZDA).",
    origin: "Italija, začetek 20. stoletja."
},

{
    id: "americano",
    name: "Caffè americano",
    category: "espresso",
    cardImage: "images/americano.jpg",
    detailImage: "images/americano_1.webp",
    description: "Caffè americano je kavni napitek, pripravljen iz ene ali dveh porcij espressa, ki se mu/jima dolije vroča voda v približnem razmerju od 1:2 do 1:4. Po priljubljeni zgodbi njegov izvor sega v čas druge svetovne vojne, ko so ameriški vojaki v Italiji espresso redčili z vročo vodo, da bi bil bolj podoben filtrirani kavi, ki so je bili vajeni. Rezultat je napitek s čistejšim in bolj aromatičnim okusom, podoben filtrirani kavi. Odvisno od količine dodanega espressa ima napitek lahko od 64 mg do 128 mg kofeina. Postreže se ga vročega v veliki skodelici, saj ga običajno znese od 150 mL do 240 mL. Po predlogih ameriškega predsednika Donalda Trumpa za priključitev Kanade leta 2025 so nekatere kavarne v Kanadi na svojih menijih caffè americano preimenovale v canadiano. Gre za simbolično preimenovanje, ki izraža kanadsko identiteto in predstavlja odziv na politične razprave.",
    preparation: "Pri pripravi americana se najprej s pomočjo espresso aparata pripravi espresso (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg), nato pa se dolije vroča voda, kar je glavna razlika v primerjavi z napitkom long black.",
    caffeine: {min: 1.5, max: 2.5},
    alternativeNames: "Americano (globalno).",
    origin: "Italija (vojaki ZDA), med letoma 1939 in 1945."
},

{
    id: "long black",
    name: "Long black",
    category: "espresso",
    cardImage: "images/long_black.jpg",
    detailImage: "images/long_black_1.jpg",
    description: "Long black je avstralski in novozelandski kavni napitek, ki sestoji iz dvojnega esspresa (doppia) in vroče vode v približnem razmerju 3:5. Z okoli 160 mL je manjši in močnejši od caffè americana, z značilno aromo ohranjene kreme na vrhu napitka. Napitek vsebuje 128 mg kofeina. Postreže pa se ga vročega v veliki skodelici.",
    preparation: "Napitek long black je pripravljen ravno obratno kot caffè americano. Dvojni espresso (doppio), ki se pripravi s pomočjo espresso aparata (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg), se namreč prelije čez vročo vodo, kar ohrani plast kreme na površini.",
    caffeine: 2.5,
    alternativeNames: "-",
    origin: "Avstralija in Nova Zelandija, 6. in 7. desetletje 20. stoletja."
},

{
    id: "red eye",
    name: "Red eye",
    category: "espresso",
    cardImage: "images/red_eye.jpg",
    detailImage: "images/red_eye_1.webp",
    description: "Red eye je ameriški kavni napitek, ki združuje filtrirano kavo in eno porcijo espressa. Ime je dobil po nočnih letih od zahodne do vzhodne obale Severne Amerike, ki so potnike tako izmučili, da so dobili rdeče oči (angl. red eyes). Ta napitek naj bi pomagal premagovati to utrujenost. Ena skodelica vsebuje 300 mL napitka s približno 160 mg kofeina. Obstajajo tudi različice red-eye-a, ki vsebujejo več espressa. Ti sta black eye (2 porciji espressa) in dead eye ali green eye (tri porcije espressa). Obstaja pa tudi različica z imenom lazy eye, ki vsebuje 1 porcijo espressa in dekofeinizirano filtrirano kavo. Napitek se postreže vroč v veliki skodelici.",
    preparation: "Napitek red eye se pripravi tako, da se eno porcijo espressa, ki je narejen s pomočjo espresso aparata (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg), prelije čez filtrirano kavo (drip coffe).",
    caffeine: 3,
    alternativeNames: "A shot in the dark, a depth charge, an eye opener, a sludge cup, a hammerhead, foglifter, a devil’s crowbar, an oil spill, turbo hot coffee (ZDA).",
    origin: "ZDA, konec 20. stoletja."
},

{
    id: "crema",
    name: "Caffè crema",
    category: "espresso",
    cardImage: "images/crema.jpg",
    detailImage: "images/crema_1.png",
    description: "Caffè Crema je alpski evropski kavni napitek, pripravljen kot podaljšani espresso z razmerjem med fino mleto kavo in vodo približno 1:6 do 1:7, kar znese od 120 mL do 180 mL napitka, prekritega z debelo plastjo kreme. Priljubljen je predvsem v Švici ter alpskih obmejnih območjih. Ime izvira iz izraza, ki ga je že leta 1948 za espresso uporabljalo podjetje Gaggia (proizvajalec kavnih aparatov). Caffè crema lahko razumemo kot različico polne skodelice kave, pripravljene z espresso aparatom. Je daljši celo od lunga, a še vedno ohrani značilno plast kreme na površini. Vsebnost kofeina v napitku je od 90 mg do 120 mg. Postreže se ga vročega v veliki skodelici.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno bolj grobo mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Čas ekstrakcije je nekoliko krajši od 30 sekund.",
    caffeine: 2,
    alternativeNames: "Kaffee Crème, Schümli (Območje Alp), cream coffee (angleško govoreče države).",
    origin: "Italija (koncept), 1948. Območje Alp, Švica, Italija (moderni recept), 9. desetletje 20. stoletja."
},

{
    id: "romano",
    name: "Espresso romano",
    category: "espresso",
    cardImage: "images/espresso_romano.png",
    detailImage: "images/espresso_romano_1.jpg",
    description: "Espresso Romano je espresso, postrežen z rezino limone ali zvitkom njenega olupka na robu skodelice. Njegov izvor ni povsem jasen, vendar najverjetneje ne izvira iz Rima, temveč iz italijansko-ameriške tradicije. Enako kot espresso gre za majhen koncentriran, sirupasti kavni napitek z bogato kremo. Razmerje med fino mleto kavo in vodo je 1:2. Običajna količina napitka znaša med 25 mL in 30 mL, količina samega kofeina pa 64 mg. Napitek se postreže vroč, pogosto v zelo majhni skodelici. Eterična olja iz limonine lupine poudarijo aromo espressa in prvemu požirku dodajo svežo citrusno noto.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Čas ekstrakcije je nekoliko krajši od 30 sekund. Na koncu se na rob skodelice napitka doda še rezina limone ali zvitek njenega olupka.",
    caffeine: 1.5,
    alternativeNames: "Caffè al limone, caffè romano, caffè canarino (Italija).",
    origin: "Ni znan (trilema med Rimom, drugim italijanskim mestom in italijansko-ameriškim izvorom), 5. in 6. desetletje 20. stoletja."
},
    
{
    id: "con guillermo",
    name: "Café con Guillermo",
    category: "espresso",
    cardImage: "images/con_guillermo.png",
    detailImage: "images/con_guillermo_1.jpg",
    description: "Café con Guillermo je kavni napitek, ki je običajno pripravljen iz dveh porcij espressa (doppio), pogosto postreženih v zelo majhnem kozarcu z dvema rezinama limete. Limeta napitku doda osvežilno citrusno aromo in prijetno kislost, ki dopolnjuje bogat okus espressa. Volumen napitka znaša cca. 60 mL, vsebnost kofeina pa okoli 128 mg. Postrežemo ga lahko vročega ali z ledom.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno fino mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Čas ekstrakcije je nekoliko krajši od 30 sekund. Najprej se v kozarec da dve rezini limete in se ju prelije z dvojnim espressom (doppiom). Po želji lahko dodamo tudi kocke ledu.",
    caffeine: 2.5,
    alternativeNames: "Café Guillermo (Italija), Guillermo coffee (angleško govoreče države).",
    origin: "Ni znan, 1. in 2. desetletje 21. stoletja."
},

{
    id: "latte",
    name: "Caffè latte",
    category: "milk",
    cardImage: "images/latte.jpg",
    detailImage: "images/latte_1.jpg",
    description: "Caffè latte je kavni napitek, pripravljen iz ene ali dveh porcij espressa in parjenega mleka v približnem razmerju od 1:3 do 1:5, na vrhu pa ga prekriva tanka plast mlečne pene. V 9. desetletju 20. stoletja je po zaslugi kavarn v Seattlu postal eden najbolj priljubljenih kavnih napitkov v ZDA. Značilen je po blagem, mlečnem okusu in številnih možnostih prilagoditve. Od cappuccina se razlikuje predvsem po tanjši plasti mlečne pene, ki je običajno debela približno en centimeter. Količina napitka ponavadi znaša 300 mL, vsebnost kofeina pa od 64 mg do 128 mg. Postreže se ga vročega v veliki skodelici.",
    preparation: "Za pripravo osnove napitka, ene (espresso) ali dveh porcij espressa (doppio), se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Prav tako se z njim pogosto pripravi parjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), s katerim prekrijemo osnovo. Na koncu pa se celotna tekočina prekrije še z mlečno peno, ki se pripravi s penilnikom mleka.",
    caffeine: {min: 1.5, max: 2.5},
    alternativeNames: "Caffellatte, caffelatte, caffè e latte (Italija), latte (drugod, v Italiji bi ob tem naročilu dobili le kozarec mleka), café crème (Paris, Francija), Milchkaffee (Nemčija).",
    origin: "Italija (koncept), 17. stoletje. ZDA (moderni recept), začetek 20. stoletja."
},

{
    id: "cappuccino",
    name: "Cappuccino",
    category: "milk",
    cardImage: "images/cappuccino.jpg",
    detailImage: "images/cappuccino_1.jpg",
    description: "Cappuccino je italijanski kavni napitek na osnovi espressa, pripravljen po klasičnem pravilu tretjin, tj. espresso, parjeno mleko in gosta mlečna pena v razmerju 1:1:1. Ime izvira iz dunajskega napitka Kapuziner, pri katerem so kavo in smetano prilagodili barvi oblačil kapucinskih menihov. Običajno se ga postreže od 150 mL do 180 mL. Gosta plast pene na vrhu ohranja napitek majhen, topel in uravnotežen. Je dvakrat manjši in ima izrazitejši okus kot Caffè latte. Vsebnost kofeina znaša 64 mg, postreže pa se ga vročega v veliki skodelici. V Italiji kapučino pijejo izključno dopoldne, naročanje tega napitka po kosilu ali večerji te tiho označi kot turista. Američani so razvili tudi »suho« (večji delež goste mlečne pene) ali »mokro« različico (večji delež parjenega mleka) cappuccina, pogosto večjo od 350 mL.",
    preparation: "Za pripravo osnove napitka, dveh porcij espressa (doppio), 60 mL, se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Prav tako se z njim pogosto pripravi parjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), okoli 60 mL, s katerim prekrijemo osnovo. Na koncu pa se celotna tekočina prekrije še s 60 mL goste mlečne pene, ki se pripravi s penilnikom mleka.",
    caffeine: 1.5,
    alternativeNames: "-",
    origin: "Avstrija, Habsburška monarhija (koncept), 18. stoletje. Italija (moderni recept), začetek 20. stoletja."
},

{
    id: "flat white",
    name: "Flat white",
    category: "milk",
    cardImage: "images/flat_white.jpg",
    detailImage: "images/flat_white_1.jpg",
    description: "Flat white je avstralsko-novozelandski kavni napitek na osnovi espressa, običajno vsebuje dvojni espresso (doppio), ki ga dopolnjuje žametno gladka mikro pena v približnem razmerju 1:2 (espresso : parjeno mleko). Na vrhu nima debele plasti mlečne pene kot cappuccino, postreže pa se v količini od 150 mL do 165 mL. Je manjši in močnejšega okusa kot caffè latte, saj espresso pride bolj do izraza (manjši delež mleka), hkrati pa napitek ohranja svilnato gladko teksturo. Vsebnost kofeina v napitku znaša okoli 128 mg. Napitek se postreže vroč pogosto v veliki skodelici in z narisanim vzorcem na površini (angl. latte art). Ta način priprave kavnega napitka se je iz Avstralije in Nove Zelandije v začetku 21. stoletja razširil v Združeno kraljestvo. Do leta 2010 so flat white prodajali tudi v tamkajšnjih poslovalnicah ameriške verige Starbucks. Do leta 2013 je bil flat white na voljo tudi v kavarnah New Yorka, eno od njih pa je imel v solastništvu igralec Hugh Jackman, ki je napitek tudi promoviral. Zanimivo je tudi, da se v Združenem kraljestvu izraz »flat white economy« uporablja za opis londonske mreže internetnih, medijskih in kreativnih podjetij. Izraz izhaja iz knjige Douglasa McWilliamsa The Flat White Economy: How the Digital Economy Is Transforming London and Other Cities of the Future, ki je izšla leta 2015. Poimenovanje se navezuje na priljubljenost napitka flat white med zaposlenimi v teh panogah.",
    preparation: "Za pripravo osnove napitka, dve porciji espressa (doppio), se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Prav tako se z njim pogosto pripravi parjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), 100 mL, s katerim prekrijemo osnovo.",
    caffeine: 2.5,
    alternativeNames: "Flattie, flat white coffee (angleško govoreče države).",
    origin: "Ni znan (dilema med Avstralijo in Novo Zelandijo), 9. desetletje 20. stoletja."
},

{
    id: "cortado",
    name: "Cortado",
    category: "milk",
    cardImage: "images/cortado.jpg",
    detailImage: "images/cortado_1.jpg",
    description: "Cortado je španski kavni napitek, pripravljen iz enakih deležev espressa in parjenega mleka (1:1) ter postrežen vroč pogosto v majhnem kozarcu s prostornino približno 120 mL. Ime izhaja iz španskega glagola cortar, ki pomeni »prerezati« oziroma »razredčiti«. Mleko ublaži intenzivnost espressa, ne da bi prekrilo njegov značilen okus. Vsebnost kofeina v napitku znaša od 64 mg do 128 mg. Kubanci so z dodatkom sladkorja prišli do svoje različice cortada z imenom cortadito, na Kanarskim otokih pa z dodatkom kondenziranega mleka do napitka poimenovanega leche y leche.",
    preparation: "Za pripravo osnove napitka, ena (espresso) ali dve porciji espressa (doppio), se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Prav tako se z njim pogosto pripravi parjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), 30mL ali 60 mL, s katerim prekrijemo osnovo.",
    caffeine: {min: 1.5, max: 2.5},
    alternativeNames: "Gibraltar (San Francisco, ZDA), leche y leche (Kanarski otoki), cortado coffee (angleško govoreče države).",
    origin: "Baskija, Španija, začetek 20. stoletja."
},

{
    id: "espresso macchiato",
    name: "Espresso macchiato",
    category: "milk",
    cardImage: "images/espresso_macchiato.png",
    detailImage: "images/espresso_macchiato_1.jpg",
    description: "Espresso macchiato je italijanski espresso, ki je »obarvan« z majhno količino mlečne pene, postrežen vroč običajno v zelo majhni skodelici v količini približno 35 mL. Beseda macchiato dobesedno pomeni »obarvan« oziroma »označen«. Gre za najmanjši odmik od čistega espressa, s čimer se ohrani vsa njegova intenzivnost, majhna količina mlečne pene pa okus le nekoliko zmehča. Vsebnost kofeina v napitku znaša okoli 64 mg. Verjetno gre za enega najbolj zavajajočih imen v svetu kave: na primer pri Starbucks macchiato pomeni velik, inverzen latte s sirupom, kar sploh ni podobno originalu. V Avstraliji imajo tudi svojo različico z imenom long macchiato, ki je običajno pripravljen iz dvojnega espressa z dodatkom majhne količine teksturiranega mleka (teksturirano mleko je mleko, ki se speni pred segrevanjem, medtem ko se parjeno mleko peni in segreva hkrati). Kozarec pri tem večinoma ostane prazen.",
    preparation: "Za pripravo osnove napitka, ena porcija espressa (30 mL), se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Preko tekočine nato prelijemo kanček (5 mL) mlečne pene, ki jo pripravi s pomočjo penilnika mleka.",
    caffeine: 1.5,
    alternativeNames: "Caffè macchiato, macchiato (Italija).",
    origin: "Italija, 9. desetletje, 20. stoletja."
},

{
    id: "latte macchiato",
    name: "Latte macchiato",
    category: "milk",
    cardImage: "images/latte_macchiato.jpg",
    detailImage: "images/latte_macchiato_1.jpg",
    description: "Latte macchiato je italijanski večplastni kavni napitek, pri katerem je parjeno mleko »obarvano« s porcijo espressa. Postreže se vročega v velikem kozarcu, ponavadi okoli 300 mL. Vsebnost kofeina v napitku znaša okoli 64 mg. Gre za nekakšen inverz od caffè latte – najprej se doda mleko, nato espresso – kar ustvari izrazite plasti mleka, kave in mlečne pene. Čeprav je videti izrazit, je okus precej blag, saj je ena porcija espressa razporejena v polnem kozarcu mleka.",
    preparation: "Za pripravo osnove napitka, ena porcija espressa (30 mL), se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). V visok kozarec najprej dodamo parjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), ki ga ponavadi pripravimo s pomočjo espresso aparata. Nato pa dodamo porcijo espressa in pazimo, da se sloji ohranijo.",
    caffeine: 1.5,
    alternativeNames: "-",
    origin: "Italija, 9. desetletje 20. stoletja."
},

{
    id: "caffè mocha",
    name: "Caffè mocha",
    category: "milk",
    cardImage: "images/mocha.jpg",
    detailImage: "images/mocha_1.jpg",
    description: "Caffè mocha je ameriški kavni napitek na osnovi dvojnega espressa (doppia), ki združuje espresso, čokolado in parjeno mleko v razmerju 1:2:7 ter je včasih prelit s stepeno smetano. Ime izhaja iz mesta Mokha v Jemnu, zgodovinskega pristanišča, povezanega s trgovino s kavo. Po okusu je podoben kombinaciji latteja in vroče čokolade. Čokolada poleg okusa prispeva tudi nekaj kofeina in teobromina, zato ima napitek nekoliko več stimulativnih snovi kot običajni latte. Vsebnost kofeina napitka je tako od 90 mg do 130 mg. Napitek se postreže vroč v velikem kozarcu, saj ga običajno znese 300 mL. Različica napitka je white caffè mocha, pri kateri se namesto mlečne ali temne čokolade uporablja bela čokolada. Obstajajo tudi različice, pri katerih se kombinirata obe vrsti čokoladnega sirupa. Ta mešanica je poznana pod različnimi imeni, med drugim kot black-and-white mocha, marble mocha, tan mocha, tuxedo mocha in zebra mocha. Druga različica je mochaccino, ki je pripravljena iz dvojnega espressa (doppia) ter kombinacije parjenega mleka in kakava v prahu ali čokoladnega mleka. Tako mochaccino kot tudi caffè mocha sta lahko obogatena s čokoladnim sirupom, stepeno smetano ter dodatki, kot so cimet, muškatni orešček ali čokoladni posipi. French White Mocha je drugo ime za mochaccino, vendar brez cimeta v prahu. Tretja različica caffè mocha uporablja kavo namesto espressa. Pripravljena je iz kave, parjenega mleka in dodane čokolade. V bistvu gre za kombinacijo skodelice kave in vroče čokolade.",
    preparation: "Najprej v visok kozarec nalijemo čokoladni sirup ali staljeno čokolado (30 mL). Nato dodamo dve porciji espressa (60 mL) in premešamo. Na koncu dodamo še parjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), ki ga ponavadi pripravimo s pomočjo espresso aparata.",
    caffeine: {min: 2, max: 2.5},
    alternativeNames: "Mocha, mocaccino, mochachino, mochaccino (globalno).",
    origin: "Turin, Italija (koncept), 18. stoletje. ZDA (moderni recept), 20. stoletje."
},

{
    id: "caffè breve",
    name: "Caffè breve",
    category: "milk",
    cardImage: "images/breve.jpg",
    detailImage: "images/breve_1.webp",
    description: "Caffè breve je ameriški kavni napitek na osnovi dvojnega espressa (doppia), podoben caffè latte-ju, vendar je pripravljen s parjeno mešanico polnomastnega mleka in smetane (angl. half-and-half) v razmerju 1:1 namesto običajnega mleka. Zaradi tega velja za enega najbogatejših napitkov na osnovi espressa in mleka. Večja vsebnost mlečne maščobe ustvari gostejšo in bolj sladko skodelico kavnega napitka ter ublaži morebitno grenkobo dodanega espressa. Izraz breve izvira iz italijanščine in pomeni “kratek”. Količina napitka običajno znaša 300 mL, vsebnost kofeina pa okoli 128 mg. Postreže se ga vročega v veliki skodelici.",
    preparation: "Za pripravo caffè breve najprej segrejemo in spenimo mešanico polnomastnega mleka in smetane (angl. half-and-half). Nato pripravimo dvojno porcijo espressa (doppio, približno 60 mL) in jo nalijemo v veliko skodelico. Dodamo vroč half-and-half, pri tem pa zadržimo mlečno peno. Na koncu peno z žlico zajamemo in jo razporedimo po vrhu napitka.",
    caffeine: 2.5,
    alternativeNames: "Breve, breve latte (globalno), breve coffee, half-and-half latte (angleško govoreče države).",
    origin: "ZDA, 7. desetletje 20. stoletja."
},

{
    id: "piccolo latte",
    name: "Piccolo latte",
    category: "milk",
    cardImage: "images/piccolo_latte.jpg",
    detailImage: "images/piccolo_latte_1.jpg",
    description: "Piccolo latte je avstralski kavni napitek na osnovi porcije ristretta s parjenim mlekom v razmerju od 1:3 do 1:4. Postreže se ga vročega pogosto v zelo majhni skodelici, saj napitka znese zgolj približno 90 mL. Ime piccolo izhaja iz italijanščine in pomeni “majhen”. Lahko ga razumemo kot nekakšen »baristov degustacijski latte« - ponuja teksturo in kremastost mleka, vendar v manjši količini. Vsebnost kofeina napitka znaša cca. 55 mg.",
    preparation: "Za pripravo osnove napitka, ena porcija ristretta, se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 20 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Prav tako se z njim pogosto pripravi parjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), 70 mL, s katerim prekrijemo osnovo.",
    caffeine: 1,
    alternativeNames: "Piccolo (globalno), piccolo coffee, mini latte (angleško govoreče države), macchiato largo (Španija, Portugalska).",
    origin: "Sydney, Avstralija, začetek 21. stoletja."
},

{
    id: "magic",
    name: "Magic",
    category: "milk",
    cardImage: "images/magic.jpg",
    detailImage: "images/magic_1.jpg",
    description: "Magic je kavni napitek iz Melbourna, pripravljen iz dvojnega ristretta in flat white mleka v razmerju okoli 1:2, pri čemer je količina napitka od 120 mL do 150 mL. Vsebnost kofeina v napitku znaša cca. 110 mg. Dve porciji ristretta in manjša količina mleka ustvarita intenzivnejši okus kot pri flat white-u. Tekstura ostaja enako svilnata in kremasta zaradi fine mikro-pene, vendar je razmerje nekoliko bolj usmerjeno v okus kave. Napitek se postreže vroč v veliki skodelici. Do začetka 3. desetletja 21. stoletja je bil magic v melbournskih kavarnah večinoma napitek, ki ni bil naveden na meniju. Poznavanje napitka med prebivalci mesta je bilo različno, nekateri zanj sploh niso vedeli, drugi pa so ga dojemali kot že dolgo uveljavljeno pijačo. V drugih avstralskih mestih je bil precej manj poznan.",
    preparation: "Za pripravo osnove napitka, dve porciji ristretta (40 mL), se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 20 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Prav tako se z njim pogosto pripravi flat white mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro, tako da nastnane pena), 80 mL, s katerim prekrijemo osnovo.",
    caffeine: 2,
    alternativeNames: "Magic coffee (angleško govoreče države).",
    origin: "Melbourne, Avstralija, začetek 21. stoletja."
},

{
    id: "café con leche",
    name: "Café con leche",
    category: "milk",
    cardImage: "images/con_leche.jpg",
    detailImage: "images/con_leche_1.jpg",
    description: "",
    preparation: "",
    caffeine: ,
    alternativeNames: "",
    origin: ""
},

];
