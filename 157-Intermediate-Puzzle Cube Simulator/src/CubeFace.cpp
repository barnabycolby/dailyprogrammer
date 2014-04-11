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
