INSERT INTO seasons
    (show_id,season, episode_id,user_id)
VALUES
    ($1, $2,$3,$4);

SELECT episode_id
FROM seasons
WHERE show_id = $1 AND user_id = $4;

-- BEGIN
-- IF EXISTS (SELECT episode_id FROM seasons WHERE show_id = $1 AND episode_id = NULL AND user_id =$4) 
-- THEN 
-- UPDATE seasons SET episode_id = $3 WHERE show_id = $1 AND user_id =$4;

-- ELSE
-- INSERT INTO seasons (show_id, season,episode_id, user_id)
-- VALUES ($1,$2,$3,$4)
-- END IF;
-- END

