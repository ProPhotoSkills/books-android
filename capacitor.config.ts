import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.prophotoskills.books',
  appName: 'PPS Books',
  webDir: 'www',
  // Remote-URL-Modus: App laedt die lebende Lese-App books-app per WebView.
  // Interim: workers.dev-Domain (Eric 14.11.2026, Variante A). Sobald
  // books.prophotoskills.com auf den Worker zeigt, hier umstellen + neuer Build.
  server: {
    url: 'https://books.prophotoskills.workers.dev',
    cleartext: false
  }
};

export default config;
