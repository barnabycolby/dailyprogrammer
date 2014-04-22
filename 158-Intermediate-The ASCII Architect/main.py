from __future__ import print_function

# Read the input file into a string
with open("input.txt", "r") as inputFile:
	inputString=inputFile.read().replace('\n','')

def mapCharToSymbol(c):
	dictionary = {1:'+', 2:'+', 3:'_', 4:'_', 5:'*', 6:'*', 7:'*', 8:'-', 9:'-', 10:'-'}
	return dictionary[c]

# Calculate the height of the image
height = 0
i = 0
while i < len(inputString):
	c = inputString[i]
	value = 0
	# If character is a number, add it's value to the count
	if c.isdigit():
		value += int(c)
		# Skip the current character in the loop because we've already dealt with it
		i += 1
		c = inputString[i]
	
	# Add the characters value to the count
	# The ASCII value of a is 97
	value += ord(c) - 96

	# Check whether the value is greater than the current height value
	if value > height:
		# Set the new height
		height = value

	# Increment the counter
	i += 1

# Print the characters row by row
for rowIndex in reversed(range(1, height+1)):
	# Iterate over the characters in the list
	i = 0
	while i < len(inputString):
		c = inputString[i]
		value = 0

		# If character is a number, add it's value to the count
		spaceCount = 0
		if c.isdigit():
			spaceCount += int(c)
			value += spaceCount
			# Skip the current character in the loop because we've already dealt with it
			i += 1
			c = inputString[i]

		# Add the characters value to the count
		# The ASCII value of a is 97
		value += ord(c) - 96

		# Calculate whether a symbol should be printed
		if value >= rowIndex:
			if rowIndex > spaceCount:
				# Print the symbol
				symbolValue = rowIndex - spaceCount
				print(mapCharToSymbol(symbolValue), end="")
			else:
				# Print a space
				print(' ', end="")
		else:
			# Print a space
			print(' ', end="")

		# Increment the counter
		i += 1

	# Print a new line
	print()
