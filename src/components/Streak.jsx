import DateBox from "./streak/DateBox";
import MainBox from "./streak/MainBox";
import { useState } from "react";

export default function Streak() {
  let myChallenges = [
    {
      id: "challenge-001",
      name: "45-Day Productivity Challenge",
      description: "Build long-lasting productivity habits over 45 days.",
      totalDays: 45,
      startingDate: "2025-06-01",
      completedDays: 30,
      tasks: [
        { id: 0, title: "Wake Up Early Morning" },
        { id: 1, title: "Work on Confidence" },
        { id: 2, title: "Work on ToDo App" },
        { id: 3, title: "Stop Scrolling Instagram" },
      ],
      progress: [
  {
    day: 1,
    date: "2025-06-01",
    message: "Great start! Completed most of the tasks.",
    taskFeedback: [
      { taskId: 0, level: 3 },
      { taskId: 1, level: 2 },
      { taskId: 2, level: 3 },
      { taskId: 3, level: 1 },
    ],
  },
  {
    day: 2,
    date: "2025-06-02",
    message: "Lazy day, completed few tasks.",
    taskFeedback: [
      { taskId: 0, level: 2 },
      { taskId: 1, level: 0 },
      { taskId: 2, level: 1 },
      { taskId: 3, level: 0 },
    ],
  },
  {
    day: 3,
    date: "2025-06-03",
    message: "Productive day with high energy!",
    taskFeedback: [
      { taskId: 0, level: 3 },
      { taskId: 1, level: 3 },
      { taskId: 2, level: 3 },
      { taskId: 3, level: 2 },
    ],
  },
  {
    day: 4,
    date: "2025-06-04",
    message: "Maintained consistency.",
    taskFeedback: [
      { taskId: 0, level: 2 },
      { taskId: 1, level: 2 },
      { taskId: 2, level: 3 },
      { taskId: 3, level: 1 },
    ],
  },
  {
    day: 5,
    date: "2025-06-05",
    message: "Felt distracted but tried my best.",
    taskFeedback: [
      { taskId: 0, level: 1 },
      { taskId: 1, level: 1 },
      { taskId: 2, level: 2 },
      { taskId: 3, level: 1 },
    ],
  },
  {
    day: 6,
    date: "2025-06-06",
    message: "Focused and determined.",
    taskFeedback: [
      { taskId: 0, level: 3 },
      { taskId: 1, level: 3 },
      { taskId: 2, level: 3 },
      { taskId: 3, level: 2 },
    ],
  },
  {
    day: 7,
    date: "2025-06-07",
    message: "Struggled with motivation.",
    taskFeedback: [
      { taskId: 0, level: 1 },
      { taskId: 1, level: 0 },
      { taskId: 2, level: 1 },
      { taskId: 3, level: 0 },
    ],
  },
  {
    day: 8,
    date: "2025-06-08",
    message: "Back on track with strong focus.",
    taskFeedback: [
      { taskId: 0, level: 3 },
      { taskId: 1, level: 2 },
      { taskId: 2, level: 3 },
      { taskId: 3, level: 3 },
    ],
  },
  {
    day: 9,
    date: "2025-06-09",
    message: "Maintaining progress steadily.",
    taskFeedback: [
      { taskId: 0, level: 2 },
      { taskId: 1, level: 1 },
      { taskId: 2, level: 2 },
      { taskId: 3, level: 1 },
    ],
  },
  {
    day: 10,
    date: "2025-06-10",
    message: "A near perfect day!",
    taskFeedback: [
      { taskId: 0, level: 3 },
      { taskId: 1, level: 3 },
      { taskId: 2, level: 3 },
      { taskId: 3, level: 3 },
    ],
  },
  {
    day: 11,
    date: "2025-06-11",
    message: "Minimal tasks done today.",
    taskFeedback: [
      { taskId: 0, level: 1 },
      { taskId: 1, level: 1 },
      { taskId: 2, level: 0 },
      { taskId: 3, level: 0 },
    ],
  },
  {
    day: 12,
    date: "2025-06-12",
    message: "Focus returning slowly.",
    taskFeedback: [
      { taskId: 0, level: 2 },
      { taskId: 1, level: 2 },
      { taskId: 2, level: 2 },
      { taskId: 3, level: 2 },
    ],
  },
  {
    day: 13,
    date: "2025-06-13",
    message: "Energy low but some progress made.",
    taskFeedback: [
      { taskId: 0, level: 1 },
      { taskId: 1, level: 0 },
      { taskId: 2, level: 1 },
      { taskId: 3, level: 2 },
    ],
  },
  {
    day: 14,
    date: "2025-06-14",
    message: "Feeling confident and clear.",
    taskFeedback: [
      { taskId: 0, level: 3 },
      { taskId: 1, level: 3 },
      { taskId: 2, level: 3 },
      { taskId: 3, level: 3 },
    ],
  },
  {
    day: 15,
    date: "2025-06-15",
    message: "Great momentum building up.",
    taskFeedback: [
      { taskId: 0, level: 3 },
      { taskId: 1, level: 2 },
      { taskId: 2, level: 3 },
      { taskId: 3, level: 2 },
    ],
  },
],

      settings: {
        notifications: true,
        reminderTime: "07:00",
        visibility: "private",
      },
      tags: ["productivity", "habit", "personal"],
    },
  ];

  let streak = {
    progress: {},
    daysProgress: [
      { date: new Date("2025-05-11"), progress: 89 },
      { date: new Date("2025-05-12"), progress: 32 },
      { date: new Date("2025-05-13"), progress: 42 },
      { date: new Date("2025-05-14"), progress: 100 },
      { date: new Date("2025-05-15"), progress: 58 },
      { date: new Date("2025-05-16"), progress: 91 },
      { date: new Date("2025-05-17"), progress: 64 },
      { date: new Date("2025-05-18"), progress: 2 },
      { date: new Date("2025-05-19"), progress: 47 },
      { date: new Date("2025-05-20"), progress: 83 },
      { date: new Date("2025-05-21"), progress: 37 },
      { date: new Date("2025-05-22"), progress: 55 },
      { date: new Date("2025-05-23"), progress: 69 },
      { date: new Date("2025-05-24"), progress: 94 },
      { date: new Date("2025-05-25"), progress: 11 },
      { date: new Date("2025-05-26"), progress: 78 },
      { date: new Date("2025-05-27"), progress: 29 },
      { date: new Date("2025-05-28"), progress: 62 },
      { date: new Date("2025-05-29"), progress: 88 },
      { date: new Date("2025-05-30"), progress: 34 },
      { date: new Date("2025-05-31"), progress: 70 },
    ],
  };

  const loremArray = [
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga Et harum quidem rerum facilis est et expedita distinctio Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    "Omnis voluptas assumenda est omnis dolor repellendus Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat lorem ipsum dolor sit amet consectetur.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];

  const [currentChallenge, setCurrentChallenge] = useState(myChallenges[0]);
  const [data, setData] = useState("No Data Found......");

  const changeDate = (index) => {
    setData(loremArray[index]);
  };

  return (
    <div
      className="row m-0 p-0 border border-danger"
      style={{ height: "85vh", width: "100%" }}
    >
      <DateBox progress={currentChallenge.progress} changeDate={changeDate} />

      <MainBox challenge={myChallenges[0]} />
    </div>
  );
}
