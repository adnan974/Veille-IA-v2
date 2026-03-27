# PRD : AI-Powered Content Curator (MVP)

**Version :** 1.0 (MVP)

**Objectif :** Filtrer le bruit informationnel quotidien et centraliser la "crème" des contenus pertinents dans Notion.

---

## 1. Vision & Objectifs

**Problème :** Surcharge informationnelle sur X, Reddit et les Blogs. Trop de contenu non pertinent.

**Solution :** Un système automatisé qui récupère, score et résume le contenu selon des préférences personnelles exprimées en langage naturel.

**Fréquence :** Mise à jour quotidienne (Batch processing).

---

## 2. Spécifications Fonctionnelles

### A. Gestion des Sources (Entrées)

- **Ajout Dynamique :** Possibilité d'ajouter des sources via une commande API (URL de flux RSS, nom de Subreddit, handle X).
- **Granularité :** Le système suit des comptes spécifiques (X), des communautés précises (Subreddits) ou des flux dédiés (RSS).
- **Nature des données :** Extraction du contenu textuel uniquement. Les images et vidéos sont ignorées pour le MVP.

### B. Moteur d'Intelligence (Traitement)

- **Configuration des Intérêts :** Utilisation d'un fichier de préférences écrit en langage naturel (ex: *"Je m'intéresse à la cybersécurité, aux nouvelles sorties de frameworks JS, mais je ne veux rien savoir sur la politique US"*).
- **Scoring IA :** Chaque unité de contenu reçoit une note de 0 à 10 basée sur la correspondance sémantique avec le fichier de préférences.
- **Synthèse Automatique :** Génération d'un résumé de 1 à 3 phrases expliquant l'intérêt du contenu ou synthétisant l'information clé.
- **Doublons :** Aucune gestion de dédoublonnage pour le MVP (si une info est sur X et Reddit, elle apparaît deux fois).

### C. Interface Utilisateur (Sortie Notion)

Le système doit créer une ligne par contenu dans une base de données Notion prédéfinie.

| Propriété Notion | Type | Description |
|---|---|---|
| Titre | Title | Titre de l'article ou 50 premiers caractères du post. |
| Score | Number | Note de 0 à 10. |
| Source | Select | Origine (X, Reddit, Blog). |
| Lien | URL | URL directe vers le contenu original. |
| Date | Date | Date de l'importation. |
| Contenu (Page) | Body | Le Résumé IA est inséré dans le corps de la page Notion. |

---

## 3. Exigences Techniques (High-Level)

- **Connecteurs :** Capacité à s'interfacer avec les API de Reddit et X (ou via des scrapers si les API sont restrictives).
- **Moteur LLM :** Utilisation d'un modèle de langage (type GPT-4o ou Claude 3.5) pour l'analyse du fichier de préférences, le scoring et le résumé.
- **Stockage des sources :** Une base de données légère pour mémoriser la liste des sources à scanner chaque jour.
- **Authentification Notion :** Utilisation d'un "Internal Integration Token" pour écrire dans la base de données cible.

---

## 4. Prochaines étapes (Post-MVP)

- Apprentissage par le feedback (ajuster le score selon tes interactions dans Notion).
- Gestion des liens externes (aller lire le contenu des articles partagés dans les tweets).
- Détection des doublons pour épurer encore plus la vue.
