/*global module */
(function () {
    'use strict';

    // A convenience variable for crops
    var crop = '-';

    function isValidSquare(field, firstCropRow, firstCropColumn, size) {
        var i, j;

        // First we check that the bottom right crop actually exists
        if (firstCropRow + size > field.length || firstCropColumn + size > field.length) {
            return false;
        }

        for (i = firstCropRow; i < firstCropRow + size && i < field.length; i += 1) {
            for (j = firstCropColumn; j < firstCropColumn + size && j < field.length; j += 1) {
                if (field[i][j] !== crop) {
                    return false;
                }
            }
        }

        return true;
    }

    function getLargestExpansion(field, startRow, startColumn, startSize) {
        var largestCropSquare, largestCropSquareFound, bottomRightRow, bottomRightColumn, i;

        largestCropSquareFound = false;
        for (largestCropSquare = startSize; !largestCropSquareFound; largestCropSquare += 1) {
            // Before attempting to access the squares, we must see if the indexes are valid
            // We can do this by checking the bottom right square
            bottomRightRow = startRow + largestCropSquare;
            bottomRightColumn = startColumn + largestCropSquare;
            if (bottomRightRow >= field.length || bottomRightColumn >= field.length) {
                largestCropSquareFound = true;
            } else {
                // First we check the vertical squares
                for (i = startRow; i <= bottomRightRow; i += 1) {
                    if (field[i][bottomRightColumn] !== crop) {
                        largestCropSquareFound = true;
                    }
                }

                // Next we check the horizontal squares
                if (!largestCropSquareFound) {
                    for (i = startColumn; i <= bottomRightColumn; i += 1) {
                        if (field[bottomRightRow][i] !== crop) {
                            largestCropSquareFound = true;
                        }
                    }
                }
            }
        }

        return largestCropSquare - 1;
    }

    module.exports = function (fieldString) {
        var gridSize, field, firstCropRow, firstCropColumn, i, j, rowStart, largestCropSquare, cropSequenceString, possibleBeatingSquare, firstUncheckedColumn, nextFirstUncheckedColumn;

        // First we need to calculate the grid size
        gridSize = Math.sqrt(fieldString.length);

        // Representing the square as a grid will make the problem easier to solve
        field = new Array(gridSize);
        for (i = 0; i < (fieldString.length / gridSize); i += 1) {
            rowStart = i * gridSize;
            field[i] = fieldString.substring(rowStart, rowStart + gridSize);
        }

        // The smallest square we can make is a single crop, so we check each row until we find the first crop
        firstCropColumn = -1;
        for (i = 0; i < gridSize && firstCropColumn === -1; i += 1) {
            firstCropColumn = field[i].indexOf(crop);
        }
        if (firstCropColumn === -1) {
            return 0;
        }
        firstCropRow = i - 1;

        // Next we expand the crop square until it is as large as it can be
        largestCropSquare = getLargestExpansion(field, firstCropRow, firstCropColumn, 1);

        firstUncheckedColumn = firstCropColumn + largestCropSquare;
        for (i = firstCropRow; i < gridSize; i += 1) {
            // We check the row to see if there is a sequence of crops long enough to form a square large enough to beat the record
            cropSequenceString = "";
            for (j = 0; j < largestCropSquare + 1; j += 1) {
                cropSequenceString += crop;
            }
            possibleBeatingSquare = field[i].indexOf(cropSequenceString, firstUncheckedColumn);

            // If we found a possible beating square, we need to check whether it actually is a beating square
            if (possibleBeatingSquare !== -1) {
                if (isValidSquare(field, i, possibleBeatingSquare, cropSequenceString.length)) {
                    // Expand the square to find its largest form
                    largestCropSquare = getLargestExpansion(field, i, possibleBeatingSquare, cropSequenceString.length);
                }

                // We may not have exhausted the current row, so we decrement i so that the next iteration deals with the same row
                // And we also set the value of firstUncheckedColumn appropriately
                nextFirstUncheckedColumn = possibleBeatingSquare + 1;
                if (nextFirstUncheckedColumn < gridSize) {
                    i -= 1;
                    firstUncheckedColumn = nextFirstUncheckedColumn;
                } else {
                    firstUncheckedColumn = 0;
                }
            } else {
                firstUncheckedColumn = 0;
            }
        }

        return largestCropSquare * largestCropSquare;
    };
}());
