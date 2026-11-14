/* =====================================================================
   Einstellungen der TEST-Webseite
   ---------------------------------------------------------------------
   Diese Datei gehört nur zu TEST. Beim Übernehmen von TEST nach PROD
   wird sie nicht kopiert: PROD hat eine eigene config.js.

   API_URL: Web-App-Adresse aus dem Google Sheet «Hochzeit PL – TEST»
            (dort Einstellung Umgebung = TEST).
            Sie endet auf /exec. Nur zwischen die beiden geraden
            Hochkommas einfügen: 'https://script.google.com/…/exec'
            Leer lassen = Demo mit Platzhaltern (Gästecode AMORE, Admin-Code ADMIN).
   NAME_1 / NAME_2: stehen auf dem Couvert und der Startseite,
            bevor jemand den Gästecode eingegeben hat.
   ===================================================================== */
window.PL_CONFIG = {
  UMGEBUNG: 'TEST',
  API_URL: 'https://script.google.com/macros/s/AKfycbwJXGfrY2pf8kuj6JdEL73zhaj2S40SxOtfgSKgm39_8cCHqE0GTAGz398571Y0uU1y3A/exec',
  NAME_1: 'Pasquale',
  NAME_2: 'Laura'
};
