BEGIN;

DROP TABLE IF EXISTS tags CASCADE;
CREATE TABLE tags (
id SERIAL PRIMARY KEY,
meme_id  FOREIGN KEY,
tag VARCHAR(100) NOT NULL
);
INSERT INTO Memes (meme_id, tag) VALUES
(1, 'Every'),
(1, '9gagger'),
(1, ' after'),
(1, 'no-nut'),
(1, 'november'),
(2, 'great'),
(2, 'moment'),
(2, 'military'),
(2, 'history'),
(3,'Best'),
(3,'death'),
(3, 'scene'),
(3,'Merry'),
(3, 'christmas'),
(4,'Statue'),
(4, 'comes'),
(4, 'life'),
(4, 'defies'),
(4, 'gravity');

COMMIT;
DROP TABLE IF EXISTS memes CASCADE;
CREATE TABLE memes (
id SERIAL PRIMARY KEY,
url VARCHAR(100) NOT NULL,
likes INTEGER
);
INSERT INTO Memes (url,des, likes) VALUES
('https://img-9gag-fun.9cache.com/photo/aQeL9Mq_460sv.mp4','Every 9gagger after no-nut november', 1),
('https://img-9gag-fun.9cache.com/photo/ax0LVBM_460sv.mp4','A great moment in military history',1),
('https://img-9gag-fun.9cache.com/photo/ad9G759_460sv.mp4','Best death scene',1),
('https://img-9gag-fun.9cache.com/photo/aL8ZDjz_460sv.mp4','Merry christmas',1),
('https://img-9gag-fun.9cache.com/photo/av7MGZW_460sv.mp4','Statue comes to life, defies gravity',1);
COMMIT;
