# ece-devops-2023-fall-grp04-LELIEVRE-PHAM
# User API web application

It is a basic NodeJS web application exposing REST API that creates and stores user parameters in [Redis database](https://redis.io/).

## Functionality

1. Start a web server
2. Create a user
<<<<<<< HEAD
<<<<<<< HEAD
3. Create/Get a user
=======
3.Get a user
>>>>>>> 0486d9f (feat: readme update)
=======
3. Create/Get a user
>>>>>>> bd1795c (fix:fixed vagrant for ssh)
4. Vagrant
5. Ansible
6  Docker
7. Docker Compose
8. Kubernetes


## Installation

This application is written on NodeJS and it uses Redis database.

1. [Install NodeJS](https://nodejs.org/en/download/)

2. [Install Redis](https://redis.io/download)

3. [Install Docker](https://docs.docker.com/engine/install/)

4. [Install Minikube](https://kubernetes.io/fr/docs/tasks/tools/install-minikube/)
    
5. [Install Vagrant](https://developer.hashicorp.com/vagrant/install?product_intent=vagrant)


6. Install application

Go to the root directory of the application (where `package.json` file located) and run:

```
npm install 
```

## UserApi

1. Start a web server

From the root directory of the project run:

```
npm start
```

It will start a web server available in your browser at http://localhost:3000.

2. Create a user

Send a POST (REST protocol) request using terminal:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"sergkudinov","firstname":"sergei","lastname":"kudinov"}' \
  http://localhost:3000/user
```

It will output:

```
{"status":"success","msg":"OK"}
```

Another way to test your REST API is to use [Postman](https://www.postman.com/).

## Testing

From the root directory of the project, run:

```
npm test
```

## Vagrant / Ansible

1. From the iac folder , run:

```
vagrant up
```

2. From there you can access the terminal of vagrant with SSH using:

```
vagrant ssh
```

3. You should be able to see the files of the app inside the container using :

```
ls
```


## Docker and Docker Compose

You can either build the image from the userapi folder using :

```
<<<<<<< HEAD
<<<<<<< HEAD
docker build . 
=======
vagrant ssh
>>>>>>> 0486d9f (feat: readme update)
=======
docker build . 
>>>>>>> bd1795c (fix:fixed vagrant for ssh)
```

Or pull the image from the Docker repository :

```
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bd1795c (fix:fixed vagrant for ssh)
docker pull noepham/eceuserapi
```

Then build the image from the image you just pulled :


```
docker run noepham/eceuserapi
<<<<<<< HEAD
=======
vagrant ssh
>>>>>>> 0486d9f (feat: readme update)
=======
>>>>>>> bd1795c (fix:fixed vagrant for ssh)
```

Afterwards , you should be able to use the image if you have redis running in the background:


IF you want to start the application directly from the root of the repository you can run:

```
vagrant ssh
```

The application should be up and ready to use :


## Kubernetes 

Start by using the minikube start command from the k8s file:

```
minikube start
```

You will then need to run the deployment , service and persitent-volume and persistent-volume-claim to run the app:

```
vagrant ssh
```

You should be able to try one of the command like:

```
vagrant ssh
```

Using the minikube ip and port , you can get them by running : 

```
vagrant ssh
```

And:

```
vagrant ssh
```

## Istio


## Routing













