#include "CubeFace.h"

#include <sstream>
#include <cstring>

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

string CubeFace::toString() {
	ostringstream stringStream;

	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			stringStream << getTextForEnum(this->pieces[i][j]);
		}
		if (i != 2) {
			stringStream << endl;
		}
	}

	return stringStream.str();
}

CubeColour* CubeFace::getDownRow() {
	return this->pieces[2];
}

CubeColour* CubeFace::getUpRow() {
	return this->pieces[0];
}

CubeColour* CubeFace::getRightRow() {
	CubeColour *rightRow = new CubeColour[3];
	CubeColour tempArray[3] = {
		this->pieces[0][2],
		this->pieces[1][2],
		this->pieces[2][2]
		};
	memcpy(rightRow, tempArray, 3*sizeof(CubeColour));
	return rightRow;
}

CubeColour* CubeFace::getLeftRow() {
	CubeColour *leftRow = new CubeColour[3];
	CubeColour tempArray[3] = {
		this->pieces[0][0],
		this->pieces[1][0],
		this->pieces[2][0]
		};
	memcpy(leftRow, tempArray, 3*sizeof(CubeColour));
	return leftRow;
}

CubeColour* CubeFace::replaceLeftRow(CubeColour newRow[]) {
	CubeColour *current = new CubeColour[3];
	CubeColour tempArray[3] = {
		this->pieces[0][0],
		this->pieces[1][0],
		this->pieces[2][0]
		};
	memcpy(current, tempArray, 3*sizeof(CubeColour));

	this->pieces[0][0] = newRow[0];
	this->pieces[1][0] = newRow[1];
	this->pieces[2][0] = newRow[2];

	return current;
}

CubeColour* CubeFace::replaceRightRow(CubeColour newRow[]) {
	CubeColour *current = new CubeColour[3];
	CubeColour tempArray[3] = {
		this->pieces[0][2],
		this->pieces[1][2],
		this->pieces[2][2]
		};
	memcpy(current, tempArray, 3*sizeof(CubeColour));

	this->pieces[0][2] = newRow[0];
	this->pieces[1][2] = newRow[1];
	this->pieces[2][2] = newRow[2];

	return current;
}

CubeColour* CubeFace::replaceUpRow(CubeColour newRow[]) {
	CubeColour *current = new CubeColour[3];
	CubeColour *tempArray = this->pieces[0];
	memcpy(current, tempArray, 3*sizeof(CubeColour));

	this->pieces[0][0] = newRow[0];
	this->pieces[0][1] = newRow[1];
	this->pieces[0][2] = newRow[2];

	return current;
}

CubeColour* CubeFace::replaceDownRow(CubeColour newRow[]) {
	CubeColour *current = new CubeColour[3];
	CubeColour *tempArray = this->pieces[2];
	memcpy(current, tempArray, 3*sizeof(CubeColour));

	this->pieces[2][0] = newRow[0];
	this->pieces[2][1] = newRow[1];
	this->pieces[2][2] = newRow[2];

	return current;
}

void CubeFace::rotateClockwise() {
	// Allows swapping
	CubeColour temp;
	CubeColour temp2;

	// Rotate corners
	temp = this->pieces[0][2];
	this->pieces[0][2] = this->pieces[0][0];
	temp2 = this->pieces[2][2];
	this->pieces[2][2] = temp;
	temp = this->pieces[2][0];
	this->pieces[2][0] = temp2;
	this->pieces[0][0] = temp;

	// Rotate edge pieces
	temp = this->pieces[1][2];
	this->pieces[1][2] = this->pieces[0][1];
	temp2 = this->pieces[2][1];
	this->pieces[2][1] = temp;
	temp = this->pieces[1][0];
	this->pieces[1][0] = temp2;
	this->pieces[0][1] = temp;
}
