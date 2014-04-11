#ifndef CUBE_FACE_H
#define CUBE_FACE_H

#include "CubeColours.h"

#include <string>

using namespace std;

class CubeFace {
public:
	CubeFace(CubeColour c);

	void rotateClockwise();
	CubeColour* replaceLeftRow(CubeColour newRow[]);
	CubeColour* replaceRightRow(CubeColour newRow[]);
	CubeColour* replaceTopRow(CubeColour newRow[]);
	CubeColour* replaceBottomRow(CubeColour newRow[]);
	CubeColour* getBottomRow();
	CubeColour* getRightRow();

	string toString();

private:
	CubeColour pieces[3][3];

	void calculateNextRotationPiece(int *i, int *j);
};

#endif
