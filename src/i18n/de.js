/* Knopenteller: alle teksten in het Duits. Elke taal heeft een eigen bestand met dezelfde sleutels;
   latere Object.assign-regels vullen aan of overschrijven. De build controleert dat geen sleutel ontbreekt. */
var I18N = self.I18N || {};
I18N.de = {
  'brand.aria': 'Button Counter, zur Übersicht', 'nav.aria': 'Seiten', 'lang.label': 'Sprache',
  'tab.overview': 'Übersicht', 'tab.input': 'Eingeben', 'tab.insight': 'Einblick', 'tab.about': 'Über',
  'alt.pouch': 'Eine Hand stapelt Pastellknöpfe neben einem offenen Lederbeutel', 'alt.notebook': 'Ein aufgeschlagenes Notizbuch neben Knöpfen, die wie ein kleines Balkendiagramm liegen',
  'alt.bowls': 'Nach Farbe sortierte Knöpfe in kleinen Schalen', 'alt.stacks': 'Knöpfe in einer Messingwaage, eine Entscheidung gegen eine andere abgewogen', 'alt.path': 'Ein gewundener Weg aus Knöpfen zu einem sonnigen Horizont',
  'ov.h': 'Wo stehen Sie?',
  'ov.subEmpty': 'Geben Sie unten bei Schnell rechnen Ihr Alter ein und was Sie pro Monat ausgeben möchten.',
  'ov.subCap': 'Vermögen {c},', 'ov.subNoCap': 'Noch kein Vermögen eingegeben: Die Übersicht rechnet mit {c}, dem Betrag, der mit 90 % Wahrscheinlichkeit reicht,',
  'ov.subRest': '{b} pro Monat zum Ausgeben, {r}. Alle Beträge in heutigem Geld.',
  'q.eyebrow': 'Schnell rechnen', 'q.h': 'Was brauchen Sie?',
  'q.sub': 'Wählen Sie Ihr Land und geben Sie Ihr Alter ein und was Sie pro Monat ausgeben möchten. Den Rest ergänzt Button Counter: das Alter für die gesetzliche Rente, die durchschnittliche Lebenserwartung und einen Topf, der am Ende leer sein darf.',
  'q.capital': 'Ersparnisse und Anlagen heute', 'q.optional': '(optional)', 'q.budgetPh': 'zum Beispiel 2500',
  'q.ageYou': 'Ihr Alter', 'q.ageOf': 'Alter {n}', 'q.spYou': 'Ihre erwartete {sp}, pro Monat', 'q.spOf': 'Erwartete {sp} {n}, pro Monat',
  'q.spHint': '{InCountry} hängt die {sp} von Ihrem Erwerbsleben ab. Tragen Sie ein, was Sie erwarten (siehe {site}). Leer gelassen, rechnet Button Counter ohne.',
  'f.country': 'Land, in dem Sie leben', 'f.persons': 'Für wie viele Personen?', 'p.one': '1 Person', 'p.two': '2 Personen',
  'p.you': 'Sie', 'p.partner': 'Partner', 'p.partnerAsk': 'Ihr Partner',
  'f.sex': 'Geschlecht', 'sex.m': 'Mann', 'sex.f': 'Frau', 'sex.man': 'einen Mann', 'sex.woman': 'eine Frau', 'sex.person': 'eine Person',
  'f.name': 'Name', 'f.name1': 'Ihr Name', 'f.name2': 'Name des Partners', 'ctry.other': 'Anderes Land',
  'u.years': 'Jahre', 'u.netMonth': '{cur} netto pro Monat', 'u.workMonth': '{cur} pro Monat bis 67', 'u.pctCap': '% des Vermögens', 'u.perPersonYear': '{cur} pro Person und Jahr',
  'ageYM': '{y} J. {m} M.',
  'spName': 'gesetzliche Rente', 'spName.NL': 'AOW (Staatsrente)', 'spName.GB': 'State Pension', 'spName.US': 'Social Security',
  'tag.bron': 'Quelle', 'tag.aanname': 'Annahme', 'tag.zelf': 'selbst eintragen',
  'key.bron': 'offizielle Quelle online, beim Erstellen der App geprüft', 'key.aanname': 'Standardwert, prüfen Sie, ob er zu Ihnen passt', 'key.zelf': 'Angaben, die Sie kennen oder nachschlagen müssen',
  'g.key': 'Strich bei 75 %: knapp · Strich bei 90 %: komfortabel', 'g.lbl': 'Erfolgschance',
  'g.empty': 'Jeder Knopf steht für eine mögliche Zukunft. Nach dem Eingeben sehen Sie, wie viele gut ausgehen.',
  'g.text': 'Bei {n} von 20 Knöpfen reicht das Vermögen {r}. Jeder Knopf steht für eine mögliche Zukunft.',
  'w.success': 'Erfolgschance', 'w.sp': 'Gesetzliche Rente', 'w.pension': 'Betriebs-/Privatrente', 'w.work': 'Nebenverdienst', 'w.fromCap': 'Aus dem Vermögen', 'w.spendLine': 'Monatsbudget',
  'w.and': ' und ', 'w.now': 'Heute', 'w.picked': 'gewählt', 'w.autoPicked': 'automatisch gewählt',
  'ref.one': 'bis Sie {a} sind', 'ref.two': 'bis {n} {a} ist',
  'v.empty': 'Noch nicht ausgefüllt', 'v.emptyText': 'Sobald Sie eingeben, was Sie pro Monat ausgeben möchten, sehen Sie hier die Chance, dass Ihr Vermögen reicht.',
  'v.good': 'Komfortabel', 'v.warn': 'Knapp', 'v.risky': 'Riskant', 'v.bad': 'Nicht machbar',
  'v.ok': 'Mit {c} und {b} pro Monat zum Ausgeben reicht Ihr Geld {r}. Am Ende bleiben {e} übrig.',
  'v.shortOne': 'Das Vermögen ist etwa mit {a} aufgebraucht. Es fehlen {g} Startkapital, oder das Monatsbudget muss auf {mb} sinken.',
  'v.shortTwo': 'Das Vermögen ist etwa aufgebraucht, wenn {n} {a} wird. Es fehlen {g} Startkapital, oder das Monatsbudget muss auf {mb} sinken.',
  'v.pf': 'Portfolio {pf}', 'v.work': 'Nebenverdienst {w} pro Monat bis 67', 'v.sim': 'Erfolgschance bei schwankenden Renditen ({pf}): {p}.',
  'k.end': 'Restvermögen im Endalter', 'k.endS': 'bei durchschnittlicher Rendite, in heutigem Geld', 'k.need': 'Benötigtes Startkapital', 'k.needS': 'bei {b} pro Monat',
  'k.bufOrShort': 'Puffer oder Lücke', 'k.buffer': 'Puffer', 'k.short': 'Lücke', 'k.bufS': '{p} über dem Minimum', 'k.shortS': '{p} unter dem Minimum',
  'k.max': 'Maximales Monatsbudget', 'k.maxS': 'bei {c} ({d} pro Monat ggü. heute)', 'k.wr': 'Entnahme zu Beginn (Jahr 1)', 'k.wrS': 'des Vermögens pro Jahr, {m} pro Monat', 'k.tax': 'Steuer im Jahr 1',
  'fan.h': 'Verlauf Ihres Vermögens', 'fan.view': 'Ansicht', 'fan.nominal': 'Nominal', 'fan.real': 'Real', 'fan.zoomIn': 'Vergrößern', 'fan.zoomOut': 'Verkleinern',
  'fan.lg.mid': 'Mitte', 'fan.lg.likely': 'Wahrscheinlich (mittlere 50 %)', 'fan.lg.less': 'Weniger wahrscheinlich (80 %)', 'fan.lg.rare': 'Selten (95 %)', 'fan.lg.spAge': 'Rentenalter',
  'fan.empty': 'Sobald Sie eingeben, was Sie pro Monat ausgeben möchten, sehen Sie hier, wie sich Ihr Vermögen in guten und schlechten Jahren entwickeln kann.',
  'fan.subEmpty': 'Wie sich das Vermögen bei schwankenden Renditen entwickeln kann.', 'fan.wr': 'Entnahme pro Monat im Jahr 1', 'fan.wrS': 'Entnahme pro Monat im Jahr 1 ({p} des Vermögens pro Jahr)',
  'fan.assump': 'Annahmen Portfolio', 'fan.assumpLater': 'folgen nach dem Eingeben', 'fan.aria': 'Bandbreite des Vermögens nach Alter',
  'fan.zero': 'Chance, dass es aufgebraucht ist', 'fan.mix': '{a} % Aktien, {b} % Anleihen, {c} % Tagesgeld', 'fan.costs': '{p} Kosten pro Jahr',
  'fan.sub': 'So kann sich das Vermögen bei schwankenden Renditen entwickeln, mit dem Portfolio „{pf}“, {n} Simulationen. Jedes Jahr wird zuerst entnommen, dann die Steuer abgezogen. Je dunkler das Band, desto wahrscheinlicher. Tippen oder fahren Sie über die Grafik für Zahlen.',
  'fan.noteNom': 'Nominal: Beträge, wie sie dann auf dem Konto stehen, bei {p} Inflation pro Jahr.', 'fan.noteReal': 'Real: in heutigem Geld, damit Beträge über die Jahre vergleichbar bleiben.',
  'fl.0': 'Sehr gut (1 von 40)', 'fl.1': 'Gut (1 von 10)', 'fl.2': 'Über der Mitte (1 von 4)', 'fl.3': 'Mitte', 'fl.4': 'Unter der Mitte (1 von 4)', 'fl.5': 'Schlecht (1 von 10)', 'fl.6': 'Sehr schlecht (1 von 40)',
  'tbl.summary': 'Pro Jahr als Tabelle anzeigen', 'tbl.note': 'Alter von {who}. Vermögen bei durchschnittlicher Rendite. Entnahme pro Monat: was nach Renten noch aus dem Vermögen kommt; ein Minus bedeutet, dass Geld übrig bleibt.',
  'tbl.age': 'Alter', 'tbl.cap': 'Vermögen', 'tbl.min': 'Mindestens nötig', 'tbl.draw': 'Entnahme/Monat', 'tbl.tax': 'Steuer/Jahr',
  'flow.h': 'Was Sie pro Monat ausgeben möchten und woher es kommt',
  'flow.sub': 'Pro Jahr, in heutigem Geld: der Teil aus gesetzlicher Rente, Betriebsrente und Arbeit und der Teil aus dem Vermögen. Tippen oder fahren Sie über einen Balken für Zahlen.',
  'flow.empty': 'Sobald Sie eingeben, was Sie pro Monat ausgeben möchten, sehen Sie hier pro Jahr, welcher Teil aus Renten und Arbeit kommt und welcher aus dem Vermögen.',
  'flow.aria': 'Monatsbudget pro Jahr, aufgeteilt in gesetzliche Rente, Betriebsrente, Nebenverdienst und Vermögen', 'flow.over': 'Übrig über dem Budget',
  'next.h': 'Mehr Einblick', 'next.pf': 'Portfolios vergleichen', 'next.pfS': 'Sparen, defensiv, ausgewogen und offensiv nebeneinander', 'next.ld': 'Anderes Monatsbudget', 'next.ldS': 'Was etwas mehr oder weniger pro Monat erfordert', 'next.kp': 'Kaufkraft nach Land', 'next.kpS': 'Was Ihr Budget anderswo wert ist',
  'in.h': 'Fünf kleine Knöpfe', 'in.sub': 'Alles wird sofort neu berechnet und bleibt nur in diesem Browser gespeichert.', 'in.steps': 'Schritte', 'stepOf': 'Schritt {n} von {m}',
  'st1.t': 'Wer', 'st1.h': 'Wer sind Sie?', 'st1.s': 'Zuerst Land und Anzahl der Personen. Namen sind optional: Sie machen Grafiken und Texte persönlicher und bleiben in diesem Browser.',
  'h.country': 'Legt Währung, Regeln der gesetzlichen Rente, Steuer auf Kapitalerträge und Lebenserwartung fest. Alles bleibt anpassbar.',
  'h.persons': 'Bei zwei Personen rechnet Button Counter mit zwei gesetzlichen Renten und Betriebsrenten sowie den Freibeträgen für zwei.',
  'h.sex': 'Für die Lebenserwartung, die die App als Endalter nutzt.',
  'st2.t': 'Vermögen und Budget', 'st2.h': 'Vermögen und Monatsbudget', 'st2.s': 'Was heute da ist und was pro Monat netto ausgegeben wird.',
  'st3.t': 'Renten', 'st3.h': 'Gesetzliche und private Rente', 'st3.s': 'Einkommen, das später kommt. Schalten Sie aus, was nicht zutrifft.',
  'f.spOn': 'Anspruch auf {sp}', 'f.penOn': 'Hat eine Betriebs- oder Privatrente', 'b.spAuto': 'Alter und Betrag der gesetzlichen Rente wieder automatisch',
  'st4.t': 'Entscheidungen', 'st4.h': 'Entscheidungen', 'st4.s': 'Wie das Vermögen angelegt ist, wie es besteuert wird und wie lange es reichen muss.',
  'f.portfolio': 'Portfolio (Anlagemix)', 'pf.auto': 'Automatisch', 'pf.def': 'Defensiv', 'pf.mid': 'Ausgewogen', 'pf.agg': 'Offensiv',
  'f.box3': 'Box 3 (niederländische Vermögensteuer)', 'b3.o1': 'Gewichtet', 'b3.o2': 'Jetzt (2026)', 'b3.o3': 'Schlecht (2027)', 'b3.o0': 'Aus',
  'f.tax': 'Steuer auf Kapitalerträge', 'b.taxReset': 'Zurück zum Standard für {country}',
  'f.runUntil': 'Laufzeit bis zum Endalter von', 'h.runUntil': 'Das Szenario läuft, bis diese Person das Endalter unten erreicht.',
  'b.auto': 'Rentenalter und Endalter wieder automatisch',
  'st5.t': 'Annahmen', 'st5.h': 'Weitere Annahmen', 'st5.s': 'Standardwerte. Behalten oder anpassen.',
  'f.cur': 'Währung', 'h.cur': 'Ändert nur die Anzeige der Beträge; es wird nichts umgerechnet.', 'mk.summary': 'Marktannahmen und Quellen', 'b.resetAll': 'Alle Zahlen auf die Startwerte zurücksetzen',
  'f.startkapitaal': 'Startkapital', 'h.startkapitaal': 'Vermögen, von dem Sie heute leben können: Ersparnisse und Anlagen zusammen.',
  'f.budget': 'Wie viel möchten Sie pro Monat ausgeben?', 'h.budget': 'Das Ziel: netto pro Monat, alles inklusive. Wohnen, Einkäufe, Reisen und eine Reserve für Unerwartetes. Button Counter rechnet aus, ob das gelingt und woher das Geld kommt.',
  'f.werk': 'Nebenverdienst netto pro Monat', 'h.werk': 'Optional. Netto pro Monat bis 67 (bei zwei Personen, solange einer jünger als 67 ist).',
  'f.leeftijdPaul': 'Alter heute', 'h.leeftijdPaul': 'Ihr Alter heute, in ganzen Jahren.', 'f.leeftijdDiana': 'Alter heute', 'h.leeftijdDiana': 'Alter heute, in ganzen Jahren.',
  'f.spAge': 'Alter {sp}', 'h.spAge': 'Aus Alter und Land berechnet. Passen Sie es an, wenn Sie Ihr eigenes Datum kennen.',
  'f.spAmt': '{Sp}, netto pro Monat', 'h.spAmt': 'Pro Person. Automatisch, wo der Betrag feststeht; sonst der Betrag aus Ihrer Renteninformation.',
  'f.penAmt': 'Betriebs-/Privatrente netto pro Monat', 'h.penAmt': 'Ohne gesetzliche Rente. Beträge aus der Mitteilung werden als heutiges Geld behandelt.',
  'f.penAge': 'Rente beginnt mit', 'h.penAge': 'Beginnalter laut Rentenmitteilung.',
  'f.eindleeftijd': 'Alter, bis zu dem das Vermögen aufgebraucht sein darf', 'h.eindleeftijd': 'Automatisch die durchschnittliche Lebenserwartung für Ihr Alter und Geschlecht. Die Hälfte der Menschen lebt länger: Wählen Sie ein höheres Alter für mehr Spielraum.',
  'f.restkapitaal': 'Gewünschtes Restvermögen in diesem Alter', 'h.restkapitaal': 'Null heißt: Das Vermögen darf aufgebraucht sein.',
  'f.inflatie': 'Inflation pro Jahr', 'h.inflatie': 'Standard 2,4 %, auf Basis des langjährigen Durchschnitts.',
  'f.kosten': 'Anlagekosten pro Jahr', 'h.kosten': 'Fonds- und Depotkosten. Tragen Sie die Kosten Ihrer eigenen Anlage ein. Steuern sind hier nicht enthalten.',
  'f.taxRate': 'Steuersatz auf Erträge', 'h.taxRate': 'Jedes Jahr auf den Ertrag über dem Freibetrag. Verluste werden nicht verrechnet.',
  'f.taxAllow': 'Freibetrag', 'h.taxAllow': 'Ertrag pro Person und Jahr, der steuerfrei bleibt.',
  'tax.none': 'keine Steuer auf Erträge', 'tax.label': '{r} % Steuer auf Erträge',
  'b3.label.0': 'Box 3 aus', 'b3.label.1': 'Box 3 gewichtet (75 % Richtung schlecht)', 'b3.label.2': 'Box 3 pauschal 2026', 'b3.label.3': 'Box 3 pauschal, Vorschlag 2027',
  'b3.both': 'für Sie beide', 'b3.you': 'für Sie',
  'b3.h0': 'Box 3 wird nicht berücksichtigt.', 'b3.h2': 'Das heutige System: 36 % auf eine angenommene Rendite von 6,00 % auf Anlagen, {a} steuerfrei {who}.',
  'b3.h3': 'Schlechtester Fall: Der Vorschlag 2027 bleibt. {b} steuerfrei {who}, 36 % auf eine angenommene Rendite von 7,87 %.',
  'b3.h1': 'Eine Linie zwischen den drei Vorschlägen, von günstig (Steuer auf Gewinne beim Verkauf) über die heutige Pauschale (2026) bis schlecht (Vorschlag 2027 bleibt). Dieses Szenario liegt 75 % Richtung schlecht: {c} steuerfrei {who} und 36 % auf eine angenommene Rendite von 7,31 %.',
  'pf.autoHint': 'Gewählt: {pf} (Erfolgschance {p}). Automatisch wählt das Portfolio mit der höchsten Erfolgschance bei den aktuellen Einstellungen; bei weniger als 1 Prozentpunkt Unterschied gewinnt das mit dem meisten Kapital am Ende.',
  'pf.mixHint': '{a} % Aktien, {b} % Anleihen, {c} % Tagesgeld. Erwartete Rendite {r} brutto pro Jahr, Schwankung etwa {s} pro Jahr.',
  'le.src.NL': 'CBS 2024', 'le.src.eu': 'Schätzung auf Basis von Eurostat 2023', 'le.src.gb': 'Schätzung auf Basis von ONS 2021–23', 'le.src.us': 'Schätzung auf Basis von CDC 2023', 'le.src.xx': 'niederländische Zahlen, CBS 2024',
  'adv.eyebrow': 'Empfehlung', 'adv.h': 'Das brauchen Sie', 'adv.bigS': 'Vermögen ab heute, mit 90 % Wahrscheinlichkeit genug',
  'adv.p': 'Für {b} pro Monat, {r}. Bei durchschnittlicher Rendite sind es mindestens {min}. Der beste Anlagemix dafür ist {pf}.',
  'adv.spFrom': '{sp} ab {a}, {amt} pro Monat', 'adv.noSp': 'Keine {sp}', 'adv.pen': '{amt} Rente pro Monat', 'adv.noPen': 'keine Betriebs- oder Privatrente', 'adv.empty': 'Das Vermögen darf am Ende aufgebraucht sein.',
  'adv.basisOne': 'Das Endalter {a} ist die durchschnittliche Lebenserwartung für {s} im Alter von {now} ({src}).', 'adv.basisTwo': 'Das Endalter ist die durchschnittliche Lebenserwartung derjenigen Person, die voraussichtlich am längsten lebt ({src}).',
  'adv.basisOwn': 'Das Endalter {a} haben Sie selbst gewählt.', 'adv.long': 'Wenn Sie 5 Jahre länger leben, bis {a}, brauchen Sie {c} für dieselben 90 %.',
  'adv.spMissing': 'Ihre {sp} ist noch nicht enthalten: In diesem Land hängt sie vom Erwerbsleben ab. Tragen Sie oben den erwarteten Betrag ein (siehe {site}) für ein genaueres Ergebnis.', 'adv.yourStatement': 'Ihre Renteninformation',
  'adv.short': 'Sie haben {h}: {p} des Nötigen. Es fehlen noch {g}.', 'adv.enough': 'Sie haben {h}: genug, mit {g} Reserve.',
  'adv.noCap': 'Die Übersicht unten rechnet jetzt mit {c}. Tragen Sie unter „Ersparnisse und Anlagen heute“ ein, was schon da ist, dann sehen Sie, wie viel noch fehlt.',
  'kp.h': 'Was Ihr Budget in anderen Ländern wert ist', 'kp.sub': '{InCountry} ist Ihr Budget der Maßstab: 100 % Kaufkraft. Pro Land sehen Sie, wie viel Kaufkraft derselbe Betrag dort bringt und was derselbe Lebensstil kostet.',
  'kp.std': 'Ihr Maßstab', 'kp.stdDet': 'Ihr Budget hat hier 100 % Kaufkraft.',
  'kp.need': 'Für den Lebensstil von {x} {inCountry} brauchen Sie hier {n} pro Monat, {d} {more}', 'kp.less': 'weniger.', 'kp.more': 'mehr.',
  'kp.food': 'Lebensmittel', 'kp.out': 'Auswärts essen', 'kp.energy': 'Energie', 'kp.power': 'Kaufkraft', 'kp.all': 'Alle {n} Länder zeigen',
  'kp.insight': 'Am meisten für Ihr Geld: {top}. In Südeuropa: {south}.',
  'kp.note': 'Quelle: Eurostat, Preisniveau des Konsums privater Haushalte 2025 (veröffentlicht Juni 2026), EU = 100, {home} {v}. Landesdurchschnitte: An der Küste, in Großstädten und bei Mieten für Neuankömmlinge sind die Preise oft höher. Gesundheitskosten sind nicht enthalten.',
  'kp.noData': 'Die Preisniveaus von Eurostat betreffen die EU und einige Nachbarländer, nicht Ihr Land. Wählen Sie ein europäisches Land, um Kaufkraft zu vergleichen.',
  'kp.src': 'Quelle: Eurostat, Preisniveaus 2025.',
  'iz.h': 'Was andere Entscheidungen bedeuten', 'iz.sub': 'Vertiefung zur Übersicht, heute und langfristig.', 'iz.empty': 'Geben Sie zuerst unter <a href="#overview">Übersicht</a> ein, was Sie pro Monat ausgeben möchten. Danach erscheinen hier die Vergleiche.',
  'pf.h': 'Wie sich die Portfolios verhalten', 'pf.sub': 'Gleiche Einstellungen, nur der Anlagemix unterscheidet sich. Die Erfolgschance stammt aus {n} Simulationen mit schwankenden Renditen. Das Szenario oben rechnet mit der erwarteten Rendite des gewählten Portfolios.',
  'pf.chance': 'Chance, dass das Vermögen reicht, {r}', 'chip.good': 'komfortabel', 'chip.warn': 'knapp', 'chip.bad': 'riskant',
  'pf.mix': 'Mix Aktien, Anleihen, Tagesgeld', 'pf.ret': 'Erwartete Rendite, brutto', 'pf.sd': 'Schwankung pro Jahr', 'pf.need': 'Nötiges Kapital, durchschnittlicher Verlauf', 'pf.endMid': 'Kapital am Ende, Mitte', 'pf.endBad': 'Kapital am Ende, 1 von 20 Pech',
  'sh.2022': 'Crash wie 2022 im Jahr 1', 'sh.2008': 'Crash wie 2008 im Jahr 1', 'pf.emptyAt': 'aufgebraucht, wenn {n} {a} ist', 'pf.left': '{v} übrig', 'pf.below': '{v}, unter dem gewünschten Rest',
  'pf.tblH': 'Vermögen mit dem gewählten Portfolio ({pf}), in heutigem Geld', 'pf.chanceCol': 'Chance',
  'q.bad20': '1 von 20 Pech', 'q.low': 'Mäßig', 'q.mid': 'Mitte', 'q.good': 'Gut', 'q.good20': '1 von 20 Glück',
  'pf.note': 'Normalverteilte Renditen und eine feste Inflation von {i}. Echte Crashs sind heftiger als eine solche Verteilung, deshalb stehen zwei Crashjahre dabei: ein Jahr wie 2022 und wie 2008, danach die erwartete Rendite. Nach Kosten und {tax}, ohne Nebenverdienst, sofern nicht eingetragen.',
  'mk.type': 'Art', 'mk.ret': 'Rendite brutto', 'mk.sd': 'Schwankung', 'mk.basis': 'Grundlage', 'a.eq': 'Aktien weltweit', 'a.bond': 'Anleihen', 'a.cash': 'Tagesgeld und Geldmarkt',
  'mk.b0': 'Invesco 6,0 % (Dollar, 10 Jahre). Konsens von 18 Häusern: USA 6,3 %, entwickelte Märkte ohne USA 7,3 %. Vanguard: ohne USA 3,9 bis 5,9 %, Schwankung 18,9 %.',
  'mk.b1': 'Rendite 10-jähriger Bundesanleihen 3,45 % am 6. Oktober 2026, plus ein kleiner Aufschlag für Unternehmensanleihen. Vanguard: Schwankung 5,0 bis 6,2 %.',
  'mk.b2': 'EZB-Einlagensatz 2,50 % (29. Oktober 2026). Vanguard: Schwankung Cash 1,1 %.',
  'mk.corr': 'Zusammenhang', 'mk.corrT': 'Aktien und Anleihen bewegen sich teilweise gemeinsam (0,2), Tagesgeld unabhängig. Eigene Annahme.',
  'mk.cmp': 'Zum Vergleich', 'mk.cmpT': 'Amundi erwartet für Euro-Anleger etwa 4,5 % bei 6 % Schwankung und 6,4 bis 6,9 % bei 12 %. Die Mischungen hier sind etwas vorsichtiger. Die Zahlen basieren auf dem Euro; in anderen Währungen sind sie eine Näherung.',
  'ld.h': 'Nötiges Vermögen je Monatsbudget', 'ld.sub': 'Gleiche Annahmen, nur das Monatsbudget unterscheidet sich. Die mittlere Zeile ist der aktuelle Betrag.', 'ld.cap': 'Startkapital', 'ld.ok': 'machbar', 'ld.no': 'Lücke',
  'mini.succ': 'Erfolgschance', 'mini.need': 'Nötig', 'mini.max': 'Max. pro Monat',
  'pay.h': 'Zeit, Bilanz zu ziehen.<br><span>Zeit, weiterzugehen.</span>', 'pay.steps': '<span>Wissen, wo Sie stehen.</span> <span>Entdecken, was möglich ist.</span> <span>Entscheiden, wohin Sie wollen.</span>',
  'intro.q': 'Wissen Sie eigentlich…', 'intro.more': 'Mehr lesen',
  'intro.list': '<li>wie Sie finanziell dastehen?</li><li>wie viel Spielraum Sie jetzt und später haben?</li><li>wie sich Ihr Vermögen in den nächsten Jahren entwickeln kann?</li><li>welche finanziellen Entscheidungen Ihnen offenstehen?</li><li>was möglich wird, wenn Sie anders entscheiden?</li>',
  'about.h': 'Die Idee hinter Button Counter',
  'about.body': '<p>Button Counter ist ein persönliches Finanzcockpit: Sie sehen, was Sie haben, wie viel Spielraum das heute und später gibt und wie sich Ihr Vermögen entwickeln kann.</p><p>Sie erkunden Szenarien, rechnen Entscheidungen durch und sehen, was sie für Ihre Zukunft bedeuten. Alles in heutigem Geld und alles bleibt in Ihrem eigenen Browser.</p><p>Es geht nicht nur darum, was Sie aufgebaut haben, sondern vor allem darum, was Sie damit erreichen können.</p>',
  'about.intro': 'Einführung erneut ansehen', 'about.tour': 'Rundgang starten', 'about.ctryH': 'Ihr Land in Button Counter',
  'about.disclaimer': 'Button Counter gibt Einblick, keine Steuer- oder Anlageberatung. Die Regeln je Land sind vereinfacht; prüfen Sie die offiziellen Quellen.',
  'fact.intro': 'Was Button Counter {inCountry} annimmt. Jede Zahl lässt sich unter Eingeben ändern.',
  'fact.cur': 'Währung', 'fact.sp': 'Gesetzliche Rente', 'fact.spFlat': '{one} pro Monat für Alleinstehende, {two} pro Person für Paare (netto, voller Satz)', 'fact.spFlat1': '{one} pro Monat und Person (voller Satz)',
  'fact.spVar': 'hängt vom Erwerbsleben ab; tragen Sie Ihren eigenen Betrag ein', 'fact.spAge': 'Rentenalter', 'fact.tax': 'Steuer auf Kapitalerträge', 'fact.le': 'Lebenserwartung',
  'fact.pli': 'Preisniveau', 'fact.pliV': '{v} (EU = 100, 2025)', 'fact.pliNone': 'nicht im Eurostat-Vergleich', 'fact.check': 'Eigene Zahlen prüfen',
  'src.h': 'Quellen:', 'src.pli': 'Eurostat, Preisniveaus 2025', 'src.pli2': 'Eurostat-Preisniveaus nach Kategorie', 'src.le': 'Eurostat-Lebenserwartung 2023', 'src.cbs': 'CBS-Sterbetafel 2024 (lifetable.de)',
  'src.invesco': 'Invesco, Marktannahmen 2026', 'src.vanguard': 'Vanguard, Marktprognosen', 'src.amundi': 'Amundi, Marktannahmen 2026', 'src.consensus': 'Konsens von 18 Häusern (Portfoliolab)',
  'src.box3': 'SRA, niederländische Box 3 2026', 'src.ie': 'Irland, Haushalt 2026 Sozialschutz', 'src.fr': 'Frankreich, Rentenalter nach der Aussetzung', 'src.uk': 'GOV.UK, neue State Pension',
  'sup.text': 'Hilft Ihnen Button Counter?', 'sup.btn': 'Einen Kaffee spendieren',
  'b.prev': 'Zurück', 'b.next': 'Weiter', 'b.nextStep': 'Weiter: {s}', 'b.toOverview': 'Zur Übersicht', 'b.skip': 'Überspringen', 'b.showHow': 'Zeigen, wie es funktioniert', 'b.close': 'Schließen', 'b.start': 'Los geht’s',
  'tour.1.h': 'Schnell rechnen', 'tour.1.p': 'Geben Sie Land, Alter und Monatsbudget ein. Den Rest ergänzt die App, etwa gesetzliche Rente und Lebenserwartung und zeigt sofort, wie viel Vermögen Sie brauchen.',
  'tour.2.h': 'Auf einen Blick', 'tour.2.p': 'Die Chance, dass Ihr Vermögen bis zum gewählten Alter reicht. Jeder Knopf steht für eine mögliche Zukunft. Solange nichts eingegeben ist, bleibt das leer.',
  'tour.3.h': 'Die Kennzahlen', 'tour.3.p': 'Was am Ende übrig bleibt, welches Startkapital nötig ist, Puffer oder Lücke, das maximale Monatsbudget und was zu Beginn entnommen wird.',
  'tour.4.h': 'Ihr Geld in den kommenden Jahren', 'tour.4.p': 'Wie sich Ihr Vermögen in guten und schlechten Jahren entwickeln kann. Die mittlere Linie ist der wahrscheinlichste Verlauf.',
  'tour.5.h': 'Woher Ihr Monatsbudget kommt', 'tour.5.p': 'Pro Jahr der Teil aus Renten und Arbeit und der Teil aus Ihrem Vermögen.',
  'tour.6.h': 'Vertiefung', 'tour.6.p': 'Unter Einblick vergleichen Sie Portfolios, sehen, was ein anderes Monatsbudget erfordert und was Ihr Budget in anderen Ländern wert ist.',
  'tour.7.h': 'Über Button Counter', 'tour.7.p': 'Die Idee hinter der App, die Regeln für Ihr Land und alle Quellen. Dort starten Sie diesen Rundgang auch erneut.',
  'tour.8.h': 'Verfeinern', 'tour.8.p': 'Genauer gewünscht? In fünf kurzen Schritten ergänzen Sie Renten, Nebenverdienst und eigene Entscheidungen. Danach können Sie an den Reglern drehen.',
  'taxNote.NL': 'Box 3: Steuer auf eine angenommene Rendite des Vermögens über dem Freibetrag. Wählen Sie ein Szenario unter Entscheidungen.',
  'taxNote.BE': 'Ab 2026 besteuert Belgien Kursgewinne auf Finanzanlagen mit 10 %, mit etwa 10.000 € steuerfrei pro Person und Jahr. Dividenden und Zinsen werden gesondert besteuert; dies ist eine Näherung.',
  'taxNote.DE': 'Abgeltungsteuer 25 % plus Solidaritätszuschlag (26,375 %) auf Erträge über dem Sparer-Pauschbetrag von 1.000 € pro Person. Kirchensteuer nicht enthalten. Bei Aktienfonds sind 30 % der Erträge steuerfrei (Teilfreistellung); der Satz liegt dann bei etwa 18,5 %.',
  'taxNote.FR': 'Pauschalsteuer (PFU) von 31,4 % auf Kapitalerträge und Gewinne ab 2026. Ein PEA oder eine Assurance-vie kann nach der Haltedauer günstiger sein.',
  'taxNote.ES': 'Kapitalerträge werden je nach Höhe mit 19 % bis 30 % besteuert; 21 % dient als Durchschnitt.',
  'taxNote.IT': '26 % auf Kapitalerträge und Gewinne (12,5 % auf Staatsanleihen).',
  'taxNote.PT': '28 % auf Kapitalerträge und Veräußerungsgewinne.',
  'taxNote.IE': '33 % auf Gewinne und Zinsen, mit einem jährlichen Freibetrag von 1.270 € pro Person für Gewinne. Fonds und ETFs unterliegen meist einer eigenen Exit Tax.',
  'taxNote.GB': 'Auf 0 % gesetzt: Die App nimmt an, dass das Vermögen in ISAs und Pensionen liegt. Außerhalb davon werden Dividenden und Gewinne über den Freibeträgen besteuert.',
  'taxNote.US': '15 % als grober Satz für langfristige Gewinne und qualifizierte Dividenden (0, 15 oder 20 %). Entnahmen aus 401(k) oder traditionellem IRA werden als Einkommen besteuert.',
  'taxNote.XX': 'Kein Standard. Tragen Sie den Steuersatz auf Kapitalerträge ein, der für Sie gilt.',
  'spAgeNote.NL': 'AOW-Alter nach Geburtsjahr: bis 2031 festgelegt, danach an die Lebenserwartung gekoppelt. Für Sie: {a}.',
  'spAgeNote.BE': 'Gesetzliches Rentenalter 66 ab 2025 und 67 ab 2030. Für Sie: {a}.',
  'spAgeNote.DE': 'Regelaltersgrenze steigt auf 67 für Jahrgänge ab 1964. Für Sie: {a}.',
  'spAgeNote.FR': 'Gesetzliches Alter nach der Aussetzung der Reform 2026: von 62 Jahren und 9 Monaten bis 64 für Jahrgänge ab 1969. Für die volle Rente können mehr Quartale nötig sein. Für Sie: {a}.',
  'spAgeNote.ES': '67, oder 65 bei langer Beitragszeit. Für Sie: {a}.',
  'spAgeNote.IT': '67 für die Altersrente, an die Lebenserwartung gekoppelt. Für Sie: {a}.',
  'spAgeNote.PT': '66 Jahre und 9 Monate im Jahr 2026, an die Lebenserwartung gekoppelt. Für Sie: {a}.',
  'spAgeNote.IE': 'State Pension (Contributory) ab 66. Für Sie: {a}.',
  'spAgeNote.GB': '66, steigt zwischen 2026 und 2028 auf 67 und später auf 68. Für Sie: {a}.',
  'spAgeNote.US': 'Volles Rentenalter 67 für Jahrgänge ab 1960; ab 62 mit Abschlag möglich. Für Sie: {a}.',
  'spAgeNote.XX': 'Standardmäßig 67. Tragen Sie das Alter ein, das für Sie gilt. Für Sie: {a}.',
  'in.default': 'in {country}', 'in.NL': 'in den Niederlanden', 'in.GB': 'im Vereinigten Königreich', 'in.US': 'in den Vereinigten Staaten', 'in.XX': 'in Ihrem Land',
  'adv.spNoAmt': '{sp} ab {a} (Betrag noch nicht eingetragen)',
  'intro.where': 'Wo leben Sie?', 'intro.whereSub': 'Button Counter stellt dann Sprache, Währung, Rentenregeln und Steuern für Ihr Land ein. Sie können das jederzeit ändern.', 'b.continue': 'Weiter'
};

/* Service tone: Button Counter speaks as "we", to "you". Short, helpful, almost a conversation. */
Object.assign(I18N.de, {
  'ov.subEmpty': 'Sagen Sie uns Ihr Alter und was Sie pro Monat ausgeben möchten, dann zeigen wir Ihnen, wo Sie stehen.',
  'ov.subCap': 'Sie haben {c}.', 'ov.subNoCap': 'Sie haben noch kein Vermögen eingetragen, deshalb rechnen wir mit {c}: dem Betrag, der mit 90 % Wahrscheinlichkeit reicht.',
  'ov.subRest': 'Sie möchten {b} pro Monat ausgeben, {r}. Alle Beträge sind in heutigem Geld.',
  'q.sub': 'Sagen Sie uns einfach, wo Sie leben, wie alt Sie sind und was Sie pro Monat ausgeben möchten. Um den Rest kümmern wir uns: Ihr Rentenalter, die durchschnittliche Lebenserwartung und einen Topf, der am Ende leer sein darf.',
  'q.capital': 'Wie viel haben Sie bisher gespart oder angelegt?',
  'q.ageYou': 'Wie alt sind Sie?', 'q.ageOf': 'Wie alt ist {n}?',
  'q.spYou': 'Welche {sp} erwarten Sie pro Monat?', 'q.spOf': 'Welche {sp} erwartet {n} pro Monat?',
  'q.spHint': '{InCountry} hängt Ihre {sp} vom Erwerbsleben ab, deshalb können wir sie nicht für Sie eintragen. Ihren Betrag finden Sie unter {site}. Lassen Sie das Feld leer, rechnen wir ohne.',
  'f.country': 'Wo leben Sie?', 'f.persons': 'Planen Sie für eine oder für zwei Personen?', 'f.budget': 'Was möchten Sie pro Monat ausgeben?',
  'f.werk': 'Verdienen Sie noch etwas dazu? Netto pro Monat', 'f.leeftijdPaul': 'Wie alt sind Sie?', 'f.leeftijdDiana': 'Wie alt ist Ihr Partner?',
  'h.country': 'Damit wählen wir Ihre Währung, die Regeln der gesetzlichen Rente, die Steuer auf Kapitalerträge und die Lebenserwartung. Jede Zahl können Sie danach selbst anpassen.',
  'h.persons': 'Planen Sie zu zweit? Dann rechnen wir mit zwei gesetzlichen Renten, zwei Betriebsrenten und den Freibeträgen für Sie beide.',
  'h.sex': 'Wir fragen nur wegen der Lebenserwartung, denn die bestimmt das Endalter.',
  'st1.s': 'Wir beginnen mit dem Wichtigsten. Namen sind optional: Sie machen die Grafiken persönlicher und bleiben in diesem Browser.',
  'st2.s': 'Was haben Sie heute und was möchten Sie pro Monat netto ausgeben?',
  'st3.s': 'Einkommen, das später dazukommt. Schalten Sie aus, was für Sie nicht gilt.',
  'st4.s': 'Wie Ihr Geld angelegt ist, wie es besteuert wird und wie lange es reichen soll.',
  'st5.s': 'Wir haben sinnvolle Standardwerte eingetragen. Behalten Sie sie, oder passen Sie sie an Ihre Lage an.',
  'in.sub': 'Alles rechnet beim Tippen mit und nichts verlässt diesen Browser.',
  'h.startkapitaal': 'Alles, wovon Sie leben können: Ersparnisse und Anlagen zusammen.',
  'h.budget': 'Denken Sie netto pro Monat, alles inklusive: Wohnen, Einkäufe, Reisen und etwas für Unerwartetes. Wir rechnen aus, ob es reicht und woher das Geld kommt.',
  'h.werk': 'Optional. Wir rechnen es bis 67 mit (bei zwei Personen, solange einer von Ihnen jünger als 67 ist).',
  'h.leeftijdPaul': 'Ihr Alter heute, in ganzen Jahren.', 'h.leeftijdDiana': 'Alter heute, in ganzen Jahren.',
  'h.spAge': 'Das haben wir aus Ihrem Alter und Land berechnet. Kennen Sie Ihr genaues Datum? Ändern Sie es einfach.',
  'h.spAmt': 'Pro Person. Wo der Betrag feststeht, tragen wir ihn ein; sonst übernehmen Sie ihn aus Ihrer Renteninformation.',
  'h.penAmt': 'Betriebs- oder Privatrente, ohne gesetzliche Rente. Beträge aus der Mitteilung behandeln wir als heutiges Geld.',
  'h.penAge': 'Das Beginnalter aus Ihrer Rentenmitteilung.',
  'h.eindleeftijd': 'Wir gehen von der durchschnittlichen Lebenserwartung für Ihr Alter und Geschlecht aus. Die Hälfte der Menschen lebt länger; wählen Sie ein höheres Alter, wenn Sie mehr Spielraum möchten.',
  'h.restkapitaal': 'Soll etwas übrig bleiben? Tragen Sie es hier ein. Null heißt: Das Geld darf genau dann aufgebraucht sein.',
  'h.inflatie': 'Wir rechnen mit 2,4 %, dem langjährigen Durchschnitt. Erwarten Sie etwas anderes? Passen Sie es hier an.',
  'h.kosten': 'Fonds- und Depotkosten. Tragen Sie ein, was Ihre eigenen Anlagen kosten; Steuern rechnen wir separat.',
  'h.taxRate': 'Diesen Satz wenden wir jedes Jahr auf den Ertrag über dem Freibetrag an. Verluste verrechnen wir nicht.',
  'h.taxAllow': 'Der Ertrag pro Person und Jahr, der steuerfrei bleibt.',
  'h.cur': 'Das ändert nur, wie wir Beträge anzeigen; wir rechnen nichts um.',
  'h.runUntil': 'Wir rechnen weiter, bis diese Person das Endalter unten erreicht.',
  'key.bron': 'mit einer offiziellen Quelle online abgeglichen', 'key.aanname': 'ein sinnvoller Standard; prüfen Sie, ob er zu Ihnen passt', 'key.zelf': 'etwas, das nur Sie wissen oder nachschlagen können',
  'g.empty': 'Jeder Knopf ist eine mögliche Zukunft. Füllen Sie das schnelle Rechnen aus, dann zeigen wir Ihnen, wie viele gut ausgehen.',
  'g.text': 'Bei {n} von 20 Knöpfen reicht Ihr Geld {r}. Jeder Knopf ist eine mögliche Zukunft.',
  'v.emptyText': 'Sobald wir wissen, was Sie pro Monat ausgeben möchten, zeigen wir Ihnen die Chance, dass Ihr Geld reicht.',
  'v.ok': 'Mit {c} und {b} pro Monat zum Ausgeben reicht Ihr Geld {r}. Am Ende hätten Sie noch {e} übrig.',
  'v.shortOne': 'Ihr Geld ist etwa mit {a} aufgebraucht. Sie bräuchten {g} mehr zum Start oder ein Monatsbudget von {mb}.',
  'v.shortTwo': 'Ihr Geld ist etwa aufgebraucht, wenn {n} {a} wird. Sie bräuchten {g} mehr zum Start oder ein Monatsbudget von {mb}.',
  'fan.empty': 'Sagen Sie uns, was Sie pro Monat ausgeben möchten, dann zeigen wir Ihnen, wie sich Ihr Vermögen in guten und schlechten Jahren entwickeln kann.',
  'fan.sub': 'So kann sich Ihr Vermögen entwickeln, wenn die Renditen schwanken, mit dem Portfolio „{pf}“ über {n} Simulationen. Jedes Jahr ziehen wir zuerst Ihre Entnahme ab, dann die Steuer. Je dunkler das Band, desto wahrscheinlicher. Tippen oder fahren Sie darüber für die Zahlen.',
  'flow.sub': 'Pro Jahr, in heutigem Geld: was aus gesetzlicher Rente, Betriebsrente und Arbeit kommt und was wir Ihrem Vermögen entnehmen. Tippen oder fahren Sie über einen Balken für die Zahlen.',
  'flow.empty': 'Sagen Sie uns, was Sie pro Monat ausgeben möchten, dann zeigen wir Ihnen Jahr für Jahr, woher das Geld kommt.',
  'tbl.note': 'Alter von {who}. Vermögen bei durchschnittlicher Rendite. Entnahme pro Monat ist, was nach den Renten noch aus Ihrem Vermögen kommt; ein Minus bedeutet, dass Geld übrig bleibt.',
  'iz.sub': 'Möchten Sie etwas weiter schauen? Hier sehen Sie, was andere Entscheidungen bedeuten.',
  'iz.empty': 'Sagen Sie uns zuerst unter <a href="#overview">Übersicht</a>, was Sie pro Monat ausgeben möchten; danach zeigen wir hier die Vergleiche.',
  'pf.sub': 'Gleiche Einstellungen, nur der Anlagemix ändert sich. Die Erfolgschance haben wir mit {n} Simulationen mit schwankenden Renditen berechnet. Die Übersicht rechnet mit der erwarteten Rendite Ihres gewählten Portfolios.',
  'pf.autoHint': 'Wir haben {pf} für Sie gewählt (Erfolgschance {p}): das Portfolio mit der besten Chance bei Ihren aktuellen Einstellungen. Liegen zwei innerhalb von 1 Prozentpunkt, nehmen wir das, bei dem Ihnen am meisten bleibt.',
  'pf.note': 'Wir gehen von normalverteilten Renditen und einer festen Inflation von {i} aus. Echte Crashs treffen härter, deshalb rechnen wir zwei Crashjahre mit durch: eines wie 2022 und eines wie 2008, danach die erwartete Rendite. Nach Kosten und {tax}, ohne Nebenverdienst, sofern Sie keinen eingetragen haben.',
  'ld.sub': 'Und wenn Sie etwas mehr oder weniger ausgeben? Gleiche Annahmen, nur das Monatsbudget ändert sich. Die mittlere Zeile ist Ihr aktueller Betrag.',
  'kp.sub': '{InCountry} ist Ihr Budget der Maßstab: 100 % Kaufkraft. Für jedes Land zeigen wir, was derselbe Betrag dort bringt und was derselbe Lebensstil kostet.',
  'kp.noData': 'Unsere Preisdaten betreffen die EU und einige Nachbarländer, aber nicht Ihr Land. Wählen Sie ein europäisches Land, um die Kaufkraft zu vergleichen.',
  'adv.bigS': 'Vermögen ab heute, mit 90 % Wahrscheinlichkeit genug',
  'adv.p': 'Um {b} pro Monat auszugeben, {r}, brauchen Sie bei durchschnittlicher Rendite mindestens {min}. Am besten passt dazu der Anlagemix {pf}.',
  'adv.spMissing': 'Ihre {sp} haben wir noch nicht mitgerechnet: {inCountry} hängt sie vom Erwerbsleben ab. Tragen Sie oben den erwarteten Betrag ein (Sie finden ihn unter {site}), dann wird die Antwort genauer.',
  'adv.short': 'Sie haben {h}: {p} des Nötigen. Es fehlen Ihnen {g}.', 'adv.enough': 'Sie haben {h}: Das reicht, mit {g} Reserve.',
  'adv.noCap': 'Die Übersicht rechnet vorerst mit {c}. Tragen Sie unter „Wie viel haben Sie bisher gespart oder angelegt?“ ein, was schon da ist, dann zeigen wir Ihnen, was noch fehlt.',
  'tour.1.p': 'Beginnen Sie hier. Sagen Sie uns Land, Alter und Monatsbudget; wir ergänzen den Rest, etwa Rente und Lebenserwartung und zeigen sofort, was Sie brauchen.',
  'tour.2.p': 'Das ist die Chance, dass Ihr Geld bis zum gewählten Alter reicht. Jeder Knopf ist eine mögliche Zukunft. Solange nichts eingetragen ist, bleibt das leer.',
  'tour.3.p': 'Die Kennzahlen auf einen Blick: was am Ende übrig bleibt, was Sie brauchen, Puffer oder Lücke, das maximale Monatsbudget und was Sie zu Beginn entnehmen.',
  'tour.4.p': 'Wie sich Ihr Vermögen in guten und schlechten Jahren entwickeln kann. Die mittlere Linie ist der wahrscheinlichste Verlauf.',
  'tour.5.p': 'Jahr für Jahr: was aus Renten und Arbeit kommt und was aus Ihrem Vermögen.',
  'tour.6.p': 'Möchten Sie tiefer einsteigen? Unter Einblick vergleichen Sie Portfolios, probieren ein anderes Monatsbudget und sehen, was Ihr Geld im Ausland wert ist.',
  'tour.7.p': 'Hier finden Sie die Idee hinter Button Counter, die Regeln für Ihr Land und alle unsere Quellen. Auch diesen Rundgang starten Sie hier neu.',
  'tour.8.p': 'Möchten Sie es genauer? In fünf kurzen Schritten ergänzen Sie Renten, Nebenverdienst und eigene Entscheidungen. Danach drehen Sie einfach an den Reglern.',
  'about.lead': '<p>Button Counter ist Ihr persönliches Finanzcockpit. Es zeigt Ihnen, was Sie haben, wie viel Spielraum das heute und später gibt und wie sich Ihr Vermögen entwickeln kann.</p>',
  'about.body': '<p class="ab-lead">Button Counter begann als persönliches Projekt. Ich wollte nicht nur wissen, wo ich stehe, sondern auch, was ich tun kann, um dorthin zu kommen, wo ich hinwill.</p><p>Also fing ich an zu rechnen. Ich legte meine eigene Situation offen und veränderte immer nur eine Sache.</p><p class="ab-ifs"><span>Was, wenn ich mehr einzahle?</span><span>Was, wenn ich länger arbeite?</span><span>Was, wenn ich anders anlege?</span></p><p>Nach jeder Änderung sah ich, was sie bewirkte. So erkannte ich, welche Strategie am besten zu mir passt, nicht nur, um zu bestimmen, wohin ich will, sondern auch, um dort anzukommen.</p><p class="ab-turn">Diese Einsicht möchte ich auch Ihnen geben.</p><p>Deshalb wurde aus meinen eigenen Berechnungen eine App für alle, die dieselbe Frage haben. Ob Sie gerade erst anfangen, mitten im Aufbau stehen oder die Rente schon in Sicht ist: Sie geben Ihre eigene Situation ein und probieren selbst aus, was den Unterschied macht.</p><p>Und weil es um Ihr Geld geht, bleibt alles in Ihrem eigenen Browser.</p><p class="ab-close">Denn es geht nicht nur darum, was Sie aufbauen, sondern vor allem darum, was Sie damit erreichen können.</p>',
  'fact.intro': 'Das nehmen wir {inCountry} an. Jede Zahl können Sie unter Eingeben ändern.',
  'about.disclaimer': 'Button Counter gibt Ihnen Einblick, keine Steuer- oder Anlageberatung. Die Regeln je Land haben wir vereinfacht; schauen Sie also auch in die offiziellen Quellen.',
  'sup.text': 'Hilft Ihnen Button Counter?',
  'sup.after': 'Hat Ihnen das weitergeholfen? Ein Tipp oder ein Kaffee ist immer willkommen.'
});
Object.assign(I18N.de, {
  "fb.send": "Senden", "fb.sending": "Wird gesendet …", "fb.sent": "Danke! Ihr Tipp wurde gesendet.", "fb.fail": "Das Senden hat nicht geklappt. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut.", "fb.fallback": "Klappt es nicht? Öffnen Sie das Formular selbst", "fb.mail": "Lieber per E-Mail", "fb.sub": "Wählen Sie ein Thema und sagen Sie uns, was Ihnen aufgefallen ist.", "fb.privacy": "Es wird erst etwas gesendet, wenn Sie auf Senden drücken. Ihr Tipp erreicht uns direkt.",   'fb.ctry': 'Land', 'fb.persons': 'Personen',
  "fb.line": "Haben Sie einen Tipp oder eine Ergänzung? Wir freuen uns darauf.", "fb.btn": "Tipp geben", "fb.aboutH": "Helfen Sie, Button Counter besser zu machen", "fb.aboutP": "Fehlt eine Regel für Ihr Land, haben Sie einen Fehler entdeckt oder eine Idee? Sagen Sie es uns. Jeder Tipp hilft, Button Counter für alle richtig zu halten.", "fb.h": "Was können wir besser machen?", "fb.topic": "Worum geht es?", "fb.cat": "Thema", "fb.section": "Bereich", "fb.cat.data": "Eine Zahl oder Quelle stimmt nicht", "fb.cat.country": "Regeln für mein Land", "fb.cat.text": "Text oder Übersetzung", "fb.cat.idea": "Idee oder Ergänzung", "fb.cat.other": "Etwas anderes", "fb.msg": "Ihr Tipp oder Ihre Ergänzung", "fb.ph.data": "Welche Zahl und wie sollte sie lauten? Ein Link zur Quelle hilft uns sehr.", "fb.ph.country": "Welche Regel fehlt oder ist dort, wo Sie leben, anders?", "fb.ph.text": "Welcher Text und wie würden Sie es sagen?", "fb.ph.idea": "Was würde Button Counter für Sie nützlicher machen?", "fb.ph.other": "Sagen Sie uns, was Sie beschäftigt.", "fb.incl": "Meine Zahlen anhängen (Alter, Budget, Vermögen), damit Sie sehen, was ich sehe", "fb.copy": "Text kopieren", "fb.after": "Ihr E-Mail-Programm sollte sich jetzt mit Ihrer Nachricht öffnen. Passiert nichts? Kopieren Sie den Text und senden Sie ihn an {mail}.", "fb.copied": "Kopiert. Fügen Sie ihn in eine E-Mail an {mail} ein.", "fb.empty": "Schreiben Sie zuerst ein paar Worte, dann können Sie senden.", "fb.direct": "Oder schreiben Sie uns direkt:", "fb.spot": "Fehler entdeckt?",
  'src.sep': ': ', 'h.penAge': 'Das Beginnalter aus Ihrer Rentenmitteilung. Wir nehmen an, dass sie mit Ihrer {sp} beginnt; ändern Sie es, wenn das bei Ihnen anders ist.', 'penName': 'Betriebs- oder Zusatzrente', 'w.sp': '{Sp}', 'w.pension': '{Pen}',
  'st3.h': '{Sp} und {Pen}', 'f.penOn': 'Hat eine {Pen}', 'f.penAmt': '{Pen}, netto pro Monat',
  'h.penAmt': 'Tragen Sie sie als monatlichen Nettobetrag ein, ohne {sp}. Haben Sie einen Topf statt eines Monatsbetrags? Dann zählen Sie ihn zu Ihrem Vermögen.',
  'adv.pen': '{amt} {Pen} pro Monat', 'adv.noPen': 'keine {Pen}',
  'srcT.le': 'Lebenserwartung', 'srcT.tax': 'Steuer', 'srcT.mkt': 'Marktausblick', 'srcT.pli': 'Preisniveaus', 'src.checked': 'geprüft {d}',
  'penNote.NL': 'Die meisten Beschäftigten bauen über ihren Arbeitgeber oder einen Branchenfonds eine Rente auf. Ihren Betrag finden Sie auf mijnpensioenoverzicht.nl.',
  'penNote.BE': 'Viele Beschäftigte bauen über ihren Arbeitgeber eine Zusatzrente auf. Auf mypension.be sehen Sie gesetzliche und Zusatzrente.',
  'penNote.DE': 'Eine Betriebsrente ist verbreitet, aber nicht Pflicht. Ihre jährliche Renteninformation zeigt den gesetzlichen Teil; den Rest kennt Ihr Arbeitgeber oder Anbieter.',
  'penNote.FR': 'Beschäftigte in der Privatwirtschaft bauen zusätzlich eine Pflicht-Zusatzrente auf (Agirc-Arrco). info-retraite.fr zeigt beides.',
  'penNote.ES': 'Betriebliche Pensionspläne sind selten; für die meisten ist die staatliche Rente das wichtigste Einkommen. Tragen Sie diese also vor allem ein.',
  'penNote.IT': 'Beschäftigte können ihre Abfindung (TFR) in einen Pensionsfonds einzahlen. Ihre staatliche Rente finden Sie auf inps.it.',
  'penNote.PT': 'Betriebliche Pensionsfonds gibt es, sie sind aber nicht weit verbreitet; viele sparen in einem Altersvorsorgeplan (PPR). Das ist ein Topf: Zählen Sie ihn zu Ihrem Vermögen.',
  'penNote.IE': 'Viele Beschäftigte haben eine Betriebsrente und seit 2026 gibt es die automatische Teilnahme (My Future Fund). Ein Topf gehört zum Vermögen; feste Monatsbeträge tragen Sie hier ein.',
  'penNote.GB': 'Die meisten Beschäftigten sind automatisch in einer Betriebsrente angemeldet. Das ist meist ein Topf: Zählen Sie ihn zu Ihrem Vermögen, außer Sie erhalten einen festen Monatsbetrag.',
  'penNote.US': 'Ein 401(k) oder IRA ist ein Topf, kein Monatsbetrag: Zählen Sie ihn zu Ihrem Vermögen. Tragen Sie hier nur eine Rente ein, die Sie als festen Monatsbetrag erhalten.',
  'penNote.XX': 'Tragen Sie eine Rente als festen Monatsbetrag ein. Haben Sie einen Topf, zählen Sie ihn zu Ihrem Vermögen.'
});
Object.assign(I18N.de, {
 "intro.about": "<p class='ia-lead'>Button Counter ist Ihr persönliches Finanzcockpit.</p><p class='ia-show'>Es zeigt Ihnen:</p><ul class='ia-list'><li>wo Sie heute stehen, auch wenn Sie gerade erst anfangen</li><li>wie viel Spielraum Sie damit jetzt haben</li><li>wie Ihr Einkommen zum Wachstum Ihrer finanziellen Zukunft beiträgt</li></ul><div class='ia-sum'><h3>Ihre finanzielle Zukunft ist eine Rechnung mit zwei Seiten</h3><div class='ia-sides'><div class='ia-side'><b>Was einfließt</b><span>Was passiert, wenn Sie Ihr Einkommen erhöhen?</span><span>Wenn Sie jeden Monat etwas mehr einlegen oder tilgen?</span><span>Oder wenn Sie länger arbeiten, oder etwas weniger?</span></div><div class='ia-side'><b>Was Sie damit machen</b><span>Was passiert zum Beispiel, wenn Sie offensiver investieren?</span></div></div><p>Verändern Sie beide Seiten, und es entstehen Szenarien nach Maß. So sehen Sie, wie sich Ihr Verhalten und Ihr Einsatz später auswirken.</p></div><p>Sie erkunden Szenarien und rechnen Entscheidungen durch, etwa früher mit dem Sparen anzufangen oder früher aufzuhören zu arbeiten. So sehen Sie, was sie für Ihre Zukunft bedeuten. <b>Die Inflation ist bereits eingerechnet.</b> So sehen Sie, was Sie später wirklich kaufen können.</p><p class='ia-why'>Ich habe Button Counter für mich selbst gebaut. Ich wollte nicht nur wissen, wo ich stehe, sondern auch, was ich tun kann, um dorthin zu kommen, wo ich hinwill. Diese Einsicht möchte ich auch Ihnen geben.</p><p class='ia-close'>Denn es geht nicht nur darum, was Sie aufbauen, sondern vor allem darum, was Sie damit erreichen können.</p><p class='ia-priv'><svg viewBox='0 0 24 24' width='18' height='18' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='11' width='14' height='9' rx='2'/><path d='M8 11V8a4 4 0 0 1 8 0v3'/></svg><span><b>Ihre Daten bleiben bei Ihnen.</b> Sie bleiben auf Ihrem eigenen Gerät, in Ihrem eigenen Browser.</span></p>",
 "intro.ask": "Was möchten Sie wissen?",
 "intro.promise": "Eine ehrliche Antwort auf eine Frage: Reicht es? Ohne Verkaufsgespräch und zu jeder Zahl gibt es die Quelle.",
 "goal.bar": "Ihre Frage",
 "goal.sub": "Beantworten Sie unten die Fragen zu Ihrer Person, dann erscheint Ihre Antwort sofort.",
 "goal.go": "Zu meiner Antwort",
 "goal.change": "Andere Frage wählen",
 "goal.1.t": "Weiß ich eigentlich, was ich habe?",
 "goal.1.s": "Alles auf einen Blick: Sehen Sie, ob es später reicht.",
 "goal.2.t": "Was darf ich jeden Monat ausgeben?",
 "goal.2.s": "Ein Betrag, von dem Sie sorglos leben können.",
 "goal.3.t": "Was kostet ein Jahr früher aufhören?",
 "goal.3.s": "Oder weniger arbeiten: Probieren Sie es aus und sehen Sie, was sich ändert.",
 "goal.4.t": "Wo komme ich mit meinem Geld am weitesten?",
 "goal.4.s": "Vergleichen Sie, was derselbe Betrag in anderen Ländern bringt.",
 "goal.5.t": "Ich weiß es noch nicht",
 "goal.5.s": "Ich schaue mich erst einmal um."
});
Object.assign(I18N.de, {
 "ov.subEmpty": "Anhand Ihres Alters und dessen, was Sie pro Monat ausgeben möchten, zeigen wir Ihnen, wo Sie stehen.",
 "q.sub": "Mit Ihrem Alter und dem, was Sie pro Monat ausgeben möchten, rechnen wir den Rest für Sie aus: Ihr Rentenalter, die durchschnittliche Lebenserwartung und einen Topf, der am Ende leer sein darf.",
 "f.country": "Für welches Land rechnen Sie?",
 "fan.empty": "Sobald Sie einen Monatsbetrag eingeben, zeigen wir, wie sich Ihr Vermögen in guten und schlechten Jahren entwickeln kann.",
 "flow.empty": "Mit einem Monatsbetrag zeigen wir Jahr für Jahr, woher das Geld kommt.",
 "iz.empty": "Geben Sie zuerst unter <a href=\"#overview\">Übersicht</a> ein, was Sie pro Monat ausgeben möchten; danach erscheinen hier die Vergleiche.",
 "tour.1.p": "Beginnen Sie hier. Mit Land, Alter und Monatsbudget ergänzen wir den Rest, etwa Rente und Lebenserwartung und zeigen sofort, was Sie brauchen.",
 "intro.promise": "Reicht es? Das rechnen wir aus, ohne Verkaufsgespräch und mit Quelle zu jeder Zahl."
});
Object.assign(I18N.de, {
 "inst.btn": "App installieren",
 "inst.h": "Button Counter auf Ihr Handy holen",
 "inst.sub": "Die App öffnet im Vollbild, funktioniert ohne Internet und bleibt auf Ihrem Handy.",
 "inst.ios": "<li>Tippen Sie in Safari auf die Teilen-Taste.</li><li>Wählen Sie <b>Zum Home-Bildschirm</b>.</li><li>Tippen Sie auf <b>Hinzufügen</b>. Fertig.</li>",
 "inst.other": "Öffnen Sie das Browsermenü und wählen Sie <b>App installieren</b> oder <b>Zum Startbildschirm hinzufügen</b>. Sehen Sie oben eine Leiste mit einem Kreuz? Tippen Sie dort zuerst auf die drei Punkte, wählen Sie <b>In Chrome öffnen</b> und installieren Sie von dort."
});
Object.assign(I18N.de, {
 "ov.start": "Jetzt ausfüllen",
 "ov.subEmpty": "Sobald Sie Alter und Monatsbudget eingegeben haben, sehen Sie hier, wo Sie stehen.",
 "g.empty": "Jeder Knopf ist eine mögliche Zukunft. Nach dem Ausfüllen sehen Sie, wie viele gut ausgehen.",
 "tour.1.h": "Wo Sie stehen",
 "tour.1.p": "Hier sehen Sie auf einen Blick, wo Sie stehen. Sobald Sie etwas eingegeben haben, erscheint hier auch die Empfehlung.",
 "st1.t": "Grundlagen",
 "st2.t": "Zu Ihnen",
 "st2.h": "Noch etwas mehr zu Ihnen",
 "st2.s": "Namen machen Grafiken und Texte persönlicher. Ein Nebenverdienst zählt bis 67. Beides ist optional.",
 "goal.sub": "Füllen Sie die Schritte unten aus. Ihre Antwort rechnet sofort mit.",
 "ov.k.cap": "Vermögen",
 "ov.k.capAuto": "Nicht eingegeben, dieser Betrag reicht mit 90 % Wahrscheinlichkeit",
 "ov.k.bud": "Budget pro Monat",
 "ov.k.end": "Endalter",
 "ov.k.endOf": "von {n}",
 "ov.k.today": "Alle Beträge in heutigem Geld.",
 "mini.need90": "Nötig für 90 % Erfolgschance",
 "v.lead": "Die Erfolgschance ist {l} ({p}).",
 "v.lvl.good": "hoch",
 "v.lvl.warn": "mittel",
 "v.lvl.risky": "niedrig",
 "v.lvl.bad": "sehr niedrig",
 "v.risk": "Fallen die Renditen schlechter aus, ist das Geld in {f} von 100 Fällen früher aufgebraucht.",
 "v.ok": "Bei durchschnittlicher Rendite reicht Ihr Geld {r}, mit {c} und {b} pro Monat zum Ausgeben. Am Ende hätten Sie dann noch {e} übrig.",
 "fan.info": "Nominal und real erklärt",
 "fan.infoH": "Nominal oder real?",
 "fan.infoNom": "Berücksichtigt die Inflation ({p} pro Jahr). Die Beträge sind so, wie sie dann auf dem Konto stehen: Sie werden höher, aber man kann weniger dafür kaufen.",
 "fan.infoReal": "Die Preise bleiben gleich. Die Beträge sind in heutigem Geld, sodass Sie sehen, was Sie dafür kaufen können, und die Jahre gut vergleichen können.",
 "k.needOf": "von Ihren {t}, bei {b} pro Monat",
 "k.bufSum": "{t} minus {n} benötigt: {p} über dem Minimum",
 "k.shortSum": "{t} minus {n} benötigt: {p} unter dem Minimum",
 "mini.max90": "Max. pro Monat für 90 % Erfolgschance",
 "k.max90": "Maximales Monatsbudget (90 % Chance)",
 "pf.max": "Maximales Monatsbudget, durchschnittlicher Verlauf",
 "v.shortOne": "Bei durchschnittlicher Rendite ist Ihr Geld etwa mit {a} aufgebraucht. Für 90 % Erfolgschance bräuchten Sie {g} mehr zum Start oder höchstens {mb} Monatsbudget.",
 "v.shortTwo": "Bei durchschnittlicher Rendite ist Ihr Geld etwa aufgebraucht, wenn {n} {a} wird. Für 90 % Erfolgschance bräuchten Sie {g} mehr zum Start oder höchstens {mb} Monatsbudget.",
 "mini.succWith": "Erfolgschance mit {c}",
 "adv.p": "Mit {c} können Sie {b} pro Monat ausgeben, {r}. In 9 von 10 Fällen hält das Geld so lange. Am besten passt dazu der Anlagemix {pf}.",
 "priv.h": "Datenschutz",
 "vis.n": "{n} Nutzer",
 "priv.body": "<p><strong>Ihre Daten bleiben bei Ihnen.</strong> Was Sie eingeben (Alter, Beträge, Auswahl), wird nur in Ihrem eigenen Browser auf diesem Gerät gespeichert. Es wird nicht an Button Counter gesendet und niemand sonst kann es einsehen. Löschen Sie die Browserdaten, sind sie weg.</p><p><strong>Kein Tracking.</strong> Es werden keine Werbe-Cookies verwendet und Sie werden nicht verfolgt. Besuche werden anonym gezählt (Anzahl der Besuche, Seiten und Land sowie wie oft Funktionen wie Notizen oder Teilen genutzt werden, niemals Ihre Eingaben) mit GoatCounter, ohne Cookies und ohne personenbezogene Daten. Der Speicher im Browser dient nur dazu, dass die Seite funktioniert und Ihre Eingaben gemerkt werden.</p><p><strong>Was über Dritte läuft.</strong> Die Seite wird über GitHub Pages bereitgestellt, daher sieht GitHub technische Daten wie Ihre IP-Adresse, wenn die Seite lädt. Das Formular hinter „Tipp geben“ ist ein Google-Formular: Was Sie dort schreiben, erreicht den Betreiber und möglicherweise Google. Geben Sie dort nichts ein, was privat bleiben soll. Links zu Quellen führen zu anderen Websites mit eigenen Regeln.</p><p><strong>Kontakt.</strong> Was Sie über „Tipp geben“ senden, wird nur zur Verbesserung der Seite verwendet und nicht länger als nötig aufbewahrt. Möchten Sie etwas löschen lassen oder haben Sie eine Frage zu diesem Text? Senden Sie eine Nachricht über „Tipp geben“.</p>",
 "disc.h": "Haftungsausschluss",
 "disc.body": "<p>Button Counter ist ein allgemeines Rechenwerkzeug und dient nur der Information. Es ist <strong>keine</strong> Finanz-, Anlage-, Steuer-, Renten- oder Rechtsberatung, und es erfolgt keine Beratung zu Ihrer persönlichen Situation.</p><p>Die Ergebnisse sind Schätzungen auf Grundlage vereinfachter Regeln und Annahmen zu Rendite, Inflation und Lebensdauer. Die Zukunft kann abweichen, und die Regeln je Land können unvollständig oder veraltet sein. Aus den Ergebnissen können keine Rechte abgeleitet werden.</p><p>Die Nutzung dieser Seite erfolgt auf eigenes Risiko. Soweit gesetzlich zulässig, übernimmt der Betreiber keine Haftung für Entscheidungen oder Schäden, die sich aus der Nutzung dieser Seite ergeben. Prüfen Sie offizielle Quellen und ziehen Sie vor wichtigen finanziellen Entscheidungen eine unabhängige, zugelassene Beratung hinzu.</p>",
 "slot.spin": "Drehen",
 "slot.ok": "Ich möchte eine Antwort auf diese Frage",
 "slot.hint": "Drehen Sie das Rad mit dem Finger, bis Ihre Frage in der Mitte steht, und bestätigen Sie dann.",
 "slot.pick": "Frage wählen",
 "seo.title": "Wie lange reicht Ihr Erspartes? Ihre finanzielle Zukunft im Blick | Button Counter",
 "seo.desc": "Rechner für Ihre finanzielle Zukunft. Alter, Erspartes und Monatsbudget eingeben und sehen, mit welcher Wahrscheinlichkeit Ihr Geld reicht. Auf Basis von 4.000 Simulationen.",
 "faq.h": "Häufige Fragen",
 "faq.q1": "Was ist Button Counter?",
 "faq.a1": "<p>Button Counter gibt Ihnen einen Einblick in Ihre finanzielle Zukunft: wie lange Ihr Erspartes reicht und was sich ändert, wenn Sie etwas anpassen. Sie geben Ihr Alter, Ihr Erspartes und Ihr gewünschtes Monatsbudget ein. Button Counter zeigt dann die Wahrscheinlichkeit, dass Ihr Geld bis zu Ihrem Endalter reicht, auf Basis von 4.000 Simulationen guter und schlechter Börsenjahre.</p>",
 "faq.q2": "Wie viel Erspartes brauche ich, um mit der Arbeit aufzuhören?",
 "faq.a2": "<p>Das hängt von Ihrem Monatsbudget, Ihrem Alter und Ihrer Rente ab. Button Counter berechnet den Betrag, mit dem Ihr Geld mit 90 % Wahrscheinlichkeit reicht. Als grobe Faustregel braucht man oft das 25- bis 30-Fache der Jahresausgaben, die die Renten nicht decken.</p>",
 "faq.q3": "Wie wird die Erfolgschance berechnet?",
 "faq.a3": "<p>Button Counter führt 4.000 Simulationen durch, in denen die Rendite jedes Jahr schwankt. Das geschieht für vier Mischungen (defensiv, ausgewogen, offensiv und Sparen ohne Anlegen), nach Kosten, Steuern und Inflation, sodass alle Beträge in heutigem Geld angegeben sind. Die Erfolgschance ist der Anteil der Simulationen, in denen Ihr Geld bis zu Ihrem Endalter reicht. Zwei Crash-Szenarien, eines wie 2008 und eines wie 2022, werden getrennt gezeigt.</p>",
 "faq.q4": "Für welche Länder funktioniert Button Counter?",
 "faq.a4": "<p>Button Counter hat eigene Regeln für die Niederlande, Belgien, Deutschland, Frankreich, Spanien, Italien, Portugal, Irland, das Vereinigte Königreich und die Vereinigten Staaten sowie eine allgemeine Einstellung für andere Länder. Jedes Land hat seine eigene staatliche Rente, sein Rentenalter und seine Steuer auf Kapitalerträge. Außerdem vergleicht Button Counter, was Ihr Budget in 31 europäischen Ländern wert ist, auf Basis der Preisniveaus von Eurostat.</p>",
 "faq.q5": "Ist Button Counter kostenlos, und was passiert mit meinen Daten?",
 "faq.a5": "<p>Button Counter ist werbefrei und benötigt kein Konto. Der größte Teil ist kostenlos und bleibt es; einige erweiterte Funktionen sind bewusst als Pro abgeschlossen. Ihre Eingaben bleiben in Ihrem eigenen Browser auf Ihrem eigenen Gerät und werden nicht an Button Counter gesendet. Besuche und die Nutzung von Funktionen werden anonym gezählt, ohne Cookies.</p>",
 "faq.q6": "Ist das eine Finanzberatung?",
 "faq.a6": "<p>Nein. Button Counter ist ein allgemeines Rechenwerkzeug, das Schätzungen auf Grundlage vereinfachter Regeln und Annahmen liefert. Es berät nicht zu Ihrer persönlichen Situation. Prüfen Sie offizielle Quellen und ziehen Sie vor wichtigen finanziellen Entscheidungen eine unabhängige, zugelassene Beratung hinzu.</p>",
 "home.h1": "Ihre finanzielle Zukunft, Knopf für Knopf.",
 "home.kick": "Finanzielle Perspektive",
 "home.quick": "Ihre Zahlen",
 "home.more": "Alles verfeinern",
 "pl.h": "Zwei Pläne vergleichen",
 "pl.sub": "Speichern Sie Ihre Eingaben als Plan A oder B, ändern Sie etwas und sehen Sie den Unterschied nebeneinander.",
 "pl.now": "Jetzt",
 "pl.a": "Plan A",
 "pl.b": "Plan B",
 "pl.save": "Als {n} speichern",
 "pl.load": "Laden",
 "pl.clear": "Löschen",
 "pl.empty": "Noch nicht gespeichert",
 "pl.saved": "Als {n} gespeichert",
 "pl.loaded": "{n} geladen",
 "pl.r.bud": "Monatsbudget",
 "pl.r.cap": "Erspartes",
 "pl.r.end": "Endalter",
 "pl.r.succ": "Erfolgschance",
 "pl.r.c90": "Nötig für 90 % Chance",
 "pl.r.max": "Max. Monatsbudget (90 %)",
 "pl.r.ctry": "Land",
 "sh.btn": "Exportieren",
 "sh.h": "Ergebnis teilen oder speichern",
 "sh.sub": "Für Ihren Partner, Ihre Beratung oder für später.",
 "sh.link": "Link kopieren",
 "sh.linkS": "Der Link enthält Ihre eingegebenen Zahlen. Jeder mit dem Link kann sie sehen.",
 "sh.print": "Drucken oder als PDF speichern",
 "sh.printS": "Eine saubere Seite mit Ihrem Ergebnis und dem Diagramm.",
 "sh.copy": "Zusammenfassung kopieren",
 "sh.copyS": "Ein kurzer Text für eine Nachricht oder E-Mail.",
 "sh.done": "Kopiert",
 "sh.fail": "Kopieren hat nicht geklappt. Markieren Sie den Text und kopieren Sie ihn selbst.",
 "sh.empty": "Geben Sie zuerst Ihr Monatsbudget ein; dann gibt es etwas zu teilen.",
 "sh.loaded": "Plan aus dem Link geladen.",
 "th.btn": "Design", "th.auto": "Automatisch", "th.light": "Hell", "th.dark": "Dunkel",
 "calc": "Wird berechnet…",
 "nav.plan": "Plan",
 "nav.compare": "Vergleich"
});

/* ===== v7: werk per partner, extra potten, overzicht en gesplitste knop ===== */
Object.assign(I18N.de, {
 'adv.pZero': 'Sie brauchen kein Vermögen, um {b} pro Monat auszugeben, {r}: Ihr Einkommen deckt es in 9 von 10 Fällen. Legen Sie doch Geld an, passt der Anlagemix {pf} am besten.',
 'adv.p': 'Mit {c} können Sie {b} pro Monat ausgeben, {r}. In 9 von 10 Fällen hält das Geld so lange. Bei diesem Betrag passt der Anlagemix {pf} am besten.',
 'pot.sumOff': 'Zählt nicht: Dieser Topf gehört Ihrem Partner und Sie rechnen jetzt für eine Person.',
 'wk.warnRev': 'Zeitraum {n}: „bis“ liegt nicht nach „ab“, daher zählt er nicht.', 'wk.warnOver': 'Achtung: Die Zeiträume {i} und {j} überschneiden sich von {a} bis {b}; in diesen Jahren addieren sich die Beträge.',
 'w.over': 'mehr als {v}',
 'k.bufNone': 'Für dieses Budget ist kein Startkapital nötig.', 'k.wrSave': 'Keine Entnahme: {m} pro Monat bleiben übrig und fließen ins Vermögen.', 'fan.wrSave': 'Pro Monat übrig im Jahr 1, fließt ins Vermögen',
 'f.wkAmt': 'Einkommen aus Arbeit, netto pro Monat', 'h.wkAmt': 'Gehalt oder Gewinn nach Steuern. Leer lassen, wenn Sie nicht mehr arbeiten.',
 'f.wkEnd': 'Arbeitet bis zum Alter', 'h.wkEnd': 'Standardmäßig das Alter, ab dem Ihre {sp} beginnt. Hören Sie früher oder später auf? Dann hier ändern.',
 'wk.h': 'Arbeit', 'wk.per': 'Nach Zeiträumen verfeinern', 'wk.one': 'Zurück zu einem Betrag', 'wk.from': 'Ab Alter', 'wk.to': 'Bis Alter', 'wk.amt': '{cur} netto pro Monat',
 'wk.del': 'Zeitraum entfernen', 'wk.add': '+ Zeitraum hinzufügen', 'wk.perHint': 'Zum Beispiel weniger Stunden ab 60. Von 55 bis 60 umfasst die Jahre, in denen Sie 55 bis einschließlich 59 sind.',
 'st2.s': 'Namen machen Grafiken und Texte persönlicher. Einkommen aus Arbeit zählt bis zum gewählten Alter. Alles ist optional.',
 'tour.8.p': 'Möchten Sie es genauer? Ergänzen Sie Renten, Einkommen aus Arbeit, zusätzliche Töpfe und eigene Entscheidungen. Beim ersten Mal in fünf kurzen Schritten, danach alles auf einer Seite.',
 'w.work': 'Einkommen aus Arbeit', 'w.pots': 'Zusätzliche Töpfe', 'w.lump': 'Einmalig ins Vermögen', 'v.wk': 'Mit Einkommen aus Arbeit', 'v.pots': 'Zusätzliche Töpfe: {n}',
 'pot.h': 'Zusätzliche Rente oder Topf', 'pot.s': 'Zum Beispiel aus einem anderen Land oder ein separater Anlagetopf. Nur wenn es für Sie gilt.',
 'pot.intro': 'Fügen Sie einen Topf für Geld hinzu, das später frei wird: auf einmal oder als monatliche Zahlung. Zählen Sie es nicht zusätzlich zu Ihrem Vermögen oben.',
 'pot.add': '+ Topf hinzufügen', 'pot.name': 'Name des Topfes', 'pot.namePh': 'Zum Beispiel Topf USA', 'pot.nameN': 'Topf {n}', 'pot.del': 'Topf entfernen',
 'pot.kind': 'Art der Auszahlung', 'pot.whose': 'Von wem', 'pot.monthly': 'Monatlich', 'pot.lump': 'Auf einmal',
 'pot.amtL': 'Betrag vor Steuern', 'pot.amtM': 'Pro Monat vor Steuern', 'pot.when': 'Wird frei mit Alter', 'pot.from': 'Ab Alter', 'pot.until': 'Bis Alter', 'pot.life': 'lebenslang',
 'pot.tax': 'Steuer, die Sie darauf zahlen', 'pot.taxHint': 'Das hängt davon ab, wo Sie wohnen und wo der Topf aufgebaut wurde. Bitte selbst prüfen, etwa beim Finanzamt oder bei einer Beratung. Wir rechnen mit dem Prozentsatz, den Sie eingeben. Beträge in heutigem Geld.',
 'pot.sumEmpty': 'Geben Sie einen Betrag ein, damit dieser Topf zählt.', 'pot.sumL': 'Netto {v} auf einmal mit {a}. Das fließt in Ihr Vermögen.', 'pot.sumM': 'Netto {v} pro Monat ab {a}, {u}.', 'pot.sumU': 'bis {u}', 'pot.sumLife': 'lebenslang',
 'u.grossMonth': '{cur} brutto pro Monat',
 'in.modeAria': 'Wie möchten Sie ausfüllen?', 'in.all': 'Alles auf einer Seite', 'in.stepsMode': 'Schritt für Schritt',
 'in.allH': 'Alle Eingaben auf einer Seite. Tippen Sie auf eine Zeile, um direkt dorthin zu springen.', 'in.stepsH': 'Fünf kurze Schritte. Praktisch beim ersten Mal.',
 'ins.h': 'Was Sie eingegeben haben', 'ins.sub': 'Tippen Sie auf eine Zeile, um sie zu ändern.', 'ins.ctry': 'Land', 'ins.age': 'Alter', 'ins.bud': 'Monatsbudget', 'ins.cap': 'Vermögen',
 'ins.wk': 'Einkommen aus Arbeit', 'ins.pots': 'Zusätzliche Töpfe', 'ins.pf': 'Anlagemix', 'ins.tax': 'Steuer', 'ins.end': 'Rechnen bis', 'ins.rest': 'Restvermögen', 'ins.infl': 'Inflation und Kosten',
 'ins.periods': 'nach Zeiträumen ({n})', 'ins.until': 'bis {a}', 'ins.from': 'ab {a}',
 'duo.aria': 'Feedback oder Dank', 'duo.tip': 'Tipp geben', 'duo.tipS': 'Idee, Fehler oder Frage', 'duo.cof': 'Kaffee spendieren', 'duo.cofS': 'Als Dankeschön',
 'sup.after': 'Hat Ihnen das weitergeholfen? Ein Tipp oder ein Kaffee ist immer willkommen.'
});

/* wat is er nieuw (per versie; nieuwste bovenaan) */
Object.assign(I18N.de, {
 'nt.open': 'Notizen öffnen', 'nt.h': 'Notizen', 'nt.sub': 'Fragen an sich selbst, Gedanken und offene Punkte. Praktisch neben Ihrem Plan.', 'nt.ph': 'Zum Beispiel: Fragen an Ihre Rentenberatung, Dinge zum Nachprüfen, was Ihnen am Ergebnis auffällt…', 'nt.q': '+ Frage', 'nt.t': '+ Gedanke', 'nt.d': '+ Zu erledigen', 'nt.date': '+ Datum', 'nt.qP': 'Frage: ', 'nt.tP': 'Gedanke: ', 'nt.dP': 'Zu erledigen: ',
 'nt.saved': 'In diesem Browser gespeichert', 'nt.typing': 'Speichern…', 'nt.noSave': 'Speichern nicht möglich: Ihr Browser blockiert den Speicher', 'nt.clear': 'Notizen leeren', 'nt.sure': 'Alle Notizen löschen? Das lässt sich nicht rückgängig machen.', 'nt.yes': 'Ja, leeren', 'nt.no': 'Abbrechen', 'nt.priv': 'Ihre Notizen bleiben in diesem Browser auf diesem Gerät. Sie werden nicht geteilt und nirgendwohin gesendet.', 'nt.add': 'Hinzufügen',
 'pro.tag': 'Pro', 'pro.tip': 'Pro-Funktion, vorübergehend verfügbar', 'pro.toast': 'Das wird später eine Pro-Funktion. Im Moment können Sie sie einfach nutzen.', 'rel.9.v': 'Version 9 · November 2026', 'rel.9.n1': 'Notizen unten rechts: Fragen, Gedanken und offene Punkte festhalten, auf jeder Seite', 'rel.9.n2': 'Funktionen mit einer Uhr werden später Pro. Im Moment können Sie sie noch nutzen.',
 'rel.8.v': 'Version 8 · November 2026', 'rel.8.n1': 'Neue Überschrift: Ihre finanzielle Zukunft, Knopf für Knopf', 'rel.8.n2': 'Verpasste Updates sehen Sie jetzt einmalig und gesammelt', 'rel.since': 'Sie haben {n} Updates verpasst.',
 'rel.7.v': 'Version 7 · November 2026', 'rel.h': 'Was ist neu?', 'rel.newH': 'Neu', 'rel.fixH': 'Behoben', 'rel.ok': 'Alles klar',
 'rel.7.n1': 'Einkommen pro Person, für jeden Zeitraum', 'rel.7.n2': 'Zusätzliche Töpfe: einmalig oder monatlich, mit eigenem Steuersatz', 'rel.7.n3': 'Feinabstimmung auf einer einzigen Seite',
 'rel.7.n4': 'Ein Button für einen Tipp oder einen Kaffee', 'rel.7.n5': 'Gespeicherte Szenarien zeigen immer aktuelle Ergebnisse', 'rel.7.n6': 'Feedback mit vollständigem Bericht Ihrer Eingaben',
 'rel.7.f1': 'Dezimalkomma funktioniert (2,5 bleibt 2,5)', 'rel.7.f2': 'Der Rat stimmt auch, wenn Sie kein Vermögen brauchen', 'rel.7.f3': 'Die Sprache bleibt, wenn Sie ein Land wählen',
 'rel.7.f4': 'Warnung bei überlappenden Zeiträumen; kein ∞ mehr bei extremen Beträgen', 'rel.7.f5': 'Passt auf kleine Smartphone-Displays'
});

/* landingspagina per doel, vertrouwensregel, FAQ 7 */
Object.assign(I18N.de, {
"faq.q7": "Warum Button Counter und nicht ein einfacher Rechner?",
"faq.a7": "<p>Ein einfacher Rechner beantwortet eine einzelne Rechnung, etwa wie lange ein Betrag reicht oder wie viel Steuer Sie auf Erspartes zahlen. Button Counter bringt alles in einen Plan: Ihr Erspartes, Ihre Betriebsrente und gesetzliche Rente, Arbeit pro Zeitraum, eine oder zwei Personen und die Regeln Ihres Landes. Statt einer einzigen Zahl sehen Sie die Wahrscheinlichkeit, dass Ihr Geld reicht, auf Basis von 4.000 Simulationen. Bei jeder Zahl steht, ob sie aus einer Quelle stammt, eine Annahme ist oder von Ihnen eingegeben wurde.</p>",
"trust.upd": "Aktualisiert {date}",
"trust.src": "{n} Quellen"
});
Object.assign(I18N.de, {
"lp.enough.h1": "Reicht mein Geld, wenn ich aufhöre zu arbeiten?",
"lp.enough.intro": "Geben Sie Ihr Alter, Ihr Erspartes und Ihr Monatsbudget ein. Sie sehen sofort, wie groß die Chance ist, dass Ihr Geld bis zu dem Alter reicht, das Sie wählen, mit Ihren Renten eingerechnet.",
"lp.enough.title": "Reicht mein Geld, wenn ich aufhöre zu arbeiten? | Button Counter",
"lp.enough.desc": "Berechnen Sie die Chance, dass Ihr Erspartes bis zu dem Alter reicht, das Sie wählen, mit gesetzlicher Rente, Betriebsrente, Steuern und Inflation. Ohne Konto, Ihre Daten bleiben auf Ihrem Gerät.",
"lp.spend.h1": "Wie viel kann ich pro Monat ausgeben, wenn ich aufhöre zu arbeiten?",
"lp.spend.intro": "Geben Sie Ihr Erspartes und Ihre Renten ein. Button Counter zeigt, welchen Betrag Sie pro Monat ausgeben können, damit Ihr Geld mit guter Chance bis zu dem Alter reicht, das Sie wählen.",
"lp.spend.title": "Wie viel kann ich im Ruhestand pro Monat ausgeben? | Button Counter",
"lp.spend.desc": "Sehen Sie, welches Monatsbudget Ihr Erspartes und Ihre Renten tragen können und wie groß die Chance ist, dass es reicht. Ohne Konto.",
"lp.earlier.h1": "Kann ich früher aufhören zu arbeiten?",
"lp.earlier.intro": "Probieren Sie einen anderen Rentenbeginn oder weniger Arbeit aus und sehen Sie sofort, was es für die Chance bedeutet, dass Ihr Geld reicht. Sie können auch zwei Pläne nebeneinanderstellen.",
"lp.earlier.title": "Früher in Rente gehen? Rechnen Sie es durch | Button Counter",
"lp.earlier.desc": "Berechnen Sie, was früher aufhören oder weniger arbeiten für Ihr Erspartes und Ihre Renten bedeutet, mit den Regeln Ihres Landes. Ohne Konto.",
"lp.abroad.h1": "Was ist mein Geld in einem anderen Land wert?",
"lp.abroad.intro": "Vergleichen Sie, was Ihr Monatsbudget in 31 europäischen Ländern wert ist, auf Basis der Preisniveaus von Eurostat. Button Counter kennt außerdem die Renten- und Steuerregeln von zehn Ländern.",
"lp.abroad.title": "Rente im Ausland: Was ist Ihr Geld dort wert? | Button Counter",
"lp.abroad.desc": "Vergleichen Sie die Kaufkraft Ihres Monatsbudgets in 31 europäischen Ländern und prüfen Sie Ihren Plan mit den Regeln von zehn Ländern. Ohne Konto."
});
Object.assign(I18N.de, {
 "age.q": "Wie alt sind Sie ungefähr?",
 "age.aria": "Ihr Alter",
 "age.note": "Eine Altersgruppe genügt. Ihr genaues Alter können Sie später eintragen, wenn Sie möchten.",
 "goalY.2.t": "Komme ich so bis zur Rente?",
 "goalY.2.s": "Stellen Sie Ihre Sparrate neben Ihre Rente und sehen Sie, ob es reicht.",
 "goalY.3.t": "Was bringt etwas mehr Sparen?",
 "goalY.3.s": "Ändern Sie, wie viel Sie zurücklegen, und sehen Sie sofort den Unterschied.",
 "goalY.4.t": "Sparen oder anlegen: was ist der Unterschied?",
 "goalY.4.s": "Vergleichen Sie drei Arten der Geldanlage über lange Zeit.",
 "q.inleg": "Wie viel legen Sie pro Monat zurück?",
 "f.budgetOpb": "Wie viel möchten Sie später pro Monat ausgeben?",
 "opb.k": "Rund um die Rente, mit {a}",
 "opb.empty": "Tragen Sie ein, was Sie pro Monat zurücklegen, dann sehen Sie, was daraus wird.",
 "opb.fill": "Betrag eintragen",
 "opb.late": "Ihr Rentenalter ist erreicht oder nah. Im restlichen Überblick sehen Sie, ob Ihr Vermögen reicht.",
 "opb.range": "In 8 von 10 Fällen zwischen {lo} und {hi}.",
 "opb.split": "Davon stammen {put} aus Ihrer eigenen Tasche: {inl} pro Monat, {y} Jahre lang, plus Ihr heutiges Vermögen. Der Rest ist Rendite.",
 "opb.note": "Die Mitte von {n} Rechenbeispielen, in heutigem Geld, nach Kosten und Steuern. Ein Rechenbeispiel, kein Versprechen.",
 "opb.edit": "Betrag ändern",
 "goalY.5.t": "Werde ich vom Sparen und Anlegen wirklich reich?",
 "goalY.5.s": "Ohne Hype: was monatliches Sparen bringt, auch wenn es schlecht läuft.",
 "goalY.6.t": "Wann bin ich finanziell frei (FIRE)?",
 "goalY.6.s": "Sehen Sie, ab welchem Alter Ihr Vermögen zum Leben reicht.",
 "opb.mixh": "Derselbe Betrag, drei Arten der Geldanlage",
 "opb.mixrow": "{n}: {mid} (zwischen {lo} und {hi})",
 "opb.fireH": "Finanziell frei (FIRE)",
 "opb.fire": "Mit {b} pro Monat brauchen Sie etwa {t} (das 25-Fache Ihrer Jahresausgaben, eine Faustregel). Sie erreichen das:",
 "opb.fireNo": "Mit {b} pro Monat brauchen Sie etwa {t} (das 25-Fache Ihrer Jahresausgaben, eine Faustregel). Das erreichen Sie mit diesem Betrag nicht vor der Rente, auch nicht, wenn es gut läuft. Mehr sparen oder ein niedrigeres Budget hilft.",
 "opb.fireAsk": "Tragen Sie ein, was Sie später pro Monat ausgeben möchten, dann sehen Sie, wann Sie finanziell frei sein könnten.",
 "opb.at": "mit {n}",
 "opb.never": "nicht vor Ihrer Rente",
 "opb.fireL": "Wenn es gut läuft",
 "opb.fireM": "Im mittleren Fall",
 "opb.fireB": "Wenn es schlecht läuft",
 "lvl.q": "Wie möchten Sie später leben?",
 "lvl.pm": "{a} pro Monat",
 "lvl.1.n": "Sparsam",
 "lvl.2.n": "Durchschnittlich",
 "lvl.3.n": "Komfortabel",
 "lvl.1.e": "Kleine Mietwohnung, selbst kochen, Fahrrad und ÖPNV, ab und zu ausgehen.",
 "lvl.2.e": "Normale Wohnung, regelmäßig essen gehen, Auto oder guter ÖPNV, ein Urlaub im Jahr.",
 "lvl.3.e": "Große Wohnung, oft ausgehen, Auto, mehrere Reisen im Jahr.",
 "lvl.hint": "Richtwerte in heutigem Geld, auf Basis des niederländischen Nibud-Minimums (2025) und der CBS-Ausgaben nach Einkommen, auf 2025 umgerechnet. Für zwei Personen rechnen wir das 1,4-Fache, weil Sie Wohnkosten teilen. Für andere Euroländer skalieren wir mit Preisniveaus. Durchschnittswerte, keine Beratung. Den Betrag können Sie unten ändern.",
 "src.nibudmin": "Nibud, Mindestbudgets Juli 2025",
 "src.cbsb": "CBS, Haushaltsausgaben",
 "lvl.hintX": "Außerhalb der Niederlande ist das eine Orientierung: Die Beträge sind niederländisch und mit Preisniveaus umgerechnet, nicht auf Ausgabenmustern Ihres Landes beruhend."
});

/* uitgavenverloop (versie 11) */
Object.assign(I18N.de, {
 'f.curve': 'Wie entwickeln sich die Ausgaben später?',
 'curve.lbl': 'Ausgabenverlauf',
 'curve.o0': 'Gleichbleibend',
 'curve.o1': 'Typisch',
 'curve.o2': 'Stärker sinkend',
 'curve.h0': 'Gleichbleibend: Die Ausgaben bleiben jedes Jahr gleich, in heutigem Geld. Das ist die vorsichtigste Wahl.',
 'curve.h1': 'Typisch: Ab {a} Jahren geben Sie jedes Jahr etwa 1 % weniger aus. Mit {b} sind das etwa {x} weniger als mit {a}.',
 'curve.h2': 'Stärker sinkend: Ab {a} Jahren geben Sie jedes Jahr etwa 2 % weniger aus. Mit {b} sind das etwa {x} weniger als mit {a}.',
 'curve.two': 'Bei zwei Personen zählt das Alter der älteren Person.',
 'curve.note': 'Es geht um heutiges Geld: Die Beträge steigen also weiterhin mit der Inflation. Das sind Durchschnittswerte aus Studien unter anderem in den Niederlanden, in Großbritannien und in den USA. Es ist keine Prognose für Ihren Haushalt und keine Beratung. Gleichbleibend bleibt die vorsichtigste Wahl. Quellen: <a href="https://www.pwc.nl/nl/assets/documents/bestedingen-van-ouderen-nibud-pwc.pdf" target="_blank" rel="noopener">Nibud/PwC</a>, <a href="https://www.financialplanningassociation.org/journal/Pages/MAY14-Exploring-the-Retirement-Consumption-Puzzle-.aspx" target="_blank" rel="noopener">Blanchett</a>, <a href="https://ifs.org.uk/sites/default/files/2022-09/IFS-Report-R209-How-does-spending-change-through-retirement.pdf" target="_blank" rel="noopener">IFS</a>.',
 'src.nibud': 'Nibud/PwC, Ausgaben älterer Menschen',
 'src.blanchett': 'Blanchett, Ausgaben im Ruhestand',
 'src.ifs': 'IFS, Ausgaben im Ruhestand',
 'rel.11.v': 'Version 11 · November 2026',
 'rel.11.n1': 'Ausgabenverlauf: Wählen Sie, ob Ihre Ausgaben nach 65 gleich bleiben oder sinken'
});

/* uitgavenverloop met prijskaartje (versie 12) */
Object.assign(I18N.de, {
 'zk.cap': 'Unter jeder Wahl: das nötige Vermögen, mit 90 % Wahrscheinlichkeit genug.',
 'zk.dChosen': '{o} senkt das nötige Vermögen um {d} gegenüber „{f}“.',
 'zk.dAlt': 'Wählen Sie „{o}“, brauchen Sie {d} weniger.',
 'zk.same': 'Bei diesen Zahlen macht der Ausgabenverlauf kaum einen Unterschied.',
 'rel.12.v': 'Version 12 · November 2026',
 'rel.12.n1': 'Ausgabenverlauf mit Preisschild: Sehen Sie unter jeder Wahl, wie viel Vermögen Sie brauchen'
});
Object.assign(I18N.de, {
 'tip.btn': "Teilen",
 'tip.msg': "Hallo! Ich habe diese praktische App gefunden: Button Counter. In wenigen Minuten bekommst du einen Einblick in deine finanzielle Zukunft: wie viel du brauchst und was du selbst tun kannst. Kostenlos, ohne Konto, und deine Zahlen bleiben auf deinem eigenen Handy. Vielleicht hilft sie dir auch:",
 'tip.copied': "Nachricht mit Link kopiert. Füge sie in WhatsApp oder eine E-Mail ein.",
 'tip.url': "https://countingbuttons.com/",
 'rel.14.n2': "Teilen-Knopf oben: Empfehlen Sie die App mit einer kurzen Nachricht weiter",
 'curve.intro': "Studien zeigen, dass Menschen in verschiedenen Lebensphasen unterschiedlich ausgeben. Deshalb wählen Sie hier, wie sich Ihre Ausgaben später entwickeln.",
 'wk.perTip': 'Verdienen Sie nicht bis zum Schluss gleich viel? Geben Sie je Alter einen anderen Betrag an, zum Beispiel weniger Stunden ab 60.',
 'pro.tip': 'Pro-Funktion, kommt bald',
 'rel.14.v': 'Version 14 · November 2026',
 'rel.14.n1': 'Pro-Funktionen haben jetzt ein Schloss. Die Grundversion bleibt kostenlos. Tippen Sie auf ein Schloss und bestimmen Sie mit, was in Pro kommt.'
});

/* schuld: hypotheek of lening met maandlast en aflooptijd (versie 15) */
Object.assign(I18N.de, {
 'debt.h': 'Schulden',
 'debt.s': 'Hypothek oder Kredit: Rate, Laufzeit und tilgungsfreier Teil',
 'debt.intro': 'Zahlen Sie noch eine Hypothek oder einen Kredit ab? Tragen Sie ein, was Sie pro Monat zahlen, wie lange das noch läuft und ob ein tilgungsfreier Teil dabei ist. Den Zins brauchen Sie nicht einzutragen: er steckt schon in Ihrer Rate. Die Rate bleibt in Euro gleich, in heutigem Geld wird sie also jedes Jahr etwas leichter.',
 'debt.opb': 'Solange Sie sparen, zahlen Sie das aus Ihrem Einkommen. Die Berechnung zählt es ab Ihrem Rentenalter mit.',
 'debt.add': 'Schuld hinzufügen', 'debt.del': 'Diese Schuld entfernen', 'debt.name': 'Name der Schuld', 'debt.namePh': 'Name, zum Beispiel Hypothek', 'debt.nameN': 'Schuld {n}',
 'debt.pm': 'Monatliche Rate', 'debt.yrs': 'Restlaufzeit', 'debt.bal': 'Tilgungsfreier Betrag (optional)', 'debt.unitM': '{cur} pro Monat',
 'debt.balHint': 'Tilgungsfrei heißt: Dieser Teil wird während der Laufzeit nicht abgezahlt, die Schuld bleibt also am Ende der Laufzeit bestehen. Die Berechnung zählt den Betrag dann als eine Zahlung aus Ihrem Vermögen. Zahlen Sie ihn später aus dem Verkauf Ihres Hauses? Dann lassen Sie das Feld leer.',
 'debt.in': 'Ist die Rate schon in Ihrem Monatsbudget enthalten?', 'debt.inY': 'Ja', 'debt.inN': 'Nein, kommt dazu',
 'debt.inHint': 'Bei Ja sinkt Ihr Budget um diese Rate, sobald die Schuld getilgt ist. Bei Nein kommt die Rate bis dahin zu Ihrem Budget hinzu.',
 'debt.sumEmpty': 'Tragen Sie die Rate und die Restlaufzeit ein, dann sehen Sie das Ergebnis.',
 'debt.sum': 'Sie zahlen {m} pro Monat, noch {t} (bis {yr}).',
 'debt.sumBal': 'Am Ende zahlen Sie zusätzlich {v} auf einmal.',
 'debt.sumOnlyBal': 'Im Jahr {yr} (Restlaufzeit {t}) zahlen Sie {v} auf einmal.',
 'debt.sumAge': 'Sie sind dann {a} Jahre alt.', 'debt.sumFree': 'Danach brauchen Sie {m} pro Monat weniger.',
 'debt.m': '{m} Monate', 'debt.shareLine': '{n}: {m} pro Monat, noch {t}', 'debt.shareBal': ', dazu am Ende {v} auf einmal', 'debt.shareOnly': '{n}: {v} auf einmal, Restlaufzeit {t}',
 'ins.debt': 'Schulden',
 'rel.15.v': 'Version 15 · November 2026',
 'rel.15.n1': 'Schulden: Hypothek oder Kredit mitrechnen, mit Rate, Laufzeit und einem etwaigen tilgungsfreien Teil. Eine Pro-Funktion: Tippen Sie auf das Schloss und sagen Sie, ob Sie sie wollen.',
 'rel.16.v': 'Version 16 · November 2026',
 'rel.16.n1': 'Neue Fotos in der ganzen App: oben auf jedem Tab, bei Ihrem Ergebnis und in den Schritten.',
 'rel.16.n2': 'Zu Beginn wählen Sie eine Altersgruppe statt Ihres genauen Alters.',
 'rel.16.n3': 'Die Notizen haben jetzt ein eigenes Bildchen.',
 'rel.17.v': 'Version 17 · November 2026',
 'rel.17.n1': 'Die Einführung ist übersichtlicher: in klare Abschnitte gegliedert und mit neuem Text, der besser erklärt, was Button Counter tut.',
 'rel.17.n2': 'In der Einführung wählen Sie jetzt immer eine Frage. Überspringen ist nicht mehr möglich.',
 'rel.18.v': 'Version 18 · November 2026',
 'rel.18.n1': 'Einen Tipp zu geben geht jetzt in einem Schritt: auf Senden drücken, fertig, ohne zusätzlichen Bildschirm.',
 'rel.18.n2': 'Wählen Sie „Ich weiß es noch nicht“, sagt die Schaltfläche jetzt, was folgt: eine kurze Tour.',
 'rel.19.v': 'Version 19 · November 2026',
 'rel.19.n1': 'Die Seite „Über“ erzählt jetzt, wie Button Counter entstanden ist, mit mehr Platz und Ruhe im Layout.'
});

/* veelgestelde vraag uitgavenverloop en tip bij de naamvelden (versie 13) */
Object.assign(I18N.de, {
 'faq.q8': 'Bleiben meine Ausgaben in der Berechnung gleich oder sinken sie?',
 'faq.a8': "<p>Das wählen Sie unter „Wie entwickeln sich die Ausgaben später?“. Bei „Gleichbleibend“ bleiben Ihre Ausgaben jedes Jahr gleich, in heutigem Geld. Das ist die vorsichtigste Wahl, und sie ist kostenlos. Studien in mehreren Ländern zeigen, dass Menschen in verschiedenen Lebensphasen unterschiedlich ausgeben. Mit Pro können Sie mit einem solchen Verlauf rechnen. Unter jeder Wahl sehen Sie, wie viel Vermögen Sie brauchen, und damit, was die Wahl ausmacht. Es bleiben Durchschnittswerte: Ihre eigenen Ausgaben können anders verlaufen.</p>",
 'h.names1': 'Ein ausgedachter Name ist auch in Ordnung, zum Beispiel „Max Mustermann“. Namen bleiben auf diesem Gerät: Sie werden nicht versendet, nicht gemessen und nicht in einen geteilten Link übernommen.',
 'h.names2': 'Auch hier genügt ein ausgedachter Name, zum Beispiel „Erika Mustermann“.'
});

/* studieschuld, leeftijdsgroepen en nieuwe wielvragen (versie 20) */
Object.assign(I18N.de, {
 "sl.h": "Studienkredit",
 "sl.s": "Restschuld, Monatsrate und Ende der Rückzahlung",
 "sl.intro": "Haben Sie einen Studienkredit oder BAföG-Schulden? Geben Sie ein, wie viel noch offen ist, was Sie monatlich zurückzahlen und bis wann. Dann sehen Sie, wann Sie schuldenfrei sind. Diese Karte zählt nicht in Ihr Ergebnis.",
 "sl.r": "Restschuld",
 "sl.m": "Monatliche Rate",
 "sl.e": "Ende der Rückzahlung (Jahr)",
 "sl.ePh": "leer = bis getilgt",
 "sl.i": "Zins pro Jahr",
 "sl.iHint": "{InCountry} tragen wir {p} ein. Stimmt das für Ihr Darlehen nicht? Ändern Sie es; Ihren Zins finden Sie unter {src}.",
 "sl.iHintEst": "{InCountry} sind {p} eine Schätzung. Ändern Sie den Wert auf den Zins Ihres Darlehens.",
 "sl.iReset": "Zurück zu {p}",
 "sl.empty": "Geben Sie Restschuld und Monatsrate ein, dann sehen Sie, wann Sie schuldenfrei sind.",
 "sl.notYet": "Sie zahlen noch nicht zurück. Tragen Sie die Monatsrate ein, sobald die Rückzahlung beginnt.",
 "sl.free": "Schuldenfrei {yr}, in etwa {n} Jahren. Danach werden {m} im Monat frei.",
 "sl.free1": "Schuldenfrei innerhalb eines Jahres ({yr}). Danach werden {m} im Monat frei.",
 "sl.open": "Am Ende der Rückzahlung ({yr}) sind noch {v} offen.",
 "sl.never": "Mit dieser Rate wird das Darlehen nicht getilgt: Die Zinsen sind höher als die Rückzahlung.",
 "sl.slow": "Mit dieser Rate dauert die Tilgung länger als 60 Jahre.",
 "sl.fg.NL": "Was dann noch offen ist, erlässt DUO automatisch, außer rückständigen Raten.",
 "sl.fg.GB": "Im Vereinigten Königreich wird der Rest dann erlassen.",
 "sl.fg.DE": "Beim BAföG zahlen Sie höchstens 10.010 € zurück.",
 "sl.big": "Das ist mehr, als ein Studienkredit meist beträgt. Stimmt der Betrag?",
 "sl.bigPro": "Geht es um eine Hypothek oder einen anderen Kredit? Dafür gibt es die Karte {debt} (Pro).",
 "sl.past": "Wählen Sie ein Jahr nach diesem.",
 "sl.long": "Eine Rückzahlung dauert selten länger als 45 Jahre. Stimmt die Jahreszahl?",
 "sl.proQ": "Tilgen oder anlegen?",
 "sl.proS": "Zwei Pläne vergleichen",
 "tz.plans.0": "Tilgen oder anlegen?",
 "tz.plans.1": "Jetzt mehr sparen oder später?",
 "tz.plans.2": "Früher aufhören oder weiterarbeiten?",
 "tz.pp.0": "Im Ausland studieren, arbeiten oder wohnen?",
 "tz.pp.1": "Mit der Familie ins Ausland ziehen?",
 "tz.pp.2": "Wo reicht Ihr Geld am längsten?",
 "goalY.7.t": "Wann bin ich schuldenfrei?",
 "goalY.7.s": "Sehen Sie, wann Ihr Studienkredit abbezahlt ist und was danach monatlich frei wird.",
 "goalY.8.t": "Im Ausland studieren, arbeiten oder wohnen?",
 "goalY.8.s": "Vergleichen Sie, was derselbe Betrag in anderen Ländern wert ist.",
 "goalY.9.t": "Mit der Familie ins Ausland ziehen?",
 "goalY.9.s": "Vergleichen Sie, was derselbe Betrag in anderen Ländern wert ist.",
 "rel.20.v": "Version 20 · November 2026",
 "rel.20.n1": "Neu: die Karte Studienkredit. Geben Sie Restschuld, Monatsrate und Ende der Rückzahlung ein und sehen Sie, wann Sie schuldenfrei sind. Sie funktioniert in jedem Land, mit einem Zins, den Sie selbst ändern können.",
 "rel.20.n2": "Unter 35 ist die App einfacher: Hypothek, Extra-Topf und Ausgabenverlauf fehlen. Werden Sie älter, kommen sie dazu, und Ihre Eingaben bleiben erhalten.",
 "rel.20.n3": "Neue Fragen im Startrad, etwa „Wann bin ich schuldenfrei?“ und „Mit der Familie ins Ausland ziehen?“.",
  "rel.20.n4": "Die Einführung spricht jetzt von Ihrer finanziellen Zukunft, mit mehr Beispielen wie etwas mehr tilgen oder etwas weniger arbeiten."
});

/* pensioen als uitklapvak (versie 20) */
Object.assign(I18N.de, {"f.penOn": "Ich baue eine {Pen} auf und weiß, wie hoch sie wird", "f.penOn_2": "Baut eine {Pen} auf und weiß, wie hoch sie wird", "f.penHint": "Noch unbekannt? Lassen Sie das Häkchen weg und ergänzen Sie es später.", "f.penPh": "netto pro Monat", "rel.20.n5": "Gesetzliche Rente und Rente klappen Sie jetzt auf. Unter 35 ist die Rente standardmäßig aus, bis Sie wissen, wie hoch sie wird."});

/* woorden voor alle leeftijden, belasting dichtgeklapt, oproep bij de uitkomst (versie 20) */
Object.assign(I18N.de, {"f.eindleeftijd": "Alter, bis zu dem Ihr Geld aufgebraucht sein darf", "f.restkapitaal": "Was dann noch übrig sein soll", "ins.rest": "Rest am Ende", "opb.cta": "Das möchte ich ändern", "rel.20.n6": "Die Steuer auf das Vermögen ist jetzt eingeklappt, und beim Ergebnis gibt es eine klare Schaltfläche, um es zu ändern."});

/* overige schulden (versie 20) */
Object.assign(I18N.de, {"oth.h": "Sonstige Schulden", "oth.s": "Kredit, Ratenkauf oder später bezahlen, bis 50.000", "oth.intro": "Zahlen Sie einen anderen Kredit ab, etwa einen Privatkredit, ein Auto, einen Ratenkauf oder „Jetzt kaufen, später bezahlen“? Geben Sie ein, was noch offen ist, was Sie monatlich zurückzahlen und bis wann. Bis 50.000. Diese Karte zählt nicht in Ihr Ergebnis.", "oth.r": "Offene Schuld", "oth.e": "Letztes Rückzahlungsjahr", "oth.iHint": "Wir rechnen ohne Zinsen, außer Sie tragen sie hier ein. Der Zins steht in Ihrem Kreditvertrag.", "oth.cap": "Diese Karte reicht bis {max}. Für einen größeren Kredit oder eine Hypothek gibt es die Karte {debt} (Pro).", "oth.cap0": "Diese Karte reicht bis {max}.", "rel.20.n7": "Neue Karte Sonstige Schulden, für Kredite und Ratenzahlungen bis 50.000."});

/* uitkomstblok opbouw: wat als (na versie 20) */
Object.assign(I18N.de, {"opb.k2": "Wenn Sie {a} sind, haben Sie voraussichtlich", "opb.own": "Eigene Einzahlungen", "opb.ret": "Rendite", "opb.split2": "{put} aus eigener Tasche, der Rest ist Rendite.", "opb.more": "Wie sicher ist das?", "opb.mixh2": "Wie legen Sie an?", "opb.fireYes": "<b>Finanziell frei mit {n}.</b> Dann haben Sie {t}: genug, um ohne Arbeit von {b} im Monat zu leben.", "opb.fireNot": "<b>Finanzielle Freiheit ist noch nicht in Reichweite.</b> Dafür brauchen Sie {t}. Aber Sie haben {y} Jahre Zeit, und gerade jetzt zählt jeder kleine Schritt am meisten. Probieren Sie unten aus, was geht.", "opb.wiH": "Was wäre, wenn…", "opb.wiSave": "+ {v} im Monat sparen", "opb.wiEarn": "Ich verdiene {v} mehr (Hälfte gespart)", "opb.wiDebt": "Studienkredit abbezahlt", "opb.wiDebts": "Meine Schulden sind abbezahlt", "opb.wiTwo": "Zu zweit", "opb.wiDelta": "+ {v} mehr durch Ihre Wahl. Ihre Eingaben bleiben unverändert.", "opb.moreBtn": "Mehr Optionen"});

/* haalbaar maandbudget voorop (na versie 20) */
Object.assign(I18N.de, {"opb.budK": "Monatlich verfügbar von {an} bis {en} Jahren", "opb.pm": "pro Monat", "opb.wantOk": "Damit erreichen Sie die gewünschten {w} im Monat.", "opb.wantShort": "Sie wollen {w}. Es fehlen noch {d} im Monat.", "opb.endLine": "Mit {an} Jahren haben Sie voraussichtlich {v}, davon {put} aus eigener Tasche.", "opb.budWhy": "Dieses Monatsbudget reicht in 9 von 10 Fällen bis zum Alter von {en} Jahren, zusammen mit gesetzlicher Rente und Rente.", "opb.wiDeltaB": "+ {v} im Monat durch Ihre Wahl. Ihre Eingaben bleiben unverändert.", "ov.k.ok": "Jetzt erreichbar: {v}"});

/* speel met je cijfers en balk op Invullen (na versie 20) */
Object.assign(I18N.de, {"opb.stH": "Spielen Sie mit Ihren Zahlen", "opb.stSave": "Monatlich gespart", "opb.stBud": "Sie möchten ausgeben", "opb.stStop": "Aufhören zu arbeiten mit", "opb.less": "Weniger", "opb.moreS": "Mehr", "opb.wantShort2": "Zu zweit brauchen Sie etwa {w} im Monat. Es fehlen noch {d} im Monat.", "opb.wiDeltaM": "− {v} im Monat durch Ihre Wahl. Ihre Eingaben bleiben unverändert.", "mini.bud": "Erreichbar:", "mini.want": "Sie möchten {w}", "mini.chance": "Chance"});

/* knop zonder schuld */
Object.assign(I18N.de, {"opb.wiNoDebt": "Ohne Schulden"});

/* sparen per periode (na versie 20) */
Object.assign(I18N.de, {"inl.h": "Später mehr (oder weniger) sparen?", "inl.from": "Ab", "inl.add": "+ Schritt hinzufügen", "inl.del": "Schritt entfernen", "inl.hint": "Werden Sie mehr verdienen? Dann sparen Sie ab diesem Alter mehr. Bis zum ersten Schritt gilt der Betrag oben."});

/* pro-tekst sparen per periode */
Object.assign(I18N.de, {"inl.proWhy": "Sparen Sie ab einem bestimmten Alter mehr oder weniger, zum Beispiel wenn Sie mehr verdienen."});

/* leeftijdsgrens per groep (na versie 20) */
Object.assign(I18N.de, {"age.cap": "Sie haben die Gruppe {g} gewählt, also höchstens {m}.", "age.capGo": "Älter? Andere Altersgruppe wählen"});

/* versie 21 */
Object.assign(I18N.de, {"rel.21.v": "Version 21 · November 2026", "rel.21.n1": "Das Ergebnis beginnt jetzt mit dem, was Sie monatlich ausgeben können, neben Ihrem Wunschbetrag und den Stufen Sparsam, Durchschnittlich und Komfortabel.", "rel.21.n2": "Spielen Sie direkt in der Übersicht mit Ihren Zahlen: Plus- und Minustasten und „Was wäre, wenn…“-Tasten wie „Ohne Schulden“ und „Zu zweit“.", "rel.21.n3": "Unter 35 können Sie ab einem gewählten Alter mehr (oder weniger) sparen, zum Beispiel wenn Sie mehr verdienen.", "rel.21.n4": "Beim Ausfüllen zeigt eine Leiste oben, was in dem Moment erreichbar ist.", "rel.21.n5": "Die Ausfüllseite ist auf großen Bildschirmen aufgeräumter, und das eingegebene Alter passt jetzt zur gewählten Altersgruppe."});
Object.assign(I18N.de, {"pf.sav": "Sparen", "opb.endLineLow": "Mit {an} Jahren haben Sie voraussichtlich {v}. Das ist weniger als die {put} aus eigener Tasche: Steuern und Inflation wiegen bei dieser Mischung schwerer als die Rendite. Alles in heutigem Geld.", "opb.inc": "Ab Ihrem Stoppalter zählt außerdem mit: {list}.", "opb.incSp": "gesetzliche Rente {v} pro Monat", "opb.incPen": "Rente {v} pro Monat", "opb.incWk": "Nebenverdienst", "opb.life": "{en} ist Ihre durchschnittliche Lebenserwartung. Die Hälfte der Menschen lebt länger; unter „Eingeben“ können Sie das Endalter höher setzen.", "opb.mixWhy": "Vorsichtig kann hier mehr bringen als offensiv: das Budget muss in 9 von 10 Fällen reichen, und starke Schwankungen erhöhen gerade die Chance auf einen schlechten Fall.", "opb.mixWhyB3": "Box 3 belastet Anlegen zudem stärker als Sparen.", "rel.22.v": "Version 22 · November 2026", "rel.22.n1": "Eine vierte Kachel neben den Anlagemischungen: Sparen ohne Anlegen, damit Sie den Unterschied selbst sehen.", "rel.22.n2": "Das Ergebnis nennt jetzt, was mitzählt, etwa Ihre gesetzliche Rente und Rente, und erklärt, wann eine vorsichtige Mischung höher ausfällt als eine offensive.", "rel.22.n3": "Klarere Worte, wenn der erwartete Betrag niedriger ist als Ihre eigene Einlage, und ein Hinweis, dass das Endalter Ihre durchschnittliche Lebenserwartung ist."});
Object.assign(I18N.de, {"opb.lbl": "Erreichbares Monatsbudget", "opb.span": "So viel können Sie jeden Monat ausgeben, von {an} bis {en} Jahren, in heutigem Geld."});
Object.assign(I18N.de, {"opb.fireInfo": "Ihr Wunsch ist hier erreichbar. Finanziell frei ist eine strengere Latte: nur vom eigenen Vermögen leben, ohne Renten, ohne es aufzubrauchen. Dafür sind etwa {t} nötig."});

/* samen opzij leggen en bijverdienen (versie 21) */
Object.assign(I18N.de, {"q.inleg_2": "Was legen Sie zusammen monatlich zurück?", "f.inlegP": "Legt monatlich zurück", "h.inlegSplit": "Zusammen ist dies der Betrag aus Schritt 1. Die Aufteilung ändert das Ergebnis nicht.", "wk.hBij": "Zuverdienst nach dem Aufhören", "f.bijAmt": "Zuverdienst, netto pro Monat", "h.bijAmt": "Zählt ab Ihrem Aufhöralter. Die App fragt nie nach Ihrem heutigen Gehalt: Was Sie zurücklegen, zählt.", "f.bijEnd": "Zuverdienst bis Alter", "h.bijEnd": "Ab Ihrem Aufhöralter ({a}) bis zu diesem Alter. Gleich dem Aufhöralter heißt: kein Zuverdienst.", "rel.21.n6": "Zurücklegen heißt jetzt überall gleich: die Summe in Schritt 1, pro Person aufteilbar in Schritt 2. In der Aufbauphase heißt „Arbeit“ jetzt ehrlich „Zuverdienst nach dem Aufhören“."});

/* ladder: koprij en voluit geschreven bedragen (versie 21) */
Object.assign(I18N.de, {"ld.colBud": "Budget pro Monat", "ld.colNeed": "Dafür nötiges Vermögen", "ld.none": "nichts nötig"});

/* poppetjes op je gewenste budget */
Object.assign(I18N.de, {"opb.wantMark": "Das sind Sie: das gewünschte Budget"});

/* v23-i18n */
Object.assign(I18N.de, {"opb.incSp": "{n} {v} pro Monat", "wk1.hint": "Leer lassen, wenn Sie schon aufgehört haben. So rechnen wir nicht, als würden Sie heute aufhören zu arbeiten.", "k.bufNone": "Für dieses Budget brauchen Sie kein Vermögen zum Start.", "k.need": "Nötiges Vermögen zum Start", "opb.tWish": "Chance auf Ihren Wunsch: {p}", "pf.need": "Nötiges Vermögen, durchschnittlicher Verlauf", "flow.sal": "Ihr Arbeitseinkommen (bis Sie aufhören)", "opb.tLegend": "Der Betrag klappt in 9 von 10 Fällen. Die Chance zeigt, wie oft Sie Ihren Wunschbetrag erreichen.", "wk1.q": "Arbeiten Sie noch? Was verdienen Sie netto pro Monat?", "wk1.till": "Bis zu welchem Alter arbeiten Sie?", "ld.cap": "Was Sie jetzt haben", "opb.tLegend0": "Der Betrag klappt in 9 von 10 Fällen.", "f.startkapitaal": "Was Sie jetzt haben", "k.need90": "Nötiges Vermögen zum Start (90 % Chance)", "opb.tSure": "pro Monat, in 9 von 10 Fällen"});
Object.assign(I18N.de, {"pf.endMid": "Übrig am Ende, Mitte", "pf.endBad": "Übrig am Ende, 1 von 20 Pech"});
Object.assign(I18N.de, {"k.wrLater": "des Vermögens pro Jahr, {m} pro Monat. Das sinkt, sobald Ihre Rente beginnt.", "k.taxCaut": "vorsichtige Annahme", "intro.country": "Land", "intro.lang": "Welche Sprache bevorzugen Sie?"});
Object.assign(I18N.de, {"age.need": "Wählen Sie zuerst Ihre Altersgruppe.", "home.quickTog": "Ändern", "home.quickHide": "Einklappen", "opb.debtFree": "Ihre Schulden sind <b>{y}</b> abbezahlt.", "opb.debtAsk": "Tragen Sie bei Ihren Schulden ein, was Sie monatlich tilgen, dann sehen Sie hier, wann Sie schuldenfrei sind.", "opb.debtSlow": "Mit diesem Monatsbetrag werden Ihre Schulden nicht kleiner. Versuchen Sie unter „Eingeben“ einen höheren Betrag.", "opb.to90": "Werden Sie {n}? Dann sind {v} pro Monat erreichbar."});
Object.assign(I18N.de, {"wi.penLow": "Rente 20 % niedriger", "wi.crash": "Börse fällt um 30 %", "wi.gift": "Einmalig {v} dazu", "wi.budLess": "{v} weniger pro Monat", "wi.work1": "1 Jahr länger arbeiten", "wi.res": "Dann liegt die Chance bei {p} (jetzt {q}). Ihre Eingaben bleiben unverändert."});
Object.assign(I18N.de, {"rel.23.v": "Version 23 · November 2026", "rel.23.n1": "Jede Anlagekachel zeigt jetzt zwei Dinge: den Betrag, der in 9 von 10 Fällen klappt, und die Chance, Ihren Wunschbetrag zu erreichen.", "rel.23.n2": "Eine Zahl pro Begriff: Die Kennzahlen passen jetzt zur Ergebniskarte und zur Empfehlung, und das Einkommensdiagramm stimmt für alle, die noch sparen.", "rel.23.n3": "Eine kürzere Begrüßung: zuerst Ihre Altersgruppe und Ihre Frage, und der erste Bildschirm in Ihrer eigenen Sprache.", "rel.23.n4": "Neu beim Ergebnis: das Jahr, in dem Ihre Schulden abbezahlt sind, was erreichbar ist, wenn Sie 90 werden, und „Was wäre, wenn…“-Tasten ab 35 und für 50 plus. Schritt 1 fragt jetzt, ob Sie noch arbeiten.", "rel.23.n5": "Eine kürzere Übersicht, größere Tippflächen, der Notizblock in der Tableiste auf dem Handy, ein vollständiger und privaterer Teilen-Link und schneller auf langsameren Handys."});
Object.assign(I18N.de, {"tc.h": "Kennen Sie jemanden, der das auch wissen möchte?", "tc.s": "Sie teilen nur die App. Ihre Zahlen bleiben bei Ihnen.", "tc.btn": "App teilen", "tc.x": "Nicht mehr anzeigen", "rel.23.n6": "Kennen Sie jemanden, der das auch wissen möchte? Unter Ihrem Ergebnis teilen Sie jetzt mit einem Fingertipp die App. Ihre Zahlen bleiben bei Ihnen."});
Object.assign(I18N.de, {"flow.sal": "Arbeitsjahre: Sie leben von Ihrem Lohn", "flow.salNote": "Grau: Bis {a} gehen wir davon aus, dass Sie arbeiten und von Ihrem Lohn leben. Diesen Lohn müssen Sie nicht eingeben; Ihr Vermögen bleibt unangetastet und wächst weiter. Möchten Sie früher von Ihrem Vermögen leben? Stellen Sie „{l}“ auf der Ergebniskarte niedriger ein."});
/* uitleg achter een ⓘ en derde keuze bij man/vrouw (versie 23) */
Object.assign(I18N.de, {"rel.23.n7": "Erklärungen hinter einem ⓘ: Den Hintergrund zu einer Frage lesen Sie, wenn Sie möchten, so ist die Eingabe übersichtlicher. Neben Mann oder Frau können Sie jetzt auch „Divers“ wählen; dann rechnen wir mit der durchschnittlichen Lebenserwartung.", "ib.more": "Mehr Infos", "sex.none": "Divers", "h.penShort": "Netto pro Monat, ohne {sp}.", "sex.info": "Ihre Wahl bestimmt nur, mit welcher Lebenserwartung wir rechnen. Frauen leben im Schnitt einige Jahre länger als Männer, und je länger Sie leben, desto länger muss Ihr Geld reichen. Wählen Sie, was zu Ihnen passt. Bei „Divers“ rechnen wir mit dem Durchschnitt von beiden. Weiter unten können Sie das Endalter auch selbst festlegen."});
/* overzicht in vijf delen en je vraag aan het eind van Invullen (versie 24) */ Object.assign(I18N.de, {"ch.2": "Was Sie tun können", "ch.3": "Wie es verläuft", "ch.4": "Alle Zahlen", "ch.5": "Mehr", "ch.s2": "Stellschrauben zum Ausprobieren", "ch.s3": "Ihr Vermögen und Einkommen Jahr für Jahr", "ch.s4": "Die Zahlen im Überblick", "ch.s5": "Weiter entdecken und teilen", "sum.two": "{a} und {b} Jahre", "sum.one": "{a} Jahre", "sum.cap": "{c} Vermögen", "sum.bud": "{b} pro Monat", "goal.subEnd": "Ihre Antwort berücksichtigt alles, was Sie oben eingegeben haben.", "rel.24.v": "Version 24 · November 2026", "rel.24.n1": "Eine ruhigere Übersicht in fünf Teilen: Ergebnis, Was Sie tun können, Wie es verläuft, Alle Zahlen und Mehr. Jeder Teil hat einen eigenen Knopf und eine eigene Farbe, und Zahlen stehen nicht mehr doppelt da.", "rel.24.n2": "Beim Ausfüllen stehen Ihre Frage und der Knopf zu Ihrer Antwort jetzt am Ende, nach Schritt 5, statt über jedem Schritt."});
/* feedback Fleur: stopleeftijd vooraan, verwachting per mix, kans nooit 100%, ander inkomen, disclaimer-regel (versie 25) */ Object.assign(I18N.de, {"q.stop": "In welchem Alter möchten Sie aufhören zu arbeiten?", "q.stopHint": "Leer lassen, dann rechnen wir damit, dass Sie arbeiten, bis Ihre {sp} beginnt ({a}). Möchten Sie früher aufhören? Tragen Sie hier Ihr Alter ein.", "q.stopHintSet": "Ihre {sp} beginnt erst mit {a}. Bis dahin leben Sie von Ihrem eigenen Vermögen.", "q.stopTwo": "Bei zwei Personen zählt das Alter der ersten Person.", "lvl.own": "Leben Sie von weniger oder von mehr? Tragen Sie unten Ihren eigenen Betrag ein.", "disc.line": "Dies ist ein Rechenbeispiel auf Basis von Annahmen, keine persönliche Beratung.", "disc.lineA": "Haftungsausschluss lesen", "opb.tMed": "in 5 von 10 Fällen: {v}", "opb.tLegendMed": "Die Zeile „in 5 von 10 Fällen“ ist der Betrag, den Sie in der Hälfte der Fälle erreichen: die gewöhnliche Erwartung.", "opb.savWhy": "Sparen steht hier oben, weil der große Betrag den schlechten Fall zeigt (9 von 10 Fällen). Sparen schwankt nicht, Anlegen schon. Was Anlegen gewöhnlich bringt, steht in der Zeile „in 5 von 10 Fällen“.", "opb.inc2": "Zählt außerdem mit: {list}.", "opb.incSp2": "{n} {v} pro Monat ab {a}", "opb.incPen2": "Rente {v} pro Monat ab {a}", "w.autoPicked": "Rechenvorgabe: beste Chance", "pf.autoHint": "Die App rechnet jetzt mit {pf} (Erfolgschance {p}): Bei Ihren Angaben bietet dieser Mix die beste Chance. Liegen zwei innerhalb von 1 Prozentpunkt, rechnen wir mit dem, bei dem am meisten übrig bleibt. Das ist eine Rechenvorgabe und keine Anlageberatung; Sie können selbst einen anderen Mix wählen.", "f.wkAmt": "Einkommen aus Arbeit oder Vermögen, netto pro Monat", "h.wkAmt": "Gehalt oder Gewinn nach Steuern. Auch Miete, Einkommen aus einem Unternehmen oder Tantiemen können Sie hier eintragen. Läuft es lebenslang weiter? Dann „bis Alter“ auf 100 setzen. Leer lassen, wenn Sie kein Einkommen haben.", "wk.h": "Arbeit und anderes Einkommen", "wk.hBij": "Einkommen nach dem Aufhören", "f.bijAmt": "Zuverdienst oder anderes Einkommen, netto pro Monat", "h.bijAmt": "Zum Beispiel Zuverdienst, Miete, ein Unternehmen oder Tantiemen. Zählt ab Ihrem Aufhöralter; läuft es lebenslang weiter, setzen Sie das Alter unten auf 100. Die App fragt nie nach Ihrem heutigen Gehalt: Was Sie zurücklegen, zählt.", "rel.25.v": "Version 25 · November 2026 · mit Dank an Fleur", "rel.25.n1": "Früher aufhören zu arbeiten? In Schritt 1 tragen Sie jetzt selbst Ihr Aufhöralter ein. Ihre gesetzliche Rente und Ihre Betriebsrente beginnen einfach später.", "rel.25.n2": "Bei den Anlagemixen sehen Sie jetzt auch, was Sie in der Hälfte der Fälle erreichen, neben dem vorsichtigen Betrag für 9 von 10 Fällen.", "rel.25.n3": "Eine Chance heißt nie mehr 100 %: Sie sehen jetzt „>99 %“. Sicherheit gibt es nicht.", "rel.25.n4": "Anlagekosten gelten nur noch für den angelegten Teil, nicht für Erspartes. Die Ergebnisse fallen dadurch einen Hauch höher aus.", "rel.25.n5": "Miete, Einkommen aus einem Unternehmen oder Tantiemen tragen Sie unter „Arbeit und anderes Einkommen“ ein.", "rel.25.n6": "Unter dem Ergebnis steht jetzt, dass es ein Rechenbeispiel und keine Beratung ist, und die Knöpfe bei „Spielen Sie mit Ihren Zahlen“ passen nun auch auf ein Tablet.", "big.h": "Große Ausgabe später", "big.s": "Zweitwohnung, Boot, Umbau", "big.intro": "Möchten Sie irgendwann einen großen Betrag auf einmal ausgeben? Tragen Sie den Betrag in heutigem Geld und das Alter ein. Er geht in dem Jahr von Ihrem Vermögen ab.", "big.amt": "Betrag", "big.at": "im Alter von", "big.add": "+ Ausgabe hinzufügen", "big.del": "Ausgabe entfernen", "big.line": "Als große Ausgabe eingerechnet: {list}.", "big.item": "{v} mit {a}", "rel.25.n7": "Neu beim Ausfüllen: eine große Ausgabe später, etwa eine Zweitwohnung oder ein Boot. Sie sehen sofort, was das mit Ihrem Ergebnis macht."});
/* voorbeeldplan (versie 25) */ Object.assign(I18N.de, {"rel.25.n8": "Sie wissen nicht, wo Sie anfangen sollen? Tippen Sie auf „Erst ein Beispiel ausprobieren“ und Sie sehen sofort ein Ergebnis. Danach geben Sie Ihre eigenen Zahlen ein.", "ex.try": "Erst ein Beispiel ausprobieren", "ex.tag": "Beispiel.", "ex.bar": "Diese Beträge sind nicht Ihre: {c}.", "ex.own": "Meine eigenen Zahlen eingeben", "ex.capL": "Ersparnisse {v}", "ex.inlL": "Sparrate {v} pro Monat", "ex.ageL": "{v} Jahre alt", "ex.budL": "Wunsch {v} pro Monat"});
/* testversie 3 */ Object.assign(I18N.de, {"tv.tag": "Testversion 6", "tv.note": "Ein Versuch mit einem Cockpit als Übersicht. Er steht neben den regulären Versionen.", "tv.close": "Route schließen", "tv.n": "Frage {i} von {m}", "tv.next": "Weiter", "tv.prev": "Zurück", "tv.ready": "Fertig", "tv.goal1": "Wir zählen es Knopf für Knopf aus.", "tv.hello": "Willkommen zurück. Sie waren bei Frage {i} von {m}.", "tv.pic.opb": "Später pro Monat, ab {y}", "tv.pic.now": "Pro Monat, ab jetzt", "tv.pic.pm": "pro Monat", "tv.pic.base": "{x} zählt schon mit. Den Rest zählen Sie selbst dazu.", "tv.pic.zero": "Noch nichts gezählt. Jede Antwort kommt dazu.", "tv.pic.togo": "Noch {d} bis zu Ihrem Ziel von {w}.", "tv.pic.ok": "Ihr Ziel von {w} ist erreicht. {d} übrig.", "tv.q.pers": "Rechnen Sie für sich allein oder zusammen mit einem Partner?", "tv.h.pers": "Das können Sie später noch ändern.", "tv.v.one": "Für mich allein", "tv.v.two": "Zu zweit", "tv.q.bud": "Wie viel möchten Sie später pro Monat ausgeben können?", "tv.q.bud_2": "Wie viel möchten Sie später zusammen pro Monat ausgeben können?", "tv.q.budNow": "Wie viel möchten Sie pro Monat ausgeben können?", "tv.q.budNow_2": "Wie viel möchten Sie zusammen pro Monat ausgeben können?", "tv.h.bud": "Das wird Ihr Ziel: was Sie pro Monat ausgeben, in heutigem Geld.", "tv.own": "Oder Ihr eigener Betrag", "tv.q.cap": "Wie viel Erspartes und Anlagen haben Sie jetzt?", "tv.q.cap_2": "Wie viel Erspartes und Anlagen haben Sie jetzt zusammen?", "tv.h.cap": "Ungefähr reicht.", "tv.q.inl": "Wie viel legen Sie jeden Monat zurück?", "tv.q.inl_2": "Wie viel legen Sie zusammen jeden Monat zurück?", "tv.h.inl": "Sparen und Anlegen zusammen. Ungefähr reicht.", "tv.q.stop": "In welchem Alter möchten Sie aufhören zu arbeiten?", "tv.h.stop": "Es steht jetzt etwa auf Ihrem Rentenalter. Tippen Sie auf Plus oder Minus und sehen Sie, was ein Jahr früher oder später bewirkt.", "tv.q.work": "Haben Sie noch Einkommen aus Arbeit?", "tv.q.work_2": "Haben Sie beide noch Einkommen aus Arbeit?", "tv.h.work": "Pro Monat auf Ihrem Konto. Es zählt bis zu Ihrem Rentenalter.", "tv.v.no": "Nein", "tv.v.yes": "Ja", "tv.q.age": "Wie alt sind Sie genau?", "tv.q.age_2": "Wie alt sind Sie beide genau?", "tv.h.age": "Mit Ihrem Alter wird die Rechnung genauer als mit Ihrer Altersgruppe.", "tv.q.job": "{x}: Wissen Sie, wie viel Sie pro Monat bekommen?", "tv.h.job": "Die meisten wissen das nicht auswendig. Nachschauen dauert etwa 5 Minuten.", "tv.job.now": "Ja, ich trage es ein", "tv.job.later": "Ich schaue später nach", "tv.job.none": "Ich habe keine {pen}", "tv.job.where": "Hier finden Sie es", "tv.job.s1": "Gehen Sie auf {site}.", "tv.job.s1x": "Nehmen Sie die letzte Übersicht Ihrer Pensionskasse, Ihres Arbeitgebers oder Versicherers.", "tv.job.s1i": "Mehr dazu für Ihr Land: {site}.", "tv.job.s1sp": "Nehmen Sie das letzte Schreiben oder die letzte Übersicht Ihrer Rentenstelle.", "tv.job.s2": "Melden Sie sich mit {login} an.", "tv.job.s3pen": "Suchen Sie den Betrag, den Sie ab Ihrem Rentenalter pro Monat bekommen, ohne {sp}.", "tv.job.s3sp": "Suchen Sie den Betrag, den Sie pro Monat erwarten können.", "tv.job.f": "Pro Monat auf Ihrem Konto", "tv.job.need": "Tragen Sie einen Betrag ein oder gehen Sie zurück und wählen Sie später.", "tv.job.filled": "Eingetragen: {v}", "tv.change": "Ändern", "tv.when.h": "Wann schauen Sie nach?", "tv.when.hh": "Sie bekommen einen Termin für Ihren Kalender, mit einem Link zurück zu dieser Frage.", "tv.when.tonight": "Heute Abend", "tv.when.tomorrow": "Morgen Abend", "tv.when.own": "Selbst wählen", "tv.when.set": "In meinen Kalender", "tv.when.parked": "Eingeplant für {d}.", "tv.when.g": "Google Kalender", "tv.when.file": "Kalenderdatei", "tv.when.self": "Link an mich selbst senden", "tv.when.copied": "Link kopiert", "tv.ics.t": "{brand}: {x} nachschauen (5 Minuten)", "tv.ics.d": "Öffnen Sie den Link und tragen Sie einen Betrag ein. Ihre anderen Antworten sind noch auf diesem Gerät.", "tv.ics.w": "Wo Sie es finden: {site}", "tv.self.msg": "{brand}: Hier geht es weiter mit dem, was noch nachzuschauen ist.", "tv.fin.base": "{x}, zählt schon mit", "tv.fin.had": "Was schon da war", "tv.fin.oth": "Andere Änderungen", "tv.fin.goal": "Ziel", "tv.fin.open": "noch nachschauen", "tv.fin.job": "Eingeplant für {d}: {x} nachschauen. Etwa 5 Minuten.", "tv.k.pers": "Allein oder zu zweit", "tv.k.bud": "Ihr Ziel", "tv.k.cap": "Erspartes und Anlagen", "tv.k.inl": "Monatlich zurückgelegt", "tv.k.stop": "Aufhören zu arbeiten", "tv.k.work": "Einkommen aus Arbeit", "tv.k.age": "Ihr Alter", "tv.v.pm": "{v} pro Monat", "tv.v.age": "{v} Jahre", "tv.v.at": "mit {a}", "tv.v.none": "keine", "tv.v.parked": "eingeplant für {d}", "tv.back.h": "Willkommen zurück", "tv.back.job1": "Eine Sache wartet: {x} nachschauen. Etwa 5 Minuten.", "tv.back.go": "Jetzt machen", "tv.home.k": "Ihre Zählung", "tv.home.go": "Weiter mit Ihren Fragen", "tv.home.goS": "Sie sind bei Frage {i} von {m}.", "tv.home.start": "Die {m} Fragen beantworten", "tv.home.startS": "Bei jeder Antwort sehen Sie, was sie mit Ihrem Betrag macht.", "tv.home.hint": "Tippen Sie auf ein Feld, um es groß zu sehen. Ihre Antworten ändern Sie unter {t}.", "tv.g.knopen": "Ihre Knöpfe", "tv.g.count": "{n} von {m}", "tv.g.meer": "Mehr mitzählen", "tv.g.zien": "Was es bedeutet", "tv.g.over": "Über und Hilfe", "tv.c.basis": "Geschlecht, Ausgabenverlauf und Sparen pro Zeitraum", "tv.cs.basis": "Mit Geschlecht, Ausgabenverlauf und Sparen je Zeitraum", "tv.c.pp": "Zuverdienst nach dem Aufhören", "tv.cs.pp": "Einkommen neben der Rente und bis zu welchem Alter", "tv.cs.sp2": "Ab welchem Alter, und an oder aus", "tv.cs.pot": "Aus einem anderen Land oder ein eigener Topf", "tv.c.debt": "Schulden", "tv.cs.debt": "Studienkredit, kleine und große Schulden", "tv.c.bel": "Anlegen, Steuern und Laufzeit", "tv.cs.aan": "Inflation {i} · Kosten {k}", "tv.c.uit": "Ihr Ergebnis", "tv.cs.uit": "Erreichen Sie Ihr Ziel, und wie sicher ist das", "tv.cs.plan": "Zwei Entscheidungen nebeneinander", "tv.c.mix": "Ihr Portfolio", "tv.c.tax": "Steuer auf Kapitalerträge", "tv.c.run": "Wie lange das Geld reichen soll", "tv.cs.run": "Bis Sie {a} sind", "tv.c.pp50": "Arbeit: bis zu welchem Alter", "tv.cs.pp50": "Bis wann Ihr Arbeitseinkommen läuft, oder je Zeitraum verfeinern", "tv.c.nm": "Name und Geschlecht", "tv.cs.nm": "Wie die App Sie nennt; das Geschlecht bestimmt die Lebenserwartung", "h.inlegSplit": "Zusammen ist dies der Betrag bei „Monatlich zurückgelegt“. Die Aufteilung ändert das Ergebnis nicht.", "tv.c.pp2": "Sparrate und Zuverdienst pro Person", "tv.cs.pp2": "Einkommen nach dem Aufhören und die Aufteilung der Sparrate", "oth.h": "Kleine Schulden", "debt.h": "Große Schulden", "tv.cs.over": "Die Idee und Ihr Land", "tv.a.lang": "Land", "tv.ch.back": "Ihre Zählung", "tv.ch.empty": "Hier gibt es noch nichts zu zeigen. Beantworten Sie zuerst Ihre Fragen: Ihr Ziel und Ihr Erspartes.", "tv.n.gap": "Unter dem Ziel", "tv.n.room": "Über dem Ziel", "tv.n.cap": "Vermögen beim Aufhören", "tv.ck.fanS": "Zum Vergrößern tippen", "tv.ck.empty": "Wählen Sie zuerst Ihr Ziel. Dann erscheint hier der Verlauf Ihres Vermögens.", "tv.ck.num": "Ihre Zahlen", "tv.ck.more": "Weiter schauen", "tv.in.s": "Tippen Sie auf einen Knopf, um die Antwort zu ändern. Darunter: was noch mitzählen kann.", "tv.more": "Mehr Erklärung", "tv.less": "Weniger Erklärung", "tv.c.pot": "Weitere Rente oder Topf, mit eigenem Beginn", "tv.pen.age": "Anderen Beginn einstellen", "tv.pen.more": "Weitere Rente hinzufügen", "tv.g.q": "Steht dort nur ein Betrag vor Steuern?", "tv.g.a": "Betrag vor Steuern, pro Monat", "tv.g.p": "Was für Steuern und Beiträge abgeht", "tv.g.o": "Auf Ihrem Konto: {v} pro Monat. Oben eingetragen.", "pot.amtM": "Pro Monat auf Ihrem Konto", "pot.amtL": "Betrag auf Ihrem Konto", "u.grossMonth": "{cur} pro Monat", "pot.tax": "Nur wenn Sie einen Betrag vor Steuern eingeben: was abgeht", "pot.sumM": "Auf Ihrem Konto: {v} pro Monat ab {a} Jahren, {u}.", "pot.sumL": "Auf Ihrem Konto: {v} auf einmal mit {a} Jahren. Das fließt in Ihr Vermögen.", "tv.in.h": "Rechnen Sie aus, was Sie später pro Monat ausgeben können.", "tv.in.p": "Button Counter rechnet es mit Ihnen zusammen: {sp}, {pen}, Erspartes und was Sie zurücklegen.", "tv.in.1": "Ein paar kurze Fragen, ohne Konto", "tv.in.2": "Bei jeder Antwort sehen Sie, was sie bringt", "tv.in.3": "Ihre Zahlen bleiben auf Ihrem eigenen Gerät", "intro.ask": "Mit welcher Frage möchten Sie beginnen?", "goalY.2.t": "Reicht meine Rente später?", "tv.g.again": "Neu einstellen", "tv.g.share": "Teilen", "tv.a.intro": "Einführung noch einmal durchlaufen", "tv.a.introS": "Altersgruppe und Frage neu wählen", "tv.a.langS": "Land der Berechnung wechseln", "tv.st.ok": "Zählt mit", "tv.st.todo": "Noch offen", "tv.st.wait": "Geplant", "tv.row.auto": "automatisch", "tv.row.up": "bringt {v} pro Monat", "tv.row.down": "kostet {v} pro Monat", "tv.c.per": "Sparen pro Zeitraum", "tv.pen.early": "Beginnt, bevor Sie aufhören zu arbeiten. Bis dahin zählt sie nicht zum Betrag für später.", "u.netMonth": "{cur} pro Monat auf Ihrem Konto", "f.werk": "Verdienen Sie noch etwas dazu? Pro Monat auf Ihrem Konto", "f.spAmt": "{Sp}, pro Monat auf Ihrem Konto", "f.penAmt": "{Pen}, pro Monat auf Ihrem Konto", "h.penAmt": "Tragen Sie sie als den Betrag, der pro Monat auf Ihrem Konto ankommt ein, ohne {sp}. Haben Sie einen Topf statt eines Monatsbetrags? Dann zählen Sie ihn zu Ihrem Vermögen.", "fact.spFlat": "{one} pro Monat für Alleinstehende, {two} pro Person für Paare (auf dem Konto, voller Satz)", "f.wkAmt": "Einkommen aus Arbeit oder Vermögen, pro Monat auf Ihrem Konto", "wk.amt": "{cur} pro Monat auf Ihrem Konto", "f.penPh": "pro Monat auf Ihrem Konto", "f.bijAmt": "Zuverdienst oder anderes Einkommen, pro Monat auf Ihrem Konto", "wk1.q": "Arbeiten Sie noch? Was verdienen Sie pro Monat auf Ihrem Konto?", "h.penShort": "Pro Monat auf Ihrem Konto, ohne {sp}.", "h.budget": "Denken Sie pro Monat, alles inklusive: Wohnen, Einkäufe, Reisen und etwas für Unerwartetes. Wir rechnen aus, ob es reicht und woher das Geld kommt.", "opb.fireNot": "<b>Finanzielle Freiheit ist noch nicht in Reichweite.</b> Dafür brauchen Sie {t}. Aber Sie haben {y} Jahre Zeit, und gerade jetzt zählt jeder kleine Schritt am meisten."});
/* versie 26: Wat is er nieuw en het dankwoord bij de intro */ Object.assign(I18N.de, {"rel.26.v": "Version 26 · November 2026 · mit Dank an alle, die mitgedacht haben", "rel.26.n1": "Sie beginnen bei Ihrer eigenen Frage. Jeder Bildschirm stellt eine kurze Frage, und bei jeder Antwort sehen Sie, was sie bringt.", "rel.26.n2": "Die Übersicht zeigt auf einen Blick, was Sie pro Monat ausgeben können, mit einer kleinen Grafik und Ihren Antworten.", "rel.26.n3": "Unter Eingeben hat jedes Thema eine eigene Schaltfläche mit einem Status: Zählt mit, Noch offen oder Geplant.", "rel.26.n4": "Erklärungen stehen hinter dem ⓘ, damit die Bildschirme ruhig bleiben.", "rel.26.n5": "Kennen Sie einen Betrag nicht auswendig, zum Beispiel Ihre Rente? Wählen Sie „Ich schaue später nach“. Sie erhalten einen Kalendertermin mit einem Link zurück zu Ihrer Frage.", "rel.26.n6": "Schulden sind in kleine und große Schulden aufgeteilt. Was zu Pro gehört, erkennen Sie an einem Schloss.", "rel.26.n7": "Die Berechnung selbst hat sich nicht geändert.", "tv.tag": "", "tv.note": "", "intro.thanks": "Danke an alle, die mitgedacht haben: Jede Rückmeldung macht diese App besser."});
/* opnieuw beginnen */ Object.assign(I18N.de, {"tv.g.wipe": "Neu beginnen", "wipe.row": "Alles löschen und neu beginnen", "wipe.rowS": "Entfernt alles von diesem Gerät. Praktisch für eine Demo.", "wipe.h": "Alles löschen?", "wipe.p1": "Dadurch werden von diesem Gerät entfernt: Ihre Zählung, Ihr Plan und Ihr zweiter Plan, Namen, Ihr Notizblock und Ihre Einstellungen. Danach beginnen Sie wieder beim Willkommensbildschirm.", "wipe.p2": "Das lässt sich nicht rückgängig machen. Möchten Sie Ihr Ergebnis behalten? Dann tun Sie das zuerst.", "wipe.save": "Erst speichern", "wipe.no": "Abbrechen", "wipe.yes": "Ja, alles löschen"});
/* versie 26.1: bovenste knoop */ Object.assign(I18N.de, {"tv.row.had": "mit dem, was Sie schon eingetragen hatten", "tv.fin.had": "Schon eingetragen, bevor Sie anfingen"});
/* testversie 7: Invullen in drie lagen */ Object.assign(I18N.de, {"tv.g.basis": "Ihre Grundlage", "tv.g.ref": "Ergebnis verfeinern", "tv.g.refS": "Für ein Ergebnis nicht nötig. Aber es wird genauer.", "tv.g.asm": "So rechnen wir", "tv.st.opt": "Optional", "tv.ref.next": "Weiter: {x}", "tv.ref.offerH": "Ihr erstes Ergebnis steht", "tv.ref.offerP": "Möchten Sie es genauer? Dann gehen Sie noch diese Knöpfe durch. Für Ihr Ergebnis ist das nicht nötig.", "tv.ref.go": "Ja, verfeinern", "tv.ref.skip": "Jetzt nicht, Ergebnis zeigen", "tv.ref.tipP": "Nächster Schritt für ein genaueres Ergebnis"});
/* versie 27: Wat is er nieuw */ Object.assign(I18N.de, {"rel.27.v": "Version 27 · November 2026 · wieder mit Dank an alle, die mitgedacht haben", "rel.27.n1": "Eingeben hat drei Ebenen: Ihre Grundlage, Ergebnis verfeinern und So rechnen wir.", "rel.27.n2": "Sie verfeinern mit denselben Knöpfen wie Ihre Grundlage. Für ein Ergebnis sind sie nicht nötig, aber es wird genauer. Jede Altersgruppe hat ihre eigene Reihenfolge.", "rel.27.n3": "Sobald Ihr erstes Ergebnis steht, können Sie gleich einige Knöpfe verfeinern. Unter jedem Bildschirm stehen Fertig und Weiter.", "rel.27.n4": "Die Zurück-Taste Ihres Telefons schließt jetzt eine Frage, ein Fenster oder Ihre Notizen, genau wie das Kreuz. Die App bleibt offen.", "rel.27.f1": "Das Kreuz steht überall oben rechts.", "rel.27.f2": "Der oberste Knopf heißt in jeder Altersgruppe nach Ihrer staatlichen Rente.", "rel.27.f3": "Ausgabenverlauf und Sparen pro Zeitraum haben ein Schloss, weil sie zu Pro gehören.", "rel.27.f4": "Ab 50 steht unter Schulden kein Studienkredit mehr, es sei denn, Sie hatten schon einen eingetragen.", "rel.27.f5": "Auf einem schmalen Bildschirm schieben lange Wörter die Seite nicht mehr zur Seite."});
/* versie 28: inschatting per land bij belasting, hints bij het staatspensioen (Spanje, VS), Wat is er nieuw */ Object.assign(I18N.de, {"tax.est": "So schätzen wir es {inCountry} ein. Ist es bei Ihnen anders, passen Sie es an.", "spTip.ES": "In Spanien wird die Rente in 14 Zahlungen pro Jahr ausgezahlt. Tragen Sie deshalb den Monatsbetrag mal 14 geteilt durch 12 ein.", "spTip.US": "Tragen Sie den Betrag für das Alter ein, in dem Sie die Leistung beantragen. Ihr Social Security Statement nennt ihn für neun Altersstufen, von 62 bis 70.", "rel.28.v": "Version 28 · November 2026", "rel.28.n1": "Bei der Steuer steht jetzt, dass es unsere Einschätzung für Ihr Land ist. Deutschland, Spanien und die Vereinigten Staaten haben zusätzliche Hinweise zu Steuer und gesetzlicher Rente."});
/* vraagpagina's in deze taal (qp.<naam>.*). Elke pagina bestaat alleen in deze taal: de andere talen hebben eigen vragen, geen vertalingen.
   slug = webadres, goal = wielvraag, country = land waarin de pagina opent (alleen bij een pagina over één land),
   h1 = de vraag, a = het korte antwoord, btn = de knop, fq en fa = de veelgestelde vraag en het antwoord (ook in de FAQ van de app).
   Een naam tussen accolades is een getal dat veroudert: zie QPN en CTRY in src/index.html. Bron van de teksten: het document
   "Knopenteller — zeven nieuwe vraagpagina's" van 25 november 2026. */
Object.assign(I18N.de, {
  "site.qs": "Weitere Fragen",

  "qp.de-bedarf.slug": "wie-viel-geld-brauche-ich-im-ruhestand",
  "qp.de-bedarf.goal": "enough",
  "qp.de-bedarf.h1": "Wie viel Geld brauche ich im Ruhestand?",
  "qp.de-bedarf.a": "Eine feste Zahl gibt es nicht. Es kommt auf drei Dinge an: was Sie im Monat ausgeben möchten, wie lange das Geld reichen muss und was später noch hereinkommt, etwa die gesetzliche Rente und eine Betriebsrente. Faustregeln wie „80 Prozent des letzten Nettoeinkommens“ sehen nur den ersten Punkt. Button Counter rechnet alle drei zusammen, mit Steuer und Inflation, und zeigt, welches Vermögen in 9 von 10 Fällen reicht.",
  "qp.de-bedarf.btn": "Meinen Bedarf berechnen",
  "qp.de-bedarf.fq": "Wie viel Geld brauche ich für die Rente?",
  "qp.de-bedarf.fa": "Das ist bei jedem anders. Es hängt von Ihrem Monatsbudget, Ihrem Rentenbeginn, Ihrer gesetzlichen Rente und der Steuer auf Kapitalerträge ab. Button Counter führt diese Punkte zusammen und zeigt, welches Vermögen Sie brauchen, damit Ihr Geld in 9 von 10 Fällen reicht.",

  "qp.de-rentenluecke.slug": "rentenluecke-berechnen",
  "qp.de-rentenluecke.goal": "retire",
  "qp.de-rentenluecke.h1": "Wie groß ist meine Rentenlücke?",
  "qp.de-rentenluecke.a": "Die Rentenlücke ist der Betrag, der Ihnen im Ruhestand jeden Monat fehlt: Ihr Wunschbudget minus gesetzliche Rente, Betriebsrente und andere feste Einkünfte. Die Zahlen in Ihrer Renteninformation sind Bruttowerte. Kranken- und Pflegeversicherung gehen noch ab, je nach Höhe auch Steuern. Was dann fehlt, muss aus Ihrem Ersparten kommen. Button Counter zeigt, wie groß die Lücke ist und ob Ihr Vermögen sie schließt.",
  "qp.de-rentenluecke.btn": "Meine Rentenlücke ansehen",
  "qp.de-rentenluecke.fq": "Wie berechne ich meine Rentenlücke?",
  "qp.de-rentenluecke.fa": "Ziehen Sie von Ihrem gewünschten Monatsbudget Ihre Nettorente und andere feste Einkünfte ab. Button Counter rechnet zusätzlich mit Inflation und Steuer und zeigt, ob Ihr Erspartes die Lücke schließt.",

  "qp.de-wie-lange.slug": "wie-lange-reicht-mein-geld",
  "qp.de-wie-lange.goal": "enough",
  "qp.de-wie-lange.h1": "Entnahmeplan: Wie lange reicht mein Geld?",
  "qp.de-wie-lange.a": "Das hängt davon ab, wie viel Sie monatlich entnehmen, wie Ihr Geld angelegt ist und was an Rente dazukommt. Ein einfacher Entnahmeplan rechnet mit einem festen Zins. In Wirklichkeit schwanken die Erträge, und die Preise steigen. Button Counter rechnet deshalb viele mögliche Verläufe durch und zeigt die Chance, dass Ihr Geld bis zu dem Alter reicht, das Sie wählen.",
  "qp.de-wie-lange.btn": "Meinen Verlauf ansehen",
  "qp.de-wie-lange.fq": "Wie lange reichen meine Ersparnisse im Ruhestand?",
  "qp.de-wie-lange.fa": "Das hängt von Ihrer monatlichen Entnahme, Ihren Renten, der Geldanlage und der Inflation ab. Button Counter zeigt Jahr für Jahr, wie sich Ihr Vermögen entwickelt, und wie groß die Chance ist, dass es reicht.",

  "qp.de-mit-63.slug": "mit-63-in-rente",
  "qp.de-mit-63.goal": "earlier",
  "qp.de-mit-63.h1": "Rente mit 63: Kann ich früher in Rente gehen?",
  "qp.de-mit-63.a": "Mit {deCutYears} Versicherungsjahren können Sie ab {deCutAge} in Rente gehen, allerdings mit Abschlag: {deCut} Prozent für jeden Monat vor Ihrer Regelaltersgrenze. Bei vier Jahren sind das {deCutMax} Prozent, und zwar dauerhaft. Dazu kommen die Jahre, in denen Sie keine Beiträge mehr zahlen. Ob das aufgeht, hängt von Ihrem Ersparten und Ihrem Budget ab. Tragen Sie in Button Counter die Rente ein, die Ihre Rentenauskunft für diesen Beginn nennt, und verschieben Sie Ihren Rentenbeginn. Stand {deStand}; über Änderungen an diesen Regeln wird diskutiert.",
  "qp.de-mit-63.btn": "Mit 63 durchrechnen",
  "qp.de-mit-63.fq": "Kann ich es mir leisten, mit 63 in Rente zu gehen?",
  "qp.de-mit-63.fa": "Das hängt von Ihrem Ersparten, Ihrem Monatsbudget und der gekürzten Rente ab. Tragen Sie die Rente für den früheren Beginn ein und stellen Sie Ihren Rentenbeginn auf 63. Button Counter zeigt die Chance, dass Ihr Geld reicht.",

  "qp.de-4-prozent.slug": "4-prozent-regel-deutschland",
  "qp.de-4-prozent.goal": "spend",
  "qp.de-4-prozent.h1": "Funktioniert die 4-Prozent-Regel in Deutschland?",
  "qp.de-4-prozent.a": "Die 4-Prozent-Regel stammt aus US-amerikanischen Studien. Sie besagt: Im ersten Jahr entnehmen Sie 4 Prozent Ihres Vermögens und passen den Betrag danach an die Inflation an. Für Deutschland fehlen zwei Dinge. Die Regel kennt Ihre gesetzliche Rente nicht, die später einen Teil der Ausgaben trägt. Und sie rechnet ohne Abgeltungsteuer auf Ihre Erträge. Button Counter berücksichtigt beides.",
  "qp.de-4-prozent.btn": "Für mich durchrechnen",
  "qp.de-4-prozent.fq": "Gilt die 4-Prozent-Regel auch in Deutschland?",
  "qp.de-4-prozent.fa": "Als grobe Faustregel ja. Sie lässt aber die gesetzliche Rente, die Abgeltungsteuer und die Dauer Ihres eigenen Ruhestands außer Acht. Button Counter rechnet damit und zeigt, was Sie monatlich ausgeben können.",

  "qp.de-etf-tagesgeld.slug": "etf-sparplan-oder-tagesgeld",
  "qp.de-etf-tagesgeld.goal": "invest",
  "qp.de-etf-tagesgeld.h1": "ETF-Sparplan oder Tagesgeld: Was bringt mehr fürs Alter?",
  "qp.de-etf-tagesgeld.a": "Tagesgeld ist sicher, wächst aber kaum schneller als die Preise. Ein breit gestreuter ETF-Sparplan bringt im Durchschnitt mehr, schwankt aber. Je mehr Zeit Sie haben, desto weniger fallen die Schwankungen ins Gewicht. Eine feste Aufteilung gibt es nicht. Button Counter stellt vier Mischungen nebeneinander, von nur Sparen bis überwiegend Aktien, und zeigt, was Sie später monatlich ausgeben können.",
  "qp.de-etf-tagesgeld.btn": "Sparen und Anlegen vergleichen",
  "qp.de-etf-tagesgeld.fq": "Soll ich fürs Alter sparen oder anlegen?",
  "qp.de-etf-tagesgeld.fa": "Das hängt davon ab, wie lange Sie das Geld nicht brauchen und wie viel Schwankung Sie aushalten. Button Counter rechnet vier Mischungen durch und zeigt für jede, was Sie später zur Verfügung haben. Das ist keine Anlageberatung; es zeigt den Unterschied.",

  "qp.de-mit-50.slug": "altersvorsorge-mit-50",
  "qp.de-mit-50.goal": "retire",
  "qp.de-mit-50.h1": "Altersvorsorge mit 50: Lohnt sich das noch?",
  "qp.de-mit-50.a": "Ja. Mit 50 haben Sie oft noch fünfzehn Jahre oder mehr bis zur Rente. Das reicht, damit ein fester Monatsbetrag einen Unterschied macht. Außerdem trägt die gesetzliche Rente später einen Teil Ihrer Ausgaben; Ihr Erspartes muss nicht alles leisten. Die Frage ist nicht, ob es sich lohnt, sondern wie viel es bringt. Button Counter zeigt, was jeder zusätzliche Euro im Monat später bedeutet.",
  "qp.de-mit-50.btn": "Sehen, was es noch bringt",
  "qp.de-mit-50.fq": "Ist es mit 50 zu spät für die Altersvorsorge?",
  "qp.de-mit-50.fa": "Nein. Auch mit fünfzehn Jahren bis zur Rente macht ein fester Monatsbetrag einen Unterschied, zusätzlich zur gesetzlichen Rente. In Button Counter erhöhen Sie Ihren Sparbetrag und sehen sofort, was das später pro Monat bringt."
});

/* testversie 8: snelle start */
Object.assign(I18N.de, {"iq.h": "Wie viel können Sie später pro Monat ausgeben?", "iq.tap": "Tippen Sie auf Ihr Alter und rechnen Sie es in zwei Minuten aus. Ihr genaues Alter geben Sie später ein.", "iq.other": "Lieber mit einer anderen Frage beginnen?"});

Object.assign(I18N.de, {"iq.p": "Tippen Sie auf Ihr Alter, um zu beginnen. Ein paar kurze Fragen, kein Konto."});

/* testversie 8, ronde 3 */
Object.assign(I18N.de, {"iq.p": "Wählen Sie Ihre Frage. Ein paar kurze Fragen, kein Konto.", "iq.q0": "Was bringt mir Sparen?", "iq.a0": "18–34 Jahre", "iq.q1": "Bin ich auf Kurs?", "iq.a1": "35–49 Jahre", "iq.q2": "Reicht mein Geld?", "iq.a2": "50 Jahre und älter"});

/* testversie 8, ronde 4 */
Object.assign(I18N.de, {"tv.pic.quiet": "{x} zählt schon mit: {v} pro Monat. Jede Antwort zählt dazu.", "tv.q.pers": "Sind Sie allein oder haben Sie einen Partner?", "tv.v.one": "Allein", "tv.v.two": "Mit Partner"});
Object.assign(I18N.de, {"tv.q.stop_2": "In welchem Alter möchten Sie selbst aufhören zu arbeiten?", "tv.q.age": "Wie alt sind Sie?", "tv.q.age_2": "Wie alt sind Sie beide?"});
Object.assign(I18N.de, {"tv.pic.sofar": "Mit Ihren bisherigen Antworten."});
Object.assign(I18N.de, {"tv.h.bud": "Das wird Ihr Ziel: was Sie pro Monat ausgeben."});
Object.assign(I18N.de, {"tv.i.bud": "Geben Sie ein, was Sie heute pro Monat ausgeben, in heutigen Beträgen. Preissteigerungen bis dahin rechnen wir selbst mit ein."});
Object.assign(I18N.de, {"tv.ref.go": "Ergebnis verfeinern", "q.stopTwo": "Hier geht es um Sie. Für Ihren Partner gilt das eigene Rentenalter."});
Object.assign(I18N.de, {"tv.c.nm": "Geschlecht", "tv.cs.nm": "Ihr Geschlecht bestimmt die Lebenserwartung, mit der wir rechnen"});
Object.assign(I18N.de, {"tv.ref.sketch": "Das ist noch eine Skizze. Je mehr Sie ausfüllen, desto genauer Ihr Ergebnis."});
Object.assign(I18N.de, {"tv.pic.of": "von {w}", "tv.pic.togo": "Es fehlen noch {d}.", "tv.pic.ok": "Ziel erreicht: {d} übrig.", "tv.ref.sketch": "Je mehr Sie ausfüllen, desto genauer Ihr Ergebnis."});
Object.assign(I18N.de, {"tv.ref.sharp": "Ergebnis genauer machen", "tv.g.basis2": "Ihre Basis", "tv.g.basisDone": "Alle {n} Fragen beantwortet"});
Object.assign(I18N.de, {"iq.ctry": "Sie rechnen für {c} · ändern"});
Object.assign(I18N.de, {"iq.ctry": "Land: {c} · ändern"});

/* testversie 8: telling na alleen of met partner */ Object.assign(I18N.de, {"tv.pic.base2": "{x} für Sie beide zählt schon mit. Den Rest zählen Sie selbst dazu."});
/* testversie 8: klein vak met alleen het staatspensioen */ Object.assign(I18N.de, {"tv.pic.spK": "{x}, später pro Monat", "tv.pic.spK2": "{x} für Sie beide, später pro Monat"});
/* testversie 8: inleg en bijverdienen per persoon stap voor stap */ Object.assign(I18N.de, {"tv.pp.q": "Noch Einkommen nach dem Aufhören?", "tv.pp.save": "{v} pro Monat zurückgelegt", "tv.pp.work": "Zuverdienst {v} bis {a}", "tv.pp.nowork": "kein Einkommen nach dem Aufhören"});
Object.assign(I18N.de, {"big.who": "Gemeint ist Ihr Alter."});
Object.assign(I18N.de, {"tv.pro.go": "Pro ansehen"});
Object.assign(I18N.de, {"tv.pro.curveS": "Studien aus den Niederlanden, Großbritannien und den USA zeigen: Je älter Menschen werden, desto weniger geben sie im Schnitt aus. Pro rechnet mit diesem Verlauf. Oft brauchen Sie dann deutlich weniger."});
Object.assign(I18N.de, {"pl.pMore": "Mehr als 29 €"});
/* testversie 8: Pro-kaart ontwerp C */ Object.assign(I18N.de, {"tv.pro.h": "Noch ein Schritt zum ganzen Bild", "tv.pro.cta": "Plan vervollständigen · {p}", "tv.pro.once": "Einmalig, kein Abo."});
/* testversie 8: Pro-venster als echte aankoop, eerlijk na de tik */ Object.assign(I18N.de, {"pl.inPro": "In Pro enthalten:", "pl.fakeH": "Pro ist noch in Arbeit", "pl.fake": "Es wurde nichts berechnet. Danke: Ihr Tippen hilft zu entscheiden, was zuerst hineinkommt. Die Grundfunktionen bleiben kostenlos."});
