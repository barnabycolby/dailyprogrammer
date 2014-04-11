#include "CubeFace.h"

#include <iostream>

using namespace std;

CubeFace::CubeFace(CubeColour c)
{
	// Initialise the array
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			this->pieces[i][j] = c;
		}
	}
}

void CubeFace::rotateClockwise() {
	CubeColour oldPiece = this->pieces[0][0];
	CubeColour oldPiece2 = this->pieces[1][0];

	this->pieces[0][0] = oldPiece2;
	oldPiece2 = this->pieces[0][1];
	this->pieces[0][1] = oldPiece;
	oldPiece = this->pieces[0][2];
	this->pieces[0][2] = oldPiece2;
	oldPiece2 = this->pieces[1][2];
	this->pieces[1][2] = oldPiece;
	oldPiece = this->pieces[2][2];
	this->pieces[2][2] = oldPiece2;
	oldPiece2 = this->pieces[2][1];
	this->pieces[2][1] = oldPiece;
	oldPiece = this->pieces[2][0];
	this->pieces[2][0] = oldPiece2;
	oldPiece2 = this->pieces[1][0];
	this->pieces[1][0] = oldPiece;
}
