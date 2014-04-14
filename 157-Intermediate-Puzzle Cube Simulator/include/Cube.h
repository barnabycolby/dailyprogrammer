#ifndef CUBE_H
#define CUBE_H

#include "CubeColours.h"
#include "CubeFace.h"

#include <string>

class Cube {
public:
	// Constructor
	Cube();

	// Destructor
	~Cube();

	void applyMove(string move);
	CubeFace getFront();
	CubeFace getBack();
	CubeFace getLeft();
	CubeFace getRight();
	CubeFace getUp();
	CubeFace getDown();

private:
	CubeFace *down;
	CubeFace *up;
	CubeFace *front;
	CubeFace *right;
	CubeFace *back;
	CubeFace *left;

	CubeColour *flipRow(CubeColour *rowToFlip);
};

#endif
