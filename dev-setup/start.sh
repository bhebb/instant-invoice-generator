#!/bin/bash
source .venv/bin/activate
uvicorn app.core.api.ping_api:app --reload
