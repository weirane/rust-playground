ARG base_image=shepmaster/rust-nightly:latest
FROM ${base_image}

RUN cd /tmp && \
    git clone https://github.com/weirane/errorviz.git && \
    cd errorviz && cargo install --path . && cd .. && \
    git clone -b error_move https://github.com/rustviz/rustviz && \
    mkdir -p rustviz/src/examples/ERRORVIZ/input && \
    cd rustviz && cargo install --path . && cd ..

ENTRYPOINT ["/playground/tools/entrypoint.sh"]
