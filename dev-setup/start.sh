#!/usr/bin/env bash
set -e

# Active pyenv si disponible
if command -v pyenv &> /dev/null; then
  export PYENV_ROOT="${PYENV_ROOT:-$HOME/.pyenv}"
  export PATH="$PYENV_ROOT/bin:$PATH"
  eval "$(pyenv init -)"
fi

# Active le venv
source .venv/bin/activate

# Lancer l'API
uvicorn app.main:app --reload
