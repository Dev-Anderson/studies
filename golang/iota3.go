package main

import "fmt"

const (
	a, b = iota + 1, iota + 2 //a == 1, b == 2
	c, d                      // c == 2, d == 3
	e, f                      // e == 3, f == 4
)

func main() {
	fmt.Println(a, b) // output: 1 2
	fmt.Println(c, d) // output: 2 3
	fmt.Println(e, f) // output: 3 4
}
