import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Angular Portfolio Website", summary: "Developed a dynamic and responsive portfolio website using Angular and Bootstrap, incorporating various functionalities such as interactive elements, responsive design, and efficient navigation to enhance user experience.", description: "Dummy Description", projectLink: '#', tags: [Tag.ANGULAR, Tag.BOOTSTRAP], pictures: ["../../assets/Website.png"]},
    {id: 1, name: "zKPass Protocol using ZKP", summary: "Engineered a novel authentication method leveraging zero-knowledge proofs (ZKPs) to ensure 100% user privacy and security in blockchain networks and used JavaScript, HTML, Bootstrap, NodeJS, and JAVA to demonstrate the authentication model.", description: "Dummy Description", projectLink: 'https://github.com/singhv6899/zKPassProtocol', tags: [Tag.JAVA, Tag.JAVASCRIPT,Tag.HTML,Tag.BOOTSTRAP, Tag.NODE], pictures: []},
    {id: 2, name: "Study Room Reservation System", summary: "Implemented a 75% more efficient real-time study room reservation application for the University of Cincinnati using Angular, JavaScript, and Java to ensure user interfaces with seamless front-end and back-end integration.", description: "Dummy Description", projectLink: '', tags: [Tag.ANGULAR, Tag.JAVASCRIPT, Tag.JAVA], pictures: []},
    {id: 3, name: "Number Plate Recognition System", summary: "Automated parking lot security with OpenCV and Python, detecting 500+ car plates for MySQL storage, and developed a .Net, C# webpage for user account management and vehicle payments.", description: "Dummy Description", projectLink: '', tags: [Tag.MYSQL, Tag.PYTHON, Tag.OPENCV, Tag.NET, Tag.C], pictures: []},
    {id: 4, name: " Kisan Vikas (Development of Farmers) – Mobile Application", summary: "Architected a mobile application for farmers to estimate the prices and sell their goods at profitable prices directly into the market using Android Studio, XML schemas, and learning algorithms.", description: "Dummy Description", projectLink: '', tags: [Tag.ANDROID, Tag.XML], pictures: []},
    {id: 5, name: "Hibernate Demo App", summary: "Java application in association with MySQL using Hibernate to map jab objects to database table to carry out the CRUD operations.", description: "Dummy Description", projectLink: 'https://github.com/singhv6899/HibernateDemo', tags: [Tag.JAVA, Tag.HIBERNATE, Tag.MYSQL], pictures: []},
    {id: 6, name: "Angular Http Services App", summary: "Demonstrated http services - PUT, POST, GET, DELETE at the client side using angular.", description: "Dummy Description", projectLink: 'https://github.com/singhv6899/Http-Services-Angular', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: []},
    {id: 7, name: "Jenkin-Docker-AWSS3 App", summary: "Demonstrating CI/CD pipeline using Jenkins, made usage of Docker for containerization and Amazon S3 for hosting the static website.", description: "Dummy Description", projectLink: 'https://github.com/singhv6899/Jenkins-Docker-AWSS3-Demo', tags: [Tag.JENKIN, Tag.AWS,Tag.DOCKER], pictures: []},
  ]
  
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project{
    let project = this.projects.find(project => project.id ===id);
    if(project === undefined){
      throw new TypeError('There is no project tha matches the id: '+id);
    }

    return project;
  }
}
