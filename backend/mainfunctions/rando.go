package mfunc

import (
	"math/rand"
)

const letters = "abcdefghijklmnopqrstuvwxyz"
const nums = "1234567890"

func Genlet(n int) string {
	b := make([]byte, n)
	for i := range b {
		b[i] = letters[rand.Int63()%int64(len(letters))]
	}
	return string(b)
}

func Gennum(n int) string {
	b := make([]byte, n)
	for i := range b {
		b[i] = nums[rand.Int63()%int64(len(nums))]
	}
	return string(b)
}
