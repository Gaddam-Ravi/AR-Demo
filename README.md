**Project** **Summary**

Built a production-style DevOps pipeline on AWS that automates infrastructure provisioning, application deployment, and monitoring using Terraform, Jenkins, Docker, Kubernetes, ArgoCD, Prometheus, and Grafana.
**AWS DevOps CI/CD Project**

End-to-end DevOps project demonstrating Infrastructure as Code, CI/CD automation, containerization, GitOps, and monitoring on AWS.

**Tech Stack**

AWS (EC2, EKS, VPC, S3, IAM)
Terraform
Jenkins
Docker
Kubernetes
ArgoCD
Prometheus
Grafana
GitHub

**Architecture** 

Developer → GitHub → Jenkins → Docker → ECR/Docker Hub → ArgoCD → EKS → Prometheus → Grafana

**Key Features**

✅ Infrastructure provisioning using Terraform

✅ Automated CI/CD pipeline with Jenkins

✅ Dockerized application deployment

✅ Kubernetes orchestration on EKS

✅ GitOps implementation using ArgoCD

✅ Monitoring with Prometheus & Grafana

**Repository Structure**

├── terraform/
├── jenkins/
├── docker/
├── kubernetes/
├── argocd/
├── monitoring/
└── README.md

**Deployment Workflow** 

Push code to GitHub
Jenkins triggers CI pipeline
Docker image is built and pushed
ArgoCD detects manifest changes
Application is deployed to EKS
Prometheus & Grafana monitor workloads

**Screenshots**

AWS Infrastructure
Jenkins Pipeline
Docker Images
EKS Cluster
ArgoCD Dashboard
Grafana Dashboard

**Skills Demonstrated**

AWS Cloud
Infrastructure as Code
CI/CD Automation
Containerization
Kubernetes
GitOps
Monitoring & Observability

**Author**

Gaddam

Aspiring DevOps Engineer | AWS Cloud Enthusiast
