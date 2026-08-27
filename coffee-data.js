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
    description: "Lungo je italijanski »dolgi« espresso, pripravljen z enako količino mlete kave kot espresso, vendar s približno dvakrat do trikrat več vode (razmerje kava:voda približno 1:3 do 1:4). Izraz lungo izvira iz italijanščine in pomeni »dolg«. Ponavadi je količina napitka od 50 mL do 60 mL. Zaradi daljše ekstrakcije se razvije izrazitejša grenkoba in višja vsebnost kofeina kot pri espressu (med 75 mg in 90 mg). Napitek se postreže vroč, pogosto v zelo majhni skodelici.",
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
    description: "Doppio je italijanski dvojni espresso – dve porciji espressa, pripravljeni v eni skodelici, s skupno prostornino od 50 mL do 60 mL. Izraz izvira iz italijanske besede duplus, kar pomeni »dvojno«. Okus je enak običajnemu espressu, saj gre preprosto za dvojno količino istega napitka. V eni skodelici vsebuje približno 128 mg kofeina. Za razliko od lunga se pri doppiu koncentracija glede na espresso ne poveča, zato ostane intenzivnost okusa enaka. Napitek se postreže vroč, pogosto v zelo majhni skodelici. V večini kavarn v ZDA ob naročilu espressa dejansko dobiš doppio. Zunaj Italije je pogosta praksa priprave espressa iz doppia, saj je za espresso potrebna manjša košarica v portafiltru. Pripravi se ga tako, da se iz aparata z dvema izlivoma prestreže vsak curek posebej. Tako se dobi dve porciji espressa – en se postreže, drugi pa se običajno zavrže ali uporabi za pripravo drugega kavnega napitka.",
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
    description: "Long black je avstralski in novozelandski kavni napitek, ki sestoji iz dvojnega esspresa (doppia) in vroče vode v približnem razmerju 3:5. Z okoli 160 mL je manjši in močnejši od caffè americana, z značilno aromo ohranjene kreme na vrhu napitka. Napitek vsebuje 128 mg kofeina. Postreže pa se ga vročega v majhni skodelici.",
    preparation: "Napitek long black je pripravljen ravno obratno kot caffè americano. Dvojni espresso (doppio), 60 mL, ki se pripravi s pomočjo espresso aparata (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg), se namreč prelije čez 100 mL vroče vode, kar ohrani plast kreme na površini.",
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
    preparation: "Napitek red eye se pripravi tako, da se eno porcijo espressa, 30 mL, ki je narejen s pomočjo espresso aparata (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg), prelije čez 170 mL filtrirane kave (angl. drip coffee).",
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
    description: "Caffè crema je alpski evropski kavni napitek, pripravljen kot podaljšani espresso z razmerjem med fino mleto kavo in vodo približno 1:6 do 1:7, kar znese od 120 mL do 180 mL napitka, prekritega z debelo plastjo kreme. Priljubljen je predvsem v Švici ter alpskih obmejnih območjih. Ime izvira iz izraza, ki ga je že leta 1948 za espresso uporabljalo podjetje Gaggia (proizvajalec kavnih aparatov). Caffè crema lahko razumemo kot različico polne skodelice kave, pripravljene z espresso aparatom. Je daljši celo od lunga, a še vedno ohrani značilno plast kreme na površini. Vsebnost kofeina v napitku je od 90 mg do 120 mg. Postreže se ga vročega v majhni skodelici.",
    preparation: "Za pripravo se uporablja espresso aparat. Napitek je pripravljen z ekstrakcijo tekoče-trdno bolj grobo mlete kave z vročo vodo (do 96 °C) pri relativnem tlaku cca. 9 bar. Čas ekstrakcije je nekoliko daljši od 30 sekund.",
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
    description: "Café con Guillermo je kavni napitek, ki je običajno pripravljen iz dveh porcij espressa (doppio), pogosto postreženih v majhnem kozarcu z dvema rezinama limete. Limeta napitku doda osvežilno citrusno aromo in prijetno kislost, ki dopolnjuje bogat okus espressa. Volumen napitka znaša cca. 60 mL, vsebnost kofeina pa okoli 128 mg. Postrežemo ga lahko vročega ali z ledom.",
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
    description: "Cappuccino je italijanski kavni napitek na osnovi espressa, pripravljen po klasičnem pravilu tretjin, tj. espresso, parjeno mleko in gosta mlečna pena v razmerju 1:1:1. Ime izvira iz dunajskega napitka Kapuziner, pri katerem so kavo in smetano prilagodili barvi oblačil kapucinskih menihov. Običajno se ga postreže od 150 mL do 180 mL. Gosta plast pene na vrhu ohranja napitek majhen, topel in uravnotežen. Je dvakrat manjši in ima izrazitejši okus kot Caffè latte. Vsebnost kofeina znaša 64 mg, postreže pa se ga vročega v majhni skodelici. V Italiji kapučino pijejo izključno dopoldne, naročanje tega napitka po kosilu ali večerji te tiho označi kot turista. Američani so razvili tudi »suho« (večji delež goste mlečne pene) ali »mokro« različico (večji delež parjenega mleka) cappuccina, pogosto večjo od 350 mL.",
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
    description: "Flat white je avstralsko-novozelandski kavni napitek na osnovi espressa, običajno vsebuje dvojni espresso (doppio), ki ga dopolnjuje žametno gladka mikro pena v približnem razmerju 1:2 (espresso : parjeno mleko). Na vrhu nima debele plasti mlečne pene kot cappuccino, postreže pa se v količini od 150 mL do 165 mL. Je manjši in močnejšega okusa kot caffè latte, saj espresso pride bolj do izraza (manjši delež mleka), hkrati pa napitek ohranja svilnato gladko teksturo. Vsebnost kofeina v napitku znaša okoli 128 mg. Napitek se postreže vroč pogosto v majhni skodelici in z narisanim vzorcem na površini (angl. latte art). Ta način priprave kavnega napitka se je iz Avstralije in Nove Zelandije v začetku 21. stoletja razširil v Združeno kraljestvo. Do leta 2010 so flat white prodajali tudi v tamkajšnjih poslovalnicah ameriške verige Starbucks. Do leta 2013 je bil flat white na voljo tudi v kavarnah New Yorka, eno od njih pa je imel v solastništvu igralec Hugh Jackman, ki je napitek tudi promoviral. Zanimivo je tudi, da se v Združenem kraljestvu izraz »flat white economy« uporablja za opis londonske mreže internetnih, medijskih in kreativnih podjetij. Izraz izhaja iz knjige Douglasa McWilliamsa The Flat White Economy: How the Digital Economy Is Transforming London and Other Cities of the Future, ki je izšla leta 2015. Poimenovanje se navezuje na priljubljenost napitka flat white med zaposlenimi v teh panogah.",
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
    preparation: "Za pripravo osnove napitka, ena porcija espressa (30 mL), se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Preko tekočine nato prelijemo kanček (5 mL) mlečne pene, ki jo pripravimo s pomočjo penilnika mleka.",
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
    description: "Caffè mocha je ameriški kavni napitek na osnovi dvojnega espressa (doppia), ki združuje espresso, čokolado in parjeno mleko v razmerju 1:2:7 ter je včasih prelit s stepeno smetano. Ime izhaja iz mesta Mokha v Jemnu, zgodovinskega pristanišča, povezanega s trgovino s kavo. Po okusu je podoben kombinaciji latteja in vroče čokolade. Čokolada poleg okusa prispeva tudi nekaj kofeina in teobromina, zato ima napitek nekoliko več stimulativnih snovi kot običajni latte. Vsebnost kofeina napitka je tako od 90 mg do 130 mg. Napitek se postreže vroč v velikem kozarcu, saj ga običajno znese 300 mL. Različica napitka je white caffè mocha, pri kateri se namesto mlečne ali temne čokolade uporablja bela čokolada. Obstajajo tudi različice, pri katerih se kombinirata obe vrsti čokoladnega sirupa. Ta mešanica je poznana pod različnimi imeni, med drugim kot black-and-white mocha, marble mocha, tan mocha, tuxedo mocha in zebra mocha. Druga različica je mochaccino, ki je pripravljena iz dvojnega espressa (doppia) ter kombinacije parjenega mleka in kakava v prahu ali čokoladnega mleka. Tako mochaccino kot tudi caffè mocha sta lahko obogatena s čokoladnim sirupom, stepeno smetano ter dodatki, kot so cimet, muškatni orešček ali čokoladni posipi. French white mocha je drugo ime za mochaccino, vendar brez cimeta v prahu. Pri tretji različici caffè mocha se uporabi filtrirano kavo (angl. drip coffee) namesto espressa. Pripravljena je iz kave, parjenega mleka in dodane čokolade. V bistvu gre za kombinacijo skodelice kave in vroče čokolade.",
    preparation: "Najprej v visok kozarec nalijemo čokoladni sirup ali staljeno čokolado (30 mL). Nato dodamo dve porciji espressa (60 mL) in premešamo. Na koncu dodamo še parjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), 210 mL, ki ga ponavadi pripravimo s pomočjo espresso aparata.",
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
    preparation: "Za pripravo caffè breve najprej segrejemo in spenimo mešanico polnomastnega mleka in smetane (angl. half-and-half). Nato pripravimo dvojno porcijo espressa (doppio, približno 60 mL) in jo nalijemo v veliko skodelico. Dodamo cca. 240 mL vročega half-and-half-a, pri tem pa zadržimo mlečno peno. Na koncu peno z žlico zajamemo in jo razporedimo po vrhu napitka.",
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
    description: "Piccolo latte je avstralski kavni napitek na osnovi porcije ristretta s parjenim mlekom v razmerju od 1:3 do 1:4. Postreže se ga vročega pogosto v zelo majhni skodelici, saj napitka znese zgolj približno 90 mL. Ime piccolo izhaja iz italijanščine in pomeni “majhen”. Lahko ga razumemo kot nekakšen »baristov degustacijski latte« – ponuja teksturo in kremastost mleka, vendar v manjši količini. Vsebnost kofeina napitka znaša cca. 55 mg.",
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
    description: "Magic je kavni napitek iz Melbourna, pripravljen iz dvojnega ristretta in flat white mleka v razmerju okoli 1:2, pri čemer je količina napitka od 120 mL do 150 mL. Vsebnost kofeina v napitku znaša cca. 110 mg. Dve porciji ristretta in manjša količina mleka ustvarita intenzivnejši okus kot pri flat white-u. Tekstura ostaja enako svilnata in kremasta zaradi fine mikro-pene, vendar je razmerje nekoliko bolj usmerjeno v okus kave. Napitek se postreže vroč v majhni skodelici. Do začetka 3. desetletja 21. stoletja je bil magic v melbournskih kavarnah večinoma napitek, ki ni bil naveden na meniju. Poznavanje napitka med prebivalci mesta je bilo različno, nekateri zanj sploh niso vedeli, drugi pa so ga dojemali kot že dolgo uveljavljeno pijačo. V drugih avstralskih mestih je bil precej manj poznan.",
    preparation: "Za pripravo osnove napitka, dve porciji ristretta (40 mL), se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 20 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Prav tako se z njim pogosto pripravi flat white mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro, tako da nastane pena), 80 mL, s katerim prekrijemo osnovo.",
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
    description: "Café con leche (šp. kava z mlekom) je klasičen španski in latinskoameriški napitek, pripravljen iz močne filtrirane kave (angl. drip coffee) ali espressa in poparjenega mleka v razmerju 1:1. Pogosto je tudi sladkan. Poparjeno mleko napitku zagotavlja gladko in toplo teksturo brez mlečne pene, enako razmerje kave in mleka pa ustvari uravnotežen okus. Gre za preprost in nasiten zajtrkovalni napitek, popularen v Španiji, Latinski Ameriki in drugih diasporičnih latinskoameriških skupnostih. Običajno ga znese 200 mL, postreže pa se ga vročega v majhni skodelici. Vsebnost kofeina se giblje med 64 mg (v primeru, da uporabimo espresso) in 95 mg (v primeru, da uporabimo filtrirano kavo). Obstajata tudi dve različici napitka café con leche z imeni café con leche en vaso (šp. kava z mleko v kozarcu) in café con leche de desayuno (kava z mlekom za zajtrk –  večja količina napitka).",
    preparation: "Za pripravo osnove napitka, dobre tri porcije espressa (100 mL), se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Prav tako se z njim pogosto pripravi poparjeno mleko (mleko, segreto do 83 °C), 100 mL, s katerim prekrijemo osnovo in premešamo.",
    caffeine: {min: 1.5, max: 2},
    alternativeNames: "-",
    origin: "Španija, 17. stoletje (koncept). Španija, 20. stoletje (moderni recept)."
},

{
    id: "café au lait",
    name: "Café au lait",
    category: "milk",
    cardImage: "images/au_lait.jpg",
    detailImage: "images/au_lait_1.jpg",
    description: "Café au lait (fr. kava z mlekom) je francoska klasika, pripravljena iz filtrirane kave (angl. drip coffee) in vročega mleka v razmerju 1:1. Napitek se postreže vroč v veliki in široki skodelici oziroma skledi brez ročaja, imenovani bol, tradicionalno ob zajtrku. Filtrirana kava daje napitku blažji in bolj zaokrožen okus kot napitki na osnovi espressa. Napitka ponavadi znese okoli 240 mL, ki vsebuje med 60 mg in 95 mg kofeina. V številnih ameriških kavarnah je café au lait napitek iz močne filtrirane kave, pripravljene s kapljičnim načinom (drip coffee), ali pripravljene s francosko stiskalnico (french press), ki ji je dodano parjeno mleko. V New Orleans-u namesto vročega mleka uporabijo poparjeno mleko in kavi primešajo cikorijo, kar izvira iz pomanjkanja kave v času ameriške državljanske vojne. V kavarnah Starbucks je napitek znan pod imenom caffè misto in namesto vročega mleko vključuje spenjeno mleko. V nemško govorečih državah pa bomo ob naročilo napitka milchkaffee dobili napitek iz filtrirane kave in poparjenega mleka. Bela kava kot jo poznamo v Sloveniji ni enačica Café au lait-u, saj se pri beli kavi kavni osnovi doda hladno (nesegreto) mleko.",
    preparation: "Café au lait pripravimo tako, da najprej pripravimo filtrirano kavo (angl. drip coffee) s pomočjo kavnega aparata (120 mL). Nato zagrejemo mleko in ga cca. 120 mL pelijemo čez kavno osnovo.",
    caffeine: {min: 1.5, max: 2},
    alternativeNames: "Koffie verkeerd (Nizozemska).",
    origin: "Francija, 17. stoletje."
},

{
    id: "galão",
    name: "Galão",
    category: "milk",
    cardImage: "images/galao.jpg",
    detailImage: "images/galao_1.webp",
    description: "Galão je portugalska kava z veliko mleka – vsebuje eno porcijo espressa in spenjeno mleko v razmerju približno 1:3. Postreže se vroč ponavadi v velikem kozarcu s prostornino približno 250 mL. Vsebnost kofeina napitka znaša cca. 128 mg. Gre za standardno naročilo v portugalskih kavarnah in slaščičarnah. Lahko ga razumemo kot portugalskega sorodnika latte-ja, vendar je priprava preprostejša. Manjša različica se imenuje garoto (šp. majhen fant), ki se postreže v majhni skodelici. Če pa je razmerje espressa in spenjenega mleka 1:1, se napitek imenuje meia de leite (šp. pol mleka) in se običajno postreže v skodelici. Ob naročilu napitka galão escuro, dobimo različico z nekoliko večjim delež espressa, ob naročilu napitka galão claro, pa različico z nekoliko večjim deležem spenjenega mleka.",
    preparation: "Za pripravo osnove napitka, dobrih dveh porcij espressa (doppio), 60 mL, se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Prav tako se z njim pogosto pripravi spenjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro, vsebuje več zraka in večje zračne mehurčke kot parjeno mleko), slabih 190 mL, s katerim prekrijemo osnovo.",
    caffeine: 2.5,
    alternativeNames: "Portuguese latte (globalno).",
    origin: "Lizbona, Portugalska, 3. desetletje 20. stoletja."
},

{
    id: "café bombón",
    name: "Café bombón",
    category: "milk",
    cardImage: "images/bombon.jpg",
    detailImage: "images/bombon_1.jpg",
    description: "Café bombón je valencijski kavni napitek, pri katerem se espresso v razmerju 1:1 prelije čez sladkano kondenzirano mleko. Običajno ga znese okoli 60 mL z vsebnostjo kofeina cca. 64 mg. Postreže se vroč v zelo majhnem kozarcu, tako da ostaneta obe plasti vidno ločeni. Za razporeditev plasti poskrbi razlika v gostoti – gostejše kondenzirano mleko ostane na dnu, espresso pa se zadrži nad njim. Pred pitjem napitek premešamo. Café bombón ima po svetu tudi razne različice, med drugim azijska različica (pripravljena je iz mlete kave namesto espressa), café bombón con hielo (napitek se postreže z ledom), čokoladni bombón (med kondenzirano mleko in espresso se doda plast čokoladnega sirupa ali kakava), café bombón crema (na vrhu se doda majhna plast mlečne pene ali stepene smetane), café bombón po valencijsko (občasno vključuje zvitek pomarančnega olupka ali aromatiziran sirup).",
    preparation: "Za pripravo napitka, najprej pripravimo sladkano kondenzirano mleko. Polnomastnemu mleku dodamo sladkor v razmerju od 1:2 do 1:3. Mešamo in počasi segrevamo, dokler ne izhlapi cca. 60 % vode. 30 mL sladkanega kondenziranega mleka nato prelijemo v kozarec in previdno (pogosto preko žlice) dolijemo eno porcijo espressa (30 mL), za katerega pripravo se uporablja espresso aparat (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg). Napitek mora ostati razslojen.",
    caffeine: 1.5,
    alternativeNames: "Café con Leche Condensada (Španija in Latinska Amerika).",
    origin: "Španija, valencia, 6. desetletje 20. stoletja."
},

{
    id: "wiener melange",
    name: "Wiener melange",
    category: "milk",
    cardImage: "images/wiener_melange.jpg",
    detailImage: "images/wiener_melange_1.jpg",
    description: "Wiener Melange je avstrijski kavni napitek, značilen za dunajsko kavarniško kulturo, ki je od leta 2011 vpisana na avstrijski nacionalni seznam kulturne dediščine pri UNESCO. Pripravljen je iz blažjega espressa (espresso, ki se mu doda vroča voda), enake količine parjenega mleka in plasti mlečne pene na vrhu (1:1) – lahko ga razumemo kot nežnejšega dunajskega sorodnika cappuccina. V primerjavi s cappuccinom je vse pri njem nekoliko blažje – od manj intenzivnega espressa do nežnejše mlečne pene. Količinsko napitka običajno znese okoli 200 mL z vsebnostjo kofeina okoli 50 mg. Postreže se ga vročega v majhni skodelici. Čeprav se tudi na samem Dunaju lahko zgodi, da ko naročiš Wiener Melange, postrežejo espresso con panna.",
    preparation: "Za pripravo napitka, najprej s pomočjo espresso aparata pripravimo eno porcijo espressa (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg), ki jo nato razredčimo z vročo vodo do okoli 80 mL. S pomočjo istega aparata pripravimo tudi parjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), 80 mL, s katerim prekrijemo osnovo. Na koncu napitek prekrijemo še s cca. 40 mL mlečne pene, ki jo pripravimo s penilnikom mleka.",
    caffeine: {min: 1.5, max: 2},
    alternativeNames: "Café Vienna, Vienna coffee, Melange (globalno).",
    origin: "Dunaj, Avstrija, 19. stoletje."
},

{
    id: "spanish latte",
    name: "Spanish latte",
    category: "milk",
    cardImage: "images/spanish_latte.jpg",
    detailImage: "images/spanish_latte_1.jpg",
    description: "Spanish latte je sodoben kavni napitek iz espressa, parjenega mleka in sladkanega kondenziranega mleka v približnem razmerju 2:5:1. Kljub imenu ga Španija ni izumila – napitek se je kot sodoben kavni trend pojavil predvsem v kavnih verigah v Združenih arabskih emiratih, Savdski Arabiji in na Filipinih. Postreže se lahko vroč ali z ledom v veliki skodelici ali kozarcu. Znese ga okoli 240 mL in vsebuje do 128 mg kofeina. Za sladkost poskrbi kondenzirano mleko, ki napitku daje bolj zaokrožen in izrazito sladek okus kot pri latte-ju. Navdih črpa iz španskega café con leche in napitka leche y leche iz Kanarskih otokov.",
    preparation: "Za pripravo napitka, najprej pripravimo sladkano kondenzirano mleko. Polnomastnemu mleku dodamo sladkor v razmerju od 1:2 do 1:3. Mešamo in počasi segrevamo, dokler ne izhlapi cca. 60 % vode. 30 mL sladkanega kondenziranega mleka nato prelijemo velik kozarec ali skodelico. Nato s pomočjo espresso aparata pripravimo dve porciji espressa oz. doppio (fino mleta kava in do 96 °C voda, 30 sekundna ekstrakcija tekoče-trdno pri cca. 9 barg), kar znese 60 mL. Tega prilijemo sladkanemu kondenziranemu mleku. Na koncu s pomočjo istega aparata pripravimo tudi parjeno mleko (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), 150 mL in ga dodamo v kozarec oz. skodelico.",
    caffeine: 2.5,
    alternativeNames: "-",
    origin: "ZAE, 2. desetletje 21. stoletja."
},

{
    id: "butter coffee",
    name: "Butter coffee",
    category: "milk",
    cardImage: "images/butter.jpg",
    detailImage: "images/butter_1.jpg",
    description: "Butter coffee je pripravljen kavni napitek (način priprave ni pomemben), zmešan z neslanim maslom in MCT (angl. medium-chain triglyceride, slo. srednjeverižni trigliceridi) ali kokosovim oljem. Pri mešanju komponent se maščobe emulgirajo, zato nastane penast in kremast napitek. Količina napitka je običajno do 300 mL, vsebnost kofeina pa do 95 mg. Gre za ameriški trend 21. stoletja, povezan z blagovno znamko Bulletproof, ki jo je populariziral podjetnik Dave Asprey. Navdih za znamko je predstavljal tradicionalni tibetanski čaj z maslom iz jakovega mleka, imenovan po cha. Butter coffee se pogosto uživajo ljudje pri zajtrku, ki sledijo keto dieti, za katero je značilen visok vnos maščob in nizek vnos ogljikovih hidratov. Domnevne zdravstvene trditve, povezane z napitkom, so predmet razprav. Mnogi zagovorniki butter coffee-ja trdijo, da zagotavlja dolgotrajnejšo energijo, izboljšuje mentalno jasnost in pomaga pri izgubi telesne mase, predvsem z zmanjševanjem občutka lakote. Ker neposrednih raziskav o zdravstvenih koristih in tveganjih napitka ni veliko, lahko njegove učinke ocenjujemo predvsem na podlagi raziskav posameznih sestavin. V eni od raziskav so moški, ki so štiri tedne uživali zajtrk z 22 g MCT-olja, pri kosilu zaužili približno 220 kcal manj in izgubili več telesne maščobe kot skupina, ki je pri zajtrku uživala predvsem dolgoverižne maščobe. Ni pa dokazov, da bi samo dodajanje MCT olja brez drugih sprememb prehrane povzročilo izgubo telesne mase. MCT se lahko neposredno uporabijo kot vir energije ali pa jih telo pretvori v ketone, ki nastajajo v jetrih iz maščobnih kislin in lahko služijo kot energijski vir. To nakazuje na morebitni energijski učinek napitka. Butter coffee se na račun energijskega učinka pogosto oglašuje tudi kot napitek, ki izboljšuje mentalno jasnost in kognitivne sposobnosti (več energije za možgane). Čeprav je uporaba ketonov kot vira energije za možgane raziskana pri nekaterih nevrodegenerativnih boleznih, ni dokazov, da MCT oziroma ketoni pri zdravih ljudeh izboljšujejo mentalno jasnost. Bolj verjetno je, da občutek večje zbranosti in budnosti po uživanju napitka izvira predvsem iz kofeina v kavi, za katerega obstajajo precej boljši dokazi o izboljšanju budnosti in pozornosti.",
    preparation: "Za napitek najprej pripravimo cca. 270 mL kavne osnove, ki je lahko na katerikoli način pripravljen kavni napitek, bodisi drip coffee, french press coffee, itd. Priprava vsake posamezne osnove je opisana v rubriki “Načini priprave” tega vodnika. Kavni osnovi nato dodamo par žlic neslanega masla in 15 mL MCT ali kokosovega olja ter premešamo.",
    caffeine: 2,
    alternativeNames: "Bulletproof coffee, fat coffee, oily coffee (angleško govoreče države), keto coffee (globalno).",
    origin: "ZDA, 1. desetletje 21. stoletja."
},
    
{
    id: "dirty chai",
    name: "Dirty chai",
    category: "milk",
    cardImage: "images/dirty_chai.jpg",
    detailImage: "images/dirty_chai_1.webp",
    description: "Dirty chai je chai latte (začinjen črni čaj, pogosto masala chai, s parjenim mlekom), ki je “umazana” z od eno do dvema porcijama espressa (doppio). Napitek se postreže vroč ali z ledom pogosto v veliki skodelici, saj ga znese okoli 300 mL. Začinjeni čaj in espresso skupaj povečata vsebnost kofeina, ki znaša med 100 mg in 160 mg na skodelico. Napitek združuje tople in sladke začimbe, kot so cimet, kardamom, klinčki, ingver in črni poper, z bogatim in izrazitim okusom kave. Obstaja anekdota, da je napitek nastal po nesreči, ko je barista v londonski kavarni pomotoma v chai latte gostu dodal espresso.",
    preparation: "Za pripravo napitka dirty chai, najprej pripravimo sam čajni napitek iz ustreznega čaja in začimb, tako za čaj in začimbe namakamo v vrečki ali proste v vroči vodi (ekstrakcija trdno-tekoče). 85 mL čajnega napitka natočimo v veliko skodelico in dodamo 170 mL parjenega mleka (toplo mleko, ki ga segrejemo in kremasto prezračimo z vročo vodno paro), ki ga pripravimo s pomočjo espresso aparata. Z isto napravo pripravimo še cca. 45 mL espressa, ki ga na koncu dodamo na vrh napitka.",
    caffeine: {min: 2, max: 3},
    alternativeNames: "Java chai (Evropa), red-eye chai, or turbo-charger chai, tough-guy chai, (ZDA, Združeno kraljestvo), dirty chai latte, espresso chai (globalno).",
    origin: "Združeno kraljestvo in ZDA, 10. desetletje 20. stoletja."
},

{
    id: "drip coffee",
    name: "Drip coffee",
    category: "methods",
    cardImage: "images/drip.jpg",
    detailImage: "images/drip_1.webp",
    description: "Drip coffee (slo. dobesedno kapljični kavni napitek, oz. filtriran kavni napitek) je način priprave kavnega napitka, izveden s pomočjo gravitacije, pri čemer vroča voda prehaja skozi mleto kavo (čemur pravimo perkolacija), ki je v papirnatem ali kovinskem filtru. Ta način priprave sega do Nemke Melitte Bentz, ki je patentirala papirnati filter za kavo. Rezultat je čist in uravnotežen kavni napitek, ki ga je mogoče pripraviti v večjih količinah. Za standardno količino 240 mL znese vsebnost kofeina od 95 mg. Ima pa drip coffee problem, da je tekočina, ki priteče skozi filter na začetku močnejša (višja koncentracija) kot ta, ki priteče kasneje. Razlog je v tem, da je z napredovanjem ekstrakcije iz kavne usedline na voljo vedno manj snovi. Tako se pojavi problem, kako narediti dve enako močni skodelici iz ene šarže. Matematično je bilo pokazano, da je mogoče primerljivo moč oziroma koncentracijo dveh skodelic doseči z uporabo Thue–Morseovega zaporedja prelivanja močnejše in šibkejše tekočine med seboj. Gre za najpogostejši način priprave kavnega napitka v Severni Ameriki. Če je v Severni Ameriki in Skandinaviji na meniju navedena samo »kava«, bodo skoraj vedno postregli prav to. V kavarnah tretjega sveta se isti način priprave pogosto trži pod imenom batch brew.",
    caffeine: 2,   
    alternativeNames: "Regular coffee (Severna Amerika, Skandinavija), filter coffee, drip-brew, brewed coffee (globalno).",
    origin: "Francija, 19. stoletje (koncept). ZDA, 1908 (moderni način)."
},

{
    id: "pour-over",
    name: "Pour-over",
    category: "methods",
    cardImage: "images/pour-over.jpg",
    detailImage: "images/pour-over_1.jpg",
    description: "Pour-over (slo. prelito čez) je ročni način priprave kavnega napitka (podobno kot filtriran kavni napitek), pri kateri vročo vodo postopoma prelivamo čez mleto kavo. Gre za počasen in natančen gravitacijsko gnan način priprave, ki se je izpopolnil v japonskih kavarnah kissaten, pozneje pa ga je standardiziral predvsem oprema Hario V60, predstavljena leta 2005. V primerjavi z drip coffee način pour-over običajno proizvede čistejši in svetlejši napitek, pri katerem bolje pridejo do izraza značilnosti izvora kavnih zrn. Priprava pour-over se običajno začne tako, da papirnati filter prelijemo z majhno količino vroče vode, s čimer odstranimo morebiten okus po papirju. Nato dodamo mleto kavo in jo enakomerno poravnamo. Na kavo zlijemo manjšo količino vroče vode in počakamo približno 40 sekund, preden nadaljujemo s prelivanjem. To predhodno omočenje, imenovano “blooming” (slo. cvetenje), povzroči sproščanje ogljikovega dioksida (CO₂) iz kavne usedline v obliki mehurčkov ali pene ter lahko izboljša okus napitka. Preostalo odmerjeno količino vode nato počasi in enakomerno dolivamo s krožnimi gibi čez kavo, kar omogoča počasnejšo perkolacijo in ekstrakcijo trdno-tekoče. Prehitro dolivanje lahko povzroči bolj vodeno napitek, medtem ko lahko počasnejše prelivanje ustvari bogatejši okus. Za standardno količino 240 mL znese vsebnost kofeina od 95 mg. V nasprotju s pripravo v francoski stiskalnici (french press), kjer je kavna usedlina ves čas potopljena v vodi, pour-over omogoča natančnejši nadzor nad ekstrakcijo. Tudi dodatno mešanje oziroma premikanje kavne usedline, na primer z rahlim vrtenjem, lahko izboljša ekstrakcijo.",
    caffeine: 2, 
    alternativeNames: "Hand-drip coffee, manual drip (angleško govoreče države), filter coffee (globalno).",
    origin: "ZDA, Japonska, začetek 20. stoletja."
},
    
{
    id: "french press",
    name: "French press",
    category: "methods",
    cardImage: "images/french_press.jpg",
    detailImage: "images/french_press_1.webp",
    description: "French press (slo. francoska stiskalnica) je način priprave kavnega napitka, pri katerem je mleta kava približno štiri minute popolnoma potopljena v vročo vodo, nato pa se ročno stisne skozi kovinsko mrežico. Sodobna oblika naprave je bila prvič patentirana v Italiji leta 1929, leta 1958 pa jo je izpopolnil Faliero Bondanini. Ker kovinska mrežica ne zadrži kavnih olj tako kot papirnati filter, je kava polnejša, težja in bogatejša kot pri načinih priprave, ki vključujejo papirnati filter. Gre za enega najbolj polnih kavnih napitkov v tem vodniku. Kavni napitek se pripravi tako, da v aparat damo grobo mleto kavo in vročo vodo pri temperaturi do 96 °C. Običajno se uporabi približno 30 g kave na 500 ml vode. Po okoli 4 minutah namakanja bat počasi potisnemo navzdol, s čimer ločimo usedlino od tekočine. Tekočino nato postrežemo. Za french press je najprimernejša groba pomletje (kot kuhinjska sol). Drobneje mleta kava ima manjšo prepustnost, zato je za potisk bata potrebne več sile, drobni delci pa lahko tudi preidejo skozi filter v napitek. Poleg tega se drobneje mleta kava hitreje ekstrahira, kar lahko povzroči neželen grenak okus. Za standardno količino 240 mL znese vsebnost kofeina od 107 mg. Ena od različic french press-a, imenovana tudi french pull ali reverse french press, kot filter uporablja mrežasto košarico, ki se povleče proti pokrovu in tako loči kavno usedlino od napitka. Druga različica, pri kateri se za kavno usedlino uporablja košarica, se imenuje american press. Pri tem se najprej v posodo doda vroča voda, nato pa se košarica z mleto kavo počasi potisne skozi vodo navzdol.",
    caffeine: 2, 
    alternativeNames: "Coffee press (angleško govoreče države), cafetière (Velika Britanija, Irska, Francija, Nizozemska), coffee plunger (Nova Zelandija, Avstralija, Južna Afrika), cafetière à piston (Francija), caffettiera a stantuffo (Italija), pressstempelkanne, stempelkanne, stabfilterkanne, kaffeepresse, bistrokanne (nemško govoreče države).",
    origin: "Francija, 1852 (koncept). Francija, 1958 (moderni način)."
},

{
    id: "aeropress",
    name: "Aeropress",
    category: "methods",
    cardImage: "images/aeropress.jpg",
    detailImage: "images/aeropress_1.webp",
    description: "Aeropress je naprava za pripravo kavnega napitka, ki podobno kot french press združuje namakanje in uporabo pritiska. Leta 2005 ga je v ZDA izumil inženir Alan Adler. Kava se običajno namaka v vroči vodi eno do dve minuti, nato pa se s pritiskom bata (kot pri brizgi) potisne skozi papirnati ali kovinski filter. Nastali kavni napitek je po intenzivnosti okusa nekje med drip coffee in espressom – je bolj koncentriran, gladek in manj grenak. Za standardno količino 240 mL znese vsebnost kofeina od 95 mg do 110 mg. Alan Adler, inženir s Stanforda, je sicer izumil tudi leteči obroč Aerobie, zato ni naključje, da je pri zasnovi Aeropressa posebno pozornost namenil fiziki bata in pritiska. Leta 2019 je podjetje AeroPress Inc. predstavilo AeroPress Go, potovalno različico z manjšo prostornino in manjšimi dodatki, ki se zložijo v plastično skodelico s pokrovom. Avgusta 2021 je kanadska družba Tiny Capital pridobila večinski delež v podjetju AeroPress Inc. V naslednjih letih je podjetje predstavilo še več različic in dodatkov, med drugim: AeroPress XL (različica z dvojno prostornino, ki vključuje plastično karafo), AeroPress Premium in AeroPress Steel (naprednejša modela z dvojno steno iz stekla oziroma kovine), AeroPress Go Plus (prenovljena različica modela Go z izolirano potovalno skodelico) ter različne prozorne in barvne različice obstoječih modelov.",
    caffeine: 2,
    alternativeNames: "-",
    origin: "ZDA, 2005."
},

{
    id: "moka pot coffee",
    name: "Moka pot coffee",
    category: "methods",
    cardImage: "images/moka_pot.jpg",
    detailImage: "images/moka_pot_1.webp",
    description: "Moka pot coffee (slo. kavni napitek iz Moka kavnika) je močan kavni napitek, pripravljen na štedilniku s pomočjo tlaka vodne pare, ki znaša približno 1,5 barg. Voda se na dnu kavnika segreje, kar povzroči, da se tlak v prekatu dvigne (višji parni tlak vode in ekspanzija ujetega zraka) in potisne vodo navzgor skozi sloj mlete kave. Ekstrakt gre nato skozi filter in v zgornji prekat, kjer se zbira končni napitek. Napitka običajno znese okoli 60 mL (tradicionalna velikost Moka kavnika) in vsebuje cca. 100 mg kofeina. Rezultat naprave je temna in intenzivna tekočina, podobna espressu, vendar je tlak precej nižji od cca. 9 barg, ki se uporablja pri pripravi espressa, zato jo poznavalci praviloma označujejo kot močan kavni napitek in ne kot pravi espresso. Kavnik je znan po značilni osmerokotni obliki, ki ga je Alfonso Bialetti v sodelovanjju z inženirjem Luigijem Di Pontijem leta 1933 začel izdelovati v Italiji. Ime izhaja iz mesta Mokha v Jemnu, ki je bilo zgodovinsko pomembno središče svetovne trgovine s kavo. Izvirnik in številni sodobni modeli so izdelani iz aluminija z ročajem iz bakelita, obstajajo pa tudi izvedbe iz nerjavnega jekla in drugih zlitin. Nekateri modeli imajo zgornji del iz toplotno odpornega stekla. Med različicami Moka kavnika, ki so se pojavile od 4. desetletja 20. stoletja, so tudi modeli, ki imajo v spodnjem delu vgrajen električni grelni element, omogočajo hitrejšo pripravo kave (vgrajen regulacijski ventil, ki omogoča hitrejši porast tlaka, višji tlak in temperaturo v kavniku, kar pomeni hitrejšo ekstrakcijo), pripravo mlečne pene in pripravo kave tudi z mikrovalovi.",
    caffeine: 2,
    alternativeNames: "Moka, macchinetta, la macchinetta, caffettiera (Italija), stovetop espresso (angleško govoreče države).",
    origin: "Prusija, 1818 (koncept). Italija, 1933 (moderni način)."
},

{
    id: "percolator coffee",
    name: "Percolator coffee",
    category: "methods",
    cardImage: "images/percolator.jpg",
    detailImage: "images/percolator_1.jpg",
    description: "Percolator coffee (slo. kavni napitek iz perkolatorja) je kavni napitek, ki se pripravi v posebni posodi imenovani perkolator. Princip priprave sledeč. Voda se na dnu prekolatorja segreje neposredno z električno energijo ali preko štedilnika. Voda se privede do vretja, kar povzroči porast tlaka v prekatu z vodo (nastajanje vodne pare in širjenje zraka nad gladino). Ta tlak potisne vodo po vertikalni cevi na vrh perkolatorja, da zadane spodnji del pokrova. Voda nato teče nazaj navzdol v spodnji prekat in spotoma preide sloj grobo mlete kave (čemur pravimo perkolacija), ki je imobilizirana  na filtru in držalu med spodnjim in zgornjim prekatom. Ta proces se večkrat ponovi. Obratovanje je podobno kot pri Moka kavniku (Moka pot), le da pri njem voda le enkrat preide skozi sloj mlete kave. Večkratno pretakanje vrele vode ustvari močno, izrazito tradicionalno kavo, vendar brez nežnosti in prefinjenosti, značilne za sodobnejše načine priprave. To lahko privede tudi do prekomerne ekstrakcije (preveč grenak napitek), a strokovnjaki vedo na kateri točki proces ustaviti, da dobijo želeni rezultat. Za standardno količino 240 mL znese vsebnost kofeina med 95 mg do 140 mg. Ta način priprave izvira iz Pariza leta 1819, pozneje pa so ga izpopolnili v ZDA, kjer je Hanson Goodrich leta 1889 patentiral različico za pripravo na štedilniku. Kasneje pa so se razvile različice na električno energijo. Veliki perkolatorji, imenovani kavne žare, se pogosto uporabljajo v pisarnah, menzah, na skupnostnih in cerkvenih srečanjih ter drugih dogodkih, kjer je treba naenkrat pripraviti večje količine kave.",
    caffeine: {min: 2, max: 2.5},
    alternativeNames: "-",
    origin: "München, kraljevina Bavarska, med 1810 in 1814 (koncept). ZDA , sredina 20. stoletja (moderni način)."
},

{
    id: "siphon coffee",
    name: "Siphon coffee",
    category: "methods",
    cardImage: "images/siphon.jpg",
    detailImage: "images/siphon_1.jpeg",
    description: "Siphon coffee (slo. sifonski kavni napitek) je napitek, pripravljen z vakuumsko metodo, pri kateri parni tlak potisne vodo navzgor iz spodnje komore v mleto kavo, nato pa vakuum pripravljeno kavo potegne nazaj v spodnjo komoro. Pri segrevanju vode (običajno s plamenom gorilnika) v spodnji posodi se poveča parni tlak vode in volumen zraka nad njeno gladino. To privede do porasta tlaka v spodnji posodi in, ko ta preseže atmosferski tlak, voda steče po vertikalni sifonski cevi v zgornjo odprto posodo, kamor takrat ročno dodamo žlico mlete kave. Med kavo in vodo poteka ekstrakcija trdno-tekoče pod minuto. Celoten napitek se zdržuje v zgornji posodi zaradi razlike tlakov med obema posodama (višji tlak od spodaj). Kavni napitek se pripravlja pri temperaturi nekoliko pod 100 °C. Ko prekinemo segrevanje, se spodnja posoda začne ohlajati. Tlak v njej se zmanjša, zato kombinacija gravitacije in atmosferskega tlaka potisne oziroma povleče pripravljeno kavo nazaj v spodnjo posodo. Kavna usedlina ostane ujeta v zgornji posodi zardadi vmesnega filtra. Moka kavnik deluje na podoben princip, vendar se voda pri njem iz spodnje posode potiska navzgor skozi srednji prostor z mleto kavo v zgornjo posodo in tam ostane. Napravo je izumil fizik Johann Nörrenberg v Nemčiji leta 1827. Rezultat naprave je izjemno čista in jasna kava, skoraj podobna čaju, pri čemer izgled naprave in način priprave ustvarita tudi svojevrsten vizualni spektakel. Od njegovega izuma so se vakuumski kavni aparati uporabljali v različnih delih sveta. Čeprav so bili za vsakodnevno uporabo precej zapleteni, so bili cenjeni in priljubljeni približno do sredine 20. stoletja. Še danes so precej razširjeni v nekaterih delih Azije, zlasti na Japonskem (kavarne kissaten) in Tajvanu. Zasnova vakuumskih kavnih aparatov se razlikuje. Posode so ponavadi izdelane iz borosilikatnega stekla, kovine ali plastike (pogosto je, da je material transparenten). Zgodnja različica aparata se imenuje ravnotežni sifon ali belgijski kuhar (angl. belgian brewer). Pri njem sta posodi nameščeni druga ob drugi na napravi, podobni tehtnici, ogrevana posoda pa ima pritrjeno protiutež. Ko parni tlak potisne vročo vodo iz ogrevane posode, protiutež sproži vzmetni mehanizem, ki ugasne plamen. Posoda se nato začne ohlajati, tlak v njej pade in nastali vakuum povzroči, da pripravljena kava steče nazaj v spodnjo posodo. Obstajajo pa tudi moderne različice, ki se segrevajo neposredno z elektirčno energijo.",
    caffeine: 2,
    alternativeNames: "Syphon coffee (Velika Britanija, Azija), vacuum pot coffee, vac pot coffee, vacuum brewer coffee, vacuum coffee (globalno).",
    origin: "Nemčija, 1827 (koncept). ZDA, začetek 20. stoletja (moderni način)."
},

{
    id: "cowboy coffee",
    name: "Cowboy coffee",
    category: "methods",
    cardImage: "images/cowboy.jpg",
    detailImage: "images/cowboy_1.jpg",
    description: "Cowboy coffee je kavni napitek, pri čigar pripravi ne potrebujemo filtra, značilna za ameriški zahod. Pripravi se tako, da se najprej v loncu zavre vodo (na plamenu ali štedilniku). Voda se nato odstavi od vira toplote in doda se grobo mleta kava. Nato se vse skupaj dobro premeša in pusti stati 5 minut. Za lažje usedanje kave se pogosto uporabi dodatek (prš) hladne vode ali jajčna lupina. Jajčna lupina ni zgolj mit – njena alkalnost lahko dejansko zmanjša kislost napitka. Na koncu se napitek dekantira v skodelico. Rezultat je močan, poln in precej robusten kavni napitek z leseno-dimnim priokusom (v primeru tredicionalne uporabe tabornega ognja) in brez kavne kreme. Za standardno količino 240 mL znese vsebnost kofeina med 95 mg do 120 mg. Cowboy coffee ima tudi skandinavskega sorodnika, imenovanega kokekaffe. Gre za skoraj enak način priprave – mleta kava se zavre neposredno v vodi, nato pa se kavna usedlino pusti, da se usede.",
    caffeine: 2,
    alternativeNames: "Campfire coffee, boiled coffee, camping coffee (ZDA).",
    origin: "ZDA, 19. stoletje."
},

{
    id: "instant coffee",
    name: "Instant coffee",
    category: "methods",
    cardImage: "images/instant.jpg",
    detailImage: "images/instant_1.jpg",
    description: "Instant coffee (slo. dobesedno takojšnji kavni napitek oz. instant kavni napitek) je napitek, pripravljen iz pripravka z istim imenom (instant coffee, slo. instant kava) in mrzlo ali vročo vodo. Pripravek je izdelan tako, da se surova kavna zrna najprej pražijo, da se razvijeta njihov okus in aroma. Praženje poteka v vrtljivih bobnastih pečeh, ki dosežejo do 165 °C od 8 minut do 15 minut. Nato se zrna ohladijo in zmeljejo na delce velikosti med 0,5 mm in 1,1 mm. Nato sledi ekstrakcija trdno-tekoče, ki se lahko izvede na različne načine (kot drip coffee, siphon coffee, percolator coffee itd.) s pomočjo industrijskih naprav. Tako se pridobi tekoči ekstrakt in glavni stranski produkt – osiromašena kavna usedlina. Slednjo je mogoče uporabiti kot biomaso, na primer za proizvodnjo toplote, potrebne v samem proizvodnem procesu. Ekstraktu se nato s pomočjo vakuumskega izparevanja odstrani večina vode, da nastane viskozni ekstrakt. V končni produkt (pripravek za instant kavni napitek) pa dobljen viskozni ekstrakt posušijo z razprševanjem ali z zamrzovanjem (liofilizacija). Glede na način priprave je lahko pripravek za napitek instant coffee v različnih oblikah, kot so granule, prah ali viskozna kapljevina. Za standardno količino 240 mL znese vsebnost kofeina okoli 62 mg. Prednosti pripravka vključujejo hitro pripravo, manjšo maso in prostornino pri transportu v primerjavi s celimi ali mletimi kavnimi zrni in dolgi rok uporabe. Kljub temu se lahko pripravek instant coffee pokvari oziroma poslabša, če ni shranjen na suhem. Prvi patent zanjo je bil podeljen na Novi Zelandiji leta 1890, razvoj pa so med letoma 1901 in 1910 nadaljevali z ameriškimi patenti. Leta 1938 pa je podjetje Nestlé z znamko Nescafé instant coffee razširilo po svetu. Instant coffee predstavlja približno četrtino trenutne svetovne porabe kave.",
    caffeine: 1.5,
    alternativeNames: "Soluble coffee, coffee crystals, coffee granules, coffee powder, powdered coffee, coffee extract, coffee concentrate, freeze-dried coffee (angleško govoreče države).",
    origin: "Nova Zelandija, 1890 (koncept). ZDA, 1938 (moderni način)."
},

{
    id: "iced",
    name: "Iced",
    category: "cold",
    cardImage: "images/iced.jpg",
    detailImage: "images/iced_1.jpg",
    description: ".",
     preparation: ".",
    caffeine: {min: 2, max: 3},
    alternativeNames: ".",
    origin: "."
},

{
    id: "cold brew",
    name: "Cold brew",
    category: "cold",
    cardImage: "images/cold_brew.jpg",
    detailImage: "images/cold_brew_1.jpg",
    description: "Cold brew je kavni napitek, pripravljen z namakanjem mletih kavnih zrn v hladni vodi. Pri cold brew-ju čas nadomesti toploto, zato je napitek običajno bolj gladek, manj kisel in opazno močnejši. Napitka se običajno pripravi okoli 480 mL, postreže pa se ga hladnega v velikem kozarcu. Porcija vsebuje približno 200 mg kofeina. Ker mleta kava pri cold brew-ju ni v stiku z vročo vodo, se iz nje izločijo drugačne spojine kot pri običajnih načinih priprave. Nekatere spojine v kavnih zrnih, med njimi kofein, olja in maščobne kisline, so namreč pri višjih temperaturah bolj topne. Zanimivo je, da lahko 24-urno hladno namakanje pri enaki prostornini napitka povzroči večjo vsebnost kofeina kot šestminutna priprava pri 98 °C. Čeprav imata hladno in vroče pripravljena kavna napitka lahko podobno pH vrednost, ima cold brew običajno nižjo titrabilno kislost, kar pomembno vpliva na zaznavo okusa. Ta način priprave je bil prvič dokumentiran na Japonskem, in sicer stoletja pred razmahom cold brew-a v ZDA v 2. desetletju 21. stoletja. Pogosto pripovedovana zgodba, da izvira iz nizozemskih trgovcev, je bolj zgodovinska legenda kot zanesljivo potrjeno dejstvo. Posebna različica je slow-drip cold brew, pri katerem voda pri sobni temperaturi počasi kaplja na mleto kavo več ur. Ta način je znan kot Kyoto-style, v vzhodni Aziji pa tudi kot dutch coffee.",
    preparation: "Napitek se pripravi tako, da se mleta kava dlje časa namaka v vodi. Običajno priprava traja med 12 ur in 24 ur, pri čemer namakanje (in s tem ekstrakcija trdno-tekoče) poteka pri sobni ali nižji temperaturi. Usedlino se pred postrežbo loči od tekočine z dekantiranjem, s papirnim filtrom, finim kovinskim sitom ali na primer s pomočjo french press-a. Na koncu ga po potrebi razredčimo z vodo in preljemo čez led.",
    caffeine: 3.5,
    alternativeNames: "Cold water extraction, cold pressing (angleško govoreče države), cold brew coffee (globalno).",
    origin: "Japonska, 17. stoletje."
},

];
