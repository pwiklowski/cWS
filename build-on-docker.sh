#!/bin/bash
cd "$(dirname "$0")"
set -e
docker build -f docker/Dockerfile -t cws-builder docker
docker run -v $(pwd):/cWS -it cws-builder bash -c "cd /cWS && make"
