ARG TPUC_DEV_IMAGE=sophgo/tpuc_dev:v3.4
FROM ${TPUC_DEV_IMAGE}

RUN python3 -m pip install --no-cache-dir tpu_mlir
