/* Knopenteller: alle teksten in het Frans. Elke taal heeft een eigen bestand met dezelfde sleutels;
   latere Object.assign-regels vullen aan of overschrijven. De build controleert dat geen sleutel ontbreekt. */
var I18N = self.I18N || {};
I18N.fr = {
  'brand.aria': 'Button Counter, vers l’aperçu', 'nav.aria': 'Pages', 'lang.label': 'Langue',
  'tab.overview': 'Aperçu', 'tab.input': 'Saisir', 'tab.insight': 'Analyse', 'tab.about': 'À propos',
  'alt.pouch': 'Une main empile des boutons pastel à côté d’une bourse en cuir ouverte', 'alt.notebook': 'Un carnet ouvert à côté de boutons disposés comme un petit diagramme en barres',
  'alt.bowls': 'Des boutons triés par couleur dans de petits bols', 'alt.stacks': 'Boutons dans une balance en laiton, un choix pesé contre un autre', 'alt.path': 'Un chemin sinueux de boutons vers un horizon ensoleillé',
  'ov.h': 'Où en êtes-vous ?',
  'ov.subEmpty': 'Indiquez ci-dessous, dans Calcul rapide, votre âge et ce que vous voulez dépenser par mois.',
  'ov.subCap': 'Patrimoine {c},', 'ov.subNoCap': 'Aucun patrimoine saisi : l’aperçu utilise {c}, le montant qui suffit avec 90 % de chances,',
  'ov.subRest': '{b} par mois à dépenser, {r}. Tous les montants en argent d’aujourd’hui.',
  'q.eyebrow': 'Calcul rapide', 'q.h': 'De quoi avez-vous besoin ?',
  'q.sub': 'Choisissez votre pays, indiquez votre âge et ce que vous voulez dépenser par mois. Button Counter complète le reste : l’âge de la retraite de base, l’espérance de vie moyenne et une cagnotte qui peut être vide à la fin.',
  'q.capital': 'Épargne et placements actuels', 'q.optional': '(facultatif)', 'q.budgetPh': 'par exemple 2500',
  'q.ageYou': 'Votre âge', 'q.ageOf': 'Âge de {n}', 'q.spYou': 'Votre {sp} attendue, par mois', 'q.spOf': '{sp} attendue pour {n}, par mois',
  'q.spHint': '{InCountry}, la {sp} dépend de votre carrière. Indiquez ce que vous attendez (voir {site}). Si vous laissez vide, Button Counter calcule sans.',
  'f.country': 'Pays de résidence', 'f.persons': 'Pour combien de personnes ?', 'p.one': '1 personne', 'p.two': '2 personnes',
  'p.you': 'Vous', 'p.partner': 'Partenaire', 'p.partnerAsk': 'votre partenaire',
  'f.sex': 'Sexe', 'sex.m': 'Homme', 'sex.f': 'Femme', 'sex.man': 'un homme', 'sex.woman': 'une femme', 'sex.person': 'une personne',
  'f.name': 'Prénom', 'f.name1': 'Votre prénom', 'f.name2': 'Prénom du partenaire', 'ctry.other': 'Autre pays',
  'u.years': 'ans', 'u.netMonth': '{cur} net par mois', 'u.workMonth': '{cur} par mois jusqu’à 67 ans', 'u.pctCap': '% du patrimoine', 'u.perPersonYear': '{cur} par personne et par an',
  'ageYM': '{y} ans {m} mois',
  'spName': 'retraite de base', 'spName.NL': 'AOW (retraite de base)', 'spName.GB': 'State Pension', 'spName.US': 'Social Security',
  'tag.bron': 'source', 'tag.aanname': 'hypothèse', 'tag.zelf': 'à remplir',
  'key.bron': 'source officielle en ligne, vérifiée lors de la création de l’app', 'key.aanname': 'valeur par défaut, vérifiez qu’elle vous convient', 'key.zelf': 'données que vous connaissez ou devez chercher',
  'g.key': 'Repère 75 % : juste · repère 90 % : confortable', 'g.lbl': 'chance de réussite',
  'g.empty': 'Chaque bouton représente un avenir possible. Une fois les données saisies, vous voyez combien se passent bien.',
  'g.text': 'Dans {n} boutons sur 20, votre patrimoine tient {r}. Chaque bouton représente un avenir possible.',
  'w.success': 'Chance de réussite', 'w.sp': 'Retraite de base', 'w.pension': 'Retraite complémentaire', 'w.work': 'Revenus d’appoint', 'w.fromCap': 'Du patrimoine', 'w.spendLine': 'Budget mensuel',
  'w.and': ' et ', 'w.now': 'Aujourd’hui', 'w.picked': 'choisi', 'w.autoPicked': 'choisi automatiquement',
  'ref.one': 'jusqu’à vos {a} ans', 'ref.two': 'jusqu’aux {a} ans de {n}',
  'v.empty': 'Pas encore rempli', 'v.emptyText': 'Dès que vous indiquez ce que vous voulez dépenser par mois, vous voyez ici la chance que votre patrimoine tienne.',
  'v.good': 'Confortable', 'v.warn': 'Juste', 'v.risky': 'Risqué', 'v.bad': 'Pas faisable',
  'v.ok': 'Avec {c} et {b} par mois à dépenser, votre argent tient {r}. À la fin, il reste {e}.',
  'v.shortOne': 'Votre patrimoine est épuisé vers {a} ans. Il manque {g} de capital de départ, ou le budget mensuel doit baisser à {mb}.',
  'v.shortTwo': 'Votre patrimoine est épuisé vers les {a} ans de {n}. Il manque {g} de capital de départ, ou le budget mensuel doit baisser à {mb}.',
  'v.pf': 'Portefeuille {pf}', 'v.work': 'Revenus d’appoint {w} par mois jusqu’à 67 ans', 'v.sim': 'Chance de réussite avec des rendements variables ({pf}) : {p}.',
  'k.end': 'Patrimoine restant à l’âge final', 'k.endS': 'avec un rendement moyen, en argent d’aujourd’hui', 'k.need': 'Capital de départ nécessaire', 'k.needS': 'pour {b} par mois',
  'k.bufOrShort': 'Marge ou manque', 'k.buffer': 'Marge', 'k.short': 'Manque', 'k.bufS': '{p} au-dessus du minimum', 'k.shortS': '{p} sous le minimum',
  'k.max': 'Budget mensuel maximal', 'k.maxS': 'avec {c} ({d} par mois par rapport à maintenant)', 'k.wr': 'Retrait au départ (année 1)', 'k.wrS': 'du patrimoine par an, {m} par mois', 'k.tax': 'Impôt en année 1',
  'fan.h': 'Évolution de votre patrimoine', 'fan.view': 'Affichage', 'fan.nominal': 'Nominal', 'fan.real': 'Réel', 'fan.zoomIn': 'Zoomer', 'fan.zoomOut': 'Dézoomer',
  'fan.lg.mid': 'Milieu', 'fan.lg.likely': 'Probable (50 % du milieu)', 'fan.lg.less': 'Moins probable (80 %)', 'fan.lg.rare': 'Rare (95 %)', 'fan.lg.spAge': 'Âge de la retraite',
  'fan.empty': 'Dès que vous indiquez ce que vous voulez dépenser par mois, vous voyez ici comment votre patrimoine peut évoluer les bonnes et les mauvaises années.',
  'fan.subEmpty': 'Comment le patrimoine peut évoluer avec des rendements variables.', 'fan.wr': 'Retrait par mois en année 1', 'fan.wrS': 'Retrait par mois en année 1 ({p} du patrimoine par an)',
  'fan.assump': 'Hypothèses du portefeuille', 'fan.assumpLater': 'affichées après la saisie', 'fan.aria': 'Fourchette du patrimoine selon l’âge',
  'fan.zero': 'Chance qu’il soit épuisé', 'fan.mix': '{a} % actions, {b} % obligations, {c} % épargne', 'fan.costs': '{p} de frais par an',
  'fan.sub': 'Voici comment le patrimoine peut évoluer quand les rendements varient, avec le portefeuille « {pf} », {n} simulations. Chaque année, le retrait sort d’abord, puis l’impôt. Plus la bande est foncée, plus c’est probable. Touchez ou survolez le graphique pour les chiffres.',
  'fan.noteNom': 'Nominal : les montants tels qu’ils figureront alors sur le compte, avec {p} d’inflation par an.', 'fan.noteReal': 'Réel : en argent d’aujourd’hui, pour que les montants restent comparables d’une année à l’autre.',
  'fl.0': 'Très bon (1 sur 40)', 'fl.1': 'Bon (1 sur 10)', 'fl.2': 'Au-dessus du milieu (1 sur 4)', 'fl.3': 'Milieu', 'fl.4': 'Sous le milieu (1 sur 4)', 'fl.5': 'Mauvais (1 sur 10)', 'fl.6': 'Très mauvais (1 sur 40)',
  'tbl.summary': 'Voir par année sous forme de tableau', 'tbl.note': 'Âge de {who}. Patrimoine avec un rendement moyen. Retrait par mois : ce qui sort encore du patrimoine après les retraites ; un moins signifie qu’il reste de l’argent.',
  'tbl.age': 'Âge', 'tbl.cap': 'Patrimoine', 'tbl.min': 'Minimum nécessaire', 'tbl.draw': 'Retrait/mois', 'tbl.tax': 'Impôt/an',
  'flow.h': 'Ce que vous voulez dépenser par mois et d’où cela vient',
  'flow.sub': 'Par an, en argent d’aujourd’hui : la part venant de la retraite de base, de la retraite complémentaire et du travail et la part venant du patrimoine. Touchez ou survolez une barre pour les chiffres.',
  'flow.empty': 'Dès que vous indiquez ce que vous voulez dépenser par mois, vous voyez ici, année par année, la part venant des retraites et du travail et celle venant du patrimoine.',
  'flow.aria': 'Budget mensuel par an, réparti entre retraite de base, retraite complémentaire, revenus d’appoint et patrimoine', 'flow.over': 'Excédent au-delà du budget',
  'next.h': 'Pour aller plus loin', 'next.pf': 'Comparer les portefeuilles', 'next.pfS': 'Épargne, prudent, équilibré et dynamique côte à côte', 'next.ld': 'Un autre budget mensuel', 'next.ldS': 'Ce que demande un peu plus ou un peu moins par mois', 'next.kp': 'Pouvoir d’achat par pays', 'next.kpS': 'Ce que vaut votre budget ailleurs',
  'in.h': 'Cinq petits boutons', 'in.sub': 'Tout se recalcule aussitôt et reste uniquement dans ce navigateur.', 'in.steps': 'Étapes', 'stepOf': 'Étape {n} sur {m}',
  'st1.t': 'Qui', 'st1.h': 'Qui êtes-vous ?', 'st1.s': 'D’abord le pays et le nombre de personnes. Les prénoms sont facultatifs : ils rendent graphiques et textes plus personnels et restent dans ce navigateur.',
  'h.country': 'Détermine la devise, les règles de la retraite de base, l’impôt sur les placements et l’espérance de vie. Tout reste modifiable.',
  'h.persons': 'À deux, Button Counter compte deux retraites de base et deux retraites complémentaires, ainsi que les abattements pour deux.',
  'h.sex': 'Pour l’espérance de vie, que l’app utilise comme âge final.',
  'st2.t': 'Patrimoine et budget', 'st2.h': 'Patrimoine et budget mensuel', 'st2.s': 'Ce qu’il y a aujourd’hui et ce qui sort chaque mois, en net.',
  'st3.t': 'Retraites', 'st3.h': 'Retraite de base et complémentaire', 'st3.s': 'Des revenus qui arrivent plus tard. Désactivez ce qui ne s’applique pas.',
  'f.spOn': 'A droit à la {sp}', 'f.penOn': 'A une retraite complémentaire ou privée', 'b.spAuto': 'Remettre l’âge et le montant de la retraite de base en automatique',
  'st4.t': 'Choix', 'st4.h': 'Choix', 'st4.s': 'Comment le patrimoine est investi, comment il est imposé et jusqu’à quand il doit tenir.',
  'f.portfolio': 'Portefeuille (répartition)', 'pf.auto': 'Automatique', 'pf.def': 'Prudent', 'pf.mid': 'Équilibré', 'pf.agg': 'Dynamique',
  'f.box3': 'Box 3 (impôt néerlandais sur le patrimoine)', 'b3.o1': 'Pondéré', 'b3.o2': 'Actuel (2026)', 'b3.o3': 'Défavorable (2027)', 'b3.o0': 'Désactivé',
  'f.tax': 'Impôt sur les revenus des placements', 'b.taxReset': 'Revenir à la valeur par défaut pour {country}',
  'f.runUntil': 'Durée jusqu’à l’âge final de', 'h.runUntil': 'Le scénario dure jusqu’à ce que cette personne atteigne l’âge final ci-dessous.',
  'b.auto': 'Remettre l’âge de la retraite et l’âge final en automatique',
  'st5.t': 'Hypothèses', 'st5.h': 'Autres hypothèses', 'st5.s': 'Valeurs par défaut. Gardez-les ou modifiez-les.',
  'f.cur': 'Devise', 'h.cur': 'Change seulement l’affichage des montants ; rien n’est converti.', 'mk.summary': 'Hypothèses de marché et sources', 'b.resetAll': 'Remettre tous les chiffres aux valeurs de départ',
  'f.startkapitaal': 'Capital de départ', 'h.startkapitaal': 'Le patrimoine disponible aujourd’hui pour vivre : épargne et placements ensemble.',
  'f.budget': 'Combien voulez-vous dépenser par mois ?', 'h.budget': 'L’objectif : net par mois, tout compris. Logement, courses, voyages et une réserve pour les imprévus. Button Counter calcule si c’est possible et d’où vient l’argent.',
  'f.werk': 'Revenus d’appoint nets par mois', 'h.werk': 'Facultatif. Net par mois jusqu’à 67 ans (à deux, tant que l’un des deux a moins de 67 ans).',
  'f.leeftijdPaul': 'Âge actuel', 'h.leeftijdPaul': 'Votre âge aujourd’hui, en années entières.', 'f.leeftijdDiana': 'Âge actuel', 'h.leeftijdDiana': 'Âge aujourd’hui, en années entières.',
  'f.spAge': 'Âge de la {sp}', 'h.spAge': 'Calculé à partir de votre âge et de votre pays. Modifiez-le si vous connaissez votre propre date.',
  'f.spAmt': '{Sp}, nette par mois', 'h.spAmt': 'Par personne. Rempli automatiquement quand le montant est fixe ; sinon le montant de votre relevé.',
  'f.penAmt': 'Retraite complémentaire nette par mois', 'h.penAmt': 'Hors retraite de base. Les montants du relevé sont traités comme de l’argent d’aujourd’hui.',
  'f.penAge': 'Début de la retraite complémentaire à', 'h.penAge': 'Âge de départ selon votre relevé.',
  'f.eindleeftijd': 'Âge auquel le patrimoine peut être épuisé', 'h.eindleeftijd': 'Automatiquement l’espérance de vie moyenne pour votre âge et votre sexe. La moitié des gens vivent plus longtemps : choisissez un âge plus élevé pour plus de marge.',
  'f.restkapitaal': 'Capital souhaité à cet âge', 'h.restkapitaal': 'Zéro signifie que le patrimoine peut être épuisé.',
  'f.inflatie': 'Inflation par an', 'h.inflatie': 'Par défaut 2,4 %, d’après la moyenne de long terme.',
  'f.kosten': 'Frais de placement par an', 'h.kosten': 'Frais des fonds et de la plateforme. Indiquez les frais de vos propres placements. L’impôt n’est pas inclus ici.',
  'f.taxRate': 'Taux d’imposition des rendements', 'h.taxRate': 'Appliqué chaque année au rendement au-delà de l’abattement. Les pertes ne sont pas imputées.',
  'f.taxAllow': 'Abattement', 'h.taxAllow': 'Rendement par personne et par an qui reste non imposé.',
  'tax.none': 'pas d’impôt sur les rendements', 'tax.label': '{r} % d’impôt sur les rendements',
  'b3.label.0': 'box 3 désactivée', 'b3.label.1': 'box 3 pondérée (75 % vers défavorable)', 'b3.label.2': 'box 3 forfaitaire 2026', 'b3.label.3': 'box 3 forfaitaire, proposition 2027',
  'b3.both': 'pour vous deux', 'b3.you': 'pour vous',
  'b3.h0': 'La box 3 n’est pas prise en compte.', 'b3.h2': 'Le système actuel : 36 % sur un rendement forfaitaire de 6,00 % sur les placements, {a} exonérés {who}.',
  'b3.h3': 'Pire cas : la proposition 2027 reste en vigueur. {b} exonérés {who}, 36 % sur un rendement forfaitaire de 7,87 %.',
  'b3.h1': 'Une ligne entre les trois propositions, de favorable (impôt sur la plus-value à la vente) au forfait actuel (2026) puis défavorable (la proposition 2027 reste). Ce scénario est à 75 % vers défavorable : {c} exonérés {who} et 36 % sur un rendement forfaitaire de 7,31 %.',
  'pf.autoHint': 'Choisi : {pf} (chance de réussite {p}). L’automatique retient le portefeuille avec la plus forte chance de réussite selon les réglages actuels ; à moins d’un point d’écart, celui qui laisse le plus à la fin l’emporte.',
  'pf.mixHint': '{a} % actions, {b} % obligations, {c} % épargne. Rendement attendu {r} brut par an, variations d’environ {s} par an.',
  'le.src.NL': 'CBS 2024', 'le.src.eu': 'estimation d’après Eurostat 2023', 'le.src.gb': 'estimation d’après l’ONS 2021–23', 'le.src.us': 'estimation d’après le CDC 2023', 'le.src.xx': 'chiffres néerlandais, CBS 2024',
  'adv.eyebrow': 'Conseil', 'adv.h': 'Voici ce dont vous avez besoin', 'adv.bigS': 'de patrimoine dès maintenant, 90 % de chances que ce soit assez',
  'adv.p': 'Pour dépenser {b} par mois {r}. Avec un rendement moyen, le minimum est de {min}. La meilleure répartition pour cela : {pf}.',
  'adv.spFrom': '{sp} dès {a}, {amt} par mois', 'adv.noSp': 'Pas de {sp}', 'adv.pen': '{amt} de retraite complémentaire par mois', 'adv.noPen': 'pas de retraite complémentaire', 'adv.empty': 'La cagnotte peut être vide à la fin.',
  'adv.basisOne': 'L’âge final de {a} ans est l’espérance de vie moyenne pour {s} de {now} ans ({src}).', 'adv.basisTwo': 'L’âge final est l’espérance de vie moyenne de celui ou celle d’entre vous qui devrait vivre le plus longtemps ({src}).',
  'adv.basisOwn': 'Vous avez choisi vous-même l’âge final de {a} ans.', 'adv.long': 'Si cela dure 5 ans de plus, jusqu’à {a} ans, il faut {c} pour les mêmes 90 %.',
  'adv.spMissing': 'Votre {sp} n’est pas encore comptée : dans ce pays elle dépend de votre carrière. Indiquez plus haut le montant attendu (voir {site}) pour un résultat plus précis.', 'adv.yourStatement': 'votre relevé de retraite',
  'adv.short': 'Vous avez {h} : {p} de ce qu’il faut. Il manque encore {g}.', 'adv.enough': 'Vous avez {h} : c’est assez, avec {g} de marge.',
  'adv.noCap': 'L’aperçu ci-dessous utilise maintenant {c}. Indiquez dans « Épargne et placements actuels » ce que vous avez déjà pour voir ce qui manque encore.',
  'kp.h': 'Ce que vaut votre budget selon le pays', 'kp.sub': '{InCountry}, votre budget est la référence : 100 % de pouvoir d’achat. Pour chaque pays, vous voyez combien de pouvoir d’achat le même montant y donne et ce que coûte le même mode de vie.',
  'kp.std': 'votre référence', 'kp.stdDet': 'Ici votre budget vaut 100 % de pouvoir d’achat.',
  'kp.need': 'Pour le mode de vie de {x} {inCountry}, il vous faut ici {n} par mois, {d} {more}', 'kp.less': 'de moins.', 'kp.more': 'de plus.',
  'kp.food': 'Alimentation', 'kp.out': 'Restaurants', 'kp.energy': 'Énergie', 'kp.power': 'pouvoir d’achat', 'kp.all': 'Voir les {n} pays',
  'kp.insight': 'Le plus pour votre argent : {top}. En Europe du Sud : {south}.',
  'kp.note': 'Source : Eurostat, niveau des prix de la consommation des ménages 2025 (publié en juin 2026), UE = 100, {home} {v}. Moyennes nationales : sur la côte, dans les grandes villes et pour les loyers des nouveaux arrivants, les prix sont souvent plus élevés. La santé n’est pas incluse.',
  'kp.noData': 'Les niveaux de prix d’Eurostat couvrent l’UE et quelques voisins, pas votre pays. Choisissez un pays européen pour comparer le pouvoir d’achat.',
  'kp.src': 'Source : Eurostat, niveaux de prix 2025.',
  'iz.h': 'Ce que d’autres choix changent', 'iz.sub': 'Pour approfondir l’aperçu, aujourd’hui et à plus long terme.', 'iz.empty': 'Indiquez d’abord dans <a href="#overview">Aperçu</a> ce que vous voulez dépenser par mois. Les comparaisons apparaîtront ensuite ici.',
  'pf.h': 'Comment se comportent les portefeuilles', 'pf.sub': 'Mêmes réglages, seule la répartition change. La chance de réussite vient de {n} simulations avec des rendements variables. Le scénario du haut utilise le rendement attendu du portefeuille choisi.',
  'pf.chance': 'chance que le patrimoine tienne {r}', 'chip.good': 'confortable', 'chip.warn': 'juste', 'chip.bad': 'risqué',
  'pf.mix': 'Répartition actions, obligations, épargne', 'pf.ret': 'Rendement attendu, brut', 'pf.sd': 'Variations par an', 'pf.need': 'Capital nécessaire, parcours moyen', 'pf.endMid': 'Capital à la fin, milieu', 'pf.endBad': 'Capital à la fin, 1 malchance sur 20',
  'sh.2022': 'Krach comme 2022 en année 1', 'sh.2008': 'Krach comme 2008 en année 1', 'pf.emptyAt': 'épuisé aux {a} ans de {n}', 'pf.left': '{v} restants', 'pf.below': '{v}, sous le reste souhaité',
  'pf.tblH': 'Patrimoine avec le portefeuille choisi ({pf}), en argent d’aujourd’hui', 'pf.chanceCol': 'Probabilité',
  'q.bad20': '1 malchance sur 20', 'q.low': 'Faible', 'q.mid': 'Milieu', 'q.good': 'Bon', 'q.good20': '1 chance sur 20',
  'pf.note': 'Rendements à distribution normale et inflation fixe de {i}. Les vrais krachs sont plus violents qu’une telle distribution, d’où deux années de krach : une année comme 2022 et comme 2008, suivies du rendement attendu. Après frais et {tax}, sans revenus d’appoint sauf s’ils sont saisis.',
  'mk.type': 'Type', 'mk.ret': 'Rendement brut', 'mk.sd': 'Variations', 'mk.basis': 'Sur quoi c’est fondé', 'a.eq': 'Actions mondiales', 'a.bond': 'Obligations', 'a.cash': 'Épargne et monétaire',
  'mk.b0': 'Invesco 6,0 % (dollar, 10 ans). Consensus de 18 maisons : États-Unis 6,3 %, pays développés hors États-Unis 7,3 %. Vanguard : hors États-Unis 3,9 à 5,9 %, variations 18,9 %.',
  'mk.b1': 'Taux allemand à 10 ans de 3,45 % le 6 octobre 2026, plus une petite prime pour les obligations d’entreprise. Vanguard : variations 5,0 à 6,2 %.',
  'mk.b2': 'Taux de dépôt de la BCE 2,50 % (29 octobre 2026). Vanguard : variations du monétaire 1,1 %.',
  'mk.corr': 'Corrélation', 'mk.corrT': 'Actions et obligations évoluent en partie ensemble (0,2) ; l’épargne est indépendante. Hypothèse propre.',
  'mk.cmp': 'Pour comparer', 'mk.cmpT': 'Amundi prévoit environ 4,5 % pour un investisseur en euros à 6 % de variations et 6,4 à 6,9 % à 12 %. Les répartitions ici sont un peu plus prudentes. Les chiffres sont en euros ; dans d’autres devises, ils sont une approximation.',
  'ld.h': 'Patrimoine nécessaire selon le budget mensuel', 'ld.sub': 'Mêmes hypothèses, seul le budget mensuel change. La ligne du milieu est le montant actuel.', 'ld.cap': 'Capital de départ', 'ld.ok': 'faisable', 'ld.no': 'manque',
  'mini.succ': 'chance de réussite', 'mini.need': 'Nécessaire', 'mini.max': 'Max. par mois',
  'pay.h': 'L’heure de faire le point.<br><span>L’heure d’avancer.</span>', 'pay.steps': '<span>Savoir où vous en êtes.</span> <span>Découvrir ce qui est possible.</span> <span>Décider où aller.</span>',
  'intro.q': 'Savez-vous vraiment…', 'intro.more': 'En savoir plus',
  'intro.list': '<li>où vous en êtes financièrement ?</li><li>quelle marge vous avez maintenant et plus tard ?</li><li>comment votre patrimoine peut évoluer ces prochaines années ?</li><li>quels choix financiers s’offrent à vous ?</li><li>ce qui devient possible si vous faites d’autres choix ?</li>',
  'about.h': 'L’idée derrière Button Counter',
  'about.body': '<p>Button Counter est un tableau de bord financier personnel : vous voyez ce que vous avez, la marge que cela vous donne aujourd’hui et demain et comment votre patrimoine peut évoluer.</p><p>Vous explorez des scénarios, testez des choix et voyez ce qu’ils signifient pour votre avenir. Tout est en argent d’aujourd’hui et reste dans votre propre navigateur.</p><p>L’important n’est pas seulement ce que vous avez construit, mais surtout ce que vous pouvez en faire.</p>',
  'about.intro': 'Revoir l’introduction', 'about.tour': 'Lancer la visite', 'about.ctryH': 'Votre pays dans Button Counter',
  'about.disclaimer': 'Button Counter donne un éclairage, pas un conseil fiscal ou en placement. Les règles par pays sont simplifiées ; vérifiez les sources officielles.',
  'fact.intro': 'Ce que Button Counter retient {inCountry}. Chaque chiffre est modifiable dans Saisir.',
  'fact.cur': 'Devise', 'fact.sp': 'Retraite de base', 'fact.spFlat': '{one} par mois pour une personne seule, {two} par personne pour un couple (net, taux plein)', 'fact.spFlat1': '{one} par mois et par personne (taux plein)',
  'fact.spVar': 'dépend de votre carrière ; indiquez votre propre montant', 'fact.spAge': 'Âge de la retraite', 'fact.tax': 'Impôt sur les placements', 'fact.le': 'Espérance de vie',
  'fact.pli': 'Niveau des prix', 'fact.pliV': '{v} (UE = 100, 2025)', 'fact.pliNone': 'absent de la comparaison Eurostat', 'fact.check': 'Vérifier vos propres chiffres',
  'src.h': 'Sources :', 'src.pli': 'Eurostat, niveaux de prix 2025', 'src.pli2': 'Niveaux de prix Eurostat par catégorie', 'src.le': 'Espérance de vie Eurostat 2023', 'src.cbs': 'Table de mortalité CBS 2024 (lifetable.de)',
  'src.invesco': 'Invesco, hypothèses de marché 2026', 'src.vanguard': 'Vanguard, prévisions de marché', 'src.amundi': 'Amundi, hypothèses de marché 2026', 'src.consensus': 'Consensus de 18 maisons (Portfoliolab)',
  'src.box3': 'SRA, box 3 néerlandaise 2026', 'src.ie': 'Irlande, budget 2026 protection sociale', 'src.fr': 'France, âge légal après la suspension', 'src.uk': 'GOV.UK, nouvelle State Pension',
  'sup.text': 'Button Counter vous est utile ?', 'sup.btn': 'Offrir un café',
  'b.prev': 'Précédent', 'b.next': 'Suivant', 'b.nextStep': 'Suivant : {s}', 'b.toOverview': 'Voir l’aperçu', 'b.skip': 'Passer', 'b.showHow': 'Montrez-moi comment ça marche', 'b.close': 'Fermer', 'b.start': 'C’est parti',
  'tour.1.h': 'Calcul rapide', 'tour.1.p': 'Indiquez votre pays, votre âge et votre budget mensuel. L’app complète le reste, comme la retraite de base et l’espérance de vie et montre aussitôt le patrimoine nécessaire.',
  'tour.2.h': 'En un coup d’œil', 'tour.2.p': 'La chance que votre patrimoine tienne jusqu’à l’âge choisi. Chaque bouton représente un avenir possible. Tant que rien n’est saisi, cela reste vide.',
  'tour.3.h': 'Les chiffres clés', 'tour.3.p': 'Ce qui reste à la fin, le capital nécessaire, votre marge ou votre manque, le budget mensuel maximal et ce que vous retirez au départ.',
  'tour.4.h': 'Votre argent dans les années à venir', 'tour.4.p': 'Comment votre patrimoine peut évoluer les bonnes et les mauvaises années. La ligne du milieu est le parcours le plus probable.',
  'tour.5.h': 'D’où vient votre budget mensuel', 'tour.5.p': 'Par an, la part venant des retraites et du travail et la part venant de votre patrimoine.',
  'tour.6.h': 'Approfondir', 'tour.6.p': 'Dans Analyse, vous comparez les portefeuilles, voyez ce que demande un autre budget mensuel et ce que vaut votre budget dans d’autres pays.',
  'tour.7.h': 'À propos de Button Counter', 'tour.7.p': 'L’idée derrière l’app, les règles de votre pays et toutes les sources. Vous pouvez aussi y relancer cette visite.',
  'tour.8.h': 'Affiner', 'tour.8.p': 'Envie de plus de précision ? En cinq étapes courtes, ajoutez retraites, revenus d’appoint et vos propres choix. Ensuite, jouez avec les curseurs.',
  'taxNote.NL': 'Box 3 : impôt sur un rendement supposé du patrimoine au-delà de l’abattement. Choisissez un scénario dans Choix.',
  'taxNote.BE': 'Dès 2026, la Belgique taxe les plus-values sur actifs financiers à 10 %, avec environ 10 000 € exonérés par personne et par an. Dividendes et intérêts sont imposés à part ; c’est une approximation.',
  'taxNote.DE': 'Abgeltungsteuer 25 % plus contribution de solidarité (26,375 %) sur les revenus au-delà de l’abattement de 1 000 € par personne. Impôt d’Église non inclus. Pour les fonds d’actions, 30 % des revenus sont exonérés (Teilfreistellung) ; le taux revient alors à environ 18,5 %.',
  'taxNote.FR': 'Prélèvement forfaitaire unique (PFU) de 31,4 % sur les revenus et plus-values de placement dès 2026. Un PEA ou une assurance-vie peut être moins cher après la durée de détention.',
  'taxNote.ES': 'Les revenus de l’épargne sont imposés de 19 % à 30 % selon le montant ; 21 % sert de moyenne.',
  'taxNote.IT': '26 % sur les revenus et plus-values de placement (12,5 % sur les obligations d’État).',
  'taxNote.PT': '28 % sur les revenus de placement et les plus-values.',
  'taxNote.IE': '33 % sur les plus-values et les intérêts, avec une exonération annuelle de 1 270 € par personne pour les plus-values. Fonds et ETF relèvent en général d’une exit tax distincte.',
  'taxNote.GB': 'Fixé à 0 % : l’app suppose que l’épargne est dans des ISA et des pensions. En dehors, dividendes et plus-values au-delà des abattements sont imposés.',
  'taxNote.US': '15 % comme taux indicatif pour les plus-values à long terme et dividendes qualifiés (0, 15 ou 20 %). Les retraits d’un 401(k) ou d’un IRA classique sont imposés comme un revenu.',
  'taxNote.XX': 'Pas de valeur par défaut. Indiquez le taux d’imposition des rendements qui s’applique à vous.',
  'spAgeNote.NL': 'Âge de l’AOW selon l’année de naissance : fixé jusqu’en 2031, ensuite lié à l’espérance de vie. Pour vous : {a}.',
  'spAgeNote.BE': 'Âge légal de la pension 66 ans dès 2025 et 67 ans dès 2030. Pour vous : {a}.',
  'spAgeNote.DE': 'Âge légal porté à 67 ans pour les personnes nées à partir de 1964. Pour vous : {a}.',
  'spAgeNote.FR': 'Âge légal après la suspension de la réforme en 2026 : de 62 ans et 9 mois jusqu’à 64 ans pour les générations nées à partir de 1969. Le taux plein peut exiger plus de trimestres. Pour vous : {a}.',
  'spAgeNote.ES': '67 ans, ou 65 ans avec une longue carrière cotisée. Pour vous : {a}.',
  'spAgeNote.IT': '67 ans pour la pension de vieillesse, lié à l’espérance de vie. Pour vous : {a}.',
  'spAgeNote.PT': '66 ans et 9 mois en 2026, lié à l’espérance de vie. Pour vous : {a}.',
  'spAgeNote.IE': 'State Pension (Contributory) dès 66 ans. Pour vous : {a}.',
  'spAgeNote.GB': '66 ans, passant à 67 ans entre 2026 et 2028 puis à 68 ans plus tard. Pour vous : {a}.',
  'spAgeNote.US': 'Âge de retraite à taux plein 67 ans pour les personnes nées en 1960 ou après ; possible dès 62 ans avec décote. Pour vous : {a}.',
  'spAgeNote.XX': '67 ans par défaut. Indiquez l’âge qui s’applique à vous. Pour vous : {a}.',
  'in.default': 'en {country}', 'in.NL': 'aux Pays-Bas', 'in.PT': 'au Portugal', 'in.GB': 'au Royaume-Uni', 'in.US': 'aux États-Unis', 'in.XX': 'dans votre pays',
  'adv.spNoAmt': '{sp} dès {a} (montant pas encore saisi)',
  'intro.where': 'Où habitez-vous ?', 'intro.whereSub': 'Button Counter règle alors la langue, la devise, les règles de retraite et les impôts pour votre pays. Vous pouvez le modifier à tout moment.', 'b.continue': 'Continuer'
};

/* Service tone: Button Counter speaks as "we", to "you". Short, helpful, almost a conversation. */
Object.assign(I18N.fr, {
  'ov.subEmpty': 'Dites-nous votre âge et ce que vous aimeriez dépenser chaque mois et nous vous montrons où vous en êtes.',
  'ov.subCap': 'Vous avez {c}.', 'ov.subNoCap': 'Vous n’avez pas encore indiqué de patrimoine, alors nous utilisons {c} : le montant qui suffit avec 90 % de chances.',
  'ov.subRest': 'Vous aimeriez dépenser {b} par mois, {r}. Tous les montants sont en argent d’aujourd’hui.',
  'q.sub': 'Dites-nous simplement où vous habitez, votre âge et ce que vous aimeriez dépenser chaque mois. Nous nous occupons du reste : l’âge de votre retraite de base, l’espérance de vie moyenne et une cagnotte qui peut être vide à la fin.',
  'q.capital': 'Combien avez-vous épargné ou investi jusqu’ici ?',
  'q.ageYou': 'Quel âge avez-vous ?', 'q.ageOf': 'Quel âge a {n} ?',
  'q.spYou': 'Quelle {sp} attendez-vous par mois ?', 'q.spOf': 'Quelle {sp} {n} attend-il par mois ?',
  'q.spHint': '{InCountry}, votre {sp} dépend de votre carrière, nous ne pouvons donc pas la remplir pour vous. Vous trouverez votre montant sur {site}. Si vous laissez vide, nous calculons sans.',
  'f.country': 'Où habitez-vous ?', 'f.persons': 'Vous prévoyez pour une ou pour deux personnes ?', 'f.budget': 'Combien aimeriez-vous dépenser par mois ?',
  'f.werk': 'Des revenus d’appoint ? Net par mois', 'f.leeftijdPaul': 'Quel âge avez-vous ?', 'f.leeftijdDiana': 'Quel âge a votre partenaire ?',
  'h.country': 'Nous l’utilisons pour la devise, les règles de la retraite de base, l’impôt sur les placements et l’espérance de vie. Vous pouvez ensuite modifier chaque chiffre vous-même.',
  'h.persons': 'Vous prévoyez à deux ? Nous comptons alors deux retraites de base, deux retraites complémentaires et les abattements pour vous deux.',
  'h.sex': 'Nous le demandons uniquement pour l’espérance de vie, qui fixe l’âge final.',
  'st1.s': 'Commençons par l’essentiel. Les prénoms sont facultatifs : ils rendent les graphiques plus personnels et restent dans ce navigateur.',
  'st2.s': 'Qu’avez-vous aujourd’hui et que voulez-vous dépenser chaque mois, en net ?',
  'st3.s': 'Des revenus qui arrivent plus tard. Désactivez ce qui ne vous concerne pas.',
  'st4.s': 'Comment votre argent est placé, comment il est imposé et combien de temps il doit durer.',
  'st5.s': 'Nous avons mis des valeurs par défaut raisonnables. Gardez-les, ou adaptez-les à votre situation.',
  'in.sub': 'Tout se recalcule pendant que vous tapez et rien ne quitte ce navigateur.',
  'h.startkapitaal': 'Tout ce dont vous pouvez vivre : épargne et placements ensemble.',
  'h.budget': 'Pensez net par mois, tout compris : logement, courses, voyages et un peu pour les imprévus. Nous calculons si c’est possible et d’où vient l’argent.',
  'h.werk': 'Facultatif. Nous le comptons jusqu’à 67 ans (à deux, tant que l’un de vous a moins de 67 ans).',
  'h.leeftijdPaul': 'Votre âge aujourd’hui, en années entières.', 'h.leeftijdDiana': 'Son âge aujourd’hui, en années entières.',
  'h.spAge': 'Nous l’avons calculé d’après votre âge et votre pays. Vous connaissez votre date exacte ? Modifiez-la simplement.',
  'h.spAmt': 'Par personne. Quand le montant est fixe, nous le remplissons pour vous ; sinon reprenez-le de votre relevé de retraite.',
  'h.penAmt': 'Retraite complémentaire ou privée, hors retraite de base. Nous traitons les montants du relevé comme de l’argent d’aujourd’hui.',
  'h.penAge': 'L’âge de départ indiqué sur votre relevé.',
  'h.eindleeftijd': 'Nous partons de l’espérance de vie moyenne pour votre âge et votre sexe. La moitié des gens vivent plus longtemps : choisissez un âge plus élevé si vous voulez plus de marge.',
  'h.restkapitaal': 'Vous voulez qu’il reste quelque chose ? Indiquez-le ici. Zéro signifie que l’argent peut être épuisé juste à ce moment-là.',
  'h.inflatie': 'Nous retenons 2,4 %, la moyenne de long terme. Vous attendez autre chose ? Ajustez-le ici.',
  'h.kosten': 'Frais des fonds et de la plateforme. Indiquez ce que coûtent vos propres placements ; nous traitons l’impôt à part.',
  'h.taxRate': 'Nous l’appliquons chaque année au rendement au-delà de l’abattement. Les pertes ne sont pas imputées.',
  'h.taxAllow': 'Le rendement par personne et par an qui reste non imposé.',
  'h.cur': 'Cela change seulement l’affichage des montants ; nous ne convertissons rien.',
  'h.runUntil': 'Nous calculons jusqu’à ce que cette personne atteigne l’âge final ci-dessous.',
  'key.bron': 'vérifié auprès d’une source officielle en ligne', 'key.aanname': 'une valeur par défaut raisonnable ; vérifiez qu’elle vous convient', 'key.zelf': 'ce que vous seul savez, ou pouvez chercher',
  'g.empty': 'Chaque bouton est un avenir possible. Remplissez le calcul rapide et nous vous montrons combien se passent bien.',
  'g.text': 'Dans {n} boutons sur 20, votre argent tient {r}. Chaque bouton est un avenir possible.',
  'v.emptyText': 'Dès que nous savons ce que vous aimeriez dépenser chaque mois, nous vous montrons la chance que votre argent tienne.',
  'v.ok': 'Avec {c} et {b} par mois à dépenser, votre argent tient {r}. Il vous resterait encore {e} à la fin.',
  'v.shortOne': 'Votre argent est épuisé vers {a} ans. Il vous faudrait {g} de plus au départ, ou un budget mensuel de {mb}.',
  'v.shortTwo': 'Votre argent est épuisé vers les {a} ans de {n}. Il vous faudrait {g} de plus au départ, ou un budget mensuel de {mb}.',
  'fan.empty': 'Dites-nous ce que vous aimeriez dépenser chaque mois et nous vous montrons comment votre patrimoine peut évoluer les bonnes et les mauvaises années.',
  'fan.sub': 'Voici comment votre patrimoine peut évoluer quand les rendements montent et descendent, avec le portefeuille « {pf} » sur {n} simulations. Chaque année, nous retirons d’abord votre retrait, puis l’impôt. Plus la bande est foncée, plus c’est probable. Touchez ou survolez pour les chiffres.',
  'flow.sub': 'Par an, en argent d’aujourd’hui : ce qui vient de la retraite de base, de la retraite complémentaire et du travail et ce que nous prenons sur votre patrimoine. Touchez ou survolez une barre pour les chiffres.',
  'flow.empty': 'Dites-nous ce que vous aimeriez dépenser chaque mois et nous vous montrons, année par année, d’où vient cet argent.',
  'tbl.note': 'Âge de {who}. Patrimoine avec un rendement moyen. Le retrait par mois est ce qui sort encore de votre patrimoine après les retraites ; un moins signifie qu’il vous reste de l’argent.',
  'iz.sub': 'Envie de voir un peu plus loin ? Ici, vous voyez ce que d’autres choix changeraient.',
  'iz.empty': 'Dites-nous d’abord dans <a href="#overview">Aperçu</a> ce que vous aimeriez dépenser chaque mois ; ensuite nous affichons les comparaisons ici.',
  'pf.sub': 'Mêmes réglages, seule la répartition change. Nous avons calculé la chance de réussite avec {n} simulations aux rendements variables. L’aperçu utilise le rendement attendu du portefeuille choisi.',
  'pf.autoHint': 'Nous avons choisi {pf} pour vous (chance de réussite {p}) : le portefeuille avec la meilleure chance selon vos réglages actuels. Si deux sont à moins d’un point, nous prenons celui qui vous laisse le plus.',
  'pf.note': 'Nous supposons des rendements à distribution normale et une inflation fixe de {i}. Les vrais krachs frappent plus fort, c’est pourquoi nous ajoutons deux années de krach : une comme 2022 et une comme 2008, suivies du rendement attendu. Après frais et {tax}, sans revenus d’appoint sauf si vous les avez indiqués.',
  'ld.sub': 'Et si vous dépensiez un peu plus ou un peu moins ? Mêmes hypothèses, seul le budget mensuel change. La ligne du milieu correspond à ce que vous avez saisi.',
  'kp.sub': '{InCountry}, votre budget est la référence : 100 % de pouvoir d’achat. Pour chaque pays, nous montrons ce que le même montant y permet et ce que coûterait le même mode de vie.',
  'kp.noData': 'Nos données de prix couvrent l’UE et quelques voisins, mais pas votre pays. Choisissez un pays européen pour comparer le pouvoir d’achat.',
  'adv.bigS': 'de patrimoine dès maintenant, avec 90 % de chances que ce soit assez',
  'adv.p': 'Pour dépenser {b} par mois {r}, il vous faut au moins {min} avec un rendement moyen. La répartition qui convient le mieux est {pf}.',
  'adv.spMissing': 'Nous n’avons pas encore compté votre {sp} : {inCountry}, elle dépend de votre carrière. Indiquez plus haut le montant attendu (vous le trouverez sur {site}) et nous affinerons la réponse.',
  'adv.short': 'Vous avez {h} : {p} de ce qu’il faut. Il vous manque {g}.', 'adv.enough': 'Vous avez {h} : c’est assez, avec {g} de marge.',
  'adv.noCap': 'Pour l’instant, l’aperçu utilise {c}. Indiquez dans « Combien avez-vous épargné ou investi jusqu’ici ? » ce que vous avez déjà et nous vous montrons ce qui manque encore.',
  'tour.1.p': 'Commencez ici. Indiquez votre pays, votre âge et votre budget mensuel ; nous complétons le reste, comme la retraite de base et l’espérance de vie et montrons aussitôt ce qu’il vous faut.',
  'tour.2.p': 'C’est la chance que votre argent tienne jusqu’à l’âge choisi. Chaque bouton est un avenir possible. Tant que rien n’est saisi, cela reste vide.',
  'tour.3.p': 'Les chiffres clés d’un coup d’œil : ce qui reste à la fin, ce qu’il vous faut, votre marge ou votre manque, le budget mensuel maximal et ce que vous retirez au départ.',
  'tour.4.p': 'Comment votre patrimoine peut évoluer les bonnes et les mauvaises années. La ligne du milieu est le parcours le plus probable.',
  'tour.5.p': 'Année par année : ce qui vient des retraites et du travail et ce qui vient de votre patrimoine.',
  'tour.6.p': 'Envie d’approfondir ? Dans Analyse, comparez les portefeuilles, essayez un autre budget mensuel et voyez ce que vaut votre argent à l’étranger.',
  'tour.7.p': 'Vous trouverez ici l’idée derrière Button Counter, les règles de votre pays et toutes nos sources. Vous pouvez aussi relancer cette visite d’ici.',
  'tour.8.p': 'Envie de plus de précision ? En cinq étapes courtes, ajoutez retraites, revenus d’appoint et vos propres choix. Ensuite, jouez simplement avec les curseurs.',
  'about.lead': '<p>Button Counter est votre tableau de bord financier personnel. Il vous montre ce que vous avez, la marge que cela vous donne aujourd’hui et demain et comment votre patrimoine peut évoluer.</p>',
  'about.body': '<p class="ab-lead">Button Counter a commencé comme un projet personnel. Je ne voulais pas seulement savoir où j’en étais, mais aussi ce que je pouvais faire pour arriver où je voulais.</p><p>Alors je me suis mis à calculer. J’ai posé ma propre situation à plat et j’ai changé une seule chose à la fois.</p><p class="ab-ifs"><span>Et si je mettais davantage de côté ?</span><span>Et si je travaillais plus longtemps ?</span><span>Et si j’investissais autrement ?</span></p><p>Après chaque changement, je voyais ce que cela donnait. J’ai ainsi compris quelle stratégie me convient le mieux, non seulement pour décider où je voulais aller, mais aussi pour y arriver.</p><p class="ab-turn">Cette compréhension, je souhaite aussi vous l’offrir.</p><p>Mes propres calculs sont donc devenus une application pour tous ceux qui se posent la même question. Que vous débutiez, que vous soyez en pleine construction ou que la retraite soit déjà en vue : vous saisissez votre situation et vous testez ce qui change la donne.</p><p>Et comme il s’agit de votre argent, tout reste dans votre propre navigateur.</p><p class="ab-close">Car l’important n’est pas seulement ce que vous construisez, mais surtout ce que vous pouvez en faire.</p>',
  'fact.intro': 'Voici ce que nous retenons {inCountry}. Vous pouvez modifier chaque chiffre dans Saisir.',
  'about.disclaimer': 'Button Counter vous donne un éclairage, pas un conseil fiscal ou en placement. Nous avons simplifié les règles par pays : consultez aussi les sources officielles.',
  'sup.text': 'Button Counter vous est utile ?',
  'sup.after': 'Cela vous a aidé ? Un conseil ou un café est toujours le bienvenu.'
});
Object.assign(I18N.fr, {
  "fb.send": "Envoyer", "fb.sending": "Envoi en cours…", "fb.sent": "Merci ! Votre astuce a bien été envoyée.", "fb.fail": "L’envoi a échoué. Vérifiez votre connexion et réessayez.", "fb.fallback": "Ça ne marche pas ? Ouvrez vous-même le formulaire", "fb.mail": "Plutôt par e-mail", "fb.sub": "Choisissez un sujet et dites-nous ce que vous avez remarqué.", "fb.privacy": "Rien n’est envoyé tant que vous ne cliquez pas sur Envoyer. Votre astuce nous parvient directement.",   'fb.ctry': 'Pays', 'fb.persons': 'Personnes',
  "fb.line": "Une astuce ou un ajout ? Nous serions ravis de vous lire.", "fb.btn": "Donner une astuce", "fb.aboutH": "Aidez-nous à améliorer Button Counter", "fb.aboutP": "Il manque une règle pour votre pays, vous avez repéré une erreur ou vous avez une idée ? Dites-le-nous. Chaque astuce nous aide à garder Button Counter juste pour tous.", "fb.h": "Que pouvons-nous améliorer ?", "fb.topic": "De quoi s’agit-il ?", "fb.cat": "Sujet", "fb.section": "Rubrique", "fb.cat.data": "Un chiffre ou une source est faux", "fb.cat.country": "Règles de mon pays", "fb.cat.text": "Texte ou traduction", "fb.cat.idea": "Idée ou ajout", "fb.cat.other": "Autre chose", "fb.msg": "Votre astuce ou ajout", "fb.ph.data": "Quel chiffre et que devrait-il être ? Un lien vers la source nous aide beaucoup.", "fb.ph.country": "Quelle règle manque ou diffère là où vous vivez ?", "fb.ph.text": "Quel texte et comment le diriez-vous ?", "fb.ph.idea": "Qu’est-ce qui rendrait Button Counter plus utile pour vous ?", "fb.ph.other": "Dites-nous ce qui vous occupe.", "fb.incl": "Ajouter mes chiffres (âges, budget, patrimoine) pour que vous voyiez ce que je vois", "fb.copy": "Copier le texte", "fb.after": "Votre messagerie devrait s’ouvrir avec votre message prêt. Rien ne s’est passé ? Copiez le texte et envoyez-le à {mail}.", "fb.copied": "Copié. Collez-le dans un e-mail à {mail}.", "fb.empty": "Écrivez d’abord quelques mots, puis vous pourrez envoyer.", "fb.direct": "Ou écrivez-nous directement :", "fb.spot": "Une erreur ?",
  'src.sep': ' : ', 'h.penAge': 'L’âge de départ indiqué sur votre relevé. Nous supposons qu’elle commence avec votre {sp} ; modifiez-le si ce n’est pas votre cas.', 'penName': 'retraite complémentaire', 'w.sp': '{Sp}', 'w.pension': '{Pen}',
  'st3.h': '{Sp} et {pen}', 'f.penOn': 'A une {pen}', 'f.penAmt': '{Pen}, nette par mois',
  'h.penAmt': 'Indiquez-la en montant net par mois, sans la {sp}. Vous avez une cagnotte plutôt qu’un montant mensuel ? Ajoutez-la à votre patrimoine.',
  'adv.pen': '{amt} de {pen} par mois', 'adv.noPen': 'pas de {pen}',
  'srcT.le': 'Espérance de vie', 'srcT.tax': 'Impôt', 'srcT.mkt': 'Perspectives de marché', 'srcT.pli': 'Niveaux de prix', 'src.checked': 'vérifié {d}',
  'penNote.NL': 'La plupart des salariés se constituent une retraite via leur employeur ou un fonds de branche. Votre montant figure sur mijnpensioenoverzicht.nl.',
  'penNote.BE': 'Beaucoup de salariés se constituent une pension complémentaire via leur employeur. mypension.be montre votre pension légale et complémentaire.',
  'penNote.DE': 'Une retraite d’entreprise est courante mais pas obligatoire. Votre relevé annuel montre la partie légale ; votre employeur ou prestataire connaît le reste.',
  'penNote.FR': 'Les salariés du privé cotisent aussi à une retraite complémentaire obligatoire (Agirc-Arrco). info-retraite.fr montre les deux.',
  'penNote.ES': 'Les plans de retraite d’entreprise sont rares ; pour la plupart des gens, la pension publique est le revenu principal. C’est donc elle qu’il faut surtout indiquer.',
  'penNote.IT': 'Les salariés peuvent verser leur indemnité de fin de contrat (TFR) dans un fonds de pension. Votre pension publique figure sur inps.it.',
  'penNote.PT': 'Les fonds de pension d’entreprise existent mais sont peu répandus ; beaucoup épargnent dans un plan retraite (PPR). C’est une cagnotte : ajoutez-la à votre patrimoine.',
  'penNote.IE': 'Beaucoup de salariés ont une retraite d’entreprise et l’adhésion automatique (My Future Fund) existe depuis 2026. Une cagnotte va dans le patrimoine ; un montant mensuel fixe se saisit ici.',
  'penNote.GB': 'La plupart des salariés sont inscrits automatiquement à une retraite d’entreprise. C’est en général une cagnotte : ajoutez-la à votre patrimoine, sauf si vous recevrez un montant mensuel fixe.',
  'penNote.US': 'Un 401(k) ou un IRA est une cagnotte, pas un montant mensuel : ajoutez-le à votre patrimoine. N’indiquez ici qu’une retraite versée en montant mensuel fixe.',
  'penNote.XX': 'Indiquez une retraite en montant mensuel fixe. Si c’est une cagnotte, ajoutez-la à votre patrimoine.'
});
Object.assign(I18N.fr, {
 "intro.about": "<p class='ia-lead'>Button Counter est votre tableau de bord financier personnel.</p><p class='ia-show'>Il vous montre :</p><ul class='ia-list'><li>où vous en êtes aujourd’hui, même si vous débutez</li><li>la marge que cela vous donne maintenant</li><li>comment vos revenus contribuent à la croissance de votre avenir financier</li></ul><div class='ia-sum'><h3>Votre avenir financier est une somme à deux côtés</h3><div class='ia-sides'><div class='ia-side'><b>Ce qui entre</b><span>Que se passe-t-il si vous augmentez vos revenus ?</span><span>Si vous mettez de côté ou remboursez un peu plus chaque mois ?</span><span>Ou si vous travaillez plus longtemps, ou un peu moins ?</span></div><div class='ia-side'><b>Ce que vous en faites</b><span>Que se passe-t-il, par exemple, si vous investissez de façon plus agressive ?</span></div></div><p>Ajustez les deux côtés et vous obtenez des scénarios sur mesure. Vous voyez comment votre comportement et vos efforts se répercutent plus tard.</p></div><p>Vous explorez des scénarios et testez des choix, comme commencer à épargner plus tôt ou arrêter de travailler plus tôt. Vous voyez ce qu’ils signifient pour votre avenir. <b>L’inflation est déjà prise en compte.</b> Vous voyez donc ce que vous pourrez vraiment acheter plus tard.</p><p class='ia-why'>J’ai créé Button Counter pour moi-même. Je ne voulais pas seulement savoir où j’en étais, mais aussi ce que je pouvais faire pour arriver où je voulais. Cette compréhension, je souhaite aussi vous l’offrir.</p><p class='ia-close'>Car l’important n’est pas seulement ce que vous construisez, mais surtout ce que vous pouvez en faire.</p><p class='ia-priv'><svg viewBox='0 0 24 24' width='18' height='18' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='11' width='14' height='9' rx='2'/><path d='M8 11V8a4 4 0 0 1 8 0v3'/></svg><span><b>Vos données restent à vous.</b> Elles restent sur votre appareil, dans votre navigateur.</span></p>",
 "intro.ask": "Qu’aimeriez-vous savoir ?",
 "intro.promise": "Une réponse honnête à une question : est-ce suffisant ? Pas de discours commercial et chaque chiffre a sa source.",
 "goal.bar": "Votre question",
 "goal.sub": "Répondez aux questions ci-dessous et votre réponse apparaît aussitôt.",
 "goal.go": "Voir ma réponse",
 "goal.change": "Poser une autre question",
 "goal.1.t": "Sais-je vraiment ce que j’ai ?",
 "goal.1.s": "Mettez tout à plat et voyez si cela suffira plus tard.",
 "goal.2.t": "Que puis-je dépenser chaque mois ?",
 "goal.2.s": "Une somme avec laquelle vivre sans souci.",
 "goal.3.t": "Que coûte d’arrêter un an plus tôt ?",
 "goal.3.s": "Ou travailler moins : essayez et voyez ce que cela change.",
 "goal.4.t": "Où mon argent va-t-il le plus loin ?",
 "goal.4.s": "Comparez ce que la même somme permet dans d’autres pays.",
 "goal.5.t": "Je ne sais pas encore",
 "goal.5.s": "Laissez-moi simplement regarder."
});
Object.assign(I18N.fr, {
 "ov.subEmpty": "À partir de votre âge et de ce que vous aimeriez dépenser chaque mois, nous vous montrons où vous en êtes.",
 "q.sub": "Avec votre âge et ce que vous aimeriez dépenser chaque mois, nous calculons le reste : l’âge de votre retraite de base, l’espérance de vie moyenne et une cagnotte qui peut être vide à la fin.",
 "f.country": "Pour quel pays calculez-vous ?",
 "fan.empty": "Dès que vous saisissez un montant mensuel, nous montrons comment votre patrimoine peut évoluer les bonnes et les mauvaises années.",
 "flow.empty": "Avec un montant mensuel, nous montrons année par année d’où vient cet argent.",
 "iz.empty": "Saisissez d’abord dans <a href=\"#overview\">Aperçu</a> ce que vous aimeriez dépenser chaque mois ; les comparaisons s’afficheront ici.",
 "tour.1.p": "Commencez ici. Avec votre pays, votre âge et votre budget mensuel, nous complétons le reste, comme la retraite de base et l’espérance de vie et montrons tout de suite ce qu’il vous faut.",
 "intro.promise": "Est-ce suffisant ? Nous le calculons, sans discours commercial et avec la source de chaque chiffre."
});
Object.assign(I18N.fr, {
 "inst.btn": "Installer l’app",
 "inst.h": "Mettre Button Counter sur votre téléphone",
 "inst.sub": "L’app s’ouvre en plein écran, fonctionne sans internet et reste sur votre téléphone.",
 "inst.ios": "<li>Touchez le bouton de partage dans Safari.</li><li>Choisissez <b>Sur l’écran d’accueil</b>.</li><li>Touchez <b>Ajouter</b>. C’est fait.</li>",
 "inst.other": "Ouvrez le menu du navigateur et choisissez <b>Installer l’application</b> ou <b>Ajouter à l’écran d’accueil</b>. Une barre avec une croix s’affiche en haut ? Touchez d’abord les trois points, choisissez <b>Ouvrir dans Chrome</b>, puis installez depuis là."
});
Object.assign(I18N.fr, {
 "ov.start": "Commencer",
 "ov.subEmpty": "Dès que vous avez saisi votre âge et votre budget mensuel, vous voyez ici où vous en êtes.",
 "g.empty": "Chaque bouton est un avenir possible. Une fois les bases remplies, vous voyez combien se passent bien.",
 "tour.1.h": "Où vous en êtes",
 "tour.1.p": "Vous voyez ici d’un coup d’œil où vous en êtes. Dès que vous avez rempli quelque chose, le conseil apparaît aussi ici.",
 "st1.t": "L’essentiel",
 "st2.t": "Vous",
 "st2.h": "Encore un peu sur vous",
 "st2.s": "Les prénoms rendent les graphiques et les textes plus personnels. Les revenus d’appoint comptent jusqu’à 67 ans. Les deux sont facultatifs.",
 "goal.sub": "Remplissez les étapes ci-dessous. Votre réponse se met à jour au fur et à mesure.",
 "ov.k.cap": "Patrimoine",
 "ov.k.capAuto": "Non saisi, ce montant suffit avec 90 % de chances",
 "ov.k.bud": "Budget par mois",
 "ov.k.end": "Âge final",
 "ov.k.endOf": "de {n}",
 "ov.k.today": "Tous les montants en argent d’aujourd’hui.",
 "mini.need90": "Nécessaire pour 90 % de chances",
 "v.lead": "La chance de réussite est {l} ({p}).",
 "v.lvl.good": "élevée",
 "v.lvl.warn": "correcte",
 "v.lvl.risky": "faible",
 "v.lvl.bad": "très faible",
 "v.risk": "Si les rendements déçoivent, l’argent s’épuise plus tôt dans {f} cas sur 100.",
 "v.ok": "Avec un rendement moyen, votre argent tient {r}, avec {c} et {b} par mois à dépenser. Il vous resterait alors encore {e} à la fin.",
 "fan.info": "Expliquer nominal et réel",
 "fan.infoH": "Nominal ou réel ?",
 "fan.infoNom": "Tient compte de l’inflation ({p} par an). Les montants sont ceux qui figureront alors sur le compte : ils augmentent, mais permettent d’acheter moins.",
 "fan.infoReal": "Les prix restent les mêmes. Les montants sont en argent d’aujourd’hui : vous voyez ce qu’ils permettent d’acheter et comparez bien les années.",
 "k.needOf": "sur vos {t}, pour {b} par mois",
 "k.bufSum": "{t} moins {n} nécessaires : {p} au-dessus du minimum",
 "k.shortSum": "{t} moins {n} nécessaires : {p} sous le minimum",
 "mini.max90": "Max. par mois pour 90 % de chances",
 "k.max90": "Budget mensuel max. (90 % de chances)",
 "pf.max": "Budget mensuel max., parcours moyen",
 "v.shortOne": "Avec un rendement moyen, votre argent est épuisé vers {a} ans. Pour 90 % de chances, il vous faudrait {g} de plus au départ, ou un budget mensuel de {mb} au maximum.",
 "v.shortTwo": "Avec un rendement moyen, votre argent est épuisé vers les {a} ans de {n}. Pour 90 % de chances, il vous faudrait {g} de plus au départ, ou un budget mensuel de {mb} au maximum.",
 "mini.succWith": "de chances de réussite avec {c}",
 "adv.p": "Avec {c}, vous pouvez dépenser {b} par mois {r}. Dans 9 cas sur 10, l’argent tient jusque-là. La répartition qui convient le mieux est {pf}.",
 "priv.h": "Confidentialité",
 "vis.n": "{n} utilisateurs",
 "priv.body": "<p><strong>Vos données restent chez vous.</strong> Ce que vous saisissez (âges, montants, choix) est enregistré uniquement dans votre navigateur, sur cet appareil. Rien n’est envoyé à Button Counter et personne d’autre ne peut le voir. Si vous effacez les données du navigateur, elles disparaissent.</p><p><strong>Pas de suivi.</strong> Aucun cookie publicitaire n’est utilisé et vous n’êtes pas suivi. Les visites sont comptées de façon anonyme (nombre de visites, pages et pays, ainsi que la fréquence d’utilisation de fonctions comme les notes ou le partage, jamais ce que vous saisissez) avec GoatCounter, sans cookies et sans données personnelles. Le stockage dans votre navigateur sert uniquement à faire fonctionner le site et à retenir votre saisie.</p><p><strong>Ce qui passe par des tiers.</strong> Le site est hébergé sur GitHub Pages ; GitHub voit donc des données techniques comme votre adresse IP au chargement de la page. Le formulaire derrière « Donner une astuce » est un Google Form : ce que vous y écrivez parvient à l’auteur et éventuellement à Google. N’y saisissez rien qui doive rester privé. Les liens vers les sources mènent à d’autres sites avec leurs propres règles.</p><p><strong>Contact.</strong> Ce que vous envoyez via « Donner une astuce » sert uniquement à améliorer le site et n’est pas conservé plus longtemps que nécessaire. Vous voulez faire supprimer quelque chose, ou vous avez une question sur ce texte ? Envoyez un message via « Donner une astuce ».</p>",
 "disc.h": "Avertissement",
 "disc.body": "<p>Button Counter est un outil de calcul général, à titre d’information uniquement. Ce n’est <strong>pas</strong> un conseil financier, en placement, fiscal, de retraite ou juridique, et aucun conseil n’est donné sur votre situation personnelle.</p><p>Les résultats sont des estimations fondées sur des règles simplifiées et des hypothèses de rendement, d’inflation et d’espérance de vie. L’avenir peut différer, et les règles par pays peuvent être incomplètes ou dépassées. Aucun droit ne peut être tiré des résultats.</p><p>L’utilisation de ce site se fait à vos propres risques. Dans la mesure permise par la loi, l’auteur décline toute responsabilité pour les décisions prises ou les dommages subis en raison de ce site. Vérifiez les sources officielles et consultez un conseiller indépendant et agréé avant toute décision financière importante.</p>",
 "slot.spin": "Tourner",
 "slot.ok": "Je souhaite une réponse à cette question",
 "slot.hint": "Tournez la roue du doigt jusqu’à ce que votre question soit au milieu, puis confirmez.",
 "slot.pick": "Choisir une question",
 "seo.title": "Combien de temps durera votre épargne ? Votre avenir financier en vue | Button Counter",
 "seo.desc": "Simulateur pour votre avenir financier. Indiquez votre âge, votre épargne et votre budget mensuel et voyez la probabilité que votre argent suffise, sur la base de 4 000 simulations.",
 "faq.h": "Questions fréquentes",
 "faq.q1": "Qu’est-ce que Button Counter ?",
 "faq.a1": "<p>Button Counter vous donne un aperçu de votre avenir financier : combien de temps votre épargne durera et ce qui change quand vous ajustez quelque chose. Vous indiquez votre âge, votre épargne et le budget mensuel souhaité. Button Counter affiche alors la probabilité que votre argent suffise jusqu’à votre âge de fin, sur la base de 4 000 simulations de bonnes et de mauvaises années boursières.</p>",
 "faq.q2": "De combien d’épargne ai-je besoin pour arrêter de travailler ?",
 "faq.a2": "<p>Cela dépend de votre budget mensuel, de votre âge et de la pension que vous recevrez. Button Counter calcule le montant nécessaire pour avoir 90 % de chances que votre argent suffise. En règle générale, il faut souvent 25 à 30 fois les dépenses annuelles que vos pensions ne couvrent pas.</p>",
 "faq.q3": "Comment la probabilité de réussite est-elle calculée ?",
 "faq.a3": "<p>Button Counter exécute 4 000 simulations dans lesquelles le rendement varie chaque année. Le calcul est fait pour quatre répartitions (prudent, équilibré, dynamique et épargne sans investir), après frais, impôts et inflation ; tous les montants sont donc en argent d’aujourd’hui. La probabilité de réussite est la part des simulations dans lesquelles votre argent dure jusqu’à votre âge de fin. Deux scénarios de krach, l’un comme 2008 et l’autre comme 2022, sont présentés à part.</p>",
 "faq.q4": "Pour quels pays Button Counter fonctionne-t-il ?",
 "faq.a4": "<p>Button Counter a ses propres règles pour les Pays-Bas, la Belgique, l’Allemagne, la France, l’Espagne, l’Italie, le Portugal, l’Irlande, le Royaume-Uni et les États-Unis, ainsi qu’un réglage général pour les autres pays. Chaque pays a sa propre pension d’État, son âge de la retraite et sa fiscalité des placements. Button Counter compare aussi ce que vaut votre budget dans 31 pays européens, d’après les niveaux de prix d’Eurostat.</p>",
 "faq.q5": "Button Counter est-il gratuit, et que deviennent mes données ?",
 "faq.a5": "<p>Button Counter est sans publicité et sans compte. La plus grande partie est gratuite et le reste ; quelques fonctions avancées sont volontairement réservées à Pro. Ce que vous saisissez reste dans votre propre navigateur, sur votre appareil, et n’est pas envoyé à Button Counter. Les visites et l’utilisation des fonctions sont comptées de façon anonyme, sans cookies.</p>",
 "faq.q6": "S’agit-il d’un conseil financier ?",
 "faq.a6": "<p>Non. Button Counter est un outil de calcul général qui donne des estimations fondées sur des règles simplifiées et des hypothèses. Il ne donne aucun conseil sur votre situation personnelle. Vérifiez les sources officielles et consultez un conseiller indépendant et agréé avant toute décision financière importante.</p>",
 "home.h1": "Votre avenir financier, bouton après bouton.",
 "home.kick": "Perspective financière",
 "home.quick": "Vos chiffres",
 "home.more": "Tout affiner",
 "pl.h": "Comparer deux plans",
 "pl.sub": "Enregistrez vos données comme plan A ou B, modifiez quelque chose et voyez la différence côte à côte.",
 "pl.now": "Actuel",
 "pl.a": "Plan A",
 "pl.b": "Plan B",
 "pl.save": "Enregistrer comme {n}",
 "pl.load": "Charger",
 "pl.clear": "Effacer",
 "pl.empty": "Pas encore enregistré",
 "pl.saved": "Enregistré comme {n}",
 "pl.loaded": "{n} chargé",
 "pl.r.bud": "Budget mensuel",
 "pl.r.cap": "Épargne",
 "pl.r.end": "Âge de fin",
 "pl.r.succ": "Probabilité de réussite",
 "pl.r.c90": "Nécessaire pour 90 % de chances",
 "pl.r.max": "Budget mensuel max. (90 %)",
 "pl.r.ctry": "Pays",
 "sh.btn": "Exporter",
 "sh.h": "Partager ou enregistrer votre résultat",
 "sh.sub": "Pour votre partenaire, votre conseiller ou pour plus tard.",
 "sh.link": "Copier le lien",
 "sh.linkS": "Le lien contient les chiffres saisis. Toute personne ayant le lien peut les voir.",
 "sh.print": "Imprimer ou enregistrer en PDF",
 "sh.printS": "Une page soignée avec votre résultat et le graphique.",
 "sh.copy": "Copier le résumé",
 "sh.copyS": "Un court texte pour un message ou un e-mail.",
 "sh.done": "Copié",
 "sh.fail": "La copie a échoué. Sélectionnez le texte et copiez-le vous-même.",
 "sh.empty": "Indiquez d’abord votre budget mensuel ; il y aura alors quelque chose à partager.",
 "sh.loaded": "Plan chargé depuis le lien.",
 "th.btn": "Thème", "th.auto": "Automatique", "th.light": "Clair", "th.dark": "Sombre",
 "calc": "Calcul en cours…",
 "nav.plan": "Plan",
 "nav.compare": "Comparer"
});

/* ===== v7: werk per partner, extra potten, overzicht en gesplitste knop ===== */
Object.assign(I18N.fr, {
 'adv.pZero': 'Vous n’avez besoin d’aucune épargne pour dépenser {b} par mois {r} : vos revenus suffisent dans 9 cas sur 10. Si vous placez de l’argent, la répartition {pf} convient le mieux.',
 'adv.p': 'Avec {c}, vous pouvez dépenser {b} par mois {r}. Dans 9 cas sur 10, l’argent tient jusque-là. Avec ce montant, la répartition {pf} convient le mieux.',
 'pot.sumOff': 'Ne compte pas : cette cagnotte appartient à votre partenaire et vous calculez maintenant pour une personne.',
 'wk.warnRev': 'Période {n} : « jusqu’à » n’est pas après « de », elle ne compte donc pas.', 'wk.warnOver': 'Attention : les périodes {i} et {j} se chevauchent de {a} à {b} ; les montants s’additionnent ces années-là.',
 'w.over': 'plus de {v}',
 'k.bufNone': 'Aucun capital de départ n’est nécessaire pour ce budget.', 'k.wrSave': 'Aucun retrait : il reste {m} par mois, ajoutés à votre patrimoine.', 'fan.wrSave': 'Reste par mois en année 1, ajouté au patrimoine',
 'f.wkAmt': 'Revenus du travail, nets par mois', 'h.wkAmt': 'Salaire ou bénéfice après impôt. Laissez vide si vous ne travaillez plus.',
 'f.wkEnd': 'Travaille jusqu’à l’âge de', 'h.wkEnd': 'Par défaut, l’âge de départ de votre {sp}. Vous arrêtez plus tôt ou plus tard ? Modifiez-le ici.',
 'wk.h': 'Travail', 'wk.per': 'Affiner par période', 'wk.one': 'Revenir à un seul montant', 'wk.from': 'De l’âge de', 'wk.to': 'Jusqu’à l’âge de', 'wk.amt': '{cur} net par mois',
 'wk.del': 'Supprimer la période', 'wk.add': '+ Ajouter une période', 'wk.perHint': 'Par exemple moins d’heures à partir de 60 ans. De 55 à 60 couvre les années où vous avez de 55 à 59 ans inclus.',
 'st2.s': 'Les prénoms rendent les graphiques et les textes plus personnels. Les revenus du travail comptent jusqu’à l’âge choisi. Tout est facultatif.',
 'tour.8.p': 'Envie de plus de précision ? Ajoutez retraites, revenus du travail, cagnottes supplémentaires et vos propres choix. La première fois en cinq étapes courtes, ensuite tout sur une seule page.',
 'w.work': 'Revenus du travail', 'w.pots': 'Cagnottes supplémentaires', 'w.lump': 'Ponctuel vers le patrimoine', 'v.wk': 'Avec revenus du travail', 'v.pots': 'Cagnottes supplémentaires : {n}',
 'pot.h': 'Retraite ou cagnotte supplémentaire', 'pot.s': 'Par exemple d’un autre pays ou un placement à part. Seulement si cela vous concerne.',
 'pot.intro': 'Ajoutez une cagnotte pour de l’argent disponible plus tard : en une fois ou en versement mensuel. Ne la comptez pas aussi dans votre patrimoine ci-dessus.',
 'pot.add': '+ Ajouter une cagnotte', 'pot.name': 'Nom de la cagnotte', 'pot.namePh': 'Par exemple cagnotte États-Unis', 'pot.nameN': 'Cagnotte {n}', 'pot.del': 'Supprimer la cagnotte',
 'pot.kind': 'Type de versement', 'pot.whose': 'À qui', 'pot.monthly': 'Par mois', 'pot.lump': 'En une fois',
 'pot.amtL': 'Montant avant impôt', 'pot.amtM': 'Par mois avant impôt', 'pot.when': 'Disponible à l’âge de', 'pot.from': 'À partir de l’âge de', 'pot.until': 'Jusqu’à l’âge de', 'pot.life': 'à vie',
 'pot.tax': 'Impôt que vous payez dessus', 'pot.taxHint': 'Cela dépend de votre lieu de résidence et du pays où la cagnotte a été constituée. Vérifiez-le vous-même, par exemple auprès de l’administration fiscale ou d’un conseiller. Nous utilisons le pourcentage que vous indiquez. Montants en argent d’aujourd’hui.',
 'pot.sumEmpty': 'Indiquez un montant pour inclure cette cagnotte.', 'pot.sumL': '{v} net en une fois à {a} ans. Cela rejoint votre patrimoine.', 'pot.sumM': '{v} net par mois à partir de {a} ans, {u}.', 'pot.sumU': 'jusqu’à {u} ans', 'pot.sumLife': 'à vie',
 'u.grossMonth': '{cur} brut par mois',
 'in.modeAria': 'Comment voulez-vous remplir ?', 'in.all': 'Tout sur une page', 'in.stepsMode': 'Étape par étape',
 'in.allH': 'Toutes vos données sur une seule page. Touchez une ligne pour y aller directement.', 'in.stepsH': 'Cinq étapes courtes. Pratique la première fois.',
 'ins.h': 'Ce que vous avez rempli', 'ins.sub': 'Touchez une ligne pour la modifier.', 'ins.ctry': 'Pays', 'ins.age': 'Âge', 'ins.bud': 'Budget mensuel', 'ins.cap': 'Patrimoine',
 'ins.wk': 'Revenus du travail', 'ins.pots': 'Cagnottes supplémentaires', 'ins.pf': 'Répartition', 'ins.tax': 'Impôt', 'ins.end': 'Calcul jusqu’à', 'ins.rest': 'Capital restant', 'ins.infl': 'Inflation et frais',
 'ins.periods': 'par période ({n})', 'ins.until': 'jusqu’à {a}', 'ins.from': 'dès {a}',
 'duo.aria': 'Avis ou remerciement', 'duo.tip': 'Donner un conseil', 'duo.tipS': 'Idée, erreur ou question', 'duo.cof': 'Offrir un café', 'duo.cofS': 'Pour remercier',
 'sup.after': 'Cela vous a aidé ? Un conseil ou un café est toujours le bienvenu.'
});

/* wat is er nieuw (per versie; nieuwste bovenaan) */
Object.assign(I18N.fr, {
 'nt.open': 'Ouvrir vos notes', 'nt.h': 'Notes', 'nt.sub': 'Questions pour vous-même, idées et points à vérifier. Pratique à côté de votre plan.', 'nt.ph': 'Par exemple : questions pour votre conseiller retraite, points à vérifier, ce qui vous frappe dans le résultat…', 'nt.q': '+ Question', 'nt.t': '+ Idée', 'nt.d': '+ À faire', 'nt.date': '+ Date', 'nt.qP': 'Question : ', 'nt.tP': 'Idée : ', 'nt.dP': 'À faire : ',
 'nt.saved': 'Enregistré dans ce navigateur', 'nt.typing': 'Enregistrement…', 'nt.noSave': 'Impossible d’enregistrer : votre navigateur bloque le stockage', 'nt.clear': 'Vider les notes', 'nt.sure': 'Effacer toutes les notes ? Impossible d’annuler.', 'nt.yes': 'Oui, vider', 'nt.no': 'Annuler', 'nt.priv': 'Vos notes restent dans ce navigateur, sur cet appareil. Elles ne sont ni partagées ni envoyées.', 'nt.add': 'Ajouter',
 'pro.tag': 'Pro', 'pro.tip': 'Fonction Pro, disponible temporairement', 'pro.toast': 'Ce sera plus tard une fonction Pro. Pour l’instant, vous pouvez l’utiliser librement.', 'rel.9.v': 'Version 9 · novembre 2026', 'rel.9.n1': 'Notes en bas à droite : notez vos questions, vos idées et ce qu’il reste à vérifier, sur chaque écran', 'rel.9.n2': 'Les fonctions marquées d’une horloge deviendront Pro plus tard. Pour l’instant, vous pouvez encore les utiliser.',
 'rel.8.v': 'Version 8 · novembre 2026', 'rel.8.n1': 'Nouveau titre : votre avenir financier, bouton après bouton', 'rel.8.n2': 'Les mises à jour manquées s’affichent désormais une seule fois, toutes ensemble', 'rel.since': 'Vous avez manqué {n} mises à jour.',
 'rel.7.v': 'Version 7 · novembre 2026', 'rel.h': 'Quoi de neuf ?', 'rel.newH': 'Nouveau', 'rel.fixH': 'Corrigé', 'rel.ok': 'Compris',
 'rel.7.n1': 'Revenus par personne, période par période', 'rel.7.n2': 'Cagnottes supplémentaires : en une fois ou par mois, avec votre propre taux d’impôt', 'rel.7.n3': 'Réglages fins sur une seule page',
 'rel.7.n4': 'Un seul bouton pour un conseil ou un café', 'rel.7.n5': 'Les scénarios enregistrés affichent toujours un résultat à jour', 'rel.7.n6': 'L’avis inclut un rapport complet de vos données',
 'rel.7.f1': 'La virgule décimale fonctionne (2,5 reste 2,5)', 'rel.7.f2': 'Le conseil est juste aussi sans besoin de capital', 'rel.7.f3': 'La langue ne change plus quand vous choisissez un pays',
 'rel.7.f4': 'Avertissement si des périodes se chevauchent ; plus de ∞ pour les montants extrêmes', 'rel.7.f5': 'S’adapte aux petits écrans de téléphone'
});

/* landingspagina per doel, vertrouwensregel, FAQ 7 */
Object.assign(I18N.fr, {
"faq.q7": "Pourquoi Button Counter plutôt qu’un simple calculateur ?",
"faq.a7": "<p>Un simple calculateur répond à un seul calcul, par exemple combien de temps dure une somme ou combien d’impôt vous payez sur votre épargne. Button Counter réunit tout dans un seul plan : votre épargne, votre retraite complémentaire et votre pension publique, le travail par période, une ou deux personnes et les règles de votre pays. Au lieu d’un seul chiffre, vous voyez la probabilité que votre argent suffise, sur la base de 4 000 simulations. Chaque chiffre indique s’il provient d’une source, s’il s’agit d’une hypothèse ou si vous l’avez saisi.</p>",
"trust.upd": "Mis à jour {date}",
"trust.src": "{n} sources"
});
Object.assign(I18N.fr, {
"lp.enough.h1": "Mon argent suffira-t-il quand j’arrêterai de travailler ?",
"lp.enough.intro": "Saisissez votre âge, votre épargne et votre budget mensuel. Vous voyez aussitôt la probabilité que votre argent dure jusqu’à l’âge que vous choisissez, retraites comprises.",
"lp.enough.title": "Mon argent suffira-t-il à la retraite ? | Button Counter",
"lp.enough.desc": "Calculez la probabilité que votre épargne dure jusqu’à l’âge que vous choisissez, avec la retraite publique, la retraite complémentaire, les impôts et l’inflation. Sans compte, vos données restent sur votre appareil.",
"lp.spend.h1": "Combien puis-je dépenser par mois quand j’arrêterai de travailler ?",
"lp.spend.intro": "Saisissez votre épargne et vos retraites. Button Counter montre le montant mensuel que vous pouvez dépenser avec de bonnes chances que votre argent dure jusqu’à l’âge que vous choisissez.",
"lp.spend.title": "Combien puis-je dépenser par mois à la retraite ? | Button Counter",
"lp.spend.desc": "Voyez quel budget mensuel votre épargne et vos retraites peuvent supporter, et la probabilité que cela suffise. Sans compte.",
"lp.earlier.h1": "Puis-je arrêter de travailler plus tôt ?",
"lp.earlier.intro": "Essayez un autre âge de départ ou moins de travail et voyez aussitôt l’effet sur la probabilité que votre argent suffise. Vous pouvez aussi comparer deux plans côte à côte.",
"lp.earlier.title": "Partir plus tôt à la retraite ? Faites le calcul | Button Counter",
"lp.earlier.desc": "Calculez ce qu’un départ anticipé ou moins de travail change pour votre épargne et vos retraites, avec les règles de votre pays. Sans compte.",
"lp.abroad.h1": "Que vaut mon argent dans un autre pays ?",
"lp.abroad.intro": "Comparez ce que vaut votre budget mensuel dans 31 pays européens, d’après les niveaux de prix d’Eurostat. Button Counter connaît aussi les règles de retraite et d’impôt de dix pays.",
"lp.abroad.title": "Retraite à l’étranger : que vaut votre argent là-bas ? | Button Counter",
"lp.abroad.desc": "Comparez le pouvoir d’achat de votre budget mensuel dans 31 pays européens et testez votre plan avec les règles de dix pays. Sans compte."
});
Object.assign(I18N.fr, {
 "age.q": "Quel âge avez-vous, à peu près ?",
 "age.aria": "Votre âge",
 "age.note": "Une tranche d’âge suffit. Vous pourrez indiquer votre âge exact plus tard, si vous le souhaitez.",
 "goalY.2.t": "Aurai-je assez pour ma retraite ?",
 "goalY.2.s": "Mettez votre épargne à côté de votre retraite et voyez si cela suffira.",
 "goalY.3.t": "Que change un peu plus d’épargne ?",
 "goalY.3.s": "Modifiez ce que vous mettez de côté et voyez tout de suite la différence.",
 "goalY.4.t": "Épargner ou investir : quelle différence ?",
 "goalY.4.s": "Comparez trois façons d’investir sur une longue durée.",
 "q.inleg": "Combien mettez-vous de côté par mois ?",
 "f.budgetOpb": "Combien voulez-vous dépenser par mois plus tard ?",
 "opb.k": "Autour de la retraite, à {a}",
 "opb.empty": "Indiquez ce que vous mettez de côté chaque mois pour voir ce que cela devient.",
 "opb.fill": "Saisir le montant",
 "opb.late": "Votre âge de retraite est atteint ou proche. Voyez dans le reste de l’aperçu si votre patrimoine suffit.",
 "opb.range": "Dans 8 cas sur 10, entre {lo} et {hi}.",
 "opb.split": "Sur ce total, {put} viennent de votre poche : {inl} par mois pendant {y} ans, plus ce que vous avez déjà. Le reste est du rendement.",
 "opb.note": "Le milieu de {n} scénarios simulés, en argent d’aujourd’hui, après frais et impôts. Une illustration, pas une promesse.",
 "opb.edit": "Modifier le montant",
 "goalY.5.t": "Vais-je vraiment m’enrichir en épargnant et en investissant ?",
 "goalY.5.s": "Ce que rapporte vraiment un montant fixe par mois, même en cas de baisse.",
 "goalY.6.t": "Quand serai-je financièrement libre (FIRE) ?",
 "goalY.6.s": "Voyez à partir de quel âge votre patrimoine suffit pour vivre.",
 "opb.mixh": "Le même montant, trois façons d’investir",
 "opb.mixrow": "{n} : {mid} (entre {lo} et {hi})",
 "opb.fireH": "Financièrement libre (FIRE)",
 "opb.fire": "Avec {b} par mois, il vous faut environ {t} (25 fois vos dépenses annuelles, une règle empirique). Vous y arrivez :",
 "opb.fireNo": "Avec {b} par mois, il vous faut environ {t} (25 fois vos dépenses annuelles, une règle empirique). Avec ce montant, vous n’y arrivez pas avant la retraite, même si tout va bien. Épargner plus ou viser un budget plus bas aide.",
 "opb.fireAsk": "Indiquez ce que vous voulez dépenser par mois plus tard pour voir quand vous pourriez être financièrement libre.",
 "opb.at": "à {n} ans",
 "opb.never": "pas avant votre retraite",
 "opb.fireL": "Si tout va bien",
 "opb.fireM": "Dans le cas moyen",
 "opb.fireB": "Si cela tourne mal",
 "lvl.q": "Comment voulez-vous vivre plus tard ?",
 "lvl.pm": "{a} par mois",
 "lvl.1.n": "Sobre",
 "lvl.2.n": "Moyen",
 "lvl.3.n": "Confortable",
 "lvl.1.e": "Petit logement loué, cuisine maison, vélo et transports en commun, quelques sorties.",
 "lvl.2.e": "Logement ordinaire, restaurant régulièrement, voiture ou bons transports, des vacances par an.",
 "lvl.3.e": "Grand logement, sorties fréquentes, voiture, plusieurs voyages par an.",
 "lvl.hint": "Montants indicatifs en argent d’aujourd’hui, fondés sur le minimum néerlandais du Nibud (2025) et les dépenses CBS selon le revenu, converties en 2025. Pour deux personnes, nous comptons 1,4 fois, car vous partagez le logement. Pour les autres pays de la zone euro, nous ajustons selon les niveaux de prix. Moyennes, pas un conseil. Vous pouvez modifier le montant ci-dessous.",
 "src.nibudmin": "Nibud, budgets minimaux juillet 2025",
 "src.cbsb": "CBS, dépenses des ménages",
 "lvl.hintX": "En dehors des Pays-Bas, c’est une indication : les montants sont néerlandais et convertis avec les niveaux de prix, et non fondés sur les habitudes de dépenses de votre pays."
});

/* uitgavenverloop (versie 11) */
Object.assign(I18N.fr, {
 'f.curve': 'Comment évoluent les dépenses plus tard ?',
 'curve.lbl': 'Trajectoire des dépenses',
 'curve.o0': 'Constantes',
 'curve.o1': 'Typique',
 'curve.o2': 'En forte baisse',
 'curve.h0': 'Constantes : les dépenses restent les mêmes chaque année, en argent d’aujourd’hui. C’est le choix le plus prudent.',
 'curve.h1': 'Typique : dès {a} ans, vous dépensez environ 1 % de moins chaque année. À {b} ans, cela fait environ {x} de moins qu’à {a} ans.',
 'curve.h2': 'En forte baisse : dès {a} ans, vous dépensez environ 2 % de moins chaque année. À {b} ans, cela fait environ {x} de moins qu’à {a} ans.',
 'curve.two': 'À deux, c’est l’âge de la personne la plus âgée qui compte.',
 'curve.note': 'Il s’agit d’argent d’aujourd’hui : les montants suivent donc encore l’inflation. Ce sont des moyennes issues d’études, notamment aux Pays-Bas, au Royaume-Uni et aux États-Unis. Ce n’est ni une prévision pour votre foyer ni un conseil. Garder des dépenses constantes reste le choix le plus prudent. Sources : <a href="https://www.pwc.nl/nl/assets/documents/bestedingen-van-ouderen-nibud-pwc.pdf" target="_blank" rel="noopener">Nibud/PwC</a>, <a href="https://www.financialplanningassociation.org/journal/Pages/MAY14-Exploring-the-Retirement-Consumption-Puzzle-.aspx" target="_blank" rel="noopener">Blanchett</a>, <a href="https://ifs.org.uk/sites/default/files/2022-09/IFS-Report-R209-How-does-spending-change-through-retirement.pdf" target="_blank" rel="noopener">IFS</a>.',
 'src.nibud': 'Nibud/PwC, dépenses des seniors',
 'src.blanchett': 'Blanchett, dépenses à la retraite',
 'src.ifs': 'IFS, dépenses pendant la retraite',
 'rel.11.v': 'Version 11 · novembre 2026',
 'rel.11.n1': 'Trajectoire des dépenses : choisissez si vos dépenses restent constantes ou baissent après 65 ans'
});

/* uitgavenverloop met prijskaartje (versie 12) */
Object.assign(I18N.fr, {
 'zk.cap': 'Sous chaque choix : le patrimoine nécessaire, avec 90 % de chances que ce soit assez.',
 'zk.dChosen': '{o} réduit de {d} le patrimoine nécessaire par rapport à « {f} ».',
 'zk.dAlt': 'Si vous choisissez « {o} », il vous faut {d} de moins.',
 'zk.same': 'Avec ces chiffres, la trajectoire des dépenses ne change presque rien.',
 'rel.12.v': 'Version 12 · novembre 2026',
 'rel.12.n1': 'Trajectoire des dépenses avec son prix : voyez sous chaque choix le patrimoine nécessaire'
});
Object.assign(I18N.fr, {
 'tip.btn': "Partager",
 'tip.msg': "Salut ! J’ai trouvé cette appli pratique : Button Counter. En quelques minutes, tu vois plus clair dans ton avenir financier : combien il te faut et ce que tu peux faire toi-même. Gratuit, sans compte, et tes chiffres restent sur ton téléphone. Ça peut peut-être t’aider aussi :",
 'tip.copied': "Message avec lien copié. Collez-le dans WhatsApp ou un e-mail.",
 'tip.url': "https://countingbuttons.com/",
 'rel.14.n2': "Bouton Partager en haut : recommandez l’appli avec un court message",
 'curve.intro': "Les études montrent qu’on dépense différemment selon les étapes de la vie. C’est pourquoi vous choisissez ici comment vos dépenses évoluent plus tard.",
 'wk.perTip': 'Vos revenus ne resteront pas les mêmes jusqu’à la fin ? Indiquez un montant différent selon l’âge, par exemple moins d’heures à partir de 60 ans.',
 'pro.tip': 'Fonction Pro, bientôt disponible',
 'rel.14.v': 'Version 14 · novembre 2026',
 'rel.14.n1': 'Les fonctions Pro ont maintenant un cadenas. La version de base reste gratuite. Touchez un cadenas pour aider à choisir ce qui entrera dans Pro.'
});

/* schuld: hypotheek of lening met maandlast en aflooptijd (versie 15) */
Object.assign(I18N.fr, {
 'debt.h': 'Dette',
 'debt.s': 'Prêt immobilier ou crédit : mensualité, durée et partie in fine',
 'debt.intro': 'Vous remboursez encore un prêt immobilier ou un crédit ? Indiquez ce que vous payez par mois, combien de temps cela dure encore et s’il y a une partie in fine (sans remboursement du capital pendant la durée). Pas besoin du taux : il est déjà dans votre mensualité. La mensualité reste la même en euros, donc en argent d’aujourd’hui elle pèse un peu moins chaque année.',
 'debt.opb': 'Tant que vous épargnez, vous la payez avec vos revenus. Le calcul la compte à partir de l’âge de la retraite.',
 'debt.add': 'Ajouter une dette', 'debt.del': 'Supprimer cette dette', 'debt.name': 'Nom de la dette', 'debt.namePh': 'Nom, par exemple Prêt immobilier', 'debt.nameN': 'Dette {n}',
 'debt.pm': 'Mensualité', 'debt.yrs': 'Durée restante', 'debt.bal': 'Montant in fine (facultatif)', 'debt.unitM': '{cur} par mois',
 'debt.balHint': 'In fine signifie que cette partie n’est pas remboursée pendant la durée du prêt : la dette reste donc due à la fin. Le calcul compte ce montant comme un seul paiement prélevé sur votre patrimoine. Vous le paierez avec la vente de votre logement ? Laissez alors le champ vide.',
 'debt.in': 'Cette mensualité est-elle déjà dans votre budget mensuel ?', 'debt.inY': 'Oui', 'debt.inN': 'Non, en plus',
 'debt.inHint': 'Si oui, votre budget baisse de cette mensualité dès que la dette est remboursée. Si non, la mensualité s’ajoute à votre budget jusque-là.',
 'debt.sumEmpty': 'Indiquez la mensualité et la durée restante pour voir le résultat.',
 'debt.sum': 'Vous payez {m} par mois, encore {t} (jusqu’en {yr}).',
 'debt.sumBal': 'À la fin, vous payez en plus {v} en une fois.',
 'debt.sumOnlyBal': 'Dans {t} (en {yr}), vous payez {v} en une fois.',
 'debt.sumAge': 'Vous aurez alors {a} ans.', 'debt.sumFree': 'Ensuite, il vous faut {m} de moins par mois.',
 'debt.m': '{m} mois', 'debt.shareLine': '{n} : {m} par mois, encore {t}', 'debt.shareBal': ', plus {v} en une fois à la fin', 'debt.shareOnly': '{n} : {v} en une fois dans {t}',
 'ins.debt': 'Dette',
 'rel.15.v': 'Version 15 · novembre 2026',
 'rel.15.n1': 'Dette : comptez votre prêt immobilier ou crédit, avec mensualité, durée et une éventuelle partie in fine. Une fonction Pro : touchez le cadenas et dites si vous la voulez.',
 'rel.16.v': 'Version 16 · novembre 2026',
 'rel.16.n1': 'De nouvelles photos dans toute l’application : en haut de chaque onglet, avec votre résultat et dans les étapes.',
 'rel.16.n2': 'Au début, vous choisissez une tranche d’âge au lieu de votre âge exact.',
 'rel.16.n3': 'Le bloc-notes a maintenant sa propre petite image.',
 'rel.17.v': 'Version 17 · novembre 2026',
 'rel.17.n1': 'L’introduction est plus claire : découpée en parties distinctes, avec un nouveau texte qui explique mieux ce que fait Button Counter.',
 'rel.17.n2': 'Dans l’introduction, vous choisissez désormais toujours une question. Il n’est plus possible de passer.',
 'rel.18.v': 'Version 18 · novembre 2026',
 'rel.18.n1': 'Donner une astuce se fait désormais en une étape : vous cliquez sur Envoyer et c’est terminé, sans écran supplémentaire.',
 'rel.18.n2': 'Si vous choisissez « Je ne sais pas encore », le bouton indique désormais ce qui suit : une courte visite guidée.',
 'rel.19.v': 'Version 19 · novembre 2026',
 'rel.19.n1': 'La page « À propos » raconte désormais comment Button Counter est né, dans une mise en page plus aérée.'
});

/* veelgestelde vraag uitgavenverloop en tip bij de naamvelden (versie 13) */
Object.assign(I18N.fr, {
 'faq.q8': 'Mes dépenses restent-elles constantes dans le calcul, ou baissent-elles ?',
 'faq.a8': "<p>Vous le choisissez sous « Comment évoluent les dépenses plus tard ? ». Avec « Constantes », vos dépenses restent les mêmes chaque année, en argent d’aujourd’hui. C’est le choix le plus prudent, et il est gratuit. Des études dans plusieurs pays montrent qu’on dépense différemment selon les étapes de la vie. Avec Pro, vous pouvez calculer avec une telle évolution. Sous chaque choix, vous voyez le patrimoine nécessaire, et donc ce que le choix change. Ce sont des moyennes : vos propres dépenses peuvent évoluer autrement.</p>",
 'h.names1': 'Un nom inventé convient aussi, par exemple « Jean Dupont ». Les noms restent sur cet appareil : ils ne sont ni envoyés, ni mesurés, ni inclus dans un lien partagé.',
 'h.names2': 'Ici aussi, un nom inventé convient, par exemple « Marie Dupont ».'
});

/* studieschuld, leeftijdsgroepen en nieuwe wielvragen (versie 20) */
Object.assign(I18N.fr, {
 "sl.h": "Prêt étudiant",
 "sl.s": "Solde, mensualité et fin du remboursement",
 "sl.intro": "Vous avez un prêt étudiant ? Indiquez ce qui reste à rembourser, votre mensualité et jusqu’à quand vous remboursez. Vous voyez alors quand vous serez libéré de cette dette. Cette carte ne compte pas dans votre résultat.",
 "sl.r": "Reste à rembourser",
 "sl.m": "Mensualité",
 "sl.e": "Fin du remboursement (année)",
 "sl.ePh": "vide = jusqu’au solde",
 "sl.i": "Taux d’intérêt annuel",
 "sl.iHint": "{InCountry}, nous indiquons {p}. Ce n’est pas le taux de votre prêt ? Modifiez-le ; votre taux figure chez {src}.",
 "sl.iHintEst": "{InCountry}, {p} est une estimation. Remplacez-le par le taux de votre prêt.",
 "sl.iReset": "Revenir à {p}",
 "sl.empty": "Indiquez le solde et la mensualité pour voir quand vous serez libéré de la dette.",
 "sl.notYet": "Vous ne remboursez pas encore. Indiquez la mensualité dès que le remboursement commence.",
 "sl.free": "Libéré de la dette en {yr}, dans environ {n} ans. Ensuite, {m} par mois se libèrent.",
 "sl.free1": "Libéré de la dette d’ici un an ({yr}). Ensuite, {m} par mois se libèrent.",
 "sl.open": "À la fin du remboursement ({yr}), il reste {v} à payer.",
 "sl.never": "Avec cette mensualité, le prêt ne diminue pas : les intérêts dépassent le remboursement.",
 "sl.slow": "À ce rythme, le remboursement prend plus de 60 ans.",
 "sl.fg.NL": "Ce qui reste est alors annulé automatiquement par DUO, sauf les mensualités impayées.",
 "sl.fg.GB": "Au Royaume-Uni, ce qui reste est alors annulé.",
 "sl.fg.DE": "Avec le BAföG, vous ne remboursez jamais plus de 10 010 €.",
 "sl.big": "C’est plus qu’un prêt étudiant habituel. Le montant est-il juste ?",
 "sl.bigPro": "S’agit-il d’un prêt immobilier ou d’un autre crédit ? Utilisez alors la carte {debt} (Pro).",
 "sl.past": "Choisissez une année postérieure à celle-ci.",
 "sl.long": "Un remboursement dure rarement plus de 45 ans. L’année est-elle juste ?",
 "sl.proQ": "Rembourser ou investir ?",
 "sl.proS": "Comparer deux plans",
 "tz.plans.0": "Rembourser ou investir ?",
 "tz.plans.1": "Épargner plus maintenant ou plus tard ?",
 "tz.plans.2": "Arrêter plus tôt ou continuer à travailler ?",
 "tz.pp.0": "Étudier, travailler ou vivre à l’étranger ?",
 "tz.pp.1": "Partir à l’étranger en famille ?",
 "tz.pp.2": "Où votre argent dure-t-il le plus longtemps ?",
 "goalY.7.t": "Quand serai-je libéré de mes dettes ?",
 "goalY.7.s": "Voyez quand votre prêt étudiant sera remboursé et ce qui se libère ensuite chaque mois.",
 "goalY.8.t": "Étudier, travailler ou vivre à l’étranger ?",
 "goalY.8.s": "Comparez ce que vaut la même somme dans d’autres pays.",
 "goalY.9.t": "Partir à l’étranger en famille ?",
 "goalY.9.s": "Comparez ce que vaut la même somme dans d’autres pays.",
 "rel.20.v": "Version 20 · novembre 2026",
 "rel.20.n1": "Nouveau : la carte Prêt étudiant. Indiquez le solde, la mensualité et la fin du remboursement, et voyez quand vous serez libéré de la dette. Elle fonctionne dans chaque pays, avec un taux que vous pouvez modifier.",
 "rel.20.n2": "Avant 35 ans, l’application est plus simple : sans prêt immobilier, cagnotte supplémentaire ni évolution des dépenses. Plus tard, ils apparaissent et vos saisies restent.",
 "rel.20.n3": "Nouvelles questions dans la roue de départ, comme « Quand serai-je libéré de mes dettes ? » et « Partir à l’étranger en famille ? ».",
  "rel.20.n4": "L’introduction parle maintenant de votre avenir financier, avec plus d’exemples, comme rembourser un peu plus ou travailler un peu moins."
});

/* pensioen als uitklapvak (versie 20) */
Object.assign(I18N.fr, {"f.penOn": "Je cotise à une {pen} et je connais son montant", "f.penOn_2": "Cotise à une {pen} et en connaît le montant", "f.penHint": "Vous ne savez pas encore ? Laissez la case décochée et complétez plus tard.", "f.penPh": "net par mois", "rel.20.n5": "La retraite de base et la retraite se déplient maintenant. Avant 35 ans, la retraite est désactivée par défaut tant que vous n’en connaissez pas le montant."});

/* woorden voor alle leeftijden, belasting dichtgeklapt, oproep bij de uitkomst (versie 20) */
Object.assign(I18N.fr, {"f.eindleeftijd": "Âge auquel votre argent peut être épuisé", "f.restkapitaal": "Ce qui doit rester à cet âge", "ins.rest": "Reste à la fin", "opb.cta": "Je veux changer ça", "rel.20.n6": "L’impôt sur le patrimoine est maintenant replié, et le résultat a un bouton clair pour le changer."});

/* overige schulden (versie 20) */
Object.assign(I18N.fr, {"oth.h": "Autres dettes", "oth.s": "Prêt, paiement échelonné ou paiement différé, jusqu’à 50 000", "oth.intro": "Vous remboursez un autre prêt, comme un prêt personnel, une voiture, un paiement échelonné ou un paiement différé ? Indiquez ce qui reste dû, votre mensualité et jusqu’à quand. Jusqu’à 50 000. Cette carte ne compte pas dans votre résultat.", "oth.r": "Reste dû", "oth.e": "Dernière année de remboursement", "oth.iHint": "Nous calculons sans intérêts, sauf si vous les indiquez ici. Le taux figure dans votre contrat de prêt.", "oth.cap": "Cette carte va jusqu’à {max}. Pour un prêt plus important ou un prêt immobilier, utilisez la carte {debt} (Pro).", "oth.cap0": "Cette carte va jusqu’à {max}.", "rel.20.n7": "Nouvelle carte Autres dettes, pour les prêts et paiements échelonnés jusqu’à 50 000."});

/* uitkomstblok opbouw: wat als (na versie 20) */
Object.assign(I18N.fr, {"opb.k2": "À {a}, vous aurez probablement", "opb.own": "Vos versements", "opb.ret": "Rendement", "opb.split2": "{put} de votre poche, le reste est du rendement.", "opb.more": "Quelle certitude ?", "opb.mixh2": "Comment investissez-vous ?", "opb.fireYes": "<b>Libre financièrement à {n} ans.</b> Vous aurez alors {t} : de quoi vivre avec {b} par mois sans travailler.", "opb.fireNot": "<b>La liberté financière n’est pas encore à portée.</b> Il vous faut {t}. Mais vous avez {y} ans devant vous, et c’est maintenant que chaque petit pas compte le plus. Essayez ci-dessous ce qui est possible.", "opb.wiH": "Et si…", "opb.wiSave": "+ {v} par mois de côté", "opb.wiEarn": "Je gagne {v} de plus (moitié épargnée)", "opb.wiDebt": "Prêt étudiant remboursé", "opb.wiDebts": "Mes dettes sont remboursées", "opb.wiTwo": "À deux", "opb.wiDelta": "+ {v} de plus grâce à vos choix. Vos saisies restent inchangées.", "opb.moreBtn": "Plus d’options"});

/* haalbaar maandbudget voorop (na versie 20) */
Object.assign(I18N.fr, {"opb.budK": "Dès {a}, vous pouvez dépenser par mois, jusqu’à {e}", "opb.pm": "par mois", "opb.wantOk": "Vous atteignez ainsi les {w} par mois souhaités.", "opb.wantShort": "Vous voulez {w}. Il manque encore {d} par mois.", "opb.endLine": "À {a}, vous aurez probablement {v}, dont {put} de votre poche.", "opb.budWhy": "Ce budget mensuel tient dans 9 cas sur 10 jusqu’à {e}, avec votre retraite de base et votre retraite.", "opb.wiDeltaB": "+ {v} par mois grâce à vos choix. Vos saisies restent inchangées.", "ov.k.ok": "Atteignable : {v}"});

/* speel met je cijfers en balk op Invullen (na versie 20) */
Object.assign(I18N.fr, {"opb.stH": "Jouez avec vos chiffres", "opb.stSave": "Épargné par mois", "opb.stBud": "Vous voulez dépenser", "opb.stStop": "Arrêter de travailler à", "opb.less": "Moins", "opb.moreS": "Plus", "opb.wantShort2": "À deux, il vous faut environ {w} par mois. Il manque encore {d} par mois.", "opb.wiDeltaM": "− {v} par mois avec vos choix. Vos saisies restent inchangées.", "mini.bud": "Atteignable :", "mini.want": "vous voulez {w}", "mini.chance": "de chances"});

/* knop zonder schuld */
Object.assign(I18N.fr, {"opb.wiNoDebt": "Sans dette"});

/* sparen per periode (na versie 20) */
Object.assign(I18N.fr, {"inl.h": "Épargner plus (ou moins) plus tard ?", "inl.from": "À partir de", "inl.add": "+ Ajouter une étape", "inl.del": "Supprimer l’étape", "inl.hint": "Vous allez gagner plus ? Épargnez alors davantage à partir de cet âge. Jusqu’à la première étape, le montant ci-dessus s’applique."});

/* pro-tekst sparen per periode */
Object.assign(I18N.fr, {"inl.proWhy": "Épargnez plus ou moins à partir d’un certain âge, par exemple quand vous gagnez davantage."});

/* leeftijdsgrens per groep (na versie 20) */
Object.assign(I18N.fr, {"age.cap": "Vous avez choisi le groupe {g}, vous pouvez donc indiquer au plus {m}.", "age.capGo": "Plus âgé ? Choisissez un autre groupe d’âge"});

/* versie 21 */
Object.assign(I18N.fr, {"rel.21.v": "Version 21 · novembre 2026", "rel.21.n1": "Le résultat commence maintenant par ce que vous pouvez dépenser par mois, à côté du montant souhaité et des niveaux Sobre, Moyen et Confortable.", "rel.21.n2": "Jouez avec vos chiffres sur l’aperçu : boutons plus et moins, et boutons « Et si… » comme « Sans dette » et « À deux ».", "rel.21.n3": "Avant 35 ans, vous pouvez épargner plus (ou moins) à partir d’un âge choisi, par exemple quand vous gagnez davantage.", "rel.21.n4": "Pendant la saisie, une barre en haut montre ce qui est atteignable à ce moment-là.", "rel.21.n5": "La page de saisie est plus calme sur grand écran, et l’âge saisi correspond maintenant au groupe d’âge choisi."});
Object.assign(I18N.fr, {"pf.sav": "Épargne", "opb.endLineLow": "À {a}, vous aurez probablement {v}. C’est moins que les {put} de votre poche : impôts et inflation pèsent plus que le rendement de cette répartition. Tout est en argent d’aujourd’hui.", "opb.inc": "Compte aussi à partir de votre âge d’arrêt : {list}.", "opb.incSp": "retraite de base {v} par mois", "opb.incPen": "retraite {v} par mois", "opb.incWk": "revenus d’appoint", "opb.life": "{en} est votre espérance de vie moyenne. Une personne sur deux vit plus longtemps ; vous pouvez relever l’âge de fin sous « Saisir ».", "opb.mixWhy": "Prudent peut rapporter plus que dynamique ici : le budget doit tenir dans 9 cas sur 10, et les fortes variations augmentent justement le risque d’un mauvais cas.", "opb.mixWhyB3": "La box 3 pèse en outre davantage sur l’investissement que sur l’épargne.", "rel.22.v": "Version 22 · novembre 2026", "rel.22.n1": "Une quatrième tuile à côté des répartitions : épargner sans investir, pour voir la différence par vous-même.", "rel.22.n2": "Le résultat indique maintenant ce qui compte, comme votre retraite de base et votre retraite, et explique quand une répartition prudente dépasse une dynamique.", "rel.22.n3": "Texte plus clair quand le montant attendu est inférieur à votre propre apport, et une note indiquant que l’âge de fin est votre espérance de vie moyenne."});
Object.assign(I18N.fr, {"opb.lbl": "Budget mensuel atteignable", "opb.span": "Ce que vous pouvez dépenser chaque mois de {a} jusqu’à {e}, en argent d’aujourd’hui."});
Object.assign(I18N.fr, {"opb.fireInfo": "Votre souhait est atteignable ici. Être financièrement libre est plus exigeant : vivre uniquement de votre patrimoine, sans retraites, sans l’épuiser. Il faut pour cela environ {t}."});

/* samen opzij leggen en bijverdienen (versie 21) */
Object.assign(I18N.fr, {"q.inleg_2": "Combien mettez-vous de côté ensemble par mois ?", "f.inlegP": "Met de côté par mois", "h.inlegSplit": "Ensemble, c’est le montant de l’étape 1. La répartition ne change pas le résultat.", "wk.hBij": "Revenu d’appoint après l’arrêt", "f.bijAmt": "Revenu d’appoint, net par mois", "h.bijAmt": "Compte à partir de votre âge d’arrêt. L’app ne demande jamais votre salaire actuel : ce qui compte, c’est ce que vous mettez de côté.", "f.bijEnd": "Revenu d’appoint jusqu’à l’âge de", "h.bijEnd": "De votre âge d’arrêt ({a}) jusqu’à cet âge. Égal à l’âge d’arrêt : pas de revenu d’appoint.", "rel.21.n6": "Mettre de côté porte maintenant le même nom partout : le total à l’étape 1, réparti par personne à l’étape 2. Dans la phase d’épargne, « Travail » s’appelle désormais honnêtement « Revenu d’appoint après l’arrêt »."});

/* ladder: koprij en voluit geschreven bedragen (versie 21) */
Object.assign(I18N.fr, {"ld.colBud": "Budget par mois", "ld.colNeed": "Patrimoine nécessaire pour cela", "ld.none": "rien à prévoir"});

/* poppetjes op je gewenste budget */
Object.assign(I18N.fr, {"opb.wantMark": "C’est vous : le budget souhaité"});

/* v23-i18n */
Object.assign(I18N.fr, {"opb.incSp": "{n} {v} par mois", "wk1.hint": "Laissez vide si vous avez déjà arrêté. Ainsi, le calcul ne suppose pas que vous arrêtez de travailler aujourd’hui.", "k.bufNone": "Aucune épargne de départ n’est nécessaire pour ce budget.", "k.need": "Épargne nécessaire au départ", "opb.tWish": "chance d’atteindre votre souhait : {p}", "pf.need": "Épargne nécessaire, parcours moyen", "flow.sal": "Vos revenus du travail (jusqu’à l’arrêt)", "opb.tLegend": "Le montant est atteint dans 9 cas sur 10. La chance montre à quelle fréquence vous atteignez le montant souhaité.", "wk1.q": "Vous travaillez encore ? Combien gagnez-vous net par mois ?", "wk1.till": "Jusqu’à quel âge travaillerez-vous ?", "ld.cap": "Ce que vous avez", "opb.tLegend0": "Le montant est atteint dans 9 cas sur 10.", "f.startkapitaal": "Ce que vous avez aujourd’hui", "k.need90": "Épargne nécessaire au départ (90 % de chances)", "opb.tSure": "par mois, 9 fois sur 10"});
Object.assign(I18N.fr, {"pf.endMid": "Reste à la fin, milieu", "pf.endBad": "Reste à la fin, 1 malchance sur 20"});
Object.assign(I18N.fr, {"k.wrLater": "de votre patrimoine par an, {m} par mois. Cela baisse dès que votre retraite commence.", "k.taxCaut": "hypothèse prudente", "intro.country": "Pays", "intro.lang": "Quelle langue préférez-vous ?"});
Object.assign(I18N.fr, {"age.need": "Choisissez d’abord votre tranche d’âge.", "home.quickTog": "Modifier", "home.quickHide": "Replier", "opb.debtFree": "Votre dette sera remboursée en <b>{y}</b>.", "opb.debtAsk": "Indiquez ce que vous remboursez chaque mois, et vous verrez ici quand vous serez sans dette.", "opb.debtSlow": "Avec ce montant mensuel, votre dette ne diminue pas. Essayez un montant plus élevé sous « Saisir ».", "opb.to90": "Si vous vivez jusqu’à {n} ans : {v} par mois sont atteignables."});
Object.assign(I18N.fr, {"wi.penLow": "Retraite 20 % plus basse", "wi.crash": "La bourse chute de 30 %", "wi.gift": "{v} en plus, une fois", "wi.budLess": "{v} de moins par mois", "wi.work1": "Travailler 1 an de plus", "wi.res": "La chance passe alors à {p} (aujourd’hui {q}). Vos saisies restent inchangées."});
Object.assign(I18N.fr, {"rel.23.v": "Version 23 · novembre 2026", "rel.23.n1": "Chaque tuile de placement montre maintenant deux choses : le montant atteint 9 fois sur 10, et la chance d’atteindre le montant souhaité.", "rel.23.n2": "Un chiffre par notion : les chiffres clés correspondent maintenant à la carte de résultat et au conseil, et le graphique des revenus est juste pour ceux qui épargnent encore.", "rel.23.n3": "Un accueil plus court : d’abord votre tranche d’âge et votre question, et le premier écran dans votre langue.", "rel.23.n4": "Nouveau dans le résultat : l’année où votre dette est remboursée, ce qui est atteignable si vous vivez jusqu’à 90 ans, et des boutons « Et si… » dès 35 ans et pour les 50 ans et plus. L’étape 1 demande maintenant si vous travaillez encore.", "rel.23.n5": "Un aperçu plus court, des zones tactiles plus grandes, le bloc-notes dans la barre d’onglets sur téléphone, un lien de partage complet et plus privé, et plus rapide sur les téléphones lents."});
Object.assign(I18N.fr, {"tc.h": "Vous connaissez quelqu’un que cela intéresserait ?", "tc.s": "Vous partagez seulement l’appli. Vos chiffres restent chez vous.", "tc.btn": "Partager l’appli", "tc.x": "Ne plus afficher", "rel.23.n6": "Vous connaissez quelqu’un que cela intéresserait ? Sous votre résultat, vous pouvez maintenant partager l’appli d’un geste. Vos chiffres restent chez vous."});
Object.assign(I18N.fr, {"flow.sal": "Années de travail : vous vivez de votre salaire", "flow.salNote": "En gris : jusqu’à {a}, nous supposons que vous travaillez et vivez de votre salaire. Inutile de saisir ce salaire ; votre patrimoine reste intact et continue de croître. Vous voulez vivre de votre patrimoine plus tôt ? Baissez « {l} » sur la carte de résultat."});

/* uitleg achter een ⓘ en derde keuze bij man/vrouw (versie 23) */
Object.assign(I18N.fr, {"rel.23.n7": "Des explications derrière un ⓘ : vous lisez le contexte d’une question quand vous le souhaitez, et la saisie est plus claire. En plus de homme ou femme, vous pouvez choisir « Autre » ; nous utilisons alors l’espérance de vie moyenne.", "ib.more": "Plus d’infos", "sex.none": "Autre", "h.penShort": "Net par mois, sans la {sp}.", "sex.info": "Votre choix détermine seulement l’espérance de vie utilisée dans le calcul. En moyenne, les femmes vivent quelques années de plus que les hommes, et plus vous vivez longtemps, plus votre argent doit durer. Choisissez ce qui vous correspond. Avec « Autre », nous prenons la moyenne des deux. Plus loin, vous pouvez aussi fixer vous-même l’âge de fin."});
/* overzicht in vijf delen en je vraag aan het eind van Invullen (versie 24) */ Object.assign(I18N.fr, {"ch.2": "Ce que vous pouvez faire", "ch.3": "Comment ça évolue", "ch.4": "Tous les chiffres", "ch.5": "Plus", "ch.s2": "Des réglages à essayer", "ch.s3": "Votre patrimoine et vos revenus année par année", "ch.s4": "Les chiffres en un coup d’œil", "ch.s5": "Aller plus loin et partager", "sum.two": "{a} et {b} ans", "sum.one": "{a} ans", "sum.cap": "{c} de patrimoine", "sum.bud": "{b} par mois", "goal.subEnd": "Votre réponse tient compte de tout ce que vous avez saisi ci-dessus.", "rel.24.v": "Version 24 · novembre 2026", "rel.24.n1": "Un aperçu plus clair en cinq parties : Résultat, Ce que vous pouvez faire, Comment ça évolue, Tous les chiffres et Plus. Chaque partie a son propre bouton et sa couleur, et les chiffres ne sont plus répétés.", "rel.24.n2": "Dans la saisie, votre question et le bouton vers votre réponse se trouvent maintenant à la fin, après l’étape 5, au lieu d’être au-dessus de chaque étape."});
/* feedback Fleur: stopleeftijd vooraan, verwachting per mix, kans nooit 100%, ander inkomen, disclaimer-regel (versie 25) */ Object.assign(I18N.fr, {"q.stop": "À quel âge voulez-vous arrêter de travailler ?", "q.stopHint": "Laissez vide et nous supposons que vous travaillez jusqu’au début de votre {sp} ({a}). Vous voulez arrêter plus tôt ? Indiquez votre âge ici.", "q.stopHintSet": "Votre {sp} ne commence qu’à {a}. D’ici là, vous vivez de votre propre patrimoine.", "q.stopTwo": "Pour deux personnes, il s’agit de l’âge de la première personne.", "lvl.own": "Vous vivez avec moins, ou avec plus ? Indiquez votre propre montant ci-dessous.", "disc.line": "Ceci est un exemple de calcul fondé sur des hypothèses, pas un conseil personnalisé.", "disc.lineA": "Lire l’avertissement", "opb.tMed": "5 fois sur 10 : {v}", "opb.tLegendMed": "La ligne « 5 fois sur 10 » est le montant atteint dans la moitié des cas : l’attente ordinaire.", "opb.savWhy": "L’épargne arrive en tête ici parce que le grand montant regarde le mauvais cas (9 fois sur 10). L’épargne ne fluctue pas, l’investissement si. Ce que l’investissement rapporte d’ordinaire figure sur la ligne « 5 fois sur 10 ».", "opb.inc2": "Compte aussi : {list}.", "opb.incSp2": "{n} {v} par mois à partir de {a}", "opb.incPen2": "retraite {v} par mois à partir de {a}", "w.autoPicked": "choix de calcul : meilleure chance", "pf.autoHint": "L’app calcule maintenant avec {pf} (chance de réussite {p}) : avec vos données, ce mix offre la meilleure chance. Si deux sont à moins d’un point, nous calculons avec celui qui laisse le plus. C’est un choix de calcul et non un conseil en placement ; vous pouvez choisir vous-même un autre mix.", "f.wkAmt": "Revenus du travail ou de biens, nets par mois", "h.wkAmt": "Salaire ou bénéfice après impôt. Vous pouvez aussi indiquer ici des loyers, les revenus d’une entreprise ou des droits d’auteur. Cela dure toute la vie ? Mettez « jusqu’à l’âge » sur 100. Laissez vide si vous n’avez pas de revenus.", "wk.h": "Travail et autres revenus", "wk.hBij": "Revenus après l’arrêt", "f.bijAmt": "Revenu d’appoint ou autre revenu, net par mois", "h.bijAmt": "Par exemple un revenu d’appoint, des loyers, une entreprise ou des droits d’auteur. Compte à partir de votre âge d’arrêt ; si cela dure toute la vie, mettez l’âge ci-dessous sur 100. L’app ne demande jamais votre salaire actuel : ce qui compte, c’est ce que vous mettez de côté.", "rel.25.v": "Version 25 · novembre 2026 · merci à Fleur", "rel.25.n1": "Arrêter de travailler plus tôt ? À l’étape 1, vous indiquez maintenant vous-même votre âge d’arrêt. Votre pension d’État et votre retraite commencent simplement plus tard.", "rel.25.n2": "Les mix de placement montrent maintenant aussi ce que vous atteignez dans la moitié des cas, à côté du montant prudent de 9 fois sur 10.", "rel.25.n3": "Une chance ne s’appelle plus jamais 100 % : vous voyez maintenant « >99 % ». La certitude n’existe pas.", "rel.25.n4": "Les frais de placement ne portent plus que sur la partie investie, pas sur l’épargne. Les résultats sont de ce fait très légèrement plus élevés.", "rel.25.n5": "Loyers, revenus d’une entreprise ou droits d’auteur se saisissent sous « Travail et autres revenus ».", "rel.25.n6": "Sous le résultat, il est maintenant indiqué qu’il s’agit d’un exemple de calcul et non d’un conseil, et les boutons de « Jouez avec vos chiffres » tiennent désormais aussi sur une tablette.", "big.h": "Grosse dépense plus tard", "big.s": "Résidence secondaire, bateau, travaux", "big.intro": "Vous prévoyez de dépenser un jour une grosse somme en une fois ? Indiquez le montant, en argent d’aujourd’hui, et l’âge. Il est retiré de votre patrimoine cette année-là.", "big.amt": "Montant", "big.at": "à l’âge de", "big.add": "+ Ajouter une dépense", "big.del": "Supprimer la dépense", "big.line": "Compté comme grosse dépense : {list}.", "big.item": "{v} à {a} ans", "rel.25.n7": "Nouveau dans la saisie : une grosse dépense plus tard, comme une résidence secondaire ou un bateau. Vous voyez tout de suite l’effet sur votre résultat."});
/* voorbeeldplan (versie 25) */ Object.assign(I18N.fr, {"rel.25.n8": "Vous ne savez pas par où commencer ? Touchez « Essayer d’abord un exemple » et vous voyez tout de suite un résultat. Ensuite, saisissez vos propres chiffres.", "ex.try": "Essayer d’abord un exemple", "ex.tag": "Exemple.", "ex.bar": "Ces montants ne sont pas les vôtres : {c}.", "ex.own": "Saisir mes propres chiffres", "ex.capL": "épargne {v}", "ex.inlL": "épargne {v} par mois", "ex.ageL": "{v} ans", "ex.budL": "souhait {v} par mois"});

/* Franse leestekens: een smalle vaste spatie voor ? ! : ; » en na « */
(function () { var d = I18N.fr; Object.keys(d).forEach(function (k) { d[k] = d[k].replace(/ ([?!:;»])/g, '\u202f$1').replace(/« /g, '«\u202f'); }); })();
/* testversie 3 */ Object.assign(I18N.fr, {"tv.tag": "Version test 6", "tv.note": "Un essai avec un cockpit comme vue d’ensemble. Il reste à part des versions habituelles.", "tv.close": "Fermer le parcours", "tv.n": "Question {i} sur {m}", "tv.next": "Suivant", "tv.prev": "Retour", "tv.ready": "Terminé", "tv.goal1": "Nous faisons le compte bouton après bouton.", "tv.hello": "Bon retour. Vous en étiez à la question {i} sur {m}.", "tv.pic.opb": "Par mois plus tard, dès {a}", "tv.pic.now": "Par mois, dès maintenant", "tv.pic.pm": "par mois", "tv.pic.base": "{x} compte déjà. Vous ajoutez le reste vous-même.", "tv.pic.zero": "Rien de compté pour l’instant. Chaque réponse s’ajoute.", "tv.pic.togo": "Encore {d} avant votre objectif de {w}.", "tv.pic.ok": "Votre objectif de {w} est atteint. {d} de marge.", "tv.q.pers": "Comptez-vous pour vous seul, ou à deux avec un partenaire ?", "tv.h.pers": "Vous pourrez encore changer plus tard.", "tv.v.one": "Pour moi seul", "tv.v.two": "À deux", "tv.q.bud": "Combien voulez-vous pouvoir dépenser par mois plus tard ?", "tv.q.bud_2": "Combien voulez-vous pouvoir dépenser ensemble par mois plus tard ?", "tv.q.budNow": "Combien voulez-vous pouvoir dépenser par mois ?", "tv.q.budNow_2": "Combien voulez-vous pouvoir dépenser ensemble par mois ?", "tv.h.bud": "Ce sera votre objectif : ce que vous dépensez par mois, en argent d’aujourd’hui.", "tv.own": "Ou votre propre montant", "tv.q.cap": "Combien avez-vous aujourd’hui en épargne et placements ?", "tv.q.cap_2": "Combien avez-vous aujourd’hui ensemble en épargne et placements ?", "tv.h.cap": "Un ordre de grandeur suffit.", "tv.q.inl": "Combien mettez-vous de côté chaque mois ?", "tv.q.inl_2": "Combien mettez-vous de côté ensemble chaque mois ?", "tv.h.inl": "Épargne et placements réunis. Un ordre de grandeur suffit.", "tv.q.stop": "À quel âge voulez-vous arrêter de travailler ?", "tv.h.stop": "Il est réglé autour de votre âge de retraite. Touchez plus ou moins et voyez l’effet d’une année de plus ou de moins.", "tv.q.work": "Avez-vous encore un revenu du travail ?", "tv.q.work_2": "Avez-vous encore, à deux, un revenu du travail ?", "tv.h.work": "Par mois sur votre compte. Il compte jusqu’à votre âge de retraite.", "tv.v.no": "Non", "tv.v.yes": "Oui", "tv.q.age": "Quel âge avez-vous exactement ?", "tv.q.age_2": "Quel âge avez-vous exactement, tous les deux ?", "tv.h.age": "Avec votre âge, le calcul est plus précis qu’avec votre tranche d’âge.", "tv.q.job": "{x} : savez-vous combien vous toucherez par mois ?", "tv.h.job": "La plupart des gens ne le savent pas par cœur. Le chercher prend environ 5 minutes.", "tv.job.now": "Oui, je le saisis", "tv.job.later": "Je le chercherai plus tard", "tv.job.none": "Je n’ai pas de {pen}", "tv.job.where": "Où le trouver", "tv.job.s1": "Allez sur {site}.", "tv.job.s1x": "Prenez le dernier relevé de votre caisse de retraite, de votre employeur ou de votre assureur.", "tv.job.s1i": "Plus d’explications pour votre pays : {site}.", "tv.job.s1sp": "Prenez le dernier courrier ou relevé de votre caisse de retraite publique.", "tv.job.s2": "Connectez-vous avec {login}.", "tv.job.s3pen": "Cherchez le montant que vous recevrez par mois à partir de votre âge de retraite, sans {sp}.", "tv.job.s3sp": "Cherchez le montant que vous pouvez attendre par mois.", "tv.job.f": "Par mois sur votre compte", "tv.job.need": "Saisissez un montant, ou revenez en arrière et choisissez plus tard.", "tv.job.filled": "Saisi : {v}", "tv.change": "Modifier", "tv.when.h": "Quand le chercherez-vous ?", "tv.when.hh": "Vous recevez un rendez-vous pour votre agenda, avec un lien vers cette question.", "tv.when.tonight": "Ce soir", "tv.when.tomorrow": "Demain soir", "tv.when.own": "Choisir moi-même", "tv.when.set": "Mettre dans mon agenda", "tv.when.parked": "Prévu pour {d}.", "tv.when.g": "Google Agenda", "tv.when.file": "Fichier d’agenda", "tv.when.self": "M’envoyer le lien", "tv.when.copied": "Lien copié", "tv.ics.t": "{brand} : chercher {x} (5 minutes)", "tv.ics.d": "Ouvrez le lien et saisissez un seul montant. Vos autres réponses sont encore sur cet appareil.", "tv.ics.w": "Où le trouver : {site}", "tv.self.msg": "{brand} : continuez ici avec ce qu’il reste à chercher.", "tv.fin.base": "{x}, déjà compté", "tv.fin.had": "Ce qui y était déjà", "tv.fin.oth": "Autres modifications", "tv.fin.goal": "objectif", "tv.fin.open": "encore à chercher", "tv.fin.job": "Prévu pour {d} : {x} à chercher. Environ 5 minutes.", "tv.k.pers": "Seul ou à deux", "tv.k.bud": "Votre objectif", "tv.k.cap": "Épargne et placements", "tv.k.inl": "Mis de côté par mois", "tv.k.stop": "Arrêt du travail", "tv.k.work": "Revenu du travail", "tv.k.age": "Votre âge", "tv.v.pm": "{v} par mois", "tv.v.age": "{v} ans", "tv.v.at": "à {a}", "tv.v.none": "aucun", "tv.v.parked": "prévu pour {d}", "tv.back.h": "Bon retour", "tv.back.job1": "Une chose vous attend : {x} à chercher. Environ 5 minutes.", "tv.back.go": "Le faire maintenant", "tv.home.k": "Votre compte", "tv.home.go": "Continuer vos questions", "tv.home.goS": "Vous en êtes à la question {i} sur {m}.", "tv.home.start": "Répondre aux {m} questions", "tv.home.startS": "À chaque réponse, vous voyez son effet sur votre montant.", "tv.home.hint": "Touchez une case pour l’agrandir. Vous modifiez vos réponses sous {t}.", "tv.g.knopen": "Vos boutons", "tv.g.count": "{n} sur {m}", "tv.g.meer": "Compter davantage", "tv.g.zien": "Ce que cela signifie", "tv.g.over": "À propos et aide", "tv.c.basis": "Sexe, trajectoire des dépenses et épargne par période", "tv.cs.basis": "Avec le sexe, l’évolution des dépenses et l’épargne par période", "tv.c.pp": "Revenu d’appoint après l’arrêt", "tv.cs.pp": "Revenu en plus de la retraite, et jusqu’à quel âge", "tv.cs.sp2": "À partir de quel âge, et activée ou non", "tv.cs.pot": "D’un autre pays, ou une cagnotte à part", "tv.c.debt": "Dettes", "tv.cs.debt": "Prêt étudiant, petites et grosses dettes", "tv.c.bel": "Placements, impôt et durée", "tv.cs.aan": "Inflation {i} · frais {k}", "tv.c.uit": "Votre résultat", "tv.cs.uit": "Atteignez-vous votre objectif, et avec quelle certitude", "tv.cs.plan": "Deux choix côte à côte", "tv.c.mix": "Votre portefeuille", "tv.c.tax": "Impôt sur les placements", "tv.c.run": "Durée à couvrir", "tv.cs.run": "Jusqu’à vos {a} ans", "tv.c.pp50": "Travail : jusqu’à quel âge", "tv.cs.pp50": "Jusqu’à quand votre revenu du travail continue, ou affinez par période", "tv.c.nm": "Prénom et sexe", "tv.cs.nm": "Comment l’app vous appelle ; le sexe fixe l’espérance de vie", "h.inlegSplit": "Ensemble, c’est le montant de « Mis de côté par mois ». La répartition ne change pas le résultat.", "tv.c.pp2": "Épargne et revenu d’appoint par personne", "tv.cs.pp2": "Revenu après l’arrêt, et la répartition de l’épargne", "oth.h": "Petites dettes", "debt.h": "Grosses dettes", "tv.cs.over": "L’idée et votre pays", "tv.a.lang": "Pays", "tv.ch.back": "Votre compte", "tv.ch.empty": "Rien à afficher ici pour l’instant. Répondez d’abord à vos questions : votre objectif et votre épargne.", "tv.n.gap": "Sous l’objectif", "tv.n.room": "Au-dessus de l’objectif", "tv.n.cap": "Capital à l’arrêt", "tv.ck.fanS": "Touchez pour agrandir", "tv.ck.empty": "Choisissez d’abord votre objectif. L’évolution de votre capital s’affichera ici.", "tv.ck.num": "Vos chiffres", "tv.ck.more": "Aller plus loin", "tv.in.s": "Touchez un bouton pour modifier la réponse. En dessous : ce qui peut encore compter.", "tv.more": "Plus d’explications", "tv.less": "Moins d’explications", "tv.c.pot": "Autre pension ou capital, avec son propre âge de départ", "tv.pen.age": "Régler un autre âge de départ", "tv.pen.more": "Ajouter une autre pension", "tv.g.q": "Seul un montant avant impôt est indiqué ?", "tv.g.a": "Montant avant impôt, par mois", "tv.g.p": "Ce qui est retenu en impôts et cotisations", "tv.g.o": "Sur votre compte : {v} par mois. Reporté ci-dessus.", "pot.amtM": "Par mois sur votre compte", "pot.amtL": "Montant sur votre compte", "u.grossMonth": "{cur} par mois", "pot.tax": "Seulement si vous saisissez un montant avant impôt : ce qui est retenu", "pot.sumM": "Sur votre compte : {v} par mois à partir de {a} ans, {u}.", "pot.sumL": "Sur votre compte : {v} en une fois à {a} ans. Cela rejoint votre capital.", "tv.in.h": "Calculez ce que vous pourrez dépenser chaque mois plus tard.", "tv.in.p": "Button Counter fait le compte avec vous : {sp}, {pen}, épargne et ce que vous mettez de côté.", "tv.in.1": "Quelques questions courtes, sans compte", "tv.in.2": "À chaque réponse, vous voyez ce qu’elle apporte", "tv.in.3": "Vos chiffres restent sur votre appareil", "intro.ask": "Par quelle question voulez-vous commencer ?", "goalY.2.t": "Aurai-je assez pour ma retraite ?", "tv.g.again": "Régler à nouveau", "tv.g.share": "Partager", "tv.a.intro": "Refaire l’introduction", "tv.a.introS": "Choisir à nouveau votre tranche d’âge et votre question", "tv.a.langS": "Changer de pays de calcul", "tv.st.ok": "Compté", "tv.st.todo": "À remplir", "tv.st.wait": "Prévu", "tv.row.auto": "automatique", "tv.row.up": "ajoute {v} par mois", "tv.row.down": "coûte {v} par mois", "tv.c.per": "Épargne par période", "tv.pen.early": "Commence avant que vous arrêtiez de travailler. Jusque-là, elle ne compte pas dans le montant pour plus tard.", "u.netMonth": "{cur} par mois sur votre compte", "f.werk": "Des revenus d’appoint ? Par mois sur votre compte", "f.spAmt": "{Sp}, par mois sur votre compte", "f.penAmt": "{Pen}, par mois sur votre compte", "h.penAmt": "Indiquez-la comme le montant qui arrive chaque mois sur votre compte, sans la {sp}. Vous avez une cagnotte plutôt qu’un montant mensuel ? Ajoutez-la à votre patrimoine.", "fact.spFlat": "{one} par mois pour une personne seule, {two} par personne pour un couple (sur le compte, taux plein)", "f.wkAmt": "Revenus du travail ou de biens, par mois sur votre compte", "wk.amt": "{cur} par mois sur votre compte", "f.penPh": "par mois sur votre compte", "f.bijAmt": "Revenu d’appoint ou autre revenu, par mois sur votre compte", "wk1.q": "Vous travaillez encore ? Combien gagnez-vous par mois sur votre compte ?", "h.penShort": "Par mois sur votre compte, sans la {sp}.", "h.budget": "Pensez par mois, tout compris : logement, courses, voyages et un peu pour les imprévus. Nous calculons si c’est possible et d’où vient l’argent.", "opb.fireNot": "<b>La liberté financière n’est pas encore à portée.</b> Il vous faut {t}. Mais vous avez {y} ans devant vous, et c’est maintenant que chaque petit pas compte le plus."});
/* versie 26: Wat is er nieuw en het dankwoord bij de intro */ Object.assign(I18N.fr, {"rel.26.v": "Version 26 · novembre 2026 · merci à toutes celles et ceux qui ont réfléchi avec nous", "rel.26.n1": "Vous commencez par votre propre question. Chaque écran pose une question courte, et chaque réponse montre ce qu’elle apporte.", "rel.26.n2": "L’aperçu montre en un coup d’œil ce que vous pouvez dépenser par mois, avec un petit graphique et vos réponses.", "rel.26.n3": "Sous Saisir, chaque sujet a son propre bouton avec un statut : Compté, À remplir ou Prévu.", "rel.26.n4": "Les explications sont derrière le ⓘ, pour que les écrans restent calmes.", "rel.26.n5": "Vous ne connaissez pas un montant par cœur, comme votre retraite ? Choisissez « Je le chercherai plus tard ». Vous recevez un rendez-vous pour votre agenda avec un lien vers votre question.", "rel.26.n6": "Les dettes sont séparées en petites et grosses dettes. Ce qui relève de Pro porte un cadenas.", "rel.26.n7": "Le calcul lui-même n’a pas changé.", "tv.tag": "", "tv.note": "", "intro.thanks": "Merci à toutes celles et ceux qui ont réfléchi avec nous : chaque retour améliore cette appli."});
/* opnieuw beginnen */ Object.assign(I18N.fr, {"tv.g.wipe": "Recommencer", "wipe.row": "Tout effacer et recommencer", "wipe.rowS": "Supprime tout de cet appareil. Pratique pour une démo.", "wipe.h": "Tout effacer ?", "wipe.p1": "Cela supprime de cet appareil : votre décompte, votre plan et votre second plan, les noms, votre bloc-notes et vos réglages. Vous repartez ensuite de l’écran d’accueil.", "wipe.p2": "Impossible d’annuler. Vous voulez garder votre résultat ? Faites-le d’abord.", "wipe.save": "D’abord enregistrer", "wipe.no": "Annuler", "wipe.yes": "Oui, tout effacer"});
/* versie 26.1: bovenste knoop */ Object.assign(I18N.fr, {"tv.row.had": "avec ce que vous aviez déjà saisi", "tv.fin.had": "Déjà saisi avant de commencer"});
/* testversie 7: Invullen in drie lagen */ Object.assign(I18N.fr, {"tv.g.basis": "Vos bases", "tv.g.ref": "Affinez votre résultat", "tv.g.refS": "Pas nécessaire pour un résultat, mais il sera plus précis.", "tv.g.asm": "Comment nous calculons", "tv.st.opt": "Facultatif", "tv.ref.next": "Suivant : {x}", "tv.ref.offerH": "Votre premier résultat est prêt", "tv.ref.offerP": "Vous le voulez plus précis ? Parcourez alors aussi ces boutons. Ce n'est pas nécessaire pour votre résultat.", "tv.ref.go": "Oui, affiner", "tv.ref.skip": "Pas maintenant, voir mon résultat", "tv.ref.tipP": "Prochaine étape pour un résultat plus précis"});
/* versie 27: Wat is er nieuw */ Object.assign(I18N.fr, {"rel.27.v": "Version 27 · novembre 2026 · à nouveau merci à toutes celles et ceux qui ont réfléchi avec nous", "rel.27.n1": "Saisir comporte trois niveaux : Vos bases, Affinez votre résultat et Comment nous calculons.", "rel.27.n2": "Vous affinez avec les mêmes boutons que vos bases. Ils ne sont pas nécessaires pour un résultat, mais le rendent plus précis. Chaque tranche d'âge a son propre ordre.", "rel.27.n3": "Dès que vous avez votre premier résultat, vous pouvez affiner quelques boutons. Sous chaque écran figurent Terminé et Suivant.", "rel.27.n4": "Le bouton retour de votre téléphone ferme maintenant une question, une fenêtre ou vos notes, comme la croix. L'application reste ouverte.", "rel.27.f1": "La croix est toujours en haut à droite.", "rel.27.f2": "Dans chaque tranche d'âge, le premier bouton porte le nom de votre pension de l'État.", "rel.27.f3": "Trajectoire des dépenses et épargne par période ont un cadenas, car elles font partie de Pro.", "rel.27.f4": "À partir de 50 ans, Dettes n'affiche plus de prêt étudiant, sauf si vous en aviez déjà saisi un.", "rel.27.f5": "Sur un écran étroit, les mots longs ne décalent plus la page."});
/* versie 28: inschatting per land bij belasting, hints bij het staatspensioen (Spanje, VS), Wat is er nieuw */ Object.assign(I18N.fr, {"tax.est": "{InCountry}, c’est notre estimation. Si c’est différent pour vous, modifiez-la.", "spTip.ES": "En Espagne, la pension est versée en 14 paiements par an. Indiquez donc le montant mensuel multiplié par 14 et divisé par 12.", "spTip.US": "Indiquez le montant pour l’âge auquel vous demanderez la prestation. Votre Social Security Statement le donne pour neuf âges, de 62 à 70 ans.", "rel.28.v": "Version 28 · novembre 2026", "rel.28.n1": "Pour l’impôt, l’app indique désormais qu’il s’agit de notre estimation pour votre pays. L’Allemagne, l’Espagne et les États-Unis ont des explications en plus sur l’impôt et la retraite publique."});
/* vraagpagina's in deze taal (qp.<naam>.*). Elke pagina bestaat alleen in deze taal: de andere talen hebben eigen vragen, geen vertalingen.
   slug = webadres, goal = wielvraag, country = land waarin de pagina opent (alleen bij een pagina over één land),
   h1 = de vraag, a = het korte antwoord, btn = de knop, fq en fa = de veelgestelde vraag en het antwoord (ook in de FAQ van de app).
   Een naam tussen accolades is een getal dat veroudert: zie QPN en CTRY in src/index.html. Bron van de teksten: het document
   "Knopenteller — zeven nieuwe vraagpagina's" van 25 november 2026. */
Object.assign(I18N.fr, {
  "site.qs": "Autres questions",

  "qp.fr-combien.slug": "combien-faut-il-pour-la-retraite",
  "qp.fr-combien.goal": "enough",
  "qp.fr-combien.h1": "Combien faut-il pour prendre sa retraite\u202f?",
  "qp.fr-combien.a": "Il n’existe pas de chiffre unique. Tout dépend de trois choses\u202f: ce que vous voulez dépenser chaque mois, la durée pendant laquelle votre argent doit tenir et ce qui rentrera encore plus tard, comme votre retraite de base et votre complémentaire. Les règles simples ne regardent que le premier point. Button Counter réunit les trois, avec l’impôt et l’inflation, et montre le capital qui suffit dans 9 cas sur 10.",
  "qp.fr-combien.btn": "Calculer mon besoin",
  "qp.fr-combien.fq": "De quel capital ai-je besoin pour ma retraite\u202f?",
  "qp.fr-combien.fa": "Cela dépend de votre budget mensuel, de votre âge de départ, de vos pensions et de l’impôt sur vos placements. Button Counter réunit ces éléments et montre le capital nécessaire pour que votre argent tienne dans 9 cas sur 10.",

  "qp.fr-duree.slug": "combien-de-temps-dure-mon-capital",
  "qp.fr-duree.goal": "enough",
  "qp.fr-duree.h1": "Combien de temps mon capital va-t-il durer\u202f?",
  "qp.fr-duree.a": "Cela dépend de ce que vous retirez chaque mois, de la façon dont votre argent est placé et des pensions qui s’y ajoutent. Un calcul simple suppose un rendement fixe. En réalité, les rendements varient et les prix montent. Button Counter calcule donc un grand nombre de scénarios et montre la probabilité que votre argent tienne jusqu’à l’âge que vous choisissez.",
  "qp.fr-duree.btn": "Voir l’évolution de mon capital",
  "qp.fr-duree.fq": "Combien de temps mon épargne peut-elle durer à la retraite\u202f?",
  "qp.fr-duree.fa": "Cela dépend de vos retraits mensuels, de vos pensions, de vos placements et de l’inflation. Button Counter montre l’évolution de votre capital année après année et la probabilité qu’il suffise.",

  "qp.fr-60-ans.slug": "partir-a-la-retraite-a-60-ans",
  "qp.fr-60-ans.goal": "earlier",
  "qp.fr-60-ans.h1": "Retraite anticipée : puis-je partir à la retraite à 60 ans ?",
  "qp.fr-60-ans.a": "L’âge légal se situe entre {frAgeMin} et {frAgeMax} selon votre année de naissance (situation en {frStand}, après la suspension de la réforme, hors carrières longues). Arrêter de travailler à 60 ans reste possible si votre épargne couvre les années jusqu’à vos pensions. Ce sont les années les plus coûteuses\u202f: rien ne rentre et votre capital porte tout. Avec moins de trimestres, votre pension sera aussi plus basse. Indiquez dans Button Counter le montant de votre simulation sur info-retraite.fr et déplacez votre âge d’arrêt.",
  "qp.fr-60-ans.btn": "Essayer un départ à 60 ans",
  "qp.fr-60-ans.fq": "Peut-on arrêter de travailler avant l’âge légal\u202f?",
  "qp.fr-60-ans.fa": "Oui, si votre épargne finance les années sans pension. Button Counter montre année par année ce qui rentre et ce que votre capital doit couvrir, et la probabilité que votre argent suffise.",

  "qp.fr-4-pour-cent.slug": "regle-des-4-pour-cent-france",
  "qp.fr-4-pour-cent.goal": "spend",
  "qp.fr-4-pour-cent.h1": "La règle des 4\u00a0% fonctionne-t-elle en France\u202f?",
  "qp.fr-4-pour-cent.a": "La règle des 4\u00a0% vient d’études américaines. Elle dit\u202f: la première année, vous retirez 4\u00a0% de votre capital, puis vous ajustez ce montant à l’inflation. En France, il lui manque deux choses. Elle ignore vos pensions de retraite, qui paieront plus tard une partie de vos dépenses. Et elle oublie l’impôt sur vos gains\u202f: {frTax} au prélèvement forfaitaire unique en {frTaxYear}, souvent moins dans un PEA ou une assurance-vie. Button Counter tient compte des deux.",
  "qp.fr-4-pour-cent.btn": "Faire le calcul pour moi",
  "qp.fr-4-pour-cent.fq": "Peut-on appliquer la règle des 4\u00a0% en France\u202f?",
  "qp.fr-4-pour-cent.fa": "Comme repère, oui. Mais elle ne compte ni vos pensions, ni l’impôt sur vos gains, ni la durée de votre propre retraite. Button Counter les intègre et montre ce que vous pouvez dépenser chaque mois.",

  "qp.fr-epargner.slug": "combien-epargner-pour-la-retraite",
  "qp.fr-epargner.goal": "retire",
  "qp.fr-epargner.h1": "Épargne retraite : combien épargner par mois ?",
  "qp.fr-epargner.a": "Il n’y a pas de pourcentage magique. Le bon montant dépend de votre âge, de ce que vous avez déjà mis de côté, du budget que vous visez et de vos futures pensions. Plus vous commencez tôt, moins l’effort mensuel est lourd. Button Counter part de votre objectif et montre ce que chaque euro de plus par mois change pour plus tard.",
  "qp.fr-epargner.btn": "Voir ce que mon épargne apporte",
  "qp.fr-epargner.fq": "Combien faut-il mettre de côté chaque mois pour la retraite\u202f?",
  "qp.fr-epargner.fa": "Cela dépend de votre âge, de votre épargne actuelle, de votre objectif et de vos pensions. Dans Button Counter, vous modifiez votre versement mensuel et voyez aussitôt ce qu’il apporte plus tard.",

  "qp.fr-rentes.slug": "vivre-de-ses-rentes",
  "qp.fr-rentes.goal": "free",
  "qp.fr-rentes.h1": "Vivre de ses rentes\u202f: quel capital faut-il\u202f?",
  "qp.fr-rentes.a": "On lit souvent\u202f: 25 fois vos dépenses annuelles. Ce chiffre vient de la règle des 4\u00a0%. Il oublie que vos pensions de retraite commenceront un jour et prendront le relais d’une partie de vos dépenses. Avant cette date, il vous faut un capital plus important\u202f; après, moins. Un seul chiffre ne convient donc jamais tout à fait. Button Counter calcule année par année, avec vos pensions, l’impôt et l’inflation.",
  "qp.fr-rentes.btn": "Calculer mon capital",
  "qp.fr-rentes.fq": "Quel capital faut-il pour devenir rentier\u202f?",
  "qp.fr-rentes.fa": "Cela dépend de vos dépenses, de votre âge et des pensions que vous toucherez plus tard. Button Counter montre si votre capital suffit, avant comme après le début de vos pensions.",

  "qp.fr-tard.slug": "epargner-tard-pour-la-retraite",
  "qp.fr-tard.goal": "retire",
  "qp.fr-tard.h1": "Commencer à épargner à 40 ou 50 ans\u202f: est-ce trop tard\u202f?",
  "qp.fr-tard.a": "Non. À 45 ou 50 ans, il vous reste souvent quinze ans ou plus avant la retraite. C’est assez pour qu’un versement régulier fasse une vraie différence. Vos pensions paieront aussi une bonne part de vos dépenses plus tard\u202f; votre épargne n’a pas à tout porter. La question n’est pas de savoir si cela vaut la peine, mais ce que cela rapporte. Button Counter montre ce que chaque euro de plus par mois représente plus tard.",
  "qp.fr-tard.btn": "Voir ce que cela rapporte encore",
  "qp.fr-tard.fq": "Est-il trop tard pour préparer sa retraite à 50 ans\u202f?",
  "qp.fr-tard.fa": "Non. Même avec quinze ans devant vous, un montant fixe par mois compte, en plus de vos pensions. Dans Button Counter, vous augmentez votre versement et voyez aussitôt ce qu’il apporte par mois plus tard.",

  "qp.fr-pension-legale.slug": "pension-legale-suffisante",
  "qp.fr-pension-legale.goal": "enough",
  "qp.fr-pension-legale.country": "BE",
  "qp.fr-pension-legale.h1": "Montant de ma pension : est-ce suffisant ?",
  "qp.fr-pension-legale.a": "En Belgique, l’âge légal de la pension est de {beAge} et passe à {beAgeNext} en {beAgeFrom}. Le montant dépend de votre carrière et de votre statut. Pour beaucoup, il reste nettement sous le dernier salaire. La différence doit venir d’une pension complémentaire, d’une épargne-pension ou de votre propre capital. Reprenez vos montants sur mypension.be, indiquez-les dans Button Counter et voyez ce que votre épargne doit ajouter.",
  "qp.fr-pension-legale.btn": "Voir ce qui manque",
  "qp.fr-pension-legale.fq": "Ma pension légale sera-t-elle suffisante\u202f?",
  "qp.fr-pension-legale.fa": "Comparez-la au budget mensuel que vous visez. Button Counter montre ce que votre pension complémentaire et votre épargne doivent ajouter, et la probabilité que cela tienne."
});

/* testversie 8: snelle start */
Object.assign(I18N.fr, {"iq.h": "Combien pourrez-vous dépenser chaque mois plus tard ?", "iq.tap": "Touchez votre âge et faites le calcul en deux minutes. Votre âge exact, vous l’indiquerez plus tard.", "iq.other": "Vous préférez commencer par une autre question ?"});

Object.assign(I18N.fr, {"iq.p": "Touchez votre âge pour commencer. Quelques questions courtes, sans compte."});

/* testversie 8, ronde 3 */
Object.assign(I18N.fr, {"iq.p": "Choisissez votre question. Quelques questions courtes, sans compte.", "iq.q0": "Que me rapporte mon épargne ?", "iq.a0": "18–34 ans", "iq.q1": "Suis-je sur la bonne voie ?", "iq.a1": "35–49 ans", "iq.q2": "Mon argent suffira-t-il ?", "iq.a2": "50 ans et plus"});

/* testversie 8, ronde 4 */
Object.assign(I18N.fr, {"tv.pic.quiet": "{x} compte déjà : {v} par mois. Chaque réponse s’y ajoute.", "tv.q.pers": "Vous êtes seul, ou en couple ?", "tv.v.one": "Seul", "tv.v.two": "En couple"});
Object.assign(I18N.fr, {"tv.q.stop_2": "À quel âge souhaitez-vous personnellement arrêter de travailler ?", "tv.q.age": "Quel âge avez-vous ?", "tv.q.age_2": "Quel âge avez-vous, tous les deux ?"});
Object.assign(I18N.fr, {"tv.pic.sofar": "Avec vos réponses jusqu’ici."});
Object.assign(I18N.fr, {"tv.h.bud": "Ce sera votre objectif : ce que vous dépensez par mois."});
Object.assign(I18N.fr, {"tv.i.bud": "Indiquez ce que vous dépensez aujourd’hui par mois, en montants d’aujourd’hui. Nous tenons compte nous-mêmes de la hausse des prix d’ici là."});
Object.assign(I18N.fr, {"tv.ref.go": "Affiner mon résultat", "q.stopTwo": "Il s’agit de vous. Pour votre partenaire, c’est son propre âge de retraite qui compte."});
Object.assign(I18N.fr, {"tv.c.nm": "Sexe", "tv.cs.nm": "Votre sexe fixe l’espérance de vie utilisée"});
Object.assign(I18N.fr, {"tv.ref.sketch": "Ce n’est encore qu’une esquisse. Plus vous complétez, plus votre résultat est précis."});
Object.assign(I18N.fr, {"tv.pic.of": "sur {w}", "tv.pic.togo": "Encore {d} à trouver.", "tv.pic.ok": "Objectif atteint : {d} en plus.", "tv.ref.sketch": "Plus vous complétez, plus votre résultat est précis."});
Object.assign(I18N.fr, {"tv.ref.sharp": "Affiner votre résultat", "tv.g.basis2": "Vos bases", "tv.g.basisDone": "Les {n} questions sont répondues"});
Object.assign(I18N.fr, {"iq.ctry": "Calcul pour {c} · modifier"});
Object.assign(I18N.fr, {"iq.ctry": "Pays : {c} · modifier"});

/* testversie 8: telling na alleen of met partner */ Object.assign(I18N.fr, {"tv.pic.base2": "{x} pour vous deux compte déjà. Vous ajoutez le reste vous-même."});
/* testversie 8: klein vak met alleen het staatspensioen */ Object.assign(I18N.fr, {"tv.pic.spK": "{x}, par mois plus tard", "tv.pic.spK2": "{x} pour vous deux, par mois plus tard"});
