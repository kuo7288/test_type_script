// Import stylesheets
import "./style.css";
// import * from "url";
import { PathDetail } from "./interfaces";

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

  
import React from 'react';
import DOM from 'react-dom'
import Autocomplete from 'react-autocomplete'
import { getStates, fakeRequest } from 'react-autocomplete/lib/utils'

class App extends React.Component {

  state = {
    value: '',
    unitedStates: getStates(),
  }

  requestTimer = null

  render() {
    return (
      <div>
        <h1>Async Data</h1>
        <p>
          Autocomplete works great with async data by allowing you to pass in
          items. The <code>onChange</code> event provides you the value to make
          a server request with, then change state and pass in new items, it will
          attempt to autocomplete the first one.
        </p>
        <label htmlFor="states-autocomplete">Choose a state from the US</label>
        <Autocomplete
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          value={this.state.value}
          items={this.state.unitedStates}
          getItemValue={(item) => item.name}
          onSelect={(value, item) => {
            // set the menu to only the selected item
            this.setState({ value, unitedStates: [ item ] })
            // or you could reset it to a default list again
            // this.setState({ unitedStates: getStates() })
          }}
          onChange={(event, value) => {
            this.setState({ value })
            clearTimeout(this.requestTimer)
            this.requestTimer = fakeRequest(value, (items) => {
              this.setState({ unitedStates: items })
            })
          }}
          renderMenu={children => (
            <div className="menu">
              {children}
            </div>
          )}
          renderItem={(item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={item.abbr}
            >{item.name}</div>
          )}
        />
      </div>
    )
  }
}

DOM.render(<App/>, document.getElementById('container'))

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

