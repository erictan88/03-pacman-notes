// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`0a000f00070808080808080808060100000000000000000501000909090909090005010009000900000900050100090009090009000501000000000900090005010009090909000900000100000900090000000501000909000000000005010000000000090000050100000909090900000501000009000009000005010000090000000000050100000000000000000502030303030303030304`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.floorLight0], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000f0007080808080808080806010a0a0a0a0a0a0a0a05010a090a090a09090a05010c090a090a0a090c05010a090a09090a0a0a05010a0a0a0a0a0a090a05010a09090a090a090a05010a0a090a09090a0a0501090a090a0b090a090501090a0a0a0a0a0a0905010a0a0a0909090a0905010c090a0a0a090a0c05010a0909090a09090a05010a0a0a0a0a0a0a0a0502030303030303030304`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . 2 . 2 . 2 2 . 2 
2 . 2 . 2 . . 2 . 2 
2 . 2 . 2 2 . . . 2 
2 . . . . . . 2 . 2 
2 . 2 2 . 2 . 2 . 2 
2 . . 2 . 2 2 . . 2 
2 2 . 2 . . 2 . 2 2 
2 2 . . . . . . 2 2 
2 . . . 2 2 2 . 2 2 
2 . 2 . . . 2 . . 2 
2 . 2 2 2 . 2 2 . 2 
2 . . . . . . . . 2 
. 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.floorLight0,myTiles.tile1,sprites.dungeon.collectibleRedCrystal,myTiles.tile2], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a000f0007080808080808080806010a0a0a0a0a0a0a0a05010a090a090a09090a05010c090a090a0a090c05010a090a09090a0a0a05010a0a0a0a0a0a090a05010a09090a090a090a05010a0a090a09090a0a0501090a090a0b090a090501090a0a0a0a0a0a0905010a0a0a0909090a0905010c090a0a0a090a0c05010a0909090a09090a05010a0a0a0a0a0a0a0a0502030303030303030304`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . 2 . 2 . 2 2 . 2 
2 . 2 . 2 . . 2 . 2 
2 . 2 . 2 2 . . . 2 
2 . . . . . . 2 . 2 
2 . 2 2 . 2 . 2 . 2 
2 . . 2 . 2 2 . . 2 
2 2 . 2 . . 2 . 2 2 
2 2 . . . . . . 2 2 
2 . . . 2 2 2 . 2 2 
2 . 2 . . . 2 . . 2 
2 . 2 2 2 . 2 2 . 2 
2 . . . . . . . . 2 
. 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.floorLight0,myTiles.tile1,sprites.dungeon.collectibleRedCrystal,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
