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
	cout << endl;
	cout << "Up"    << endl << cube.getUp().toString()    << endl << endl;
	cout << "Down"  << endl << cube.getDown().toString()  << endl << endl;
	cout << "Left"  << endl << cube.getLeft().toString()  << endl << endl;
	cout << "Right" << endl << cube.getRight().toString() << endl << endl;
	cout << "Front" << endl << cube.getFront().toString() << endl << endl;
	cout << "Back"  << endl << cube.getBack().toString()  << endl;

	// Return cleanly
	return 0;
}
