import type { Metadata } from 'next'
import Footer from '../../components/footer'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Stahl & Söhne KG | DSGVO-konform',
  description: 'Datenschutzerklärung der Stahl & Söhne KG gemäß österreichischem Recht und DSGVO. Informationen über die Verarbeitung Ihrer personenbezogenen Daten.',
  keywords: 'Datenschutz, DSGVO, Datenschutzerklärung, Österreich, Stahl & Söhne KG, GDPR',
  robots: 'index, follow',
  openGraph: {
    title: 'Datenschutzerklärung - Stahl & Söhne KG',
    description: 'DSGVO-konforme Datenschutzerklärung gemäß österreichischem Recht',
    type: 'website',
    url: 'https://stahldigital.at/rechtliches/datenschutz',
  }
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
        <div className="max-w-7xl mx-auto mt-12 px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Informationen über die Verarbeitung Ihrer personenbezogenen Daten gemäß 
              österreichischem Datenschutzrecht und der EU-Datenschutz-Grundverordnung (DSGVO).
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section id="datenschutz" className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* Verantwortliche Stelle */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Verantwortliche Stelle
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  <strong>Verantwortlicher:</strong> Stahl & Söhne KG<br />
                  <strong>Adresse:</strong> Fleischmarkt 1/6, 1010 Wien, Österreich<br />
                  <strong>E-Mail:</strong> <a href="mailto:office@stahldigital.at">office@stahldigital.at</a><br />
                  <strong>Telefon:</strong> <a href="tel:+436767734689">+43 676 773 46 89</a>
                </p>
                <p>
                  <strong>Firmenbuchnummer:</strong> FN 627558f<br />
                  <strong>Handelsgericht:</strong> Handelsgericht Wien
                </p>
              </div>
            </div>

            {/* Rechtsgrundlagen */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Rechtsgrundlagen der Datenverarbeitung
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage folgender Rechtsvorschriften:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="list-disc">Art. 6 Abs. 1 lit. a DSGVO - Einwilligung</li>
                  <li className="list-disc">Art. 6 Abs. 1 lit. b DSGVO - Vertragserfüllung</li>
                  <li className="list-disc">Art. 6 Abs. 1 lit. c DSGVO - Rechtliche Verpflichtung</li>
                  <li className="list-disc">Art. 6 Abs. 1 lit. f DSGVO - Berechtigte Interessen</li>
                </ul>
                <p>
                  <strong>Österreichisches Recht:</strong> Ergänzend gelten die Bestimmungen des 
                  österreichischen Datenschutzgesetzes (DSG) und des Telekommunikationsgesetzes (TKG).
                </p>
              </div>
            </div>

            {/* Erhobene Daten */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Welche Daten erheben wir?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                    Automatisch erhobene Daten
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Log-Dateien:</strong> IP-Adresse, Browsertyp, Zugriffszeit
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Cookies:</strong> Technisch notwendige Cookies für Website-Funktionalität
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Analytics:</strong> Anonymisierte Nutzungsdaten (Google Analytics)
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                    Von Ihnen bereitgestellte Daten
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Kontaktformulare:</strong> Name, E-Mail, Telefon, Nachricht
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Newsletter:</strong> E-Mail-Adresse (mit Einwilligung)
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Beratungsanfragen:</strong> Firmendaten, Projektbeschreibungen
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zweck der Datenverarbeitung */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Zweck der Datenverarbeitung
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>Wir verarbeiten Ihre personenbezogenen Daten für folgende Zwecke:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Website-Betrieb</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Bereitstellung der Website-Funktionalität</li>
                      <li>• Sicherheit und Stabilität der Website</li>
                      <li>• Technische Optimierung</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Kundenbetreuung</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Beantwortung von Anfragen</li>
                      <li>• Beratungsleistungen</li>
                      <li>• Vertragsabwicklung</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Marketing & Kommunikation</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Newsletter (nur mit Einwilligung)</li>
                      <li>• Kundeninformationen</li>
                      <li>• Werbung für eigene Dienstleistungen</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Rechtliche Verpflichtungen</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Buchführungspflichten</li>
                      <li>• Steuerrechtliche Vorgaben</li>
                      <li>• Aufbewahrungspflichten</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Datenweitergabe */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Datenweitergabe an Dritte
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur in folgenden Fällen:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Mit Ihrer ausdrücklichen Einwilligung</strong><br />
                      Daten werden nur dann weitergegeben, wenn Sie uns dies ausdrücklich erlaubt haben.
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Zur Vertragserfüllung</strong><br />
                      An Dienstleister, die für uns Leistungen erbringen (z.B. Hosting, E-Mail-Versand).
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Aufgrund gesetzlicher Verpflichtungen</strong><br />
                      An Behörden, wenn dies gesetzlich vorgeschrieben ist.
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Wichtiger Hinweis</h4>
                  <p className="text-blue-800">
                    Wir verkaufen oder vermieten Ihre personenbezogenen Daten niemals an Dritte. 
                    Alle Dienstleister sind durch Verträge zur Einhaltung der DSGVO verpflichtet.
                  </p>
                </div>
              </div>
            </div>

            {/* Ihre Rechte */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Ihre Rechte nach DSGVO
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Auskunftsrecht</h3>
                  <p className="text-gray-600">
                    Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu erhalten.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900">Recht auf Berichtigung</h3>
                  <p className="text-gray-600">
                    Sie können die Berichtigung unrichtiger oder unvollständiger Daten verlangen.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900">Recht auf Löschung</h3>
                  <p className="text-gray-600">
                    Unter bestimmten Umständen können Sie die Löschung Ihrer Daten verlangen.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Recht auf Einschränkung</h3>
                  <p className="text-gray-600">
                    Sie können die Einschränkung der Datenverarbeitung verlangen.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900">Recht auf Datenübertragbarkeit</h3>
                  <p className="text-gray-600">
                    Sie können Ihre Daten in einem strukturierten Format erhalten.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900">Widerspruchsrecht</h3>
                  <p className="text-gray-600">
                    Sie können der Datenverarbeitung widersprechen, wenn diese auf berechtigten Interessen beruht.
                  </p>
                </div>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-semibold text-emerald-900 mb-2">Kontakt für Ihre Rechte</h4>
                <p className="text-emerald-800 mb-4">
                  Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte unter:
                </p>
                <div className="space-y-2 text-emerald-800">
                  <p><strong>E-Mail:</strong> datenschutz@stahldigital.at</p>
                  <p><strong>Post:</strong> Stahl & Söhne KG, Fleischmarkt 1/6, 1010 Wien</p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Verwendung von Cookies
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Unsere Website verwendet Cookies, um die Funktionalität zu gewährleisten und 
                  die Nutzererfahrung zu verbessern.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technisch notwendige Cookies</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                    <div className="text-xs text-gray-500">
                      <strong>Beispiele:</strong> Session-Cookies, CSRF-Token
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Analyse-Cookies</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Diese Cookies helfen uns, die Website-Nutzung zu verstehen und zu optimieren.
                    </p>
                    <div className="text-xs text-gray-500">
                      <strong>Beispiele:</strong> Google Analytics (anonymisiert)
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Marketing-Cookies</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Diese Cookies werden nur mit Ihrer Einwilligung gesetzt.
                    </p>
                    <div className="text-xs text-gray-500">
                      <strong>Beispiele:</strong> Werbe-Tracking, Remarketing
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 className="font-semibold text-yellow-900 mb-2">Cookie-Einstellungen</h4>
                  <p className="text-yellow-800">
                    Sie können Ihre Cookie-Einstellungen jederzeit in Ihrem Browser ändern oder 
                    über unser Cookie-Banner anpassen. Nicht-technische Cookies werden nur mit 
                    Ihrer ausdrücklichen Einwilligung gesetzt.
                  </p>
                </div>
              </div>
            </div>

            {/* Datensicherheit */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Datensicherheit
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre 
                  personenbezogenen Daten gegen Manipulation, Verlust, Zerstörung oder gegen 
                  den Zugriff unberechtigter Personen zu schützen.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">Technische Maßnahmen</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>SSL/TLS-Verschlüsselung</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Firewall-Schutz</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Regelmäßige Sicherheitsupdates</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">Organisatorische Maßnahmen</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Zugriffsbeschränkungen</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Schulung der Mitarbeiter</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Regelmäßige Datenschutz-Audits</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Aufbewahrungsfristen */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Aufbewahrungsfristen
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die 
                  genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Website-Logs</h4>
                    <p className="text-sm text-gray-600">3 Monate</p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Kontaktanfragen</h4>
                    <p className="text-sm text-gray-600">3 Jahre</p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Newsletter-Abonnements</h4>
                    <p className="text-sm text-gray-600">Bis zum Widerruf</p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Geschäftsdaten</h4>
                    <p className="text-sm text-gray-600">7 Jahre (steuerrechtlich)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Änderungen der Datenschutzerklärung */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Änderungen der Datenschutzerklärung
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an 
                  geänderte Rechtslagen oder bei Änderungen unserer Dienstleistungen anzupassen.
                </p>
                <p>
                  <strong>Stand der Datenschutzerklärung:</strong> 04.05.2024<br />
                  <strong>Nächste Überprüfung:</strong> 04.05.2025
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Benachrichtigung bei Änderungen</h4>
                  <p className="text-blue-800">
                    Bei wesentlichen Änderungen der Datenschutzerklärung werden wir Sie 
                    über unsere Website oder per E-Mail informieren.
                  </p>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Kontakt für Datenschutzfragen
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte stehen wir 
                  Ihnen gerne zur Verfügung:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Stahl & Söhne KG</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>Fleischmarkt 1/6, 1010 Wien</p>
                      <p>1010 Wien, Österreich</p>
                      <p><strong>E-Mail:</strong> datenschutz@stahldigital.at</p>
                      <p><strong>Telefon:</strong> +43 676 773 46 89</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Österreichische Datenschutzbehörde</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>Barichgasse 40-42</p>
                      <p>1030 Wien, Österreich</p>
                      <p><strong>E-Mail:</strong> dsb@dsb.gv.at</p>
                      <p><strong>Website:</strong> www.dsb.gv.at</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
