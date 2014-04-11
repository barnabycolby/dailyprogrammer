#ifndef CUBE_FACE_H
#define CUBE_FACE_H

#include "CubeColours.h"

using namespace std;

class CubeFace {
public:
	CubeFace(CubeColour c);

private:
	CubeColour pieces[3][3];
};

#endif
