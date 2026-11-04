---
layout: base.njk
title: "Restaurant : publier une carte qui correspond au service"
description: "Une fiche de version remplie et un contrôle avant service pour retirer une ancienne carte sans confondre publication, affichage et disponibilité des plats."
date: 2026-11-04
published: "4 novembre 2026"
publishedIso: "2026-11-04T09:02:54Z"
category: Parcours client
tags: article
permalink: /articles/carte-restaurant-version-service/index.html
---
<p class="eyebrow">Parcours client · 4 novembre 2026 · par la rédaction Terrain Visible (MyFrank)</p>

# Restaurant : quelle version de la carte le client voit-il avant le service ?

Une équipe peut avoir validé le menu du soir tandis que le site affiche encore celui du midi. Le problème n'est pas seulement de modifier un fichier : il faut savoir **quelle version a été approuvée, où elle est visible et quand la remplacer**. Cette fiche porte sur la publication de la carte ; notre [test mobile carte–réservation](/articles/carte-reservation-restaurant-mobile/) traite séparément le passage vers une table.

<a class="button" href="/assets/versions-carte-restaurant.csv" download>Télécharger la fiche de versions CSV ↓</a>

## Une version par lieu et par service

Avant de publier, donner à la carte un identifiant simple : lieu, date de service, midi ou soir, numéro de révision. Noter la personne qui valide les plats, prix et mentions propres au restaurant. Distinguer **carte validée** (contenu approuvé), **carte publiée** (mise en ligne effectuée) et **carte contrôlée** (vue sur le lien public). Une confirmation de l'outil d'édition ne prouve pas ce dernier état.

1. Ouvrir, sur un téléphone non connecté à l'outil d'édition, le lien réellement distribué aux clients : site, lien de bio, QR code ou page de réservation selon le cas. Conserver chaque canal dans une ligne distincte.
2. Vérifier lieu, service, date ou période de validité, trois plats modifiés et leurs prix contre la version validée. Si la carte est un PDF, ouvrir **le lien public**, pas le fichier local.
3. Si une ancienne carte reste visible, relever son URL et l'heure du contrôle. Désigner un responsable pour la retirer ou clarifier sa période, puis refaire le même trajet. Ne pas déclarer « corrigé » sur la seule foi d'un nouveau téléversement.
4. Après le début du service, demander à l'équipe si une indisponibilité ponctuelle exige une correction. Une carte publiée n'est pas une garantie de stock : préciser comment l'information est mise à jour ou confirmée.

La [fiche CSV](/assets/versions-carte-restaurant.csv) garde **deux cas fictifs remplis et une ligne vierge**. Elle ne contient aucune donnée de client. Les heures sont des exemples, pas un délai de publication promis par une plateforme.

## Exemple rempli : l'écart et le retest

*Exemples inventés ; aucun restaurant ou outil réel n'a été audité.*

<div class="table-wrap" tabindex="0" role="region" aria-label="Deux cas fictifs de version de carte, tableau défilable"><table><thead><tr><th>Service</th><th>Version validée</th><th>Contrôle public</th><th>Décision et retest</th></tr></thead><tbody><tr><td>Lieu A · dîner du 4 novembre</td><td>SOIR-04-R2 à 16 h 00</td><td>Le lien du site ouvre encore MIDI-04-R1 à 17 h 10</td><td>Corriger le lien ; à 17 h 25, le même trajet ouvre SOIR-04-R2</td></tr><tr><td>Lieu B · déjeuner du 5 novembre</td><td>MIDI-05-R1 à 10 h 00</td><td>Site à jour à 10 h 15 ; QR code de vitrine sur une carte non datée</td><td>Ne pas conclure « tous canaux à jour » ; contrôle du QR code en attente</td></tr></tbody></table></div>

Dans le premier cas, le statut du site passe à « vérifié » seulement après le retest public. Dans le second, le site est vérifié mais le QR code reste « à corriger ». Un responsable peut retirer l'ancien document, maintenir une page de transition datée ou remplacer la cible du lien selon son dispositif ; il doit ensuite refaire le parcours depuis le support client.

## Limite et décision d'exploitation

Ce registre établit une cohérence **au moment du contrôle**, pas la disponibilité permanente d'un plat ni une amélioration des réservations. Un changement de prix ou de composition appelle une nouvelle version et un nouveau contrôle. Si l'équipe ne peut pas confirmer la carte, afficher une période de validité et un moyen de confirmation est plus honnête qu'une promesse implicite. Le protocole doit être adapté aux canaux réellement utilisés par le restaurant ; il ne prétend pas certifier l'accessibilité d'une carte ni le respect d'une règle de plateforme.

**Provenance :** méthode et exemples originaux de la rédaction Terrain Visible, sans données externes ou constat de terrain réel. La recherche française du 4 novembre 2026 sur la mise à jour d'une carte a surtout montré des solutions d'édition de menu ; le catalogue MyFrank couvre déjà la visibilité restaurant et le parcours mobile, pas ce registre de versions par service. Terrain Visible est [créé et exploité par MyFrank](/a-propos/) ; [proposer une correction ou un cas consenti](/contribuer/).
