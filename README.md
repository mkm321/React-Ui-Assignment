# Comfistay - 1.0

	Hotels Search Website

	Install Nodejs LTS version from https://nodejs.org/en/

	Install create-react-app : npm install -g create-react-app

	Create react app for Comfistay : npx create-react-app hotel

	Packages need to install:

		npm install --save firebase

		npm install --save moment

		npm install --save react-activity-indicator

		npm install --save react-datepicker

		npm install --save react-router-dom

		npm install --save react-star-rating-component

		npm install --save redux

		npm install --save react-redux

		npm install --save redux-thunk

		npm install -g jest-cli

		npm install --save@22.4.4

		npm i --save-dev enzyme

		npm i --save react@16 react-dom@16

		npm i --save-dev enzyme enzyme-adapter-react-16

	To start server, open cmd and go to project directory and run a command : npm start

	Deployment :-
	
		Git Usage-Used to create a repo and upload the project.
		AWS Usage- EC2 used to create an instance.
		Jenkins Usage-Used to automate the process so that with every new feature added with git push changes are deployed to the server as well. 


		1) From the AWS Management Console, launch the Amazon EC2 instance from an Amazon Machine Image (AMI) that has the base operating system you want. This project uses an Amazon Linux 64-bit AMI.
		2) Choose a security group that will allow SSH access as well as configure ports 80, 143, 22 and 3000 for HTTP, HTTPS, SSH and Node.
		3) Connect to the instance via SSH.
		4) Install the required packages as mentioned above, on the machine.
		5) Run the required server as mentioned above in Readme.
		6) Download Generic package of Jenkins from https://jenkins.io/
		7) Run command 
                    java -jar jenkins.war
  		The default port where jenkins run is
                     http://localhost:8080
		8)Open jenkins using the address above in your browser.
		9)Login and add a new item and in the configurations click on Git and add your git repo and on Poll SCM add the required schedule.
		10)For Build add the required commands on Windows Batch Command.
          Steps-
          1)Pull the git repo (git pull <repository>)
          2)Copy the repo to EC2 server(pscp --recursive -i "key_pair_name.ppk" source_project_address  Destination_remote_server_address)
		11)Save and apply the changes.
		12)Provide an Elastic ip to the AWS instance.
		13)Now use that ip to overview the project.

	Contributors :- 

	Gurbaksh Singh Gabbi - Deployment, Automation & Integration
 
	Ashwarya Joshi - Deployment, Automation & Integration

	Vishwas Chauhan - React, CSS for both page, Integration  & Component structure

	Ragul Krishnan A - Components Structure and Management, Redux, Cloud Firestore (Hotels Search Page),Integration

	Mohit Mehndiratta - React and css for Hotel Search Page, Jest, Integration, Component structure & Routing

	Raaja Gouthaman K R - React and css for Documentation Page , Integration

	Shreea Kapoor - React and css for Documentation Page, Integration and Web Accessibility

	Neha Anand - React and css for Documentation Page, Integration
