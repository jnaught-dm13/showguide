INSERT INTO seasons
    (show_id,season, episode_id,user_id)
VALUES
    ($1, $2,$3,$4);

SELECT episode_id
FROM seasons
WHERE show_id = $1 AND user_id = $4;



