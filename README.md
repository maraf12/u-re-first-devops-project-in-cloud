# DevOps Learning Path: AKS + ACR + Azure DevOps + Terraform

## 🚀 Overview

This project shows how to deploy a Node.js app to Azure Kubernetes Service (AKS) using:
- Infrastructure as Code (Terraform)
- Containerization with Docker
- Continuous Deployment via Azure DevOps pipelines

## 🛠 Project Structure

- `/terraform`: Infrastructure for ACR, AKS, and Resource Group
- `/app`: Node.js sample app + Dockerfile
- `/k8s`: Kubernetes deployment and service
- `.azure-pipelines.yml`: CI/CD workflow

## 📍 Step-by-Step Roadmap

1. **Provision Infrastructure** (Terraform)
2. **Build and Push Docker Image** (DevOps Agent → ACR)
3. **Deploy to AKS** (via Kubernetes YAML + pipeline)
4. **Automate via DevOps Pipelines**
5. **Use Self-hosted Agent if no free Microsoft parallelism**

## 💬 Sample Output

- Visit: `http://<external-ip>` → _🚀 Welcome to DevOps and your first app!_

## 🧪 Test Commands

```sh
az aks get-credentials --resource-group devops-rg --name devops-aks
kubectl get nodes
kubectl get pods
kubectl get svc
```

## 🔗 Resources

- [Terraform Provider for AzureRM](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
- [Azure DevOps Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)
- [AKS Docs](https://learn.microsoft.com/en-us/azure/aks/)
- [Docker Basics](https://docs.docker.com/get-started/)

## 🤝 Credits

Made by a real beginner learning DevOps for the first time 👩‍💻🔥