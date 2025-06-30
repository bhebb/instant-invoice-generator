#!/bin/bash

if [ -d ".venv" ]; then
  source .venv/bin/activate
fi

mkdocs serve -a 127.0.0.1:8001
