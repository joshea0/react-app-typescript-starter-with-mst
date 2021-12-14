# exit when any command fails
set -e

export CI=true

yarn
yarn lint
yarn test