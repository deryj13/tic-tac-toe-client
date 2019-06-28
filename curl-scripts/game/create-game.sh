# VARIABLE=VALUE sh curl-scripts/game/create-game.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
--include \
--request POST \
--header "Authorization: Token token=${TOKEN}" \
--data '{}'

echo
