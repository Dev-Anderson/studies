package main

import "fmt"

const (
	// Cores
	Red = iota
	Green
	Blue

	// Flags
	_    = iota
	Read = 1 << iota
	Write
	Execute

	// Tamanhos
	_  = iota // ignora o primeiro valor
	KB = 1 << (10 * iota)
	MB
	GB
)

func main() {
	fmt.Println("Cores:")
	fmt.Println(Red, Green, Blue) // Output: 0 1 2

	fmt.Println("\nFlags:")
	fmt.Println(Read, Write, Execute) // Output: 2 4 8

	fmt.Println("\nTamanhos:")
	fmt.Println(KB, MB, GB) // Output: 1024 1048576 1073741824
}
