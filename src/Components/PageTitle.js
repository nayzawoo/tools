import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

export default function PageTitle(props) {
    return (
      <div className="page-title" style={{ marginBottom: "20px" }}>
          <Typography variant="h5">{props.children}</Typography>
      </div>
    );
}