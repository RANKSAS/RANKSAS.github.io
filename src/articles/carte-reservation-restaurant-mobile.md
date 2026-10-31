---
layout: base.njk
title: "Restaurant : tester la carte et la réservation sur téléphone"
description: "Un parcours-test de cinq minutes, deux cas fictifs remplis et une fiche CSV pour repérer où carte, créneau et confirmation se contredisent."
date: 2026-10-31
published: "31 octobre 2026"
publishedIso: "2026-10-31T09:15:00Z"
category: Parcours client
tags: article
permalink: /articles/carte-reservation-restaurant-mobile/index.html
---
<p class="eyebrow">Parcours client · 31 octobre 2026 · par la rédaction Terrain Visible (MyFrank)</p>

# Restaurant : la carte et la réservation tiennent-elles ensemble sur téléphone ?

Une carte lisible ne suffit pas si le bouton « Réserver » ouvre un autre établissement ; une réservation confirmée ne résout pas une carte périmée. Ce test suit **un seul service et une seule promesse**, du plat affiché au récapitulatif de réservation. Il complète la [fiche générale restauration](/restauration/) ; il ne traite ni l'optimisation de la fiche Google ni la collecte d'avis.

<a class="button" href="/assets/test-carte-reservation-restaurant.csv" download>Télécharger la fiche de test CSV ↓</a>

## Parcours-test de cinq minutes : cinq arrêts vérifiables

Ce minutage sert de guide de premier passage, pas de durée garantie : documenter et retester peut prendre davantage de temps. Choisissez un établissement, un service daté (par exemple le dîner de vendredi), un téléphone et l'URL publique réellement proposée aux clients. Travaillez sur un environnement de test ou arrêtez-vous **avant toute réservation réelle**, sauf accord du restaurant. Notez l'heure, le navigateur et la version des pages ; masquez les noms et coordonnées des clients dans toute preuve partagée.

1. **0–1 minute · arrivée.** Depuis le lien public « Carte », vérifiez le nom du lieu et le service annoncé. Notez si la carte consultée est bien celle du soir choisi, pas simplement un PDF ancien encore accessible.
2. **1–2 minutes · choix.** Trouvez un plat, son prix affiché et, si nécessaire, l'information que le restaurant publie pour les restrictions alimentaires. Un tarif absent ou une carte saisonnière non datée devient une question à confirmer, pas une preuve d'erreur de prix.
3. **2–3 minutes · passage.** Suivez « Réserver » depuis la carte. Vérifiez que l'établissement, le nombre de couverts et le service sélectionné restent cohérents. Si un autre outil s'ouvre, relevez son domaine et le nom du restaurant affiché.
4. **3–4 minutes · tentative.** Choisissez un créneau de test. Si le formulaire permet une vérification sans envoi, provoquez une erreur non personnelle et observez le message. Sinon, ne soumettez rien : marquez « non testé » plutôt que « réussi ».
5. **4–5 minutes · sortie.** Relevez le récapitulatif disponible **sans confirmer une réservation non autorisée** : lieu, date, heure, couverts, canal de modification. Si une réservation de test autorisée existe, comparez ensuite la confirmation reçue et la vue de l'équipe.

Pour le confort sur petit écran, vérifiez aussi que le texte de la carte reste accessible à **320 pixels CSS de largeur** sans défilement dans deux directions, sous les exceptions du [critère WCAG 2.2 « Reflow » du W3C](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Si un formulaire signale une erreur, vérifiez qu'elle est [identifiée et décrite en texte](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html). Ces deux vérifications ciblées **ne constituent pas un audit de conformité WCAG**. Un vrai audit couvre les critères applicables et plusieurs modes d'interaction.

## Deux passages fictifs, avec décision

*Exemples inventés pour montrer la tenue de la fiche ; aucun restaurant ni client réel n'a été observé.* Le [CSV](/assets/test-carte-reservation-restaurant.csv) contient les deux cas remplis et une ligne vierge à copier.

<div class="table-wrap" tabindex="0" role="region" aria-label="Deux exemples fictifs de contrôle carte et réservation, tableau défilable"><table><thead><tr><th>Cas</th><th>Écart vu sur téléphone</th><th>Décision</th><th>Retest</th></tr></thead><tbody><tr><td>A · dîner du vendredi</td><td>Carte « soir » ouverte, puis outil de réservation prépositionné sur « déjeuner »</td><td>Faire corriger le paramètre du lien ; ne pas déduire qu'une table a été perdue</td><td>Reprendre le même lien et le même service</td></tr><tr><td>B · samedi, deux couverts</td><td>Carte du lieu « Centre » ; outil externe affiche « Gare » avant validation</td><td>Bloquer le parcours et vérifier la configuration de l'outil avec l'équipe</td><td>Comparer l'écran final et la confirmation de test autorisée</td></tr></tbody></table></div>

Classez chaque ligne « observé », « à corriger » ou « retesté », avec une personne responsable et la version du lien. Si la carte change chaque semaine, refaire le test après publication, pas seulement après la correction initiale. Un essai réussi ne prouve ni que tous les téléphones fonctionnent ni que les réservations augmentent ; un échec ne quantifie pas les ventes perdues.

**Sources et périmètre :** méthode et cas fictifs de la rédaction ; critères ciblés du W3C consultés le 31 octobre 2026. Les modalités de réservation sont propres au restaurant et à son outil. Terrain Visible est [créé et exploité par MyFrank](/a-propos/) ; [proposer une correction ou un cas documenté](/contribuer/).
