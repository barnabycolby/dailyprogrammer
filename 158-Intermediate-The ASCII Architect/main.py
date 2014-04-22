# Read the input file into a string
with open("input.txt", "r") as inputFile:
	inputString=inputFile.read().replace('\n','')

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
