INSERT INTO favorites
    ( show_id, name, image, genre, network, user_id)
VALUES
    ($1, $2, $3, $4, $5, $6);
INSERT INTO seasons
    (show_id,user_id)
VALUES
    ($1, $6);