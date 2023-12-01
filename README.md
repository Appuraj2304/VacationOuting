# Vacation Outing

Welcome to the Vacation Outing Project! This project provides a simple web application for a tour and travel company. It includes information about destinations, tour packages, and a chatbot feature for user interaction.It allows users to quickly and easily choice , just one click to explore the India, and update events and tasks. We hope you enjoy and we look forward to your contributions!

Objective: The Vacation Outing project aims to simplify and enrich the travel experience by providing a centralized platform for users to plan, book, and manage their trips seamlessly. It leverages technology to offer a range of features that cater to the needs of travelers.


->Table of Contents

- Introduction
- Features
- Installation
- Technologies Used
- Project Structure
- Azure Services
- Demo Screenshots
- Demo Video
- Project URL
- Contributing

     

1.Introduction
The Vacation Outing project is an online platform designed to provide users with information about various travel destinations, tour packages, and the ability to plan and book their vacations. The project aims to create a seamless and enjoyable experience for users who are looking to explore and plan their next vacation

2.Features
1. Destination Information:
- Users can browse through detailed information about different travel destinations. Each destination page provides insights into the location, attractions, and key features, allowing users to make informed decisions about their travel preferences.
2. Tour Packages:
- The project offers a variety of tour packages tailored to different preferences and budgets. Users can explore packages for popular destinations, each presenting a unique travel experience. Information such as itinerary, pricing, and inclusions is provided to help users choose the package that suits them best.
3. User Registration and Authentication:
- To enhance the user experience and enable personalized services, users can create accounts on the platform. The registration process includes standard user authentication features like username and password.
4. Booking System:
- The project includes a booking system that allows users to select tour packages, choose travel dates, and specify the number of guests. The system provides a secure and straightforward process for users to confirm their bookings.
5. Chatbot Assistance:
- For instant assistance and information retrieval, a chatbot feature is integrated into the platform. Users can interact with the chatbot to get answers to common queries, receive travel recommendations, and access support services.
6. Privacy & Policy , Terms & Condition and FAQs:
- To ensure transparency and address user concerns, the project includes dedicated sections for privacy policies and frequently asked questions (FAQs). These sections provide users with clear information about data handling practices and common inquiries.

3.Installation
1.	Clone the repository: bash git clone https://github.com/Appuraj2304.git cd Vaction outing
2.	Install dependencies: bash npm install
3.	Start the Node.js server: node server/index.js
4.	Set up the database: bash create the SQLite database touch usersdb
5.	Start the application: bash npm start
6.	Open your web browser and go to http://localhost:5000 to view the application.
   
4.Technologies Used


->Frontend:


•	   HTML

•	   CSS

•	   JavaScript


->Backend:

•	   Node.js

•	   SQLite3

->Deployment:  

•       Azure App Service

•	   Azure Virtual Network (VNet)

•	   Azure AI Bot Service



5.Project Structure:

Vacation-Outing-project/
│
-├── public/              # Frontend HTML, CSS, JS files
-├── server/              # Node.js server files
│   ├── app.json       # Backend server logic
│   ├── db.sqlite      # SQLite database file
│   └── ...                  # Other backend files
│
├── README.md       # Project documentation

6.Azure Services

•    The project leverages the following Azure services:


->Azure App Service:
1.	Create an Azure App Service for Node.js.
2.	Set up continuous deployment from your Git repository.
3.	Configure the following environment variables in the Azure App Service:
           PORT (e.g., 3002)
           NODE_ENV (e.g., production)

   
->Azure Virtual Network (VNet):
1.	Set up a Virtual Network in the Azure Portal.
2.	Integrate your Azure App Service and Azure Blob Storage with the Virtual Network for enhanced security.
3.	Configure the necessary network rules and security groups.

7.Demo Screenshots

8.Demo Video

9.Project URL:
https://vacationouting1.azurewebsites.net/

10.Contributing
This project is a collaborative effort, and each team member has a specific role:
1.	Development & Deployment (appurajit2304@gmail.com):
-	I am responsible for coding and implementing new features.
-	To contribute, follow these steps:
a.	Fork the project.
b.	Create your feature branch: git checkout -b (https://github.com/Appuraj2304/VacationOuting)
c.	Commit your changes: git commit -m 'Add some feature'.
d.	Push to the branch: git push origin feature/your-feature.
e.	Submit a pull request.
f. deploying the application on Azure services.
g.	Ensure that the deployment is seamless and aligns with the project requirements.

2.	Documentation (yogeshkumarr48@gmail.com):
-	The Second team member is responsible for creating and updating the README file, including demo screenshots, demo video.
-	To contribute, follow these steps:
a.	Fork the project.
b.	Create your documentation branch: git checkout -b https://github.com/Appuraj2304/VacationOuting/main/README.md.
c.	Commit your changes: git commit -m 'Update README.md'.
d.	Push to the branch: git push origin main/README.md.
e.	Submit a pull request.

2.	Create a Azure AI service,Record Video and Voice Over (mohaneaj0349@gmail.com):
-	The Third team member is responsible for Recording video & Voice Over for the video.
-	To contribute, follow these steps:
a.   Create a AI service on azure
b.	Fork the project.
c.   Recording video when deploying project on Azure.
d.  Give Voice over for the recorded Video.

10. License
•	This project is licensed under the MIT License.

