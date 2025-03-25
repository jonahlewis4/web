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

connect and print out a kubeconfig
```bash
vcluster connect my-vcluster --project my-project --print --namespace a-team 
```

change kubeconfig to specific file.
```bash
export KUBECONFIG=${PWD}/kubeconfig.yaml
```

remove virtual cluster
```bash
vcluster --namespace a-team delete my-vcluster
```