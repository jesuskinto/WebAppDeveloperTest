import {
  Button,
  Stack,
  Card,
  Typography,
  TextField,
  CardContent,
  Alert,
} from "@mui/material";

export const AppForm = ({
  postTitle,
  handlePostTitleChange,
  postBody,
  handlePostBodyChange,
  handleAddPost,
  creatingPost,
  errorUploading,
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Form
        </Typography>
        <Stack spacing={2}>
          <TextField
            size="small"
            label="Title"
            variant="outlined"
            value={postTitle}
            onChange={(e) => handlePostTitleChange(e)}
          />
          <TextField
            size="small"
            label="Body"
            variant="outlined"
            value={postBody}
            onChange={(e) => handlePostBodyChange(e)}
          />
          <Button
            variant="contained"
            disabled={!postTitle || !postBody || creatingPost}
            onClick={handleAddPost}
          >
            Add
          </Button>
          {errorUploading && (
            <Alert severity="error">
              An error occurred creating the post. Try again!
            </Alert>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
