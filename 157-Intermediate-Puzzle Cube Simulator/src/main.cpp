#include <iostream>

#include "Cube.h"

using namespace std;

int main(int argc, char *argv[]) {
	// Print a title
	cout << "Puzzle Cube Simulator" << endl;
	cout << "--------------------------------" << endl;

	// Initialise the cube
	Cube cube;

	// Apply each move in turn
	for (int i = 1; i < argc; i++) {
		cout << "Applying move: " << argv[i] << endl;
		cube.applyMove(argv[i]);
	}

	// Print the output
//	std::cout << endl << cube.front() << endl;

	// Return cleanly
	return 0;
}
