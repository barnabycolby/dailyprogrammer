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
	// Seed the loop
	CubeColour oldPiece = this->pieces[0][0];
	CubeColour oldPiece2 = this->pieces[1][0];

	int currenti = 0;
	int currentj = 0;
	int nexti = currenti;
	int nextj = currentj;
	for (int c = 0; c < 4; c++) {
		this->pieces[currenti][currentj] = oldPiece2;
		
		calculateNextRotationPiece(&nexti, &nextj);
		oldPiece2 = this->pieces[nexti][nextj];
		this->pieces[nexti][nextj] = oldPiece;

		calculateNextRotationPiece(&currenti, &currentj);
		oldPiece = this->pieces[currenti][currentj];
	}
}

void CubeFace::calculateNextRotationPiece(int *i, int *j) {
	if (*i == 1) {
		if (*j == 0) {
			(*i)--;
			return;
		} else {
			(*i)++;
			return;
		}
	}
	else if (*j == 1) {
		if (*i == 0) {
			(*j)++;
			return;
		} else {
			(*j)--;
			return;
		}
	}
	else {
		if (*i == 0 && *j == 0) {
			*j = 1;
			return;
		} else if (*i == 0 && *j == 2) {
			*i = 1;
			return;
		} else if (*i == 2 && *j == 2) {
			*j = 1;
			return;
		} else if (*i == 2 && *j == 0) {
			*i = 1;
			return;
		}
	}
}
