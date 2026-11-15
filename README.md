# PPS Books – Android-Huelle (Capacitor)

Natives Android-Projekt fuer die Lese-App **books-app**
(https://books.prophotoskills.workers.dev). Laedt die Web-App per WebView im
Remote-URL-Modus – hier liegt KEIN Quellcode der Lese-App, nur die
Verpackung (Icon, Splash, Zurueck-Taste). Vorbild: Repo `android` (PPS Coach).

- App-Kennung: `com.prophotoskills.books` (nach dem ersten Upload nicht aenderbar)
- Name: PPS Books · Version 3 (1.2)
- Rechte: nur Internet
- Google-Play-Regel: reine Lese-App – kein Kaufknopf, kein Link zu Kaufseiten

## Bauen (Android Studio)
1. In diesem Ordner einmal `npm install` (holt Capacitor nach `node_modules/`)
2. Android Studio → Open → Ordner `android/`
3. Build → Generate Signed App Bundle → **neuer eigener Schluessel fuer PPS Books**
   (nicht den vom Coach). Schluessel und Passwort nie ins Repo.

## Versionsanzeige (Version 3)
- Die Lese-App (books-app ab v14) zeigt unten in der Fusszeile die App-Version, z. B. "Android 1.2 (3) · Web v14".
- Die Zahl kommt automatisch aus `android/app/build.gradle` (versionName / versionCode) ueber das Capacitor-App-Plugin – hier nichts von Hand pflegen ausser diesen zwei Werten.

## Icon (Version 2)
- Eigenes Icon PPS Books (Buecherstapel mit Fotograf, Eric 15.11.2026)
- Hintergrund Android-Symbol + Splash: #0a1211 wie PPS Coach (`res/values/ic_launcher_background.xml`)
- Play-Store-Symbol: `store-assets/play-store-icon-512x512.png`

## Spaeter
- Adresse auf `books.prophotoskills.com` umstellen (hier + `android/app/src/main/assets/capacitor.config.json`), neuer Build
