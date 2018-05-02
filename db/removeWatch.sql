DELETE FROM seasons WHERE episode_id = $1 and user_id = $2;

SELECT episode_id
FROM seasons
WHERE show_id = $3 AND user_id = $2;

