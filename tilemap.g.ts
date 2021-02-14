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
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004000000000000000000000000000004010001010001040100010100010100010200000000000000000000040000000401000001010101010501010101000001010001010101000000000001010100010000000000000001000100050000000401000101010104000000000101010001010001010101010100010101010100010105010101010004000000010101000100000005000000010001000500000000000101010101000005050501010101000001010101010101050101010101010000000404040404000000000000000004010101010101010105010101010101010100000000000000000000040404040101030101010101010101010101010401`, img`
. . . . . . . . . . . . . . . . 
2 . 2 2 . 2 . 2 . 2 2 . 2 2 . 2 
. . . . . . . . . . . . . . . . 
2 . . 2 2 2 2 2 . 2 2 2 2 . . 2 
2 . 2 2 2 2 . . . . . 2 2 2 . 2 
. . . . . . . 2 . 2 . . . . . . 
2 . 2 2 2 2 . . . . . 2 2 2 . 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
2 . 2 2 2 2 . . . . . 2 2 2 . 2 
. . . . . . . 2 . 2 . . . . . . 
. 2 2 2 2 2 . . . . . 2 2 2 2 . 
. 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
