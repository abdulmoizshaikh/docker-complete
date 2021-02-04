# Docker-complete

Difference between Docker Image and Container?

Docker Image is a set of files which has no state, whereas Docker Container is the instantiation of Docker Image. In other words, Docker Container is the run time instance of images.

# Usefull docker commands

every time we do some changes in code we have to make build for publish on docker container.

**Build an image from a Dockerfile**

> Docker build

> Docker build --help //for help

**To give a docker build tag/ name**

. means current working dir

> docker build --tag hello-world .

**For check list of images you have on your machine**

> docker images

**For help docker run command if 2 images have same name**

> docker run --help

**For run docker image**

> docker run image-name

> like docker run hello-world

                OR

you can run docker image by using image ID

> docker images

> docker run image_id

**For stop docker container open new terminal tab and run these commands**

1. for get running docker containers.

   ps for processos

> docker ps //for checking processes that are in running state

2.  for show every thing

> docker ps -a

2.for stop running container by container name

> docker stop container-name

**for remove docker image**

> docker rm image_name

**-d detached tag in order to run docker container in the background**

docker run -p 8080:80 --name random-name -d name-of_image

here
-p tag is for PORT number
we are mapping local machine port 8080 to server port/ inside the container 80 i.e 8080:80
--name gives a docker a random name

--name docker-name

E.g:
docker run -p 8080:80 --name hello -d hello-world

then for check docker up and running hit

> docker ps

for stop process

> docker stop hello

then you can start container back again by

> docker start hello

**To See docker logs of a container**

> docker logs container-name

**You can also run docker run -f (for follow or listening logs in real time )**

> docker logs -f name_of_container

you can exit from logs terminal using CTRL + C

you can list all container by command

> docker ps -a

> docker rm container-name //to remove container from docker

# Publishing local image to Docker hub

**Steps Commands**

1. create repo on docker hub
2. copy the command use to push image to docker hub
   goto terminal run
3. docker images
   create tag of image with usename/image_name
4. docker tag hello-world muhammadmoiz/hello-world
5. docker images

Now you can push image to docker hub.

6. docker login
7. docker push muhammadmoiz/hello-world

**Command to remove the image**

> docker images

> docker rmi muhammadmoiz/hello-world

command for pull image from hub

> docker pull muhammadmoiz/hello-world

# Docker Compose

for managing multiple application at once
