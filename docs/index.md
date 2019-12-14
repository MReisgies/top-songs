# Top Songs Dokumentation

## Inhaltsverzeichnis

* Zusammenfassung und Zielsetzung
* Dokumentation
* Teil 1: SPA mit API-Call
* Teil 2: React Native Umsetzung
* Fazit
* Weiteführendes



### Zusammenfassung und Zielsetzung
Im ersten Schritt möchte ich eine Webanwendung gestalten, die API Calls verwaltet. Im zweiten Schritt möchte ich mich mit der Umsetzung in React oder React Native beschäftigen.
	 
Ziel: Eine schlichte Web Single Page Application aufbauen, die die LastFM API anspricht. Diese Anwendung soll im zweiten Schritt auf eine hybride App übertragen werden. In der Dokumentation möchte ich auf Gemeinsamkeiten und Unterschiede der Ansätze eingehen.Zudem möchte ich den Zusammenhang zwischen React im Web und React Native verstehen um für kommende Projekte den richtigen Ansatz wählen zu können.

### Dokumentation
Aus Interesse an verschiedenen Dokumentationsmöglichkeiten, werde ich den wesentlichen Teil der Dokumentation in einer statischen MkDocs Website veröffentlichen.

### Teil 1: SPA mit API-Call

LAST.fm Musikdatenbank API:
· API ist frei verfügbar
· Nutzung mit einfacher user-key Authentifizierung sowie mit OAuth 2.0 möglich
    Funktionsumfang:
· Interpreten Suchfunktion
· Es sollen die bekanntesten Titel eines Musik Interpreten aufgelistet werden
Coding mit HTML und Javascript sowie grundlegende Gestaltung mit CSS

### Teil 2: React Native Umsetzung

Ziel: SPA aus Teil 2 auf React Native umgestalten
 
Funktionsumfang:
· lastFM API Call wie in der SPA
· App Menu mit react navigation aufbauen
· Login über Social Media: Suchanfragen im eigenen Profil abspeichern
· Suchanfragen in Datenbank speichern mit Google Firestore 
· Navigationsstruktur:
        § lastFM search:
            · API Call 1: Top Songs
            · API Call 2: Albums
            · API Call 3: Artist Metadata
        § Login
About (Impressum mit Link zur MkDocs Dokumentation)





