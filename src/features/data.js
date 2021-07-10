const data = {
  width: 8,
  height: 8,
  points: [
    [-8, 7, 0, 2, 8, 1, 0, 8],
    [7, 3, 4, -10, -5, -10, 0, 4],
    [-8, 1, -1, -10, -6, -6, 7, -10],
    [-1, -6, -4, 2, 1, -7, 10, 10],
    [9, 4, -4, 10, -10, 7, 3, 7],
    [-5, -10, -3, 9, 6, 9, -10, 4],
    [-3, 0, 7, 10, -2, -2, 6, -9],
    [9, 9, 2, -1, -1, -5, 6, 9],
  ],
  tiled: [
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 0, 2, 2],
    [2, 2, 2, 2, 2, 2, 1, 0],
    [1, 0, 2, 2, 2, 2, 2, 2],
    [2, 2, 1, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
  ],
  startedAtUnixTime: 123,
  turnTime: 10,
  totalTurns: 5,
  teams: {
    t0: {
      teamID: 0,
      agents: {
        a0: {
          agentId: "a0",
          x: 1,
          y: 4,
        },
        a1: {
          agentId: "a1",
          x: 5,
          y: 2,
        },
        a2: {
          agentId: "a2",
          x: 7,
          y: 3,
        },
      },
      tilePoint: 0,
      areaPoint: 0,
      teamColor: "red",
    },
    t1: {
      teamID: 1,
      agents: {
        b0: {
          agentId: "b0",
          x: 6,
          y: 3,
        },
        b1: {
          agentId: "b1",
          x: 2,
          y: 5,
        },
        b2: {
          agentId: "b2",
          x: 0,
          y: 4,
        },
      },
      tilePoint: 0,
      areaPoint: 0,
      teamColor: "blue",
    },
  },
}

export default data
