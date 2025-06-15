import { ContentDataType } from "../../../../Backend/model/content_model";
import PreRunningMobilityTraining from "../code/Pre Running Mobility Training";
import Stretch from "../code/Stretch";
import WarmUp from "../code/Warm Up";

const workoutRoutineContent: ContentDataType = {
  about: {
    subCategory: "Fitness",
    name: "Complete Daily Workout Routine",
    description:
      "A daily workout plan to boost fitness, endurance, and flexibility",
    img: "workout.jpeg",
  },
  route: [
    {
      heading: "Warm Up",
      topic: "Pre Running Mobility Training",
      page: <PreRunningMobilityTraining />,
    },
    {
      topic: "Warm Up",
      page: <WarmUp />,
    },
    {
      heading: "Stretch",
      topic: "Stretch",
      page: <Stretch />,
    },
  ],
};

export default workoutRoutineContent;
