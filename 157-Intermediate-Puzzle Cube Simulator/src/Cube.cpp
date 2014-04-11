#include "Cube.h"

#include <cstring>

using namespace std;

Cube::Cube() {
	// Initialise the cube faces
	this->bottom = new CubeFace(w);
	this->top    = new CubeFace(y);
	this->front  = new CubeFace(r);
	this->right  = new CubeFace(g);
	this->back   = new CubeFace(o);
	this->left   = new CubeFace(b);
}

void Cube::applyMove(string moveString) {
	CubeColour oldRow[3];
	if (moveString.compare("F") == 0) {
	}
	else if (moveString.compare("B") == 0) {
	}
	else if (moveString.compare("R") == 0) {
	}
	else if (moveString.compare("L") == 0) {
	}
	else if (moveString.compare("T") == 0) {
	}
	else if (moveString.compare("B") == 0) {
	}

	// Apply prime moves
	else if (moveString[moveString.length() - 1] == '\'') {
		string singleMoveString = moveString.substr(0, 1);
		this->applyMove(singleMoveString);
		this->applyMove(singleMoveString);
		this->applyMove(singleMoveString);
	}

	// Apply double moves
	else if (moveString[moveString.length() - 1] == '2') {
		string singleMoveString = moveString.substr(0, 1);
		this->applyMove(singleMoveString);
		this->applyMove(singleMoveString);
	}
}

Cube::~Cube() {
	// Free the memory containing the cube
	delete this->bottom;
	delete this->top;
	delete this->front;
	delete this->right;
	delete this->back;
	delete this->left;
}
