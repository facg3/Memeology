BEGIN;


DROP TABLE IF EXISTS superheroes CASCADE;

CREATE TABLE superheroes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  superpower VARCHAR(100) NOT NULL
);

INSERT INTO superheroes (name, superpower) VALUES ('superman','he can fly'),
('batman','none');


COMMIT;
