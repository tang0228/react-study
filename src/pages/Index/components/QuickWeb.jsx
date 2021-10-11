import React, { Fragment } from "react";
import { Dialog, Button } from "element-react";
import "./quickWeb.css";
import images from "../../../common/datas";

export default class QuickWeb extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
    };
  }

  render() {
    const as = images.map((ele, index) => (
      <div
        key={index}
        className="item"
        onClick={() => {
          this.setState({
            dialogVisible: true,
          });
        }}
      >
        <img src={ele.image} alt="" />
        <span>{ele.title}</span>
      </div>
    ));
    return (
      <Fragment>
        <div className="quick-web-container">{as}</div>
        <Dialog
          title="web说明"
          visible={this.state.dialogVisible}
          onCancel={() => this.setState({ dialogVisible: false })}
        >
          <Dialog.Body>123</Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => this.setState({ dialogVisible: false })}>
              取消
            </Button>
            <Button
              type="primary"
              onClick={() => this.setState({ dialogVisible: false })}
            >
              确定
            </Button>
          </Dialog.Footer>
        </Dialog>
      </Fragment>
    );
  }
}
