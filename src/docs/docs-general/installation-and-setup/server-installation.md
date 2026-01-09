# Server installation
The following steps outline the installation process for the Bottle Rocket server.

## Requirements
### Docker
To maximize compatibility, Bottle Rocket is deployed as a 
[Docker container](https://www.docker.com/resources/what-container/).

This means you will need to [install Docker on your server](https://docs.docker.com/engine/install/), 
or have an existing Docker-capable server, in order to deploy the Bottle Rocket server.

### MongoDb
Bottle Rocket uses [MongoDB](https://www.mongodb.com/) as its principal database and will require an accessible
MongoDB server instance (with a provisioned admin account) to connect to.

* [Using MongoDB with Docker](https://www.mongodb.com/resources/products/compatibilities/docker)

Alternatively, you can use the supplied 
[docker-compose](https://github.com/gman-au/bottle-rocket-server/blob/master/.compose/bottle-rocket/docker-compose.yml)
file to run your own MongoDB Docker container alongside the Bottle Rocket server container.

## Installation

:::note
The Bottle Rocket service is comprised of **two** separate Docker images:
* An API server that connects directly to file storage and the MongoDB database
* A UI app that allows simpler administration of the Bottle Rocket server

For convenience, the included `docker-compose.yml` file includes setup of both images.

Additionally, the compose file also isolates all three images (UI, API, MongoDB) 
into a separate [Docker network](https://docs.docker.com/engine/network/).
:::

### Pull the latest Docker images

With Docker installed on your server, run the following commands to pull the latest Bottle Rocket Docker images:

```
docker pull ghcr.io/gman-au/bottle-rocket-server/bottle-rocket-server-api:latest
docker pull ghcr.io/gman-au/bottle-rocket-server/bottle-rocket-server-web:latest
```
### Running the Docker compose file (recommended)
* Download the `docker-compose.yml` and `.env` files from the 
[server repository](https://github.com/gman-au/bottle-rocket-server/tree/master/.compose/bottle-rocket).
* You can adjust the default values in the `.env` file as needed if you wish to modify the MongoDB defaults or network name.
* In a terminal / shell window, navigate to the download location and run the following command to start the compose action:
```
docker compose up -d
```
* To stop the containers, run:
```
docker compose down
```
### Running the API image (standalone)
#### Port configuration
* By default, the API image will run on (internal) port 8080.
* Configure the external port as desired e.g. `-p 3001:8080`
#### Bind mounts
* Captured scans will be stored in a configured path, so set this up as a 
[bind mount](https://docs.docker.com/engine/storage/bind-mounts/) e.g. `-v /api-scans:/bottle-rocket/scans`
#### Environment variables
| Variable | Description                                                                                                                                                                                                                                      |
| --- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`LocalBlobConfigurationOptions__LocalBasePath` | Set this to the base folder on the server where captures will be stored. <br/> e.g. if you have mounted the volume as in the above example, this value would be `/bottle-rocket`.                                                                |
|`LocalBlobConfigurationOptions__LocalSubfolder` | Set this to the dedicated sub folder on the server where captures will be stored. <br/> e.g. if you have mounted the volume as in the above example, this value would be `scans`.                                                                |
|`MongoDbConfigurationOptions__ConnectionString` | Set this to the relative connection string to connect to the desired MongoDB database. You will need to include the admin credentials in this connection string value.                                                                           |
|`MongoDbConfigurationOptions__DatabaseName` | Set this to the name of the Bottle Rocket database as created in the MongoDB database. It can be any MongoDB-compatible database name but it mustn't conflict with any existing database on that DB server. <br/>`BottleRocket` is a good value.|

### Running the UI image (standalone)
#### Port configuration
* By default, the API image will run on (internal) port 8080.
* Configure the external port as desired e.g. `-p 3000:8080`
#### Environment variables
| Variable | Description                                                                                                                                                                                                                                                          |
| --- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`ApiConfigurationOptions__BaseUrl` | Set this to the relative base URL of the running API image. <br/> You may be able to use `http://127.0.0.1:3001` or `http://localhost:3001` if you deployed the API image standalone as above; otherwise you may need to refer to the running container by its name. |
