Create a namespace 
```bash
kubectl create namespace a-team
```

create virtual cluster 
```bash
vcluster create my-vcluster --namespace a-team
```

return to previous kube context 
```bash
vcluster disconnect
```

connect to a virtual cluster
```bash
vcluster connect my-vcluster --namespace a-team
```