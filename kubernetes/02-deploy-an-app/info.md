create a kubernetes deployment.
Deployments search for available nodes (machines)
and try to run that image on the machine. The image runs as a pod.
```bash
kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
```

create a proxy (allows commncation into the cluster private network)
```bash
kubectl proxy
```

export name of only pod into POD_NAME (only works if there is one pod)
```bash
export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
echo Name of the Pod: $POD_NAME
```