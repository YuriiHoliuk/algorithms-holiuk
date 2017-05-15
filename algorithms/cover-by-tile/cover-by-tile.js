'use strict';

function coverByTile (height, width, tileHeight) {
  
  let rowTileAmount = Math.ceil(width / tileHeight);
  let columnTileAmount = Math.ceil(height / tileHeight);

  return rowTileAmount * columnTileAmount;
};

module.exports = coverByTile;