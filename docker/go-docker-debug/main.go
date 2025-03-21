package main

import "fmt"

func main() {
	i := int64(1)
	j := int64(1 << 32)
	for {
		fmt.Println("Hello World", i, ":", j)
		i++
		j--
	}
}
