# Checks whether a number is a torn number
def isTornNumber(n):
	# Get the first half of the number
	firstHalf = n // 100

	# Get the second half of the number
	secondHalf = n % 100

	# Calculate whether the number is torn
	return ((firstHalf + secondHalf) ** 2) == n

# Test every possible 4 digit number
for i in range(1000,10000):
	if isTornNumber(i):
		if i != 3025:
			print "Found a torn number: {}".format(i)
