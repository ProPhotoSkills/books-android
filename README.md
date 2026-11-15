# PPS Books – Android-Huelle (Capacitor)

Natives Android-Projekt fuer die Lese-App **books-app**
(https://books.prophotoskills.workers.dev). Laedt die Web-App per WebView im
Remote-URL-Modus – hier liegt KEIN Quellcode der Lese-App, nur die
Verpackung (Icon, Splash, Zurueck-Taste). Vorbild: Repo `android` (PPS Coach).

- App-Kennung: `com.prophotoskills.books` (nach dem ersten Upload nicht aenderbar)
- Name: PPS Books · Version 1 (1.0)
- Rechte: nur Internet
- Google-Play-Regel: reine Lese-App – kein Kaufknopf, kein Link zu Kaufseiten

## Bauen (Android Studio)
1. In diesem Ordner einmal `npm install` (holt Capacitor nach `node_modules/`)
2. Android Studio → Open → Ordner `android/`
3. Build → Generate Signed App Bundle → **neuer eigener Schluessel fuer PPS Books**
   (nicht den vom Coach). Schluessel und Passwort nie ins Repo.

## Spaeter
- Adresse auf `books.prophotoskills.com` umstellen (hier + `android/app/src/main/assets/capacitor.config.json`), neuer Build
- Eigenes Icon fuer PPS Books (zurzeit gleiches Logo wie der Coach)
