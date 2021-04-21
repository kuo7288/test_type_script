// Import stylesheets
import "./style.css";
// import * from "url";
import { PathDetail } from "./interfaces";

import React from "react";
import ReactDOM from "react-dom";
import App from "./example";

const myUrl = new URL("sandra://x/y/z.py?r=preRR&test=3");
const query = myUrl.searchParams;
const parama = new URLSearchParams(myUrl.search);
console.log(`test ${parama.get("test")}`);
console.log(`r ${parama.get("r")}`);

interface Tags {
  PROD: string;
  APPROVED: string;
  HEAD: string;
}

interface Res {
  tags: {
    [key: string]: Tags;
  };
}

const x = JSON.stringify({
  tags: { PROD: "1.1", HEAD: "1.2", APPROVED: "1.4" }
});

const b: Res = JSON.parse(x);
console.log(`${b.tags}`);

interface TreeData {
  path: string;
  projects: string[];
  trains: string[];
}

interface TestData {
  selected?: string;
  items: string[];
  ready: boolean;
}

const testListX: TestData[] = [
  { selected: "test", items: ["123"], ready: false }
];

const path = "path";
const path2 = "path2";
const paths = [path, path2];
const detail: PathDetail = {
  path: { projects: ["project.x"], trains: ["train.x"] },
  path2: {
    projects: ["project.y"],
    trains: ["train.x"]
  }
};

const data: TreeData[] = paths.map(path => {
  return {
    path: path,
    projects: detail[path].projects,
    trains: detail[path].trains
  };
});
console.log(detail[path]);

const emptyList = [];
console.log(`Empty list ${emptyList.length > 0 ? emptyList[0] : ""}`);

// const testList = ['test','test', 'test2']
const testList = data.map(item => item.projects);
const projectList: string[] = [].concat(...data.map(item => item.projects));
const mySet = new Set(projectList);
const value = mySet.values().next().value;
console.log("value", value);
// mySet.add('test').add('test').add('test2')
console.log("test", projectList[0]);
console.log("set", `${Array.from(mySet).join(", ")}`);
console.log("test");
console.log(`AASSDASD ${testList}`);
console.log(`AASSDASD ${mySet.values().next()}`);

//ReactDOM.render(<App />, document.getElementById("app"));
