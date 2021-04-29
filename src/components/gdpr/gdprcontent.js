import React from "react"
import { Container, Row, Col } from "reactstrap"

import classes from "./gdprcontent.module.scss"
import Logo from "../shared/image/logoWhite"

const GdprContent = () => {
  return (
    <div id="gdpr" className={classes.outerWrapper}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.overLay}></div>
      <div className={classes.noise}></div>
      <Container className={classes.innerWrapper}>
        <Row>
          <Col xl={{ size: 10, offset: 1 }}>
            <div className={classes.logo}>
              <Logo />
            </div>
            <h1 className={classes.firstHeader}>
              Integritetspolicy kandidater
            </h1>
            <p className={classes.text}>
              Posteris värnar om din integritet och strävar därför efter att
              alltid skydda dina personuppgifter på bästa sätt och följa alla
              vid var tid gällande lagar och regler för dataskydd.
            </p>
            <p className={classes.text}>
              Posteris AB, org.nr. 559237-9415 är personuppgiftsansvariga för
              behandlingen av dina personuppgifter. Mer information om detta kan
              du läsa nedan under rubriken ”När är Posteris AB
              personuppgiftsansvariga och vad innebär det?”.
            </p>
            <p className={classes.text}>
              Om du vill kontakta oss når du oss på 0768649030 och e-postadress
              gdpr@posteris.se
            </p>
            <h2 className={classes.secondHeader}>
              1. Genom denna integritetspolicy vill vi informera dig om hur dina
              personuppgifter behandlas av oss när du:
            </h2>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  är med i vårt kandidatnätverk; och/eller
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  kontaktar oss via vårt kontaktformulär eller e-post.
                </p>
              </li>
            </ul>
            <h2 className={classes.secondHeader}>
              2. Sammanfattningsvis behandlar vi dina personuppgifter för
              följande övergripande ändamål:
            </h2>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  om du är med i vårt kandidatnätverk: för att administrera din
                  kandidatprofil samt matcha dig mot lediga tjänster, samt för
                  att göra e-postutskick för att upprätthålla relationen till
                  Posteris
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  för att bevaka Posteris rättsliga intressen i samband med
                  eventuella rättsliga tvister, t.ex. diskrimineringstvister,
                  och/eller reklamationer som du är inblandad i (direkt eller
                  indirekt);
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  för att göra marknadsundersökningar och/eller utvärderingar;
                  och/eller
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  för att annars kommunicera med dig om du kontaktat oss genom
                  vårt kontaktformulär eller via e-post.
                </p>
              </li>
            </ul>
            <h2 className={classes.secondHeader}>
              3. Vill du veta mer om hur vi behandlar dina personuppgifter?
            </h2>
            <p className={classes.text}>
              Vi lämnar mer detaljerad information om hur vi behandlar dina
              personuppgifter nedan.
            </p>
            <p className={classes.text}>
              Genom att läsa vår integritetspolicy kommer du bland annat:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  få information om vilka personuppgifter vi behandlar om dig
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  vilken laglig grund vi förlitar oss på för behandlingen
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  hur länge vi hanterar dina personuppgifter och vad ändamålet
                  för behandlingen av dina personuppgifter är
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  vilka rättigheter du har avseende vår behandling av dina
                  personuppgifter.
                </p>
              </li>
            </ul>
            <h2 className={classes.secondHeader}>
              4. Personuppgifter som vi behandlar om dig
            </h2>
            <p className={classes.text}>
              Vi behandlar olika personuppgifter beroende på vilken relation vi
              har med dig. Mer detaljerad information finns nedan.
            </p>
            <h3 className={classes.thirdHeader}>
              4.1 För dig som är med i vårt kandidatnätverk
            </h3>
            <p className={classes.text}>
              När du är med i vårt kandidatnätverk behandlar vi den information
              om dig som du lämnar till oss. Sådan information kan vara ditt
              namn, din e-postadress, telefonnummer, födelseår, nuvarande
              arbete, nuvarande titel/roll samt de filer som du väljer att lämna
              till oss i samband med registrering och därefter, t.ex. ditt CV,
              personligt brev, samt tjänstgöringsintyg och betyg. Din
              kandidatprofil kan även komma att kompletteras med uppgifter som
              du lämnar till oss under en rekryteringsprocess, t.ex. vid
              intervjuer samt de noteringar och intervjuanteckningar vi för, och
              genom att uppdatera din kandidatprofil.
            </p>
            <p className={classes.text}>
              Du kan välja att hämta din information från LinkedIn eller
              Facebook istället för att fylla i den själv när du går med i vårt
              kandidatnätverk. Om du hämtar information från LinkedIn får
              Posteris tillgång till ditt namn, din e-postadress, ditt
              telefonnummer och annan information som du har publicerat på din
              publika LinkedIn-profil. Om du låter oss hämta information från
              din Facebook-profil får Posteris tillgång till ditt namn, din
              e-postadress, ditt telefonnummer, ditt födelseår (valfritt),
              nuvarande arbete (valfritt), nuvarande titel/roll (valfritt).
              Väljer du därutöver att lämna andra dokument till oss, t.ex. ditt
              CV, personliga brev och tjänstgöringsintyg, kommer vi behandla den
              informationen. Posteris får inte tillgång till hela din
              Facebook-profil.
            </p>
            <p className={classes.text}>
              För att kunna göra e-postutskick till dig med information om
              tjänster som matchar din profil behandlar vi information om din
              e-postadress, utbildningsnivå, branscher du har erfarenhet av och
              din yrkesroll. För att kontakta dig angående att delta i våra
              marknadsundersökningar och/eller utvärderingar kan Posteris komma
              att behandla din e-postadress och/eller ditt telefonnummer.
              Resultatet av undersökningarna och/eller utvärderingarna kommer
              endast hanteras anonymt, och utgör därmed ingen personuppgift om
              dig.
            </p>
            <h3 className={classes.thirdHeader}>
              4.2 För dig som kontaktar oss via vårt kontaktformulär eller
              e-post
            </h3>
            <p className={classes.text}>
              När du använder vårt kontaktformulär eller skickar frågor via
              e-post till oss kommer vi behandla de personuppgifter du lämnar
              till oss i samband med detta, t.ex. ditt namn, din e-postadress,
              telefonnummer och eventuell övrig information som du skrivit i
              kontaktformuläret eller din e-post.
            </p>
            <h2 className={classes.secondHeader}>
              5. För vilka ändamål behandlar vi dina personuppgifter?
            </h2>
            <h3 className={classes.thirdHeader}>
              5.1 För dig som är med i vårt kandidatnätverk
            </h3>
            <h4 className={classes.fourthHeader}>
              5.1.1 För att administrera din kandidatprofil om du väljer att gå
              med i vårt kandidatnätverk
            </h4>
            <p className={classes.text}>
              När du går med i vårt kandidatnätverk kommer vi att behandla dina
              personuppgifter för att vi ska kunna behandla din profil i
              kandidatnätverket och matcha dig mot lediga tjänster.
            </p>
            <p className={classes.text}>
              Den lagliga grunden för behandlingen av dina personuppgifter när
              du är med i vårt kandidatnätverk är ditt samtycke. Om du inte
              lämnar dina uppgifter eller inte samtycker till att registreras i
              kandidatnätverket har vi inte möjlighet att spara dina uppgifter
              och matcha din profil mot lediga tjänster.
            </p>
            <h4 className={classes.fourthHeader}>
              5.1.2 Personlighets- och logiktester samt uppgifter från
              referenser
            </h4>
            <p className={classes.text}>
              Om du genomför ett personlighets- eller logiktest i samband med
              rekryteringen till en tjänst kan Posteris komma att spara
              resultatet av testet för att komplettera din kandidatprofil. Samma
              sak gäller uppgifter om dig som vi har fått från dina referenser.
            </p>
            <p className={classes.text}>
              Den lagliga grunden för att spara testresultat och/eller
              information från dina referenser är ditt samtycke.
            </p>
            <h4 className={classes.fourthHeader}>
              5.1.3 För att göra marknadsundersökningar och/eller utvärderingar
            </h4>
            <p className={classes.text}>
              Vi arbetar ständigt med att förbättra vår verksamhet. Vi kan
              därför komma att kontakta dig angående att delta i
              marknadsundersökningar och/eller utvärderingar.
            </p>
            <p className={classes.text}>
              Den lagliga grunden för behandlingen är vårt berättigade intresse
              av att kunna genomföra marknadsundersökningar och utvärderingar
              avseende våra tjänster för att kunna förbättra vår verksamhet och
              vårt tjänsteutbud.
            </p>
            <h3 className={classes.thirdHeader}>
              5.2 För dig som kontaktar oss via vårt kontaktformulär eller
              e-post
            </h3>
            <h4 className={classes.fourthHeader}>
              5.2.1 För att kommunicera med dig och svara på ditt meddelande
            </h4>
            <p className={classes.text}>
              För att kommunicera med dig och svara på ditt meddelande som du
              skickat via vårt kontaktformulär eller via e-post till oss.
            </p>
            <p className={classes.text}>
              Den lagliga grunden för behandlingen är vårt berättigade intresse
              av att kontakta dig som valt att kontakta oss och besvara ditt
              meddelande.
            </p>
            <p className={classes.text}>
              Om du som kontaktar oss är potentiell kandidat, söker en tjänst
              eller är med i vårt kandidatnätverk behandlar vi dina
              personuppgifter på det sätt som beskrivs ovan i denna policy under
              tillämpliga rubriker.
            </p>
            <h2 className={classes.secondHeader}>
              6. När är Posteris AB personuppgiftsansvarig och vad innebär det?
            </h2>
            <p className={classes.text}>
              Posteris AB är personuppgiftsansvarig för all den behandling av
              dina personuppgifter som beskrivs i denna policy.
            </p>
            <p className={classes.text}>
              Personuppgiftsansvaret innebär att Posteris AB ansvarar för att
              dina rättigheter enligt gällande dataskyddslagstiftning
              tillgodoses. Du kan alltid vända dig till Posteris AB för att
              utöva de rättigheter som beskrivs nedan under ”Dina rättigheter”.
            </p>

            <h2 className={classes.secondHeader}>
              7. Hur har vi gjort vår bedömning när vi behandlar uppgifter med
              intresseavvägning som laglig grund?
            </h2>
            <p className={classes.text}>
              När vi behandlar dina personuppgifter med stöd av en
              intresseavvägning som laglig grund för behandlingen har vi bedömt
              att vårt berättigade intresse av att utföra behandlingen väger
              tyngre än ditt intresse och dina grundläggande rättigheter av att
              inte få dina personuppgifter behandlade. Om du vill veta mer om
              hur vi har gjort bedömningen är du välkommen att kontakta oss.
              Våra kontaktuppgifter finns i början av denna integritetspolicy.
            </p>
            <h2 className={classes.secondHeader}>
              8. Vilka kan få tillgång till dina personuppgifter?
            </h2>
            <p className={classes.text}>
              Dina personuppgifter behandlas som utgångspunkt endast av
              Posteris. Vi kan dock komma att dela dina personuppgifter i
              enlighet med nedan.
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  När du ingår i en rekryteringsprocess kan vi så som beskrivet
                  ovan komma att dela vissa av dina personuppgifter med den
                  aktuella organisationen vars tjänst du visat intresse för
                  (d.v.s. Posteris AB:s kund). När vi delar dina personuppgifter
                  med kunden är kunden ensamt ansvarig för sin behandling av
                  dina personuppgifter.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  Vi kan även komma att dela dina personuppgifter med våra
                  interna och externa IT-leverantörer samt eventuella andra
                  leverantörer (såsom kreditupplysnings- och
                  bakgrundskontrollsföretag, leverantörer av
                  marknadsundersökningar, utvärderingar och personlighets- och
                  logiktest, samt leverantör av e-postutskick) som vi anlitar,
                  dock endast i den utsträckning det är nödvändigt i syfte att
                  de ska kunna fullgöra sina åtaganden i relation till Posteris.
                </p>
              </li>
            </ul>
            <h2 className={classes.secondHeader}>
              9. Hur länge sparar vi dina personuppgifter?
            </h2>
            <p className={classes.text}>
              Nedan anges hur länge Posteris sparar dina personuppgifter. Dina
              personuppgifter kan dock sparas längre än vad som anges nedan i
              den mån vi är skyldiga att spara dem längre enligt lag, förordning
              eller myndighetsbeslut. Observera att du kan omfattas av
              lagringstider under mer än en rubrik nedan, t.ex. om du söker en
              tjänst och även är med i vårt kandidatnätverk.
            </p>
            <h3 className={classes.thirdHeader}>
              9.1 För dig som är med i vårt kandidatnätverk
            </h3>
            <p className={classes.text}>
              När du väljer att gå med i vårt kandidatnätverk sparar vi de
              personuppgifter vi har om dig på din kandidatprofil i fem år eller
              tills du återkallar ditt samtycke eller annars begär att vi ska
              radera dina personuppgifter. Efter fem år kommer vi att kontakta
              dig för att fråga om du fortsättningsvis vill vara registrerad i
              vårt kandidatnätverk. En ny gallringsfrist om fem år påbörjas om
              du väljer att fortsätta vara registrerad.
            </p>
            <p className={classes.text}>
              Om du redan är med i kandidatnätverket och skickar en ny ansökan
              till en tjänst och då lämnar ditt samtycke till att vara
              registrerad i kandidatnätverket igen börjar en ny gallringsfrist
              om fem år att gälla, räknat från dagen då du samtycke igen. Om du
              i samband med din ansökan till en tjänst inte väljer att samtycka
              till att vara registrerad i kandidatnätverket kommer Posteris inte
              att uppdatera din profil. En ny gallringsfrist kommer då inte
              heller att påbörjas.
            </p>
            <p className={classes.text}>
              I vissa fall kan vi dock komma att behandla dina personuppgifter
              under annan tidsperiod än vad som anges ovan. Detta gäller i
              följande fall:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  Om du samtyckt till att göra ett personlighets- eller
                  logiktest eller att Posteris samlar in uppgifter om dig från
                  dina referenser kommer vi att spara detta i ett år från att
                  din kandidatprofil kompletterats med den aktuella
                  informationen.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  Vi kommer kontakta dig angående att delta i våra
                  marknadsundersökningar och/eller utvärderingar så länge du är
                  med i vårt kandidatnätverk. Vi upphör dock med behandlingen om
                  du invänder mot den.
                </p>
              </li>
            </ul>
            <h3 className={classes.thirdHeader}>
              9.2 För dig som kontaktar oss via vårt kontaktformulär eller
              e-post
            </h3>
            <p className={classes.text}>
              För att svara på ditt meddelande och hjälpa dig med ditt ärende
              när du använt kontaktformuläret på vår hemsida eller skickat ditt
              meddelande via e-post sparar vi dina personuppgifter från att du
              skickar ditt meddelande till oss och tills ditt ärende är
              avslutat.
            </p>
            <h2 className={classes.secondHeader}>
              10. Överför vi dina personuppgifter utanför EU/EES?
            </h2>
            <p className={classes.text}>
              Posteris behandlar som huvudregel dina personuppgifter inom
              EU/EES. I vissa fall kan vi dock komma att överföra dina
              personuppgifter utanför EU/EES till våra leverantörer (t.ex.
              leverantörer av tjänster för e-postutskick, personlighets- och
              logiktester samt marknadsundersökningar/utvärderingar).
            </p>
            <p className={classes.text}>
              När vi överför personuppgifter utanför EU/EES görs detta endast om
              vi har vidtagit lämpliga skyddsåtgärder för överföringen i
              enlighet med gällande lagar och regler för dataskydd. Vi kan t.ex.
              använda oss av så kallade modellklausulsavtal eller överföra till
              länder som EU-kommissionen har beslutat har en adekvat skyddsnivå
              avseende dataskydd.
            </p>
            <p className={classes.text}>
              Till USA kan överföring t.ex. ske till Privacy Shield-certifierade
              organisationer. Privacy Shield är ett avtal mellan EU och USA med
              syfte att skydda européers grundläggande rättigheter och att
              garantera rättssäkerhet för organisationer som överför
              personuppgifter till USA.
            </p>
            <p className={classes.text}>
              Om du har några frågor angående hur vi delar dina personuppgifter
              eller om du vill ha en kopia av de lämpliga skyddsåtgärder vi
              vidtagit är du välkommen att kontakta oss via de kontaktuppgifter
              som framgår i inledningen till integritetspolicyn.
            </p>
            <h2 className={classes.secondHeader}>11. Dina rättigheter</h2>
            <p className={classes.text}>
              Du har vissa rättigheter avseende behandlingen av dina
              personuppgifter, dessa beskrivs närmare nedan. För att utöva dina
              rättigheter är du välkommen att kontakta oss via de
              kontaktuppgifter som framgår i inledningen till den här policyn.
            </p>
            <h3 className={classes.thirdHeader}>
              11.1 Återkalla ditt samtycke
            </h3>
            <p className={classes.text}>
              Du har rätt att när som helst återkalla hela eller del av ett
              lämnat samtycke om behandling av personuppgifter. Återkallelsen av
              ditt samtycke får dock ingen effekt på vår behandling av dina
              personuppgifter för tiden innan återkallelsen ägde rum.
            </p>
            <h3 className={classes.thirdHeader}>11.2 Rätt till tillgång</h3>
            <p className={classes.text}>
              Du har rätt att få en bekräftelse på om personuppgifter som rör
              dig behandlas samt tillgång till information om hur
              personuppgifterna behandlas, t.ex. ändamålen med behandlingen och
              vilka kategorier av personuppgifter som behandlingen gäller. Du
              har även rätt att få en kopia av de personuppgifter som är under
              behandling.
            </p>
            <h3 className={classes.thirdHeader}>11.3 Rätt till rättelse</h3>
            <p className={classes.text}>
              Du har även rätt att utan onödigt dröjsmål få felaktiga
              personuppgifter rättade, samt genom att tillhandahålla information
              komplettera ofullständiga personuppgifter.
            </p>
            <h3 className={classes.thirdHeader}>
              11.4 Rätt till radering (rätten att bli bortglömd)
            </h3>
            <p className={classes.text}>
              Du har under vissa förutsättningar rätt att begära radering av
              dina personuppgifter. Sådana förutsättningar föreligger om:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  personuppgifterna inte längre är nödvändiga för de ändamål som
                  de samlats in eller behandlats för;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  du återkallar ditt samtycke som behandlingen grundar sig på
                  och det inte finns någon annan rättslig grund för
                  behandlingen;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  du invänder mot behandlingen och det saknas berättigade skäl
                  för att fortsätta med behandlingen som väger tyngre än dina
                  berättigade skäl att inte fortsätta;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  personuppgifterna har behandlats på olagligt sätt; eller
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  personuppgifterna måste raderas för att uppfylla en rättslig
                  förpliktelse som Posteris omfattas av.
                </p>
              </li>
            </ul>
            <p className={classes.text}>
              Posteris raderar dina personuppgifter på din begäran, under
              förutsättning att Posteris inte har en skyldighet att spara
              personuppgifterna i enlighet med gällande lagar och regler för
              dataskydd.
            </p>
            <h3 className={classes.thirdHeader}>
              11.5 Rätt till begränsning av behandling
            </h3>
            <p className={classes.text}>
              Du har under vissa förutsättningar rätt att begära att
              behandlingen av dina personuppgifter begränsas. Sådana
              förutsättningar föreligger om:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  du bestrider uppgifternas korrekthet (dock endast under en tid
                  som ger oss möjlighet att kontrollera detta);
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  behandlingen är olaglig och du motsätter dig att
                  personuppgifterna raderas samt istället begär en begränsning
                  av uppgifternas användning;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  du behöver personuppgifterna för att göra gällande eller
                  försvara rättsliga anspråk trots att vi inte längre behöver
                  personuppgifterna för syftet med behandlingen; eller
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  du har invänt mot behandlingen och vi inte utfört en kontroll
                  av om vårt berättigade intresse att behandla dina
                  personuppgifter väger tyngre än ditt berättigade skäl av att
                  behandlingen av dina personuppgifter begränsas.
                </p>
              </li>
            </ul>
            <h3 className={classes.thirdHeader}>
              11.6 Rätt att invända mot behandling
            </h3>
            <p className={classes.text}>
              Du har rätt att när som helst invända mot behandling av dina
              personuppgifter som görs med stöd av Posteris berättigade
              intresse. Om du invänder mot att dina personuppgifter behandlas
              för marknadsföringsändamål kommer dina personuppgifter inte längre
              att behandlas för sådana ändamål. För andra ändamål kan Posteris
              dock komma att fortsatt behandla dina personuppgifter, under
              förutsättning att Posteris kan påvisa tvingande berättigade skäl
              för behandlingen som väger tyngre än den registrerades intressen
              eller om det sker för fastställande, utövande eller försvar av
              rättsliga anspråk.
            </p>
            <h3 className={classes.thirdHeader}>11.7 Rätt att inge klagomål</h3>
            <p className={classes.text}>
              Du har rätt att lämna klagomål till en behörig tillsynsmyndighet
              (utan att det påverkar något annat administrativt
              prövningsförfarande eller rättsmedel). Ett sådant klagomål lämnas
              med fördel till myndigheten i den medlemsstat inom EU/EES där du
              har din hemvist, där du arbetar eller där en överträdelse av
              gällande lagar och regler för dataskydd påstås ha förekommit.
              Behörig tillsynsmyndighet i Sverige är Datainspektionen.
            </p>
            <h3 className={classes.thirdHeader}>
              11.8 Rätt till dataportabilitet
            </h3>
            <p className={classes.text}>
              Du har rätt att få ut och be oss överföra de personuppgifter som
              rör dig, som du har tillhandahållit oss, till en annan
              organisation i ett strukturerat, allmänt använt och maskinläsbart
              format (dataportabilitet). Rätten till dataportabilitet föreligger
              när:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  behandlingen grundar sig på ditt samtycke; och
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>behandlingen sker automatiserat.</p>
              </li>
            </ul>
            <p className={classes.text}>
              Du har rätt till överföring av personuppgifterna direkt från oss
              till en annan personuppgiftsansvarig när detta är tekniskt
              möjligt.
            </p>
            <hr className={classes.hr} />
            <p className={classes.text}>
              Denna integritetspolicy för kandidater har fastställts av Posteris
              AB 2020-01-04
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GdprContent
