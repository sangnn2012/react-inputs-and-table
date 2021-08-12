interface Load {
  RoomName: string
  LoadName: string;
  CircuitNumber: string;
  FixtureType: string;
  LoadType: string;
  FixtureQuantity: number;
  FixtureWatts: number;
  IsDim: boolean;
  LowerLimit: number;
  UpperLimit: number;
}

export default Load;
