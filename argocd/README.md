# ArgoCD Deployment

For a deployment with ArgoCD, you first need to install Argo on your cluster. Use the following commands, or follow the instructions [here](https://argo-cd.readthedocs.io/en/stable/getting_started/):

```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

After that, to create the application resource for Argo use the following command:

```
kubectl apply -n argocd -f amazing-people-app.yaml
```
