# 🧾 Instant Invoice Generator

Un générateur de factures simple, extensible et automatisable pour freelances, travailleurs autonomes et PME.

---

## 🚀 Fonctionnalités

- Génération de factures à partir de modèles configurables
- Support multi-langue, multi-devise
- Planification et génération récurrente (bientôt)
- Envoi par email (bientôt)
- API RESTful (FastAPI)
- Documentation intégrée (MkDocs)
- Authentification, monitoring et versionnement planifiés

---

## 🖥️ Installation locale avec une version spécifique de Python (`pyenv`)

> Ce projet utilise une version spécifique de Python, gérée localement avec [`pyenv`](https://github.com/pyenv/pyenv).

### ⚙️ Prérequis

- Python ≥ 3.11 recommandé (ex. : 3.12.3)
- `pyenv` installé ([guide ici](https://github.com/pyenv/pyenv#installation))

### 🔧 Étapes

```bash
# 1. Affiche les versions disponibles
pyenv install --list

# 2. Installe la version souhaitée (si ce n'est pas déjà fait)
pyenv install 3.12.3

# 3. Dans le dossier du projet, force cette version localement
pyenv local 3.12.3
# Cela crée un fichier `.python-version`

# 4. Crée un environnement virtuel isolé basé sur cette version
Lancer bootstrap.sh
bash dev-setup/bootstrap.sh

# 5. Installe les dépendances du projet
pip install -r requirements.txt
```

➡️ Le projet utilise maintenant Python **3.12.3** localement sans affecter le reste du système.

---

## 📦 Démarrage du backend

```bash
 bash dev-setup/start.sh
```

---

## 📦 Démarrage du serveur de doc propre au projet

```bash
 bash dev-setup/start.-mkdocssh
```

---

## 🧪 Tests

```bash
pytest
```

---

## 🧾 Documentation

La documentation technique se trouve dans le dossier `docs/` et est gérée avec `mkdocs`.

```bash
mkdocs serve
```

---

## 🔒 Authentification (à venir)

- JWT Token
- OAuth2 ou intégration Auth0 / Clerk / Supabase / maison

---

## 📊 Monitoring (à venir)

- `/metrics`, `/uptime`, `/version`
- Intégration Prometheus via `prometheus-fastapi-instrumentator`
- Logs structurés (`loguru`, `sentry`, etc.)

---

## 📄 Licence

MIT – libre d'utilisation et de modification.
