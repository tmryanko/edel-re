import React from 'react';

import { PageCont, PageText, PageTitle } from './style';

function Impressum() {
  return (
    <PageCont>
      <PageTitle>EDEL Real Estate GmbH</PageTitle>
      <PageText>
        Zimmerstraße 96, 10117 Berlin, Germany Vertretungsberechtigt:
        Geschäftsführer: Guy Ben Edelsburg
      </PageText>
      <PageTitle>Kontakt:</PageTitle>
      <PageText>
        Telefon: +49 30 8632913-0 Telefax: +49 30 8632913-99 E-Mail:
        office@edel-re.com
      </PageText>
      <PageTitle>Umsatzsteuer:</PageTitle>
      <PageText>Umsatzsteueridentifikationsnummer: DE 30/271/50661</PageText>
      <PageTitle>Register:</PageTitle>
      <PageText>
        Eingetragen im Handelsregister Registergericht: Amtsgericht Berlin
        (Charlottenburg) Registernummer: HRB 219212
      </PageText>
      <PageTitle>Aufsichtsbehörde:</PageTitle>
      <PageText>
        Ordnungsamt Charlottenburg-Wilmersdorf Hohenzollerndamm 174-177, 10713
        Berlin Hinweis gemäß Verbraucherstreitbeilegungsgesetz (VSBG): Wir sind
        nicht bereit und verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </PageText>
    </PageCont>
  );
}

export default Impressum;
