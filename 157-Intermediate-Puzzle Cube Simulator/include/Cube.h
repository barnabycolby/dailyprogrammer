#ifndef CUBE_H
#define CUBE_H

#include "CubeColours.h"
#include "CubeFace.h"

class Cube {
public:
	// Constructor
	Cube();

	// Destructor
	~Cube();

private:
	CubeFace *bottom;
	CubeFace *top;
	CubeFace *front;
	CubeFace *right;
	CubeFace *back;
	CubeFace *left;
};

#endif
