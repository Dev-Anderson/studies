package main

import "fmt"

const (
	A = iota
	B
	C
)

const (
	a = iota * 10
	b
	c
	d = iota * 2
)

func main() {
	fmt.Println(A)
	fmt.Println(B)
	fmt.Println(C)
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
}
