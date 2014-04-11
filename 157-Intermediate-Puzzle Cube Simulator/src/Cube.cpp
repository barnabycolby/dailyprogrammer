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

CubeFace Cube::getFront() {
	return *(this->front);
}

void Cube::applyMove(string moveString) {
	CubeColour *oldRow;
	if (moveString.compare("F") == 0) {
		this->front->rotateClockwise();
		oldRow = this->right->replaceLeftRow(this->top->getBottomRow());
		oldRow = this->bottom->replaceTopRow(oldRow);
		oldRow = this->left->replaceRightRow(oldRow);
		this->top->replaceBottomRow(oldRow);
	}
	else if (moveString.compare("B") == 0) {
		this->back->rotateClockwise();
		oldRow = this->top->replaceTopRow(this->right->getRightRow());
		oldRow = this->left->replaceLeftRow(oldRow);
		oldRow = this->bottom->replaceBottomRow(oldRow);
		this->right->replaceRightRow(oldRow);
	}
	else if (moveString.compare("R") == 0) {
		this->right->rotateClockwise();
		oldRow = this->top->replaceRightRow(this->front->getRightRow());
		oldRow = this->back->replaceLeftRow(oldRow);
		oldRow = this->bottom->replaceRightRow(oldRow);
		this->front->replaceRightRow(oldRow);
	}
	else if (moveString.compare("L") == 0) {
		this->left->rotateClockwise();
		oldRow = this->front->replaceLeftRow(this->top->getLeftRow());
		oldRow = this->bottom->replaceLeftRow(oldRow);
		oldRow = this->back->replaceRightRow(oldRow);
		this->top->replaceLeftRow(oldRow);
	}
	else if (moveString.compare("T") == 0) {
	}
	else if (moveString.compare("B") == 0) {
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
	delete this->bottom;
	delete this->top;
	delete this->front;
	delete this->right;
	delete this->back;
	delete this->left;
}
