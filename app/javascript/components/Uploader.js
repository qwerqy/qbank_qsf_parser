import React from "react";
import { Form, Button } from "semantic-ui-react";
class Uploader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form
          as="form"
          action="/upload"
          method="POST"
          encType="multipart/form-data"
        >
          <input
            type="hidden"
            name="authenticity_token"
            value={this.props.auth}
          />
          <Form.Field>
            <label>Upload QSF file</label>
            <input type="file" name="qsf" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default Uploader;
