import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import React from "react";
import "../fonts/zawgyi.ttf";
import "./ZgUni.css";
import PageTitle from './PageTitle'
import { zg2uni, uni2zg } from "../Libs/rabbit";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Button from "@material-ui/core/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import ClearIcon from "@material-ui/icons/Clear";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";


const ZawgyiInputWrapper = styled.div`
  margin-bottom: 24px;
`;

const UnicodeInputWrapper = styled.div`
  margin-bottom: 24px;
`;

const styles = (theme) => ({
  flexRow: {
    flexGrow: 1,
  },
  zawgyiInput: {
    fontFamily: '"Zawgyi"',
    lineHeight: 1.6,
  },
  unicodeInput: {
    lineHeight: 1.6,
  },
  button: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});

class ZgUni extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zawgyi: "ျမန္မာစာသည္တို႔စာ",
      unicode: "မြန်မာစာသည်တို့စာ",
    };

    this.handleChangeZg = this.handleChangeZg.bind(this);
    this.handleChangeUnicode = this.handleChangeUnicode.bind(this);
    this.handleCopyZawgyi = this.handleCopyZawgyi.bind(this);
    this.handleCopyUnicode = this.handleCopyUnicode.bind(this);
    this.handleOnCopy = this.handleOnCopy.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChangeZg(event) {
    // Stretchy.resize(event.target)
    this.setState({
      zawgyi: event.target.value,
      unicode: zg2uni(event.target.value),
    });
  }

  handleChangeUnicode(event) {
    // Stretchy.resize(event.target)
    this.setState({
      unicode: event.target.value,
      zawgyi: uni2zg(event.target.value),
    });
  }

  handleClear(event) {
      this.setState({
          unicode: '',
          zawgyi: '',
      })
  }

  handleCopyZawgyi(event) {}

  handleCopyUnicode(event) {}

  handleOnCopy(event) {
      toast("Copied!", {
        icon: "📋",
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Toaster position="bottom-right" />
        <PageTitle>
          Zawgyi
          <SwapHorizIcon
            fontSize="large"
            style={{ top: "7px", position: "relative" }}
          />
          Unicode Converter
        </PageTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <ZawgyiInputWrapper>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Zawgyi"
                multiline
                minRows={8}
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
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <UnicodeInputWrapper>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Unicode"
                multiline
                minRows={8}
                InputProps={{
                  classes: {
                    input: classes.unicodeInput,
                  },
                }}
                value={this.state.unicode}
                onChange={this.handleChangeUnicode}
                variant="outlined"
              />
            </UnicodeInputWrapper>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ClearIcon />}
          onClick={this.handleClear}
        >
          Clear
        </Button>
        <CopyToClipboard text={this.state.zawgyi} onCopy={this.handleOnCopy}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<FileCopyIcon />}
            onClick={this.handleCopyZawgyi}
          >
            Copy Zawgyi
          </Button>
        </CopyToClipboard>
        <CopyToClipboard text={this.state.unicode} onCopy={this.handleOnCopy}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.handleCopyUnicode}
            startIcon={<FileCopyIcon />}
          >
            Copy Unicode
          </Button>
        </CopyToClipboard>
      </div>
    );
  }
}

export default withStyles(styles)(ZgUni);
