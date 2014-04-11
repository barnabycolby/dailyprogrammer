#include "Cube.h"

#include <iostream>
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

Cube::~Cube() {
	// Free the memory containing the cube
	delete this->bottom;
	delete this->top;
	delete this->front;
	delete this->right;
	delete this->back;
	delete this->left;
}
