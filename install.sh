docker stop eth_web
docker rm -v eth_web
docker rmi -f eth_web
docker build -t eth_web .
docker run -d --restart="always" --net host -v /home/cyber/config/ethweb.config.yml:/usr/config/ethweb.config.yml --name eth_web eth_web nodejs index.js --config /usr/config/ethweb.config.yml
docker attach --sig-proxy=false eth_web