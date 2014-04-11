#ifndef CUBE_COLOURS_H
#define CUBE_COLOURS_H

const char* getTextForEnum(int);

enum CubeColour { w, y, r, g, o, b };
static const char* CubeColourStrings[] = { "w", "y", "r", "g", "o", "b" };

const char* getTextForEnum(int enumVal) {
	return CubeColourStrings[enumVal];
}

#endif
