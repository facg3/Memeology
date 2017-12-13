BEGIN;


CREATE TABLE memes (
id SERIAL PRIMARY KEY,
url VARCHAR(100) NOT NULL,
<<<<<<< HEAD
tags VARCHAR(100) NOT NULL
=======
tags VARCHAR(100) NOT NULL,
likes INTEGER DEFAULT 0

>>>>>>> 0391804fe3e59d0bf23c7eabeec9b2fabceb6ebe
);


INSERT INTO memes (url,tags) VALUES
('http://quotesnhumor.com/wp-content/uploads/2015/09/Top-40-Funniest-Minions-Memes-funny.jpg','minion woman');



COMMIT;
