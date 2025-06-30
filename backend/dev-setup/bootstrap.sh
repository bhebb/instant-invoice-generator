#!/usr/bin/env bash
set -e

# Assure-toi que pyenv est chargé dans le shell
if command -v pyenv &> /dev/null; then
  export PYENV_ROOT="${PYENV_ROOT:-$HOME/.pyenv}"
  export PATH="$PYENV_ROOT/bin:$PATH"
  eval "$(pyenv init -)"
fi

# Utilise la version locale définie par pyenv
PYTHON=$(pyenv which python)

echo "🔧 Utilisation de $PYTHON"

# Crée le venv si nécessaire
if [ ! -d ".venv" ]; then
  echo "📦 Création de l'environnement virtuel..."
  $PYTHON -m venv .venv
fi

# Active l'environnement virtuel
source .venv/bin/activate

# Installe les dépendances
echo "📥 Installation des dépendances..."
pip install --upgrade pip
pip install -r requirements.txt

echo "✅ Setup terminé avec succès."
