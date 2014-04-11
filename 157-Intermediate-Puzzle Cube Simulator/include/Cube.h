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

private:
	CubeFace *bottom;
	CubeFace *top;
	CubeFace *front;
	CubeFace *right;
	CubeFace *back;
	CubeFace *left;
};

#endif
