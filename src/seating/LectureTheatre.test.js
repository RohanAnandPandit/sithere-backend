import { lt1 } from "./seatingPlans";
import LectureTheatre from "./lectureTheatre";
import Student from "./Student";

const lectureTheatre = new LectureTheatre(lt1);
lectureTheatre.allocate([
  new Student({ id: "rp519" }),
  new Student({ id: "rp619" }),
  new Student({ id: "rp719" }),
]);
console.log(lectureTheatre.toString());
