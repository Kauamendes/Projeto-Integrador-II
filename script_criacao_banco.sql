CREATE SEQUENCE id_jogadores_seq;

CREATE TABLE IF NOT EXISTS jogadores (
    id BIGINT NOT NULL DEFAULT nextval('id_jogadores_seq'),
    nome TEXT,
    email TEXT NOT NULL,
    senha TEXT,
    vidas INTEGER,
    pontuacao INTEGER,
    PRIMARY KEY (id)
);