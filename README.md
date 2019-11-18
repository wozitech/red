Tech Challenge - Martian Robots

# Overview
* Grid - is a simple rectangle having x,y with (0,0) bottom left.
* Robot - is an entity having a "starting position" (must be on the grid), and a "current position" being the result of a sequence of move instructions being valid until the instruction results in the robot falling off grid
* Robots - is a set of Robots (initial set empty), having a current robot against which move instructions are made against, until the "current robot" falls "off grid", unless any of the previous Robots have the same "off grid scent"

# To test
Simple test - atypical of CI/CD
`npm test`

Coverage - unit test quality check
`npm run coverage`