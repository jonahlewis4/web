update a deployment to deploy a new image
```bash
kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=docker.io/jocatalin/kubernetes-bootcamp:v2
```

update a service to a nodeport
```bash
kubectl patch svc kubernetes-bootcamp -p '{"spec": {"type":"NodePort"}}'
```

get status of a current rollout (rollout is the live updating process that gets around downtime)
```bash
kubectl rollout status deployments/kubernetes-bootcamp
```

revert a deployment to its previously known state
```bash
kubectl rollout undo deployments/kubernetes-bootcamp
```
