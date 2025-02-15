import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedLanguages = {
  en: "EN",
  de: "DE",
  lt: "LT"
}

const resources = {
  en: {
    translation: {
      //Header
      header_about: "Hello, I'm a Front-end developer focused on building responsive, interactive web apps using React.",
      work: "Projects",
      about: "About",
      contact: "Contacts",
      //Main 
      //Section_1
      section_1_text: "Driven by passion to create seamless, impactful web experiences daily, while continuously learning and improving.",
      // Section_2
      // Work
      recent_projects: "Recent projects",
      view_case: "View",
      close_case: "Close",
      description: "Description",
      technologies: "Technologies used",
      website: "Website",
      github: "Github",
      //Section_3
      //About
      me: "Me",
      name: "Antanas Varanauskas",
      who_am_i: "Front-end developer",
      what_i_do: "What i do",
      work_description: "As a passionate Front-end developer, I create interactive, responsive web applications with React, specializing in intuitive user interfaces and seamless experiences using modern web technologies.",
      skill_base_label_1: "Core Web Technologies",
      skill_base_content_1: "HTML5, CSS3, and JavaScript (ES6+).",
      skill_base_label_2: "React Development",
      skill_base_content_2: "React Component Architecture and State Management (Hooks, Context API).",
      skill_base_label_3: "Responsive Design & Compatibility",
      skill_base_content_3: "Responsive Web Design and Cross-Browser Compatibility.",
      skill_base_label_4: "Version Control & Deployment",
      skill_base_content_4: "Version Control (Git) and Deployment Processes.",
      skill_base_label_5: "Performance & Optimization",
      skill_base_content_5: "Performance Optimization and Code Efficiency.",
      working_technologies: "Technologies im working with:",
      // Section_4
      // Contact
      contact_text: "Let’s connect! I’m excited to collaborate and bring your innovative ideas to life together.",
      write_me_email: "Write me an E-Mail",
      // Cv
      download_cv: "Download",
      download_cv_tile: "Download my Resume.",
      download_cv_text: "Select your preferred language.",
      download_cv_EN: "English (EN)",
      download_cv_DE: "German (DE)",
      download_cv_LT: "Lithuanian (LT)",
      // Linkedin
      linkedin_text: "Connect with Me on LinkedIn.",

      // Footer
      to_up: "To up",

      // Projects
      // Project_1
      category_1: "Dynamic Pokédex with Interactive Features",
      project_description_1: "This interactive Pokédex allows users to explore detailed information about Pokémon, including their types, abilities, stats, weaknesses, and immunities. Features include a dynamic search bar, infinite scrolling to load more Pokémon, and a 'Favorites' system to save and manage favorite Pokémon using localStorage. The app is built with React and Material-UI, utilizing the PokéAPI for real-time data fetching. It also includes intuitive navigation, responsive design, and hover effects for an engaging user experience.",

      // Project_2
      category_2: "Welcome to DIA Games – Where Gaming Comes Alive!",
      project_description_2: "'DIA Games' is a vibrant and interactive game page designed to bring classic fun right to your screen! Featuring a collection of four exciting games – 'Find Match', 'Hangman', 'Tic Tac Toe', and 'Rock Paper Scissors' – this project combines entertainment and learning with every click. Built with HTML, CSS, JavaScript, React.js, and Bootstrap, the page delivers a seamless and responsive experience across all devices. A perfect blend of fun and functionality. 'DIA Games' is designed to keep you entertained and energized every time you play!",

      // Project_3
      category_3: "Explore Breathtaking Trails – Your Adventure Awaits!",
      project_description_3: "Embark on a journey with our 'Hiking Tours' page, where adventure and exploration meet! Featuring six thrilling destinations – Tibet, Java, Hong Kong, Kenya, Rome, and Torres Del Paine – this site offers the ultimate guide to the world's most scenic hiking trails. Discover the beauty of nature through detailed itineraries, breathtaking photos, and insider tips. The website includes sections such as 'About Us,' 'Our Services,' 'Featured Tours,' and a stunning 'Gallery' to help you visualize your next adventure. Built with HTML5, CSS3, JavaScript, SASS, and React.js, the site is fully responsive, ensuring a seamless experience whether you’re planning your trip or just daydreaming about your next adventure!",

      // Project_4
      category_4: "Experience the Thrill of the NFL – Stay Updated, Stay Ahead!",
      project_description_4: "Discover the Future of Digital Collectibles! Our exclusive landing page brings you the latest in NFTs, featuring unique and limited-edition digital assets. Stay informed with real-time updates, explore special releases, and gain early access to exclusive drops. Key sections like ‘Features,’ ‘About,’ and ‘Launch’ provide insights into upcoming NFT collections and opportunities to claim rare items. Early sign-ups unlock a free NFT, making this a must-visit for collectors and blockchain enthusiasts. Built with HTML, CSS, JavaScript, and React.js, the page delivers a sleek, responsive, and immersive experience. Join the next wave of digital innovation today!",

      // Project_5
      category_5: "Supreme Drive – Ignite Your Passion for Car Events!",
      project_description_5: "Experience the Ultimate Car Events with Supreme Drive! Supreme Drive is your gateway to exclusive car events where enthusiasts can register and participate in thrilling automotive experiences. Whether you're a racing fan, a supercar admirer, or just love the car scene, this platform connects you to upcoming events tailored to your passion. To access event details, users must sign up and log in. Once logged in, you can explore the list of upcoming events, view galleries, and check individual activities, ticket prices, and attendee lists. If an event catches your interest, simply fill out the registration form to secure your spot. Each event offers unique experiences, from high-speed track days to exotic car showcases. Built with HTML5, CSS3, JavaScript, React.js, JSON, Node.js, NoSQL, and MongoDB, Supreme Drive delivers a seamless and dynamic user experience. The platform ensures secure data management and real-time event updates, making it the perfect hub for car enthusiasts looking to engage in unforgettable events. Join Supreme Drive today and fuel your passion for cars like never before!"
    }
  },
  de: {
    translation: {
      //Header
      header_about: "Hallo, ich bin ein Front-End-Entwickler, der sich auf den Bau von responsiven, interaktiven Webanwendungen mit React konzentriert.",
      work: "Projekte",
      about: "Über",
      contact: "Kontakte",
      //Main 
      //Section_1
      section_1_text: "Getrieben von der Leidenschaft, täglich nahtlose, eindrucksvolle Web-Erlebnisse zu schaffen, während ich kontinuierlich lerne und mich verbessere.",
      // Section_2
      // Work
      recent_projects: "Neueste Projekte",
      view_case: "Ansehen",
      close_case: "Schließen",
      description: "Beschreibung",
      technologies: "Verwendete Technologien",
      website: "Webseite",
      github: "Github",
      //Section_3
      //About
      me: "Ich",
      name: "Antanas Varanauskas",
      who_am_i: "Frontend-Entwickler",
      what_i_do: "Was ich mache",
      work_description: "Als leidenschaftlicher Front-End-Entwickler erstelle ich interaktive, responsive Webanwendungen mit React und spezialisiere mich auf intuitive Benutzeroberflächen und nahtlose Erlebnisse mit modernen Webtechnologien.",
      skill_base_label_1: "Kern-Webtechnologien",
      skill_base_content_1: "HTML5, CSS3, und JavaScript (ES6+).",
      skill_base_label_2: "React-Entwicklung",
      skill_base_content_2: "React-Komponentenarchitektur und Zustandsverwaltung (Hooks, Context API).",
      skill_base_label_3: "Responsives Design & Kompatibilität",
      skill_base_content_3: "Responsives Webdesign und plattformübergreifende Kompatibilität.",
      skill_base_label_4: "Versionskontrolle & Bereitstellung",
      skill_base_content_4: "Versionskontrolle (Git) und Bereitstellungsprozesse.",
      skill_base_label_5: "Leistung & Optimierung",
      skill_base_content_5: "Leistungsoptimierung und Code Effizienz.",
      working_technologies: "Technologien, mit denen ich arbeite:",
      // Section_4
      // Contact
      contact_text: "Lass uns verbinden! Ich freue mich darauf, zusammenzuarbeiten und deine innovativen Ideen gemeinsam zum Leben zu erwecken.",
      write_me_email: "Schreiben Sie mir eine E-Mail",
      // Cv
      download_cv: "Herunterladen",
      download_cv_tile: "Laden Sie meinen Lebenslauf herunter.",
      download_cv_text: "Wählen Sie Ihre bevorzugte Sprache.",
      download_cv_EN: "Englisch (EN)",
      download_cv_DE: "Deutsch (DE)",
      download_cv_LT: "Litauisch (LT)",
      // Linkedin
      linkedin_text: "Vernetze dich mit mir auf LinkedIn.",

      // Footer
      to_up: "Nach oben",

      // Projects
      // Project_1
      category_1: "Dynamisches Pokédex mit interaktiven Funktionen",
      project_description_1: "Dieses interaktive Pokédex ermöglicht es den Nutzern, detaillierte Informationen über Pokémon zu erkunden, darunter ihre Typen, Fähigkeiten, Werte, Schwächen und Immunitäten. Zu den Funktionen gehören eine dynamische Suchleiste, unendliches Scrollen zum Laden weiterer Pokémon und ein 'Favoriten'-System, mit dem Pokémon in der lokalen Speicherung gespeichert und verwaltet werden können. Die App ist mit React und Material-UI entwickelt und nutzt die PokéAPI für das Abrufen von Echtzeitdaten. Sie bietet außerdem eine intuitive Navigation, ein responsives Design und Hover-Effekte für ein ansprechendes Benutzererlebnis.",

      // Project_2
      category_2: "Willkommen bei DIA Games – Wo Gaming lebendig wird!",
      project_description_2: "'DIA Games' ist eine lebendige und interaktive Spieleseite, die darauf ausgelegt ist, klassischen Spaß direkt auf Ihren Bildschirm zu bringen! Mit einer Sammlung von vier aufregenden Spielen – 'Find Match', 'Hangman', 'Tic Tac Toe' und 'Rock Paper Scissors' – kombiniert dieses Projekt Unterhaltung und Lernen mit jedem Klick. Erstellt mit HTML, CSS, JavaScript, React.js und Bootstrap, bietet die Seite ein nahtloses und responsives Erlebnis auf allen Geräten. Eine perfekte Mischung aus Spaß und Funktionalität. 'DIA Games' ist darauf ausgelegt, Sie bei jedem Spiel zu unterhalten und zu begeistern!",

      // Project_3
      category_3: "Entdecke atemberaubende Wanderwege – Dein Abenteuer wartet!",
      project_description_3: "Begib dich auf eine Reise mit unserer 'Hiking Tours'-Seite, wo Abenteuer und Entdeckung aufeinandertreffen! Mit sechs aufregenden Reisezielen – Tibet, Java, Hongkong, Kenia, Rom und Torres Del Paine – bietet diese Seite den ultimativen Leitfaden zu den malerischsten Wanderwegen der Welt. Entdecke die Schönheit der Natur durch detaillierte Reisepläne, atemberaubende Fotos und Insider-Tipps. Die Webseite umfasst Abschnitte wie 'Über uns', 'Unsere Dienstleistungen', 'Hervorragende Touren' und eine beeindruckende 'Galerie', um dir bei der Visualisierung deines nächsten Abenteuers zu helfen. Mit HTML5, CSS3, JavaScript, SASS und React.js gebaut, ist die Seite vollständig responsiv und bietet ein nahtloses Erlebnis, egal ob du deine Reise planst oder von deinem nächsten Abenteuer träumst!",

      // Project_4
      category_4: "Erlebe den Nervenkitzel der NFL – Bleib informiert, bleib vorn!",
      project_description_4: "Entdecke die Zukunft digitaler Sammlerstücke! Unsere exklusive Landingpage bringt dir die neuesten NFTs mit einzigartigen und limitierten digitalen Assets. Bleib mit aktuellen Updates informiert, entdecke besondere Veröffentlichungen und sichere dir frühzeitigen Zugang zu exklusiven Drops. Wichtige Bereiche wie ‚Features‘, ‚Über uns‘ und ‚Launch‘ bieten Einblicke in kommende NFT-Kollektionen und die Chance, seltene Stücke zu ergattern. Frühzeitige Anmeldungen erhalten ein kostenloses NFT – ein Muss für Sammler und Blockchain-Enthusiasten. Entwickelt mit HTML, CSS, JavaScript und React.js, bietet die Seite ein elegantes, responsives und immersives Erlebnis. Sei Teil der nächsten Welle digitaler Innovation!",

      // Project_5
      category_5: "Supreme Drive – Entfache deine Leidenschaft für Auto-Events!",
      project_description_5: "Erlebe die ultimativen Auto-Events mit Supreme Drive! Supreme Drive ist dein Tor zu exklusiven Auto-Events, bei denen Enthusiasten sich registrieren und an aufregenden automobilen Erlebnissen teilnehmen können. Ob Rennsport-Fan, Supersportwagen-Liebhaber oder einfach nur Autobegeistert – diese Plattform verbindet dich mit bevorstehenden Events, die perfekt zu deiner Leidenschaft passen. Um auf Eventdetails zuzugreifen, müssen sich Nutzer anmelden und einloggen. Nach dem Login kannst du eine Liste bevorstehender Events erkunden, Galerien ansehen und Informationen zu den einzelnen Aktivitäten, Ticketpreisen und Teilnehmerlisten einsehen. Wenn dich ein Event interessiert, kannst du einfach das Anmeldeformular ausfüllen und dir deinen Platz sichern. Jedes Event bietet einzigartige Erlebnisse – von rasanten Trackdays bis hin zu exklusiven Autoschauen. Supreme Drive wurde mit HTML5, CSS3, JavaScript, React.js, JSON, Node.js, NoSQL und MongoDB entwickelt, um ein nahtloses und dynamisches Benutzererlebnis zu gewährleisten. Die Plattform sorgt für eine sichere Datenverwaltung und Echtzeit-Updates zu den Events, sodass Auto-Enthusiasten unvergessliche Erlebnisse genießen können. Melde dich noch heute bei Supreme Drive an und entfalte deine Leidenschaft für Autos wie nie zuvor!"
    }
  },
  lt: {
    translation: {
      //Header
      header_about: "Sveiki, esu Front-end programuotojas, mano tikslas – kurti interaktyvias žiniatinklio programas naudojantis „React“.",
      work: "Projektai",
      about: "Apie",
      contact: "Kontaktai",
      //Main 
      //Section_1
      section_1_text: "Vedamas aistros kasdien kurti sklandžias ir įtraukiančias interneto svetaines, tuo pačiu tobulėdamas ir mokydamasis.",
      // Section_2
      // Work
      recent_projects: "Naujausi projektai",
      view_case: "Žiūrėti",
      close_case: "Uždaryti",
      description: "Aprašymas",
      technologies: "Naudojamos technologijos",
      website: "Į svetainę",
      github: "Github",
      //Section_3
      //About
      me: "Aš",
      name: "Antanas Varanauskas",
      who_am_i: "Front-end programuotojas",
      what_i_do: "Mano veikla",
      work_description: "Kaip aistringas Front-end kūrėjas, kuriu interaktyvias, pritaikomas žiniatinklio programas su „React“, specializuodamasis intuityviose naudotojo sąsajose ir sklandžioje veikloje naudojant šiuolaikines žiniatinklio technologijas.",
      skill_base_label_1: "Pagrindinės žiniatinklio technologijos",
      skill_base_content_1: "HTML5, CSS3, ir JavaScript (ES6+).",
      skill_base_label_2: "React kūrimas",
      skill_base_content_2: "React komponentų architektūra ir būsenos valdymas (Hooks, Context API).",
      skill_base_label_3: "Reaguojantis dizainas ir suderinamumas",
      skill_base_content_3: "Reaguojantis žiniatinklio dizainas ir tarpininkų suderinamumas.",
      skill_base_label_4: "Versijų valdymas ir diegimas",
      skill_base_content_4: "Versijų valdymas (Git) ir diegimo procesai.",
      skill_base_label_5: "Našumas ir optimizavimas",
      skill_base_content_5: "Veikimo optimizavimas ir kodo efektyvumas.",
      working_technologies: "Technologijos, su kuriomis dirbu:",
      // Section_4
      // Contact
      contact_text: "Susisiekime! Džiaugiuosi galėdamas bendradarbiauti ir kartu įgyvendinti jūsų novatoriškas idėjas.",
      write_me_email: "Parašykite man E-Mail",
      // Cv
      download_cv: "Atsisiųsti",
      download_cv_tile: "Atsisiųskite mano gyvenimo aprašymą.",
      download_cv_text: "Pasirinkite pageidaujamą kalbą.",
      download_cv_EN: "Anglų kalba (EN)",
      download_cv_DE: "Vokiečių kalba (DE)",
      download_cv_LT: "Lietuvių kalba (LT)",
      // Linkedin
      linkedin_text: "Susisiekime per LinkedIn.",

      // Footer
      to_up: "Į viršų",

      // Projects
      // Project_1
      category_1: "Dinaminis „Pokédex“ su interaktyviomis funkcijomis",
      project_description_1: "Šis interaktyvus „Pokédex“ leidžia vartotojams tyrinėti išsamią informaciją apie „Pokémon“ veikėjus, įskaitant jų tipus, gebėjimus, statistiką, silpnybes ir imunitetus. Funkcijos apima dinaminę paieškos juostą, begalinį slinkimą, leidžiantį įkelti daugiau „Pokémon“, ir „Mėgstamiausių“ sistemą, kuri leidžia išsaugoti bei tvarkyti mėgstamus „Pokémon“ naudojant localStorage. Programėlė sukurta naudojant React ir Material-UI, o realaus laiko duomenims gauti naudojama PokéAPI. Ji taip pat siūlo intuityvią navigaciją, prisitaikantį dizainą ir užvedimo efektus, užtikrinančius patrauklią vartotojo patirtį.",

      // Project_2
      category_2: "Sveiki atvykę į DIA Games – kur žaidimai atgyja!",
      project_description_2: "'DIA Games' yra gyvybinga ir interaktyvi žaidimų puslapis, sukurtas tam, kad klasikinius žaidimus pristatytų tiesiai į jūsų ekraną! Puslapyje pateikiama keturi įdomūs žaidimai – 'Find Match', 'Hangman', 'Tic Tac Toe' ir 'Rock Paper Scissors' – šis projektas sujungia pramogas ir mokymą kiekvienu paspaudimu. Sukurtas naudojant HTML, CSS, JavaScript, React.js ir Bootstrap, puslapis suteikia sklandžią ir reaguojančią patirtį visuose įrenginiuose. Tobulas pramogų ir funkcionalumo derinys. 'DIA Games' sukurtas tam, kad kiekvieną kartą žaidžiant jūs jaustumėtės malonumą ir įkvėpimą!",

      // Project_3
      category_3: "Išbandyk nuostabius žygių takus – tavo nuotykis prasideda!",
      project_description_3: "Leiskis į kelionę su mūsų 'Hiking Tours' puslapiu, kuriame prasideda nuotykiai ir atradimai! Šešios įspūdingos kryptys – Tibetas, Java, Honkongas, Kenija, Roma ir Torres del Paine – kviečia atrasti gražiausius pasaulio žygių maršrutus. Patirkite gamtos grožį per išsamiai aprašytus maršrutus, kvapą gniaužiančias nuotraukas ir vertingus patarimus. Svetainėje rasite skiltis „Apie mus“, „Mūsų paslaugos“, „Rekomenduojami turai“ ir nuostabią „Galeriją“, padėsiančią įsivaizduoti jūsų kitą nuotykį. Sukurta naudojant HTML5, CSS3, JavaScript, SASS ir React.js, ši svetainė yra visiškai pritaikyta visiems įrenginiams, užtikrinant sklandžią patirtį – tiek planuojant kelionę, tiek svajojant apie būsimus nuotykius!",

      // Project_4
      category_4: "Patirk NFL jaudulį – Būk informuotas, būk priekyje!",
      project_description_4: "Atrask skaitmeninių kolekcionuojamų daiktų ateitį! Mūsų išskirtinis puslapis pristato naujausius NFT su unikaliomis ir riboto leidimo skaitmeninėmis vertybėmis. Sek naujienas realiuoju laiku, atrask specialius leidimus ir gauk ankstyvą prieigą prie išskirtinių NFT kolekcijų. Tokie skyriai kaip „Funkcijos“, „Apie mus“ ir „Paleidimas“ suteikia įžvalgų apie būsimus NFT rinkinius bei galimybę įsigyti retus egzempliorius. Užsiregistruok dabar ir gauk nemokamą NFT – tai būtina kiekvienam kolekcininkui ir „blockchain“ entuziastui. Svetainė sukurta naudojant HTML, CSS, JavaScript ir React.js, užtikrinant modernų, patogų ir įtraukiantį vartotojo patyrimą. Prisijunk prie naujos skaitmeninės inovacijų bangos jau šiandien!",

      // Project_5

      category_5: "Supreme Drive – Uždek savo aistrą automobilių renginiams!",
      project_description_5: "Patirkite nepakartojamus automobilių renginius su „Supreme Drive“! „Supreme Drive“ – tai jūsų kelias į išskirtinius automobilių renginius, kuriuose galite užsiregistruoti ir dalyvauti įspūdinguose automobilių pasaulio įvykiuose. Nesvarbu, ar esate lenktynių entuziastas, superautomobilių gerbėjas ar tiesiog automobilių kultūros mylėtojas – ši platforma sujungia jus su artėjančiais renginiais, atitinkančiais jūsų aistrą. Norėdami peržiūrėti renginių informaciją, vartotojai turi užsiregistruoti ir prisijungti. Prisijungę galėsite naršyti būsimų renginių sąrašą, peržiūrėti galerijas bei susipažinti su renginių veiklomis, bilietų kainomis ir dalyvių sąrašu. Jei kuris nors renginys jus sudomins, galėsite užpildyti registracijos formą ir užsitikrinti vietą. Kiekvienas renginys siūlo unikalią patirtį – nuo greitų trasų dienų iki išskirtinių automobilių parodų. „Supreme Drive“ sukurtas naudojant HTML5, CSS3, JavaScript, React.js, JSON, Node.js, NoSQL ir MongoDB, užtikrinant sklandų ir dinamišką vartotojo patirtį. Platforma garantuoja saugų duomenų valdymą ir realaus laiko renginių atnaujinimus, todėl automobilių entuziastai gali mėgautis nepamirštamais įspūdžiais. Prisijunkite prie „Supreme Drive“ jau šiandien ir atraskite savo aistrą automobiliams iš naujo!" 
     
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false
  }
})

export default i18n;