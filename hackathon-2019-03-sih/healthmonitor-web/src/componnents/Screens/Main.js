import React, { Component } from "react";
import { Tab, Icon } from "semantic-ui-react";
import Monitor from "./Monitor";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.panes = [
      {
        menuItem: {
          key: "+",
          icon: (
            <div
              onClick={() => {
                this.addTab();
              }}
            >
              <Icon name="add" />
            </div>
          )
        },
        render: () => <div />
      }
    ];
  }
  componentDidMount() {
    this.addTab();
  }
  addTab() {
    let key = new Date().getTime().toString(36);
    this.panes.splice(this.panes.length - 2, 0, {
      menuItem: {
        key: key,
        icon: (
          <div
            onClick={() => {
              let foundIndex = this.panes.find(i => i.menuItem.key === key);
              this.panes = this.panes.filter(i => i.menuItem.key !== key);
              this.setState({ activeIndex: foundIndex > 0 ? foundIndex - 1 : 0 });
            }}
          >
            <Icon name="cancel" />
          </div>
        ),
        content: "New Tab"
      },
      render: () => (
        <Tab.Pane active={this.panes[this.state.activeIndex].menuItem.key === key}>
          <Monitor/>
        </Tab.Pane>
      )
    });
    this.setState({
      activeIndex: this.panes.length - 2
    });
    console.log(this.panes);
  }
  render() {
    return (
      <div>
        <Tab
          renderActiveOnly={true}
          activeIndex={this.panes.length > 0 ? this.state.activeIndex : null}
          ref={ref => (this.tabhandler = ref)}
          onTabChange={(ev, data) => {
            console.log(data.panes[data.activeIndex].menuItem.key);
            if (data.activeIndex === this.panes.length - 1) {
              // this.addTab();
            } else {
              this.setState({ activeIndex: data.activeIndex });
            }
          }}
          panes={this.panes ? this.panes : []}
        />
      </div>
    );
  }
}
