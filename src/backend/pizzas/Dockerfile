FROM python:3.10.5-bullseye

WORKDIR /workspace/src/backend/pizzas

COPY ./src/backend/pizzas .

# Add a new default user.
RUN useradd --no-log-init -r -m -u 1000 -g src src \
    && echo "src ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers \
    && chown -R src /workspace/src/backend/pizzas
USER src

# Config Python and install Poetry.
ENV PYTHONUNBUFFERED 1
ENV PYTHONPYCACHEPREFIX /tmp
RUN pip install poetry \
    && "$HOME"/.local/bin/poetry config virtualenvs.in-project true

# Install requirements.
RUN rm -rf ./.venv \
    && "$HOME"/.local/bin/poetry install

EXPOSE 8002

CMD ["sh", "-c", "$HOME/.local/bin/poetry run uvicorn src.main:app --host 0.0.0.0 --port 8002"]
