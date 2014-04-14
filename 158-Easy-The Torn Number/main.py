# Checks whether a number is a torn number
def isTornNumber(n):
	# Get the first half of the number
	firstHalf = n // 100

	# Get the second half of the number
	secondHalf = n % 100

	# Calculate whether the number is torn
	return ((firstHalf + secondHalf) ** 2) == n

# Checks whether the four digits are all different
def allDifferent(n):
	# Get each digit
	first = n % 10
	second = (n // 10) % 10
	third = (n // 100) % 10
	fourth = n // 1000

	# Check that the numbers are all different
	if first != second and first != third and first != fourth:
		if second != third and second != fourth:
			if third != fourth:
				return True
	
	# Fallthrough
	return False

# Test every possible 4 digit number
for i in range(1000,10000):
	if isTornNumber(i) and allDifferent(i):
		if i != 3025:
			print "Found a torn number: {}".format(i)
