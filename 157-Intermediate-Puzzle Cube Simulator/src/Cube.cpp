#include "Cube.h"

#include <cstring>

using namespace std;

Cube::Cube() {
	// Initialise the cube faces
	this->down = new CubeFace(w);
	this->up    = new CubeFace(y);
	this->front  = new CubeFace(r);
	this->right  = new CubeFace(g);
	this->back   = new CubeFace(o);
	this->left   = new CubeFace(b);
}

CubeFace Cube::getFront() {
	return *(this->front);
}

void Cube::applyMove(string moveString) {
	CubeColour *oldRow;
	if (moveString.compare("F") == 0) {
		this->front->rotateClockwise();
		oldRow = this->right->replaceLeftRow(this->up->getDownRow());
		oldRow = this->down->replaceUpRow(oldRow);
		oldRow = this->left->replaceRightRow(oldRow);
		this->up->replaceDownRow(oldRow);
	}
	else if (moveString.compare("B") == 0) {
		this->back->rotateClockwise();
		oldRow = this->up->replaceUpRow(this->right->getRightRow());
		oldRow = this->left->replaceLeftRow(oldRow);
		oldRow = this->down->replaceDownRow(oldRow);
		this->right->replaceRightRow(oldRow);
	}
	else if (moveString.compare("R") == 0) {
		this->right->rotateClockwise();
		oldRow = this->up->replaceRightRow(this->front->getRightRow());
		oldRow = this->back->replaceLeftRow(oldRow);
		oldRow = this->down->replaceRightRow(oldRow);
		this->front->replaceRightRow(oldRow);
	}
	else if (moveString.compare("L") == 0) {
		this->left->rotateClockwise();
		oldRow = this->front->replaceLeftRow(this->up->getLeftRow());
		oldRow = this->down->replaceLeftRow(oldRow);
		oldRow = this->back->replaceRightRow(oldRow);
		this->up->replaceLeftRow(oldRow);
	}
	else if (moveString.compare("U") == 0) {
		this->up->rotateClockwise();
		oldRow = this->left->replaceUpRow(this->front->getUpRow());
		oldRow = this->back->replaceUpRow(oldRow);
		oldRow = this->right->replaceUpRow(oldRow);
		this->front->replaceUpRow(oldRow);
	}
	else if (moveString.compare("D") == 0) {
	}

	// Apply prime and double moves
	else if (moveString.length() > 1) {
		// Calculate the single move
		string singleMoveString = moveString.substr(0, 1);
		
		// Calculate how many times it should be applied
		int numberOfTimesToApply = 0;
		if (moveString[1] == '2') {
			numberOfTimesToApply = 2;
		}
		else if (moveString[1] == '\'') {
			numberOfTimesToApply = 3;
		}
		
		// Apply it
		for (int i = 0; i < numberOfTimesToApply; i++) {
			this->applyMove(singleMoveString);
		}
	}
}

Cube::~Cube() {
	// Free the memory containing the cube
	delete this->down;
	delete this->up;
	delete this->front;
	delete this->right;
	delete this->back;
	delete this->left;
}
