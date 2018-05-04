-- DELETE FROM favorites WHERE user_id = $1 and show_id = $2
DELETE FROM seasons s
USING favorites f
WHERE f.user_id = s.user_id and f.show_id = s.show_id AND f.user_id = $1 AND s.show_id = $2;

DELETE FROM favorites WHERE user_id = $1 and show_id = $2

RETURNING *