import LectureTheatre from "./lectureTheatre";

export var lt1 = `
    D  A   S S S S S S S S S S S  A  D
    S S A   S S S S S S S S S S  A S S
    S S S A  S S S S S S S S S  A S S S
    S S S S A  S S S S S S S S A S S S S
    S S S S  A  S S S S S S S A S S S S
    S S S S   A  S S S S S S A S S S S
`;

lt1 = lt1
  .trim()
  .split("\n")
  .map((s) => s.replaceAll(" ", ""));
