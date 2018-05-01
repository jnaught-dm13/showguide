UPDATE seasons
SET season = $2, episode_id = $3 WHERE show_id = $1 AND user_id = $;

SELECT episode_id
FROM seasons
WHERE show_id = $1 AND user_id = $2;