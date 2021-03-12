import React from 'react';

import { PageCont, PageText, PageTitle } from './style';

function Impressum() {
  return (
    <PageCont>
      <PageTitle>EDEL Real Estate GmbH</PageTitle>
      <PageText>Zimmerstraße 96, 10117 Berlin, Germany</PageText>
      <PageText>
        Vertretungsberechtigt:
        <br />
        Geschäftsführer: Guy Ben Edelsburg
      </PageText>
      <PageTitle>Kontakt:</PageTitle>
      <PageText>
        Telefon: +49 30 8632913-0
        <br />
        Telefax: +49 30 8632913-99
        <br />
        E-Mail:office@edel-re.com
      </PageText>
      <PageTitle>Umsatzsteuer:</PageTitle>
      <PageText>Umsatzsteuer ID DE333984651</PageText>
      <PageTitle>Register:</PageTitle>
      <PageText>
        Eingetragen im Handelsregister
        <br />
        Registergericht: Amtsgericht Berlin (Charlottenburg)
        <br />
        Registernummer: HRB 219212
      </PageText>
      <PageTitle>Aufsichtsbehörde:</PageTitle>
      <PageText>
        Ordnungsamt Charlottenburg-Wilmersdorf
        <br />
        Hohenzollerndamm 174-177, 10713 Berlin
        <br />
        Hinweis gemäß Verbraucherstreitbeilegungsgesetz (VSBG):
        <br />
        Wir sind nicht bereit und verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </PageText>
    </PageCont>
  );
}

export default Impressum;
