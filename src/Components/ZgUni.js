// import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import React from "react";
import "../fonts/zawgyi.ttf";
import "./ZgUni.css";
import { zg2uni, uni2zg } from "../Libs/Rabbit";

const ZawgyiInputWrapper = styled.div`
  margin-bottom: 24px;
`;

const styles = (theme) => ({
  zawgyiInput: {
    fontFamily: '"Zawgyi"',
  },
});

class ZgUni extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zawgyi: "",
      unicode: "",
    };

    this.handleChangeZg = this.handleChangeZg.bind(this);
    this.handleChangeUnicode = this.handleChangeUnicode.bind(this);
  }

  handleChangeZg(event) {
    this.setState({
      zawgyi: event.target.value,
      unicode: zg2uni(event.target.value),
    });
    // console.log(event.target.value);
  }

  handleChangeUnicode(event) {
    this.setState({
      unicode: event.target.value,
      zawgyi: uni2zg(event.target.value),
    });
    //   console.log(event.target.value);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Zawgyi - Unicode Converter
        </Typography>
        <ZawgyiInputWrapper>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Zawgyi"
            multiline
            rows={6}
            InputProps={{
              classes: {
                input: classes.zawgyiInput,
              },
            }}
            value={this.state.zawgyi}
            onChange={this.handleChangeZg}
            variant="outlined"
          />
        </ZawgyiInputWrapper>

        <div>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Unicode"
            multiline
            rows={6}
            value={this.state.unicode}
            onChange={this.handleChangeUnicode}
            variant="outlined"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ZgUni);
